import FileServices from './type';
import StorageProviderTypes from '../types/StorageProviderTypes';
import S3FileServices from './s3';
import SupabaseFileServices from './supabase';

export default class StorageProvider implements FileServices {
  private _storageProvider: any;
  constructor(storageProvider: StorageProviderTypes) {
    // if (!storageProvider) {
    //   throw new Error('Initalization error.');
    // }

    if (storageProvider === StorageProviderTypes.supabase) {
      this._storageProvider = new SupabaseFileServices();
    } else if (storageProvider === StorageProviderTypes.s3) {
      this._storageProvider = new S3FileServices();
    }

  }

  upload = (file: any) => {
    this._storageProvider.upload(file);
  }

}
