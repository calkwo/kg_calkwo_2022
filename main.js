var args = process.argv.slice(2);
var numbers = ["Zero", "One", "Two", "Three", "Four",
               "Five", "Six", "Seven", "Eight", "Nine"];
var output = "";

var first = true;
for (let arg of args){
    if (first){
        first = 0;
    }
    else{
        output+=',';
    }
    for (let num of arg){
        output+=numbers[parseInt(num)];
    }
}
process.stdout.write(output + '\n');