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
    let avg = nums.reduce((a, b) => a + b, 0) / nums.length
    return avg
}

const median = (nums) => {
    const sorted = nums.sort((a, b) => a - b)
    const middle = Math.floor(sorted.length / 2)

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2
    }
    return sorted[middle]
}

const mode = (nums) => {
    const numCount = {}
    let max = 0
  
    for (let num of nums) {
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

module.exports = {doMathFunction}