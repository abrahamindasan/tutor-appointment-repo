const joinBtn = document.getElementsByClassName('join-btn');
const xBtn = document.getElementsByClassName('x-btn')[0];
const login = document.getElementsByClassName('log-in')[0];


for (i = 0; i < joinBtn.length; i++){
    joinBtn[i].addEventListener('click', function (){
        formLogin.style.display = "block";
    });
}

login.addEventListener('click', function(){
    formLogin.style.display = "block";
})



xBtn.addEventListener('click', function(){
    login.scrollIntoView();
    console.log(login);
    formLogin.style.display = "none";
});
