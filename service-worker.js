const CACHE_NAME = 'dolmang-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// 설치 단계: 필수 파일 캐싱
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 실행 단계: 네트워크 연결이 없어도 캐시된 파일 사용 가능하게 함
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});