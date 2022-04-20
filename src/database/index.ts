import DatabaseServices from './type';
import DBProviders from '../types/DBProviders';
import SupabaseDatabaseServices from './supabase';
import MySQLDatabaseServices from './mysql';

export default class DBProvider implements DatabaseServices {
  private _dbProvider: any;

  constructor(dbProvider: DBProviders) {
    // if (!dbProvider) {
    //   throw new Error('Initalization error.');
    // }

    if (dbProvider === DBProviders.supabase) {
      this._dbProvider = new SupabaseDatabaseServices();
    } else if (dbProvider === DBProviders.mysql) {
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

