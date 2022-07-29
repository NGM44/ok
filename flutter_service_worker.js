'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "c1b2097d17c4d87c9d4f4ae4a1936a1b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "00dc33c65baff6d65f4c300a3ad8154b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1616d98aabec3b92049d9bc3b3027008",
".git/logs/refs/heads/main": "1616d98aabec3b92049d9bc3b3027008",
".git/logs/refs/remotes/origin/main": "ff5bb4dc46124c66790885e780450ca1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/3c418e62f6adaddebef73447f3fabc6ee8ef86": "dbe13b5c51827c769faa5da41c8efa2b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/b223d887b30cef66c7bf7108a02641fd723e8a": "8901933f26ac57fab67772e06bab0adb",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/19/b2fe319961dc92951e711d4fffd38b1f29e03c": "05b5c284eb7664fd795c32800dfefb63",
".git/objects/24/2bb921d4a766f93b1303ca03aca0093eb07e4a": "d85f52c42315bb736585dca6f5dc6641",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/eefd316aa63afe8fc4b6efe59eae2101c0bbb0": "d2d6b88577280a0581ea7273ef43eb32",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/bc01cbf3e546dddebb05caeb8da2df20cafa43": "7da63b0a9d819a1491dba04c54ed3c90",
".git/objects/34/aa5e9cb57b51ea50e694d82608b4cdf48323a9": "c1d7d3ddfba71e9532bd6af26cb50da3",
".git/objects/38/ae0f63c95c4da658750541fc0b84ee78ac709b": "710a3eba8bcf26461bbd9a2607607435",
".git/objects/39/38f70ea864b55fbb71dbac14fdc8f22833ce31": "cdbbbdbe28b04e6b127225fe2008bc41",
".git/objects/39/bcad9037d3166599268c4a198bb5d8db5c9775": "512ac327b5edac0c3a93fb02b7c119fa",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/1abd64d29d8f938d7cd64c63bf86979bb9f630": "a0833838c38a21880306b7090445813c",
".git/objects/4a/d9e1d977062ec02565cab15ea59ff692749fa6": "567dd5e20c22f1f59a8a4c1be6692e11",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/6f8949a0c69a848fd4060faf16e4e8404efad7": "8c6372e65c6572886855feebc4b04317",
".git/objects/57/dd3357df87993165db68f4f3c7b9482ade0b79": "da9a0083b7e6881efba952b8d7af419b",
".git/objects/5a/bd24c88137310e4ae632aed911f232e658dfe0": "9beab96dacdff914e1a6e190d7be256f",
".git/objects/5f/5db3e522a6c82b294e9947a349842ba15f8a45": "bf95f458de43c562646e88ca9a1ae7e9",
".git/objects/68/ec538385688edb5c475aa60553f5bafd637634": "640de5ea91dd5a53580d0c499f710e41",
".git/objects/6c/047f5189996b748dfbd27a384e354f9db3c594": "48ba8e4430fb4750a09a4b2d275a08af",
".git/objects/6f/08678a4cc02eb3d2a4393875e50e3ca663f189": "7793639d8c070b71b39d073a791820fd",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/b3d0c23d6eafa6c247e3e5002cc2b7ff06d185": "548e45c5ae13f8bbe6930ff0444f4934",
".git/objects/7b/dbb30b60ca5995f4a5d0239075551e95b1521e": "6d827795529aaf13c4a007a9842222f9",
".git/objects/83/23b7ad4824c41cc1983254aa03b6c60b5970e0": "510b96ddd14f4f818884e2f7f9fe0f76",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/6ede544b38eaf3cd1d83e8c1169cafaa383610": "24c49e087356b284770a21e2c6209841",
".git/objects/8e/88b19959862d2f0ccc91e0a280d4c543ef614a": "b078cfffd0aa7874aee55fdf82429bd6",
".git/objects/91/3152a53151168d4c461fda19f0172789c95ca0": "d16c8df08766a5252bf61182cc5f9f99",
".git/objects/93/baf0f9d288de9cd893d0124134266346fb45b1": "de97dbbe6c8bf240fc7e633008788410",
".git/objects/9d/833bf738246d2b84074044d96f3ae983472c8b": "f57176159a0bff7af7fe5d3bbd417cba",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/f514ff6bed982378b49c164870635f141a799b": "adffd8d34ccac5914d0f024aafd80167",
".git/objects/a7/d2364a3a5dd7649ac4bfc8fdd653349bff8f46": "b544145c63453a7acb4f64c37d69a62b",
".git/objects/a9/7f127e1b9fb0a1032d7e0f4433b01126d961cd": "fad6f6312f4b1107b16fc6c6a02bc9fb",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ae/123cc3694a343cf86cda5d64667988816779e7": "7633f29496c668ab3fdb5a1909c8f933",
".git/objects/b0/3990b2ad83aea3a6fd6eee2f54743daef34d1b": "e6922170f8d46157ca00155f7e166907",
".git/objects/b0/7faedb1402d3bed5cbd9f72c8d245ab1e70364": "b98bbfe3e4c03d17d369e544a4b4dedc",
".git/objects/b5/7e4474cacd53eab97c8d9445652cdd9e30ff18": "311c1d80b2a421dcb79cd8db39dac8cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/caaa8e417e95e313317c92ae9d1b08410e681f": "e49e1cc674018822166b2b6e431fbaa3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/1aa68679d9b27e0c77ed6bb6b955ce7bc579e2": "5925960bd8e4e45e66ff67d69a002d4c",
".git/objects/c3/1c93b3b100aa397c3fd0401a0fbe9bd79e03bb": "6e2aef26b65d78d91ca599100c932ad0",
".git/objects/c4/816d2356c82fc28cd570d0e3f36ec8b949f2b7": "280827a203eb779bf19dd509495303a3",
".git/objects/c5/ffdccc11ccfb19ec57d01ba0940a5dffba0ce5": "d3175a7733228db54ba0fc0636e1d00b",
".git/objects/c6/0710704b3e65fa994cd5d414024cd240678202": "ab362e516ae7772f2bbce9f9a4ce72cc",
".git/objects/c9/03a4800262abe5183ad346a91e5a07309d2245": "9401fce971b58ca076d4f826009df5aa",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/c4335f61ab9e74261e680313ba30165c713c6d": "1cbacbf335eff51163f35400b8660551",
".git/objects/d2/50360f339cec84091d0d3c186aca332de68192": "346857cbcda227ca8d3b5df7445a145a",
".git/objects/d2/52d7479e3bd43b61420a53a2698354ed8c826d": "8e5c7ad6769fccaddb7f57e4137b6118",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fb/4987db581f3ef022458755b41b5603e6c9f8d9": "82caee0f826c4d69c7fb6e857299528d",
".git/refs/heads/main": "90d13155db068e26a54aeecf85b20b0f",
".git/refs/remotes/origin/main": "90d13155db068e26a54aeecf85b20b0f",
"assets/AssetManifest.json": "a1f1c677b18c8bf3fc47168dec9ed7f2",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c2b05458d7d1c4de01fd368ebb0b329f",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6172a1e79f12bd6e30f12ef7106c221e",
"/": "6172a1e79f12bd6e30f12ef7106c221e",
"main.dart.js": "84455b355df80374eebf00fab2d0a981",
"manifest.json": "a697a65a9afca860512cd8ef14fa6649",
"version.json": "53624fbc4e8d252ba6ce55dd96391590"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
