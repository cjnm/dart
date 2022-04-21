import SDKServices from "./src/types/SDKServices";
import DBProviderTypes from "./src/types/DBProviderTypes";
import StorageProviderTypes from "./src/types/StorageProviderTypes";
import DBProvider from "./src/database";
import StorageProvider from "./src/file_storage";

export { DBProviderTypes, StorageProviderTypes };
export default class FileSDK implements SDKServices {
  private storage;
  private db;

  constructor(config: { dbProvider: DBProviderTypes, storageProvider: StorageProviderTypes }) {
    const { dbProvider, storageProvider } = config;

    // if (!dbProvider || !storageProvider) {
    //   throw new Error('Initalization error.');
    // }

    this.db = new DBProvider(dbProvider);
    this.storage = new StorageProvider(storageProvider);
  }

  upload = (file: any) => {
    this.db.save(file);
    this.storage.upload(file);
  }

  download = (filename: string) => {
    this.db.getURL(filename);
  }
}
