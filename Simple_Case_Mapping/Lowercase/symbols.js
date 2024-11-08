module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))