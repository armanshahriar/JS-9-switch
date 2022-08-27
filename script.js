
var vc = prompt("Enter a letter");

vc = vc.toLowerCase()

switch (vc){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel")
        break;
    default:
        console.log("Consonent")
}