var totalprice;
 function calculatePrice() {
    var ageInput = document.getElementById('age').value;
    
  
    // pricing logic based on age 
    if (ageInput >= 0 && ageInput <=3) {
        totalprice = 0; // free for ages of 0-3
    } else if (ageInput >= 4 && ageInput <=12) {
        totalprice = 100; // R100 each for ages of 4-12
    }  else  if (ageInput >=13 && ageInput <=18){
        totalprice = 150; // R150 each for ages  of 13-18
    }else if (ageInput >=19 && ageInput <=60) {
        totalprice = 200; // R200 each for ages of 19-60
    } else {
       totalprice = 0; // free for people over the age of 65 (age >65)
    };
    
      document.getElementById('price').innerHTML= "total price :R" + totalprice;
      document.getElementById('zee').style.display = 'block';


    };
      




