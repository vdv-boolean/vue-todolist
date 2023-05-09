const app = Vue.createApp({
	data() {
		return {
            // Initial value of html input text
            newTask:'',  
            // Array
            taskArray: [
                {
                    text:'Fare l\'esercizio',
                    done: false,
                },
                {
                    text:'lavare i piatti',
                    done:false,
                },
                {
                    text:'fare la spesa',
                    done:false,
                },
            ]    
		}        
	},
    methods: {
        // Add Task to array
        addTask(){
        this.taskArray.push({
                text: this.newTask,
                done:false,
            });
            this.newTask='';
        }
    }
});

app.mount('#app');
