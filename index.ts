import SDKServices from "./src/types/SDKServices";
import DBProviders from "./src/types/DBProviders";
import StorageProviders from "./src/types/StorageProviders";
import DBProvider from "./src/database";
import StorageProvider from "./src/file_storage";

export default class FileSDK implements SDKServices {
  private storage;
  private db;

  constructor(config: { dbProvider: DBProviders, storageProvider: StorageProviders }) {
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

console.log('start');
let x = new FileSDK({ dbProvider: DBProviders.supabase, storageProvider: StorageProviders.s3 });

x.download('xxy apple');
x.upload('xxz ball');