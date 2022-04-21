import FileSDK, { DBProviderTypes, StorageProviderTypes } from './index';

console.log('start');
let x = new FileSDK({
  dbProvider: 'mysql',
  storageProvider: 's3',
});

x.download('');
x.upload('');
