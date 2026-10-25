import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('HywCKGRBz/OadBZmKszwBOfe761vlTYgyh9FVTSxzzrdGLL5kvmgyYVzmczouej/THCQiw4ivJTaq2LqULHwvPwBbCefO3q2YMjCnPNKYzOpUJ/HJ4HPGsE61N2AYPPhCxssf/8Kw0rjGsDGOPYj++wA52yA9j7BSOpsgf4kY+qrxBrrDBRMebYRSQy/NhnFrCuIeQDA6sefMypiojjvkyyy0uKGXRjZQjKt2LlEK0tA+swI/RbXA4BlF6jbB7QJesF5wdG9lKFi4On+nZRAGWhEdFxKOpa/gi8neZxIHB6rTDo=', 'base64')).toString());
