import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAEzXOxwkCAQBE0Vr8BgyjBZj7cLcSEdYOVNacI4YKbEcLsAVxGW/vHwam0+HzHCBEqJ+HiHfUd40QFTtG1OwxompPEC17ikjZM8Qril1zRN5eIAr2EtG1V4ievU5+/NebpMauLSJt7xA5e48o2gdEyT4iyvYJUbfPiKZ9QTTsKyIIHDdExr4jsvYD0SYMv0JXfwhCAQAA', 'base64'))));
