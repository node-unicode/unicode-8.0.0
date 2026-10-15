import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAEz2QwQ0EMQgDG/IjEMKSWqz038Ypu2eeI2ONBZnLRoAR5+CFBZp7bXGCkYICVycbXPUHG2BOgYGzwcFyc+EEYwiu2QSvuWt5aYmeNxutq4+1xTY4dewDnLp0A0NydzBk8LukOwGmZvkCszsJpjZ6gbuTK9Vr5pU+AgMzzjk/4MDDxGABAAA=', 'base64'))));
