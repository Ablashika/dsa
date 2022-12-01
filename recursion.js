let counter = 0;

function inception() {

  if ( counter > 4) {
    return "done!"

  }

  counter++
  return inception();ß
}

console.log(inception())


//finding factorial using recursive


function factorial(number){

    //base

    if (number === 2) {
        return 2
    }
   
    return number * factorial( number - 1)


}
console.log(factorial(5))
//fibonacci recursive // O(2^n)


function fibonacci(n) {


  if (n < 2){
    return n;
  }

  return fibonacci(n-1) + fibonacci(n-2)

}


console.log(fibonacci(7)
)


//finobucci iterative O(n)

function fiboIterative

(n) {

  let array = [0,1]

  for(let i = 2; i  < n + 1; i++ ){
    array.push(array[i-2] + array[i-1])
  }

  return array[n]

}


console.log(fiboIterative(3))


//writing traversals using loops