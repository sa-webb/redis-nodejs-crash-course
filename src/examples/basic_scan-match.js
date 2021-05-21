const Redis = require('ioredis');

const redisScan = async () => {
  const redisClient = new Redis({
    host: '127.0.0.1',
    port: 6379,
  });

  const pattern = 'ncc:users:*';

  const value = await redisClient.scan(0, 'MATCH', pattern);

  console.log(value);

  redisClient.quit();
};

redisScan();
