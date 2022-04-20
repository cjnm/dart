import FileServices from './type';
import StorageProviders from '../types/StorageProviders';
import S3FileServices from './s3';
import SupabaseFileServices from './supabase';

export default class StorageProvider implements FileServices {
  private _storageProvider: any;
  constructor(storageProvider: StorageProviders) {
    // if (!storageProvider) {
    //   throw new Error('Initalization error.');
    // }

    if (storageProvider === StorageProviders.supabase) {
      this._storageProvider = new SupabaseFileServices();
    } else if (storageProvider === StorageProviders.s3) {
      this._storageProvider = new S3FileServices();
    }

  }

  upload = (file: any) => {
    this._storageProvider.upload(file);
  }

}
