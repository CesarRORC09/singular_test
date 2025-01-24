import {SequencesCalculator} from '../model/SequencesCalculator'


describe('SequenceCalculator',()=>{

    let calculator:SequencesCalculator;

    beforeEach(()=>{
        calculator = new SequencesCalculator();
    })

    /**
     * Test to calculate method
     */

    it('should correctly calculate if number n=1',()=>{
        const calculate = calculator.calculate(1);
        expect(calculate).toBeCloseTo(4)
    })

    it('should correctly calculate if number n=2',()=>{
        const calculate = calculator.calculate(2);
        expect(calculate).toBeCloseTo(3.67)
    })

    it('should correctly calculate if number n=3',()=>{
        const calculate = calculator.calculate(3);
        expect(calculate).toBeCloseTo(3.4)
    })

    it('should correctly calculate if number n=4',()=>{
        const calculate = calculator.calculate(4);
        expect(calculate).toBeCloseTo(2.75)
    })
    it('should correctly calculate if number n=5',()=>{
        const calculate = calculator.calculate(5);
        expect(calculate).toBeCloseTo(2.62)
    })
    it('should correctly calculate if number n=6',()=>{
        const calculate = calculator.calculate(6);
        expect(calculate).toBeCloseTo(1.76)
    })
    it('should correctly calculate if number n=7',()=>{
        const calculate = calculator.calculate(7);
        expect(calculate).toBeCloseTo(1.38)
    })
    it('should correctly calculate if number n=8',()=>{
        const calculate = calculator.calculate(8);
        expect(calculate).toBeCloseTo(0.87)
    })
    it('should correctly calculate if number n=9',()=>{
        const calculate = calculator.calculate(9);
        expect(calculate).toBeCloseTo(0.63)
    })
    it('should correctly calculate if number n=10',()=>{
        const calculate = calculator.calculate(10);
        expect(calculate).toBeCloseTo(0.49)
    })

    /**
     * Test to private fibonacci method
     */

    it('should correctly calculate fibonacci for n=12', () => {
        const fibonacci = calculator['fibonacci']
        expect(fibonacci(12)).toBe(144);
    })

    it('should return 0 for neagtives numbers n=-1', () => {
        const fibonacci = calculator['fibonacci']
        expect(fibonacci(-1)).toBe(0);
    })

    it('should correctly calculate fibonacci for n=12', () => {
        const fibonacci = calculator['fibonacci']
        expect(fibonacci(12)).toBe(144);
    })

    /**
     * Test to private method triangular
     */

    it('should correctly calculate triangular for n=12',()=>{
        const triangular = calculator['triangular']
        expect(triangular(12)).toBe(78) 
    })
    
    /**
     * Test to private method prime
     */
    it('should correctly calculate prime for n=12',()=>{
        const prime = Reflect.apply(calculator['prime'],calculator,[12])
        expect(prime).toBe(37) 
    })

    /**
     * Test to private method isPrime
     */
    it('should return true if all numbers are prime',()=>{
        const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
        const result = primes.every(number=> calculator['isPrime'](number))
        expect(result).toBeTruthy()
    })

    it('should return false if any number are not prime',()=>{
        const primes = [2, 3, 4, 7, 11, 13, 17, 19, 23, 29, 31, 37]
        const result = primes.every(number=> calculator['isPrime'](number))
        expect(result).toBeFalsy()
    })

    it('should correctly calculate if is prime n=38',()=>{
        const isPrime = calculator['isPrime'];
        expect(isPrime(38)).toBeFalsy()
    })

    it('should correctly calculate if is prime n=-1',()=>{
        const isPrime = calculator['isPrime'];
        expect(isPrime(-1)).toBeFalsy()
    })

    it('should correctly calculate if is prime n=37',()=>{
        const isPrime = calculator['isPrime'];
        expect(isPrime(37)).toBeTruthy()
    })


});