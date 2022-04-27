import DBProviderTypes from "./DBProviderTypes";
import StorageProviderTypes from "./StorageProviderTypes";
export default interface ISDKServices {
  upload: (file: any) => any;
  download: (filename: string) => any;
}
export type Restrictions = {
  maxFileSize?: number | null
  minFileSize?: number | null
  deniedFileTypes?: string[] | null
}

export interface FilerOptions {
  id?: string
  restrictions?: Restrictions
  dbProvider: DBProviderTypes | string
  storageProvider: StorageProviderTypes | string
  dbProviderConfig: Object
  storageProviderConfig: Object
  cacheControl?: string
  upsert?: boolean
}
export interface Logger {
  log: (...args: any[]) => void
}

export interface FileMetadata {
  id: string
  name: string
  type: string
  size: number
  url: string
  created: number
  updated: number
}

export type File = {
  id?: string
  name: string
  path: string
  fileBody:
  | ArrayBuffer
  | Blob
  | Buffer
  | FormData
  | NodeJS.ReadableStream
  | ReadableStream<Uint8Array>
  | string
}

export type FileObject = {
  file: File
  name: string
  extension: string
  fileType: string
  size: number
  url: string
  created: number
  updated: number
  metadata: Object
  fileBody:
  | ArrayBuffer
  | Blob
  | Buffer
  | FormData
  | NodeJS.ReadableStream
  | ReadableStream<Uint8Array>
  | string
  upsert?: boolean
}
