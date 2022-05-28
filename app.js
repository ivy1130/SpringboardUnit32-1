const express = require('express');
const ExpressError = require('./expressError')
const {convertToNumArr, doMathFunction} = require('./mathFunctions')

const app = express();

app.get('/:mathFunction', function(req, res, next) {
    
    try {
        if (!req.query.nums) {
            throw new ExpressError('Nums are required', 400)
        }
        else if (req.query.nums.match(/^[0123456789,]*$/) === null) {
            throw new ExpressError('Make sure all inputs are numbers', 400)
        }
        else {
            const mathFunction = req.params.mathFunction
            const nums = req.query.nums
            const val = doMathFunction(mathFunction, nums)
            return res.json({
            operation: mathFunction,
            value: val
        })
        }
    }
    catch (e) {
        next(e)
    }
})

// If no other route matches, respond with a 404
app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404)
    next(e)
  })
  
  
// Error handler
app.use(function (err, req, res, next) { //Note the 4 parameters!
// the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.msg;
  
    // set the status and alert the user
    return res.status(status).json({
    error: { message, status }
    });
})
  
app.listen(3000, () => {
    console.log("Server running on port 3000")
})