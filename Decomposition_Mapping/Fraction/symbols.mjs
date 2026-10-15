import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE03OyQ3CMBBG4V7+8xyyB2qxUgwSIHFL2JeQNAIcUkoq4eDnyMdvnsca5zR9ZErnzbZQY07TF2aeP5nypc67llzjDq/xEacJgxODHJ9lyiJf6CW+0oNvHBB8l6mI/GC/wk+Zysgv+gr3/Bf85n3wIFMdeWTfc3+QKfHnN3/zJTqdPgEAAA==', 'base64'))));
