let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('button text is',buttonText);
       
        if(buttonText =='C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText =='='){
            screen.value = eval(screen.value);
        }
        else if(buttonText=='<-')
        {
            number=screen.value;
            newlen=number.length-1;
            newnum=number.substring(0,newlen);
            screen.value=newnum;
        }
        else{
            screen.value+=e.target.innerText;
        }
    })
}