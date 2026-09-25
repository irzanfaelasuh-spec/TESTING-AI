* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

body {
  background:
    radial-gradient(circle at 50% -20%, #17204a 0%, transparent 45%),
    #070910;

  color: #fff;
}

/* =========================
   BACKGROUND
========================= */

.ambient {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.orb {
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  filter: blur(90px);
  opacity: .22;
  animation: floatOrb 12s ease-in-out infinite;
}

.orb1 {
  background: #6c5cff;
  top: -100px;
  left: 15%;
}

.orb2 {
  background: #00d9ff;
  right: -100px;
  top: 35%;
  animation-delay: -4s;
}

.orb3 {
  background: #b300ff;
  left: 15%;
  bottom: -150px;
  animation-delay: -8s;
}

@keyframes floatOrb {
  0%,100% {
    transform: translate3d(0,0,0) scale(1);
  }

  50% {
    transform: translate3d(30px,-25px,0) scale(1.1);
  }
}

.grid {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;

  background-image:
    linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);

  background-size: 45px 45px;

  mask-image:
    linear-gradient(to bottom, black, transparent 90%);
}


/* =========================
   APP
========================= */

.app {
  position: relative;
  z-index: 2;

  width: 100%;
  height: 100dvh;

  display: flex;
}


/* =========================
   SIDEBAR
========================= */

.sidebar {
  width: 260px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;

  padding: 18px;

  background: rgba(7,9,17,.82);
  border-right: 1px solid rgba(255,255,255,.07);

  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);

  z-index: 50;
}

.brand {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 22px;
}

.brand-icon {
  width: 38px;
  height: 38px;

  display: grid;
  place-items: center;

  border-radius: 12px;

  background:
    linear-gradient(135deg,#7c5cff,#00d9ff);

  box-shadow:
    0 0 25px rgba(99,92,255,.4);

  font-weight: 900;
}

.brand-title {
  font-weight: 900;
  letter-spacing: 2px;
}

.brand-sub {
  font-size: 10px;
  color: #8f96a8;
  letter-spacing: 3px;
}

button,
input,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
  border: 0;
}

.new-chat {
  width: 100%;
  min-height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: white;

  border-radius: 13px;

  background:
    linear-gradient(
      135deg,
      rgba(124,92,255,.9),
      rgba(0,217,255,.65)
    );

  box-shadow:
    0 8px 30px rgba(86,77,255,.18);

  transition:
    transform .18s ease,
    box-shadow .18s ease;
}

.new-chat:hover {
  transform: translateY(-2px);
  box-shadow:
    0 12px 35px rgba(86,77,255,.3);
}

.side-label {
  margin: 25px 5px 10px;

  font-size: 10px;
  letter-spacing: 2px;

  color: #697184;
}

.history {
  flex: 1;
  overflow-y: auto;
}

.history-item {
  width: 100%;
  padding: 11px;

  border-radius: 10px;

  color: #adb3c2;
  background: transparent;

  text-align: left;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin-bottom: 4px;

  transition:
    background .18s ease,
    color .18s ease;
}

.history-item:hover,
.history-item.active {
  background: rgba(255,255,255,.07);
  color: white;
}

.sidebar-bottom {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.side-btn {
  width: 100%;
  min-height: 42px;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 12px;

  color: #aeb5c5;
  background: transparent;

  border-radius: 10px;

  text-align: left;

  transition: .18s ease;
}

.side-btn:hover {
  background: rgba(255,255,255,.06);
  color: white;
}

.side-btn.danger:hover {
  color: #ff7f91;
}


/* =========================
   MAIN
========================= */

.main {
  min-width: 0;
  flex: 1;

  height: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
}


/* =========================
   TOPBAR
========================= */

.topbar {
  height: 70px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 22px;

  border-bottom: 1px solid rgba(255,255,255,.06);

  background: rgba(7,9,17,.52);

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  z-index: 20;
}

.model-display {
  display: flex;
  align-items: center;
  gap: 10px;
}

.status-dot {
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: #56ffad;

  box-shadow:
    0 0 10px #56ffad;

  animation: statusPulse 2s infinite;
}

@keyframes statusPulse {
  50% {
    opacity: .35;
    transform: scale(.7);
  }
}

.model-label {
  color: #656d80;
  font-size: 9px;
  letter-spacing: 2px;
}

#modelName {
  margin-top: 2px;

  font-size: 12px;
  font-weight: 700;

  color: #e7eaff;
}

.top-actions {
  display: flex;
  gap: 7px;
}

.icon-btn {
  width: 40px;
  height: 40px;

  display: grid;
  place-items: center;

  color: #c7ccda;

  background: rgba(255,255,255,.045);

  border: 1px solid rgba(255,255,255,.06);
  border-radius: 10px;

  transition:
    transform .15s ease,
    background .15s ease,
    color .15s ease;
}

.icon-btn:hover {
  transform: translateY(-1px);
  background: rgba(255,255,255,.09);
  color: white;
}

.mobile-only {
  display: none;
}


/* =========================
   CHAT AREA
========================= */

.chat-area {
  min-height: 0;
  flex: 1;

  position: relative;

  overflow-y: auto;
  overflow-x: hidden;

  scroll-behavior: smooth;
}

.welcome {
  min-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px 20px;
  text-align: center;

  position: relative;
}

.welcome-glow {
  position: absolute;

  width: 300px;
  height: 300px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(100,80,255,.17),
      transparent 65%
    );

  filter: blur(20px);

  pointer-events: none;
}

.nova-logo {
  width: 76px;
  height: 76px;

  display: grid;
  place-items: center;

  border-radius: 24px;

  background:
    linear-gradient(
      135deg,
      #745cff,
      #00d9ff
    );

  box-shadow:
    0 0 50px rgba(94,84,255,.4);

  animation:
    logoFloat 4s ease-in-out infinite;
}

.nova-logo span {
  font-size: 34px;
  font-weight: 1000;
}

@keyframes logoFloat {
  50% {
    transform: translateY(-8px) rotate(2deg);
  }
}

.welcome h1 {
  margin: 25px 0 8px;

  font-size: clamp(28px,5vw,48px);

  letter-spacing: -1.5px;
}

.welcome h1 span {
  background:
    linear-gradient(90deg,#927cff,#5cecff);

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.welcome p {
  margin: 0 0 30px;

  color: #858c9f;
}

.quick-grid {
  width: min(720px,100%);

  display: grid;
  grid-template-columns: repeat(2,1fr);

  gap: 10px;
}

.quick {
  padding: 17px;

  text-align: left;

  border-radius: 15px;

  border: 1px solid rgba(255,255,255,.07);

  background:
    rgba(255,255,255,.035);

  color: #dce0eb;

  transition:
    transform .2s ease,
    border-color .2s ease,
    background .2s ease;
}

.quick:hover {
  transform: translateY(-3px);

  background:
    rgba(255,255,255,.065);

  border-color:
    rgba(122,102,255,.45);
}

.quick b {
  display: block;
  margin-bottom: 5px;
}

.quick span {
  color: #777f92;
  font-size: 12px;
}


/* =========================
   MESSAGES
========================= */

.messages {
  width: min(900px,100%);

  margin: 0 auto;

  padding: 25px 20px 30px;
}

.message {
  display: flex;

  width: 100%;

  margin-bottom: 18px;

  animation:
    messageIn .35s cubic-bezier(.2,.8,.2,1);
}

@keyframes messageIn {
  from {
    opacity: 0;
    transform: translateY(12px) scale(.985);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.message.user {
  justify-content: flex-end;
}

.message.ai {
  justify-content: flex-start;
}

.bubble {
  max-width: min(78%,700px);

  padding: 14px 16px;

  border-radius: 18px;

  line-height: 1.6;

  font-size: 14px;

  position: relative;
}

.user .bubble {
  background:
    linear-gradient(
      135deg,
      rgba(112,91,255,.9),
      rgba(67,139,255,.85)
    );

  border-bottom-right-radius: 5px;

  box-shadow:
    0 8px 30px rgba(75,79,255,.16);
}

.ai .bubble {
  background:
    rgba(255,255,255,.045);

  border:
    1px solid rgba(255,255,255,.065);

  border-bottom-left-radius: 5px;
}

.message-meta {
  font-size: 9px;
  letter-spacing: 1.5px;

  color: #727a8e;

  margin-bottom: 6px;
}


/* =========================
   AI THINKING
========================= */

.thinking {
  min-width: 75px;

  display: flex;
  align-items: center;
  gap: 6px;
}

.thinking span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #8d7cff;

  box-shadow:
    0 0 12px rgba(120,100,255,.7);

  animation:
    thinkingBounce 1.1s infinite ease-in-out;
}

.thinking span:nth-child(2) {
  animation-delay: .15s;
}

.thinking span:nth-child(3) {
  animation-delay: .3s;
}

@keyframes thinkingBounce {
  0%,80%,100% {
    transform: translateY(0) scale(.75);
    opacity: .4;
  }

  40% {
    transform: translateY(-6px) scale(1);
    opacity: 1;
  }
}

.ai-thinking {
  position: relative;
}

.ai-thinking::after {
  content: "";

  position: absolute;
  inset: -1px;

  border-radius: inherit;

  border: 1px solid rgba(126,105,255,.45);

  animation:
    thinkingGlow 1.8s infinite;
}

@keyframes thinkingGlow {
  50% {
    box-shadow:
      0 0 25px rgba(110,91,255,.18);
  }
}


/* =========================
   COMPOSER
========================= */

.composer-wrap {
  flex-shrink: 0;

  width: min(900px,100%);

  margin: 0 auto;

  padding: 10px 20px 15px;

  position: relative;

  z-index: 30;
}

.composer {
  display: flex;
  align-items: flex-end;
  gap: 9px;

  padding: 9px;

  border-radius: 18px;

  background:
    rgba(15,17,29,.9);

  border:
    1px solid rgba(255,255,255,.09);

  box-shadow:
    0 15px 50px rgba(0,0,0,.3);

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  transition:
    border-color .2s ease,
    box-shadow .2s ease;
}

.composer:focus-within {
  border-color:
    rgba(115,100,255,.5);

  box-shadow:
    0 15px 50px rgba(75,60,255,.12),
    0 0 30px rgba(80,60,255,.08);
}

#prompt {
  min-width: 0;
  flex: 1;

  resize: none;

  max-height: 160px;

  padding: 11px 12px;

  color: white;

  background: transparent;

  border: 0;
  outline: 0;

  line-height: 1.5;

  overflow-y: auto;
}

#prompt::placeholder {
  color: #656d7e;
}

.send-btn {
  min-width: 76px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  color: white;

  border-radius: 12px;

  background:
    linear-gradient(
      135deg,
      #795fff,
      #358fff
    );

  box-shadow:
    0 7px 25px rgba(80,80,255,.22);

  transition:
    transform .15s ease,
    filter .15s ease;
}

.send-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}

.send-btn:active {
  transform: scale(.95);
}

.send-btn:disabled {
  opacity: .5;
  cursor: not-allowed;
  transform: none;
}

.composer-info {
  display: flex;
  justify-content: center;
  gap: 7px;

  margin-top: 7px;

  color: #555d70;

  font-size: 9px;
}


/* =========================
   OVERLAY
========================= */

.overlay {
  position: fixed;
  inset: 0;

  background: rgba(0,0,0,.58);

  opacity: 0;
  visibility: hidden;

  transition: .25s ease;

  z-index: 80;
}

.overlay.show {
  opacity: 1;
  visibility: visible;
}


/* =========================
   SETTINGS
========================= */

.settings-panel {
  position: fixed;

  top: 0;
  right: 0;

  width: min(430px,100%);
  height: 100dvh;

  overflow-y: auto;

  padding: 20px;

  background:
    rgba(9,11,20,.96);

  border-left:
    1px solid rgba(255,255,255,.08);

  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  transform: translateX(105%);

  transition:
    transform .38s cubic-bezier(.2,.8,.2,1);

  z-index: 100;
}

.settings-panel.open {
  transform: translateX(0);
}

.settings-head {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 25px;
}

.settings-title {
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 1.5px;
}

.settings-sub {
  margin-top: 4px;

  color: #687084;

  font-size: 11px;
}

.settings-section {
  padding: 17px 0;

  border-top:
    1px solid rgba(255,255,255,.06);
}

.section-title {
  margin-bottom: 15px;

  color: #858da0;

  font-size: 10px;
  font-weight: 800;

  letter-spacing: 2px;
}

.settings-section label {
  display: flex;
  justify-content: space-between;

  margin: 12px 0 7px;

  color: #aeb5c5;

  font-size: 11px;
}

.settings-section input[type="text"],
.settings-section input[type="password"],
.input-row input {
  width: 100%;

  min-height: 42px;

  padding: 10px 12px;

  color: white;

  background: rgba(255,255,255,.045);

  border:
    1px solid rgba(255,255,255,.08);

  border-radius: 10px;

  outline: none;
}

.input-row {
  display: flex;
  gap: 7px;
}

.input-row input {
  min-width: 0;
}

.mini-btn {
  min-height: 40px;

  padding: 0 13px;

  color: #dfe3ef;

  background: rgba(255,255,255,.06);

  border:
    1px solid rgba(255,255,255,.08);

  border-radius: 9px;

  white-space: nowrap;

  transition: .18s ease;
}

.mini-btn:hover {
  background: rgba(255,255,255,.1);
}

.primary-btn {
  width: 100%;

  min-height: 43px;

  margin-top: 9px;

  color: white;

  background:
    linear-gradient(
      135deg,
      #745cff,
      #338eff
    );

  border-radius: 10px;

  font-weight: 700;

  box-shadow:
    0 8px 25px rgba(80,80,255,.16);
}

.api-status,
.model-status {
  margin-top: 8px;

  color: #687185;

  font-size: 10px;

  line-height: 1.5;
}

.model-box {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 13px;

  background: rgba(255,255,255,.04);

  border:
    1px solid rgba(255,255,255,.06);

  border-radius: 11px;
}

.model-box small {
  display: block;

  color: #646d80;

  font-size: 8px;
  letter-spacing: 1.5px;
}

.model-box strong {
  display: block;

  margin-top: 4px;

  font-size: 12px;

  color: #e7e9f0;

  word-break: break-all;
}

.settings-section input[type="range"] {
  width: 100%;

  accent-color: #7965ff;
}

.system-prompt {
  width: 100%;
  min-height: 100px;

  resize: vertical;

  padding: 12px;

  color: white;

  background: rgba(255,255,255,.04);

  border:
    1px solid rgba(255,255,255,.07);

  border-radius: 10px;

  outline: none;
}

.switch-row {
  min-height: 42px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #b8bfcd;

  font-size: 12px;
}

.switch-row input {
  width: 18px;
  height: 18px;

  accent-color: #7965ff;
}

.theme-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);

  gap: 7px;
}

.theme {
  padding: 10px;

  color: #8e96a9;

  background: rgba(255,255,255,.04);

  border:
    1px solid rgba(255,255,255,.07);

  border-radius: 9px;
}

.theme.active {
  color: white;

  border-color:
    rgba(124,92,255,.65);

  background:
    rgba(124,92,255,.15);
}

.reset-btn {
  width: 100%;

  margin: 10px 0 25px;

  padding: 12px;

  color: #ff8797;

  background: rgba(255,70,100,.06);

  border:
    1px solid rgba(255,70,100,.12);

  border-radius: 10px;
}


/* =========================
   TOAST
========================= */

.toast {
  position: fixed;

  left: 50%;
  bottom: 25px;

  transform:
    translate(-50%,20px);

  padding: 10px 15px;

  border-radius: 10px;

  color: white;

  background:
    rgba(18,20,31,.94);

  border:
    1px solid rgba(255,255,255,.08);

  box-shadow:
    0 10px 35px rgba(0,0,0,.3);

  opacity: 0;

  pointer-events: none;

  transition: .25s ease;

  z-index: 200;

  font-size: 11px;
}

.toast.show {
  opacity: 1;

  transform:
    translate(-50%,0);
}


/* =========================
   THEMES
========================= */

body[data-theme="midnight"] {
  background:
    radial-gradient(circle at 50% -20%, #0b2741, transparent 45%),
    #05080d;
}

body[data-theme="mono"] .orb {
  background: white;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 760px) {

  .sidebar {
    position: fixed;

    left: 0;
    top: 0;
    bottom: 0;

    transform: translateX(-105%);

    transition:
      transform .3s cubic-bezier(.2,.8,.2,1);

    box-shadow:
      20px 0 50px rgba(0,0,0,.4);
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .mobile-only {
    display: grid;
  }

  .topbar {
    padding: 0 12px;
  }

  .top-actions {
    gap: 4px;
  }

  .welcome {
    padding: 30px 15px;
  }

  .welcome h1 {
    font-size: 30px;
  }

  .quick-grid {
    grid-template-columns: 1fr;
  }

  .messages {
    padding:
      15px
      12px
      20px;
  }

  .bubble {
    max-width: 88%;
  }

  .composer-wrap {
    padding:
      7px
      10px
      max(
        10px,
        env(safe-area-inset-bottom)
      );
  }

  .composer {
    border-radius: 15px;
  }

  .send-btn {
    min-width: 48px;
    width: 48px;
  }

  .send-text {
    display: none;
  }

  .send-icon {
    display: block;
  }

  .model-label {
    display: none;
  }

  #modelName {
    max-width: 130px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}


/* =========================
   SCROLLBAR
========================= */

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,.12);
  border-radius: 20px;
}
