import IDatabaseServices from '../type';

export default class MySQLDatabaseServices implements IDatabaseServices {
  constructor() { }

  save = (file: any) => {
    console.log('MySQLDatabaseServices.save');
  }

  getURL = (filename: string) => {
    console.log('MySQLDatabaseServices.getURL');
  }
}
