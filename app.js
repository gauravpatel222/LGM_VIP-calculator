                let string="";
        let screen=document.querySelector('.screen');
        let buttons=document.querySelectorAll('.btn');
        let clear=document.querySelector('.btn-clear');
       
        let equal=document.querySelector('.btn-equal');
        buttons.forEach(function(button){
                
button.addEventListener('click',function(e){
        if(e.target.innerHTML=="="){
                string=eval(string);
                screen.value=string;
        }
        else if(e.target.innerHTML=='clear'){
                string ="";
                screen.value=string;
        }
       else{
       string =string+e.target.innerHTML;
       
       screen.value=string;}
});
});

