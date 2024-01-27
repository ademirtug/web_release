'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "2aedfe9767503236c4dd3f40da1167e6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5d6a55c9cb77d2c381669b197ca2bd9e",
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
".git/index": "42f532f6883d4809e4d06c2cb866735c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2dffef8219faee9c5fecaf7689aa39e0",
".git/logs/refs/heads/main": "2dffef8219faee9c5fecaf7689aa39e0",
".git/logs/refs/remotes/origin/main": "f92aa862519fde46c232135435266379",
".git/objects/00/7e29eadd0439791a7d420aee4f2f28c37986d9": "7e950a0439f85fc219940dace06b2c1a",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/18128d57bd894a32a1c002191282cb25f4cef2": "0fa269472ca4c44981149643e091b0ec",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0e/cea9f20ea3047e93a00577fa0a9c920840f1dc": "524d0bcca89a7822cb8269f5858e45db",
".git/objects/0e/df6065d2455e32e6f8888788f6fcd8e881c26c": "3ef88f32263685405fd148cf59f0182e",
".git/objects/12/e953c773b906ac477ad9446344669e5e73a34a": "e3ac75d0fff29d244584e6d3b0066798",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1d/6b836db85ab3de3bb671537b59a0257c6068f5": "7b616ea3bbe1bd05db41cad2fabfab60",
".git/objects/1f/e4fdd2a1107936295949c99988af4a91758ae6": "c4e4783da1657e3b984af8f6090144ea",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/5f9a7f1cb3b3c4b83e57226b69742e59fd8723": "1470a35f69c063173eec47222b1610c3",
".git/objects/28/d14a98af4e0581ef615ae5c2868d939cce5c31": "89e8d877274d824ae2c40ec022c196e1",
".git/objects/31/48fac1d6eec420471dfaa1534b8834331191aa": "7acb9ebd9eef85d9bcb8ae6793cded75",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/59547af8eabf1dccbe74a3f2b4dccd37bfa552": "b8da8806c205660417549b26c9c85778",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/77/ece2d2c709164f6cde226e894baeeb36f47a58": "0d0fdfd4c25a13303337d29c65ac184e",
".git/objects/78/996ab7503d1f6c3dcf93aee7c5d9b1d38e710e": "75ff0f2d327da4b8606585665dcc13a0",
".git/objects/7c/3520423369d40828818a4470863d6c42daa942": "0bcd2b48ebf57e8050e7faf48b6ba0ea",
".git/objects/7d/cb6c499f6b6e66b5511690f4b1c05b106c674c": "b8aa19ad6bd8ceffa21dc702acf570ca",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/99/b68d76d5b56ee0ab6de0d18b25fce142390252": "3390d1ff7f446ec51b64a7adea658a1f",
".git/objects/ad/f75368136e1ddd45e0bdfe87f6436c9d3094d8": "b5e7e48e390a014c91e719af2e2a2f84",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/ffd1b88af3b27d70a76b527d46ead80f9da8d5": "63091d4bac3eff9401eff0cfcbbf2800",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/4b0fc0acbe2133f6e230fc07755a63c02de927": "bb994f3b5b987c9511bd0fbc3a5df713",
".git/objects/c6/3499f5d82775d1155608cf67056f6ffb7bed35": "8dd80030b944385b6f99b0e8b900b0b4",
".git/objects/c7/78da6828bbe8bc1b40682ddb5f8fe7c9514be8": "dab9dcb4b3bdf975bbfd175c2f254d3d",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/67de6bbc47a74a599bbc17c8c294055dd29e90": "e30b64bd1231e2157d9a5343fb982469",
".git/objects/da/5bb16dd75f355ec0876327c35162fc9306c5f8": "e254fae2684154da8c7980ea5526e491",
".git/objects/db/a0128eb9e8b7a3fdec3735f319ec2feecf9dd4": "8c3d03b9bcbd5804589a6e3741763234",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e4/7b51db9af383bc57a7b2ac999ee562d904d4e1": "6c084b39086ef97277787468bfb2cb4c",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/b90f7e855a29ba8584b946e31cc7c061c9598a": "eff9b2622af1687ad530b0ff7e4373c5",
".git/objects/e6/c0aab048030f06f380b6586eacfabd77be0465": "bf79bc0037655a08f2b6f3fe9e92e8b4",
".git/objects/ea/2b90789950ee7088f779b7c1eeb6bd0d707dbb": "5ad15f48c7dec4d1be0a05c3ce084d88",
".git/objects/eb/fe7b9ea04750038435642433cf2eb2c94c1193": "78314dcdd9a3e29b007b0d186d6fad62",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/ff/250d8c5539262c2163de0e23704e6dbee14524": "e93be84b396aaa4f309224397978befb",
".git/ORIG_HEAD": "a495c2a61abd06c3c793cfb74cf0ac54",
".git/refs/heads/main": "a495c2a61abd06c3c793cfb74cf0ac54",
".git/refs/remotes/origin/main": "a495c2a61abd06c3c793cfb74cf0ac54",
"assets/AssetManifest.bin": "5ca2830feeb0a9da486841aa372c67d7",
"assets/AssetManifest.bin.json": "bc64b7f08f59ac27bf05b49bf8f26a9f",
"assets/AssetManifest.json": "e924621aa3fb8c6c9dc5f3396b657ba6",
"assets/assets/getFromStore.png": "fcb5d5a2ea550ab163756e6e635c64e8",
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
"icons/icon-512.png": "24e094a61cb258811feaeae5209df470",
"index.html": "aecd7f2457aee9e8519aad765063d153",
"/": "aecd7f2457aee9e8519aad765063d153",
"main.dart.js": "5c0204521a6dbe048dd85f39b4f694b7",
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
