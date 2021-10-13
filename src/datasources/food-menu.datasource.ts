import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'foodMenu',
  connector: 'mongodb',
  url: 'mongodb://root:MyPa$$w0rd@localhost:27017',
  host: 'localhost',
  port: 27017,
  user: 'root',
  password: 'MyPa$$w0rd',
  database: 'foodMenuService',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class FoodMenuDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'foodMenu';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.foodMenu', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
