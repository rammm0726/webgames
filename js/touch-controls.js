class TouchControls {
  constructor(container, callbacks) {
    this.callbacks = callbacks;
    this.container = container;
    this.render();
    this.bindEvents();
  }

  render() {
    this.container.innerHTML = `
      <div class="dpad">
        <button class="dpad-btn dpad-up" data-dir="up">▲</button>
        <button class="dpad-btn dpad-left" data-dir="left">◀</button>
        <button class="dpad-btn dpad-center"></button>
        <button class="dpad-btn dpad-right" data-dir="right">▶</button>
        <button class="dpad-btn dpad-down" data-dir="down">▼</button>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .dpad {
        display: grid;
        grid-template-columns: repeat(3, 56px);
        grid-template-rows: repeat(3, 56px);
        gap: 4px;
        justify-content: center;
      }
      .dpad-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(108, 92, 231, 0.15);
        border: 1px solid rgba(108, 92, 231, 0.3);
        border-radius: 12px;
        font-size: 20px;
        color: var(--primary);
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
      }
      .dpad-btn:active {
        background: var(--primary);
        color: white;
      }
      .dpad-center {
        background: rgba(0, 0, 0, 0.05);
        border-color: transparent;
        cursor: default;
      }
    `;
    document.head.appendChild(style);
  }

  bindEvents() {
    this.container.querySelectorAll('.dpad-btn[data-dir]').forEach(btn => {
      const dir = btn.dataset.dir;

      btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.callbacks.onDirection && this.callbacks.onDirection(dir);
      });

      btn.addEventListener('mousedown', (e) => {
        e.preventDefault();
        this.callbacks.onDirection && this.callbacks.onDirection(dir);
      });
    });
  }
}
