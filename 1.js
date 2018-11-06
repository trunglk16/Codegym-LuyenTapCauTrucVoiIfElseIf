var name = prompt("Insert your name");
var pass = prompt("Insert your password");

if (name == "admin"){
    if (pass == "TheMaster") {
        alert("Welcome");
        }else if (!pass){
        alert("Canceled")
        }
        else{
        alert("WrongPassWord")
        }
    }else if (!name){
    alert("Canceled")
} else {
    alert("I don't know you");
}
