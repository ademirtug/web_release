'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "55dfb8d6ff04fb0a8ec8c8e1c85ee269",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9c7a1a8446c8b14fb3fcf854f655cd74",
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
".git/index": "b464f793cf8f116d07b969ad1a47bbb1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8a502076832dee7386170fb81320a6cd",
".git/logs/refs/heads/main": "8a502076832dee7386170fb81320a6cd",
".git/logs/refs/remotes/origin/HEAD": "af43e92adc41f587e15bb8a8d5669007",
".git/logs/refs/remotes/origin/main": "958207d9baa0a444daaefce90fdebbf2",
".git/objects/0c/7f5e6eb545dc75a9f3ba61ba67c4868c80a8bf": "8d3cec3841d326557787fda40c56209d",
".git/objects/1d/9629315b64ff253dc4b72650c8cf14d1b3f245": "905661ad8481699439327aaed3080250",
".git/objects/20/f016d7ac936634d34f8906b80b225581e11be7": "32dd9df3ccafd523093d5491a2bd67f3",
".git/objects/35/26233ddf3a3ea72cefa435f8342ac199bf00c8": "09b8cb5a90ef998587bf2dd7a4dea8a7",
".git/objects/3a/8c9d5def78e38323eb09e3c98c5898efa0b563": "5e3ca0223c77c3fe8ddd61007e8615be",
".git/objects/3d/b7322de3677b208aea0e6b188726161332b586": "25c61a95926bf2af5cb22d2777c0722f",
".git/objects/42/79ff147ea4c79c33bf60a8e192b9786034afee": "2b8d71630e0bb6f3e30b73caa599faba",
".git/objects/44/0fc18b22e35443a4183a210421fb8b98027b65": "f94e2b7a574862dee342f6405616b000",
".git/objects/54/3255bcb433c91b89643cf4b04644d701a9f3b9": "08e2b7e1b35eff4d47cd5b197077f064",
".git/objects/5f/16c8f84551f32eda149d7d809ac953f093512d": "a8a2c363db8abb9af78de8f07cd6b874",
".git/objects/5f/6cbd5a451ab119188889e57d68abc1bfec8a3c": "3c89238cdb325bd0c06ce42a722a0eb5",
".git/objects/9c/abe2a7ab73e45754253136e22c8554672cab56": "1454a2e52ad326b18cb1f30503637ff2",
".git/objects/ab/c47ccf61776461bfe90ad630328c5ca0143906": "db7d57f50dd3d5270787f1e57ad13a36",
".git/objects/ad/0eca638751983b662f2908b8a50b46389523dd": "3a75c5722a655033c40e7961fe30cc69",
".git/objects/b5/cc98181405a2b51b80fb2ae3ed083f0d40d1fb": "1267a9131b55d56e31218857e932217d",
".git/objects/c0/b0264ecdcf7eeac2f5df0926aa65c225f42db6": "3b6dd5c4bd2f26e8171e3835e5cb044f",
".git/objects/c5/b74cec40999f39ca1ec0d913d1aa315b1472d8": "56ac854b09a91f0127bd849c50d3f70e",
".git/objects/c7/9ee95c67c2b830b7d8d0f329e61977ba70bdb8": "1b545f4d414e0b5644ad3ee976874646",
".git/objects/d0/7209cd852a17ea9fbae3ee09f4462f3e0e69f4": "cb66b0ed7c4d9f39bc421b2c0676bd6d",
".git/objects/dc/ea656fd77c77799c2057363061171be100a20a": "e2dd6e9b7784243ecb041555d87f8fb1",
".git/objects/ed/39b57575c36f4f909a71a6e473bccbaa6b33b5": "747945bce6b0db9df3af2cc4dc9013f9",
".git/objects/ed/8b60958cfb8f21811290cc7ec9e210362ec406": "31255ad06fd3c74601963d7504f1dddb",
".git/objects/ee/c25ca3960c180476778d4ea8767879e149b4aa": "9c122b1873081973b1b7afb4720a9a46",
".git/objects/f0/717fed674a86c767e38f9b6b0937ee4f11218c": "095b7c25944a633299864ec61e2141f6",
".git/objects/f4/709f56ddc30fe79ffd99faefec231cb1a4aa6d": "ac3df985f535c11b31f895d8fa0a6017",
".git/objects/f4/857e1d31c3a05eeba858008a06fe9bf1b8cda3": "fb18d31a485e299fe9d6773542336349",
".git/objects/f6/900ab60e84f805a72bdb3a1298c777900077b8": "e5aacfe6bcaff677762ec27a71b2a188",
".git/objects/f6/991bdf46bbef6c0ad1ed8e8147f45d238514a9": "840b35096abb7021308505000d0098c7",
".git/objects/fc/6aaf0f2c3e8345b65d0860337046181facb16b": "ca119b254876bb03e643b39fb930391a",
".git/objects/pack/pack-10354b8a9cec564cd3e67e1f4d100451e68249ef.idx": "d7b7c590136f55faed756d92b71cff21",
".git/objects/pack/pack-10354b8a9cec564cd3e67e1f4d100451e68249ef.pack": "94ed762213a2b27efbc555f46ab4cbca",
".git/objects/pack/pack-10354b8a9cec564cd3e67e1f4d100451e68249ef.rev": "7dbab3a59e74b8b488a34c82a1fe77b4",
".git/ORIG_HEAD": "a3fa7efabac4e7d36584b70352efb50e",
".git/packed-refs": "a3e15feae497e045070b3a9585ed30c7",
".git/refs/heads/main": "a3fa7efabac4e7d36584b70352efb50e",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a3fa7efabac4e7d36584b70352efb50e",
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
"index.html": "925f51354a2b7562f5081ee1ab96b15c",
"/": "925f51354a2b7562f5081ee1ab96b15c",
"main.dart.js": "aad216931d1426df77ae8a161672f24a",
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
