function alertfn(){
    alert("On clicking Alert box such message containing box is displayed!!!");
}
function promptfn(){
    let input=prompt("In Prompt box You can give some input :");
    if(input!==null && input.trim()!==""){
        alert("Your given input is stored successfully!!");

    }
    else{
        alert("You didn't enter anything");
    }
}
function confirmfn(){
    let confirmation=confirm(" Confirm Box is used for Confirmation, Understood ?");
    if(confirmation){
        alert("Yeah , You understood ");
    }
    else{
        alert(" You haven't understood ");
    }
}