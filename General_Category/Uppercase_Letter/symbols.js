module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,109,154,201,146,244,186,177,131,223,229,172,189,104,50,147,164,184,36,149,73,207,243,60,61,134,223,223,114,88,95,133,209,225,133,110,128,247,148,32,32,89,4,74,253,251,239,63,172,31,126,244,195,126,174,251,185,226,185,242,185,206,115,253,248,185,126,242,92,63,125,174,159,61,215,207,159,235,23,207,245,203,231,250,213,115,253,250,185,126,243,92,191,125,174,223,61,215,239,159,235,15,207,245,199,231,250,211,115,253,249,185,254,242,92,127,125,174,191,61,215,63,254,245,245,117,127,1,10,160,2,12,224,128,6,232,128,1,184,0,19,176,0,27,112,3,2,144,128,243,130,64,79,160,39,208,19,232,9,244,4,122,2,61,129,140,64,70,32,35,144,17,200,8,100,196,43,163,124,125,1,42,192,1,29,112,1,22,224,6,192,83,224,41,240,20,120,10,60,5,158,2,79,129,167,192,83,225,169,240,84,120,42,60,21,158,10,79,133,167,194,99,240,24,60,6,143,193,99,19,176,1,1,120,119,167,120,1,24,160,1,6,0,25,142,12,71,70,67,70,67,70,67,70,67,70,195,78,131,167,193,211,224,233,240,116,120,58,60,29,158,14,79,135,167,195,211,225,25,240,12,120,6,60,3,158,1,207,96,62,131,249,12,230,115,49,150,11,158,11,158,11,158,139,249,92,240,92,8,187,32,188,16,118,49,240,137,194,201,35,38,147,159,60,98,242,136,201,35,38,154,39,150,39,82,39,204,11,230,133,230,5,225,130,112,65,184,208,188,32,92,72,93,16,110,20,110,8,55,82,55,95,146,13,225,70,225,134,144,144,41,68,74,33,64,10,113,81,72,137,66,56,20,50,161,16,5,37,184,157,4,40,28,252,242,57,230,137,247,68,106,242,244,196,123,162,48,145,145,72,77,120,14,50,14,183,31,110,63,200,56,240,28,120,14,60,231,229,169,196,78,37,118,42,177,83,137,157,74,236,84,98,167,18,59,149,216,169,196,78,37,118,42,177,83,137,157,74,236,84,98,167,18,59,149,216,169,196,78,37,118,42,177,83,137,157,74,236,84,98,167,18,59,149,216,169,196,78,37,118,170,241,97,66,166,18,50,213,184,139,144,169,132,76,117,158,78,218,84,71,134,35,131,216,169,196,78,37,118,140,99,110,28,115,227,116,219,120,191,81,198,57,181,235,2,76,192,2,220,0,152,57,167,198,241,180,201,35,56,167,198,57,181,217,0,60,139,3,107,28,88,155,60,116,242,208,185,1,60,157,179,108,19,25,28,106,227,80,219,66,207,66,6,167,219,22,50,56,230,198,49,183,133,12,206,187,45,100,44,100,112,6,141,94,54,206,160,209,203,70,11,27,229,107,116,174,113,6,141,51,104,156,65,227,12,26,103,208,56,131,198,25,52,206,160,113,6,141,163,103,156,56,59,136,231,196,217,97,98,231,115,215,235,194,57,122,254,85,0,21,96,0,7,52,64,7,12,192,5,152,128,5,216,128,27,16,128,4,160,135,35,236,5,61,156,101,47,232,225,80,123,65,15,167,219,11,122,56,230,94,208,195,121,247,130,30,14,190,23,244,144,0,94,208,67,20,120,69,15,153,224,21,61,132,131,87,244,144,18,94,209,67,92,120,69,15,185,225,21,61,4,136,87,244,144,36,94,209,67,245,59,213,239,84,191,83,253,78,245,59,213,239,84,191,83,253,78,38,56,153,224,84,191,19,14,78,245,251,128,103,192,51,224,185,224,33,37,156,148,112,82,194,41,113,39,28,156,76,112,162,192,73,0,231,224,59,231,221,57,230,206,233,118,42,219,57,212,206,89,118,142,176,115,114,157,202,118,42,219,55,60,52,181,111,120,54,60,20,180,111,120,104,106,223,240,240,238,224,188,59,56,175,12,206,155,130,211,230,206,123,129,243,58,224,212,186,243,155,223,137,20,39,73,156,31,246,78,164,56,145,226,68,138,19,41,78,164,56,145,226,68,138,19,41,78,164,56,145,226,68,138,19,41,126,224,57,240,16,50,78,191,59,181,238,132,140,83,235,78,200,52,178,165,17,41,141,36,105,4,72,35,55,26,113,209,72,137,70,56,52,50,161,17,5,141,4,104,28,252,198,121,111,28,243,198,233,110,28,234,198,89,110,28,225,198,201,109,28,216,198,57,109,28,207,198,169,108,28,198,102,5,0,143,25,0,66,107,0,152,109,0,120,4,111,28,141,95,5,141,95,5,205,120,40,63,15,154,125,158,254,70,65,115,236,240,131,161,57,122,248,229,208,248,229,208,248,229,208,248,229,208,120,97,105,252,132,104,142,30,126,75,52,71,15,63,42,154,163,135,95,23,205,209,195,219,77,107,232,225,53,167,53,244,240,190,211,26,122,222,23,159,231,109,242,11,80,0,21,96,0,7,52,192,231,246,1,184,0,19,176,0,27,112,3,2,144,128,243,130,141,158,141,158,141,158,141,158,141,158,141,158,141,158,141,158,141,158,141,158,141,158,141,158,141,158,141,158,141,158,141,158,27,61,55,122,110,244,220,232,185,209,115,163,231,70,198,155,54,133,223,72,133,223,72,15,168,0,3,56,160,1,58,96,0,46,192,4,44,192,6,220,128,207,211,19,240,250,50,230,108,204,217,152,179,49,103,99,206,198,156,141,57,27,115,54,230,108,204,217,152,179,49,103,99,206,198,156,141,57,27,115,54,230,108,204,217,152,179,49,103,99,206,198,156,237,70,15,3,183,27,61,55,122,110,244,220,232,185,209,243,217,157,27,61,55,122,2,61,129,158,64,79,160,39,208,19,232,9,244,4,122,2,61,129,158,64,79,160,39,208,19,232,9,244,4,122,18,61,137,158,68,79,162,39,209,147,232,73,244,36,122,18,61,137,158,68,79,162,39,209,147,232,73,244,36,122,14,122,14,122,14,122,14,122,14,122,206,171,39,223,110,122,64,5,56,160,3,46,192,2,220,128,87,70,22,120,10,60,5,158,2,79,129,167,192,83,224,41,240,84,120,42,60,21,158,10,79,133,167,194,83,225,169,240,24,60,6,143,193,99,240,24,60,6,143,193,99,240,56,60,14,143,195,227,240,56,60,14,143,195,227,240,52,120,26,60,13,30,146,63,27,60,13,158,6,79,131,167,195,211,225,233,240,116,120,58,60,29,158,14,79,135,103,192,51,224,25,240,12,120,6,60,3,158,1,207,128,231,130,231,130,231,130,231,130,231,130,231,130,231,130,231,130,103,194,51,225,153,240,76,62,67,98,39,65,157,228,115,18,203,73,26,39,33,156,100,111,18,185,73,210,38,1,155,228,106,18,167,73,138,38,225,153,100,102,18,149,73,66,38,193,152,228,97,18,131,73,250,37,161,151,100,93,18,113,73,178,37,129,150,228,88,18,95,73,106,37,97,149,100,84,18,77,73,34,37,65,148,228,79,18,59,73,218,36,33,147,100,75,18,41,73,146,36,1,146,228,70,30,120,14,60,7,158,3,207,251,187,183,28,114,227,188,239,194,15,88,128,13,184,1,1,248,220,254,38,219,33,55,78,129,135,0,57,5,30,146,228,20,120,72,137,83,185,139,184,56,149,187,200,141,83,63,119,241,244,202,211,73,137,99,240,16,23,199,224,33,55,142,193,67,128,28,131,135,148,56,14,15,113,113,28,30,114,227,56,60,141,15,55,62,211,62,255,9,102,206,251,233,124,152,131,127,58,119,145,0,167,115,59,81,112,58,60,124,231,15,191,28,14,95,254,195,47,135,195,247,249,208,230,135,47,246,161,205,15,223,213,67,195,30,190,180,135,134,61,124,15,15,173,119,248,66,158,252,124,6,205,124,217,206,225,195,124,235,206,249,239,135,43,255,82,243,128,1,248,252,167,27,16,47,120,219,234,1,5,192,237,239,223,82,30,48,1,11,0,97,129,176,64,248,150,84,229,159,99,42,255,28,83,249,231,152,7,112,123,229,246,202,237,134,30,67,143,161,231,125,165,122,64,2,206,11,28,169,215,251,153,251,109,243,7,20,64,5,124,62,227,128,6,232,128,1,184,0,19,176,0,27,112,3,2,144,128,87,225,205,156,111,230,124,51,231,187,160,167,160,135,201,223,5,61,5,61,5,61,108,202,205,166,220,108,202,205,166,220,108,202,93,208,83,208,83,209,83,209,83,209,83,209,195,86,222,21,61,236,233,93,209,195,230,222,21,61,236,242,205,46,223,236,242,205,46,223,21,61,29,25,157,167,119,158,222,121,122,231,89,157,71,116,152,59,132,253,67,136,193,1,243,128,121,224,98,240,225,193,135,47,62,124,241,225,139,167,95,88,190,112,122,97,240,194,215,5,225,132,103,194,51,225,153,240,76,120,38,60,19,158,9,207,130,103,193,179,224,89,240,44,120,22,60,11,158,5,207,134,103,195,179,225,217,240,108,120,54,60,27,158,13,207,13,207,13,207,13,207,13,207,13,207,13,207,13,207,13,79,192,19,240,4,60,1,79,192,19,240,4,60,1,79,194,147,240,36,95,137,228,43,241,86,246,234,239,15,215,7,124,254,63,14,232,128,11,176,0,55,32,95,208,224,105,240,52,120,26,60,13,158,6,79,131,167,193,211,225,233,240,116,120,58,60,29,158,14,79,135,231,226,246,139,219,47,110,191,184,253,226,246,139,219,175,207,237,200,152,240,76,120,38,60,19,158,9,207,251,93,93,227,77,137,7,56,160,3,46,192,231,195,55,224,125,232,48,110,55,110,55,110,55,110,55,110,55,110,55,110,103,43,7,91,57,216,202,193,86,14,182,114,176,149,131,173,28,108,229,96,43,7,91,57,216,202,193,86,14,182,114,176,149,131,173,28,108,229,96,43,7,91,57,216,202,193,86,14,182,114,176,149,131,173,28,29,158,247,95,210,31,176,1,1,224,51,236,251,96,223,7,251,62,216,247,113,113,251,197,237,236,242,96,151,7,155,59,216,220,241,217,220,137,176,201,67,23,183,47,110,95,60,116,193,179,224,89,240,44,100,44,8,23,122,54,132,239,223,118,30,0,243,251,183,157,7,240,136,55,163,206,121,75,234,1,21,96,0,7,52,192,231,174,1,184,0,19,176,0,27,112,3,2,144,128,243,130,247,199,201,3,208,99,232,49,244,24,122,12,61,134,30,67,143,161,199,208,243,126,231,227,250,42,207,255,229,215,203,103,89,116,89,117,105,186,116,93,54,93,118,93,14,93,94,186,156,186,252,38,114,235,242,214,101,232,50,117,121,100,89,212,111,81,191,69,253,22,245,91,212,111,81,191,69,253,22,245,91,212,111,81,191,69,253,22,245,91,212,111,81,191,69,253,22,245,91,213,111,85,191,85,253,86,245,91,213,111,85,191,85,253,214,143,95,251,207,242,250,210,101,209,101,213,165,233,210,117,217,116,217,117,249,237,185,151,46,167,46,151,46,183,46,111,93,134,46,83,151,71,150,83,253,78,245,59,213,239,84,191,83,253,78,245,59,213,239,84,191,83,253,78,245,59,213,239,84,191,83,253,78,245,59,213,239,84,191,75,253,46,245,187,212,239,82,191,75,253,46,245,187,212,239,82,191,75,253,46,245,187,212,239,82,191,75,253,46,245,187,212,239,82,191,91,253,110,245,187,63,126,187,14,167,235,112,186,14,167,235,112,186,14,167,235,112,186,14,167,235,112,186,14,167,235,112,186,14,167,235,112,186,14,167,235,112,186,14,167,235,112,186,14,167,235,112,250,255,25,206,86,191,91,253,110,245,187,213,239,86,191,91,253,110,245,187,213,239,86,191,91,253,110,245,187,213,239,198,175,181,127,252,111,105,190,203,162,203,170,75,211,165,235,178,233,178,235,114,232,242,210,229,212,229,210,229,214,229,173,203,208,101,234,82,253,22,245,91,212,111,81,191,69,253,22,245,91,212,111,81,191,69,253,22,245,91,212,175,41,179,41,179,41,179,41,179,41,179,125,99,214,73,154,78,210,116,146,166,147,52,157,164,233,36,93,39,233,58,73,215,73,186,78,210,213,175,171,95,87,191,174,126,93,253,186,250,117,245,235,234,215,213,175,171,223,174,204,93,153,187,50,119,101,238,202,220,191,49,235,36,187,78,114,232,36,135,78,114,232,36,135,78,114,232,36,135,78,114,232,36,135,78,114,168,223,161,126,135,250,29,234,119,168,223,161,126,135,250,29,234,247,82,191,151,250,157,202,60,149,106,42,213,210,225,44,181,191,212,254,82,131,75,13,46,53,184,84,198,82,25,75,101,108,117,180,213,209,86,145,91,119,112,235,14,110,181,16,202,28,202,28,202,28,202,28,202,28,223,152,117,56,161,223,141,208,239,70,232,232,66,71,23,58,186,208,209,133,126,55,66,39,25,58,201,84,191,169,126,83,253,166,250,77,245,155,234,55,213,111,170,223,84,191,41,126,67,155,46,180,233,66,171,45,180,218,226,235,27,213,210,101,232,50,117,41,195,9,45,175,208,242,10,45,175,208,242,10,45,175,208,182,10,109,171,208,182,10,109,171,40,106,161,108,93,202,238,135,214,83,104,61,133,246,81,216,183,123,117,56,218,71,161,5,20,90,64,161,5,20,90,64,161,5,20,218,56,161,37,18,90,34,161,37,18,90,34,225,223,68,234,14,54,213,172,173,17,218,26,161,173,17,218,26,161,173,17,218,26,161,173,17,218,26,161,173,17,218,26,161,173,17,218,26,161,173,17,218,26,161,173,17,218,26,161,173,17,218,26,161,173,17,218,26,161,173,17,218,26,113,169,223,75,253,94,234,247,82,191,75,153,151,50,107,197,196,82,230,165,204,235,27,179,78,114,233,36,151,78,82,235,41,180,158,66,235,41,180,158,98,233,36,181,173,66,219,42,180,173,66,219,42,180,173,66,219,42,180,173,66,219,42,182,250,221,234,119,171,223,173,126,181,173,66,219,42,180,173,66,219,42,180,173,34,190,49,235,36,181,173,66,219,42,180,173,66,219,42,180,173,66,219,42,180,173,66,219,42,180,173,66,219,42,180,173,66,219,42,180,173,66,219,42,190,181,85,170,223,84,191,169,126,83,252,166,150,87,106,121,165,150,87,234,123,89,234,123,89,126,125,99,78,93,202,36,83,171,45,181,218,82,171,45,181,218,82,171,45,245,189,44,181,233,82,155,46,181,233,82,155,46,181,233,82,155,46,181,233,178,168,223,162,126,139,250,173,234,183,170,95,237,193,212,30,76,237,193,212,247,178,212,90,76,173,197,212,90,76,173,197,212,90,76,125,47,75,109,201,212,247,178,212,247,178,212,247,178,212,74,77,173,212,212,74,77,173,212,212,74,77,173,212,212,74,205,166,126,155,250,109,234,183,169,223,166,126,181,97,83,27,54,181,97,83,27,54,181,97,115,124,99,214,73,106,195,166,54,108,106,195,166,54,108,106,195,166,54,108,106,195,166,54,108,106,195,166,54,108,106,195,166,54,108,106,195,166,54,108,106,195,230,165,126,47,245,123,169,223,75,253,106,75,230,250,246,95,117,26,218,146,169,45,153,218,146,169,45,153,218,146,169,45,153,218,146,169,45,153,218,146,169,45,153,218,146,169,45,153,218,146,169,45,153,218,146,185,213,239,86,191,91,253,110,245,187,213,175,254,37,144,255,57,34,75,45,175,212,242,74,45,175,212,242,74,45,175,212,242,74,45,175,212,242,74,45,175,212,242,74,45,175,252,86,94,169,6,83,13,30,53,120,116,67,143,250,61,234,247,168,223,163,126,143,250,61,234,247,168,223,163,126,143,248,61,218,41,71,59,229,104,167,28,237,148,163,157,114,180,83,78,173,186,52,93,186,46,155,46,187,46,135,46,47,93,78,93,170,193,186,117,169,126,171,250,173,234,183,170,95,83,191,166,126,77,253,154,250,213,191,184,158,166,6,155,26,108,106,176,169,193,166,6,155,26,108,106,176,169,193,166,6,155,26,236,106,176,171,193,174,6,187,26,236,106,176,235,134,118,245,219,213,175,254,33,244,232,31,66,143,254,33,244,232,31,66,143,190,210,30,125,165,61,250,74,123,166,26,156,106,112,170,193,169,6,167,26,156,106,112,170,193,169,6,167,26,156,106,112,170,193,169,6,245,239,147,103,170,193,249,205,160,110,168,190,105,30,125,211,60,250,166,121,244,77,243,232,155,230,209,55,205,163,111,154,71,223,52,143,118,232,127,254,55,183,255,252,55,139,240,146,188,32,70,0,0])))