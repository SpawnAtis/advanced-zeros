module.exports = function getZerosCount(number, base) {
    let factorsOfBase = [];

    let i = 2;
    let amount;
    while(base !== 1) {
        if (!(base % i)) {
            amount = 0;
            while (!(base % i)) {
                amount++;
                base /= i;
            }
            factorsOfBase[i] = amount;
        }
        i++;
    }

    return Math.min(...Object.keys(factorsOfBase)
           .map( (factor) => { return {'degree': maxDegreeOfNumber(factor, number), 'amount' : factorsOfBase[factor]} })
           .map( item => ~~(item['degree'] /= item['amount'])));

};

//the max degree of a prime number divided by numberToFactorial!
const maxDegreeOfNumber = (number, numberToFactorial) =>
{
    let maxDegree = 0;
    while (numberToFactorial) {
        numberToFactorial = ~~(numberToFactorial / number);
        maxDegree += numberToFactorial;
    }
    return maxDegree;
};

