export function sumFun(numbers) {
    const arrSum = numbers.reduce((acc, num) => acc + num, 0)
    return arrSum;
}