console.log("this is registration page");


const registrationform = document.getElementById("registrationform");

console.log(registrationform);
function getSelected(selecet) {
let selectedvalues =[]
for(OptionIndex in selecet) {
    if ( select.options[OptionIndex].selected) {
        selectedvalues.push(select.options[OptionIndex].value);
  }
}
 return selectedvalues;
}

registrationform.onsubmit = function (event) {
    event.preventDefault();
    console.log("i am triggered when submit is preessed");
    let name = document.getElementById("name").value;
    let intrest = getSelected(document.getElementById("interest"));
    let dob = document.getElementById("dob").value;
    let darkMode = document.getElementById("darkMode").checked;
    const data ={
       name: name,
       interest: interests,
       dob: dob,
        darkmode :darkMode,
    };
    console.log(data);
    localStorage.setItem("usersInfo", JSON.stringify(data));
};
