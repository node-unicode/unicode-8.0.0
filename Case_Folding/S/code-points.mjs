import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAEy3PwQ1EIQxDwYY4JIFP7FoQ/bexMt7byMrh5ZzGxKiadxxE10DsZU/5s5e87U9ue8uwW6aNgeiwKecztMM7tMM7Qy47ZfdQPXAP1QP3UD1wD9WD15OhndvWzv+uTsJWJ2ljICNsyq8nM+SyU349WWsg8zXk0s30vf7K5r0/ughLA1ABAAA=', 'base64'))));
