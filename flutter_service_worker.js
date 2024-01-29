'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "55dfb8d6ff04fb0a8ec8c8e1c85ee269",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "35c187c385dc9515d61ecb63332eccff",
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
".git/index": "4d91ba6c876c13fbcf8633e4efdf8227",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "951319b06b1cb65c114813cf29cb3259",
".git/logs/refs/heads/main": "951319b06b1cb65c114813cf29cb3259",
".git/logs/refs/remotes/origin/HEAD": "838b855152d8df05301fdd7034416064",
".git/logs/refs/remotes/origin/main": "cc8d561efa8af9dedde18e925ee63fcf",
".git/objects/05/2d235ee81f6e4c2762411d4ab979f4cac0c8bc": "a948543180c0304538b74f7dbc62907f",
".git/objects/06/44ef87c583c57e3cfdf907a903b773a5a50aaf": "be0b2a922a8e247b8ae3aa428f5170d2",
".git/objects/07/d3d08b43a648dadd00b71607121b94d3dc6461": "e717b5d23dd1fa7af123df0c887647a1",
".git/objects/08/be8ac5700e88aec9a695c20aa2188d381130e6": "e4ed572242d00922d87180d9475bb52a",
".git/objects/0a/e0763b21c2abf27da18eb302d422945fc56f73": "f2c29dbf2df1a280c9e4bdcb79249208",
".git/objects/0d/2199892b141b20b1bba18f019a19d439b6c1f1": "c8bb0a84f21d4fbc0b124f48926ac844",
".git/objects/0d/739df1d0d83c2505f1bd3b888aa6dee96f1d6d": "4b3ede12967d50475f81cbbb6f4d71a4",
".git/objects/0e/68a238c88fe0d3086ead05a91f6a31a481ba39": "a38791993b54093fba391b9ad7b55815",
".git/objects/0e/80cd8b2ae3610cafcbc2762cd72e1a9654a2b1": "c5d2f2919e2aa99ee25737f3f0ff6443",
".git/objects/0e/96a9f2bcffdea0347bb1691e590eaa1406e77f": "6cad85d7d7241612288d9653ac776210",
".git/objects/12/79437d8f089387dd4089ddbc83c9511866334f": "f8dc114a5027c88ed5df4dba94daa641",
".git/objects/13/63c32c6275a944a9495710efa5b2d579d4b12a": "719f1a65ab04af57e5faa197616d661b",
".git/objects/19/e3a921ec44ce6172ec5938053229651a5f95ad": "b70ff6ebada373d21a1b25ecfb66587c",
".git/objects/1a/62698405b7eb27213574302716cafc869e3717": "8f229d1ead43809c8ba76b3f06d72fa1",
".git/objects/1b/3427773705bc46f54e4dd2f59c671c7577bb62": "6fc76d2be1c7705fd7602bfc5a9f3940",
".git/objects/1b/d3ba387c96a32b50e7189dbfe5bd484fbf0959": "79e35585d06cb3011482cf776667b36a",
".git/objects/1c/9fe81ea3d7e4d622b2a08e1f81a257438c459f": "18f53ae6e29e0f32b9b3170c668c393f",
".git/objects/1d/6865468565abbfd6393f91ac0c9e7d28c18011": "da44afc5cd4293aee49b5789da2c7054",
".git/objects/1f/079bbb2cceaee5d6960f1389062cff92817cde": "448567285896f95906b7b665d2c4ce5f",
".git/objects/22/e957c59590f60abac22f1e0a001a1c711623f2": "f6204dcbb2036bc759479997ee59b594",
".git/objects/23/14ebf7f6abbb74d469325c52bd9f9db01b58f4": "e44b4bc384998d5764d3be79bfb972db",
".git/objects/24/31e2c5ea7274a501be7264a179fa03b8156dc4": "4e92a7638d81305f95c7b7c4adde7091",
".git/objects/24/4d32ffd58ba56ff8b37a6111bc5add79b045f1": "c1b3bc21405cfb5b4bd545abf42c46a1",
".git/objects/25/4f4888ae1d70d1c30cfc490d2d003a806397e3": "6d0694802b6b508a23fa52509434a2f2",
".git/objects/25/63169727360363266ec3bdd024bc01e2a5fe39": "f7bc7c30633b2dfbf63f290545eef862",
".git/objects/25/fcea89b5c447f7478fda8d979062d9b9349fd3": "ed77762ef4e30406c702c43f31c1bff2",
".git/objects/28/97c01bd7b85a92c71db4805c95bc23bbcc0bf3": "8cd5a8fb640a15bbe319d206dde4d769",
".git/objects/29/267d5ab0a020347b7d41bde6a308e199121437": "53afd2a64dd18ede39d41e49c2be9529",
".git/objects/2a/5628df00b89e71bbafbb341fdb0a89c3b51143": "a67646369d3f382f4e22249cff2a0cf6",
".git/objects/2c/3954d03d68d59bdcb7113dbf29457f828d577d": "94d9f761485c38effd05028be50582b5",
".git/objects/2e/b5a4ecf5bc8c47c203d388dfd323081f65ea85": "5998c288754b813a0dfb8eac3b885003",
".git/objects/2f/aca053d41c7fc1262840fd699646b5a45c2611": "8fe3f273303bbb6f9ac92422935a2d82",
".git/objects/30/a7ec11f3da7e7f2463c0c56cfa6fd34471278a": "a8f7ea59e6638ec1253cb7c7d68daa84",
".git/objects/31/78ab9f06656b5aae2418d7c99996faed038982": "b6421a8cebd6372391994cbe3169b14f",
".git/objects/34/6323576ba39f99b2abf2b3c7e954e50ff972a4": "2a9c3f84b3439c7db80b756adbc89b9b",
".git/objects/35/b8f87350ab88d9d7d4f03275828f2478d11400": "6a4627490e3958ffa2ed728dee1d0fc3",
".git/objects/35/e0b0d42754f1efd2038e683c3abe5369eef5b3": "b3e1f7c8122e2013f4280881fc291c23",
".git/objects/35/fa6d6a18a3323253c7d2a7d25a05defff5eef6": "c7125bfc90855fabc85be8a5195513de",
".git/objects/36/52400745223030f85f6b38c6856389cb6333ce": "b9a15f4469894b27803badd605a21f01",
".git/objects/36/86cf02ed1e3e9461fffbdb6022a17485e7f286": "6627177ba4c9d989276385c7b8f0dd9b",
".git/objects/36/9fc22ec062b9589277bbd1af384561b99c790d": "27ac1a861fc280e120107107f1814bd7",
".git/objects/38/465e5ae301b3ddefabfe22b188c4fee52182c0": "eebe5c7c15a8b55c3d09dbb81b38a9a6",
".git/objects/39/0a1eebf4eef41358424f8c976bdd157fa4d84a": "4292cf3631cc37c8ea1b3b56a8d2ec48",
".git/objects/39/6301ddd242c1049711fdaf515ee02e4a94db66": "5474ec907d2224f4b124f35e29b4c83f",
".git/objects/3a/b6920fd915bf329ff51f434b25b3f826454fb4": "9378f37f82b3a25fd4b1587f2e11f9f2",
".git/objects/3d/bec1c107d3399fa08ac1afd9e108867a3bd3fe": "6f74f786ccf3ee0774c2b76a84f185dd",
".git/objects/3e/3e2e9f80df4460d917b09ef46124b8d7c8d0e8": "ce3b476d6d3109a577a661268f08ddef",
".git/objects/3f/c012c61ec4aae2737353b894e8dbdbe40f70df": "a55e174657789244d27ffda1d661d7d0",
".git/objects/40/f3ae6c6fbc46a793f9cf826b1cae24c597e7b2": "c621f2b07a91f7d787ca8c3b8aae0621",
".git/objects/42/3015003df72209ca145c2db3bb948775707057": "221a7352859dad4a7b3b88c889ead59b",
".git/objects/43/e382c6211ebc5ab2a7d4a6646edb71afdf738d": "cc50a0816a0c1d2330213d8f39582995",
".git/objects/44/34ad2e05cdd23354488009a3ef9824672c699b": "b496812499a65f9b47680ba0c398a109",
".git/objects/45/c6f0bb4d09605fc2883ab3623f6af24936bde0": "7247c488b3455c16c02372053b0e6545",
".git/objects/46/9cf26cb1d5ebd20b753375a62b26a8bd824e2e": "e0e50d1bf91e4a2b52e89dfd25b451e1",
".git/objects/48/67219518b2cc1043c4bd4341cd486f1c64b3ab": "fc9030d918243b0ae22d0158622dc6d8",
".git/objects/4d/91bd089aef35fdc4b8994a7dd9584d1ec0b617": "790671076bbb00ec74ea02de65264662",
".git/objects/4d/ce0d007943a2aab1d6e63217c8dba0218e12c0": "457de0c35df490efc40e020c6e36207b",
".git/objects/4f/ea68634a74b666fbddff5fa3cdaf563413318e": "c867035428181e0d15a3774f394f69da",
".git/objects/50/d1f565cc5f0ebba28f5648540c3a0c04f437a5": "41552abf862ac67f306a5bc9222e58d2",
".git/objects/52/67caba21db277a26364f752987a66adbb80f17": "5c62730211949d005c4e79a8ff375cb7",
".git/objects/53/bd8199eb8445d464a79afc187fa4a22e72d19a": "eb2b51c43dcaedcda17b64a06ecd4b75",
".git/objects/54/322068b41c7df62ffa88bb90a489efd2d728ec": "10d1e9f21f1d3b3c6a115c246d51b74e",
".git/objects/55/374c841956d0dfabc35780e56baf363ccd5ed9": "c8e8b9d36d3077bbc5f4fd0cc9282ebc",
".git/objects/55/bd0428dd2e76fde1cca13fb69c0f85ccf60f4c": "9662ce745b561a44eaffcdde4d3a30c2",
".git/objects/56/3aaea0ed26cdeee067310c2a21e669c4acc0de": "d9e7e5952dcccb8550b3e060bd577399",
".git/objects/57/3613a3f23ffe8c8c8efaa55e32b4c62b58b1f2": "0eba3da821b8560c9d9a63d1487ade03",
".git/objects/59/1575e39a63d8be21d8fd4c1cf8af8580997e1d": "93caf278b4c5c42a00eb97b58815b911",
".git/objects/59/e048bb5e688e8c06715116d64d55d319025069": "fb88c0b6fd5fbe449072b26450e05ef8",
".git/objects/5a/b17abfac0a5c374e60d318557311b8ed5b62db": "9a64451fa76d54bac1f2fdfe8e4f8feb",
".git/objects/5d/6d52074b76718868bc2fc02580f553ecb6eb1c": "f724414529ec0d1fffb4a654a5bb3d28",
".git/objects/60/2a1658795e2ef140d498ea12cabe39ae725a3b": "fe687eb1f6c93bc2ab163e627200d252",
".git/objects/63/4ad6c97cbbd2e8e6c4c8eb4ea4ecbf178ae7d2": "7164bea3c1daee87575eaff22bcc7529",
".git/objects/65/5a11d40b7d4b473746539f038887cf4f9c8b58": "3cfbb58354057874023c235743fdf1f5",
".git/objects/65/ad840648561290118d47fa0be6cee8caa1665b": "c663b6ae72ad15fd4f9654ef6ebfb05d",
".git/objects/66/59f1dd42339fd3a56291f9ccbf69795b62f254": "596341bac6dc11c68b28f6399763cb81",
".git/objects/67/ccd7ead472fec41b5b5f0fc92bdef1b6ebb1cf": "ba27ae4fec11a7c94cc6b26c9df25d39",
".git/objects/6c/8adf3a7e924c58a43a1a927430e6e79d8437bb": "be8e6d1a40771b402aa22efbb7392348",
".git/objects/6d/eb062cc4f28923269bcd7e8df661bf1559bd35": "e1f8d19318802152746106a7dbd29d57",
".git/objects/6e/f3bdd0f29dcdc7d5ee9ac7b08b9f202285c0fa": "6f91520e0871b01b377f1994b93ba08b",
".git/objects/6f/3a2913e199cebe9ace75cf7e5a2818da27fbd3": "45159ad6d14348c955865d0f51914657",
".git/objects/71/dff4f2ea863f6e8865494f2036e25c4ac25c7f": "5669ec62ca4adf77c6c9bbfe4917f89d",
".git/objects/72/c499c19972ad38b110f1d0dcb158683c2127ec": "b5cb1cd6d6aabd476f0495af1852125b",
".git/objects/73/3601a4b787281fb085fddce1a6e0c064489503": "bf8b8a97279931c9ca78f424fc00fe8c",
".git/objects/73/9ca8ee5f39a378a1a27a93f3179578fd6228e6": "381b6d86648244df488df6c4198a2e16",
".git/objects/73/a3541ebcae3f44490e275e6302c9272c5abad4": "cee720aa6bfaa4febf5fae5ec0e70df4",
".git/objects/75/dfc17d24d5c5a8b41c1ed27fda220d49354cfa": "faa06f3b2dd772757aa54f63062e05ef",
".git/objects/77/b0de07d677a96070c38418341da6c27dd85f0b": "d1df436fc80a820510dbe4353acd0c5f",
".git/objects/7b/d0b33b97b735525491ea8fe52973cdf33f0f53": "eecab10b902ef4d93f18acff6c6609f9",
".git/objects/7c/69a302d391663a855f2f0fcdd8f1fc01f8ad65": "b4330f4e8c8a573be3c554a86ead151c",
".git/objects/7c/78f06a1aca759a51da8eaa92a9984a88b5995c": "4d7e9b1985cae83c056c810aa1bad14e",
".git/objects/7d/58a116508f0617cdd34eece4229055d2d4230f": "0df4188fee2adfc265cb1697c75b8d40",
".git/objects/7f/8dc3da67597bfe2f0326dcb69f88af8ff228c3": "f9eddfc70065a71b6e8c11d6d5dda7a4",
".git/objects/83/d027748c221aba5c92d2ad9df8399bb5b7c5af": "45d590063c49fb2179d99d10e7bf8720",
".git/objects/86/bce38f18f3482d50dc57a520579c1375801bea": "6823d44fc49c335088a8b4f8e91edc99",
".git/objects/86/d6ab9fe444d055d69b2d84aa4b4b611b1224fb": "6bd01b714bdcb627a81ccdcc8174e45f",
".git/objects/88/24587636c74161f530083f650fc590f5bbc9ca": "9d9742061caebe14b179950bcf799fb9",
".git/objects/8e/6285c70ee69d62efbbd9bdcb32d3d935b6b35e": "666bbe198d9ac7b781c84d9ad63a3c25",
".git/objects/8f/38caebd4e46157d6cd0b22f4be3ff2f55784c6": "bdf4260a1e250dd4211f14859e253c2f",
".git/objects/90/1384a1628bbe1e2bb893907e63aeebe2da32d9": "4cd947f21f54f245de055ab1313f89c1",
".git/objects/90/c6230add1577be43898a66fe539542294b16d1": "5f12bb0bff84456dfefd85bcee765ce5",
".git/objects/91/c679fa7ce4ec32ec7374149b05ce013190b094": "6f5bdd73e003dd925d6b52aae5c68410",
".git/objects/94/0bb8f6de7a43ec8e192ce783c39c092211eed9": "4d4f72e5d7f5b2da8954af029ed2b79b",
".git/objects/94/736b6cd2c1d5f6b3a923600a5b67c82473907f": "330284079917f88d7d1c09f286c56855",
".git/objects/94/dc683c148fd8786a44c06d761d50b61e167e20": "7f45b2bcca8ac2e049b741e1d9f54eba",
".git/objects/96/be68219326d58e8a1c4a1452cf50d55410776d": "70ee0eec5a2cbb91816dba69a601b08e",
".git/objects/97/ce8da807e3bc5060834c6467af4fe7175ec19b": "ab4694f4aed47ed9b11224cb45b9d463",
".git/objects/98/69b1a052db146aefefb6f8337cab2ed0140c55": "14deb5fde3d12e810a2b3756dfa3c36e",
".git/objects/9a/42d214964b391a8bd7ce95a9ad2716b33c813c": "3085f30f14f2432696b7041b6eccbfaf",
".git/objects/9b/9fedb6ba5ced8c91cb06efdd54b1d1327600a4": "81185d2a4e37eeacdb378757789a1535",
".git/objects/9b/ae00fea9f331c66d07ada4fb07de482177f78c": "2ae9a71dad9e87ba9c512c5fb7378d21",
".git/objects/9b/d1f69db3d82128d93712e602580954c4e91490": "9fe70dbcd6aae4f3c301d95426280d42",
".git/objects/9c/260f97a7ef25d8c29ba9ef159d634b5891915c": "3db7e3f90ddbcee6bef72e56b62eef64",
".git/objects/9f/b674d841fc2038627e0cd8dc812a8358a201c5": "4563c5d604f30a8f43cbca0c53c193ed",
".git/objects/a1/c6675e8c303d9cee499e9d560731eea8873eb0": "9c4d667f97a9a7d7b9b0e33d975bd2a5",
".git/objects/a2/75427e689a8f99f712d32f536aa5da0f0cac06": "bef9ffccde91186296ace176a36943da",
".git/objects/a2/bd9e0cb6163d0e8eeaf76cadfc01d74e8d34f2": "b50f10e1ca539e5e729c6f0df608f534",
".git/objects/a2/c4fb6e305531b81d0f1f64fe57344e3071128b": "63ce55f57e3f74c94e06cffcd430e933",
".git/objects/a3/06e90289f492ae7639d48f63e6b160ab3f5a1a": "3c3fe106ed34b418459a7ad3c5fe1b52",
".git/objects/a4/b656766399bd8f2018e40067129b7c84e665a4": "71e41b052d124be63ca4c76915e4a72e",
".git/objects/a9/6f1c74782fa4756d685b8f252f10718a5582d3": "930cefdaeae4aca0b75cd83328976151",
".git/objects/aa/4836d450e3805d52094b3272422c8816eb64ca": "87fd61914d3a7227f4a74071902608df",
".git/objects/ab/aeba5123012f3962df22dfd74dae25c78d58e9": "afede6c0270cdc28ea4e3080800d263e",
".git/objects/ab/ce4e45d1142db232c4f23a68ca8e280445d784": "817fd792e173d697fca54be7b3df935c",
".git/objects/ac/9bc055b345bb55a152a04e0d55d6777c07e3d2": "64103775515bd11a0c9ffd687c9397da",
".git/objects/ad/0d5a7b4f912e1cf84c96fec86289ca4c41d9b3": "5ae1534c3c40d42e060c86e3d845a7db",
".git/objects/af/156227f5c8cafc147a2c6205b363977afd6691": "60e59e4c4066fe6c03fe9e434a267ef8",
".git/objects/b2/4bdce6c8d5f6b1ad8a794d28231ddbc82ec3db": "86614575ccc619c7b115488f6e07787c",
".git/objects/b3/297cab87273a8f612a2835af5f31a570243305": "f45b2af970cb43ba616ead7cdac6c725",
".git/objects/b3/6b5a742bb65a1ec40706b111ab9b0a2e7987c5": "8a4e24eda0e33159efc2024133034ffb",
".git/objects/b8/34ed910fcaec4b8d011f4049de90017fab7f68": "d0086287801c326e347283c1a1003fda",
".git/objects/b8/6e3ba2a139838b4687d9d245062f6a656afbab": "c099b9a8072f013491f27580dba34b7f",
".git/objects/b8/fca8dc8b291230c5d1f54ae685f521096cbbe8": "8bab40458918445d823e58b41ab0ab80",
".git/objects/ba/ad84396ab214d2733faa722685c13017287601": "fd41efbb21d170e74f0159ad950b9422",
".git/objects/bc/3a631aed644c4a2827dff190e3ee37911b772b": "034709ba7f330fd13c9d366636d29f42",
".git/objects/c1/bcf78c05dd2f627fb861d9330987add4220982": "e072cf6dc066df33044b3126dbeb0a4f",
".git/objects/c1/e4ad7f85fe1618f75be8a8a1e6dfa8d3e87f23": "8dd29428636521dc6e94ea489750e176",
".git/objects/c2/1b0905c144b565f8c9e5400be424e3270ccaf6": "870be9674bd5c871e6f70aa5d1447880",
".git/objects/c5/01e937b5037807049e05aa879b7e90a67705fe": "8eda65d180e51840ad7ae5073888ca14",
".git/objects/c6/7135a1f75144c58be12ffa677ff1293f3fb51b": "1f2732c61543264cea6ce07b899bdc90",
".git/objects/c7/a3774442d860cee157d16b1d107a981f8810fe": "76825b8ed9f1c904d43fb9430a738b4a",
".git/objects/c9/7d291dcf2e6226c0b5475ad85610dc7fd88cb8": "9d7203cbd7a6e3315efa3a2abe6a14bc",
".git/objects/cd/0f7247a93cb5647db6bf936d5a3f3aedb74cab": "0fc45cc089bf9be581b4b1a96097ddd4",
".git/objects/cd/a90af442dadce03dbf7f415997310b10bf78e4": "b79d1d67f4b6c2f5287dc7a9b9e7eeb5",
".git/objects/ce/4e0fdfde48a3100b779ef61fe9cc074482a5de": "373b363ed8677885e8257cc7dd2c6cdc",
".git/objects/ce/ce4a7b56b1ea24c40aa9aa3ae652ed9233580f": "8bd1951f4011d62ac6114fe023341d0e",
".git/objects/ce/e45334ddffc63b25e4937ab335648fce4b0b85": "4710354531d3f6c1ccb91316fcb07e1d",
".git/objects/d0/980534829831fa11ab592138a038f7ccf18473": "8cc2eb010e637ebcbf119b0221622d7d",
".git/objects/d0/d210127d0aab09da8c5fe82c56aa3ed77cc004": "81055708745f0457d173c5838597cedb",
".git/objects/d1/a24627036786db701431347af0252ed604a910": "64d590187d9fdca24aafc1ce0fbfcba5",
".git/objects/d1/ef98409be35f19fe54afe2d4550c0c17253e33": "0614f27d352e9d93cef0d18875407e8c",
".git/objects/d7/0d17ce5ee0dc879fe5b6ddf639cc0f395f90da": "05b122212f6d5eea87eeae2d6977d5e8",
".git/objects/da/b5b3f55520a8043223a062fdd093faad8df2fd": "d9236042ac9f523082d1331afa84c8e0",
".git/objects/dc/b10a68c8021e9970fd98e3adefb0f01e01d726": "dabc09cf0fa18f211d3801d30df2f0a0",
".git/objects/dc/c62c3c6918ef95e582089755c4a187801beaac": "20808b3e323d4110c13157d93c4708a5",
".git/objects/dd/58a77e3d9573ff5bc54691f594293b3b377a94": "d56dc81ad7ae097d8873210edfde2d42",
".git/objects/dd/7ca72258ca9f9a955c997e8c16b70ed6fcfb94": "8823dde81ceaa944e70a9da005b1f5b5",
".git/objects/de/60c754b66cd0071ab0731ef5ef9bbe59f5fe54": "0c24cc85c63a943ebfd006198be7297d",
".git/objects/de/a567a5727a5ab699d7f4fdea9af176dabcde94": "084e5e71ac8172774da946ada4db4d67",
".git/objects/de/f0144c6cf88927fab8666213d9c7f35e67e61c": "0012461088fa64e4cd353907c3e1e2d4",
".git/objects/e3/04c23a1dc2eca1fb38150c957186e54b90213f": "017a081f87f5f418f1220b7889e0e26c",
".git/objects/e3/c4ed98fa366c1ada201f9e5ce20df8a134337a": "e5f65a09a46338fe7f1e948042c3c898",
".git/objects/e5/eb8a3b3a76e96387d171978e9dcf0a2b2bd389": "c35e3e5e2baf1c7f7422f38998bd0d88",
".git/objects/eb/9df05a45d3f7de1e5e3b28c69d1659130df75a": "5de2487a3ebfbb03efdf7e8f99493522",
".git/objects/ed/c35bb28ae2df2e14f0d431b108115000e6f872": "94a29ef879d168624986a53fe6be11e0",
".git/objects/ef/152da42a8f7c708fe7f20fbcf600f493b027cf": "fd14081cb2e8e068553664864711c2fa",
".git/objects/f1/78464a8cb380c873b063c2a50dd2975c51ca7e": "5a4054b0a61fa561dae344b3146e50ed",
".git/objects/f3/880bbc0878745b878affd358642d4b50aeea46": "b122de2ab76e973d5b7b3dd27cc7bb09",
".git/objects/f7/d0103c33bb58f1bc84664ea46cd7aea92ba3f1": "c289d4f7cbf4a2b2367d53fef9942880",
".git/objects/fa/891e818ce27df2f1f0efdc4c0d414587cfdc96": "d50bfa9f407cf80b38689ce3c00a4186",
".git/objects/fc/cdbf977df0571101d714efebce8a5c144da654": "0f7d8ce29dfee8aa39ad06c7954cfc5a",
".git/objects/fe/82c32973f85497c56eb11a8dbd398fc571359d": "0d296294414d3b1f3518643304e29fc5",
".git/objects/ff/3330189e3fa2281b9f5bd6c7a629df97389c7d": "3410ebef794d190ee336cfd832d137ee",
".git/objects/ff/d4fe98d18761d0605d04a351a427024214b5b2": "fcc0ac328ea8a1d09d14db0e458c1b25",
".git/objects/pack/pack-e035c850388dd82ec0edb1ec512cc10b1dc88914.idx": "9053b55bb4762ab653ad6916021d001d",
".git/objects/pack/pack-e035c850388dd82ec0edb1ec512cc10b1dc88914.pack": "78fa9697962ecabcc7d854226d6050ca",
".git/objects/pack/pack-e035c850388dd82ec0edb1ec512cc10b1dc88914.rev": "256a55f4bda4eab7534a8c6e3ec3c607",
".git/ORIG_HEAD": "b4266186fa35d2beaf7f88e0e51ca428",
".git/packed-refs": "964ae5b46f8ee4b3fa92d426084cd936",
".git/refs/heads/main": "b4266186fa35d2beaf7f88e0e51ca428",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b4266186fa35d2beaf7f88e0e51ca428",
".vscode/settings.json": "19751b2a32e46d1ba1477f357123a898",
"assets/AssetManifest.bin": "0992ff77dd06732ef7d0556e9f5e3c5f",
"assets/AssetManifest.bin.json": "baa47e9417ce747750a31830f50f2190",
"assets/AssetManifest.json": "e32bd649a261fafec39e43fbcd589193",
"assets/assets/getFromStore.png": "fcb5d5a2ea550ab163756e6e635c64e8",
"assets/assets/icon-192.png": "cc2894b915dee00d729a15023e5c29e9",
"assets/assets/icon_16.png": "739a99e9a38304d5e8d1ada9e391dd07",
"assets/assets/icon_512.png": "24e094a61cb258811feaeae5209df470",
"assets/assets/pakku_256.png": "ad43c46b8781a1443488d6f6f04f790a",
"assets/assets/ss1.png": "3382740a48e1b6cd04d9baf85edd460e",
"assets/assets/ss2.png": "14365149e620f7f9e38f4647b8a7f162",
"assets/assets/ss3.png": "0ff74de6806ac738c484ee05664f0db8",
"assets/assets/ss4.png": "aa8aa8b3f2afddee0cb916a6748c9a36",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "a210a21d3303150606ca2520978fbcd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "012558782930652c04d62e8a9816dc3c",
"favicon.png": "739a99e9a38304d5e8d1ada9e391dd07",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/icon-512.png": "24e094a61cb258811feaeae5209df470",
"index.html": "3bed3a7c3b919fb0b6ccb78211fb9ba5",
"/": "3bed3a7c3b919fb0b6ccb78211fb9ba5",
"main.dart.js": "c8bb4baca245d84ff9ec6a15bfa25485",
"manifest.json": "f2a3bc12e123ec41a565ac8825cdb935",
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
