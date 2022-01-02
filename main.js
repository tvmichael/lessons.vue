const config = {
    data(){
        return {
            titleLessonName:'Components fundamental!'
        }
    }
};

var vComponents = Vue.createApp(config)
    .component('click-counter', {
        template: '#template-counter',
        data(){
            return{
                count:0
            }
        }
    })
    .mount('#components');