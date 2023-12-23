//create a Vue application
//const app = Vue.createApp({})

const app = Vue.createApp({
    components:{
        'button-counter2':{
            data(){
                return{
                    count:0
                };
            },
            template:`
            <button v-on:click="count++">
            count{{ count }}
            </button>`
        }
    }
});

//Define a new global component called button-counter

app.component('button-counter1', {
    data(){
        return{
            count:0
        }
    },
    template:`
    <button v-on:click="count++">
    count{{count}}
    </button>`
})

/*
const app = Vue.createApp({
    components:{
        'button-counter1':{
            data(){
                return{
                    count:0
                };
            },
            template:`
            <button v-on:click="count++">
            count{{ count }}
            </button>`
        }
    }
});
*/
app.mount('#components-demo');
app.mount('#components-demo2');