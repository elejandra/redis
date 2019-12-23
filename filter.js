const redis = require('redis');
const util = require('util');

const client = redis.createClient();

const getAsync = util.promisify(client.get).bind(client);

const filter_redis= async (nombre)=>{ 
    const res = await getAsync(nombre);
    return res;
};
module.exports =filter_redis;