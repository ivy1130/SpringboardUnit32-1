const {doMathFunction, mean, median, mode} = require('./mathFunctions')

describe("mean function", function () {

    test("get mean", function () {
        const nums = '1,2,3,3,4,5,5'
        const val = mean(nums)
        expect(val).toEqual('3.29')
    })
})


describe("median function", function () {

    test("get median of even length", function () {
        const nums = '1,2,3,3,4,5,5'
        const val = median(nums)
        expect(val).toEqual('3')
    })
    test("get median of odd length", function () {
        const nums = '1,2,3,3,4,5,5,6'
        const val = median(nums)
        expect(val).toEqual('3.5')
    })
})


describe("mode function", function () {

    test("get one mode", function () {
        const nums = '1,2,3,3,4,5,5,6,7,7,7'
        const val = mode(nums)
        expect(val).toEqual(['7'])
    })
    test("get multiple modes", function () {
        const nums = '1,2,3,3,4,5,5,6,7,7'
        const val = mode(nums)
        expect(val).toEqual(['3','5','7'])
    })
})


describe("doMathFunction function", function () {

    test("route to mean function", function () {
        const nums = '1,2,3,4,5'
        const val = doMathFunction('mean', nums)
        expect(val).toEqual('3.00')
    })
    test("route to median function", function () {
        const nums = '1,2,3,4,5'
        const val = doMathFunction('median', nums)
        expect(val).toEqual('3')
    })
    test("route to mode function", function () {
        const nums = '1,2,3,3,4,5'
        const val = doMathFunction('mode', nums)
        expect(val).toEqual(['3'])
    })

})