import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAEy3HOS6EAQCG4bu8FfEW9qVwkskUComd2KI0Y5mxhrEOKjsdonMBDWcwJ5Gfr3ueUomf92tknLKFb5D5+BZZiu+Q5fge+XpNHoq8JY/IdyV5KrKZPBep/aVVXUU64wrSFVeR7ngN6YnXkd54A+mLN5H+uIYMxHVkMN5ChuJtpCPeQVr1RraLDMd7SFu8j7THB8hIfIiMxg1kNj5CVuJj5LOZnCBj8SkyGZ8hU/E5Mh03kZn4ApmLL5GF+ApZ/PfLBzJBufwL7aUbYdEBAAA=', 'base64'))));
