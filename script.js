let tab = document.querySelector(".tab-box").children;
let tabChecker = document.querySelector(".tab-bg");
const content = document.querySelector(".content").children;
tab[0].onclick = () =>{
    tabChecker.style.left = "0";
    tabChecker.style.borderRadius = "5px 0 0 5px";
    content[0].style.width ="100%";
    content[1].style.width = "0";
    
};
tab[1].onclick = () =>{
    tabChecker.style.left = "50%";
    tabChecker.style.borderRadius = "0 5px 5px 0";
    content[1].style.width ="100%";
    content[0].style.width = "0";
};
const profileItems = document.querySelector(".profile-details").children;
const usernameBox = document.querySelector(".Username");
usernameBox.oninput = () => {
    usernameBox.style.color = "green";
};
let homepage = document.querySelector(".homepage");
let settings = document.querySelector(".settings");
settings.style.display = 'none';
function getSettings(){
    homepage.style.display = 'none';
    settings.style.display = 'block';
}
function goHome(){
    settings.style.display = 'none';
    homepage.style.display = 'block';
}
