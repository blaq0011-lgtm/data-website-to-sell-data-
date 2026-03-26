// Session Management
const auth = {
    check() {
        const user = localStorage.getItem('userData');
        const isLoginPage = window.location.pathname.includes('login.html');
        
        if (!user && !isLoginPage) {
            window.location.href = 'login.html#signup';
        } else if (user && isLoginPage) {
            window.location.href = 'dashboard.html';
        }
    },
    login(name, email) {
        localStorage.setItem('userData', JSON.stringify({ name, email, loginTime: Date.now() }));
    },
    logout() {
        localStorage.removeItem('userData');
        window.location.href = 'login.html';
    },
    getUser() {
        return JSON.parse(localStorage.getItem('userData'));
    }
};

// Auto-check on load
auth.check();
