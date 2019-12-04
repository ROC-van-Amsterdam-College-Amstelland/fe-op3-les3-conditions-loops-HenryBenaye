//javascript code

for(teller = 1; teller <= 5; teller++){
    console.log(teller);
    document.getElementById("resultaat").innerHTML += teller + "<br>"

    if(teller == 5){
        console.log("Het einde is bereikt!")
        document.getElementById("tekst").innerHTML = "Het einde is bereikt!";

    }
    
}

for(teller2 = 5; teller2 >= 1; teller2--){
    console.log(teller2);
    document.getElementById("getallen2").innerHTML += teller2 + "<br>"

    if(teller2 == 1){
        console.log("Het begin is het begin!")
        document.getElementById("tekst2").innerHTML = "Het begin is het begin";

    }

}