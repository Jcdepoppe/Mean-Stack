
var tigger = {
    character: "Tigger",
    greet: function () { console.log("The wonderful things about Tiggers is that Tiggers are wonderful things!"); }
};
var pooh = {
    character: "Winnie the Pooh",
    greet: function () { console.log("Oh bother"); }
};
tigger.north = pooh;
pooh.south = tigger;

var piglet = {
    character: "Piglet",
    greet: function () { console.log("Oh d-d-d-dear! I wasn't expecting company!"); }
};
piglet.east = tigger.north;
tigger.north.west = piglet;

var bees = {
    character: "Bees",
    greet: function () { console.log("Bzzzz Bzz"); }
};
bees.west = tigger.north;
tigger.north.east = bees;

var robin = {
    character: "Christopher Robin",
    greet: function () { console.log("Silly old bear!"); }
};
pooh.north = robin;
robin.south = pooh;

var owl = {
    character: "Owl",
    greet: function () { console.log("This reminds me of the time when..."); }
};
robin.west = owl;
piglet.north = owl;
owl.east = robin;
owl.south = piglet;

var rabbit = {
    character: "Rabbit",
    greet: function () { console.log("Oh MY"); }
};
bees.north = rabbit;
robin.east = rabbit;
rabbit.south = bees;
rabbit.west = robin;

var gopher = {
    character: "Gopher",
    greet: function () { console.log("Say what's wrong Sonny?"); }
};
rabbit.east = gopher;
gopher.west = rabbit;

var kanga = {
    character: "Kanga",
    greet: function () { console.log("Why hello dear"); }
};
robin.north = kanga;
kanga.south = robin;

var eeyore = {
    character: "Eeyore",
    greet: function () { console.log("Thanks for noticin' me."); }
};
kanga.north = eeyore;
eeyore.south = kanga;

var heff = {
    character: "Heffalumps",
    greet: function () { console.log("That's what I am all right. A heffalump."); }
};
eeyore.east = heff;
heff.west = eeyore;

var player = {
    location: tigger,
    honey: false
}

function pickUp(){
    if(player.location == bees){
        player.honey = true;
        console.log("You picked up some honey");
    }
    else{
        console.log("There is no honey here")
    }
}

function mission(){
    var locations = [tigger, pooh, piglet, robin, owl, rabbit, gopher, kanga, eeyore, heff]
    var num = Math.floor(Math.random() * 10);
    console.log(locations[num].character + " is looking for honey! Can you help?");
    return locations[num];
}

function drop(){
    if(player.honey == true && player.location == mission){
        console.log("You delivered honey to " + mission.character + ". Good job.");
        player.honey = false;
    }
    else{
        if(player.honey == false){
            console.log("You don't have any honey");
        }
        if(player.location != mission){
            console.log("This isn't " + mission.character + "'s house!");
        }
    }
}