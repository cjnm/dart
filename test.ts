import FileSDK from './index';
import DBProviders from "./src/types/DBProviders";
import StorageProviders from "./src/types/StorageProviders";

console.log('start');
let x = new FileSDK({
  dbProvider: DBProviders.supabase,
  storageProvider: StorageProviders.s3
});

x.download('');
x.upload('');