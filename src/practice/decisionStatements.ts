if (true) console.log("check 1")
if (false) {
    console.log("This should not print")
}

if (false) {
    console.log("This should not print")
}else {
    console.log("Check 2")
}
if (false) {
    console.log("This should not print")
} else if(false) {
    console.log("This should not print")
} else if(true){
    console.log("check 3")
}
let bacon = "Pig"
switch (bacon){
    case "dog":
    console.log("This isn't a pig")
     break;
    case "Bird": 
    console.log("This is not a pig")
    break; 
    case "Pig": 
    console.log("Oink")
    break
}