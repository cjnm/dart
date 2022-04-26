import IDatabaseServices from '../type';

export default class DynamoDBDatabaseServices implements IDatabaseServices {
  constructor() { }

  save = (file: any) => {
    console.log('DynamoDB.save');
  }

  getURL = (filename: string) => {
    console.log('DynamoDB.getURL');
  }
}
