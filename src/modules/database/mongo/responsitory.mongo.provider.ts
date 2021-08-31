import { Connection } from 'mongoose';
import { CatSchema } from '../../../schemas/cat.schema';

export const catsProviders = {
  provide: 'CAT_MODEL',
  useFactory: (connection: Connection): unknown =>
    connection.model('Cat', CatSchema),
  inject: ['DATABASE_CONNECTION'],
};
