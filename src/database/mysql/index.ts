import DatabaseServices from '../type';

export default class MySQLDatabaseServices implements DatabaseServices {
  constructor() { }

  save = (file: any) => {
    console.log('MySQLDatabaseServices.save');
  }

  getURL = (filename: string) => {
    console.log('MySQLDatabaseServices.getURL');
  }
}
