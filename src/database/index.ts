import DatabaseServices from './type';
import DBProviderTypes from '../types/DBProviderTypes';
import SupabaseDatabaseServices from './supabase';
import MySQLDatabaseServices from './mysql';

export default class DBProvider implements DatabaseServices {
  private _dbProvider: any;

  constructor(dbProvider: DBProviderTypes) {
    // if (!dbProvider) {
    //   throw new Error('Initalization error.');
    // }

    if (dbProvider === DBProviderTypes.supabase) {
      this._dbProvider = new SupabaseDatabaseServices();
    } else if (dbProvider === DBProviderTypes.mysql) {
      this._dbProvider = new MySQLDatabaseServices();
    }
  }

  save = (file: any) => {
    this._dbProvider.save(file)
  }

  getURL = (filename: string) => {
    this._dbProvider.getURL(filename);
  }

}

