import FileServices from '../type';


export default class SupabaseFileServices implements FileServices {
  constructor() { }

  upload = (file: any) => {
    console.log('SupabaseFileServices.upload');

  }
}