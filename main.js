const app = Vue.createApp({
    data: function () {
        return {
            product: 'Socks',
            image: './assets/images/socks-adult-black.jpg',
            inventory: 8,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                    {id: 1, color:'black'},
                    {id: 2, color:'white'},
                ]
        }
    }
});

const mountedApp = app.mount('#app');
