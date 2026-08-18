/**
 * LocalStorage & Session Cache Helper
 */
const Storage = {
  get(key, defaultValue = null) {
    try {
      const val = localStorage.getItem('ai_internship_' + key);
      return val ? JSON.parse(val) : defaultValue;
    } catch (e) {
      console.error('Storage Get Error:', e);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem('ai_internship_' + key, JSON.stringify(value));
    } catch (e) {
      console.error('Storage Set Error:', e);
    }
  },

  remove(key) {
    localStorage.removeItem('ai_internship_' + key);
  },

  getSessionUser() {
    return this.get('session_user', null);
  },

  setSessionUser(user) {
    this.set('session_user', user);
  },

  clearSession() {
    this.remove('session_user');
  },

  getTheme() {
    return this.get('theme', 'dark');
  },

  setTheme(theme) {
    this.set('theme', theme);
    document.body.setAttribute('data-theme', theme);
  },

  getLanguage() {
    return this.get('language', 'en');
  },

  setLanguage(lang) {
    this.set('language', lang);
  }
};

window.Storage = Storage;
