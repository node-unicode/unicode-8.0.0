import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAEzWQyQ0AIQwDG/KDkAOoxdr+21gFmZ8HcjgmV84J2sjvQ4ODZiGIhiXIhi0o8EQJVsMr2+ApE5wGlflouGXb5wBjSxsYR3qCOaQdTJMOMKd0gunSBWZILzBTeoNZ0gdM7W0ToV43cK+pqT7B0jZ3MOTCA4z33me/Satjex+7w3lwQJtqjwHWKwvrHtmNm7umRec+FEh07kOJxM39TasGOY52YDo4roN7sZnvplHf9/3lp80T4gEAAA==', 'base64'))));
