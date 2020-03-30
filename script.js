let arr = ["rock.png","paper.png","scessors.png"];
let won = "You won!";
let lost = "You lost!";
let equal = "You equal!";
rock.onclick = function () {
    let n = Math.round(Math.random()*2);
    partimg.setAttribute("src",arr[n]);
    if (arr[n] === "rock.png"){
        message.innerHTML = equal;
    } else  if(arr[n] === "paper.png"){
        message.innerHTML = lost;
        partner.innerHTML = +partner.innerHTML+1
    } else{
        message.innerHTML = won;
        you.innerHTML = +you.innerHTML+1
    }
};
paper.onclick = function () {
    let n = Math.round(Math.random()*2);
    partimg.setAttribute("src",arr[n]);
    if (arr[n] === "paper.png"){
        message.innerHTML = equal;
    } else  if(arr[n] === "scessors.png"){
        message.innerHTML = lost;
        partner.innerHTML = +partner.innerHTML+1
    } else{
        message.innerHTML = won;
        you.innerHTML = +you.innerHTML+1
    }
};
scissors.onclick = function () {
    let n = Math.round(Math.random()*2);
    partimg.setAttribute("src",arr[n]);
    if (arr[n] === "scessors.png"){
        message.innerHTML = equal;
    } else  if(arr[n] === "rock.png"){
        message.innerHTML = lost;
        partner.innerHTML = +partner.innerHTML+1
    } else{
        message.innerHTML = won;
        you.innerHTML = +you.innerHTML+1
    }
};