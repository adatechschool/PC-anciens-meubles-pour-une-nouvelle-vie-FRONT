<template>
  <div>
    <!--<p>Page de Connexion</p>-->
    <div class="content">
      <div class="form1">
        <h2>Login Here</h2>
        <!--<input type="name" name="" placeholder="Enter Name Here" />-->
        <input
          type="mail"
          name="mail"
          v-model="mail"
          placeholder="Enter Email Here"
        />
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="Enter Password Here"
        />
        <button class="btnn" type="button" v-on:click="login()">Login</button>

        <p class="liw">Pas de compte? Inscrivez-vous.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mail: "",
      password: ""
    };
  },
  methods: {
    async login() {
    //console.warn(this.mail, this.password)
      const { mail, password } = this;
      const res = await fetch(
        "http://localhost:3001/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ mail, password })
        }
      );
      const data = await res.json();
      console.log(data);
    }
  }
};
</script>

<style>


.btn{
    width: 100px;
    height: 40px;
    background: #769f5b;
    /*border: 2px solid #ff7200;*/
    margin-top: 13px;
    color: #fff;
    font-size: 15px;
    border-bottom-right-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: 0.2s ease;
    cursor: pointer;
}
.btn:hover{
    color: #000;
}

.btn:focus{
    outline: none;
}

.srch:focus{
    outline: none;
}

.content{
    width: 1200px;
    margin: auto;
    color: rgb(13, 13, 13);
    position: relative;
}

.content .par{
    padding-left: 20px;
    padding-bottom: 25px;
    font-family: Arial;
    letter-spacing: 1.2px;
    line-height: 30px;
}

.content h1{
    font-family: 'Times New Roman';
    font-size: 50px;
    padding-left: 20px;
    margin-top: 9%;
    letter-spacing: 2px;
}

.form1{
    width: 285px;
    height: 370px;
    background: linear-gradient(to top, rgba(240, 235, 235, 0.84)50%,rgba(240, 235, 235, 0.84)50%);
    position: absolute;
    top: 100px;
    left: 450px;
    transform: translate(0%,-5%);
    border-radius: 10px;
    padding: 25px;
}

.form1 h2{
    width: 220px;
    font-family: sans-serif;
    text-align: center;
    color: #769f5b;
    font-size: 22px;
    background-color: #fff;
    border-radius: 10px;
    margin: 2px;
    padding: 8px;
}

.form1 input{
    width: 227px;
    height: 35px;
    background: transparent;
    border-bottom: 1px solid #769f5b;
    border-top: none;
    border-right: none;
    border-left: none;
    color: #fff;
    font-size: 15px;
    letter-spacing: 1px;
    margin-top: 30px;
    font-family: sans-serif;
}

.form1 input:focus{
    outline: none;
}

::placeholder{
    color: rgb(135, 135, 135);
    font-family: Arial;
}

.btnn{
    width: 240px;
    height: 40px;
    background: #769f5b;
    border: none;
    margin-top: 30px;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
    transition: 0.4s ease;
}
.btnn:hover{
    background: #fff;
    color: #769f5b;
}
.btnn a{
    text-decoration: none;
    color: #000;
    font-weight: bold;
}
.form1 .link{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
    padding-top: 20px;
    text-align: center;
}
.form1 .link a{
    text-decoration: none;
    color: #769f5b;
}
.liw{
    padding-top: 15px;
    padding-bottom: 10px;
    text-align: center;
}




</style>