const app = Vue.createApp({
    data: function () {
        return {
            product: 'Socks',
            image: './assets/images/socks-adult-black.jpg',
            inventory: 8
        }
    }
});

const mountedApp = app.mount('#app');
