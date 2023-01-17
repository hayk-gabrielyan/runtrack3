var numbers = [58,99,29,37,5,90,63,72,81,12];
var list = document.getElementById("number-list");
console.log("voici la liste des nombres : ")
console.log(numbers);

function sort(numbers, order) {
    if (order === "asc") {
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        numbers.sort(function(a, b) {
            return b - a;
        });
    }
    console.log(numbers);
}
console.log("voici la même liste dans l'ordre choisi : ")
sort(numbers, "desc");