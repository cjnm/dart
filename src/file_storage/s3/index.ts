import FileServices from '../type';

export default class S3FileServices implements FileServices {
  constructor() { }

  upload = (file: any) => {
    console.log('S3FileServices.upload');
  }
}