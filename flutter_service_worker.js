'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7c13bf9300c35484444609e05eb24a47",
"assets/AssetManifest.bin.json": "0d63961131e1b82cfc2da1daa00573e7",
"assets/AssetManifest.json": "7d56e994f53ac2dd594f68ee6afbb038",
"assets/assets/food_pics/food_banana.jpg": "28b81838736f4ea48228a37589d694bf",
"assets/assets/food_pics/food_brussels_sprouts.jpg": "4749cd82747801875a1c1d545cb5f435",
"assets/assets/food_pics/food_burger.jpg": "ffc3463799a04569d0741019f3901df2",
"assets/assets/food_pics/food_cucumber.jpg": "8fa5d8fdb838a5bc3d709d6d35369ed7",
"assets/assets/food_pics/food_cupcake.jpg": "3a18b5a33e5ef956273a7e9aff184469",
"assets/assets/food_pics/food_curry.jpg": "451de7dc12ddcc47abe1b061ec9423d9",
"assets/assets/food_pics/food_dozen_eggs.jpg": "3dd6c07b0560270e3055221207d81ed7",
"assets/assets/food_pics/food_flour.jpg": "635a6dac95e89f29b18794b669785148",
"assets/assets/food_pics/food_friedrice.jpg": "99c906c9c472ba662e567e6578372578",
"assets/assets/food_pics/food_green_beans.jpg": "82d95c746ba5744eca9cd9d37684243a",
"assets/assets/food_pics/food_pancake.jpg": "d9b0a474f1c0c496821fad8b5e5d8050",
"assets/assets/food_pics/food_peanutbutter.png": "009e6fd0b6cdcad24c1af0f5056fe50b",
"assets/assets/food_pics/food_pho.jpg": "8901532618080a276cf6a53b792903e0",
"assets/assets/food_pics/food_salmon.jpg": "875f12fcf5985eb2864c1dcef8da1063",
"assets/assets/food_pics/food_soymilk.png": "2756ae43b13f8364f2b0226c4b74d137",
"assets/assets/food_pics/food_spaghetti.jpg": "352bc4733d3ba759fa977f14881d8fa6",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/empty_list.png": "fd8ae8afd0b3a57cac11d107cead2d34",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/magazine_pics/card_bread.jpg": "fc720a6180f591b9fdde03c642fb3d00",
"assets/assets/magazine_pics/card_carrot.png": "0d2b21e99c63449763a1d5ed4dfc45a7",
"assets/assets/magazine_pics/card_coffee.png": "bd572d0a2d5001b5c0ed7493a6041eed",
"assets/assets/magazine_pics/card_salad.png": "612e2e487cb51a5b1f5782760ce15373",
"assets/assets/magazine_pics/card_smoothie.png": "66130bc238c886240790cfb1b440adb6",
"assets/assets/profile_pics/person_cesare.jpeg": "953a93138a29882976b30c386396305a",
"assets/assets/profile_pics/person_crispy.png": "f72ff9baa079eb3a9eacd6b805d77c43",
"assets/assets/profile_pics/person_joe.jpeg": "c03b996f28a9a0f74e81d0565d4218a3",
"assets/assets/profile_pics/person_katz.jpeg": "9d93dc4bef3ce0e055eeb486a1af911a",
"assets/assets/profile_pics/person_kevin.jpeg": "ecc19eb1c1dc1704fca0c7502adb7e5e",
"assets/assets/profile_pics/person_manda.png": "4b13f8089c95e0334717e05c8c0aeb68",
"assets/assets/profile_pics/person_ray.jpeg": "d21589f30a1f5c968bd4686520e50b25",
"assets/assets/profile_pics/person_sandra.jpeg": "313347d60d8a6693b8528cbf38be4435",
"assets/assets/profile_pics/person_stef.jpeg": "e2ce6888dbf5fc392c9322d9cfb54b29",
"assets/assets/profile_pics/person_tiffani.jpeg": "10f1b0e3af37b5569f59c07c61cdb970",
"assets/assets/sample_data/sample_explore_recipes.json": "b16a9122d562264c461e5f35d6368819",
"assets/assets/sample_data/sample_friends_feed.json": "a0179fb028e98b56653ee464aa9594cb",
"assets/assets/sample_data/sample_recipes.json": "1c9f5adb5ef7f5f134a84c5b50feb91f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "e6dcf9c75859510e13f8697b66079cbf",
"assets/NOTICES": "5bbc4c65e07ab141dc58532ec9dd5191",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "84063e7f719dfeb452a505a87422a988",
"/": "84063e7f719dfeb452a505a87422a988",
"main.dart.js": "9c4b613f3b437522f21a2d71842bafa2",
"manifest.json": "b966059c43c69e78e74c3531cce7fe65",
"version.json": "a2b08316dcf0c5873a649cda2b8faa62"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
