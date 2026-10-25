import { brotliDecompressSync } from 'node:zlib';
import decodePropertyMap from '../decode-property-map.mjs';

export default decodePropertyMap(JSON.parse(brotliDecompressSync(Buffer.from('H9sGICyOd2AShxcN1hgP5dYbXJY9ORVLlzvY+raRRJSIm+VO4JVLpSWJRNxW+IsOWxJgpIF5KwpPLN2mEUjHNUWXg54WIYWMCmRlvMt9E5oEUh/lgTTBHofbZg/5SNvdpKNUDWwUZVhdtpsNxnegQPgkiNKkeLscECZ2SbvO3gXalK4sNp8pr88eYANfDf2uxrv/EijrlGot6qzJEA==', 'base64'))));
