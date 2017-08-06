var env = process.env.NODE_ENV || 'development';

// console.log( `*** NODE_ENV: ${env} ***` );

if( env === 'development' ){
  process.env.PORT = 5000;
  process.env.MONGODB_URI = 'mongodb://tsvm.webpack-games:27017/TodoApp';
} else if( env === 'test' ){
  process.env.PORT = 5000;
  process.env.MONGODB_URI = 'mongodb://tsvm.webpack-games:27017/TodoAppTest';
}
