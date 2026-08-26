import ranges from './ranges.mjs';

export default ranges.flatMap((r) => Array.from(r.keys()));
