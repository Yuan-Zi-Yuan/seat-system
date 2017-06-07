var express = require('express');

var Seat = mongoose.model('Seat');
var router = express.Router();
var responseData;
var library = new Seat({
    //building: "library",
    //floor:0,
    //room: 0,
    //columnId: 0,
    //rowId: 0,
    //type: N,
    //username: ''
    "1F":{
        "101":[
            [//第一组
                {
                    columnId:1,
                    rowId:1,
                    seatNo:0,
                    type:"Y",
                    username:"2013190419"
                },
                {
                    columnId:1,
                    rowId:2,
                    seatNo:0,
                    type:"N",
                    userId:""
                }
            ],
            [//第二组
                {
                    columnId:2,
                    rowId:1,
                    seatNo:0,
                    type:"Y",
                    username:"2013190419"
                },
                {
                    columnId:1,
                    rowId:2,
                    seatNo:0,
                    type:"N",
                    userId:""
                }
            ]
        ]

    },



    "2F":{
        "201":[
            [//第一组
                {
                    columnId:1,
                    rowId:1,
                    seatNo:0,
                    type:"Y",
                    username:"2013190419"
                },
                {
                    columnId:1,
                    rowId:2,
                    seatNo:0,
                    type:"N",
                    username:""
                }
            ],
            [//第二组
                {
                    columnId:2,
                    rowId:1,
                    seatNo:0,
                    type:"Y",
                    username:"2013190419"
                },
                {
                    columnId:2,
                    rowId:2,
                    seatNo:0,
                    type:"N",
                    username:""
                }
            ]
        ]

    }
})
library.save(function(err,library){
    if(err){
        console.log(err)
    }
    else{
        console.log(library)
    }
})