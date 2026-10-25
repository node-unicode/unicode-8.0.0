import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('Hy8CEIyUqONb9r+cHa81tm+PMCSpqMyH1IxoObyle95oj0WNPMYo+j47oFzPNsHMUwhkQ2btVQh8zZ7gR9QiRhcOzSOAQaDGjFkmKc867K2oE0jR14HZEUrSZ2F//4c4WevwGCPhtaOHxQMRyWZssf12ym7h0Nzgfvr0Np9u03Y9G9R24FXjucSz9hlGIa0j/DafURdSx5/BhRh6Mt8lldzv++n9pQ+E3cC7yAaZ9MfU6Y45QpR7pxFYkd3xaOhOrmMb+PVsQUhwjQSTkuclxZOZoWXxqgWiGkCQ2G+i3hgXw37DesXMHkEmruHupo3WQv/5P8qm2y3e7Ogl6aEd3DVC4EbMdle+cmWlRGx6LbmK9KhsYE12yfG40kGuCUE2rpEA', 'base64')).toString());
