
const ppInp = document.querySelector(".pp-input");
const ppBtn = document.querySelector(".pp-saver");

    const btn = document.querySelectorAll("button");
    const input = document.querySelectorAll("input");
    const span = document.querySelectorAll("span");
    const img = document.querySelector(".profile-picture").children[0];

    img.ondblclick = () =>{
        ppInp.classList.toggle("hider") ;
        ppBtn.classList.toggle("hider");
    }

    btn[0].onclick = () =>{
        img.src = input[0].value;
    }

    btn[1].onclick = () =>{
        input[1].style.display = "inline";
        input[1].value = span[0].innerHTML;
        span[0].style.display = "none";
        btn[1].style.display = "none";
        btn[2].style.display = "inline";
    }
    
    btn[2].onclick = () =>{
        input[1].style.display = "none";
        span[0].innerHTML = input[1].value;
        span[0].style.display = "inline";
        btn[1].style.display = "inline";
        btn[2].style.display = "none";
    }
    
    btn[3].onclick = () =>{
        input[2].style.display = "inline";
        input[2].value = span[1].innerHTML;
        span[1].style.display = "none";
        btn[3].style.display = "none";
        btn[4].style.display = "inline";
    }
    btn[4].onclick = () =>{
        input[2].style.display = "none";
        span[1].innerHTML = input[2].value;
        span[1].style.display = "inline";
        btn[3].style.display = "inline";
        btn[4].style.display = "none";
    }
    btn[5].onclick = () =>{
        input[3].style.display = "inline";
        input[3].value = span[2].innerHTML;
        span[2].style.display = "none";
        btn[5].style.display = "none";
        btn[6].style.display = "inline";
        
    }
    btn[6].onclick = () =>{
        input[3].style.display = "none";
        span[2].innerHTML = input[3].value;
        span[2].style.display = "inline";
        btn[5].style.display = "inline";
        btn[6].style.display = "none";
    }
    btn[7].onclick = () =>{
        const dp = document.getElementById("dp")
        img.src = "NFT.png";
        dp.src = "NFT.png";
    }
    
    
