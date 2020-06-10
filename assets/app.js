
var app = new Vue({
  el: '#app',
  data: {
    name: 'Hello Vue!',
    age: 25,
    job: 'TMSS',
    website: 'https://vuejs.org/v2/guide/',
    message: 'This Is Reverse Message',
    available:false,
    nearby :false
  },

  methods: {
  	details:function(name){
  		return 'Hello!'+name;
  	},

  	add:function(inc){
  		this.age+= inc;
  	},

  	substract:function(dec){
  		this.age-= dec;
  	},

  	reverse:function(){
  		this.message = this.message.split('').reverse().join('');
  	},

  	warn: function (message, event) {
	    alert(message)
	}
  },
  computed: {
  	changeClass:function(){
		return {
			available:this.available,
			nearby :this.nearby
		}
	}
  }
})