module.exports=JSON.parse(require('zlib').gunzipSync(Buffer([31,139,8,0,0,0,0,0,0,3,45,153,81,150,236,40,12,67,55,212,31,1,131,141,215,242,206,236,127,27,163,107,213,71,137,234,68,22,46,80,192,164,255,85,190,191,202,254,171,250,244,89,250,108,125,66,159,163,207,213,39,245,41,125,196,43,241,158,120,79,188,39,222,19,239,137,247,196,123,226,61,241,158,120,79,188,22,175,197,107,241,90,188,22,175,197,107,241,90,188,22,175,251,239,125,159,62,75,159,173,79,232,115,244,185,250,164,62,165,207,211,71,188,37,222,18,111,137,183,196,91,226,45,241,150,120,75,188,37,222,18,111,139,183,197,219,226,109,241,182,120,91,188,45,222,22,111,139,183,197,11,241,66,188,16,47,196,11,241,66,188,16,47,196,11,241,66,188,35,222,17,239,136,119,196,59,226,29,241,142,120,71,188,35,222,17,239,138,119,197,187,226,93,241,174,120,87,188,43,222,21,239,138,119,197,75,241,82,188,20,47,197,75,241,82,188,20,47,197,211,124,60,205,199,211,124,60,205,199,211,124,60,205,199,211,124,60,205,199,211,124,60,205,199,211,124,60,205,199,90,234,68,144,64,1,15,208,141,163,95,45,72,160,128,7,112,67,63,93,176,128,13,4,112,0,34,130,136,32,34,136,8,34,14,17,135,136,67,196,33,226,16,113,136,56,68,28,34,14,17,135,136,75,196,37,226,18,113,137,184,68,144,238,33,221,67,186,135,116,207,164,155,68,36,17,73,68,18,145,68,36,17,73,68,18,145,68,36,17,5,185,224,21,188,130,82,80,24,151,75,191,151,126,47,253,94,250,189,244,123,233,247,210,239,165,223,75,191,151,126,47,253,166,60,38,152,111,1,28,224,2,9,20,240,0,197,166,204,38,32,98,19,177,137,216,68,48,246,201,216,39,99,159,140,125,50,246,201,216,39,99,159,140,85,49,76,197,48,21,233,22,233,22,233,22,233,22,233,22,73,22,73,22,73,22,73,22,131,83,12,78,49,36,60,195,139,7,120,241,4,47,30,225,197,51,188,120,112,22,14,94,88,120,225,225,133,137,23,46,94,216,120,225,227,133,145,23,78,94,88,121,225,229,133,153,23,110,94,216,121,225,231,133,161,23,142,94,88,122,225,233,133,169,23,174,94,216,122,225,235,133,177,23,206,94,88,123,225,237,213,144,27,114,67,110,200,13,185,33,55,228,134,220,67,230,103,181,126,214,254,52,126,130,249,214,2,141,159,96,1,27,8,224,0,87,80,220,45,238,22,119,139,187,53,55,18,64,170,144,42,164,30,228,7,249,65,126,144,31,228,7,249,65,126,240,26,94,195,107,120,90,204,246,210,243,33,120,128,40,155,62,54,125,108,250,216,244,177,233,99,211,199,166,143,77,31,155,62,182,86,76,1,17,116,180,233,104,63,34,232,109,211,219,166,183,77,111,155,222,118,19,209,68,52,17,77,68,19,161,5,116,135,86,80,193,2,54,16,192,1,46,160,136,72,110,36,215,146,8,134,41,24,166,96,152,130,97,138,226,46,191,35,248,29,65,206,65,146,241,230,207,2,30,128,0,73,6,73,30,186,60,116,201,50,178,15,57,31,242,59,228,119,200,239,146,223,253,248,198,228,93,38,143,231,109,243,188,109,30,161,205,227,178,121,92,54,143,134,128,27,76,104,198,92,147,94,30,110,144,110,146,110,50,206,73,46,73,46,37,239,110,158,158,205,211,179,121,122,54,79,143,160,0,241,120,132,4,220,224,23,177,87,109,54,142,205,138,186,89,74,53,9,11,216,64,0,146,122,76,64,243,43,91,75,129,64,2,173,103,70,163,254,4,122,246,3,175,197,146,9,5,23,208,93,173,180,64,0,220,56,115,173,128,7,180,224,242,231,229,79,205,135,64,82,251,3,148,169,64,177,155,27,248,42,240,85,48,231,193,156,135,80,160,212,4,7,184,128,120,71,115,30,44,250,193,162,31,140,184,224,1,138,184,135,63,73,45,53,91,193,232,6,163,43,120,128,40,9,133,193,22,192,211,72,10,224,145,110,146,110,94,120,36,153,9,79,211,24,172,77,193,138,20,12,177,32,129,2,30,160,8,214,166,96,109,10,106,134,160,104,8,166,34,152,138,160,110,8,10,135,96,221,8,214,141,96,236,5,243,77,148,214,252,10,14,112,129,4,230,198,3,20,203,210,18,44,45,193,210,18,44,45,193,210,18,44,45,193,210,18,172,42,2,200,140,110,147,85,147,85,23,188,130,247,184,246,184,246,16,32,221,126,115,3,1,210,109,210,109,210,237,70,165,137,32,221,102,62,154,156,155,249,232,73,156,121,107,205,219,249,244,44,8,22,176,129,0,14,112,129,4,10,120,0,17,139,136,69,196,34,98,17,177,136,88,68,44,34,22,17,139,136,69,196,38,98,19,177,137,216,68,108,34,54,17,155,136,77,196,38,66,19,127,150,166,251,224,216,131,99,15,142,61,56,246,224,216,131,99,15,142,61,75,251,130,0,242,133,119,225,93,40,23,202,227,79,13,211,89,13,175,225,105,61,56,155,223,177,249,29,155,223,177,249,29,155,52,180,126,9,130,27,50,161,234,21,137,50,161,135,9,61,76,232,109,13,137,160,128,39,136,1,110,200,167,151,25,188,204,96,50,156,201,112,230,167,249,21,180,96,110,20,55,138,27,154,223,100,55,72,118,131,100,55,72,150,250,100,149,79,86,249,100,149,79,86,249,100,149,23,16,209,68,52,188,38,162,145,215,92,230,250,0,57,49,169,190,146,129,208,234,165,48,170,170,100,57,76,170,170,164,130,74,42,168,164,40,74,202,158,164,236,73,202,158,204,2,180,77,8,20,81,154,5,193,1,46,144,64,1,15,16,153,154,33,41,23,146,181,46,89,225,4,220,69,143,101,46,121,26,147,74,33,169,20,146,231,50,121,252,146,199,47,41,13,146,250,62,41,240,147,10,63,41,241,147,26,63,41,242,147,42,63,41,239,147,250,56,41,144,147,10,57,41,145,147,26,57,41,146,147,42,57,41,147,147,42,35,169,50,146,42,35,169,50,146,42,35,169,50,178,53,231,130,0,14,192,53,178,226,145,76,118,251,228,185,76,158,203,100,86,147,71,82,160,67,2,166,46,76,93,152,186,48,117,97,234,194,212,133,169,11,83,23,166,174,239,192,59,240,56,192,48,221,197,116,23,211,93,108,249,197,150,95,236,246,2,40,28,94,48,127,225,123,193,252,169,46,49,186,128,27,50,102,97,91,193,124,59,192,5,18,40,224,1,10,219,228,183,201,143,141,84,80,128,238,6,157,179,175,10,54,0,133,12,216,102,139,109,182,216,102,139,109,182,216,102,139,109,182,216,102,5,68,112,132,98,169,47,150,122,1,100,142,81,90,91,254,74,203,5,160,187,135,76,15,169,29,82,163,112,173,244,55,206,122,36,201,174,91,20,174,69,225,90,20,174,69,225,90,236,196,197,78,92,20,174,69,225,90,20,174,69,225,90,236,206,197,238,92,236,31,2,34,130,136,32,34,136,8,34,130,8,166,130,157,164,216,73,4,68,48,196,201,16,231,33,226,16,113,136,96,196,243,18,193,176,39,195,158,12,123,94,34,46,17,151,136,75,196,37,226,18,145,68,36,17,73,68,18,145,68,36,17,73,68,18,49,167,92,142,185,201,164,80,61,8,184,86,115,196,227,140,199,33,148,114,230,81,206,8,56,231,113,16,61,156,68,15,71,209,195,89,244,112,24,61,107,78,133,68,112,30,101,156,101,251,57,37,242,39,231,206,195,193,147,51,216,99,59,126,108,199,143,51,216,227,12,246,56,131,61,206,96,111,206,96,90,89,99,240,12,114,162,99,108,214,98,41,0,239,96,14,250,250,27,228,0,56,135,8,159,34,124,140,240,57,194,7,9,159,36,124,148,88,53,39,196,154,35,226,156,43,124,176,240,201,194,71,11,159,45,124,184,88,236,229,224,196,230,196,230,196,230,196,214,196,214,196,214,196,214,196,214,196,234,209,91,59,56,239,8,215,224,30,20,103,207,97,114,115,154,212,232,176,227,237,156,109,129,67,23,120,6,239,96,14,154,243,6,217,54,176,48,200,142,130,73,64,248,21,57,40,126,204,230,25,179,93,198,236,141,170,139,239,160,56,42,182,184,190,149,21,24,131,190,114,7,135,51,58,155,93,82,136,130,170,221,193,53,56,177,103,98,207,196,142,254,182,254,153,216,51,177,236,159,65,129,14,198,224,25,188,131,57,88,131,111,112,248,147,73,76,38,49,153,196,100,18,147,73,76,38,49,153,196,100,18,147,73,76,38,49,153,176,112,156,169,20,207,148,138,218,145,134,115,38,195,51,25,158,201,240,76,134,156,214,133,195,167,72,7,247,160,175,156,193,59,152,131,68,221,250,6,135,83,195,121,40,223,134,147,147,79,250,123,191,65,162,138,98,72,24,131,112,106,230,171,168,18,132,115,253,230,32,106,248,240,184,82,114,129,52,213,144,22,23,54,241,203,110,0,222,65,95,169,193,55,216,160,220,8,174,193,61,24,131,19,27,19,27,19,27,19,27,19,27,19,123,231,250,157,235,119,174,223,185,158,163,153,163,153,163,153,163,153,163,153,163,153,19,155,19,155,19,155,19,91,19,203,206,156,56,83,139,24,219,94,178,138,128,49,120,6,239,32,27,239,212,33,111,10,145,55,149,200,91,223,26,220,131,111,112,174,175,111,112,238,222,185,123,99,240,12,246,236,239,179,163,239,217,135,25,13,109,196,179,19,83,21,53,167,43,112,13,238,193,225,244,108,222,61,251,120,79,108,207,38,222,222,197,189,141,207,62,78,110,194,217,206,239,92,207,185,206,136,53,175,244,192,61,24,131,103,176,6,81,123,207,72,236,155,124,154,153,21,190,65,174,119,204,117,102,86,24,131,103,240,14,230,224,68,197,68,197,68,77,181,64,217,40,100,155,252,168,165,133,53,215,121,29,250,81,64,130,195,153,154,194,69,133,171,10,151,21,223,212,41,148,144,224,68,177,97,127,107,190,175,223,247,24,204,65,215,53,20,54,193,254,244,197,244,21,211,87,76,95,49,125,197,244,53,149,196,55,165,196,55,181,196,55,187,253,199,158,37,204,249,206,182,247,201,232,131,49,232,43,119,48,7,107,16,133,187,134,185,134,185,134,185,134,57,227,64,157,7,250,251,148,78,108,236,31,181,30,117,211,212,81,108,235,31,239,142,192,185,123,231,250,20,78,51,26,107,70,99,205,104,44,106,106,61,219,100,190,112,44,232,43,212,93,139,178,66,200,149,41,164,214,166,72,17,174,193,61,56,119,41,84,132,119,48,7,135,31,195,28,29,86,72,33,213,199,138,169,235,98,10,187,160,236,16,214,224,27,28,230,228,204,107,202,154,247,148,53,47,42,107,222,79,214,188,160,172,121,67,89,243,138,178,230,245,100,205,251,201,154,23,148,53,111,40,107,94,81,202,145,26,91,48,6,207,224,29,76,176,140,195,212,108,130,13,170,64,4,215,160,20,14,103,15,48,7,107,144,253,55,120,195,61,13,187,110,115,106,155,230,184,185,211,164,47,166,47,230,239,98,186,41,55,207,77,79,51,219,185,26,199,149,227,202,113,229,184,114,92,57,110,94,63,55,39,187,105,150,155,237,102,84,98,74,10,53,191,191,164,185,103,62,166,185,110,210,77,185,121,110,122,26,42,155,61,147,51,205,118,19,110,172,114,173,114,173,114,173,114,173,114,173,146,86,73,171,164,85,210,42,191,148,210,42,105,149,180,74,90,37,173,82,86,41,171,148,85,202,42,101,149,178,74,89,165,172,82,86,41,171,60,171,60,171,60,171,60,171,60,171,60,171,60,171,60,171,60,171,60,171,180,85,218,42,109,149,182,74,91,165,173,210,86,105,171,244,168,80,224,78,115,220,92,55,233,166,220,252,152,211,31,229,238,52,203,205,118,99,149,101,149,101,149,101,149,101,149,101,149,101,149,109,149,109,149,109,149,109,149,109,149,109,149,109,149,109,149,109,149,109,149,176,74,88,37,172,18,86,9,171,132,85,194,42,97,149,176,74,88,229,88,229,88,229,88,229,88,197,254,60,246,231,177,63,143,253,121,236,207,99,127,30,251,243,216,159,199,254,60,246,217,177,11,120,5,170,134,151,160,211,44,55,219,77,184,185,110,210,77,185,121,110,28,238,9,184,158,128,235,9,184,158,128,235,9,184,158,128,235,9,184,158,128,235,9,184,51,1,119,205,128,220,53,3,114,215,12,200,93,225,123,51,32,119,205,128,92,206,195,60,237,122,114,166,89,110,126,23,195,205,113,115,221,164,155,114,243,220,244,52,101,149,178,74,89,165,172,82,86,41,171,148,85,202,42,101,149,178,202,179,202,179,202,179,202,179,202,179,202,179,202,179,202,179,202,179,202,179,74,91,165,173,210,86,105,171,180,85,218,42,109,149,182,74,91,165,71,133,127,90,78,179,220,108,55,225,230,184,185,110,210,77,185,121,110,172,178,172,178,172,178,172,178,172,178,172,178,172,178,172,178,172,178,172,178,172,178,173,178,173,178,173,178,173,178,173,178,173,178,173,178,173,178,173,178,173,18,86,9,171,132,85,194,42,97,149,176,74,88,37,172,18,86,9,171,28,171,28,171,216,68,188,10,154,198,42,199,42,199,42,199,42,199,42,199,42,215,42,215,42,215,42,215,42,215,42,215,42,215,42,215,42,215,42,215,42,246,238,179,119,159,189,251,236,221,103,239,62,123,247,217,187,207,222,125,246,238,179,119,159,189,251,236,221,103,239,62,123,247,217,187,207,222,125,246,238,179,119,159,189,251,236,221,103,239,62,123,247,217,187,207,222,125,246,238,179,119,159,189,251,236,221,103,239,62,123,247,217,187,207,222,125,246,238,179,119,159,189,251,236,221,103,239,62,123,247,217,187,207,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,219,222,109,123,183,237,221,182,119,187,251,191,255,1,27,175,103,215,171,34,0,0])))