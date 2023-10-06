import redisClient from '../utils/redis';

console.log('typeof redisclient', typeof redisClient);

function fix(){
console.log(redisClient.isAlive())
}


export default fix;
