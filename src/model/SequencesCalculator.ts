export class SequencesCalculator {

    private  fibonacci (n:number) {
        if(n < 1 ) return 0

        let num1 = 0;
        let num2 = 1;
        let temp = 0
    
        while (n > 0){
            temp = num2;
            num2 += num1;
            num1 = temp;
    
            n --;
        }
        return num1
    }

    private triangular (n:number) {
        return n*(n+1) / 2
    }


    private isPrime  = (value:number) => {
         if(value< 2) return false;

        for(let i = 2 ; i < value ; i++){
            if(value % i === 0) return false
        }
    
        return  true
    } 

    private prime (n:number) {
        let primes = [2];
        for(let i = 3 ; primes.length < n ; i++){
            if(this.isPrime(i)) {
                primes.push(i);
            }
        }
        return primes[primes.length-1];
    }

    public calculate (n:number) {
        return (4*this.prime(n) - this.triangular(n-1)) / this.fibonacci(n+2)
    }

}