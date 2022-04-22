import IDatabaseServices from '../type';

export default class SupabaseDatabaseServices implements IDatabaseServices {
  constructor() { }

  save = (file: any) => {
    console.log('SupabaseDatabaseServices.save');
  }

  getURL = (filename: string) => {
    console.log('SupabaseDatabaseServices.getURL');
  }
}
