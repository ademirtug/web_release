'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "55dfb8d6ff04fb0a8ec8c8e1c85ee269",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c16f9e02208ae943acfda3d7773dc46e",
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
".git/index": "d201f8a89803b74a619e0e774b376eec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "31804afd1b81be82777f679c7105f18b",
".git/logs/refs/heads/main": "31804afd1b81be82777f679c7105f18b",
".git/logs/refs/remotes/origin/HEAD": "838b855152d8df05301fdd7034416064",
".git/logs/refs/remotes/origin/main": "088424ca26d5bbb31307466365df41a4",
".git/objects/05/2d235ee81f6e4c2762411d4ab979f4cac0c8bc": "a948543180c0304538b74f7dbc62907f",
".git/objects/07/d3d08b43a648dadd00b71607121b94d3dc6461": "e717b5d23dd1fa7af123df0c887647a1",
".git/objects/0e/68a238c88fe0d3086ead05a91f6a31a481ba39": "a38791993b54093fba391b9ad7b55815",
".git/objects/2e/b5a4ecf5bc8c47c203d388dfd323081f65ea85": "5998c288754b813a0dfb8eac3b885003",
".git/objects/2f/aca053d41c7fc1262840fd699646b5a45c2611": "8fe3f273303bbb6f9ac92422935a2d82",
".git/objects/3e/3e2e9f80df4460d917b09ef46124b8d7c8d0e8": "ce3b476d6d3109a577a661268f08ddef",
".git/objects/48/67219518b2cc1043c4bd4341cd486f1c64b3ab": "fc9030d918243b0ae22d0158622dc6d8",
".git/objects/4d/91bd089aef35fdc4b8994a7dd9584d1ec0b617": "790671076bbb00ec74ea02de65264662",
".git/objects/5d/6d52074b76718868bc2fc02580f553ecb6eb1c": "f724414529ec0d1fffb4a654a5bb3d28",
".git/objects/66/59f1dd42339fd3a56291f9ccbf69795b62f254": "596341bac6dc11c68b28f6399763cb81",
".git/objects/6c/8adf3a7e924c58a43a1a927430e6e79d8437bb": "be8e6d1a40771b402aa22efbb7392348",
".git/objects/72/c499c19972ad38b110f1d0dcb158683c2127ec": "b5cb1cd6d6aabd476f0495af1852125b",
".git/objects/7d/58a116508f0617cdd34eece4229055d2d4230f": "0df4188fee2adfc265cb1697c75b8d40",
".git/objects/83/d027748c221aba5c92d2ad9df8399bb5b7c5af": "45d590063c49fb2179d99d10e7bf8720",
".git/objects/9a/42d214964b391a8bd7ce95a9ad2716b33c813c": "3085f30f14f2432696b7041b6eccbfaf",
".git/objects/9b/ae00fea9f331c66d07ada4fb07de482177f78c": "2ae9a71dad9e87ba9c512c5fb7378d21",
".git/objects/a1/c6675e8c303d9cee499e9d560731eea8873eb0": "9c4d667f97a9a7d7b9b0e33d975bd2a5",
".git/objects/a2/bd9e0cb6163d0e8eeaf76cadfc01d74e8d34f2": "b50f10e1ca539e5e729c6f0df608f534",
".git/objects/a4/b656766399bd8f2018e40067129b7c84e665a4": "71e41b052d124be63ca4c76915e4a72e",
".git/objects/ad/0d5a7b4f912e1cf84c96fec86289ca4c41d9b3": "5ae1534c3c40d42e060c86e3d845a7db",
".git/objects/af/156227f5c8cafc147a2c6205b363977afd6691": "60e59e4c4066fe6c03fe9e434a267ef8",
".git/objects/b3/297cab87273a8f612a2835af5f31a570243305": "f45b2af970cb43ba616ead7cdac6c725",
".git/objects/b3/6b5a742bb65a1ec40706b111ab9b0a2e7987c5": "8a4e24eda0e33159efc2024133034ffb",
".git/objects/b8/6e3ba2a139838b4687d9d245062f6a656afbab": "c099b9a8072f013491f27580dba34b7f",
".git/objects/d0/d210127d0aab09da8c5fe82c56aa3ed77cc004": "81055708745f0457d173c5838597cedb",
".git/objects/da/b5b3f55520a8043223a062fdd093faad8df2fd": "d9236042ac9f523082d1331afa84c8e0",
".git/objects/dc/c62c3c6918ef95e582089755c4a187801beaac": "20808b3e323d4110c13157d93c4708a5",
".git/objects/f1/78464a8cb380c873b063c2a50dd2975c51ca7e": "5a4054b0a61fa561dae344b3146e50ed",
".git/objects/fa/891e818ce27df2f1f0efdc4c0d414587cfdc96": "d50bfa9f407cf80b38689ce3c00a4186",
".git/objects/pack/pack-e035c850388dd82ec0edb1ec512cc10b1dc88914.idx": "9053b55bb4762ab653ad6916021d001d",
".git/objects/pack/pack-e035c850388dd82ec0edb1ec512cc10b1dc88914.pack": "78fa9697962ecabcc7d854226d6050ca",
".git/objects/pack/pack-e035c850388dd82ec0edb1ec512cc10b1dc88914.rev": "256a55f4bda4eab7534a8c6e3ec3c607",
".git/ORIG_HEAD": "12a8b94edad631ca303b7bea30e922ad",
".git/packed-refs": "964ae5b46f8ee4b3fa92d426084cd936",
".git/refs/heads/main": "12a8b94edad631ca303b7bea30e922ad",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "12a8b94edad631ca303b7bea30e922ad",
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
"index.html": "9f65fcc4398aadeef628eae76c7f8756",
"/": "9f65fcc4398aadeef628eae76c7f8756",
"main.dart.js": "7af7c3cd6cfd4122cab73a52adec7a42",
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
