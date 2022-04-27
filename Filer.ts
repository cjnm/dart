import ISDKServices, { FilerOptions } from "./src/types/SDKServices";
import DBProviderTypes from "./src/types/DBProviderTypes";
import StorageProviderTypes from "./src/types/StorageProviderTypes";
import DBProvider from "./src/database";
import StorageProvider from "./src/storage";
import { DEFAULT_CONFIG } from "./src/DefaultConfig";

export default class Filer implements ISDKServices {

  //File storage service
  private storage;

  //DB storage for file metadata
  private db;

  constructor(userConfig: FilerOptions) {
    const { dbProvider, storageProvider } = userConfig;

    //Filer config
    let config = {
      ...DEFAULT_CONFIG,
      ...userConfig
    }

    //Check if DB provider is available
    if (!(<any>Object).values(DBProviderTypes).includes(dbProvider)) {
      throw new Error(`DBProvider: ${dbProvider} unavailable`);
    }

    //Check if Storage provider is available
    if (!(<any>Object).values(StorageProviderTypes).includes(storageProvider)) {
      throw new Error(`StorageProvider: ${storageProvider} unavailable`);
    }

    //Initialize DB provider and storage provider
    this.db = new DBProvider(config.dbProvider);
    this.storage = new StorageProvider(config.storageProvider);
  }

  upload = (file: any) => {
    this.db.save(file);
    this.storage.upload(file);
  }

  download = (filename: string) => {
    this.db.getURL(filename);
  }
}
