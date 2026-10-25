import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H3QC+B0JdizkVzyhakApU1OXNDFCdraYRJOP0pQbQbEJHx8ccvwdNCCIOEQuDrjrAE8oxQZT/7LYZOHzNLhOAQ==', 'base64')).toString());
