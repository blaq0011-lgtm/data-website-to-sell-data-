// Data & State Management for SmartNet
const smartData = {
    // WALLET BALANCE
    getBalance() {
        return parseFloat(localStorage.getItem('walletBalance')) || 0;
    },
    updateBalance(amount) {
        const newBalance = this.getBalance() + amount;
        localStorage.setItem('walletBalance', newBalance.toFixed(2));
        return newBalance;
    },

    // TRANSACTIONS
    getTransactions() {
        return JSON.parse(localStorage.getItem('transactions')) || [];
    },
    addTransaction(description, type, amount, status) {
        const txs = this.getTransactions();
        const newTx = {
            id: 'TX-' + Math.floor(Math.random() * 90000 + 10000),
            description,
            type,
            amount: amount.toFixed(2),
            status,
            date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
        };
        txs.unshift(newTx);
        localStorage.setItem('transactions', JSON.stringify(txs.slice(0, 50))); // Keep last 50
        
        // Also add a notification for the transaction
        this.addNotification(description, `Your transaction of GH₵ ${amount.toFixed(2)} was ${status.toLowerCase()}.`);
        
        return newTx;
    },

    // ORDERS
    getOrders() {
        return JSON.parse(localStorage.getItem('orders')) || [];
    },
    addOrder(bundle, network, price, phone) {
        const orders = this.getOrders();
        const newOrder = {
            id: 'ORD-' + Math.floor(Math.random() * 90000 + 10000),
            bundle,
            network,
            price: price.toFixed(2),
            phone,
            date: new Date().toLocaleString()
        };
        orders.unshift(newOrder);
        localStorage.setItem('orders', JSON.stringify(orders.slice(0, 50)));
        return newOrder;
    },

    // NOTIFICATIONS
    getNotifications() {
        return JSON.parse(localStorage.getItem('notifications')) || [
            { id: 1, title: 'Welcome to SmartNet', content: 'Thanks for choosing us for your data needs!', time: 'Recently', isNew: true }
        ];
    },
    addNotification(title, content) {
        const notifications = this.getNotifications();
        const newNote = {
            id: Date.now(),
            title,
            content,
            time: 'Just now',
            isNew: true
        };
        notifications.unshift(newNote);
        localStorage.setItem('notifications', JSON.stringify(notifications.slice(0, 20)));
    }
};
