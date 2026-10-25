import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H94C6GVgnrEOrDJO+H93r+0euw8os6C24KllmQaStH1h/rABVxTi9Il0OE0hEUbWXMa5+DvaAlKQEODEBGBhSPuCwURDRURwe+JgYTxqB0OUwTxAfKECj4J8eThY+gc6mtGKSM6ESP7CP/rvkJhfaPH5gxaff2jx85cuYa0ChU78vrajbXE=', 'base64')).toString());
