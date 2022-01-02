const config = {
    data(){
        return {
            header: 'Vue id ready!',
            newItem: '',
            items: [
             'one pets',
             'two cats'
            ],
            newItemPriority: '',
            iceCreamFlavors: [],
            editItem: false,
        }
    },
    methods:{
        addNewItem(){
            this.items.push(this.newItem);
            this.newItem = "";
        },
        editItemBtn(value){
            this.editItem = value;
            this.newItem = '';

        }
    }
};

var shoppingList = Vue.createApp(config).mount('#shopping-list');