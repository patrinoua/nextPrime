function nextPrime(n){
  let numbersToShieve = []
  for (let i=2; i <= n ; i++){
    numbersToShieve.push(i)
  }
  let arrayOfPrimes = []
  let reducedArray = numbersToShieve
  let arrayIndex=0;
  for (let j=2 ; j<=n ; j++){
    if(reducedArray.includes(j)){
      reducedArray = numbersToShieve.filter(number=>{
        if(number==j){
          return number
        }
        else if(number!=j){
          return number%j!=0
        }else{
          return false
        }
      })
    arrayOfPrimes.push(reducedArray[arrayIndex])
    arrayIndex++
    numbersToShieve = reducedArray
    }
  }
  var lengthOfPrimesArray = arrayOfPrimes.length
  for (let k=n+1 ; arrayOfPrimes.length <= lengthOfPrimesArray+1 ; k++){
    var newPrimeArray = arrayOfPrimes.filter(prime=> k%prime!=0 )
    if(newPrimeArray.length == arrayOfPrimes.length){
      // console.log('we have a new prime!', k);
      arrayOfPrimes.push(k)
      break
    }
  }
  return arrayOfPrimes[arrayOfPrimes.length-1]
}

const nextOne = nextPrime(2000)

console.log('The next prime number is', nextOne);
