const gameTitles = {
    '2048': '2048',
    'bubbles': '泡泡消除',
    'whackamole': '打地鼠',
    'puzzle': '拼图游戏',
    'paint': '涂色画板',
    'dodger': '躲避障碍',
    'snake': '贪吃蛇',
    'tetris': '俄罗斯方块',
    'sudoku': '数独',
    'breakout': '打砖块'
};

function openGame(gameName) {
    const modal = document.getElementById('gameModal');
    const title = document.getElementById('modalTitle');
    const frame = document.getElementById('gameFrame');
    
    title.textContent = gameTitles[gameName] || gameName;
    frame.src = `games/${gameName}/index.html`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGame() {
    const modal = document.getElementById('gameModal');
    const frame = document.getElementById('gameFrame');
    
    modal.classList.remove('active');
    frame.src = '';
    document.body.style.overflow = '';
}

function showCategory(category) {
    const tabs = document.querySelectorAll('.category-tab');
    const navLinks = document.querySelectorAll('.nav a');
    const games = document.querySelectorAll('.game-card');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeTab = document.querySelector(`.category-tab[onclick="showCategory('${category}')"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    const activeNavLink = document.querySelector(`.nav a[onclick="showCategory('${category}')"]`);
    if (activeNavLink) {
        activeNavLink.classList.add('active');
    }
    
    games.forEach(game => {
        if (category === 'all') {
            game.style.display = 'block';
        } else {
            const gameCategory = game.getAttribute('data-category');
            game.style.display = gameCategory === category ? 'block' : 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-box input');
    const gameCards = document.querySelectorAll('.game-card');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        gameCards.forEach(card => {
            const title = card.querySelector('.game-title').textContent.toLowerCase();
            const category = card.querySelector('.game-category').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || category.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    const modal = document.getElementById('gameModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeGame();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeGame();
        }
    });
});