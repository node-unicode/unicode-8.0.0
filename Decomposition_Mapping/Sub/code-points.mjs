import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H8IA+MXCbbFukcg97llE7GyVsxkTjNKULHY1fAjxo4Dvv8v455fwz62W6cxwRDn65AcY1UTCPFwCozIkg+RCSchYMZH7/zZDsSWIxHvfWgRveg==', 'base64')).toString());
