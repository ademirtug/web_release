'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "55dfb8d6ff04fb0a8ec8c8e1c85ee269",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "95edd55ef4551bf725be473821f99524",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9c26d2b5d5f643b1358610ec63793ead",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "38a4ba0a9db3d18912cf8c499d1cbea0",
".git/logs/refs/heads/main": "38a4ba0a9db3d18912cf8c499d1cbea0",
".git/logs/refs/remotes/origin/HEAD": "838b855152d8df05301fdd7034416064",
".git/logs/refs/remotes/origin/main": "09174769f8bcf8cb81b5c47f9d910d20",
".git/objects/05/2d235ee81f6e4c2762411d4ab979f4cac0c8bc": "a948543180c0304538b74f7dbc62907f",
".git/objects/06/44ef87c583c57e3cfdf907a903b773a5a50aaf": "be0b2a922a8e247b8ae3aa428f5170d2",
".git/objects/07/d3d08b43a648dadd00b71607121b94d3dc6461": "e717b5d23dd1fa7af123df0c887647a1",
".git/objects/08/be8ac5700e88aec9a695c20aa2188d381130e6": "e4ed572242d00922d87180d9475bb52a",
".git/objects/0d/739df1d0d83c2505f1bd3b888aa6dee96f1d6d": "4b3ede12967d50475f81cbbb6f4d71a4",
".git/objects/0e/68a238c88fe0d3086ead05a91f6a31a481ba39": "a38791993b54093fba391b9ad7b55815",
".git/objects/0e/80cd8b2ae3610cafcbc2762cd72e1a9654a2b1": "c5d2f2919e2aa99ee25737f3f0ff6443",
".git/objects/0e/96a9f2bcffdea0347bb1691e590eaa1406e77f": "6cad85d7d7241612288d9653ac776210",
".git/objects/13/63c32c6275a944a9495710efa5b2d579d4b12a": "719f1a65ab04af57e5faa197616d661b",
".git/objects/19/e3a921ec44ce6172ec5938053229651a5f95ad": "b70ff6ebada373d21a1b25ecfb66587c",
".git/objects/1b/3427773705bc46f54e4dd2f59c671c7577bb62": "6fc76d2be1c7705fd7602bfc5a9f3940",
".git/objects/1b/d3ba387c96a32b50e7189dbfe5bd484fbf0959": "79e35585d06cb3011482cf776667b36a",
".git/objects/1c/9fe81ea3d7e4d622b2a08e1f81a257438c459f": "18f53ae6e29e0f32b9b3170c668c393f",
".git/objects/1f/079bbb2cceaee5d6960f1389062cff92817cde": "448567285896f95906b7b665d2c4ce5f",
".git/objects/22/e957c59590f60abac22f1e0a001a1c711623f2": "f6204dcbb2036bc759479997ee59b594",
".git/objects/23/14ebf7f6abbb74d469325c52bd9f9db01b58f4": "e44b4bc384998d5764d3be79bfb972db",
".git/objects/24/31e2c5ea7274a501be7264a179fa03b8156dc4": "4e92a7638d81305f95c7b7c4adde7091",
".git/objects/25/4f4888ae1d70d1c30cfc490d2d003a806397e3": "6d0694802b6b508a23fa52509434a2f2",
".git/objects/25/63169727360363266ec3bdd024bc01e2a5fe39": "f7bc7c30633b2dfbf63f290545eef862",
".git/objects/25/fcea89b5c447f7478fda8d979062d9b9349fd3": "ed77762ef4e30406c702c43f31c1bff2",
".git/objects/28/97c01bd7b85a92c71db4805c95bc23bbcc0bf3": "8cd5a8fb640a15bbe319d206dde4d769",
".git/objects/29/267d5ab0a020347b7d41bde6a308e199121437": "53afd2a64dd18ede39d41e49c2be9529",
".git/objects/2e/b5a4ecf5bc8c47c203d388dfd323081f65ea85": "5998c288754b813a0dfb8eac3b885003",
".git/objects/2f/aca053d41c7fc1262840fd699646b5a45c2611": "8fe3f273303bbb6f9ac92422935a2d82",
".git/objects/31/78ab9f06656b5aae2418d7c99996faed038982": "b6421a8cebd6372391994cbe3169b14f",
".git/objects/34/6323576ba39f99b2abf2b3c7e954e50ff972a4": "2a9c3f84b3439c7db80b756adbc89b9b",
".git/objects/35/b8f87350ab88d9d7d4f03275828f2478d11400": "6a4627490e3958ffa2ed728dee1d0fc3",
".git/objects/36/9fc22ec062b9589277bbd1af384561b99c790d": "27ac1a861fc280e120107107f1814bd7",
".git/objects/38/465e5ae301b3ddefabfe22b188c4fee52182c0": "eebe5c7c15a8b55c3d09dbb81b38a9a6",
".git/objects/39/0a1eebf4eef41358424f8c976bdd157fa4d84a": "4292cf3631cc37c8ea1b3b56a8d2ec48",
".git/objects/39/6301ddd242c1049711fdaf515ee02e4a94db66": "5474ec907d2224f4b124f35e29b4c83f",
".git/objects/3a/b6920fd915bf329ff51f434b25b3f826454fb4": "9378f37f82b3a25fd4b1587f2e11f9f2",
".git/objects/3d/bec1c107d3399fa08ac1afd9e108867a3bd3fe": "6f74f786ccf3ee0774c2b76a84f185dd",
".git/objects/3e/3e2e9f80df4460d917b09ef46124b8d7c8d0e8": "ce3b476d6d3109a577a661268f08ddef",
".git/objects/42/3015003df72209ca145c2db3bb948775707057": "221a7352859dad4a7b3b88c889ead59b",
".git/objects/46/9cf26cb1d5ebd20b753375a62b26a8bd824e2e": "e0e50d1bf91e4a2b52e89dfd25b451e1",
".git/objects/48/67219518b2cc1043c4bd4341cd486f1c64b3ab": "fc9030d918243b0ae22d0158622dc6d8",
".git/objects/4d/91bd089aef35fdc4b8994a7dd9584d1ec0b617": "790671076bbb00ec74ea02de65264662",
".git/objects/53/bd8199eb8445d464a79afc187fa4a22e72d19a": "eb2b51c43dcaedcda17b64a06ecd4b75",
".git/objects/55/bd0428dd2e76fde1cca13fb69c0f85ccf60f4c": "9662ce745b561a44eaffcdde4d3a30c2",
".git/objects/56/3aaea0ed26cdeee067310c2a21e669c4acc0de": "d9e7e5952dcccb8550b3e060bd577399",
".git/objects/57/3613a3f23ffe8c8c8efaa55e32b4c62b58b1f2": "0eba3da821b8560c9d9a63d1487ade03",
".git/objects/59/1575e39a63d8be21d8fd4c1cf8af8580997e1d": "93caf278b4c5c42a00eb97b58815b911",
".git/objects/59/e048bb5e688e8c06715116d64d55d319025069": "fb88c0b6fd5fbe449072b26450e05ef8",
".git/objects/5a/b17abfac0a5c374e60d318557311b8ed5b62db": "9a64451fa76d54bac1f2fdfe8e4f8feb",
".git/objects/5d/6d52074b76718868bc2fc02580f553ecb6eb1c": "f724414529ec0d1fffb4a654a5bb3d28",
".git/objects/65/5a11d40b7d4b473746539f038887cf4f9c8b58": "3cfbb58354057874023c235743fdf1f5",
".git/objects/65/ad840648561290118d47fa0be6cee8caa1665b": "c663b6ae72ad15fd4f9654ef6ebfb05d",
".git/objects/66/59f1dd42339fd3a56291f9ccbf69795b62f254": "596341bac6dc11c68b28f6399763cb81",
".git/objects/67/ccd7ead472fec41b5b5f0fc92bdef1b6ebb1cf": "ba27ae4fec11a7c94cc6b26c9df25d39",
".git/objects/6c/8adf3a7e924c58a43a1a927430e6e79d8437bb": "be8e6d1a40771b402aa22efbb7392348",
".git/objects/6f/3a2913e199cebe9ace75cf7e5a2818da27fbd3": "45159ad6d14348c955865d0f51914657",
".git/objects/71/dff4f2ea863f6e8865494f2036e25c4ac25c7f": "5669ec62ca4adf77c6c9bbfe4917f89d",
".git/objects/72/c499c19972ad38b110f1d0dcb158683c2127ec": "b5cb1cd6d6aabd476f0495af1852125b",
".git/objects/73/a3541ebcae3f44490e275e6302c9272c5abad4": "cee720aa6bfaa4febf5fae5ec0e70df4",
".git/objects/77/b0de07d677a96070c38418341da6c27dd85f0b": "d1df436fc80a820510dbe4353acd0c5f",
".git/objects/7b/d0b33b97b735525491ea8fe52973cdf33f0f53": "eecab10b902ef4d93f18acff6c6609f9",
".git/objects/7c/69a302d391663a855f2f0fcdd8f1fc01f8ad65": "b4330f4e8c8a573be3c554a86ead151c",
".git/objects/7c/78f06a1aca759a51da8eaa92a9984a88b5995c": "4d7e9b1985cae83c056c810aa1bad14e",
".git/objects/7d/58a116508f0617cdd34eece4229055d2d4230f": "0df4188fee2adfc265cb1697c75b8d40",
".git/objects/83/d027748c221aba5c92d2ad9df8399bb5b7c5af": "45d590063c49fb2179d99d10e7bf8720",
".git/objects/86/bce38f18f3482d50dc57a520579c1375801bea": "6823d44fc49c335088a8b4f8e91edc99",
".git/objects/88/24587636c74161f530083f650fc590f5bbc9ca": "9d9742061caebe14b179950bcf799fb9",
".git/objects/8f/38caebd4e46157d6cd0b22f4be3ff2f55784c6": "bdf4260a1e250dd4211f14859e253c2f",
".git/objects/90/c6230add1577be43898a66fe539542294b16d1": "5f12bb0bff84456dfefd85bcee765ce5",
".git/objects/94/dc683c148fd8786a44c06d761d50b61e167e20": "7f45b2bcca8ac2e049b741e1d9f54eba",
".git/objects/96/be68219326d58e8a1c4a1452cf50d55410776d": "70ee0eec5a2cbb91816dba69a601b08e",
".git/objects/98/69b1a052db146aefefb6f8337cab2ed0140c55": "14deb5fde3d12e810a2b3756dfa3c36e",
".git/objects/9a/42d214964b391a8bd7ce95a9ad2716b33c813c": "3085f30f14f2432696b7041b6eccbfaf",
".git/objects/9b/9fedb6ba5ced8c91cb06efdd54b1d1327600a4": "81185d2a4e37eeacdb378757789a1535",
".git/objects/9b/ae00fea9f331c66d07ada4fb07de482177f78c": "2ae9a71dad9e87ba9c512c5fb7378d21",
".git/objects/9b/d1f69db3d82128d93712e602580954c4e91490": "9fe70dbcd6aae4f3c301d95426280d42",
".git/objects/9c/260f97a7ef25d8c29ba9ef159d634b5891915c": "3db7e3f90ddbcee6bef72e56b62eef64",
".git/objects/9f/b674d841fc2038627e0cd8dc812a8358a201c5": "4563c5d604f30a8f43cbca0c53c193ed",
".git/objects/a1/c6675e8c303d9cee499e9d560731eea8873eb0": "9c4d667f97a9a7d7b9b0e33d975bd2a5",
".git/objects/a2/bd9e0cb6163d0e8eeaf76cadfc01d74e8d34f2": "b50f10e1ca539e5e729c6f0df608f534",
".git/objects/a4/b656766399bd8f2018e40067129b7c84e665a4": "71e41b052d124be63ca4c76915e4a72e",
".git/objects/a9/6f1c74782fa4756d685b8f252f10718a5582d3": "930cefdaeae4aca0b75cd83328976151",
".git/objects/ab/aeba5123012f3962df22dfd74dae25c78d58e9": "afede6c0270cdc28ea4e3080800d263e",
".git/objects/ab/ce4e45d1142db232c4f23a68ca8e280445d784": "817fd792e173d697fca54be7b3df935c",
".git/objects/ad/0d5a7b4f912e1cf84c96fec86289ca4c41d9b3": "5ae1534c3c40d42e060c86e3d845a7db",
".git/objects/af/156227f5c8cafc147a2c6205b363977afd6691": "60e59e4c4066fe6c03fe9e434a267ef8",
".git/objects/b3/297cab87273a8f612a2835af5f31a570243305": "f45b2af970cb43ba616ead7cdac6c725",
".git/objects/b3/6b5a742bb65a1ec40706b111ab9b0a2e7987c5": "8a4e24eda0e33159efc2024133034ffb",
".git/objects/b8/34ed910fcaec4b8d011f4049de90017fab7f68": "d0086287801c326e347283c1a1003fda",
".git/objects/b8/6e3ba2a139838b4687d9d245062f6a656afbab": "c099b9a8072f013491f27580dba34b7f",
".git/objects/b8/fca8dc8b291230c5d1f54ae685f521096cbbe8": "8bab40458918445d823e58b41ab0ab80",
".git/objects/bc/3a631aed644c4a2827dff190e3ee37911b772b": "034709ba7f330fd13c9d366636d29f42",
".git/objects/c1/e4ad7f85fe1618f75be8a8a1e6dfa8d3e87f23": "8dd29428636521dc6e94ea489750e176",
".git/objects/c5/01e937b5037807049e05aa879b7e90a67705fe": "8eda65d180e51840ad7ae5073888ca14",
".git/objects/c6/7135a1f75144c58be12ffa677ff1293f3fb51b": "1f2732c61543264cea6ce07b899bdc90",
".git/objects/c7/a3774442d860cee157d16b1d107a981f8810fe": "76825b8ed9f1c904d43fb9430a738b4a",
".git/objects/c9/7d291dcf2e6226c0b5475ad85610dc7fd88cb8": "9d7203cbd7a6e3315efa3a2abe6a14bc",
".git/objects/cd/0f7247a93cb5647db6bf936d5a3f3aedb74cab": "0fc45cc089bf9be581b4b1a96097ddd4",
".git/objects/ce/ce4a7b56b1ea24c40aa9aa3ae652ed9233580f": "8bd1951f4011d62ac6114fe023341d0e",
".git/objects/ce/e45334ddffc63b25e4937ab335648fce4b0b85": "4710354531d3f6c1ccb91316fcb07e1d",
".git/objects/d0/980534829831fa11ab592138a038f7ccf18473": "8cc2eb010e637ebcbf119b0221622d7d",
".git/objects/d0/d210127d0aab09da8c5fe82c56aa3ed77cc004": "81055708745f0457d173c5838597cedb",
".git/objects/d7/0d17ce5ee0dc879fe5b6ddf639cc0f395f90da": "05b122212f6d5eea87eeae2d6977d5e8",
".git/objects/da/b5b3f55520a8043223a062fdd093faad8df2fd": "d9236042ac9f523082d1331afa84c8e0",
".git/objects/dc/b10a68c8021e9970fd98e3adefb0f01e01d726": "dabc09cf0fa18f211d3801d30df2f0a0",
".git/objects/dc/c62c3c6918ef95e582089755c4a187801beaac": "20808b3e323d4110c13157d93c4708a5",
".git/objects/dd/7ca72258ca9f9a955c997e8c16b70ed6fcfb94": "8823dde81ceaa944e70a9da005b1f5b5",
".git/objects/de/60c754b66cd0071ab0731ef5ef9bbe59f5fe54": "0c24cc85c63a943ebfd006198be7297d",
".git/objects/de/a567a5727a5ab699d7f4fdea9af176dabcde94": "084e5e71ac8172774da946ada4db4d67",
".git/objects/e5/eb8a3b3a76e96387d171978e9dcf0a2b2bd389": "c35e3e5e2baf1c7f7422f38998bd0d88",
".git/objects/ed/c35bb28ae2df2e14f0d431b108115000e6f872": "94a29ef879d168624986a53fe6be11e0",
".git/objects/ef/152da42a8f7c708fe7f20fbcf600f493b027cf": "fd14081cb2e8e068553664864711c2fa",
".git/objects/f1/78464a8cb380c873b063c2a50dd2975c51ca7e": "5a4054b0a61fa561dae344b3146e50ed",
".git/objects/f3/880bbc0878745b878affd358642d4b50aeea46": "b122de2ab76e973d5b7b3dd27cc7bb09",
".git/objects/f7/d0103c33bb58f1bc84664ea46cd7aea92ba3f1": "c289d4f7cbf4a2b2367d53fef9942880",
".git/objects/fa/891e818ce27df2f1f0efdc4c0d414587cfdc96": "d50bfa9f407cf80b38689ce3c00a4186",
".git/objects/fc/cdbf977df0571101d714efebce8a5c144da654": "0f7d8ce29dfee8aa39ad06c7954cfc5a",
".git/objects/fe/82c32973f85497c56eb11a8dbd398fc571359d": "0d296294414d3b1f3518643304e29fc5",
".git/objects/ff/3330189e3fa2281b9f5bd6c7a629df97389c7d": "3410ebef794d190ee336cfd832d137ee",
".git/objects/pack/pack-e035c850388dd82ec0edb1ec512cc10b1dc88914.idx": "9053b55bb4762ab653ad6916021d001d",
".git/objects/pack/pack-e035c850388dd82ec0edb1ec512cc10b1dc88914.pack": "78fa9697962ecabcc7d854226d6050ca",
".git/objects/pack/pack-e035c850388dd82ec0edb1ec512cc10b1dc88914.rev": "256a55f4bda4eab7534a8c6e3ec3c607",
".git/ORIG_HEAD": "f46d68660ab46f03a6072893f9302729",
".git/packed-refs": "964ae5b46f8ee4b3fa92d426084cd936",
".git/refs/heads/main": "f46d68660ab46f03a6072893f9302729",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f46d68660ab46f03a6072893f9302729",
".vscode/settings.json": "19751b2a32e46d1ba1477f357123a898",
"assets/AssetManifest.bin": "43167cead3a2c05464bc55836ac73667",
"assets/AssetManifest.bin.json": "c491f19e4fade0be58e2823bcb96e317",
"assets/AssetManifest.json": "3919a506422caffff4cce0610c41af6c",
"assets/assets/getFromStore.png": "fcb5d5a2ea550ab163756e6e635c64e8",
"assets/assets/icon-192.png": "cc2894b915dee00d729a15023e5c29e9",
"assets/assets/icon_16.png": "739a99e9a38304d5e8d1ada9e391dd07",
"assets/assets/icon_512.png": "24e094a61cb258811feaeae5209df470",
"assets/assets/pakku_256.png": "ad43c46b8781a1443488d6f6f04f790a",
"assets/assets/ss1.png": "9f83f7dd3de485952abd008e1f11cbb7",
"assets/assets/ss2.png": "14365149e620f7f9e38f4647b8a7f162",
"assets/assets/ss3.png": "3e39c7586bf547b0394b5921acc8414c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "d04822a72a3d5465360b305c187f199d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "739a99e9a38304d5e8d1ada9e391dd07",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/icon-512.png": "24e094a61cb258811feaeae5209df470",
"index.html": "a6db43dc411dca36244cd94076f7f41a",
"/": "a6db43dc411dca36244cd94076f7f41a",
"main.dart.js": "4d3cafef299fa8b266b9ab56fed88c42",
"manifest.json": "fe90e93433dcb88d058b3c4dc5e17793",
"version.json": "84ebc7dd42e223da54665072a3e53935"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
