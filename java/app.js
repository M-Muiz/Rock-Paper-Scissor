const arr = ["Rock", "Paper", "Scissor"];
let animation = document.querySelector(".container");
let result = document.querySelector(".result");
let userImage = document.getElementById("userImage");
let cpuImage = document.getElementById("cpuImage");
let userScore = document.getElementById("u-Score");
let cpuScore = document.getElementById("c-Score");
let userNum = 0;
let cpuNum = 0;

const userClick = (val)=>{
    animation.classList.add("start")
    result.innerHTML= "Wait ..."
    let userVal = val.childNodes[3].innerHTML;
    let randomNum = Math.floor(Math.random() * arr.length);
    let cpuVal = arr[randomNum]
    // console.log((userVal), (cpuVal));
    if(userVal == "Rock" && cpuVal == "Rock"){
        setTimeout(()=>{   
            userImage.src = "../css/images/large-rock.png"   
            cpuImage.src = "../css/images/large-rock.png"   
    result.innerHTML = "Draw !"
    animation.classList.remove("start")
},2000)
    }
    else if(userVal == "Rock" && cpuVal == "Paper"){
        setTimeout(()=>{
      cpuImage.src = "../css/images/large-paper.png"      
      userImage.src = "../css/images/large-rock.png"      
    result.innerHTML = "Cpu Win!"
    animation.classList.remove("start")
    cpuNum ++;
},2000)
    }
    else if(userVal == "Rock" && cpuVal == "Scissor"){
        setTimeout(()=>{
            cpuImage.src = "../css/images/large-scissor.png"     
    result.innerHTML = "Cpu Win !"
    animation.classList.remove("start")
    cpuNum ++;
},2000)
    }
    else if(userVal == "Paper" && cpuVal == "Rock"){
        setTimeout(()=>{
            userImage.src = "../css/images/large-paper.png"      
    cpuImage.src = "../css/images/large-rock.png"      
    result.innerHTML = "User Win !"
    animation.classList.remove("start")
    userNum ++;
},2000)
    }
    else if(userVal == "Paper" && cpuVal == "Paper"){
        setTimeout(()=>{
            userImage.src = "../css/images/large-paper.png"     
      cpuImage.src = "../css/images/large-paper.png"      
    result.innerHTML = "Draw !"
    animation.classList.remove("start")
},2000)
    }
    else if(userVal == "Paper" && cpuVal == "Scissor"){
        setTimeout(()=>{
            userImage.src = "../css/images/large-paper.png" 
            cpuImage.src = "../css/images/large-scissor.png"      
    result.innerHTML = "Cpu Win !"
    animation.classList.remove("start")
    cpuNum ++;
},2000)
}
    else if(userVal == "Scissor" && cpuVal == "Scissor"){
        setTimeout(()=>{
            userImage.src = "../css/images/large-scissor.png"      
            cpuImage.src = "../css/images/large-scissor.png"      
    result.innerHTML = "Draw !"
    animation.classList.remove("start")
},2000)
}
    else if(userVal == "Scissor" && cpuVal == "Paper"){
        setTimeout(()=>{
            userImage.src = "../css/images/large-scissor.png" 
            cpuImage.src = "../css/images/large-scissor.png"      
    result.innerHTML = "User Win !"
    animation.classList.remove("start")
    userNum ++;
},2000)
}
    else if(userVal == "Scissor" && cpuVal == "Rock"){
        setTimeout(()=>{
            userImage.src = "../css/images/large-scissor.png" 
            cpuImage.src = "../css/images/large-rock.png"      
    result.innerHTML = "User Win !"
    animation.classList.remove("start")
    userNum ++;
},2000)
}else{
        console.log("else")
        animation.classList.remove("start")
    }
setTimeout(()=>{
    // console.log(cpuNum, userNum)
    cpuScore.innerHTML = cpuNum;
    userScore.innerHTML = userNum;
}, 2500)
    
}