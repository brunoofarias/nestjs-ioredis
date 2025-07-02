/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Redis from 'ioredis';
import { EventEmitter, Readable } from 'stream';

export class RedisCluster implements Redis.Cluster {
  isCluster: true = true;
  options: Redis.ClusterOptions;
  status: string;

  connect(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  disconnect(reconnect?: boolean): void {
    throw new Error('Method not implemented.');
  }
  duplicate(
    overrideStartupNodes?: readonly Redis.ClusterNode[],
    overrideOptions?: Redis.ClusterOptions,
  ): Redis.Cluster {
    throw new Error('Method not implemented.');
  }
  nodes(role?: Redis.NodeRole): Redis.Redis[] {
    throw new Error('Method not implemented.');
  }
  addListener(event: string | symbol, listener: (...args: any[]) => void): this {
    throw new Error('Method not implemented.');
  }
  on(event: string | symbol, listener: (...args: any[]) => void): this {
    throw new Error('Method not implemented.');
  }
  once(event: string | symbol, listener: (...args: any[]) => void): this {
    throw new Error('Method not implemented.');
  }
  removeListener(event: string | symbol, listener: (...args: any[]) => void): this {
    throw new Error('Method not implemented.');
  }
  off(event: string | symbol, listener: (...args: any[]) => void): this {
    throw new Error('Method not implemented.');
  }
  removeAllListeners(event?: string | symbol): this {
    throw new Error('Method not implemented.');
  }
  setMaxListeners(n: number): this {
    throw new Error('Method not implemented.');
  }
  getMaxListeners(): number {
    throw new Error('Method not implemented.');
  }
  listeners(event: string | symbol): (() => void)[] {
    throw new Error('Method not implemented.');
  }
  rawListeners(event: string | symbol): (() => void)[] {
    throw new Error('Method not implemented.');
  }
  emit(event: string | symbol, ...args: any[]): boolean {
    throw new Error('Method not implemented.');
  }
  listenerCount(event: string | symbol): number {
    throw new Error('Method not implemented.');
  }
  prependListener(event: string | symbol, listener: (...args: any[]) => void): this {
    throw new Error('Method not implemented.');
  }
  prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this {
    throw new Error('Method not implemented.');
  }
  eventNames(): (string | symbol)[] {
    throw new Error('Method not implemented.');
  }
  getBuiltinCommands(): string[] {
    throw new Error('Method not implemented.');
  }
  createBuiltinCommand(commandName: string): {} {
    throw new Error('Method not implemented.');
  }
  defineCommand(name: string, definition: { numberOfKeys?: number; lua?: string }): void {
    throw new Error('Method not implemented.');
  }
  // @ts-expect-error
  sendCommand(command: Redis.Command, stream?: unknown): any;
  // @ts-expect-error
  sendCommand(): void {
    throw new Error('Method not implemented.');
  }
  bitcount(key: Redis.KeyType, callback: Redis.Callback<number>): void;
  bitcount(key: Redis.KeyType, start: number, end: number, callback: (err: Error, res: number) => void): void;
  bitcount(key: Redis.KeyType): Promise<number>;
  bitcount(key: Redis.KeyType, start: number, end: number): Promise<number>;
  bitcount(key: any, start?: any, end?: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  bitfield(key: Redis.KeyType, args: Redis.ValueType, callback: Redis.Callback<number[]>): void;
  bitfield(key: Redis.KeyType, args: Redis.ValueType): Promise<number[]>;
  bitfield(key: any, args: any, callback?: any): void | Promise<number[]> {
    throw new Error('Method not implemented.');
  }
  get(key: Redis.KeyType, callback: Redis.Callback<string>): void;
  get(key: Redis.KeyType): Promise<string>;
  get(key: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  getdel(key: Redis.KeyType, callback: Redis.Callback<string>): void;
  getdel(key: Redis.KeyType): Promise<string>;
  getdel(key: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  getBuffer(key: Redis.KeyType, callback: Redis.Callback<Buffer>): void;
  getBuffer(key: Redis.KeyType): Promise<Buffer>;
  getBuffer(key: any, callback?: any): void | Promise<Buffer> {
    throw new Error('Method not implemented.');
  }
  set(
    key: Redis.KeyType,
    value: Redis.ValueType,
    expiryMode?: string | any[],
    time?: string | number,
    setMode?: string | number,
  ): Promise<'OK'>;
  set(key: Redis.KeyType, value: Redis.ValueType, callback: Redis.Callback<'OK'>): void;
  set(key: Redis.KeyType, value: Redis.ValueType, setMode: string | any[], callback: Redis.Callback<'OK'>): void;
  set(
    key: Redis.KeyType,
    value: Redis.ValueType,
    expiryMode: string,
    time: string | number,
    callback: Redis.Callback<'OK'>,
  ): void;
  set(
    key: Redis.KeyType,
    value: Redis.ValueType,
    expiryMode: string,
    time: string | number,
    setMode: string | number,
    callback: Redis.Callback<'OK'>,
  ): void;
  set(key: any, value: any, expiryMode?: any, time?: any, setMode?: any, callback?: any): void | Promise<'OK'> {
    throw new Error('Method not implemented.');
  }
  setBuffer(
    key: Redis.KeyType,
    value: Redis.ValueType,
    expiryMode?: string | any[],
    time?: string | number,
    setMode?: string | number,
  ): Promise<Buffer>;
  setBuffer(key: Redis.KeyType, value: Redis.ValueType, callback: Redis.Callback<Buffer>): void;
  setBuffer(key: Redis.KeyType, value: Redis.ValueType, setMode: string, callback: Redis.Callback<Buffer>): void;
  setBuffer(
    key: Redis.KeyType,
    value: Redis.ValueType,
    expiryMode: string,
    time: number,
    callback: Redis.Callback<Buffer>,
  ): void;
  setBuffer(
    key: Redis.KeyType,
    value: Redis.ValueType,
    expiryMode: string,
    time: string | number,
    setMode: string | number,
    callback: Redis.Callback<Buffer>,
  ): void;
  setBuffer(key: any, value: any, expiryMode?: any, time?: any, setMode?: any, callback?: any): void | Promise<Buffer> {
    throw new Error('Method not implemented.');
  }
  setnx(key: Redis.KeyType, value: Redis.ValueType, callback: Redis.Callback<Redis.BooleanResponse>): void;
  setnx(key: Redis.KeyType, value: Redis.ValueType): Promise<Redis.BooleanResponse>;
  setnx(key: any, value: any, callback?: any): void | Promise<Redis.BooleanResponse> {
    throw new Error('Method not implemented.');
  }
  setex(key: Redis.KeyType, seconds: number, value: Redis.ValueType, callback: Redis.Callback<'OK'>): void;
  setex(key: Redis.KeyType, seconds: number, value: Redis.ValueType): Promise<'OK'>;
  setex(key: any, seconds: any, value: any, callback?: any): void | Promise<'OK'> {
    throw new Error('Method not implemented.');
  }
  psetex(key: Redis.KeyType, milliseconds: number, value: Redis.ValueType, callback: Redis.Callback<'OK'>): void;
  psetex(key: Redis.KeyType, milliseconds: number, value: Redis.ValueType): Promise<'OK'>;
  psetex(key: any, milliseconds: any, value: any, callback?: any): void | Promise<'OK'> {
    throw new Error('Method not implemented.');
  }
  append(key: Redis.KeyType, value: Redis.ValueType, callback: Redis.Callback<number>): void;
  append(key: Redis.KeyType, value: Redis.ValueType): Promise<number>;
  append(key: any, value: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  strlen(key: Redis.KeyType, callback: Redis.Callback<number>): void;
  strlen(key: Redis.KeyType): Promise<number>;
  strlen(key: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  del: Redis.OverloadedListCommand<Redis.KeyType, number>;
  unlink: Redis.OverloadedListCommand<Redis.KeyType, number>;
  exists(...keys: Redis.KeyType[]): Promise<number>;
  exists(key: Redis.KeyType, callback: Redis.Callback<number>): void;
  exists(key?: any, callback?: any, ...rest: any[]): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  setbit(key: Redis.KeyType, offset: number, value: Redis.ValueType, callback: Redis.Callback<number>): void;
  setbit(key: Redis.KeyType, offset: number, value: Redis.ValueType): Promise<number>;
  setbit(key: any, offset: any, value: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  getbit(key: Redis.KeyType, offset: number, callback: Redis.Callback<number>): void;
  getbit(key: Redis.KeyType, offset: number): Promise<number>;
  getbit(key: any, offset: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  setrange(key: Redis.KeyType, offset: number, value: Redis.ValueType, callback: Redis.Callback<number>): void;
  setrange(key: Redis.KeyType, offset: number, value: Redis.ValueType): Promise<number>;
  setrange(key: any, offset: any, value: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  getrange(key: Redis.KeyType, start: number, end: number, callback: Redis.Callback<string>): void;
  getrange(key: Redis.KeyType, start: number, end: number): Promise<string>;
  getrange(key: any, start: any, end: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  getrangeBuffer(key: Redis.KeyType, start: number, end: number, callback: Redis.Callback<Buffer>): void;
  getrangeBuffer(key: Redis.KeyType, start: number, end: number): Promise<Buffer>;
  getrangeBuffer(key: any, start: any, end: any, callback?: any): void | Promise<Buffer> {
    throw new Error('Method not implemented.');
  }
  substr(key: Redis.KeyType, start: number, end: number, callback: Redis.Callback<string>): void;
  substr(key: Redis.KeyType, start: number, end: number): Promise<string>;
  substr(key: any, start: any, end: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  incr(key: Redis.KeyType, callback: Redis.Callback<number>): void;
  incr(key: Redis.KeyType): Promise<number>;
  incr(key: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  decr(key: Redis.KeyType, callback: Redis.Callback<number>): void;
  decr(key: Redis.KeyType): Promise<number>;
  decr(key: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  mget: Redis.OverloadedListCommand<Redis.KeyType, string[]>;
  rpush: Redis.OverloadedKeyCommand<Redis.ValueType, number>;
  rpushBuffer: Redis.OverloadedKeyCommand<Buffer, number>;
  lpush: Redis.OverloadedKeyCommand<Redis.ValueType, number>;
  lpushBuffer: Redis.OverloadedKeyCommand<Buffer, number>;
  rpushx: Redis.OverloadedKeyCommand<Redis.ValueType, number>;
  lpushx: Redis.OverloadedKeyCommand<Redis.ValueType, number>;
  linsert(
    key: Redis.KeyType,
    direction: 'BEFORE' | 'AFTER',
    pivot: string,
    value: Redis.ValueType,
    callback: Redis.Callback<number>,
  ): void;
  linsert(key: Redis.KeyType, direction: 'BEFORE' | 'AFTER', pivot: string, value: Redis.ValueType): Promise<number>;
  linsert(key: any, direction: any, pivot: any, value: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  rpop(key: Redis.KeyType, callback: Redis.Callback<string>): void;
  rpop(key: Redis.KeyType): Promise<string>;
  rpop(key: Redis.KeyType, count: number, callback: Redis.Callback<string[]>): void;
  rpop(key: Redis.KeyType, count: number): Promise<string[]>;
  rpop(key: any, count?: any, callback?: any): void | Promise<string> | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  lpop(key: Redis.KeyType, callback: Redis.Callback<string>): void;
  lpop(key: Redis.KeyType): Promise<string>;
  lpop(key: Redis.KeyType, count: number, callback: Redis.Callback<string[]>): void;
  lpop(key: Redis.KeyType, count: number): Promise<string[]>;
  lpop(key: any, count?: any, callback?: any): void | Promise<string> | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  lpos(key: Redis.KeyType, value: Redis.ValueType, rank?: number, count?: number, maxlen?: number): Promise<number> {
    throw new Error('Method not implemented.');
  }
  lpopBuffer(key: Redis.KeyType, callback: Redis.Callback<Buffer>): void;
  lpopBuffer(key: Redis.KeyType): Promise<Buffer>;
  lpopBuffer(key: any, callback?: any): void | Promise<Buffer> {
    throw new Error('Method not implemented.');
  }
  brpop: Redis.OverloadedBlockingListCommand<Redis.KeyType, [string, string]>;
  blpop: Redis.OverloadedBlockingListCommand<Redis.KeyType, [string, string]>;
  brpoplpush(source: string, destination: string, timeout: number, callback: Redis.Callback<string>): void;
  brpoplpush(source: string, destination: string, timeout: number): Promise<string>;
  brpoplpush(source: any, destination: any, timeout: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  llen(key: Redis.KeyType, callback: Redis.Callback<number>): void;
  llen(key: Redis.KeyType): Promise<number>;
  llen(key: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  lindex(key: Redis.KeyType, index: number, callback: Redis.Callback<string>): void;
  lindex(key: Redis.KeyType, index: number): Promise<string>;
  lindex(key: any, index: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  lset(key: Redis.KeyType, index: number, value: Redis.ValueType, callback: Redis.Callback<'OK'>): void;
  lset(key: Redis.KeyType, index: number, value: Redis.ValueType): Promise<'OK'>;
  lset(key: any, index: any, value: any, callback?: any): void | Promise<'OK'> {
    throw new Error('Method not implemented.');
  }
  lrange(key: Redis.KeyType, start: number, stop: number, callback: Redis.Callback<string[]>): void;
  lrange(key: Redis.KeyType, start: number, stop: number): Promise<string[]>;
  lrange(key: any, start: any, stop: any, callback?: any): void | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  lrangeBuffer(key: Redis.KeyType, start: number, stop: number, callback: Redis.Callback<Buffer[]>): void;
  lrangeBuffer(key: Redis.KeyType, start: number, stop: number): Promise<Buffer[]>;
  lrangeBuffer(key: any, start: any, stop: any, callback?: any): void | Promise<Buffer[]> {
    throw new Error('Method not implemented.');
  }
  ltrim(key: Redis.KeyType, start: number, stop: number, callback: Redis.Callback<'OK'>): void;
  ltrim(key: Redis.KeyType, start: number, stop: number): Promise<'OK'>;
  ltrim(key: any, start: any, stop: any, callback?: any): void | Promise<'OK'> {
    throw new Error('Method not implemented.');
  }
  lrem(key: Redis.KeyType, count: number, value: Redis.ValueType, callback: Redis.Callback<number>): void;
  lrem(key: Redis.KeyType, count: number, value: Redis.ValueType): Promise<number>;
  lrem(key: any, count: any, value: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  rpoplpush(source: string, destination: string, callback: Redis.Callback<string>): void;
  rpoplpush(source: string, destination: string): Promise<string>;
  rpoplpush(source: any, destination: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  rpoplpushBuffer(source: string, destination: string, callback: Redis.Callback<Buffer>): void;
  rpoplpushBuffer(source: string, destination: string): Promise<Buffer>;
  rpoplpushBuffer(source: any, destination: any, callback?: any): void | Promise<Buffer> {
    throw new Error('Method not implemented.');
  }
  sadd: Redis.OverloadedKeyCommand<Redis.ValueType, number>;
  srem: Redis.OverloadedKeyCommand<Redis.ValueType, number>;
  smove(source: string, destination: string, member: string, callback: Redis.Callback<Redis.BooleanResponse>): void;
  smove(source: string, destination: string, member: string): Promise<Redis.BooleanResponse>;
  smove(source: any, destination: any, member: any, callback?: any): void | Promise<Redis.BooleanResponse> {
    throw new Error('Method not implemented.');
  }
  sismember(key: Redis.KeyType, member: string, callback: Redis.Callback<Redis.BooleanResponse>): void;
  sismember(key: Redis.KeyType, member: string): Promise<Redis.BooleanResponse>;
  sismember(key: any, member: any, callback?: any): void | Promise<Redis.BooleanResponse> {
    throw new Error('Method not implemented.');
  }
  smismember(key: Redis.KeyType, ...members: string[]): Promise<Redis.BooleanResponse[]> {
    throw new Error('Method not implemented.');
  }
  scard(key: Redis.KeyType, callback: Redis.Callback<number>): void;
  scard(key: Redis.KeyType): Promise<number>;
  scard(key: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  spop(key: Redis.KeyType, callback: Redis.Callback<string>): void;
  spop(key: Redis.KeyType): Promise<string>;
  spop(key: Redis.KeyType, count: number, callback: Redis.Callback<string[]>): void;
  spop(key: Redis.KeyType, count: number): Promise<string[]>;
  spop(key: any, count?: any, callback?: any): void | Promise<string> | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  srandmember(key: Redis.KeyType, callback: Redis.Callback<string>): void;
  srandmember(key: Redis.KeyType): Promise<string>;
  srandmember(key: Redis.KeyType, count: number, callback: Redis.Callback<string[]>): void;
  srandmember(key: Redis.KeyType, count: number): Promise<string[]>;
  srandmember(key: any, count?: any, callback?: any): void | Promise<string> | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  sinter: Redis.OverloadedListCommand<Redis.KeyType, string[]>;
  sinterstore: Redis.OverloadedKeyCommand<Redis.KeyType, number>;
  sunion: Redis.OverloadedListCommand<Redis.KeyType, string[]>;
  sunionstore: Redis.OverloadedKeyCommand<Redis.KeyType, number>;
  sdiff: Redis.OverloadedListCommand<Redis.KeyType, string[]>;
  sdiffstore: Redis.OverloadedKeyCommand<Redis.KeyType, number>;
  smembers(key: Redis.KeyType, callback: Redis.Callback<string[]>): void;
  smembers(key: Redis.KeyType): Promise<string[]>;
  smembers(key: any, callback?: any): void | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  zadd: Redis.OverloadedKeyCommand<number | Redis.KeyType, string | number>;
  zaddBuffer(key: Redis.KeyType, score1: number, member1: Buffer, callback: Redis.Callback<string | number>): void;
  zaddBuffer(key: Redis.KeyType, score1: number, member1: Buffer): Promise<string | number>;
  zaddBuffer(key: any, score1: any, member1: any, callback?: any): void | Promise<string | number> {
    throw new Error('Method not implemented.');
  }
  zincrby(key: Redis.KeyType, increment: number, member: string, callback: Redis.Callback<string>): void;
  zincrby(key: Redis.KeyType, increment: number, member: string): Promise<string>;
  zincrby(key: any, increment: any, member: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  zpopmin(key: Redis.KeyType, callback: Redis.Callback<string[]>): void;
  zpopmin(key: Redis.KeyType, count: number, callback: Redis.Callback<string[]>): void;
  zpopmin(key: Redis.KeyType, count?: number): Promise<string[]>;
  zpopmin(key: any, count?: any, callback?: any): void | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  zpopmax(key: Redis.KeyType, callback: Redis.Callback<string[]>): void;
  zpopmax(key: Redis.KeyType, count: number, callback: Redis.Callback<string[]>): void;
  zpopmax(key: Redis.KeyType, count?: number): Promise<string[]>;
  zpopmax(key: any, count?: any, callback?: any): void | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  bzpopmin: Redis.OverloadedBlockingListCommand<Redis.KeyType, [string, string, string]>;
  bzpopmax: Redis.OverloadedBlockingListCommand<Redis.KeyType, [string, string, string]>;
  zrem: Redis.OverloadedKeyCommand<Redis.ValueType, number>;
  zremrangebyscore(
    key: Redis.KeyType,
    min: string | number,
    max: string | number,
    callback: Redis.Callback<number>,
  ): void;
  zremrangebyscore(key: Redis.KeyType, min: string | number, max: string | number): Promise<number>;
  zremrangebyscore(key: any, min: any, max: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  zremrangebyrank(key: Redis.KeyType, start: number, stop: number, callback: Redis.Callback<number>): void;
  zremrangebyrank(key: Redis.KeyType, start: number, stop: number): Promise<number>;
  zremrangebyrank(key: any, start: any, stop: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  zremrangebylex(key: Redis.KeyType, min: string, max: string): Promise<number>;
  zremrangebylex(key: Redis.KeyType, min: string, max: string, callback: Redis.Callback<number>): void;
  zremrangebylex(key: any, min: any, max: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  zunionstore: Redis.OverloadedKeyCommand<number | Redis.KeyType, number>;
  zinterstore: Redis.OverloadedKeyCommand<number | Redis.KeyType, number>;
  zrange(key: Redis.KeyType, start: number, stop: number, callback: Redis.Callback<string[]>): void;
  zrange(
    key: Redis.KeyType,
    start: number,
    stop: number,
    withScores: 'WITHSCORES',
    callback: Redis.Callback<string[]>,
  ): void;
  zrange(key: Redis.KeyType, start: number, stop: number, withScores?: 'WITHSCORES'): Promise<string[]>;
  zrange(key: any, start: any, stop: any, withScores?: any, callback?: any): void | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  zrangeBuffer(key: Redis.KeyType, start: number, stop: number, callback: Redis.Callback<Buffer[]>): void;
  zrangeBuffer(
    key: Redis.KeyType,
    start: number,
    stop: number,
    withScores: 'WITHSCORES',
    callback: Redis.Callback<Buffer[]>,
  ): void;
  zrangeBuffer(key: Redis.KeyType, start: number, stop: number, withScores?: 'WITHSCORES'): Promise<Buffer[]>;
  zrangeBuffer(key: any, start: any, stop: any, withScores?: any, callback?: any): void | Promise<Buffer[]> {
    throw new Error('Method not implemented.');
  }
  zrevrange(key: Redis.KeyType, start: number, stop: number, callback: Redis.Callback<string[]>): void;
  zrevrange(
    key: Redis.KeyType,
    start: number,
    stop: number,
    withScores: 'WITHSCORES',
    callback: Redis.Callback<string[]>,
  ): void;
  zrevrange(key: Redis.KeyType, start: number, stop: number, withScores?: 'WITHSCORES'): Promise<string[]>;
  zrevrange(key: any, start: any, stop: any, withScores?: any, callback?: any): void | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  zrevrangeBuffer(key: Redis.KeyType, start: number, stop: number, callback: Redis.Callback<Buffer[]>): void;
  zrevrangeBuffer(
    key: Redis.KeyType,
    start: number,
    stop: number,
    withScores: 'WITHSCORES',
    callback: Redis.Callback<Buffer[]>,
  ): void;
  zrevrangeBuffer(key: Redis.KeyType, start: number, stop: number, withScores?: 'WITHSCORES'): Promise<Buffer[]>;
  zrevrangeBuffer(key: any, start: any, stop: any, withScores?: any, callback?: any): void | Promise<Buffer[]> {
    throw new Error('Method not implemented.');
  }
  zrangebyscore(
    key: Redis.KeyType,
    min: string | number,
    max: string | number,
    withScores?: 'WITHSCORES',
  ): Promise<string[]>;
  zrangebyscore(
    key: Redis.KeyType,
    min: string | number,
    max: string | number,
    withScores: 'WITHSCORES',
    limit: 'LIMIT',
    offset: number,
    count: number,
  ): Promise<string[]>;
  zrangebyscore(
    key: Redis.KeyType,
    min: string | number,
    max: string | number,
    limit: 'LIMIT',
    offset: number,
    count: number,
  ): Promise<string[]>;
  zrangebyscore(
    key: Redis.KeyType,
    min: string | number,
    max: string | number,
    callback: Redis.Callback<string[]>,
  ): void;
  zrangebyscore(
    key: Redis.KeyType,
    min: string | number,
    max: string | number,
    withScores: 'WITHSCORES',
    callback: Redis.Callback<string[]>,
  ): void;
  zrangebyscore(
    key: Redis.KeyType,
    min: string | number,
    max: string | number,
    withScores: 'WITHSCORES',
    limit: 'LIMIT',
    offset: number,
    count: number,
    callback: Redis.Callback<string[]>,
  ): void;
  zrangebyscore(
    key: Redis.KeyType,
    min: string | number,
    max: string | number,
    limit: 'LIMIT',
    offset: number,
    count: number,
    callback: Redis.Callback<string[]>,
  ): void;
  zrangebyscore(
    key: any,
    min: any,
    max: any,
    withScores?: any,
    limit?: any,
    offset?: any,
    count?: any,
    callback?: any,
  ): void | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  zrangebyscoreBuffer(
    key: Redis.KeyType,
    min: string | number,
    max: string | number,
    withScores?: 'WITHSCORES',
  ): Promise<Buffer[]>;
  zrangebyscoreBuffer(
    key: Redis.KeyType,
    min: string | number,
    max: string | number,
    withScores: 'WITHSCORES',
    limit: 'LIMIT',
    offset: number,
    count: number,
  ): Promise<Buffer[]>;
  zrangebyscoreBuffer(
    key: Redis.KeyType,
    min: string | number,
    max: string | number,
    limit: 'LIMIT',
    offset: number,
    count: number,
  ): Promise<Buffer[]>;
  zrangebyscoreBuffer(
    key: Redis.KeyType,
    min: string | number,
    max: string | number,
    callback: Redis.Callback<Buffer[]>,
  ): void;
  zrangebyscoreBuffer(
    key: Redis.KeyType,
    min: string | number,
    max: string | number,
    withScores: 'WITHSCORES',
    callback: Redis.Callback<Buffer[]>,
  ): void;
  zrangebyscoreBuffer(
    key: Redis.KeyType,
    min: string | number,
    max: string | number,
    withScores: 'WITHSCORES',
    limit: 'LIMIT',
    offset: number,
    count: number,
    callback: Redis.Callback<Buffer[]>,
  ): void;
  zrangebyscoreBuffer(
    key: Redis.KeyType,
    min: string | number,
    max: string | number,
    limit: 'LIMIT',
    offset: number,
    count: number,
    callback: Redis.Callback<Buffer[]>,
  ): void;
  zrangebyscoreBuffer(
    key: any,
    min: any,
    max: any,
    withScores?: any,
    limit?: any,
    offset?: any,
    count?: any,
    callback?: any,
  ): void | Promise<Buffer[]> {
    throw new Error('Method not implemented.');
  }
  zrevrangebyscore(
    key: Redis.KeyType,
    max: string | number,
    min: string | number,
    withScores?: 'WITHSCORES',
  ): Promise<string[]>;
  zrevrangebyscore(
    key: Redis.KeyType,
    max: string | number,
    min: string | number,
    withScores: 'WITHSCORES',
    limit: 'LIMIT',
    offset: number,
    count: number,
  ): Promise<string[]>;
  zrevrangebyscore(
    key: Redis.KeyType,
    max: string | number,
    min: string | number,
    limit: 'LIMIT',
    offset: number,
    count: number,
  ): Promise<string[]>;
  zrevrangebyscore(
    key: Redis.KeyType,
    max: string | number,
    min: string | number,
    callback: Redis.Callback<string[]>,
  ): void;
  zrevrangebyscore(
    key: Redis.KeyType,
    max: string | number,
    min: string | number,
    withScores: 'WITHSCORES',
    callback: Redis.Callback<string[]>,
  ): void;
  zrevrangebyscore(
    key: Redis.KeyType,
    max: string | number,
    min: string | number,
    withScores: 'WITHSCORES',
    limit: 'LIMIT',
    offset: number,
    count: number,
    callback: Redis.Callback<string[]>,
  ): void;
  zrevrangebyscore(
    key: Redis.KeyType,
    max: string | number,
    min: string | number,
    limit: 'LIMIT',
    offset: number,
    count: number,
    callback: Redis.Callback<string[]>,
  ): void;
  zrevrangebyscore(
    key: any,
    max: any,
    min: any,
    withScores?: any,
    limit?: any,
    offset?: any,
    count?: any,
    callback?: any,
  ): void | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  zrevrangebyscoreBuffer(
    key: Redis.KeyType,
    max: string | number,
    min: string | number,
    withScores?: 'WITHSCORES',
  ): Promise<Buffer[]>;
  zrevrangebyscoreBuffer(
    key: Redis.KeyType,
    max: string | number,
    min: string | number,
    withScores: 'WITHSCORES',
    limit: 'LIMIT',
    offset: number,
    count: number,
  ): Promise<Buffer[]>;
  zrevrangebyscoreBuffer(
    key: Redis.KeyType,
    max: string | number,
    min: string | number,
    limit: 'LIMIT',
    offset: number,
    count: number,
  ): Promise<Buffer[]>;
  zrevrangebyscoreBuffer(
    key: Redis.KeyType,
    max: string | number,
    min: string | number,
    callback: Redis.Callback<Buffer[]>,
  ): void;
  zrevrangebyscoreBuffer(
    key: Redis.KeyType,
    max: string | number,
    min: string | number,
    withScores: 'WITHSCORES',
    callback: Redis.Callback<Buffer[]>,
  ): void;
  zrevrangebyscoreBuffer(
    key: Redis.KeyType,
    max: string | number,
    min: string | number,
    withScores: 'WITHSCORES',
    limit: 'LIMIT',
    offset: number,
    count: number,
    callback: Redis.Callback<Buffer[]>,
  ): void;
  zrevrangebyscoreBuffer(
    key: Redis.KeyType,
    max: string | number,
    min: string | number,
    limit: 'LIMIT',
    offset: number,
    count: number,
    callback: Redis.Callback<Buffer[]>,
  ): void;
  zrevrangebyscoreBuffer(
    key: any,
    max: any,
    min: any,
    withScores?: any,
    limit?: any,
    offset?: any,
    count?: any,
    callback?: any,
  ): void | Promise<Buffer[]> {
    throw new Error('Method not implemented.');
  }
  zrangebylex(key: Redis.KeyType, min: string, max: string): Promise<string[]>;
  zrangebylex(
    key: Redis.KeyType,
    min: string,
    max: string,
    limit: 'LIMIT',
    offset: number,
    count: number,
  ): Promise<string[]>;
  zrangebylex(key: Redis.KeyType, min: string, max: string, callback: Redis.Callback<string[]>): void;
  zrangebylex(
    key: Redis.KeyType,
    min: string,
    max: string,
    limit: 'LIMIT',
    offset: number,
    count: number,
    callback: Redis.Callback<string[]>,
  ): void;
  zrangebylex(
    key: any,
    min: any,
    max: any,
    limit?: any,
    offset?: any,
    count?: any,
    callback?: any,
  ): void | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  zrangebylexBuffer(key: Redis.KeyType, min: string, max: string): Promise<Buffer[]>;
  zrangebylexBuffer(
    key: Redis.KeyType,
    min: string,
    max: string,
    limit: 'LIMIT',
    offset: number,
    count: number,
  ): Promise<Buffer[]>;
  zrangebylexBuffer(key: Redis.KeyType, min: string, max: string, callback: Redis.Callback<Buffer[]>): void;
  zrangebylexBuffer(
    key: Redis.KeyType,
    min: string,
    max: string,
    limit: 'LIMIT',
    offset: number,
    count: number,
    callback: Redis.Callback<Buffer[]>,
  ): void;
  zrangebylexBuffer(
    key: any,
    min: any,
    max: any,
    limit?: any,
    offset?: any,
    count?: any,
    callback?: any,
  ): void | Promise<Buffer[]> {
    throw new Error('Method not implemented.');
  }
  zrevrangebylex(key: Redis.KeyType, min: string, max: string): Promise<string[]>;
  zrevrangebylex(
    key: Redis.KeyType,
    min: string,
    max: string,
    limit: 'LIMIT',
    offset: number,
    count: number,
  ): Promise<string[]>;
  zrevrangebylex(key: Redis.KeyType, min: string, max: string, callback: Redis.Callback<string[]>): void;
  zrevrangebylex(
    key: Redis.KeyType,
    min: string,
    max: string,
    limit: 'LIMIT',
    offset: number,
    count: number,
    callback: Redis.Callback<string[]>,
  ): void;
  zrevrangebylex(
    key: any,
    min: any,
    max: any,
    limit?: any,
    offset?: any,
    count?: any,
    callback?: any,
  ): void | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  zrevrangebylexBuffer(key: Redis.KeyType, min: string, max: string): Promise<Buffer[]>;
  zrevrangebylexBuffer(
    key: Redis.KeyType,
    min: string,
    max: string,
    limit: 'LIMIT',
    offset: number,
    count: number,
  ): Promise<Buffer[]>;
  zrevrangebylexBuffer(key: Redis.KeyType, min: string, max: string, callback: Redis.Callback<Buffer[]>): void;
  zrevrangebylexBuffer(
    key: Redis.KeyType,
    min: string,
    max: string,
    limit: 'LIMIT',
    offset: number,
    count: number,
    callback: Redis.Callback<Buffer[]>,
  ): void;
  zrevrangebylexBuffer(
    key: any,
    min: any,
    max: any,
    limit?: any,
    offset?: any,
    count?: any,
    callback?: any,
  ): void | Promise<Buffer[]> {
    throw new Error('Method not implemented.');
  }
  zcount(key: Redis.KeyType, min: string | number, max: string | number, callback: Redis.Callback<number>): void;
  zcount(key: Redis.KeyType, min: string | number, max: string | number): Promise<number>;
  zcount(key: any, min: any, max: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  zcard(key: Redis.KeyType, callback: Redis.Callback<number>): void;
  zcard(key: Redis.KeyType): Promise<number>;
  zcard(key: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  zscore(key: Redis.KeyType, member: string, callback: Redis.Callback<string>): void;
  zscore(key: Redis.KeyType, member: string): Promise<string>;
  zscore(key: any, member: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  zrank(key: Redis.KeyType, member: string, callback: Redis.Callback<number>): void;
  zrank(key: Redis.KeyType, member: string): Promise<number>;
  zrank(key: any, member: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  zrevrank(key: Redis.KeyType, member: string, callback: Redis.Callback<number>): void;
  zrevrank(key: Redis.KeyType, member: string): Promise<number>;
  zrevrank(key: any, member: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  hset: Redis.OverloadedKeyedHashCommand<Redis.ValueType, number>;
  hsetBuffer(
    key: Redis.KeyType,
    field: string,
    value: Redis.ValueType,
    callback: Redis.Callback<Redis.BooleanResponse>,
  ): void;
  hsetBuffer(key: Redis.KeyType, field: string, value: Redis.ValueType): Promise<Buffer>;
  hsetBuffer(key: any, field: any, value: any, callback?: any): void | Promise<Buffer> {
    throw new Error('Method not implemented.');
  }
  hsetnx(
    key: Redis.KeyType,
    field: string,
    value: Redis.ValueType,
    callback: Redis.Callback<Redis.BooleanResponse>,
  ): void;
  hsetnx(key: Redis.KeyType, field: string, value: Redis.ValueType): Promise<Redis.BooleanResponse>;
  hsetnx(key: any, field: any, value: any, callback?: any): void | Promise<Redis.BooleanResponse> {
    throw new Error('Method not implemented.');
  }
  hget(key: Redis.KeyType, field: string, callback: Redis.Callback<string>): void;
  hget(key: Redis.KeyType, field: string): Promise<string>;
  hget(key: any, field: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  hgetBuffer(key: Redis.KeyType, field: string, callback: Redis.Callback<Buffer>): void;
  hgetBuffer(key: Redis.KeyType, field: string): Promise<Buffer>;
  hgetBuffer(key: any, field: any, callback?: any): void | Promise<Buffer> {
    throw new Error('Method not implemented.');
  }
  hmset: Redis.OverloadedKeyedHashCommand<Redis.ValueType, 'OK'>;
  hmget: Redis.OverloadedKeyCommand<Redis.KeyType, string[]>;
  hmgetBuffer: Redis.OverloadedKeyCommand<Redis.KeyType, Buffer[]>;
  hstrlen(key: Redis.KeyType, field: string, callback: Redis.Callback<number>): void;
  hstrlen(key: Redis.KeyType, field: string): Promise<number>;
  hstrlen(key: any, field: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  hincrby(key: Redis.KeyType, field: string, increment: number, callback: Redis.Callback<number>): void;
  hincrby(key: Redis.KeyType, field: string, increment: number): Promise<number>;
  hincrby(key: any, field: any, increment: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  hincrbyfloat(key: Redis.KeyType, field: string, increment: number, callback: Redis.Callback<number>): void;
  hincrbyfloat(key: Redis.KeyType, field: string, increment: number): Promise<number>;
  hincrbyfloat(key: any, field: any, increment: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  hdel: Redis.OverloadedKeyCommand<Redis.KeyType, number>;
  hlen(key: Redis.KeyType, callback: Redis.Callback<number>): void;
  hlen(key: Redis.KeyType): Promise<number>;
  hlen(key: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  hkeys(key: Redis.KeyType, callback: Redis.Callback<string[]>): void;
  hkeys(key: Redis.KeyType): Promise<string[]>;
  hkeys(key: any, callback?: any): void | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  hvals(key: Redis.KeyType, callback: Redis.Callback<string[]>): void;
  hvals(key: Redis.KeyType): Promise<string[]>;
  hvals(key: any, callback?: any): void | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  hgetall(key: Redis.KeyType, callback: Redis.Callback<Record<string, string>>): void;
  hgetall(key: Redis.KeyType): Promise<Record<string, string>>;
  hgetall(key: any, callback?: any): void | Promise<Record<string, string>> {
    throw new Error('Method not implemented.');
  }
  hexists(key: Redis.KeyType, field: string, callback: Redis.Callback<Redis.BooleanResponse>): void;
  hexists(key: Redis.KeyType, field: string): Promise<Redis.BooleanResponse>;
  hexists(key: any, field: any, callback?: any): void | Promise<Redis.BooleanResponse> {
    throw new Error('Method not implemented.');
  }
  geoadd(
    key: Redis.KeyType,
    longitude: number,
    latitude: number,
    member: string,
    callback: Redis.Callback<number>,
  ): void;
  geoadd(key: Redis.KeyType, longitude: number, latitude: number, member: string): Promise<number>;
  geoadd(key: any, longitude: any, latitude: any, member: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  geodist(
    key: Redis.KeyType,
    member1: string,
    member2: string,
    unit: 'm' | 'km' | 'ft' | 'mi',
    callback: Redis.Callback<string>,
  ): void;
  geodist(key: Redis.KeyType, member1: string, member2: string, unit: 'm' | 'km' | 'ft' | 'mi'): Promise<string>;
  geodist(key: any, member1: any, member2: any, unit: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  geohash: Redis.OverloadedKeyCommand<string, string[]>;
  geopos: Redis.OverloadedKeyCommand<string, string[]>;
  georadius(
    key: Redis.KeyType,
    longitude: number,
    latitude: number,
    radius: number,
    unit: 'm' | 'km' | 'ft' | 'mi',
    callback: Redis.Callback<string[]>,
  ): void;
  georadius(
    key: Redis.KeyType,
    longitude: number,
    latitude: number,
    radius: number,
    unit: 'm' | 'km' | 'ft' | 'mi',
    sort?: 'ASC' | 'DESC',
  ): Promise<string[]>;
  georadius(
    key: Redis.KeyType,
    longitude: number,
    latitude: number,
    radius: number,
    unit: 'm' | 'km' | 'ft' | 'mi',
    count: 'COUNT',
    countValue: number,
    sort?: 'ASC' | 'DESC',
  ): Promise<string[]>;
  georadius(
    key: any,
    longitude: any,
    latitude: any,
    radius: any,
    unit: any,
    count?: any,
    countValue?: any,
    sort?: any,
  ): void | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  georadiusbymember(
    key: Redis.KeyType,
    member: string,
    radius: number,
    unit: 'm' | 'km' | 'ft' | 'mi',
    callback: Redis.Callback<string[]>,
  ): void;
  georadiusbymember(
    key: Redis.KeyType,
    member: string,
    radius: number,
    unit: 'm' | 'km' | 'ft' | 'mi',
    count: 'COUNT',
    countValue: number,
    callback: Redis.Callback<string[]>,
  ): void;
  georadiusbymember(
    key: Redis.KeyType,
    member: string,
    radius: number,
    unit: 'm' | 'km' | 'ft' | 'mi',
  ): Promise<string[]>;
  georadiusbymember(
    key: Redis.KeyType,
    member: string,
    radius: number,
    unit: 'm' | 'km' | 'ft' | 'mi',
    count: 'COUNT',
    countValue: number,
  ): Promise<string[]>;
  georadiusbymember(
    key: any,
    member: any,
    radius: any,
    unit: any,
    count?: any,
    countValue?: any,
    callback?: any,
  ): void | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  geosearch(
    key: Redis.KeyType,
    from: 'FROMMEMBER',
    member: string,
    by: 'BYRADIUS',
    radius: number,
    radiusUnit: 'm' | 'km' | 'ft' | 'mi',
    count: 'COUNT',
    countValue: number,
    sort?: 'ASC' | 'DESC',
    withCoord?: 'WITHCOORD',
    withDist?: 'WITHDIST',
    withHash?: 'WITHHASH',
  ): Promise<string[] | (string[] | string[][])[]>;
  geosearch(
    key: Redis.KeyType,
    from: 'FROMMEMBER',
    member: string,
    by: 'BYBOX',
    width: number,
    height: number,
    unit: 'm' | 'km' | 'ft' | 'mi',
    count: 'COUNT',
    countValue: number,
    sort?: 'ASC' | 'DESC',
    withCoord?: 'WITHCOORD',
    withDist?: 'WITHDIST',
    withHash?: 'WITHHASH',
  ): Promise<string[] | (string[] | string[][])[]>;
  geosearch(
    key: Redis.KeyType,
    from: 'FROMLONLAT',
    longitude: number,
    latitude: number,
    by: 'BYRADIUS',
    radius: number,
    radiusUnit: 'm' | 'km' | 'ft' | 'mi',
    count: 'COUNT',
    countValue: number,
    sort?: 'ASC' | 'DESC',
    withCoord?: 'WITHCOORD',
    withDist?: 'WITHDIST',
    withHash?: 'WITHHASH',
  ): Promise<string[] | (string[] | string[][])[]>;
  geosearch(
    key: Redis.KeyType,
    from: 'FROMLONLAT',
    longitude: number,
    latitude: number,
    by: 'BYBOX',
    width: number,
    height: number,
    unit: 'm' | 'km' | 'ft' | 'mi',
    count: 'COUNT',
    countValue: number,
    sort?: 'ASC' | 'DESC',
    withCoord?: 'WITHCOORD',
    withDist?: 'WITHDIST',
    withHash?: 'WITHHASH',
  ): Promise<string[] | (string[] | string[][])[]>;
  geosearch(
    key: Redis.KeyType,
    from: 'FROMMEMBER',
    member: string,
    by: 'BYRADIUS',
    radius: number,
    radiusUnit: 'm' | 'km' | 'ft' | 'mi',
    sort?: 'ASC' | 'DESC',
    withCoord?: 'WITHCOORD',
    withDist?: 'WITHDIST',
    withHash?: 'WITHHASH',
  ): Promise<string[] | (string[] | string[][])[]>;
  geosearch(
    key: Redis.KeyType,
    from: 'FROMMEMBER',
    member: string,
    by: 'BYBOX',
    width: number,
    height: number,
    unit: 'm' | 'km' | 'ft' | 'mi',
    sort?: 'ASC' | 'DESC',
    withCoord?: 'WITHCOORD',
    withDist?: 'WITHDIST',
    withHash?: 'WITHHASH',
  ): Promise<string[] | (string[] | string[][])[]>;
  geosearch(
    key: Redis.KeyType,
    from: 'FROMLONLAT',
    longitude: number,
    latitude: number,
    by: 'BYRADIUS',
    radius: number,
    radiusUnit: 'm' | 'km' | 'ft' | 'mi',
    sort?: 'ASC' | 'DESC',
    withCoord?: 'WITHCOORD',
    withDist?: 'WITHDIST',
    withHash?: 'WITHHASH',
  ): Promise<string[] | (string[] | string[][])[]>;
  geosearch(
    key: Redis.KeyType,
    from: 'FROMLONLAT',
    longitude: number,
    latitude: number,
    by: 'BYBOX',
    width: number,
    height: number,
    unit: 'm' | 'km' | 'ft' | 'mi',
    sort?: 'ASC' | 'DESC',
    withCoord?: 'WITHCOORD',
    withDist?: 'WITHDIST',
    withHash?: 'WITHHASH',
  ): Promise<string[] | (string[] | string[][])[]>;
  geosearch(
    key: any,
    from: any,
    longitude: any,
    latitude: any,
    by: any,
    width: any,
    height?: any,
    unit?: any,
    count?: any,
    countValue?: any,
    sort?: any,
    withCoord?: any,
    withDist?: any,
    withHash?: any,
  ): Promise<string[] | (string[] | string[][])[]> {
    throw new Error('Method not implemented.');
  }
  incrby(key: Redis.KeyType, increment: number, callback: Redis.Callback<number>): void;
  incrby(key: Redis.KeyType, increment: number): Promise<number>;
  incrby(key: any, increment: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  incrbyfloat(key: Redis.KeyType, increment: number, callback: Redis.Callback<number>): void;
  incrbyfloat(key: Redis.KeyType, increment: number): Promise<number>;
  incrbyfloat(key: any, increment: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  decrby(key: Redis.KeyType, decrement: number, callback: Redis.Callback<number>): void;
  decrby(key: Redis.KeyType, decrement: number): Promise<number>;
  decrby(key: any, decrement: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  getset(key: Redis.KeyType, value: Redis.ValueType, callback: Redis.Callback<string>): void;
  getset(key: Redis.KeyType, value: Redis.ValueType): Promise<string>;
  getset(key: any, value: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  mset: Redis.OverloadedHashCommand<Redis.ValueType, 'OK'>;
  msetnx: Redis.OverloadedHashCommand<Redis.ValueType, Redis.BooleanResponse>;
  memory(argument: 'USAGE', key: Redis.KeyType, callback?: Redis.Callback<number>): Promise<number> {
    throw new Error('Method not implemented.');
  }
  randomkey(callback: Redis.Callback<string>): void;
  randomkey(): Promise<string>;
  randomkey(callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  select(index: number, callback: Redis.Callback<'OK'>): void;
  select(index: number): Promise<'OK'>;
  select(index: any, callback?: any): void | Promise<'OK'> {
    throw new Error('Method not implemented.');
  }
  move(key: Redis.KeyType, db: string, callback: Redis.Callback<Redis.BooleanResponse>): void;
  move(key: Redis.KeyType, db: string): Promise<Redis.BooleanResponse>;
  move(key: any, db: any, callback?: any): void | Promise<Redis.BooleanResponse> {
    throw new Error('Method not implemented.');
  }
  rename(key: Redis.KeyType, newkey: Redis.KeyType, callback: Redis.Callback<'OK'>): void;
  rename(key: Redis.KeyType, newkey: Redis.KeyType): Promise<'OK'>;
  rename(key: any, newkey: any, callback?: any): void | Promise<'OK'> {
    throw new Error('Method not implemented.');
  }
  renamenx(key: Redis.KeyType, newkey: Redis.KeyType, callback: Redis.Callback<Redis.BooleanResponse>): void;
  renamenx(key: Redis.KeyType, newkey: Redis.KeyType): Promise<Redis.BooleanResponse>;
  renamenx(key: any, newkey: any, callback?: any): void | Promise<Redis.BooleanResponse> {
    throw new Error('Method not implemented.');
  }
  expire(key: Redis.KeyType, seconds: number, callback: Redis.Callback<Redis.BooleanResponse>): void;
  expire(key: Redis.KeyType, seconds: number): Promise<Redis.BooleanResponse>;
  expire(key: any, seconds: any, callback?: any): void | Promise<Redis.BooleanResponse> {
    throw new Error('Method not implemented.');
  }
  pexpire(key: Redis.KeyType, milliseconds: number, callback: Redis.Callback<Redis.BooleanResponse>): void;
  pexpire(key: Redis.KeyType, milliseconds: number): Promise<Redis.BooleanResponse>;
  pexpire(key: any, milliseconds: any, callback?: any): void | Promise<Redis.BooleanResponse> {
    throw new Error('Method not implemented.');
  }
  expireat(key: Redis.KeyType, timestamp: number, callback: Redis.Callback<Redis.BooleanResponse>): void;
  expireat(key: Redis.KeyType, timestamp: number): Promise<Redis.BooleanResponse>;
  expireat(key: any, timestamp: any, callback?: any): void | Promise<Redis.BooleanResponse> {
    throw new Error('Method not implemented.');
  }
  pexpireat(key: Redis.KeyType, millisecondsTimestamp: number, callback: Redis.Callback<Redis.BooleanResponse>): void;
  pexpireat(key: Redis.KeyType, millisecondsTimestamp: number): Promise<Redis.BooleanResponse>;
  pexpireat(key: any, millisecondsTimestamp: any, callback?: any): void | Promise<Redis.BooleanResponse> {
    throw new Error('Method not implemented.');
  }
  keys(pattern: string, callback: Redis.Callback<string[]>): void;
  keys(pattern: string): Promise<string[]>;
  keys(pattern: any, callback?: any): void | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  dbsize(callback: Redis.Callback<number>): void;
  dbsize(): Promise<number>;
  dbsize(callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  auth(username: string, password: string, callback?: Redis.Callback<string>): void;
  auth(password: string, callback: Redis.Callback<string>): void;
  auth(password: string): Promise<string>;
  auth(username: any, password?: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  ping(callback: Redis.Callback<string>): void;
  ping(message: string, callback: Redis.Callback<string>): void;
  ping(message?: string): Promise<string>;
  ping(message?: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  echo(message: string, callback: Redis.Callback<string>): void;
  echo(message: string): Promise<string>;
  echo(message: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  save(callback: Redis.Callback<string>): void;
  save(): Promise<string>;
  save(callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  bgsave(callback: Redis.Callback<string>): void;
  bgsave(): Promise<string>;
  bgsave(callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  bgrewriteaof(callback: Redis.Callback<string>): void;
  bgrewriteaof(): Promise<string>;
  bgrewriteaof(callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  shutdown(save: 'SAVE' | 'NOSAVE', callback: Redis.Callback<never>): void;
  shutdown(save: 'SAVE' | 'NOSAVE'): Promise<never>;
  shutdown(save: any, callback?: any): void | Promise<never> {
    throw new Error('Method not implemented.');
  }
  lastsave(callback: Redis.Callback<number>): void;
  lastsave(): Promise<number>;
  lastsave(callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  type(key: Redis.KeyType, callback: Redis.Callback<string>): void;
  type(key: Redis.KeyType): Promise<string>;
  type(key: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  multi(commands?: string[][], options?: Redis.MultiOptions): Redis.Pipeline;
  multi(options: { pipeline: false }): Promise<'OK'>;
  multi(commands?: any, options?: any): Promise<'OK'> | Redis.Pipeline {
    throw new Error('Method not implemented.');
  }
  exec(callback: Redis.Callback<[Error, string][]>): void;
  exec(): Promise<[Error, string][]>;
  exec(callback?: any): void | Promise<[Error, string][]> {
    throw new Error('Method not implemented.');
  }
  discard(callback: Redis.Callback<'OK'>): void;
  discard(): Promise<'OK'>;
  discard(callback?: any): void | Promise<'OK'> {
    throw new Error('Method not implemented.');
  }
  sync(callback: Redis.Callback<any>): void;
  sync(): Promise<any>;
  sync(callback?: any): void | Promise<any> {
    throw new Error('Method not implemented.');
  }
  flushdb(callback: Redis.Callback<'OK'>): void;
  flushdb(): Promise<'OK'>;
  flushdb(callback?: any): void | Promise<'OK'> {
    throw new Error('Method not implemented.');
  }
  flushall(callback: Redis.Callback<'OK'>): void;
  flushall(): Promise<'OK'>;
  flushall(callback?: any): void | Promise<'OK'> {
    throw new Error('Method not implemented.');
  }
  sort: Redis.OverloadedListCommand<number | Redis.KeyType, number | string[]>;
  info(callback: Redis.Callback<string>): void;
  info(section: string, callback: Redis.Callback<string>): void;
  info(section?: string): Promise<string>;
  info(section?: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  time(callback: Redis.Callback<[string, string]>): void;
  time(): Promise<[string, string]>;
  time(callback?: any): void | Promise<[string, string]> {
    throw new Error('Method not implemented.');
  }
  monitor(callback: Redis.Callback<EventEmitter>): void;
  monitor(): Promise<EventEmitter>;
  monitor(callback?: any): void | Promise<EventEmitter> {
    throw new Error('Method not implemented.');
  }
  ttl(key: Redis.KeyType, callback: Redis.Callback<number>): void;
  ttl(key: Redis.KeyType): Promise<number>;
  ttl(key: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  pttl(key: Redis.KeyType, callback: Redis.Callback<number>): void;
  pttl(key: Redis.KeyType): Promise<number>;
  pttl(key: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  persist(key: Redis.KeyType, callback: Redis.Callback<Redis.BooleanResponse>): void;
  persist(key: Redis.KeyType): Promise<Redis.BooleanResponse>;
  persist(key: any, callback?: any): void | Promise<Redis.BooleanResponse> {
    throw new Error('Method not implemented.');
  }
  slaveof(host: string, port: number, callback: Redis.Callback<string>): void;
  slaveof(host: string, port: number): Promise<string>;
  slaveof(host: any, port: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  debug: Redis.OverloadedSubCommand<Redis.ValueType, any>;
  config(op: 'GET', cfg: string): Promise<string[]>;
  config(op: 'GET', cfg: string, callback: Redis.Callback<string[]>): void;
  config(op: 'REWRITE' | 'RESETSTAT'): Promise<'OK'>;
  config(op: 'REWRITE' | 'RESETSTAT', callback: Redis.Callback<'OK'>): void;
  config(op: 'SET', key: string, value: Redis.ValueType): Promise<'OK'>;
  config(op: 'SET', key: string, value: Redis.ValueType, callback: Redis.Callback<'OK'>): void;
  config(op: any, key?: any, value?: any, callback?: any): void | Promise<'OK'> | Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  subscribe: Redis.OverloadedListCommand<string, number>;
  unsubscribe: Redis.OverloadedCommand<string, number>;
  psubscribe: Redis.OverloadedListCommand<string, number>;
  punsubscribe: Redis.OverloadedCommand<string, number>;
  publish(channel: string, message: string, callback: Redis.Callback<number>): void;
  publish(channel: string, message: string): Promise<number>;
  publish(channel: any, message: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  publishBuffer(channel: string, message: Buffer): Promise<number> {
    throw new Error('Method not implemented.');
  }
  watch: Redis.OverloadedListCommand<Redis.KeyType, 'OK'>;
  unwatch(callback: Redis.Callback<string>): void;
  unwatch(): Promise<string>;
  unwatch(callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  cluster: Redis.OverloadedSubCommand<Redis.ValueType, any>;
  restore: Redis.OverloadedListCommand<Redis.ValueType, 'OK'>;
  migrate: Redis.OverloadedListCommand<Redis.ValueType, 'OK' | 'NOKEY'>;
  dump(key: Redis.KeyType, callback: Redis.Callback<string>): void;
  dump(key: Redis.KeyType): Promise<string>;
  dump(key: any, callback?: any): void | Promise<string> {
    throw new Error('Method not implemented.');
  }
  object: Redis.OverloadedListCommand<Redis.ValueType, any>;
  client: Redis.OverloadedSubCommand<Redis.ValueType, any>;
  eval: Redis.OverloadedEvalCommand<Redis.ValueType, any>;
  evalsha: Redis.OverloadedEvalCommand<Redis.ValueType, any>;
  script: Redis.OverloadedSubCommand<Redis.ValueType, any>;
  quit(callback: Redis.Callback<'OK'>): void;
  quit(): Promise<'OK'>;
  quit(callback?: any): void | Promise<'OK'> {
    throw new Error('Method not implemented.');
  }
  scan(cursor: string | number): Promise<[string, string[]]>;
  scan(cursor: string | number, matchOption: 'match' | 'MATCH', pattern: string): Promise<[string, string[]]>;
  scan(
    cursor: string | number,
    matchOption: 'match' | 'MATCH',
    pattern: string,
    callback: Redis.Callback<[string, string[]]>,
  ): void;
  scan(cursor: string | number, countOption: 'COUNT' | 'count', count: number): Promise<[string, string[]]>;
  scan(
    cursor: string | number,
    countOption: 'COUNT' | 'count',
    count: number,
    callback: Redis.Callback<[string, string[]]>,
  ): void;
  scan(
    cursor: string | number,
    matchOption: 'match' | 'MATCH',
    pattern: string,
    countOption: 'COUNT' | 'count',
    count: number,
  ): Promise<[string, string[]]>;
  scan(
    cursor: string | number,
    matchOption: 'match' | 'MATCH',
    pattern: string,
    countOption: 'COUNT' | 'count',
    count: number,
    callback: Redis.Callback<[string, string[]]>,
  ): void;
  scan(
    cursor: string | number,
    countOption: 'COUNT' | 'count',
    count: number,
    matchOption: 'match' | 'MATCH',
    pattern: string,
  ): Promise<[string, string[]]>;
  scan(
    cursor: string | number,
    countOption: 'COUNT' | 'count',
    count: number,
    matchOption: 'match' | 'MATCH',
    pattern: string,
    callback: Redis.Callback<[string, string[]]>,
  ): void;
  scan(
    cursor: any,
    countOption?: any,
    count?: any,
    matchOption?: any,
    pattern?: any,
    callback?: any,
  ): void | Promise<[string, string[]]> {
    throw new Error('Method not implemented.');
  }
  sscan: Redis.OverloadedKeyCommand<Redis.ValueType, [string, string[]]>;
  hscan: Redis.OverloadedKeyCommand<Redis.ValueType, [string, string[]]>;
  zscan: Redis.OverloadedKeyCommand<Redis.ValueType, [string, string[]]>;
  pfmerge: Redis.OverloadedKeyCommand<Redis.KeyType, 'OK'>;
  pfadd: Redis.OverloadedKeyCommand<string, number>;
  pfcount: Redis.OverloadedListCommand<Redis.KeyType, number>;
  pipeline(commands?: string[][]): Redis.Pipeline {
    throw new Error('Method not implemented.');
  }
  scanStream(options?: Redis.ScanStreamOption): Readable {
    throw new Error('Method not implemented.');
  }
  sscanStream(key: Redis.KeyType, options?: Redis.ScanStreamOption): Readable {
    throw new Error('Method not implemented.');
  }
  hscanStream(key: Redis.KeyType, options?: Redis.ScanStreamOption): Readable {
    throw new Error('Method not implemented.');
  }
  zscanStream(key: Redis.KeyType, options?: Redis.ScanStreamOption): Readable {
    throw new Error('Method not implemented.');
  }
  xack: Redis.OverloadedKeyCommand<Redis.ValueType, number>;
  xadd: Redis.OverloadedKeyCommand<Redis.ValueType, string>;
  xclaim: Redis.OverloadedKeyCommand<Redis.ValueType, [string, string[]][]>;
  xautoclaim: Redis.OverloadedSubCommand<Redis.ValueType, [string, [string, string[]][]]>;
  xdel: Redis.OverloadedKeyCommand<string, number>;
  xgroup: Redis.OverloadedSubCommand<Redis.ValueType, number | 'OK'>;
  xinfo: Redis.OverloadedSubCommand<Redis.ValueType, any>;
  xlen(key: Redis.KeyType): Promise<number>;
  xlen(key: Redis.KeyType, callback: Redis.Callback<number>): void;
  xlen(key: any, callback?: any): void | Promise<number> {
    throw new Error('Method not implemented.');
  }
  xpending: Redis.OverloadedKeyCommand<Redis.ValueType, any>;
  xrange: Redis.OverloadedKeyCommand<Redis.ValueType, [string, string[]][]>;
  xread: Redis.OverloadedListCommand<Redis.ValueType, [string, [string, string[]][]][]>;
  xreadgroup: Redis.OverloadedKeyCommand<Redis.ValueType, [string, [string, string[]][]][]>;
  xrevrange: Redis.OverloadedKeyCommand<Redis.ValueType, [string, string[]][]>;
  xtrim: Redis.OverloadedKeyCommand<Redis.ValueType, number>;
}
