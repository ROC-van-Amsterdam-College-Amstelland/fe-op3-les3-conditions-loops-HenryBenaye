//javascript code

for(teller=1; teller <= 20; teller++){
    document.getElementById("resultaat").innerHTML += teller;
    // console.log(teller);


    // console.log(teller%2);
    if(teller % 2 == 0){
        console.log(teller+" is een even getal");
    }else{
        console.log(teller+" is een oneven getal");

    }

}
