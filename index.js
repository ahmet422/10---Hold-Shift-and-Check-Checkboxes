const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes);
let lastchecked;

function handleCheck(e){
  console.log(e.shiftKey);
  let inBetween = false;

  if(e.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastchecked){
        inBetween = !inBetween;
        // console.log('starting or ending');
      }

      if(inBetween){
        checkbox.checked = true;
      }
      });
  }
  lastchecked = this;
}

checkboxes.forEach(checkboxe => checkboxe.addEventListener('click', handleCheck));