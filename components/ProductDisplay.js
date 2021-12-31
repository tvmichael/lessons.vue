app.component('product-display', {
    props:{
        premium: {
            type:Boolean,
            required: true
        }
    }
    template:
        /*html*/
       `<div className="row">
            <div className="col-4">
                <div className="card">
                    <img v-bind:src="image"
                         className="card-img-top"
                         v-bind:alt="product">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
            <div className="col-8">
                <div className="row">
                    <div className="col">
                        <h1>{{title}}</h1>
                        <p v-if="inventory >= 10">In Stock</p>
                        <p v-else-if="inventory < 10 && inventory > 0">
                            Almost sold out!
                        </p>
                        <p v-else>Out of Stock</p>
                        
                    </div>
                    <div className="col-2">
                        <p>Cart: {{cart}}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            <li v-for="detail in details"
                                className="list-group-item">
                                {{detail}}
                            </li>
                        </ul>

                        <br>
                            <ul className="list-group list-group-horizontal">
                                <li v-for="(variant, index) in variants"
                                :key="variant.id"
                                @mouseover="updateVariant(index)"
                                class="list-group-item">
                                {{variant.color}}
                            </li>
                        </ul>

                        <br>
                            <button
                                v-on:click="addToCart"
                            :disabled="inventory <= 0"
                            type="button"
                            class="btn btn-secondary">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>`,
    data: function () {
        return {
            brand: "Clothes",
            product: 'Socks',

            details: ['50% cotton', '30% wool', '20% polyester'],
            selectedVariant: 0,
            variants: [
                {
                    id: 1,
                    color:'black',
                    image: './assets/images/socks-adult-black.jpg',
                    quantity: 0
                },
                {
                    id: 2,
                    color:'white',
                    image: './assets/images/socks-adult-white.jpg',
                    quantity: 20
                },
            ],
            cart: 0
        }
    },
    methods:{
        addToCart() {
            if(this.inventory > 0) {
                this.cart += 1;
            }
        },
        updateVariant(index){
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image(){
            return this.variants[this.selectedVariant].image;
        },
        inventory(){
            return this.variants[this.selectedVariant].quantity;
        }
    }
})