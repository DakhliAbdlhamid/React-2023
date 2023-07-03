// 1
var hello;
hello = 'world';
console.log(hello);                                   
hello = 'world';                                 


// 2
var needle;
function test(){
    var needle
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();

// 3
var brendan
function print(){
        brendan = 'only okay';
        console.log(brendan);
    }
brendan = 'super cool';

console.log(brendan);

// 4
var food;
eat();
function eat(){
    var food
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken'
console.log(food);

// 5    
mean();
var mean
console.log(food);
    mean = function() {
        var food
        food = "chicken";
        console.log(food);
        food = "fish";
        console.log(food);
    }
console.log(food);

// 6
console.log(genre);
var genre ;
genre = "disco";
rewind();
function rewind() {
    var genre
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo 
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}













