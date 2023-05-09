const app = Vue.createApp({
	data() {
		return {
            newTask:'',           
		}        
	},
     methods: {
        addTask(){
        console.log(this.newTask)
        }
    }
});

app.mount('#app');
