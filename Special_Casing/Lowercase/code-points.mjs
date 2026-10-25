import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H1YBQIyUqONbCqyrlmPczk7wk9FittO/mwynMLZtu0vD5gEllHBAFIaUO3GVDrdDvHwidjvtFH4KRViildBqCPNd7d2j2cgSDVc+WURsIJ4t8T8GqXl8EIaWPYh1JT6RlVXWjIn5YH8nNCniny/gVMY0om/mXV4GMSI2QGzr6r4S', 'base64')).toString());
