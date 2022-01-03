var vSlots = Vue.createApp({
    data() {
        return {
            usernames: ['tvmichael', 'AndriiTorchuk', 'ror6ax']
        }
    }
})
.component('github-user-card', {
    template: '#github-user-card-template',
    props:{
        username: {
            type: String,
            required: true,
            default: ''
        }
    },
    data() {
        return {
            user: {},
            gitApiUrl: 'https://api.github.com/users/',
        }
    },
    async created(){
        let response = await axios.get(this.gitApiUrl + this.username);
        this.user = response.data;
    }
})
.mount('#app');