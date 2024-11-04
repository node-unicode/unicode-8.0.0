module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))