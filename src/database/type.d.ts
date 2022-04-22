interface IDatabaseServices {
  save: (file: any) => any;
  getURL: (filename: string) => any;
}

export default IDatabaseServices;
