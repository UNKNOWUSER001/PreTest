

const numbers = [1, 2, 3, 4, 5, 6];
const targetSum = 7;
const result = findNumberPairs(numbers, targetSum);



function findNumberPairs(numbers, targetSum) {
    const pairs = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === targetSum) {
                pairs.push([numbers[i], numbers[j]]);
            }
        }
    }

    return pairs;
}



console.log(result)
