import IDatabaseServices from './type';
import DBProviderTypes from '../types/DBProviderTypes';
import SupabaseDatabaseServices from './supabase';
import MySQLDatabaseServices from './mysql';
import DynamoDBDatabaseServices from './dynamoDB';

export default class DBProvider implements IDatabaseServices {
  private _dbProvider: any;

  constructor(dbProvider: string) {
    if (!(<any>Object).values(DBProviderTypes).includes(dbProvider)) {
      throw new Error(`DBProvider: ${dbProvider} unavailable`);
    }

    if (dbProvider === DBProviderTypes.supabase) {
      this._dbProvider = new SupabaseDatabaseServices();
    } else if (dbProvider === DBProviderTypes.mysql) {
      this._dbProvider = new MySQLDatabaseServices();
    } else if(dbProvider === DBProviderTypes.dynamodb) {
      this._dbProvider = new DynamoDBDatabaseServices();
    }
  }

  save = (file: any) => {
    this._dbProvider.save(file)
  }

  getURL = (filename: string) => {
    this._dbProvider.getURL(filename);
  }

}

