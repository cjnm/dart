import SDKServices from "./src/types/SDKServices";
import DBProviderTypes from "./src/types/DBProviderTypes";
import StorageProviderTypes from "./src/types/StorageProviderTypes";
import DBProvider from "./src/database";
import StorageProvider from "./src/file_storage";

// Available DBProviders and StorageProvider typws
export { DBProviderTypes, StorageProviderTypes };
export default class FileSDK implements SDKServices {
  private storage;
  private db;

  constructor(config: { dbProvider: string, storageProvider: string }) {
    const { dbProvider, storageProvider } = config;

    if (!(<any>Object).values(DBProviderTypes).includes(dbProvider)) {
      throw new Error(`DBProvider: ${dbProvider} unavailable`);
    }

    if (!(<any>Object).values(StorageProviderTypes).includes(storageProvider)) {
      throw new Error(`StorageProvider: ${storageProvider} unavailable`);
    }

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
