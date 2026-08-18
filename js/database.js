/**
 * AI Internship Recommendation Engine - Database Layer
 * IndexedDB Wrapper (`AIInternshipDB`) managing 19 object stores with fallback seed data.
 */

class DatabaseManager {
  constructor() {
    this.dbName = 'AIInternshipDB';
    this.version = 1;
    this.db = null;
    this.stores = [
      'users', 'students', 'companies', 'internships', 'skills', 
      'applications', 'recommendations', 'resumes', 'learningResources', 
      'notifications', 'savedInternships', 'interviews', 'assessments', 
      'messages', 'reports', 'auditLogs', 'fraudFlags', 'careerProfiles', 
      'systemSettings'
    ];
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        this.stores.forEach(storeName => {
          if (!db.objectStoreNames.contains(storeName)) {
            if (storeName === 'savedInternships') {
              db.createObjectStore(storeName, { keyPath: ['studentId', 'internshipId'] });
            } else if (storeName === 'recommendations') {
              db.createObjectStore(storeName, { keyPath: ['studentId', 'internshipId'] });
            } else if (storeName === 'systemSettings') {
              db.createObjectStore(storeName, { keyPath: 'key' });
            } else {
              db.createObjectStore(storeName, { keyPath: 'id' });
            }
          }
        });
      };

      request.onsuccess = async (event) => {
        this.db = event.target.result;
        await this.seedInitialData();
        resolve(this);
      };

      request.onerror = (event) => {
        console.error('IndexedDB Error:', event.target.error);
        reject(event.target.error);
      };
    });
  }

  async seedInitialData() {
    if (!window.SEED_DATA) return;
    const users = await this.getAll('users');
    if (users && users.length > 0) return; // DB already populated

    console.log('Seeding initial IndexedDB datasets...');
    for (const [storeName, items] of Object.entries(window.SEED_DATA)) {
      if (this.stores.includes(storeName) && Array.isArray(items)) {
        for (const item of items) {
          await this.put(storeName, item);
        }
      }
    }
  }

  // --- CRUD API ---

  async put(storeName, item) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const req = store.put(item);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async get(storeName, key) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  }

  async getAll(storeName) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }

  async delete(storeName, key) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const req = store.delete(key);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }

  async clearStore(storeName) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const req = store.clear();
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }

  async filter(storeName, predicateFn) {
    const items = await this.getAll(storeName);
    return items.filter(predicateFn);
  }

  async logAudit(action, userId, role, details) {
    const log = {
      id: 'log-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
      timestamp: new Date().toISOString(),
      action,
      userId,
      role,
      details
    };
    await this.put('auditLogs', log);
  }
}

// Global instance initialization
window.dbManager = new DatabaseManager();
