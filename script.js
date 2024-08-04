function display(button) {
    const textValue = button.value;
    const textbox = document.getElementById("text_box");
    if(textbox.innerText === "0"){
        textbox.innerText = textValue;
        textbox.style.color = "white";
    }else{
        textbox.innerText+=textValue;
        textbox.style.color="white";
    }
}


function calculate(){
    const textbox = document.getElementById("text_box");
    let text=textbox.innerText;
    let len= textbox.innerText.length;

    for(let i=0;i<len;i++){
        let x=parseInt(text.slice(0,i));
        let y=parseInt(text.slice(i+1));
        if(text[i]==="+"){
            let ans=x+y;
            textbox.innerText=ans;
        }else if(text[i]==="-"){
            let ans=x-y;
            textbox.innerText=ans;
        }else if(text[i]==="x"){
            let ans=x*y;
            textbox.innerText=ans;
        }else if(text[i]==="÷"){
            let ans=x/y;
            textbox.innerText=ans;
        }
    }
}

function clearText(){
    const textbox = document.getElementById("text_box");
    textbox.innerText="0";
}


