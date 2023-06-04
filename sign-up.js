const signupform = document.getElementById("form")
signupform.addEventListener("submit" ,function(event){
    event.preventDefault();

    const name = document.getElementById("name").value
    const pass = document.getElementById("pass").value
    const email = document.getElementById("email").value
    let user = {
        username : name ,
        password : pass ,
        useremail : email
    }
    localStorage.setItem("user" , JSON.stringify(user));

    
} )
const loginform = document.getElementById("form2")
loginform.addEventListener("submit" ,function(event){
    event.preventDefault();

    const name1 = document.getElementById("name1").value
    const pass1 = document.getElementById("pass1").value
    const email1 = document.getElementById("email1").value
    const storeuser = localStorage.getItem("user")
    const user = JSON.parse(storeuser)
    if(name1 == user.username && pass1 == user.password && email1 == user.useremail){
        alert("Đăng nhập thành công !")
        window.location.href = "../trangchu.html"
    }else{
        alert("Tên đăng nhập hoặc mật khẩu không đúng !")
    }
} )





 let password = document.getElementById("pass")
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye')
        if($(this).hasClass('open')){
            password.type = "password"
        }else{
            password.type = "text"
        }
    })
})
let password1 = document.getElementById("pass1")
$(document).ready(function(){
    $('#eye1').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye')
        if($(this).hasClass('open')){
            password1.type = "password"
        }else{
            password1.type = "text"
        }
    })
})

window.addEventListener("load", function (){
let sign = document.getElementById("sign-btn");
let login = document.getElementById("login-btn")
let baosign = document.getElementById("bao-sign-in")
let baologin = document.getElementById("bao-login")
let bao = document.getElementById("bao")
let posison = 0
let posison2 = 0
let index = 1
login.addEventListener("click", function(){
    didoi(1)
})
sign.addEventListener("click", function(){
    didoi(-1)
})
function didoi(direction){
    // if(direction == 1){
    //     posison = posison - 410
    //     index++
    //     console.log(index , posison);
    //     baosign.style = `transform: translateX(${posison}px)`;
    //     baologin.style = `transform: translateX(${posison}px)`;
    // }else if(direction == -1){
    //     posison = posison + 410
    //     index++
    //     console.log(index , posison);
    //     baosign.style = `transform: translateX(${posison}px)`;
    //     baologin.style = `transform: translateX(${posison}px)`;
    // }
    
        if(direction == 1){
          index++;
          posison = posison - 410 ;
          console.log(index , posison)
          bao.style = `transform: translateX(${posison}px)`;
          
        
        } else  if(direction == -1){
        index--;
        posison = posison + 410 ;
          console.log(index , posison)
          bao.style = `transform: translateX(${posison}px)`;
      
        }
      
   } 
});
