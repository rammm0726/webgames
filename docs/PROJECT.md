# 休闲小游戏网站 - 项目文档

## 项目概述
- **项目名称**: 休闲小游戏合集
- **在线地址**: https://rammm0726.github.io/webgames/
- **技术栈**: 纯 HTML + CSS + JavaScript（零依赖）
- **部署方式**: GitHub Pages（GitHub Actions 自动部署）

---

## 功能清单

### ✅ 已完成

| 功能 | 状态 | 说明 |
|------|------|------|
| 首页设计 | ✅ 完成 | 渐变背景 + 浮动粒子动画 + 卡片入场动画 |
| 分类筛选 | ✅ 完成 | 全部/休闲/益智/射击 四个分类 |
| 响应式布局 | ✅ 完成 | 手机/平板/桌面自适应 |
| 游戏卡片 | ✅ 完成 | 渐变背景 + 图标 + 描述 + 最高分显示 |
| 贪吃蛇 | ✅ 完成 | Canvas 绘制 + 键盘/触屏控制 + 计分 |
| 2048 | ✅ 完成 | 纯 CSS 方块 + 滑动手势 + 计分 |
| 俄罗斯方块 | ✅ 完成 | 7 种方块 + 消行计分 + 下一个预览 |
| 开始按钮 | ✅ 完成 | 每个游戏都有开始按钮 |
| 停止按钮 | ✅ 完成 | 停止当前游戏并重置 |
| 暂停/继续 | ✅ 完成 | 贪吃蛇和俄罗斯方块支持 |
| 帮助说明 | ✅ 完成 | 每个游戏都有操作说明弹窗 |
| 最高分存储 | ✅ 完成 | localStorage 本地保存 |
| 音效反馈 | ✅ 完成 | 吃食物/得分/游戏结束音效 |
| 触屏控制 | ✅ 完成 | 虚拟 D-pad 方向键 |
| GitHub Actions | ✅ 完成 | push 自动部署 |

---

### 🔲 待开发游戏

| 游戏 | 状态 | 优先级 | 说明 |
|------|------|--------|------|
| 打飞机 | 🔲 未开始 | 高 | Canvas + 子弹/敌人 + 碰撞检测 |
| 坦克大战 | 🔲 未开始 | 高 | Canvas + 地图系统 + 敌人AI |
| 扫雷 | 🔲 未开始 | 中 | 网格 + 递归展开 + 标记功能 |
| 记忆翻牌 | 🔲 未开始 | 中 | 卡片翻转动画 + 配对逻辑 |
| 弹球消消乐 | 🔲 未开始 | 低 | 球体物理 + 碰撞反弹 |

---

### ✅ 已修复问题

| 问题 | 修复日期 | 说明 |
|------|----------|------|
| 2048游戏无法玩 | 2026-06-16 | 修复渲染问题，增加gameStarted状态控制 |
| 俄罗斯方块不自动移动 | 2026-06-16 | 修复gameLoop启动逻辑，确保自动下落 |
| 俄罗斯方块无用渐变效果 | 2026-06-16 | 移除CSS渐变，使用纯色背景 |
| 缺少快捷键 | 2026-06-16 | 添加Enter=开始/Space=暂停/Esc=暂停或返回 |

### ⚠️ 待优化

| 问题 | 优先级 | 说明 |
|------|--------|------|
| 音效音量控制 | 低 | 目前音量固定，可增加音量调节 |
| 全屏模式 | 低 | 可增加全屏按钮提升游戏体验 |
| 游戏难度选择 | 低 | 可增加简单/普通/困难难度选择 |

---

## 项目结构

```
webgame/
├── index.html                  # 首页
├── css/
│   ├── variables.css           # CSS 变量
│   ├── reset.css               # CSS Reset
│   ├── common.css              # 通用组件
│   ├── home.css                # 首页样式
│   └── game.css                # 游戏页样式
├── js/
│   ├── common.js               # 共享工具函数
│   ├── games-config.js         # 游戏配置
│   └── touch-controls.js       # 触屏控件
├── assets/
│   ├── icons/                  # 游戏图标
│   └── sounds/                 # 游戏音效
├── games/
│   ├── snake/index.html        # 贪吃蛇
│   ├── 2048/index.html         # 2048
│   ├── tetris/index.html       # 俄罗斯方块
│   ├── shooter/                # 打飞机（待开发）
│   ├── tank/                   # 坦克大战（待开发）
│   ├── minesweeper/            # 扫雷（待开发）
│   ├── memory/                 # 记忆翻牌（待开发）
│   └── bubble/                 # 弹球消消乐（待开发）
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions 部署
└── README.md
```

---

## 开发指南

### 添加新游戏

1. 在 `games/` 下创建新文件夹
2. 创建 `index.html`，包含完整游戏逻辑
3. 在 `js/games-config.js` 中添加游戏配置
4. 推送到 GitHub，自动部署

### 游戏配置格式

```javascript
{
  id: 'game-id',
  name: '游戏名称',
  icon: '🎮',
  description: '游戏描述',
  path: 'games/game-id/index.html',
  category: '休闲',  // 休闲/益智/射击
  gradient: 'linear-gradient(135deg, #color1, #color2)'
}
```

### 游戏页面模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>游戏名称</title>
  <link rel="stylesheet" href="../../css/variables.css">
  <link rel="stylesheet" href="../../css/reset.css">
  <link rel="stylesheet" href="../../css/game.css">
</head>
<body class="game-page">
  <div class="game-topbar">
    <button class="back-btn">← 返回</button>
    <span class="game-title">游戏名称</span>
    <span class="game-score">0</span>
  </div>

  <div class="game-controls">
    <button class="control-btn start-btn" onclick="startGame()">▶️ 开始</button>
    <button class="control-btn pause-btn" onclick="togglePause()">⏸️ 暂停</button>
    <button class="control-btn stop-btn" onclick="stopGame()">⏹️ 停止</button>
    <button class="control-btn help-btn" onclick="showHelp()">❓ 帮助</button>
  </div>

  <div class="game-container">
    <!-- 游戏内容 -->
  </div>

  <div class="game-over-overlay">
    <div class="game-over-box">
      <h2>游戏结束</h2>
      <div class="final-score">0</div>
      <button class="btn btn-primary restart-btn">再来一局</button>
    </div>
  </div>

  <div class="help-overlay">
    <div class="help-box">
      <h2>❓ 游戏说明</h2>
      <div class="help-content">
        <ul>
          <li>操作说明1</li>
          <li>操作说明2</li>
        </ul>
      </div>
      <button class="btn btn-primary close-btn" onclick="hideHelp()">知道了</button>
    </div>
  </div>

  <script src="../../js/common.js"></script>
  <script>
    // 游戏逻辑
  </script>
</body>
</html>
```

---

## 更新日志

### 2026-06-16 (v1.1)
- ✅ 修复2048游戏无法玩的问题
- ✅ 修复俄罗斯方块不自动移动的问题
- ✅ 移除俄罗斯方块无用渐变效果
- ✅ 添加快捷键：Enter=开始/Space=暂停/Esc=暂停或返回
- ✅ 更新游戏说明文档

### 2026-06-16 (v1.0)
- ✅ 项目初始化
- ✅ 完成首页设计（渐变背景 + 粒子动画）
- ✅ 完成 3 个核心游戏（贪吃蛇、2048、俄罗斯方块）
- ✅ 添加游戏控制功能（开始/停止/暂停/帮助）
- ✅ 配置 GitHub Actions 自动部署

---

## 联系方式

- GitHub: https://github.com/rammm0726
- 项目地址: https://github.com/rammm0726/webgames
