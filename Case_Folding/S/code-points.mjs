import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H1oA+MXOFqtIvAnFmHXppE+fwAacxh6ITRMMbKcABJxwPVHct9cIjxIf7yBJWSIB', 'base64')).toString());
