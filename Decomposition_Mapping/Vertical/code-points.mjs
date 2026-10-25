import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H9cA+GVqXkyTInz9FaHJtjytogqD7jL6u8kw5AEObKC0DKCAA/782irVXY95aZA6QrKZIpRvVxYh+eRDPr+/qz13ka949J3V0/1ASSPOUj6r7NtH4g7Ym+QfEOCM92KntuWLygMA', 'base64')).toString());
