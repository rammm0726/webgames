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

function playSound(type) {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.value = 0.1;

  switch (type) {
    case 'eat':
      osc.frequency.value = 600;
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
      break;
    case 'score':
      osc.frequency.value = 800;
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
      break;
    case 'gameover':
      osc.frequency.value = 200;
      osc.type = 'sawtooth';
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
      break;
    case 'click':
      osc.frequency.value = 400;
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
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
