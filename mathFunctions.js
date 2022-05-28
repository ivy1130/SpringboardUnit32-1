const convertToNumArr = (strNums) => {
    return strNums.split(',').map(Number)
}

const doMathFunction = (mathFunction, nums) => {
    if (mathFunction === 'mean') {
        return mean(nums)
    }
    else if (mathFunction === 'median') {
        return median(nums)
    }
    else if (mathFunction === 'mode') {
        return mode(nums)
    }
}

const mean = (nums) => {
    let numsA = convertToNumArr(nums)
    let avg = numsA.reduce((a, b) => a + b, 0) / numsA.length
    avgDec = (Math.round(avg * 100) / 100).toFixed(2)
    return avgDec
}

const median = (nums) => {
    let numsA = convertToNumArr(nums)
    const sorted = numsA.sort((a, b) => a - b)
    const middle = Math.floor(sorted.length / 2)

    if (sorted.length % 2 === 0) {
        return ((sorted[middle - 1] + sorted[middle]) / 2).toString()
    }
    return sorted[middle].toString()
}

const mode = (nums) => {
    let numsA = convertToNumArr(nums)
    const numCount = {}
    let max = 0
  
    for (let num of numsA) {
        if(numCount[num]) {
            numCount[num]++
        } else {
            numCount[num] = 1
        }
        
        if(max < numCount[num]) {
            max = numCount[num]
        }
    }

    let mode = Object.keys(numCount).filter((num) => {
        return numCount[num] === max
    })

    return mode
  }

module.exports = {convertToNumArr, doMathFunction, mean, median, mode}