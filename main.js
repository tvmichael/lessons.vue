const app = Vue.createApp({
    data: function () {
        return {
            product: 'Socks',
            image: './assets/images/socks-adult-black.jpg',
            inventory: 6,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                    {id: 1, color:'black', image: './assets/images/socks-adult-black.jpg'},
                    {id: 2, color:'white', image: './assets/images/socks-adult-white.jpg'},
                ],
            cart: 0
        }
    },
    methods:{
        addToCart() {
            if(this.inventory > 0) {
                this.cart += 1;
                this.inventory --;
            }
        },
        updateImage(image) {
            this.image = image;
        }
    }
});

const mountedApp = app.mount('#app');
