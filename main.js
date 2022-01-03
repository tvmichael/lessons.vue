var vSlots = Vue.createApp({
    data() {
        return {
        }
    }
})
.component('notification-message', {
    template: '#notification-message-template',
    props:{
        type: {
            type: String,
            required: true,
            default: 'info'
        },
        header: {
            type: String
        }
    },
    data() {
        return {
            hidden: false
        }
    },
    methods: {
        hide() {
            this.hidden = true;
        }
    }
})
.mount('#app');