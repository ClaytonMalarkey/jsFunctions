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

function testFunction () {
    console.log("a generic greeting");
}
testFunction();

function takeUserName (username) {
    console.log("your username is " + username)
}

takeUserName("Clateman");

function takeUserInLoop(users, search_user){
    counter = 0;
    while(counter < users.length){
        if(users[counter].includes(search_user)){
            console.log("the user " + users[counter] + " was a admin");
        }else {
            console.log("user " + users[counter] + " was not a admin");
        }
        counter ++;
    }
} 

let UserArray = ["admin 1", " regular user 2", " an admin aslo", "test user", "test admin", "test user 2"];

takeUserInLoop(UserArray, "admin");
