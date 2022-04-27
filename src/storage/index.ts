import IFileServices from './type';
import StorageProviderTypes from '../types/StorageProviderTypes';
import S3FileServices from './s3';
import SupabaseFileServices from './supabase';

export default class StorageProvider implements IFileServices {
  private _storageProvider: any;
  constructor(storageProvider: string) {
    if (!(<any>Object).values(StorageProviderTypes).includes(storageProvider)) {
      throw new Error(`StorageProvider: ${storageProvider} unavailable`);
    }

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
