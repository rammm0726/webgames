let gamePaused = false;
let gameStarted = false;

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

function toggleFullscreen(element) {
  if (!document.fullscreenElement) {
    (element || document.documentElement).requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen();
  }
}

let _audioCtx = null;

function playSound(type) {
  if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = _audioCtx.createOscillator();
  const gain = _audioCtx.createGain();
  osc.connect(gain);
  gain.connect(_audioCtx.destination);
  gain.gain.value = 0.1;

  switch (type) {
    case 'eat':
      osc.frequency.value = 600;
      osc.start();
      osc.stop(_audioCtx.currentTime + 0.1);
      break;
    case 'score':
      osc.frequency.value = 800;
      osc.start();
      osc.stop(_audioCtx.currentTime + 0.15);
      break;
    case 'gameover':
      osc.frequency.value = 200;
      osc.type = 'sawtooth';
      osc.start();
      osc.stop(_audioCtx.currentTime + 0.5);
      break;
    case 'click':
      osc.frequency.value = 400;
      osc.start();
      osc.stop(_audioCtx.currentTime + 0.05);
      break;
  }
}

function initGamePage(title) {
  document.querySelector('.game-title').textContent = title;
  document.querySelector('.back-btn').addEventListener('click', () => {
    window.location.href = '../../index.html';
  });
}

function updateScore(score) {
  document.querySelector('.game-score').textContent = score;
}

function showGameOver(score, onRestart) {
  const overlay = document.querySelector('.game-over-overlay');
  const finalScore = document.querySelector('.final-score');
  finalScore.textContent = score;
  overlay.classList.add('show');
  document.querySelector('.restart-btn').onclick = () => {
    overlay.classList.remove('show');
    onRestart();
  };
}

function togglePause(onPause, onResume) {
  gamePaused = !gamePaused;
  const btn = document.querySelector('.pause-btn');
  if (gamePaused) {
    btn.innerHTML = '▶️ 继续';
    btn.classList.add('active');
    onPause && onPause();
  } else {
    btn.innerHTML = '⏸️ 暂停';
    btn.classList.remove('active');
    onResume && onResume();
  }
}

function stopGame(onStop) {
  gameStarted = false;
  gamePaused = false;
  onStop && onStop();
}

function startGame(onStart) {
  gameStarted = true;
  gamePaused = false;
  const btn = document.querySelector('.pause-btn');
  if (btn) {
    btn.innerHTML = '⏸️ 暂停';
    btn.classList.remove('active');
  }
  onStart && onStart();
}

function showHelp() {
  const overlay = document.querySelector('.help-overlay');
  overlay.classList.add('show');
}

function hideHelp() {
  const overlay = document.querySelector('.help-overlay');
  overlay.classList.remove('show');
}
