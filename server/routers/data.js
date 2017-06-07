/**
 * Created by Administrator on 2017/3/4.
 */
var express = require('express');
var router = express.Router();
var responseData;
//var seatdata=theater.seatdata;
router.use( function(req, res, next) {
    responseData = {
        code: 0,
        message: ''
    }
    next();
} );
router.get('/seatdata',function (req,res) {
    responseData.data=seatdata;
    res.json(responseData);


});
module.exports=router;
