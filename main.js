var app = new Vue ({
  el: "#root",
  data : {
  mail : [],
  //email:false

  },
  mounted() {
    var self = this
    for (var i = 0; i < 10; i++)  {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then(function(risposta){
        self.mail.push(risposta.data.response);
      });

    }

     }







});
