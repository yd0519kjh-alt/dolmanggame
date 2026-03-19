const CACHE_NAME = 'dolmang-v2'; // 버전을 v2로 올렸습니다!
const ASSETS = [
  'index.html',
  'manifest.json'
  // 'icon.png' 가 생기면 나중에 여기 추가하세요!
];

// 1. 설치 단계: 새로운 파일들을 저장소에 담기
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 2. 활성화 단계: v1 같은 옛날 캐시 파일이 있으면 삭제해서 용량 정리!
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// 3. 실행 단계: 네트워크가 없어도 저장된 파일을 꺼내주기
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
