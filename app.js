new Vue({
    el: '#vue-app',
    data: {
        name: 'Collins',
        job: 'Software Developer'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + " " + this.name;
        }
    }
});
new Vue({
    el: '#names',
    data: {
        name:'Evans',
        career:'Network Adminitrator',
        website:'www.facebook.com'
    },
    methods:{
        greet: function(time) {
            return 'Good '+time+' '+this.name;
            return 'Hello'+this.name;
        }
    }
});
