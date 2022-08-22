document.addEventListener("DOMContentLoaded", function(){
    
    login = JSON.parse(localStorage.getItem(('login')))
    
  login ? document.getElementById("username").innerHTML = login.username : this.location.href = ('/login.html')
    

    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
   document.getElementById('log-out').addEventListener("click", function(){
        localStorage.removeItem('login')
        location.reload()
    });

     });