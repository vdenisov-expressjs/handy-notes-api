const { redisClient } = require('./../redis.init');


class AbstractWorker {
  // read more: https://redis.io/commands#generic

  constructor(nameOfKeysGroup) {
    this.group = nameOfKeysGroup;
  }

  async getKeyById(id) {
    const uniqueKey = `${this.group}-${id}`;
    return await redisClient.getAsync(uniqueKey);
  }

  async setKeyById(id, value) {
    const uniqueKey = `${this.group}-${id}`;
    return await redisClient.setAsync(uniqueKey, value);
  }

  async delKeyById(id) {
    const uniqueKey = `${this.group}-${id}`;
    return await redisClient.delAsync(uniqueKey);
  }

}


module.exports = { AbstractWorker };
