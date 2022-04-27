import IFileServices from '../type';

export default class S3FileServices implements IFileServices {
  constructor() { }

  upload = (file: any) => {
    console.log('S3FileServices.upload');
  }
}