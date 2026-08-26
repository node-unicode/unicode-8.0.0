import { gunzipSync } from 'node:zlib';

export default JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE6tWMjM1MrdUsopWcooMcVXwD3JxDVLwdQzyVoqtBQDR/ZpDHQAAAA==', 'base64')));
