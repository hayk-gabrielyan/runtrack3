function sommeNombresPremiers() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;

  // Function to check if a number is prime or not
  function isPrime(num) {
      if (num <= 1) {
          return false;
      }
      for (var i = 2; i < num; i++) {
          if (num % i == 0) {
              return false;
          }
      }
      return true;
  }

  if (isPrime(a) && isPrime(b)) {
      var result = parseInt(a) + parseInt(b);
      console.log("La somme des nombres premiers " + a + " et " + b + " est : " + result);
  } else {
      console.log(false);
  }
}