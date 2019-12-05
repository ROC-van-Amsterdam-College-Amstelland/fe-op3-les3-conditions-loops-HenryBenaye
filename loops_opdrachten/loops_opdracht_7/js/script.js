//javascript code

for(teller= 1; teller <= 100; teller++ ){
    console.log(teller);
    
    
    if(teller % 3 == 0){
        document.getElementById("resultaat").innerHTML += "<strong>VET</strong><br>";
        console.log(teller);
    }
        else{
            document.getElementById("resultaat").innerHTML +=  teller + "<br>"; 
    }
    if(teller % 5 == 0){
        document.getElementById("resultaat").innerHTML += "<strong>COOL</strong><br>";
        console.log(teller);
    }
    else{
        document.getElementById("resultaat").innerHTML +=  teller + "<br>"; 
    }
    
}