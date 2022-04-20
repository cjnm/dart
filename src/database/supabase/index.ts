import DatabaseServices from '../type';

export default class SupabaseDatabaseServices implements DatabaseServices {
  constructor() { }

  save = (file: any) => {
    console.log('SupabaseDatabaseServices.save');
  }

  getURL = (filename: string) => {
    console.log('SupabaseDatabaseServices.getURL');
  }
}
