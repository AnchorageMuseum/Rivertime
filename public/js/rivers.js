global.river =  [
{"name": "Ship Creek", 
    "id": "15276000", 
    "description": "Municipality Of Anchorage, Alaska, Hydrologic Unit 19020401",
    "mean": 145.96174863, 
    "years": 73, 
    "latitude": "61°13'32\"", 
    "longitude": "149°38'06\"", 
    "elevation": "484.12 ft",
    "drainageArea": "89.6 square miles",
    "currentFlow": 0,
    "lastUpdate": ""
}, 
{"name": "Campbell Creek", 
    "id": "15274600", 
    "description": "Municipality Of Anchorage, Alaska, Hydrologic Unit 19020401",
    "mean": 67.48087432, 
    "years": 41, 
    "latitude": "61°08'22\"",
    "longitude": "149°55'24\"",
    "elevation": "9.1 ft",
    "drainageArea": "67.7 square miles",
    "currentFlow": 0,
    "lastUpdate": ""
}, 
{"name": "Susitna River", 
    "id": "15292780", 
    "description": "Matanuska-Susitna Borough, Alaska, Hydrologic Unit 19020505",
    "mean": 24582.04918033, 
    "years": 11, 
    "latitude": "62°10'31.3\"", 
    "longitude": "150°10'13.5\"", 
    "elevation": "270 ft",
    "drainageArea": "11,070 square miles",
    "currentFlow": 0,
    "lastUpdate": ""
}, 
{"name": "Matanuska River", 
    "id": "15284000", 
    "description": "Matanuska-Susitna Borough, Alaska, Hydrologic Unit 19020402",
    "mean": 3953.32240437, 
    "years": 47, 
    "latitude": "61°36'33\"", 
    "longitude": "149°04'15\"", 
    "elevation": "185.2 ft",
    "drainageArea": "2,060 square miles",
    "currentFlow": 0,
    "lastUpdate": ""
   }, 
{"name": "Knik River", 
    "id": "15281000", 
    "description": "Matanuska-Susitna Borough, Alaska, Hydrologic Unit 19020402",
    "mean": 7305.65300546, 
    "years": 0, 
    "latitude": "61°30'18\"", 
    "longitude": "149°01'50\"", 
    "elevation": "33.57 ft",
    "drainageArea": "1,220 square miles",
    "currentFlow": 0,
    "lastUpdate": ""
}
];

global.riverFlow = [
[ /* Ship Creek */
    [42,41,41,40,40,39,39,38,38,38,37,37,37,36,37,37,37,36,36,36,38,38,36,34,34,33,32,32,31,31,31],
    [30,30,29,29,29,29,28,28,27,27,27,27,27,26,26,25,25,25,25,25,24,25,24,24,24,24,24,23,24],
    [23,22,22,22,21,22,21,21,21,21,21,20,20,20,19,20,19,19,19,20,20,20,20,20,20,20,21,20,20,21,21],
    [21,21,21,21,21,21,22,22,22,22,23,24,24,24,25,26,27,28,29,30,31,32,35,37,40,43,47,51,55,60,],
    [64,68,73,78,82,86,89,97,103,113,123,131,141,149,156,165,175,184,194,205,217,231,244,262,278,299,317,333,357,373,387],
    [394,396,403,418,431,447,463,470,472,476,485,482,479,477,480,486,477,480,472,472,470,457,447,438,435,427,414,410,404,399],
    [390,380,373,367,363,358,348,334,324,318,320,313,302,289,280,272,269,263,255,254,251,244,238,234,229,227,222,221,216,218,222],
    [218,219,213,205,200,201,201,206,208,200,195,195,204,210,205,199,191,186,189,187,187,189,192,194,200,208,211,207,201,193,190],
    [195,190,185,188,192,196,199,195,192,193,193,198,203,197,198,205,208,223,225,242,264,257,256,247,237,228,224,221,222,226],
    [219,211,204,202,196,201,198,191,189,189,192,185,176,169,162,163,157,152,147,145,141,138,136,136,132,129,124,124,121,115,114],
    [110,107,104,102,99,98,96,94,92,95,95,93,92,86,82,80,78,76,75,77,77,76,75,73,70,69,70,69,67,67],
    [65,63,62,61,60,59,58,58,58,58,58,56,56,55,54,53,51,50,51,51,50,49,48,46,45,45,46,52,50,44,43]
],
[ /* Campbell Creek */
    [32,31,30,30,29,28,28,27,27,26,26,25,25,25,26,27,27,26,24,24,24,24,24,23,23,23,22,22,22,22,22],
    [21,21,21,21,21,21,21,21,21,21,21,21,20,20,20,20,20,20,19,19,19,19,19,19,19,19,19,19,21],
    [19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,21,21,21,21,21,21,21,21,22,22,23],
    [24,24,25,25,26,26,26,27,28,28,29,30,30,32,33,35,37,39,40,41,41,41,43,45,46,48,48,49,50,50],
    [50,49,50,50,49,49,50,53,53,55,58,59,60,61,62,63,65,67,69,71,73,76,77,80,83,90,94,97,101,107,112],
    [112,112,113,114,117,122,125,124,125,131,135,136,136,136,142,150,145,142,140,139,140,139,137,136,139,142,139,137,135,135],
    [132,129,126,124,123,123,124,121,119,116,121,122,119,114,111,108,108,105,103,105,109,105,105,108,109,110,103,101,100,99,97],
    [96,97,96,92,90,91,96,98,100,95,93,96,103,100,101,99,98,99,104,105,107,106,106,100,110,130,117,108,105,99,97],
    [94,92,90,94,101,102,99,102,103,100,105,105,110,108,109,115,113,116,121,126,143,143,133,126,126,122,120,120,128,128],
    [116,115,111,111,108,113,113,114,114,109,111,106,103,101,99,101,98,94,93,90,85,81,80,79,75,73,71,73,73,70,69],
    [66,64,61,60,59,58,56,56,55,55,55,53,53,52,50,48,46,45,44,44,44,43,42,41,40,40,39,39,39,39],
    [39,38,38,36,36,35,35,34,35,35,35,35,35,35,35,34,34,34,34,34,33,33,33,33,32,32,32,33,34,33,34]
],
[ /* Susitna River */
    [4720,4710,4670,4640,4600,4570,4550,4510,4500,4470,4440,4420,4400,4390,4380,4340,4340,4350,4330,4340,4330,4340,4360,4380,4360,4330,4310,4290,4270,4240,4220],
    [4180,4170,4160,4160,4160,4150,4120,4090,4060,4030,4010,3990,3980,3960,3940,3920,3910,3890,3880,3850,3810,3790,3740,3730,3700,3670,3640,3630,3880],
    [3610,3590,3580,3570,3550,3540,3520,3510,3500,3490,3470,3470,3460,3450,3440,3410,3420,3410,3420,3410,3420,3420,3410,3420,3430,3420,3430,3420,3410,3400,3400],
    [3400,3380,3360,3350,3390,3390,3390,3390,3400,3400,3440,3450,3470,3500,3550,3610,3690,3800,3900,4030,4230,4410,4570,4810,5140,5470,5800,6490,7200,7970],
    [9090,10100,11000,12400,13700,15200,16700,18500,22600,24300,25500,25700,25700,26200,28000,29300,30600,32100,32500,32100,32100,32600,34400,37600,40900,46400,49500,53400,55800,56700,57700],
    [59500,58800,57600,58100,57200,56100,56900,56700,57900,57800,55700,55100,56200,56300,56000,59200,63300,64200,63700,63800,64800,63900,63000,62800,62800,64600,68000,68600,67100,66400],
    [67600,68900,66300,62100,60100,60000,60400,62100,63900,66400,67500,65500,63900,61300,58200,57000,56500,57600,58700,60900,64000,62100,61100,62400,63800,66100,63300,59900,58600,59900,60700],
    [59300,61500,59600,57400,56900,56700,56700,56500,59700,60600,58500,56200,58300,58300,59100,58400,54600,51600,50000,50400,52500,53400,51600,50300,50200,49500,48300,47500,44800,43400,44200],
    [43100,43700,44900,43800,42500,41400,39700,38600,38100,36800,36900,37000,35700,37300,41900,44500,44400,41800,42700,47500,51100,48400,42400,37900,34500,31600,29800,29300,31900,33000],
    [27200,25500,24200,23000,22800,23000,22600,22800,23100,22200,21600,21300,20600,19800,19300,19800,19600,18300,17200,16300,15600,14800,14200,13800,13500,12800,12100,12500,14200,13400,12600],
    [11800,11400,10900,10300,9730,9290,8780,8560,8210,8050,7250,7150,7070,6880,6650,6440,6450,6450,6410,6310,6140,6050,6000,5950,5930,5880,5690,5560,5550,5530],
    [5390,5370,5350,5310,5290,5200,5190,5160,5160,5150,5060,5050,5030,5010,5000,4970,4930,4920,4900,4870,4800,4780,4770,4740,4720,4670,4650,4670,4740,4780,4770]
],
[ /* Matanuska River */
    [683,679,673,675,670,670,665,660,657,652,648,647,647,653,655,648,644,646,647,644,643,642,641,636,631,629,628,622,620,616,615],
    [583,583,580,579,578,576,576,578,582,583,574,571,567,565,562,555,552,547,547,545,544,545,544,545,542,541,538,535,542],
    [524,524,524,522,519,517,516,513,512,511,503,502,503,502,500,496,499,496,498,499,502,504,509,513,513,514,514,512,511,516,517],
    [532,531,530,533,532,534,540,542,548,548,561,567,580,592,607,625,644,668,691,726,724,748,782,818,865,910,994,1080,1180,1320],
    [1380,1370,1440,1510,1520,1570,1670,1860,1960,1950,2000,2060,2140,2220,2260,2300,2380,2540,2710,2950,3230,3490,3930,4150,4540,4940,5210,5490,5630,5780,6220],
    [6160,6090,6260,6590,6960,7570,8260,8690,8550,8760,9200,9470,9540,9830,10400,10600,10600,11300,11600,12300,12400,12200,12100,12300,12300,12400,12700,12900,12800,13100],
    [13300,13000,13000,13100,13400,13800,13700,13500,13200,13000,13100,13200,13200,13300,13300,13200,13000,12800,12700,12700,12900,12800,12500,12400,12300,12000,12100,12300,12500,12600,12600],
    [12400,12100,11700,11200,11000,11200,11000,11000,11100,11100,10600,10600,10600,10400,9950,9560,9360,9410,9110,8780,8710,8670,8890,9120,8930,8440,8280,8090,7700,7250,6890],
    [6660,6560,6540,6370,6220,6050,5840,5560,5450,5680,5540,5620,5690,5500,5260,4980,4800,4620,4480,4640,4780,4610,4440,4200,3940,3800,3670,3450,3310,3250],
    [3120,2970,2990,3030,2860,2860,2730,2690,2600,2580,2500,2380,2290,2210,2140,2100,2050,1930,1860,1800,1750,1700,1660,1610,1570,1560,1520,1480,1480,1440,1410],
    [1370,1330,1300,1280,1250,1240,1200,1170,1140,1120,1090,1070,1050,1030,1010,985,979,973,963,966,955,944,940,925,913,907,895,875,872,867],
    [843,830,826,828,822,814,807,805,797,796,796,789,784,773,768,755,750,746,743,741,738,738,739,733,724,719,715,712,710,708,706]
],
[ /* Knik River */
    [876,889,896,883,874,860,875,876,875,874,861,858,856,871,885,898,907,930,948,982,1010,1050,1010,1000,969,949,921,901,878,864,855],
    [854,876,877,890,966,1020,956,911,881,861,844,823,814,771,752,705,705,705,720,725,710,703,693,691,685,676,680,684,547],
    [679,683,676,667,668,659,650,646,647,646,653,652,646,651,651,634,635,637,642,652,660,660,661,656,657,657,664,665,676,681,682],
    [787,779,777,781,835,834,846,849,856,865,884,902,915,929,963,975,1010,1020,1050,1080,1120,1180,1230,1280,1370,1480,1570,1670,1760,1870],
    [1960,2080,2150,2240,2320,2390,2480,2580,2740,2880,3090,3300,3510,3680,3880,4160,4280,4470,4710,4890,5140,5360,5520,5810,6080,6420,6810,7160,7510,8020,8310],
    [8640,8800,8920,9160,9450,9670,9810,10200,10500,11000,11500,12000,12200,12500,12900,13500,14300,15200,16000,16200,16400,16900,18700,19100,17900,17800,18100,19300,21700,23500],
    [22500,20000,19700,19500,19800,20500,21200,21600,21800,23300,26600,24800,23700,23700,24900,26700,27900,24500,23400,23400,23800,23900,24300,25500,27500,30700,26800,24800,24600,24700,24500],
    [24300,23900,23800,24000,24400,24600,24800,24900,25200,25200,24800,24000,23700,23700,23600,23300,22700,21900,21200,20700,20700,20300,19900,19500,19000,18300,17600,17100,17000,16600,16100],
    [15500,14700,14200,14100,13900,13900,14000,14000,13400,13000,12600,12400,12700,12900,13000,13200,12500,12300,11900,11400,11000,10600,10600,9830,8800,8280,7810,7420,7180,7160],
    [7070,7140,7190,7140,6590,6400,6250,5960,5700,5580,5680,5640,5360,5120,4840,4620,4480,4290,4150,3900,3760,3700,3640,3760,3790,3570,3260,3040,2990,2940,2910],
    [3030,2850,2770,2660,2590,2580,2470,2360,2250,2170,2140,2070,2040,1950,1810,1730,1650,1610,1570,1570,1570,1550,1530,1490,1450,1410,1390,1380,1430,1430],
    [1300,1260,1200,1160,1130,1110,1090,1080,1080,1090,1070,1060,1050,1030,1020,971,952,940,932,935,944,952,962,962,962,937,920,906,900,889,889]
]
];