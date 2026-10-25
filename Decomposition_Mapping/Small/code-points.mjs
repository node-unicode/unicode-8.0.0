import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H54A+I2Uq2PLkv3OH2d5i9VLySAZZLNhFv27n2ZiWiDD4xpVVEGmBzzqf2B8LtBAIF/B5QWieolTnVB9UIxew8kZN9jxhriJtcHyr5dDIb+6dmcKptsA', 'base64')).toString());
