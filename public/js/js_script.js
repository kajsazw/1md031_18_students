function BurgerInfo(id, nm, igr, urlHTML, gltn, lct) {
  this.burgerID = id;
  this.burgerName = nm;
  this.ingridients = igr;
  this.bild = urlHTML;
  this.gluten = gltn;
  this.lactose = lct;
  this.info = function() {
    return this.burguerID + this.burgerName + ': ' + this.ingridients + " " + this.gluten + '' + this.lactose + this.bild;
  };

}

//-----------KOD TILL KNAPPEN FÖR JS------------------
//var orderButton =document.getElementById("ButtonID");
//orderButton.addEventListener("click", clickMessage);
//function clickMessage(){
//  console.log("Button clicked!");
// }
//-----------------------------------------------------

function getBurgerArray() {
  var burgerArray = [];

var burgerBox = document.getElementsByName('burgerBox');

for (var i=0, length=burgers.length; i<length; i++){
  if (burgerBox[i].checked) {
    burgerArray.push(' '+ burgerBox[i].value);
  }
}
return burgerArray;

};



function getContactInfo() {

  var contactInfoArray = [];


  var fullname = document.getElementById('fullname');
  var email = document.getElementById('email');
  var payment = document.getElementById('payment');
  var gender = document.getElementsByName('gender');

  contactInfoArray.push(' ' + fullname.value);
  contactInfoArray.push(' ' +email.value);
  contactInfoArray.push(' ' +payment.value);

  for (var i = 0, length = gender.length; i < length; i++) {
    if (gender[i].checked) {
      contactInfoArray.push((gender[i].value));
    };
  };

    return contactInfoArray;
};
