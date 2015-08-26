var data = [
  {name:"ENGELS Addy",rankings:[164,196,153,195,165,133,125,167,156,130,86,99,106,142,164,157,128,121,138,155]},
  {name:"BAK Lars",rankings:[68,194,141,159,172,126,169,166,169,139,141,4,159,162,148,145,139,139,36,167]},
  {name:"OGRADY Stuart",rankings:[51,38,136,14,157,17,134,83,99,77,92,41,82,33,42,141,61,64,55,47]},
  {name:"BRUTT Pavel",rankings:[40,178,180,81,83,166,111]},
  {name:"PINEAU Jérôme",rankings:[34,108,68,24,46,11,67,116,56,43,52,5,45,77,162,167,130,82,60,144]},
  {name:"DE GENDT Thomas",rankings:[126,150,148,172,116,119,103,141,109,153,40,79,62,128,82,77,43,6,4,152]},
  {name:"ZEITS Andrey",rankings:[43,92,58,96,97,187,73,41,52,93,34,66,16,64,58,37,66,125,65,131]},
  {name:"QUINZIATO Manuel",rankings:[26,94,160,136,152,90,142,87,85,133,118,114,79,150,165,137,94,100,115,154]},
  {name:"LANG Sebastian",rankings:[62,41,172,101,118,61,102,140,154,30,96,64,99,39,79,88,88,88,92,163]},
  {name:"SILIN Egor",rankings:[21,95,41,63,57,170,109,47,150,112,131,149,29,144,93,130,28,141,107,145]},
  {name:"SIEBERG Marcel",rankings:[63,83,195,110,159,68,139,122,79,51,124,145,100,74,120,93,168,96,137,75]},
  {name:"CHARTEAU Anthony",rankings:[109,143,56,100,71,99,35,40,93,163,66,102,38,148,166,156,48,60,59,135]},
  {name:"DELAPLACE Anthony",rankings:[172,48,115,177,96,177,110,150,160,13,112,128,153,110,50,69,129,130,47,77]},
  {name:"SWIFT Ben",rankings:[70,66,97,104,106,145,180,137,146,113,139,119,111,6,134,154,150,108,130,146]},
  {name:"MOLLEMA Bauke",rankings:[80,53,27,56,39,121,68,55,170,157,161,11,80,137,160,2,132,27,144,54]},
  {name:"VELASCO Ivan",rankings:[132,151,100,193]},
  {name:"KIRYIENKA Vasil",rankings:[124,115,74,187]},
  {name:"BOOM Lars",rankings:[123,129,123,162,133,106,179,152,164,137,174]},
  {name:"RENSHAW Mark",rankings:[59,177,147,153,177,20,141,155,102,18,149,144,160,25,119,161,111,103,153,13]},
  {name:"SANCHEZ Samuel",rankings:[79,36,8,25,28,51,4,14,27,52,1,24,2,49,13,19,18,2,7,113]},
  {name:"GRIVKO Andriy",rankings:[167,109,146,154,148,104,153,163,131,143,114,134,101,145,10,143,99,118,123,114]},
  {name:"DUMOULIN Samuel",rankings:[72,181,169,190,18,141,177,176,10,21,169,146,166,169,158,100,146,136,131,16]},
  {name:"BARREDO Carlos",rankings:[78,102,37,45,52,53,64,26,57,85,78,78,26,86,74,118,60,23,24,124]},
  {name:"INTXAUSTI Benat",rankings:[98,135,28,103,180,174]},
  {name:"KNEES Christian",rankings:[97,39,82,134,99,100,98,62,73,101,84,34,59,91,107,84,86,28,45,30]},
  {name:"DE WEERT Kevin",rankings:[58,27,38,32,35,24,36,16,20,22,19,35,14,32,52,16,22,18,50,45]},
  {name:"VALENTIN Tristan",rankings:[183,63,76,167,84,44,166,68,103,115,103,109,131,63,88,111,145,101,141,80]},
  {name:"CIOLEK Gerald",rankings:[120,173,81,184,8,188,183,77,158,12,167,154,115,7,137,85,149,158,147,9]},
  {name:"GREIPEL André",rankings:[64,9,183,6,184,3,145,146,1,2,111,153,94,13,117,87,93,93,139,3]},
  {name:"ISAICHEV Vladimir",rankings:[105,22,181,178,175,82,160,157,121,177,160]},
  {name:"DANIELSON Tom",rankings:[94,84,26,53,33,47,17,13,39,49,11,37,13,44,28,30,9,11,11,106]},
  {name:"VAITKUS Tomas",rankings:[188,138,119,92,78,158,149,162,12,20,151,110,144,15,100,149,134,134,83,8]},
  {name:"SZMYD Sylvester",rankings:[156,167,104,138,183,72,63,78,101,120,37,93,67,152,60,57,33,41,77,130]},
  {name:"MILLAR David",rankings:[16,126,22,40,47,18,26,81,77,126,148,96,77,119,105,165,118,167,32,158]},
  {name:"MARTIN Tony",rankings:[10,55,21,26,26,39,20,8,34,36,48,27,75,125,4,164,107,163,1,159]},
  {name:"MONFORT Maxime",rankings:[84,85,53,62,38,55,28,32,54,63,46,16,47,59,35,41,35,74,14,61]},
  {name:"DEVENYNS Dries",rankings:[88,74,18,47,37,173,6,28,81,91,89,80,50,143,9,134,41,159,97,42]},
  {name:"DELAGE Mickaël",rankings:[114,168,99,89,108,78,122,164,136,116,158,121,70,146,123,113,82,86,143,49]},
  {name:"STEEGMANS Gert",rankings:[73,25,112,192,191,189,163,159,141,173,157]},
  {name:"COYOT Arnaud",rankings:[195,159,142,115,111,114,161,173,104,25,164,107,140,16,91,129,148,104,120,22]},
  {name:"HERNANDEZ BLAZQUEZ Jesus",rankings:[160,192,177,174,174,186,84,75,166,154,56,85,42,161,132,126,56,26,116,117]},
  {name:"RIBLON Christophe",rankings:[154,116,128,183,145,140,37,113,23,158,32,162,21,155,103,119,36,54,19,122]},
  {name:"VAN GARDEREN Tejay",rankings:[29,119,33,156,134,98,66,80,78,144,65,113,65,168,144,117,112,122,67,160]},
  {name:"HESJEDAL Ryder",rankings:[96,78,19,55,36,101,59,52,142,122,29,92,30,127,3,44,10,10,62,140]},
  {name:"THOMAS Geraint",rankings:[6,15,29,5,16,128,23,22,9,24,36,123,58,116,33,70,26,44,46,63]},
  {name:"WIGGINS Bradley",rankings:[50,44,11,18,56]},
  {name:"ZUBELDIA Haimar",rankings:[112,105,61,46,54,62,25,25,69,72,20,53,18,67,37,29,13,49,41,82]},
  {name:"JEANNESSON Arnold",rankings:[93,29,35,13,10,12,29,20,51,11,12,30,27,17,27,34,24,22,52,29]},
  {name:"HAGEN Edvald Boasson",rankings:[25,13,30,30,1,120,27,66,15,5,147,6,143,69,2,1,143,78,12,2]},
  {name:"IGLINSKIY Maxim",rankings:[190,98,145,163,94,150,174,114,98,169,130,22,124,136,156,147,11,155,163,18]},
  {name:"PAULINHO Sergio",rankings:[134,124,109,180,176,183,75,79,75,100,75,84,158,83,44,128,79,84,79,147]},
  {name:"WESTRA Lieuwe",rankings:[130,158,189,112,167,134,86,158,110,175,133,104,95,138,143,121,68,133,18,132]},
  {name:"KOLOBNEV Alexandr",rankings:[56,88,72,34,60,125,99,91]},
  {name:"LOOSLI David",rankings:[159,170,117,126,90,83,83,105,124,117,64,57,86,118,77,75,49,30,87,90]},
  {name:"FLECHA GIANNONI Juan Antonio",rankings:[153,97,131,151,61,179,54,136,97,128,150,94,121,56,102,139,123,73,44,14]},
  {name:"CAVENDISH Mark",rankings:[69,5,150,1,101,1,170,178,2,1,153,129,164,1,43,166,96,98,156,1]},
  {name:"MARTINEZ Egoi",rankings:[185,24,92,69,24,42,43,45,48,54,50,33,55,45,26,39,52,33,66,84]},
  {name:"ENGOULVENT Jimmy",rankings:[179,10,194,120,193,124,187,145,172,134,97,106,127,11,53,140,110,148,133,10]},
  {name:"ARROYO David",rankings:[157,163,178,99,138,169,69,63,119,107,41,88,35,92,41,151,30,43,102,101]},
  {name:"DI GREGORIO Rémy",rankings:[100,149,89,117,104,154,49,35,100,110,54,65,52,57,54,107,44,25,96,126]},
  {name:"HINCAPIE George",rankings:[60,43,101,31,45,127,89,59,43,55,70,52,64,51,62,61,72,77,58,58]},
  {name:"MANGEL Laurent",rankings:[54,57,190,179,166,49,167,92,165,131,62,163,98,42,153,132,167,119,146,86]},
  {name:"EL FARES Julien",rankings:[102,110,60,29,13,131,92,43,163,62,55,23,31,58,57,4,142,46,73,40]},
  {name:"VOIGT Jens",rankings:[146,140,93,160,163,93,100,84,71,80,69,58,71,140,72,55,64,59,157,110]},
  {name:"BOOKWALTER Brent",rankings:[144,172,162,189,126,70,116,169,91,124,134,91,109,135,87,115,55,117,85,60]},
  {name:"MONCOUTIE David",rankings:[111,142,62,105,82,109,45,51,106,161,28,2,23,111,161,108,76,42,109,156]},
  {name:"RUIJGH Rob",rankings:[81,19,47,17,23,25,38,19,28,19,38,29,17,21,19,48,25,45,53,28]},
  {name:"VICHOT Arthur",rankings:[152,127,87,106,6,77,120,86,138,136,90,155,72,108,126,122,81,126,148,98]},
  {name:"ROY Jérémy",rankings:[139,171,132,152,173,165,138,135,144,83,47,3,145,121,7,144,137,67,27,162]},
  {name:"ROLLAND Pierre",rankings:[117,154,36,93,63,117,34,27,65,132,10,20,10,72,31,33,6,1,21,79]},
  {name:"ROJAS Jose Joaquin",rankings:[4,3,12,3,5,9,32,148,3,7,98,12,91,5,14,63,59,91,91,21]},
  {name:"PATE Danny",rankings:[90,125,139,171,150,97,178,149,152,171,142,169,163,165,140,146,156,166,29,150]},
  {name:"TIRALONGO Paolo",rankings:[133,183,140,169,190,155,79,33,60,166,80,100,69,103,146]},
  {name:"ROCHE Nicolas",rankings:[19,33,43,20,21,15,19,17,19,45,17,44,33,20,75,14,19,99,114,127]},
  {name:"GUTIERREZ José Ivan",rankings:[31,185,88,37,79,34,107,73,114,59,87,139,138,68,122,110,106,85,117,67]},
  {name:"SANCHEZ Luis-Leon",rankings:[83,79,48,60,66,75,55,1,42,95,74,86,81,93,135,150,126,50,71,151]},
  {name:"KOREN Kristjan",rankings:[89,72,51,75,80,63,60,98,140,84,108,124,88,87,70,62,131,56,15,133]},
  {name:"POPOVYCH Yaroslav",rankings:[55,46,126,182,158,182,117,172]},
  {name:"VAN DE WALLE Jurgen",rankings:[197,189]},
  {name:"MINARD Sébastien",rankings:[196,120,133,141,112,65,94,123,116,147,159,161,116,52,121,114,153,29,74,25]},
  {name:"CHAVANEL Sylvain",rankings:[48,68,63,107,188,79,114,175,76,118,60,82,36,81,98,5,91,39,28,70]},
  {name:"KLÖDEN Andréas",rankings:[7,18,10,12,15,30,13,24,62,86,44]},
  {name:"JEROME Vincent",rankings:[198,198,197,188,192,168,132,174,177,76,171,103,108,101,45,65,157,63,98,76]},
  {name:"PETACCHI Alessandro",rankings:[140,161,103,114,88,2,154,103,125,28,107,8,129,3,69,72,114,90,125,19]},
  {name:"BERTAGNOLLI Leonardo",rankings:[46,58,114,102,139,122,123,154,120,125,156,140,169,97,110,135]},
  {name:"GESINK Robert",rankings:[74,52,17,42,53,41,56,21,46,44,77,75,63,80,76,81,21,47,39,72]},
  {name:"MORABITO Steve",rankings:[143,165,95,140,144,164,91,61,132,121,39,90,40,104,90,73,46,79,111,62]},
  {name:"MALORI Adriano",rankings:[141,99,106,124,110,139,90,57,59,79,122,77,84,134,78,136,120,131,16,165]},
  {name:"VELITS Peter",rankings:[13,71,32,68,51,40,5,5,49,39,31,31,24,36,17,49,42,4,9,34]},
  {name:"GARATE Juan Manuel",rankings:[95,114,120,80,132,107,182]},
  {name:"VINOKOUROV Alexandre",rankings:[17,56,3,28,22,32,22]},
  {name:"ZANDIO Xabier",rankings:[186,103,98,155,179,118,96,53,83,56,42,47,43,100,49,45,32,124,61,149]},
  {name:"CASAR Sandy",rankings:[137,87,54,87,64,143,44,3,68,104,27,39,22,89,56,3,85,31,26,88]},
  {name:"COSTA Rui Alberto",rankings:[129,121,40,65,65,69,1,132,115,111,163,105,53,149,157,169,89,48,51,66]},
  {name:"GALLAND Jeremie",rankings:[45,146,161,109,117,115,124,97,148,127,113,118,128,82,99,131,108,142,167,38]},
  {name:"GALIMZYANOV Denis",rankings:[28,11,182,21,115,6,157,156,123,4]},
  {name:"MOINARD Amaël",rankings:[86,156,187,142,136,167,81,89,105,106,71,98,54,105,63,74,54,65,121,143]},
  {name:"AMADOR Andrey",rankings:[147,169,179,186,181,71,158,151,162,176,143,142,170,133,124,11,95,157,129,125]},
  {name:"CUNEGO Damiano",rankings:[15,49,14,38,41,36,7,10,33,33,7,26,12,38,23,18,7,7,31,43]},
  {name:"PATERSKI Maciej",rankings:[22,80,84,118,105,67,80,56,41,73,127,36,148,66,59,7,127,76,86,32]},
  {name:"DUPONT Hubert",rankings:[136,164,86,98,146,142,74,36,90,114,15,62,32,90,32,35,17,13,68,93]},
  {name:"SANTAROMITA Ivan",rankings:[135,157,71,139,182,156,70,67,122,168,72,76,119,158,71,42,74,137,82,153]},
  {name:"GUSEV Vladimir",rankings:[42,28,57,52,69,138,40,42,30,34,23,7,51,99,29,38,23,57,81,64]},
  {name:"BURGHARDT Marcus",rankings:[76,123,170,157,168,94,129,118,178,140,170,152,122,167,167,86,165,145,128,57]},
  {name:"ROELANDTS Jurgen",rankings:[53,73,96,74,123,85,147,85,21,16,94,111,57,65,61,104,90,115,23,97]},
  {name:"TALABARDON Yannick",rankings:[176,60,85,78,86,89,72,50,61,65,45,48,46,61,55,51,67,128,93,50]},
  {name:"POELS Wouter",rankings:[116,59,44,84,70,180,188]},
  {name:"KREUZIGER Roman",rankings:[99,21,15,16,42,149,186,120,133,167,73,164,74,159,114,58,73,132,99,141]},
  {name:"MURAVYEV Dmitriy",rankings:[191,195,196,94,171,59,175,131,175,172,138,101,49,164,154,8,163,147,49,142]},
  {name:"VANDBORG Brian",rankings:[170,113,149,83,153,137,95,160,147,148,129,71,139,95,150,124,151,156,154,121]},
  {name:"HIVERT Jonathan",rankings:[168,180,121,145,89,178,185,133,151,162,30,151,161,23,169,9,161,35,126,100]},
  {name:"URTASUN PEREZ Pablo",rankings:[166,166,185,147,189,76,164,107,108,17,165,157,157,170,97,142,58,69,152,119]},
  {name:"BODNAR Maciej",rankings:[163,106,144,125,130,132,133,130,135,149,123,126,110,46,138,96,159,75,33,81]},
  {name:"TOSATTO Matteo",rankings:[161,131,143,123,119,86,144,93,126,48,126,97,123,114,115,103,160,112,151,55]},
  {name:"GENE Yohann",rankings:[148,148,156,144,154,84,152,112,176,164,140,136,130,156,168,155,162,153,134,102]},
  {name:"PORTE Richie",rankings:[119,64,46,143,187,152,58,69,96,90,67,72,114,130,81,64,80,55,5,91]},
  {name:"TROFIMOV Yury",rankings:[91,139,55,67,59,74,24,31,47,170,16,60,28,62,51,47,75,21,76,99]},
  {name:"CANCELLARA Fabian",rankings:[18,112,163,146,120,92,136,95,87,26,121,131,89,117,65,138,97,152,8,5]},
  {name:"EVANS Cadel",rankings:[2,35,1,11,12,22,3,6,24,50,5,25,4,29,11,20,3,5,2,56]},
  {name:"KOSTYUK Denys",rankings:[189,145,78,127,135,159,155,142,167,156,110,69,146,113,129,133,115,151,160,89]},
  {name:"NIERMANN Grischa Jan",rankings:[177,50,130,113,164,38,101,54,44,78,76,63,61,76,85,82,113,72,75,65]},
  {name:"IZAGIRRE INSAUSTI Gorka",rankings:[174,132,157,191,142,151,78,46,84,159,59,168,44,98,84,127,38,40,110,108]},
  {name:"WILLEMS Frederik",rankings:[173,93,159,130,161,81,159]},
  {name:"MARCATO Marco",rankings:[127,174,80,131,9,73,61,129,95,27,88,158,78,124,8,76,104,87,113,148]},
  {name:"VANDE VELDE Christian",rankings:[125,82,31,58,49,26,15,34,45,35,53,50,37,94,34,32,12,19,25,53]},
  {name:"BOZIC Borut",rankings:[192,8,125,95,17,13,172,170,8,23,175,159,156,14,112,10,166,162,164,7]},
  {name:"FARRAR Tyler",rankings:[181,1,158,97,124,172,165,161,137,3,137,147,149,2,151,153,155,154,142,4]},
  {name:"GERRANS Simon",rankings:[128,69,83,119,103,129,87,100,74,105,106,122,97,85,118,83,101,37,94,46]},
  {name:"VOECKLER Thomas",rankings:[14,144,65,71,62,54,33,2,36,75,9,17,7,71,18,28,5,20,13,104]},
  {name:"GALLOPIN Tony",rankings:[30,62,168,4,85,116,71,90,53,67,81,13,136,8,95,52,105,150,63,26]},
  {name:"IRIZAR Markel",rankings:[104,137,111,85,156,163,106,110,129,98,82,87,135,88,104,54,53,140,43,109]},
  {name:"HUSHOVD Thor",rankings:[3,6,6,10,3,7,16,82,4,46,173,1,142,22,1,123,124,92,105,115]},
  {name:"ROUX Anthony",rankings:[85,91,69,19,114,176,119,134,145,151,91,112,96,31,163,53,154,53,88,74]},
  {name:"PAURIOL Rémi",rankings:[108,130,64,88,73]},
  {name:"BUFFAZ Mickaël",rankings:[184,155,173,129,186,108,127,125,89,97,83,45,107,102,89,101,158,143,161,92]},
  {name:"TJALLINGII Maarten",rankings:[171,118,129,149,76,29,173,119,112,41,144,9,141,27,108,15,47,160,40,44]},
  {name:"VANOTTI Alessandro",rankings:[145,77,113,132,100,57,128,60,92,99,136,166,165,166,66,102,119,164,158,78]},
  {name:"SABATINI Fabio",rankings:[142,86,175,150,178,112,156,153,130,155,117,135,150,19,149,98,135,146,149,24]},
  {name:"BOUET Maxime",rankings:[131,153,79,79,25,162,97,65,66,89,57,81,73,96,40,79,62,51,38,136]},
  {name:"BONNET William",rankings:[27,17,134,8,113,5,162,111,11,10,172,167]},
  {name:"DEAN Julian",rankings:[182,7,152,82,143,27,143,128,153,68,166,170,125,18,170,159,78,165,132,36]},
  {name:"ZABRISKIE David",rankings:[165,190,191,170,169,95,176]},
  {name:"GADRET John",rankings:[115,117,66,181,93,160,46,88,171]},
  {name:"HINAULT Sébastien",rankings:[75,4,42,7,14,10,137,64,7,14,162,150,103,10,109,109,102,116,112,11]},
  {name:"PERAUD Jean-Christophe",rankings:[113,30,52,44,29,37,21,15,22,42,26,61,9,37,25,21,16,12,6,35]},
  {name:"ERVITI Imanol",rankings:[107,81,154,70,137,171,76,72,118,102,125,59,117,70,128,106,45,95,104,96]},
  {name:"BASSO Ivan",rankings:[44,75,13,48,50,52,14,23,64,81,4,49,11,48,30,31,4,15,34,129]},
  {name:"TURGOT Sébastien",rankings:[61,12,107,50,77,8,113,101,161,8,100,137,167,35,113,80,92,94,103,20]},
  {name:"TEN DAM Laurens",rankings:[194,61,94,86,67,60,53,70,50,60,18,74,151,151,141,160,65,38,124,137]},
  {name:"SCHLECK Frank",rankings:[12,45,7,41,40,31,10,9,35,82,3,42,8,34,22,17,2,8,20,51]},
  {name:"HORNER Christopher",rankings:[9,23,16,36,27,190]},
  {name:"MEERSMAN Gianni",rankings:[24,14,73,73,107,175,121,165,17,15,154,18,105,79,147,78,31,32,89,85]},
  {name:"LONGO BORGHINI Paolo",rankings:[66,70,193,148,102,56,131,99,134,64,105,51,133,139,92,94,122,123,119,41]},
  {name:"TERPSTRA Niki",rankings:[187,197,171,176,140,105,115,179,157,53,79,116,120,141,142,158,164,58,166,157]},
  {name:"SORENSEN Chris Anker",rankings:[169,193,108,161,162,135,51,74,40,146,22,70,20,129,96,50,37,52,37,123]},
  {name:"SORENSEN Nicki",rankings:[110,152,135,175,109,64,85,71,94,57,146,46,113,53,48,91,141,129,35,138]},
  {name:"FEILLU Romain",rankings:[178,2,174,54,4,4,126,147,5,6]},
  {name:"BONO Matteo",rankings:[155,184,186,164,129,110,82,127,127,135,63,21,85,157,127,92,51,66,155,166]},
  {name:"NOVAL GONZALEZ Benjamin",rankings:[150,107,137,122,121,66,104,108,139,103,102,67,134,112,130,99,125,113,162,139]},
  {name:"POSTHUMA Joost",rankings:[138,128,122,137,151,88,135,121,113,123,104,89,92,115,83,89,50,102,118,116]},
  {name:"GOSS Matthew Harley",rankings:[77,136,138,116,2,80,150,138,86,145,145,132,132,84,139,162,109,107,84,48]},
  {name:"BRAJKOVIC Janez",rankings:[39,40,34]},
  {name:"VERDUGO Gorka",rankings:[92,67,50,51,58,146,50,44,67,69,33,40,19,75,39,40,40,36,42,103]},
  {name:"QUEMENEUR Perrig",rankings:[180,176,166,133,185,103,148,94,159,152,109,115,104,147,152,112,98,61,80,94]},
  {name:"JEANDESBOZ Fabrice",rankings:[175,134,192,108,147,136,184,180,173,165,155,108,66,106,133,56,70,81,106,95]},
  {name:"NAVARRO Daniel",rankings:[121,191,176,165,128,148,52,58,174,160,43,83,41,160,38,68,34,109,101,107]},
  {name:"GERDEMANN Linus",rankings:[11,16,75,72,20,48,57,76,55,40,68,95,76,73,94,95,84,80,90,120]},
  {name:"LEIPHEIMER Levi",rankings:[38,54,20,59,91,157,30,18,70,96,14,54,39,107,68,116,63,16,78,112]},
  {name:"BOONEN Tom",rankings:[23,162,116,194,155]},
  {name:"TAARAMAE Rein",rankings:[8,65,70,43,68,43,31,11,37,37,25,32,15,26,16,23,8,14,10,27]},
  {name:"CONTADOR Alberto",rankings:[82,34,2,35,48,33,8,12,31,47,8,38,6,43,12,22,15,3,3,71]},
  {name:"SCHÄR Michael",rankings:[162,122,155,91,125,23,140,102,88,92,115,28,60,50,86,97,71,114,70,59]},
  {name:"PEREZ MORENO Ruben",rankings:[151,90,110,76,72,50,77,109,143,70,58,138,56,24,67,12,57,106,127,52]},
  {name:"TXURRUKA Amets",rankings:[118,104,45,111,81,161,93]},
  {name:"LEUKEMANS Bjorn",rankings:[49,96,39,27,75,58,48,49,29,94,135,130,152,122,145,13,136]},
  {name:"VANENDERT Jelle",rankings:[52,160,91,121,92,96,62,38,82,31,2,15,1,40,21,25,14,71,54,164]},
  {name:"NAVARDAUSKAS Ramunas",rankings:[71,141,90,173,149,184,168,144,107,174,132,127,147,123,155,148,77,144,57,37]},
  {name:"FOFONOV Dmitriy",rankings:[32,32,77,33,74,185,47,115,149,108,120,148,168,30,131,6,69,111,159,39]},
  {name:"OSS Daniel",rankings:[65,175,118,9,98,111,88,96,6,38,116,125,90,4,46,59,87,120,48,6]},
  {name:"DUQUE Leonardo",rankings:[35,186,59,61,87,102,118,168,117,32,95,141,93,12,101,67,152,83,165,33]},
  {name:"VENTOSO Francisco",rankings:[57,187,151,168,122,91,181,117,32,9,99,120,155,9,111,90,144,161,145,15]},
  {name:"KERN Christophe",rankings:[122,147,167]},
  {name:"GILBERT Philippe",rankings:[1,20,5,2,7,14,2,4,14,66,24,10,68,28,15,46,133,70,72,87]},
  {name:"EISEL Bernhard",rankings:[67,179,164,158,160,87,130,177,155,138,168,143,162,126,80,163,83,97,150,161]},
  {name:"FUGLSANG Jakob",rankings:[47,47,25,23,11,21,18,30,25,61,51,68,83,163,136,60,140,34,69,69]},
  {name:"KARPETS Vladimir",rankings:[41,111,67,64,55,45,42,39,63,74,35,56,34,60,47,36,29,149,30,128]},
  {name:"COPPEL Jérôme",rankings:[106,51,49,39,44,46,39,37,58,58,21,43,25,54,24,26,20,17,22,105]},
  {name:"GAUTIER Cyril",rankings:[36,31,24,22,19,130,65,48,26,71,49,73,48,55,73,66,103,62,64,73]},
  {name:"ZINGLE Romain",rankings:[103,182,184,66,34,123,112,126,128,87,119,171,154,131,159,105,138,110,95,83]},
  {name:"PEREZ LEZAUN Alan",rankings:[149,37,127,77,141,153,105,106,18,109,61,165,87,78,6,125,121,105,136,23]},
  {name:"HONDO Danilo",rankings:[37,133,102,128,131,28,108,104,16,141,128,117,112,132,106,71,116,135,140,31]},
  {name:"HOOGERLAND Johnny",rankings:[101,100,105,90,95,113,41,139,111,119,93,160,118,109,64,43,39,68,108,111]},
  {name:"KADRI Blel",rankings:[193,188,165,185,170,181,146,124,80,129,85,156,102,154,116,120,117,24,135,134]},
  {name:"IGNATYEV Mikhail",rankings:[158,76,124,135,127,147,151,143,168,150,152,133,126,153,5,168,147,127,56,17]},
  {name:"BOLE Grega",rankings:[20,89,188,166,31,35,171,171,13,142,101,14,137,120,125,152,100,89,100,12]},
  {name:"URAN Rigoberto",rankings:[87,101,4,57,43,144,11,29,72,88,13,55,5,47,20,27,27,138,122,118]},
  {name:"VAN DEN BROECK Jurgen",rankings:[5,26,9,15,30,19,12]},
  {name:"SCHLECK Andy",rankings:[33,42,23,49,32,16,9,7,38,29,6,19,3,41,36,24,1,9,17,68]}]

view.viewSize = new Size(800,800)

for (var i = 0; i < 20; i++) {
    var path = new Path();
    path.add(new Point(50+40*i, 50));
    path.add(new Point(50+40*i, 50 + 2*198));
    path.strokeColor = 'black';
    path.strokeWidth = 0.25;
}

var tooltipRectangle = new Path.Rectangle({
    point: [0,0],
    size: [10,10],
    fillColor: 'white',
    opacity: 0.9
});
tooltipRectangle.visible = false;
var tooltip = new PointText(new Point(25, 25));
tooltip.fillColor = 'black';
tooltip.fontSize = 14;

var enter = function(event) {
  this.strokeColor = 'red';
  this.opacity = 1;
  this.strokeWidth = 2;

  tooltip.content = this.name;
  tooltip.position = event.point + [50,20];
  tooltipRectangle.bounds.width = tooltip.handleBounds.width + 4;
  tooltipRectangle.bounds.height = tooltip.handleBounds.height + 4;
  tooltipRectangle.position = tooltip.position;
  tooltipRectangle.visible = true;
  tooltipRectangle.bringToFront();
  tooltip.visible = true;
  tooltip.bringToFront();
}
var leave = function(event) {
  this.strokeColor = 'black';
  this.opacity = 0.25;
  this.strokeWidth = 0.5;
  tooltip.visible = false;
  tooltipRectangle.visible = false;
}
for (var i = 0; i < data.length; i++) {
    var path = new Path();
    path.strokeColor = 'black';
    path.strokeWidth = 0.5;
    path.opacity = 0.5;
    path.name = data[i].name;
    for (var j = 0; j < data[i].rankings.length; j++) {
        path.add(new Point(50+40*j, 50+(2*data[i].rankings[j])))
    }
    path.onMouseEnter = enter;
    path.onMouseLeave = leave;
}
