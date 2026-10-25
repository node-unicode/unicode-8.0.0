import { brotliDecompressSync } from 'node:zlib';

export default JSON.parse(brotliDecompressSync(Buffer.from('H2YA4BSh0nfn9a7dHqTwjmwP0lxyXaKT247HA/LbOY0oyakacHLmqd2H1kXMBzcfiQ5uXxNML0tjGKRVYYLyQsFbRbg+1ky7QbquUTYZvB8=', 'base64')));
