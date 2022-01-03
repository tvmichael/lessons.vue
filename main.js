let PlanPickerItemComponent = {
    template: '#plan-picker-item-template',
    props: {
        name: {
            type:String,
            default: 'Empty!',
            required: true
        },
        price: Number,
        selected: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            count:0,
        }
    },
    methods:{
        select(){
            this.selected = true;
            this.$emit('select', this.name);
        }
    }
}

let PlanPickerComponent = {
    components: {'plan-picker-item': PlanPickerItemComponent},
    template: '#plan-picker-template',
    data(){
        return {
            plans: ['The single', 'The curious', 'The Addict'],
            selectedPlan: null
        }
    },
    props:{

    },
    methods:{
        selectPlan(plan){
            this.selectedPlan = plan;
        }
    }
}

let TextInputComponent = {
    props: {
      id:{
          type: String,
          default: ''
      }
    },
    template: '#text-input-template',
    data(){
        return {
            labelText: 'Input text'
        }
    },
    beforeCreate(){
        console.log('>> 1');
    },
    created(){
        console.log('>> 2');
    },
    beforeMount(e){
        console.log('>> 3');
        console.log(this);
    },
    renderTracked({ key, target, type }) {
        console.log('>> r');
        console.log({ key, target, type });
    }
};

const config = {
    components: {
        'plan-picker': PlanPickerComponent,
        'text-input': TextInputComponent
    },
    data(){
        return {
            titleLessonName:'Components fundamental!',
        }
    },
};

var vComponents = Vue.createApp(config)
    .mount('#components');