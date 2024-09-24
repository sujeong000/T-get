'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a5c2eae60e9894d3c3fe5827b9575e41",
"version.json": "f8453a1da6931d6126e33e2b539f5216",
"index.html": "d297845a34284d584eb7d2a1cf28a090",
"/": "d297845a34284d584eb7d2a1cf28a090",
"main.dart.js": "b846e5a6fb958f4f97c4299aa1b1a0aa",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "02870e75dd0d1905742ad0dcbf828dad",
".git/config": "a12689b3403e4b59ea70cab4a73a7095",
".git/objects/61/de6a24a78f5a1c038e8347ad611c1b108e02ca": "ea56eb135004e2cc0bbf8529ab7d19bd",
".git/objects/0d/1302e186ec882656a3ab7e43335915e6a6cb24": "29490cd3d0afe16f7314d40b3855f20f",
".git/objects/95/719bb09d1caed4ea674d0e7c1ff93f8d1caad7": "cc4e715a27c9ff5ea25fb22216f4afbe",
".git/objects/66/b78614e972a62301c70661b2e7aa385173601d": "3801dffb28d73eda40de0d742a1f33f4",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/3b/1ae3ff7138d26b32963314e8c7e1c332e3f533": "2bb91f6dabebe06546a034005fc358b0",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/b310f4a271cb867ef07dd88ed0bdfe1b19e688": "b7e076bffb4be46c31876d1c4aeec5a1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/ef58ec9227e6c5cb3a2daa40c27f63bb35d42a": "f8235b2916684e97f2eac43b9cf44ef1",
".git/objects/6a/776c4bc213525c5aaeaa49e0d1ac8893a5dfe1": "2d5ed14659d4d08fbbd5d661dab0f55e",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/34543a8ab1c872679266996541be4cbceea42e": "0a945a57ee0b3f1cd6cc8a967bd9be04",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/58/d51100c5671612187805779a02f81ed8f811b2": "3eab9534bce01b1341f32c1a3822c7d6",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/0e/f860359f938e102e07c6845fa231074af84966": "a9efc9be1ae7fcb02660f94d438810e7",
".git/objects/34/c50edda233d3ef932920f077175a3b458518c7": "feb13751566ca3d91cad26a910a3e98a",
".git/objects/34/fdf0707332cb13da64f9969e380f6e9c2e1894": "0af928db60aec68f64fdc9cdc7917502",
".git/objects/5f/edf6cd07c97949dfda27ca9b6f7e80dd8dc238": "7a9f4d85754f0c94a83f19160aa477be",
".git/objects/02/90e301c6359c7a187c8b7051deffe84d3a708f": "2d3d7dda9f1c8986c1f2c69d02a1a701",
".git/objects/a4/3e81bd0c725a3337d830978b84c7006ec7998d": "f3fb10d064f89fefff7de4560b6e78f7",
".git/objects/a3/fcd1f5fcb1a55030420a98af5da414563aaee3": "a71dedb808b66ba452e50a3f953e005a",
".git/objects/b5/ee1bf31467a1803f248ca4ee42d8f0fd1e457a": "fcf56487f687ebf9915faac7a9975399",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ac/4d1198fdaffa0c707acb486d984f42f2a8a226": "779f0aae4a462830ebf53fd221136c7e",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/c7fc4cca71e134e43de3fa0cf89228cc6faaf8": "c7dbdba6f0cdacc07dd130047596acf4",
".git/objects/d0/05699698cae665dcf70926279b28eb1acb3057": "34302d419996f0a0a38b0c3429278e26",
".git/objects/b3/fa0703d260ef147a29307e0575b8adb681d043": "958147b56d6360e5d6e65311b9fdb8aa",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/cc97cbf9015eab9ff0758f1ccd815f13783a83": "89d40ca0b5a7741647fddec3ce737997",
".git/objects/c9/3cd37942dc5d7b3eda24eecb78f0cbba956967": "bbddd6cdb4a6887e134b1dbe8cc234e1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c532ba2fd2f94315b3ecd7b7e7fe26085bc6ee": "89d1e7c43fe1366b7c2c4ea2fb5d9606",
".git/objects/cf/261aa8c48c730bb66cb12210eed682d26fc75d": "20767345f80307faecb6c27261b2185e",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/7ab85e0b8f82eebfc5c4756da74f7f95823bfb": "8503f89ef20ef47b273fccc972b39d35",
".git/objects/fe/7db58fda5c4d860968ccd65939f1aa3ab2a0f2": "4a23011c673d6b2ed04d901c5b47aaef",
".git/objects/fe/91f4f5dcd040ec8f80cacbd8c3037be78291e1": "57a7be1f1c57239e80903fea5313f158",
".git/objects/c8/d8036f1253444f9ef05906b86170be43c44322": "0cca36a6568cee510ffc693b06c318eb",
".git/objects/c8/c47fac96d5b7b3e09b621689256daff661d1da": "9ac5117c5768e388b2e84705857cf27b",
".git/objects/ed/f219186f57847e3accd648c547112652614c78": "7bbe1afe62c83a6c3844af590646735d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/281b3350d4bdb67ea7e2c49e36e81ebac844fd": "ab53eb7cb25a173b04e29f6a3c73a3b8",
".git/objects/27/33e6080c5d40b6dcd99eba69f0a3a45f820cf8": "d7bdd9200c43210fe5e1a9f990e14503",
".git/objects/7d/b25fcc626463930cd0e703220d7b41f05ff3d6": "012793f42826b8cfd732d220ac8fd24d",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/ca40dce54475da24e6438ecc559d4cad0764ce": "7e1cd26a91ece313fad00abce280b9e0",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/42/86c5d89d81a286413100354f927061c9d8b4d3": "cb00b1ae7773f148306cf5a1d72f4733",
".git/objects/89/39b4871732472eed55395cd56ae951878cd73e": "8c33ce4b9f97515ea9d488f6e71efdc8",
".git/objects/89/72dde7bf062a56c71de15dc7e1cc5b579c2e28": "52564df1e9594229e404e2104723d437",
".git/objects/45/a748bc602177c2af04fe2d045560ceb0653e7a": "d753521ab62f33aa46e01792dc00bad6",
".git/objects/45/88185a84076f17a587cfb3c1a45b275b460a3d": "c4ea46fff9d7c9c2dc9c66bf2500ec61",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/a846d193a8c7e59858e6cb662611ad11c80818": "c4d9a73f947f8b4b26b1449f6d3a5981",
".git/objects/73/4daaeceb82571a30183900026a8da3583e8d3b": "73824530146dd290ee13399ef16a24c3",
".git/objects/28/284a38f2cc60798d4af78ffdf8b9b0ddb98009": "4c7a8fb7e30b9ddce4a52f409dd21191",
".git/objects/17/f462817a55fa98fbbc7960a2578a148dc518d1": "d1d26d9850dd12013c6424bf5f031453",
".git/objects/17/8f517afdadbd836ee1a5e8b047f000541bd87f": "a8efb31b6859dc19948c04f1f38bc9f3",
".git/objects/7b/e0fa04a6318d78a9c49f64a5fd058f2d8326be": "e0ad9e77d066f98240eec2c03912e4a3",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/a590a001c1c81c7c37cc800d1454cbaf0c68a8": "21278ce7acd4e32f576c696922a9e3c5",
".git/objects/44/e00656e3c7743aef22f4e7837001b8142d1b5e": "a7b4298f74f9f1ab6b622e5c0a9769f1",
".git/objects/44/1ad53b994644794bb01cd5ad7984a95e26ac61": "b323ff25232effe0cde3479bc5ca998a",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/fa7be8bf5edda0f6e26d23b085cc63b857dca4": "9e3faf30197cab5bc767e16ce68fc16f",
".git/objects/44/122198aeefd90d2c33cd45dae0eca002bde508": "781fc4ae329c08f299681e0b93ad8229",
".git/objects/2a/5198c72daee06e3c2d7175a51084cb0c4f0376": "0c42284d9a22727324b5b3fea9bfb1e9",
".git/objects/2f/9257467a313a5ba74c73e0551bded3d507a27b": "9e4ad2d5c9bcaa31434b43bcc8576f85",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/38/810e4e0d9ba32ed15e746432e9c2b567ea9020": "3c80ecb22cfeb486e04a20a6ba1cc7ea",
".git/objects/00/1e6db6edb600c066bb35286edc0a3c05d0ea13": "26a3b1a81ae9ffb39ea321ea195b6546",
".git/objects/09/b6b4ae1e17b280c46a5c30ace96fb58b21b74d": "95bb57d4afa50c6e35ed2a1366d915a2",
".git/objects/5d/7045b4e77c9e563fbce59f2c7e67c0a17c990f": "2ad8b935c6b952db1df74e6887e95686",
".git/objects/5d/63e727ca09efd2bd3290f7200acb52d8d31b54": "56b029746b7bedd3a3421771d3bcfda6",
".git/objects/31/843792ff3e4bd97327421699391d40b73870d3": "578b0eb78cfef293432cf2f212e74495",
".git/objects/62/8b5448e605c1e27fa0317b884adf9eb224ae34": "12438c5113060f3f2b8a9d036b78ec18",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/03d81e90ab6ccee1264eb99e28fc954e2a2c8e": "ade27563f27b11867edf77dd3a77129f",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/0ecc9ab55d45439848ee1f02e0e79974c4b55a": "6180f03090decd2583966e078a634792",
".git/objects/3f/1c8da8a9ee4c92ebeb7753122d8e72551e031c": "d5f098698901d60bc8f7691cd37408dd",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/e6c9ddf64bcf94793e2e4dd4045fc028d190e4": "5292f3779605563294b1205c578deb51",
".git/objects/01/e4d1baa346b8b90aa9758d8bc302041ebd3a15": "8c4f7bace12e584163334eb90827d599",
".git/objects/39/8d6f01f1ab2d8b4ad798697888526fca6cbeb2": "c711ff3eb1dfa1b346a00439721ae7c5",
".git/objects/99/4623ce2f87697674c52600155f21a65b7e13f0": "95fbb9be60da6d594d29116d3a15aaa0",
".git/objects/99/294cc153d6ffdc3f170b3be546335c1da99b25": "188e9fc6418b203b96f66a62eb6d556f",
".git/objects/52/efa2da7355a198e7496f77b525a3ae46da3065": "50ba47951531ea9d17d6e9ad9ee83b1a",
".git/objects/0a/c8b2068093c6b5691404f2e03a69af2412be11": "acd2c710def0053d72a82de65fd3a63c",
".git/objects/0a/27f060d6a9199a736510a47f49e020dfcdfd95": "befdf625ba7c2bafd964c05fa8f81ac7",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/811a5350c4c08dab7b6d493635bd59ae48e118": "5aed9ddb48cba6100ab9e4acdc12a5c5",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/d2/0afab293a89bf88d16d4279da60d0c83b6a376": "e954867050abdb54514eac7657d6a5f6",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8a1d9bfdd595a156d729ca9478c44387bdf4e4": "526cd4e9f6816d892b0d4c561e8c1075",
".git/objects/b7/984245004bd17a3a759d07bb9a1ebb83c30cd3": "54ebbdeebe1c32a952d8b88f21a7fc87",
".git/objects/db/59e913cc7dd7c6f78d2ebb3b39b13f2d87eec0": "c7a302cb449aa5481c7de5ab406da499",
".git/objects/a8/75321cee8fceeee621aed704c137000d678cc6": "9fd58f23431f16f2b658185b07ad06ea",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/45d396f0b78922ff90e97ba1cf087005a91e43": "12b8c25b70646a694ab54c136b48b24c",
".git/objects/c3/83b0ed7fb3acbf4f0f4b3e2be05807500e75a7": "2159f93e8343ee8533a3ccee90a9ace0",
".git/objects/c3/dbc2e2129105b0976d86bf4c7d4576831a752b": "a218385213b165127eb75d0e02737aa5",
".git/objects/c3/89b69d172290978d53c8e3e69c9ce884c68434": "037a92eaffde41ec9fee5be49efec060",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e6/ab43aa36f64482f7240b86ee65e4d7254662df": "850eccb54aea432ea58dd4df7ee93e09",
".git/objects/e8/4c453bf1168ceb579b1919b329921eed668ff0": "8c0241a200547f68a58ed50d2d11639d",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/5e1f2cebc19a85a398481c3f21a7725ae69ce5": "b5336b627407482cf389d28fb21f9abd",
".git/objects/fa/08cd746494e984809f8fa07139af59418b5ff8": "16e61106da68fd9919ba4829289691fb",
".git/objects/ff/f7cb20c4783595d5f7b91f3ad6fb6d86f4428a": "282bf5142e271152473a596f8d9ab97c",
".git/objects/ff/ee9e358a22d51c2332122d24d70e712f46c2d4": "5542a3503443f8e13936a0d3a8de84a3",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c5/710b89e6e00cb8beace0dd8f8ced71b334f93d": "a6a04c9f1e58c5ea2125b2b98526cabe",
".git/objects/c2/a597c107e18cd833c5f7a24b74e12148506872": "db7b4faf1bcac208281cdedbe234b7d6",
".git/objects/f6/1fc4521832ff00e5e10d150ff67f352b7bc7d7": "182b511a461ab70c587f9debdea06442",
".git/objects/f6/c8254305a095f3bb28f6b554daf2edc421872e": "f8383d9ea2e0196f76e6fbb13e4a4a4c",
".git/objects/f1/28a8a75b23ecb33739cffdcb4de152885f5436": "104e4de9437aac354ddc054acd1ca0b1",
".git/objects/e7/89d46bff759834194c215c3fd7e552bf260fec": "4c68d50569bd0995100ce29481c072aa",
".git/objects/46/eb7a611671be44fa945bf58235ad7714ca99c1": "13cef08a88ae6a1121cc6617526fa52a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/aad63716f83d4a89aba6ec1c385f9b600bfb32": "1db8ab3bce8364e030d21f6372bf90c4",
".git/objects/2c/9706492849d2d68e9b2b17385ca1e9cf3261fe": "7673f74060cb71d2250c336ba1002b21",
".git/objects/79/e096fb5444cf93ec0cd960e9edf286a6d0c0ba": "24d2cde0776bde536437dd01e620e083",
".git/objects/2d/8d4f9b07755a3fbf4b5089144018873b843821": "75a4e25b647c15974d3ba975e09e5b94",
".git/objects/2d/96d4d7b39f11fedd3406ec80b35604ebed629d": "0f46fb9e8e914ded3c2756dd8df569c8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/9ccfc91522308490621f3fd0cfc8a4b422d783": "d3391b984e5b758dc2ecd9282562c2ad",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/61b381eb4c8269fe0dbb31f845b70aedf15507": "0011abcafa6636f01f8db198a2bcd79c",
".git/objects/23/576f1b432acba9026e3571cd41686094831799": "eb03cdb4fd2b7e115578a2f3f4c128c5",
".git/objects/8d/382cee6bcaaf5adcdfc678d11312fccbb825ab": "94cb7333cd2c89ed458bef55eb836550",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/05fa47f4783db22360dc0e163ae9b1cdae84ca": "f5515929793434fdeae3acefffff31a0",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1d/3563a453a9bb86ff93c239f849ed4fc9aa0fdb": "28e0fbfc070d6e6558bf358114db1edb",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/76/0bbc8465387a3c786d5662d029e6252af32c65": "441f416e71ccdc99e0f7a108abe4994f",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/be81e7fb8dba5616f8e3cc721134d439e78ae2": "f1ecddb295172d44888e798dc136e664",
".git/objects/1c/1312b96161c8418e76360276c7b37351653751": "a018d5a80c8f13729fa34f916f833af4",
".git/objects/82/e91fdd26792331c1cc05da0b56aa3b7c49de62": "5e7bc34f4c4b0eab164c3c395bcb1188",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/ec607216680faadfa468865744aaf2cd1826dd": "ae4cef82f7d0543911a6977082a941f7",
".git/objects/13/1496819498e3eb08209af81488d362ed70bec7": "92227e4de96819555463ae192753abe4",
".git/objects/22/89c38ae6d06cd84670d150f78be52f900627e6": "8e12518dc676a2e0f1561a099fb9f559",
".git/objects/22/790252b79f932b2957fc217fddc2c91e9b223a": "31e6d2f754079145fcaa973a260a75a3",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "43ddd4e73cfe9171bcaccd2033cf06f5",
".git/logs/refs/heads/master": "43ddd4e73cfe9171bcaccd2033cf06f5",
".git/logs/refs/remotes/origin/master": "251d6d888cf84bdc690837fb25c619a4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "8d2b7de01302248f7374c1d7a983be59",
".git/refs/remotes/origin/master": "8d2b7de01302248f7374c1d7a983be59",
".git/index": "03a2ecf8e505b1288214624bb6d555cc",
".git/COMMIT_EDITMSG": "4bb0f72c222b789950a703619b89960c",
".git/FETCH_HEAD": "f8a135025ea63180e0d5b10d31464d28",
"assets/AssetManifest.json": "a82b1e758323270ad949d6f590da18b3",
"assets/NOTICES": "5b9ca0efc18a09bc6307505e175fccee",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "ff793a1508e1cefe0cb6dad7eecd4aa3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a4eeccc572b36ffe5d7c520af9b191b1",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/creditcard.svg": "32c69227316db6604d6ec84588d9095d",
"assets/assets/ai_seat_selection.svg": "8549857421fc5e1b42e1f2a84dd51d3f",
"assets/assets/hero_poster.jpg": "8b2489cf466ce3c10b81dfbe834e0d31",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
