import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H9oAQGRwXqzjEUXUw3/u9O3a32oRJnLst4OL4kADwZBtyE7Ft343ka8UCA8QVkm+8u5T+g7heIFyycDgU6V0tG5JJQWYYt2iacq50xV6c+Yud2jD57ERU0vELCfMA74WXBuQGM+zJ+vWfz8g7A==', 'base64')).toString());
