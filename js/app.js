/**
 * Main Application Initializer & UI Manager
 */
document.addEventListener('DOMContentLoaded', async () => {
  // 1. Initialize DB
  if (window.dbManager) {
    try {
      await window.dbManager.init();
    } catch (e) {
      console.error('Failed to init IndexedDB', e);
    }
  }

  // 2. Setup Theme
  const savedTheme = Storage.getTheme();
  Storage.setTheme(savedTheme);

  // 3. Inject Floating AI Assistant Widget if missing
  injectFloatingAIAssistant();

  // 4. Bind Global Event Listeners
  bindGlobalEvents();

  // 5. Update Navigation Bar according to current role
  updateUserHeaderState();
});

function injectFloatingAIAssistant() {
  if (document.getElementById('ai-assistant-widget')) return;

  const widget = document.createElement('div');
  widget.id = 'ai-assistant-widget';
  widget.className = 'ai-assistant-widget';
  widget.innerHTML = `
    <button id="ai-assistant-btn" class="ai-assistant-fab" title="AI Career Assistant">
      <span class="ai-fab-icon">🤖</span>
      <span class="ai-fab-text">AI Assistant</span>
    </button>
    <div id="ai-chat-modal" class="ai-chat-card hidden">
      <div class="ai-chat-header">
        <div class="ai-chat-title">
          <span>🤖 AI Career Assistant</span>
          <span class="badge badge-accent">Online</span>
        </div>
        <button id="ai-chat-close" class="btn-icon">✕</button>
      </div>
      <div id="ai-chat-messages" class="ai-chat-messages">
        <div class="chat-bubble chat-ai">
          Hello! I am your AI Internship & Career Advisor. Ask me anything like <em>"Find internships for me"</em> or <em>"What skills am I missing?"</em>
        </div>
      </div>
      <div class="ai-chat-input-row">
        <input type="text" id="ai-chat-input" placeholder="Ask AI Career Assistant..." />
        <button id="ai-chat-send" class="btn btn-primary">Send</button>
      </div>
    </div>
  `;
  document.body.appendChild(widget);

  const btn = document.getElementById('ai-assistant-btn');
  const modal = document.getElementById('ai-chat-modal');
  const close = document.getElementById('ai-chat-close');
  const send = document.getElementById('ai-chat-send');
  const input = document.getElementById('ai-chat-input');
  const chatMessages = document.getElementById('ai-chat-messages');

  btn.addEventListener('click', () => modal.classList.toggle('hidden'));
  close.addEventListener('click', () => modal.classList.add('hidden'));

  const handleSend = async () => {
    const text = input.value.trim();
    if (!text) return;

    // Append User Message
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble chat-user';
    userBubble.textContent = text;
    chatMessages.appendChild(userBubble);
    input.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Fetch AI Reply
    const reply = await window.aiService.askAssistant(text, { role: 'student' });
    const aiBubble = document.createElement('div');
    aiBubble.className = 'chat-bubble chat-ai';
    aiBubble.innerHTML = reply.replace(/\n/g, '<br>');
    chatMessages.appendChild(aiBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  send.addEventListener('click', handleSend);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });
}

function bindGlobalEvents() {
  // Theme Toggle Buttons
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = Storage.getTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      Storage.setTheme(next);
      Utils.showToast(`Switched to ${next.toUpperCase()} theme`, 'info');
    });
  });

  // Language Switchers
  document.querySelectorAll('.lang-select').forEach(select => {
    select.addEventListener('change', (e) => {
      window.translator.setLanguage(e.target.value);
    });
  });
}

function updateUserHeaderState() {
  const user = window.authController?.getCurrentUser();
  const userNameEl = document.getElementById('user-name-display');
  const userRoleEl = document.getElementById('user-role-display');

  if (userNameEl && user) userNameEl.textContent = user.name;
  if (userRoleEl && user) userRoleEl.textContent = user.role.toUpperCase();
}
