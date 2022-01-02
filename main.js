const config = {
    data(){
        return {
            titleLessonName:'Components fundamental!',
        }
    },
};

var vComponents = Vue.createApp(config)
    .component('plan-picker', {
        template: '#plan-picker-template',
        data(){
            return {
                plans: ['The single', 'The curious', 'The Addict']
            }
        },
        props:{

        }
    })
    .component('plan-template', {
        template: '#plan-template',
        props: {
            name: {
                type:String,
                default: 'Empty!',
                required: true
            },
            price: Number,
        },
        data(){
            return{
                count:0
            }
        }
    })
    .mount('#components');