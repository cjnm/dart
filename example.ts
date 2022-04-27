import FileSDK, { DBProviderTypes, StorageProviderTypes } from './index';

console.log('start');
let x = new FileSDK({
  dbProvider: DBProviderTypes.dynamodb,
  storageProvider: 's3',
  dbProviderConfig: {},
  storageProviderConfig: {}
});

x.download('');
x.upload('');
