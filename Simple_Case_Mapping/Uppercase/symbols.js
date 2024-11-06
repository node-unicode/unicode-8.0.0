module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))