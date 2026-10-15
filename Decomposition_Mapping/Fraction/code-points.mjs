import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE13Q0Q3AIAgE0IX4AASLsxD3X6NpxXjx9+WOeGZKBKUNCu1MrnNSSgwg/mkwpQumwhWbXobVZ1njYzbIolggKmVK6XxZg1wrM8htc3jitk7petkD96wsKL1dhlP6MsNv2CbQ3fbt8MvOjgXhlBZn7HwBO4IMVo4BAAA=', 'base64'))));
