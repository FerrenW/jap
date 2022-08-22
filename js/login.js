function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    let login = {google:true,login:true, username:`${profile.getName()}`, imagen:`${profile.getImageUrl()}`}
    localStorage.setItem('login', JSON.stringify(login))
  }
  

function login(username,password){
    let avisar = document.getElementById("user-warn")

    username != "" && !password == "" ? (avisar.hidden = true, window.location.href = ('/index.html')) : (avisar.innerHTML=("Ingrese su usuario"),
    avisar.hidden = false); 
       
    if (username != "" && password ==""){
        avisar.innerHTML=("Ingrese su contraseña");
        avisar.hidden = false;
    };
    
    let login = {login:true, username:`${username}`}
    localStorage.setItem('login', JSON.stringify(login))
      
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("login-button").addEventListener('click', () => {
      let username = document.getElementById('user-username').value;
      let password = document.getElementById('user-password').value;
    login(username,password);
    })

})