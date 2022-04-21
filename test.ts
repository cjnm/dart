import FileSDK, { DBProviderTypes, StorageProviderTypes } from './index';

console.log('start');
let x = new FileSDK({
  dbProvider: DBProviderTypes.supabase,
  storageProvider: StorageProviderTypes.s3
});

x.download('');
x.upload('');