const checkAge = () => {
  let ageInput = parseInt(document.querySelector('#oldness').value)
  const entryGranted =  document.querySelector("#entry");

   if(ageInput >= 18 && ageInput <= 90) {
    entryGranted.innerHTML = "You May Enter";
   } else if(ageInput >= 13 && ageInput < 17) {
     entryGranted.innerHTML = "You Shall Not Pass!"
   } else {
     entryGranted.innerHTML = "Shouldn't you be in bed by now?"
   }
 }

  document.getElementById('knock').addEventListener('click', checkAge);
