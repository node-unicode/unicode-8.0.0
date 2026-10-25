import { brotliDecompressSync } from 'node:zlib';

export default JSON.parse(brotliDecompressSync(Buffer.from('Dw6AeyI2NTI3OSI6WyJCWVRFIE9SREVSIE1BUksiXX0D', 'base64')));
