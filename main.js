const config = {
    data(){
        return {
            titleLessonName:'Components fundamental!',
            plans: ['The single', 'The curious', 'The Addict']
        }
    }
};

var vComponents = Vue.createApp(config)
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