const config = {
    data(){
        return {
            titleLessonName:'Components fundamental!'
        }
    }
};

var vComponents = Vue.createApp(config)
    .component('click-counter', {
        template: `<button @click="count++">{{count}}</button>`,
        data(){
            return{
                count:0
            }
        }
    })
    .mount('#components');