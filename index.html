<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>돌망이 타이쿤: 인피니티 - 가챠 에디션</title>
    <meta name="description" content="100개 이상의 스킨과 짜릿한 가챠 시스템! 나만의 돌망이를 전설의 등급으로 진화시키세요.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-select=none">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#00f3ff">

    <script>
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('service-worker.js');
        }
    </script>

    <style>
        :root { --neon-blue: #00f3ff; --neon-pink: #ff00ff; --gold: #ffd700; --bg: #0a0a0c; --legendary: #ff4500; --epic: #a335ee; --rare: #0070dd; }
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; outline: none; }
        body { background: var(--bg); color: white; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: 'Pretendard', -apple-system, sans-serif; margin: 0; padding: 15px; }
        .seo-h1 { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
        .game-layout { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 20px; width: 100%; max-width: 900px; }
        .card { background: #151518; padding: 25px; border-radius: 25px; border: 1px solid #222; box-shadow: 0 10px 40px rgba(0,0,0,0.8); position: relative; display: flex; flex-direction: column; }
        h3 { margin-top: 0; color: var(--neon-blue); font-size: 16px; border-bottom: 1px solid #222; padding-bottom: 12px; display: flex; justify-content: space-between; }
        .main-stage { text-align: center; padding: 40px 0; background: radial-gradient(circle, #1a1a2e 0%, #0a0a0c 70%); border-radius: 20px; margin-bottom: 20px; position: relative; }
        #dolmang { font-size: 110px; cursor: pointer; transition: 0.1s; user-select: none; display: inline-block; filter: drop-shadow(0 0 10px rgba(0,243,255,0.3)); }
        #dolmang:active { transform: scale(0.85); }
        .bar-container { margin: 12px 0; }
        .label { font-size: 11px; color: #888; display: flex; justify-content: space-between; margin-bottom: 5px; }
        .bar-bg { background: #222; height: 8px; border-radius: 4px; overflow: hidden; }
        .bar-fill { height: 100%; width: 0%; transition: width 0.2s; background: var(--neon-blue); box-shadow: 0 0 12px var(--neon-blue); }
        .scroll-list { height: 380px; overflow-y: auto; padding-right: 8px; }
        .scroll-list::-webkit-scrollbar { width: 4px; }
        .scroll-list::-webkit-scrollbar-thumb { background: #444; border-radius: 10px; }
        .list-item { background: #1e1e22; padding: 14px; border-radius: 15px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; border: 1px solid transparent; transition: 0.2s; }
        .list-item.owned { border-color: var(--neon-pink); background: #251a25; }
        .list-item.achieved { border-left: 5px solid var(--neon-pink); background: #2d1a2d; }
        button { background: var(--neon-blue); color: black; border: none; padding: 10px 15px; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 12px; transition: 0.2s; }
        button:disabled { background: #333; color: #666; cursor: not-allowed; }
        .tab-menu { display: flex; gap: 10px; margin-bottom: 15px; }
        .tab-btn { background: #222; color: #666; flex: 1; border: none; padding: 12px; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 14px; }
        .tab-btn.active { background: var(--neon-blue); color: black; box-shadow: 0 0 15px rgba(0,243,255,0.4); }
        #msg { position: fixed; bottom: 40px; left: 50%; transform: translateX(-50%); color: var(--neon-pink); font-size: 13px; font-weight: bold; background: rgba(10,10,12,0.9); padding: 12px 25px; border-radius: 30px; pointer-events: none; opacity: 0; transition: 0.3s; z-index: 1000; border: 1px solid var(--neon-pink); text-align: center; }
        
        /* 가챠 효과용 */
        .gacha-box { border: 2px solid var(--gold) !important; background: linear-gradient(45deg, #1e1e22, #2d2d1a) !important; animation: glow 2s infinite alternate; }
        @keyframes glow { from { box-shadow: 0 0 5px var(--gold); } to { box-shadow: 0 0 20px var(--gold); } }
    </style>
</head>
<body>

<h1 class="seo-h1">돌망이 타이쿤: 인피니티 - 가챠 시스템 업데이트</h1>

<div class="game-layout">
    <div class="card">
        <div style="font-size: 28px; color: var(--gold); font-weight: 900; margin-bottom: 5px;">💰 <span id="coins">0</span></div>
        <div id="level-info" style="color: var(--neon-blue); font-size: 15px; margin-bottom: 15px; font-weight: 800;">LV.1 평범한 돌멩이</div>
        <div class="main-stage"><div id="dolmang" onclick="clickDolmang()">🪨</div></div>
        <div class="bar-container">
            <div class="label"><span>EXP</span><span id="exp-text">0 / 100</span></div>
            <div class="bar-bg"><div id="exp-bar" class="bar-fill"></div></div>
        </div>
        <div class="bar-container">
            <div class="label"><span>HUNGER</span><span id="hunger-text">100%</span></div>
            <div class="bar-bg"><div id="hunger-bar" class="bar-fill" style="background: var(--neon-pink);"></div></div>
        </div>
        <div style="display: flex; gap: 10px; margin-top: auto;">
            <button onclick="saveGame()" style="flex:1; background:#222; color:#fff;">💾 저장</button>
            <button onclick="resetGame()" style="flex:1; background:#311; color:#fff;">🧹 초기화</button>
        </div>
    </div>

    <div class="card">
        <div class="tab-menu">
            <button class="tab-btn active" id="tab-btn-shop" onclick="showTab('shop')">상점 & 뽑기</button>
            <button class="tab-btn" id="tab-btn-skins" onclick="showTab('skins')">스킨 도감</button>
        </div>
        <div id="tab-shop" class="scroll-list">
            <h3>💎 행운의 뽑기</h3>
            <div class="list-item gacha-box">
                <div style="text-align:left;">
                    <div style="font-weight:bold; color:var(--gold);">미스테리 돌 박스</div>
                    <div style="font-size:10px; color:#aaa;">1% 확률로 전설의 신급 스킨!</div>
                </div>
                <button onclick="drawGacha()" style="background:var(--gold);">5,000원</button>
            </div>
            <h3 style="margin-top:20px;">🛒 자동화 상점</h3>
            <div id="shop-items"></div>
            <h3 style="margin-top:20px;">🏅 업적</h3>
            <div id="achievements"></div>
        </div>
        <div id="tab-skins" class="scroll-list" style="display:none;">
            <h3>🎭 전체 스킨 (일반+가챠)</h3>
            <div id="skin-grid"></div>
        </div>
    </div>
</div>

<div id="msg"></div>

<script>
    const evoIcons = ["🪨","🗿","🧱","💎","🌋","🏔️","🏰","🪐","🛰️","🛸","🌠","☄️","🌀","🧬","⚛️","🔮","☀️","🌌","👾","👑","👽"];
    const evoNames = ["돌멩이","고대석","벽돌","보석","마그마","설산","성곽","행성","위성","UFO","유성","혜성","블랙홀","DNA","원자","마법구","태양","은하","에일리언","황제","신"];

    // 가챠 확률 테이블
    const gachaTable = [
        { grade: 'Legendary', chance: 1, color: '#ff4500' },
        { grade: 'Epic', chance: 9, color: '#a335ee' },
        { grade: 'Rare', chance: 20, color: '#0070dd' },
        { grade: 'Normal', chance: 70, color: '#ffffff' }
    ];

    let state = {
        coins: parseInt(localStorage.getItem('dt_coins')) || 0,
        totalEarned: parseInt(localStorage.getItem('dt_total_earned')) || 0,
        totalClicks: parseInt(localStorage.getItem('dt_total_clicks')) || 0,
        exp: parseFloat(localStorage.getItem('dt_exp')) || 0, 
        level: parseInt(localStorage.getItem('dt_lv')) || 1,
        hunger: 100, 
        cps: parseInt(localStorage.getItem('dt_cps')) || 0,
        ownedSkins: JSON.parse(localStorage.getItem('dt_skins')) || [0],
        currentSkin: parseInt(localStorage.getItem('dt_cur_skin')) || 0,
        achievements: JSON.parse(localStorage.getItem('dt_achieve')) || []
    };

    // 100개 일반 스킨 + 10개 특수 스킨 생성
    const skins = Array.from({length: 110}, (_, i) => {
        let hue = i * 137.5;
        let isGachaOnly = i >= 100;
        let grade = isGachaOnly ? 'Legendary' : (i % 10 === 0 ? 'Rare' : 'Normal');
        return {
            id: i,
            name: isGachaOnly ? `✨ 전설의 돌 #${i-99}` : `스킨 #${i + 1}`,
            price: isGachaOnly ? 999999 : (i + 1) * 300,
            reqLv: isGachaOnly ? 0 : i,
            grade: grade,
            filter: `hue-rotate(${hue}deg) brightness(${isGachaOnly ? 1.5 : 1}) saturate(${isGachaOnly ? 2 : 1})`,
            isGachaOnly: isGachaOnly
        };
    });

    function init() {
        renderShop();
        renderSkins();
        renderAchievements();
        updateUI();
        setInterval(gameLoop, 1000);
    }

    function gameLoop() {
        if(state.hunger > 0) {
            state.coins += state.cps;
            state.totalEarned += state.cps;
            state.exp += (state.cps * 0.1);
            state.hunger -= 0.3;
        }
        checkLevelUp();
        checkAchievements();
        updateUI();
    }

    function clickDolmang() {
        if(state.hunger <= 0) return showMsg("배고파요...");
        if ('vibrate' in navigator) navigator.vibrate(10);
        let power = 1 + Math.floor(state.level/2);
        state.coins += power;
        state.totalEarned += power;
        state.totalClicks++;
        state.exp += 15;
        state.hunger -= 0.1;
        updateUI();
    }

    // 🎰 가챠 실행 함수
    function drawGacha() {
        const cost = 5000;
        if (state.coins < cost) return showMsg("돈이 부족합니다! (5,000원 필요)");
        
        state.coins -= cost;
        const pick = Math.random() * 100;
        let current = 0;
        let grade = 'Normal';

        for (let item of gachaTable) {
            current += item.chance;
            if (pick < current) {
                grade = item.grade;
                break;
            }
        }

        // 등급에 맞는 랜덤 스킨 선정
        const possibleSkins = skins.filter(s => s.grade === grade);
        const wonSkin = possibleSkins[Math.floor(Math.random() * possibleSkins.length)];

        if (!state.ownedSkins.includes(wonSkin.id)) {
            state.ownedSkins.push(wonSkin.id);
        }

        // 효과 및 알림
        if ('vibrate' in navigator) {
            const vMap = { 'Legendary': [100,50,100,50,500], 'Epic': [200,100,200], 'Rare': 200, 'Normal': 50 };
            navigator.vibrate(vMap[grade]);
        }

        const colorMap = { 'Legendary': '#ff4500', 'Epic': '#a335ee', 'Rare': '#0070dd', 'Normal': '#fff' };
        showMsg(`<span style="color:${colorMap[grade]}">★ ${grade} 등급 ★</span><br>${wonSkin.name} 획득!`);
        
        renderSkins();
        updateUI();
    }

    function renderSkins() {
        const grid = document.getElementById('skin-grid');
        grid.innerHTML = skins.map(s => {
            const isOwned = state.ownedSkins.includes(s.id);
            return `
                <div class="list-item ${isOwned ? 'owned' : ''}">
                    <span style="filter: ${s.filter}; font-size:26px;">${evoIcons[Math.min(Math.floor(state.level/5), 20)]}</span>
                    <div style="flex:1; margin-left:15px; text-align:left;">
                        <div style="font-weight:bold; font-size:12px; color:${s.isGachaOnly ? 'var(--gold)' : '#fff'}">${s.name}</div>
                        <div style="font-size:10px; color:#666;">${s.isGachaOnly ? '가챠 전용' : 'LV.'+s.reqLv+' 해금'}</div>
                    </div>
                    <button onclick="handleSkin(${s.id}, ${s.price}, ${s.reqLv})" ${!isOwned && (state.coins < s.price || state.level < s.reqLv || s.isGachaOnly) ? 'disabled' : ''}>
                        ${isOwned ? (state.currentSkin === s.id ? '장착중' : '장착') : (s.isGachaOnly ? '잠김' : s.price+'원')}
                    </button>
                </div>
            `;
        }).join('');
    }

    function handleSkin(id, price, req) {
        if(state.ownedSkins.includes(id)) { state.currentSkin = id; }
        else {
            if(state.coins < price) return showMsg("코인 부족!");
            state.coins -= price;
            state.ownedSkins.push(id);
            state.currentSkin = id;
        }
        updateUI(); renderSkins();
    }

    function renderShop() {
        const items = [{ id: 'ant', name: '일꾼 개미', price: 200, cps: 3 }, { id: 'pick', name: '강철 곡괭이', price: 2000, cps: 30 }, { id: 'drill', name: '차원 드릴', price: 20000, cps: 500 }];
        document.getElementById('shop-items').innerHTML = items.map(it => `
            <div class="list-item">
                <span>${it.name} (+${it.cps}/s)</span>
                <button onclick="buyCps(${it.price}, ${it.cps})">${it.price}원</button>
            </div>
        `).join('') + `<div class="list-item"><span>🍱 우주 비료</span><button onclick="buyFood(100)">100원</button></div>`;
    }

    function buyCps(p, c) { if(state.coins >= p) { state.coins -= p; state.cps += c; updateUI(); } else { showMsg("코인 부족!"); } }
    function buyFood(p) { if(state.coins >= p) { state.coins -= p; state.hunger = Math.min(100, state.hunger + 50); updateUI(); } }

    function checkLevelUp() {
        let maxExp = state.level * 100;
        if(state.exp >= maxExp) { state.exp = 0; state.level++; showMsg(`⭐ LEVEL UP! [${state.level}] ⭐`); }
    }

    function updateUI() {
        document.getElementById('coins').innerText = Math.floor(state.coins).toLocaleString();
        document.getElementById('exp-bar').style.width = (state.exp / (state.level * 100) * 100) + '%';
        document.getElementById('hunger-bar').style.width = state.hunger + '%';
        let evoIdx = Math.min(Math.floor(state.level / 5), evoIcons.length - 1);
        const d = document.getElementById('dolmang');
        d.innerText = evoIcons[evoIdx];
        d.style.filter = skins[state.currentSkin].filter;
        document.getElementById('level-info').innerText = `LV.${state.level} ${evoNames[evoIdx]}`;
        document.getElementById('exp-text').innerText = `${Math.floor(state.exp)} / ${state.level * 100}`;
    }

    function showTab(t) {
        document.getElementById('tab-shop').style.display = t === 'shop' ? 'block' : 'none';
        document.getElementById('tab-skins').style.display = t === 'skins' ? 'block' : 'none';
        document.getElementById('tab-btn-shop').classList.toggle('active', t === 'shop');
        document.getElementById('tab-btn-skins').classList.toggle('active', t === 'skins');
    }

    function showMsg(m) {
        const msgBox = document.getElementById('msg');
        msgBox.innerHTML = m; msgBox.style.opacity = 1;
        setTimeout(() => msgBox.style.opacity = 0, 2500);
    }

    function saveGame() {
        localStorage.setItem('dt_coins', state.coins);
        localStorage.setItem('dt_total_earned', state.totalEarned);
        localStorage.setItem('dt_lv', state.level);
        localStorage.setItem('dt_exp', state.exp);
        localStorage.setItem('dt_cps', state.cps);
        localStorage.setItem('dt_skins', JSON.stringify(state.ownedSkins));
        localStorage.setItem('dt_cur_skin', state.currentSkin);
        localStorage.setItem('dt_achieve', JSON.stringify(state.achievements));
        showMsg("우주 서버에 저장 완료!");
    }

    function resetGame() { if(confirm("초기화하시겠습니까?")) { localStorage.clear(); location.reload(); } }

    function renderAchievements() {
        const container = document.getElementById('achievements');
        container.innerHTML = achievementData.map(ach => {
            const isDone = state.achievements.includes(ach.id);
            return `<div class="list-item ${isDone ? 'achieved' : ''}"><div>${ach.name}</div><div style="font-size:11px; color:var(--gold)">${isDone ? '✅' : ach.reward+'원'}</div></div>`;
        }).join('');
    }

    function checkAchievements() {
        achievementData.forEach(ach => {
            if (state.achievements.includes(ach.id)) return;
            let reached = (ach.cat==='CLICK' && state.totalClicks>=ach.goal) || (ach.cat==='MONEY' && state.totalEarned>=ach.goal) || (ach.cat==='LV' && state.level>=ach.goal);
            if (reached) { state.achievements.push(ach.id); state.coins += ach.reward; renderAchievements(); }
        });
    }

    init();
</script>

</body>
</html>
