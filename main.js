var args = process.argv.slice(2);
var numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
//console.log(args);

var first = true;
for (let arg of args){
    var output = ",";
    if (first){
        output = "";
        first = 0;
    }
    for (let num of arg){
        output+=numbers[parseInt(num)];
    }
    process.stdout.write(output);
}
process.stdout.write("\n");