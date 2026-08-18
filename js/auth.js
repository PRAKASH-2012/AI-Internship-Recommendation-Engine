/**
 * Authentication & Role Session Controller
 */
class AuthController {
  constructor() {
    this.currentUser = Storage.getSessionUser() || {
      id: 'usr-student-1',
      role: 'student',
      name: 'Alex Chen',
      email: 'alex.chen@university.edu'
    };
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isLoggedIn() {
    return !!this.currentUser;
  }

  login(user) {
    this.currentUser = user;
    Storage.setSessionUser(user);
    Utils.showToast(`Logged in as ${user.name} (${user.role.toUpperCase()})`, 'success');
  }

  logout() {
    this.currentUser = null;
    Storage.clearSession();
    Utils.showToast('Logged out successfully', 'info');
    window.location.href = 'login.html';
  }

  switchDemoRole(role) {
    let mockUser;
    if (role === 'student') {
      mockUser = { id: 'usr-student-1', role: 'student', name: 'Alex Chen', email: 'alex.chen@university.edu' };
    } else if (role === 'company') {
      mockUser = { id: 'usr-company-1', role: 'company', name: 'TechPulse Labs', email: 'recruiter@techpulse.io' };
    } else if (role === 'admin') {
      mockUser = { id: 'usr-admin-1', role: 'admin', name: 'System Administrator', email: 'admin@ai-internships.gov' };
    }
    this.login(mockUser);
    setTimeout(() => {
      if (role === 'student') window.location.href = 'student-dashboard.html';
      else if (role === 'company') window.location.href = 'company-dashboard.html';
      else if (role === 'admin') window.location.href = 'admin-dashboard.html';
    }, 400);
  }
}

window.authController = new AuthController();
