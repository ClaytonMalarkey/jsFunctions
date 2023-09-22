let userNames = ["bob winner", "BOB loser", "winner bob", "LOSER bob", "born a WINNER"];

let count = 0;

let userNamesLowerCase = [];

while (count < userNames.length){
    console.log("user at position " + count + " of the username " + userNames[count]);
    userNamesLowerCase.push(userNames[count].toLowerCase());
    if(userNamesLowerCase[count].includes("winner")){
        console.log("user " + userNames[count] + " was a winner")
    }else{}

    count ++;
}