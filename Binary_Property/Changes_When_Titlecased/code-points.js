module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,45,152,65,150,196,56,8,67,47,212,139,194,128,13,103,153,55,247,191,198,232,43,179,136,94,181,65,41,68,220,22,169,127,246,253,237,252,237,254,197,239,167,43,116,29,93,169,171,116,181,174,171,235,233,26,93,202,11,229,133,242,66,121,161,188,80,94,40,47,148,23,202,11,229,133,242,142,242,142,242,142,242,38,254,206,73,93,165,171,117,93,93,79,215,232,218,191,147,63,93,202,201,163,75,121,169,188,84,94,42,47,149,151,202,75,229,149,242,74,121,165,188,82,94,41,175,148,87,202,43,229,148,114,90,57,173,156,86,78,43,167,149,211,202,105,221,167,21,191,138,93,173,95,173,93,173,93,173,61,173,61,173,61,173,61,173,61,173,81,243,104,109,180,54,90,27,173,173,214,86,107,171,53,117,238,168,111,169,158,165,250,149,234,85,170,79,169,30,165,250,147,234,75,170,39,169,126,164,122,145,234,67,74,127,74,123,30,214,148,39,205,41,189,41,173,41,157,41,141,41,125,41,109,41,93,89,90,147,166,148,158,148,150,148,142,148,142,148,142,148,142,148,142,148,142,148,142,148,142,148,142,148,142,148,142,124,250,142,209,247,142,190,87,58,114,244,221,210,145,210,145,171,181,189,127,165,103,93,170,187,84,115,233,185,150,106,46,61,195,210,243,43,61,187,82,189,165,58,75,207,165,244,44,74,207,161,84,95,169,182,82,109,165,30,151,250,91,170,171,154,191,21,191,186,207,213,250,213,250,21,231,106,237,105,237,105,237,105,237,105,77,61,46,245,184,212,227,82,109,165,30,151,106,43,213,86,234,113,169,199,165,30,23,53,170,207,165,62,183,250,220,170,181,213,227,86,189,173,30,183,246,95,107,239,181,106,110,213,220,170,185,181,207,90,123,172,181,191,90,181,183,122,220,234,113,171,199,173,30,183,122,220,210,208,234,113,75,67,171,191,173,254,182,250,219,210,209,210,209,234,111,171,191,173,254,182,234,110,245,179,85,119,171,167,173,122,91,245,182,234,109,213,219,170,183,213,207,86,205,189,165,75,49,213,221,250,183,106,213,125,85,247,213,254,184,250,127,186,250,31,186,170,253,170,246,171,218,175,250,125,181,71,174,234,191,170,255,106,159,92,213,127,85,255,213,62,185,170,255,170,230,171,125,127,85,239,45,62,235,30,170,249,106,159,95,213,125,245,12,174,250,126,245,252,175,250,60,202,31,245,117,84,231,168,198,81,125,163,250,70,245,173,254,103,87,247,90,233,223,226,179,214,244,63,180,122,158,171,255,161,213,253,87,247,95,221,127,117,255,213,253,87,247,95,245,102,245,156,87,253,217,86,158,122,180,250,206,85,159,86,207,123,213,171,213,51,95,245,107,245,220,87,123,114,245,236,87,251,114,245,252,87,181,173,106,91,237,207,85,63,87,123,116,181,23,86,61,221,199,9,164,117,237,211,85,205,171,222,238,176,38,142,106,95,234,86,79,151,147,234,59,167,56,164,124,66,249,120,242,217,228,195,137,211,233,23,62,198,72,225,112,250,113,42,253,56,142,126,143,115,237,177,246,56,217,30,220,231,179,141,27,60,110,240,200,27,110,48,220,96,96,12,140,129,49,48,6,198,248,56,132,49,48,22,198,194,88,24,11,99,97,44,140,133,177,48,214,39,168,143,80,206,80,116,248,180,245,113,235,243,214,7,174,79,92,31,185,62,115,191,67,247,59,117,97,248,220,245,193,235,147,215,71,175,207,94,31,190,62,125,209,235,179,55,14,121,135,148,67,244,16,72,2,73,32,9,36,129,36,80,4,202,71,58,129,34,80,4,154,64,19,184,6,159,246,68,47,209,71,148,198,6,61,13,218,25,116,146,83,95,64,128,214,197,216,28,8,208,171,160,77,65,135,130,230,196,218,50,240,11,186,113,104,196,161,7,7,249,7,229,7,209,7,189,7,149,199,6,131,187,96,43,129,167,4,134,18,184,73,96,39,129,151,4,70,18,184,72,96,33,129,127,4,230,17,56,135,128,0,42,49,141,192,49,2,187,8,252,34,48,140,192,49,2,203,8,60,35,48,141,192,53,2,219,8,124,35,48,142,192,57,2,235,8,188,35,48,143,192,61,2,251,8,252,35,48,144,192,65,2,11,9,60,36,48,145,192,69,2,27,9,124,36,48,146,192,73,2,43,17,16,64,121,242,144,147,231,155,60,223,228,249,38,207,55,121,190,249,12,3,144,194,86,78,106,193,4,2,23,8,108,64,0,131,173,140,35,8,96,80,95,178,149,147,34,177,8,1,12,182,114,82,46,150,33,128,193,86,78,10,47,182,114,81,61,102,34,72,160,128,6,46,240,128,1,96,176,149,11,89,197,86,46,180,97,60,2,78,114,173,117,248,92,215,90,199,183,118,129,247,247,90,143,236,113,98,191,43,89,130,4,26,120,0,129,37,176,4,150,192,18,80,165,239,169,72,65,2,13,60,128,64,16,8,2,65,128,47,122,65,224,16,56,4,14,129,67,224,16,72,2,73,32,9,36,129,36,80,4,138,0,149,190,34,64,185,175,9,52,129,38,208,4,154,192,37,112,9,92,2,151,192,37,240,8,60,2,143,192,35,240,8,160,252,161,252,161,252,161,252,161,252,161,252,161,252,161,252,161,252,161,124,80,62,40,31,148,15,202,7,229,131,242,65,249,160,124,80,62,40,31,148,15,202,7,229,131,242,65,249,232,127,75,64,84,51,129,128,20,77,107,2,242,144,63,200,159,242,159,208,144,63,200,31,228,15,242,7,249,131,252,65,254,32,127,144,63,200,31,228,15,242,7,249,131,252,65,254,32,31,111,123,152,155,128,0,242,7,249,24,221,195,229,4,4,144,63,200,95,228,47,242,23,249,139,252,69,254,34,127,145,191,200,95,228,47,242,23,249,139,252,69,254,34,127,145,191,40,95,68,47,122,87,51,145,128,168,38,35,1,41,242,215,135,193,62,28,246,97,177,15,15,125,152,232,195,69,31,54,250,240,209,135,145,62,28,242,97,145,15,143,124,152,228,195,37,31,54,249,240,73,1,140,225,211,248,19,92,148,239,192,69,254,46,92,204,254,167,127,201,193,37,5,7,72,160,128,22,232,159,73,240,128,1,86,112,96,28,24,7,198,129,145,124,74,127,130,155,112,19,46,3,198,47,225,38,220,226,83,241,169,185,75,115,151,134,219,112,27,110,195,109,184,13,183,97,52,140,11,227,194,184,228,93,242,46,121,151,188,75,222,37,143,185,230,247,200,27,62,141,63,241,29,12,57,184,243,224,206,131,59,15,238,60,184,238,224,186,131,235,14,174,59,184,238,224,186,131,235,14,174,59,28,55,195,113,51,28,55,195,113,51,28,55,131,145,14,70,58,58,235,5,9,55,225,210,151,160,37,216,231,68,241,169,252,137,60,109,121,253,47,145,76,35,2,129,113,253,9,218,229,139,144,138,135,10,96,32,53,30,223,246,248,54,4,6,218,112,206,105,190,188,185,11,243,168,224,0,4,184,75,115,151,190,78,121,192,0,186,75,211,176,166,97,140,175,2,24,15,198,131,49,140,128,135,185,239,48,248,29,38,191,195,232,119,152,253,180,209,181,107,73,73,198,196,244,156,200,160,152,48,18,70,194,72,24,9,35,97,120,174,244,96,233,201,242,27,45,97,120,184,244,116,233,241,210,243,101,125,131,136,95,33,61,203,164,135,25,123,92,164,199,25,91,93,164,7,26,59,94,240,26,21,159,241,5,175,83,241,249,95,240,90,21,159,13,6,175,87,241,185,97,240,154,5,154,155,230,254,63,251,152,251,141,64,105,238,55,9,165,185,223,64,148,230,122,46,202,50,215,227,81,150,185,158,146,178,204,245,176,148,101,174,103,166,44,115,63,141,109,174,39,168,108,115,251,27,189,204,109,115,219,220,54,183,205,189,206,247,160,149,215,209,235,245,231,187,61,223,199,51,150,157,253,51,234,207,164,63,131,254,204,249,51,230,207,148,63,67,254,204,248,51,226,207,132,63,3,182,249,130,142,186,219,229,62,151,59,92,238,109,185,171,229,126,86,126,195,162,163,238,94,185,111,245,77,146,223,40,249,205,146,223,48,249,77,147,238,73,185,27,213,223,164,233,168,181,87,59,106,237,229,73,179,220,129,242,172,89,30,54,203,211,102,121,220,172,247,141,169,142,186,27,229,145,179,60,115,150,135,206,242,212,89,30,59,203,115,103,123,248,110,15,222,237,110,180,247,85,91,111,123,95,181,85,183,247,85,91,123,123,95,245,249,242,199,232,209,216,251,170,243,155,144,205,117,79,218,251,170,221,153,246,190,106,247,167,189,175,218,93,106,239,171,118,175,218,251,170,221,177,246,190,106,247,173,189,175,218,221,107,239,171,254,70,114,239,171,254,38,115,239,171,118,63,219,251,170,221,213,246,190,106,247,182,221,91,14,12,61,203,27,198,52,126,43,207,200,107,63,199,6,232,232,115,244,57,250,28,29,71,199,209,113,116,28,29,71,215,209,117,116,29,93,71,151,40,175,194,96,26,137,242,162,11,62,163,115,210,57,233,156,116,52,29,77,71,203,209,114,180,28,45,71,203,209,38,250,92,207,115,61,207,245,60,215,243,92,207,115,61,207,245,140,43,25,87,194,80,4,122,61,194,232,104,56,26,142,250,103,145,241,15,35,12,71,160,163,174,127,92,255,184,254,113,253,227,250,199,245,143,235,31,215,63,174,127,92,255,184,254,113,253,227,250,25,147,64,71,219,209,118,212,79,109,252,212,134,31,82,132,215,232,168,159,203,248,185,140,159,203,184,15,188,250,131,223,103,50,215,170,215,170,215,170,215,170,215,170,215,170,215,170,215,170,215,170,215,170,215,186,152,125,116,240,83,149,94,29,198,232,207,26,65,192,48,30,99,26,203,104,214,250,103,36,234,17,154,75,85,122,241,248,25,195,120,140,105,44,99,27,175,241,25,199,104,110,152,27,230,134,185,97,110,152,27,230,134,185,97,110,152,27,230,30,115,143,185,199,220,99,238,49,247,152,123,204,61,230,30,115,253,163,216,166,185,105,174,127,34,115,127,132,230,186,75,235,159,205,152,17,65,115,211,220,50,183,204,45,115,203,220,50,183,204,45,115,203,220,50,183,204,109,115,219,220,54,183,205,109,115,219,220,54,183,205,109,115,253,188,248,185,6,52,247,154,123,205,189,230,94,115,175,185,151,31,155,116,40,24,191,207,99,92,240,254,140,97,60,160,206,10,208,249,207,249,207,249,143,31,171,112,73,240,26,159,113,140,142,250,199,172,244,207,89,233,31,180,112,73,176,140,230,182,185,109,110,155,219,230,94,115,175,185,215,220,107,238,53,247,154,123,205,189,230,94,115,175,185,242,211,123,239,239,195,48,30,99,26,203,216,198,107,124,198,49,46,24,230,134,185,97,110,152,27,230,134,185,97,110,152,27,230,134,185,199,220,99,238,49,247,152,123,204,61,230,30,115,143,185,199,220,99,110,154,155,230,166,185,105,110,154,155,230,166,185,105,110,154,171,189,119,103,208,59,188,21,130,199,152,198,50,182,241,26,159,113,140,230,134,185,97,110,152,27,230,134,185,97,110,152,27,230,134,185,97,238,49,247,152,123,204,61,230,30,115,143,185,199,220,99,238,49,247,152,155,230,166,185,105,110,154,155,230,166,185,105,110,154,155,230,126,122,203,220,50,183,204,45,115,203,220,50,183,204,45,115,203,220,50,87,59,243,197,240,58,22,126,29,13,206,94,176,141,215,248,140,99,92,112,204,226,85,85,104,238,152,59,230,142,185,99,238,152,59,230,142,185,107,238,154,187,230,174,185,107,238,154,187,230,174,185,107,46,111,186,193,41,10,134,241,24,243,223,255,0,218,223,213,164,229,25,0,0])))