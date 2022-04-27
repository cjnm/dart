import IFileServices from '../type';


export default class SupabaseFileServices implements IFileServices {
  constructor() { }

  upload = (file: any) => {
    console.log('SupabaseFileServices.upload');

  }
}
