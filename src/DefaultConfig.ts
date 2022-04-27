import DBProviderTypes from './types/DBProviderTypes';
import { FilerOptions, Restrictions } from './types/SDKServices';
import StorageProviderTypes from './types/StorageProviderTypes';

const defaultRestrictions: Restrictions = {
  maxFileSize: null,
  minFileSize: null,
  deniedFileTypes: []
}

export const DEFAULT_CONFIG: FilerOptions = {
  restrictions: { ...defaultRestrictions },
  dbProvider: DBProviderTypes.dynamodb,
  storageProvider: StorageProviderTypes.s3,
  dbProviderConfig: '',
  storageProviderConfig: ''
}
