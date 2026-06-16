const GamesConfig = [
  {
    id: 'snake',
    name: '贪吃蛇',
    icon: '🐍',
    description: '经典贪吃蛇，吃食物成长，别撞墙！',
    path: 'games/snake/index.html',
    category: '休闲',
    gradient: 'linear-gradient(135deg, #00B894, #00CEC9)'
  },
  {
    id: '2048',
    name: '2048',
    icon: '🔢',
    description: '滑动合并数字，挑战最高分！',
    path: 'games/2048/index.html',
    category: '益智',
    gradient: 'linear-gradient(135deg, #FDCB6E, #E17055)'
  },
  {
    id: 'tetris',
    name: '俄罗斯方块',
    icon: '🧱',
    description: '经典方块消除，消行得分！',
    path: 'games/tetris/index.html',
    category: '休闲',
    gradient: 'linear-gradient(135deg, #6C5CE7, #A29BFE)'
  },
  {
    id: 'shooter',
    name: '打飞机',
    icon: '✈️',
    description: '太空射击，消灭敌人！',
    path: 'games/shooter/index.html',
    category: '射击',
    gradient: 'linear-gradient(135deg, #E17055, #FDCB6E)'
  },
  {
    id: 'tank',
    name: '坦克大战',
    icon: '🛡️',
    description: '驾驶坦克，保卫基地！',
    path: 'games/tank/index.html',
    category: '射击',
    gradient: 'linear-gradient(135deg, #636E72, #2D3436)'
  },
  {
    id: 'minesweeper',
    name: '扫雷',
    icon: '💣',
    description: '经典扫雷，小心地雷！',
    path: 'games/minesweeper/index.html',
    category: '益智',
    gradient: 'linear-gradient(135deg, #D63031, #E17055)'
  },
  {
    id: 'memory',
    name: '记忆翻牌',
    icon: '🃏',
    description: '翻开配对，考验记忆力！',
    path: 'games/memory/index.html',
    category: '益智',
    gradient: 'linear-gradient(135deg, #0984E3, #74B9FF)'
  },
  {
    id: 'bubble',
    name: '弹球消消乐',
    icon: '🎯',
    description: '瞄准发射，消除彩球！',
    path: 'games/bubble/index.html',
    category: '休闲',
    gradient: 'linear-gradient(135deg, #A29BFE, #FD79A8)'
  }
];

function getBestScore(gameId) {
  return parseInt(localStorage.getItem(`best_${gameId}`) || '0');
}

function setBestScore(gameId, score) {
  const prev = getBestScore(gameId);
  if (score > prev) {
    localStorage.setItem(`best_${gameId}`, score);
    return true;
  }
  return false;
}
