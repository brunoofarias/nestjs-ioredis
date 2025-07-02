import Redis from 'ioredis';
import { RedisCluster } from './redis.cluster';

describe('RedisCluster sendCommand', () => {
  let cluster: Redis.Cluster;
  let redisCluster: RedisCluster;

  beforeAll(() => {
    cluster = new Redis.Cluster(['redis://localhost:6379']);
    redisCluster = new RedisCluster(cluster);
  });

  afterAll(() => {
    cluster.disconnect();
  });

  it('should set and get a value using sendCommand', async () => {
    // @ts-expect-error
    await redisCluster.sendCommand(new Redis.Command('set', ['foo', 'bar']));
    // @ts-expect-error
    const result = await redisCluster.sendCommand(new Redis.Command('get', ['foo']));
    const value = Buffer.isBuffer(result) ? result.toString() : result;
    expect(value).toBe('bar');
  });
});
