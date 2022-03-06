// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Destination } = initSchema(schema);

export {
  Destination
};