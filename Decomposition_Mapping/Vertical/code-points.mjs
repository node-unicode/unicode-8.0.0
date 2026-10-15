import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE03QQQ7EIAgF0AuxUECFsxDvf40J0k9m0+ZZsB8iJqseyhcr5XPfm1wq73SfPDXL072GDgpVYGYJm8P87AMWitWdSrG6clGIAJtiN14YmX2HlSfsFMaCz4eTjHuPJCeD+ojesyh8Afsfh0L7TqPQ7vH3/0823m6gN78MjGhcRhqTMvZlWu7+Vfvq/l3u/lPesJUPXNkGgvsoI7t/+bAO//JhGs99dHHuQ+69P8tsSpwUAgAA', 'base64'))));
