let PlanComponent = {
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
}

let PlanPickerComponent = {
    components: {plan: PlanComponent},
    template: '#plan-picker-template',
    data(){
        return {
            plans: ['The single', 'The curious', 'The Addict']
        }
    },
    props:{

    }
}

const config = {
    components: {'plan-picker': PlanPickerComponent},
    data(){
        return {
            titleLessonName:'Components fundamental!',
        }
    },
};

var vComponents = Vue.createApp(config)
    .mount('#components');