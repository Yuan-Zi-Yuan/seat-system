/**
 * Created by Administrator on 2017/1/16.
 */
var express = require('express');
//var viru = require('../models/viru');
//var theater = require('../models/theater');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var crypto = require('crypto');
//var Seat = mongoose.model('Seat');
var library00 = mongoose.model('library00');
var library10 = mongoose.model('library10');
var library20 = mongoose.model('library20');
var library30 = mongoose.model('library30');
var library40 = mongoose.model('library40');
var library50 = mongoose.model('library50');
var yiFu00 = mongoose.model('yiFu00');
var yiFu01 = mongoose.model('yiFu01');
var yiFu02 = mongoose.model('yiFu02');
var yiFu03 = mongoose.model('yiFu03');
var yiFu04 = mongoose.model('yiFu04');
var yiFu10 = mongoose.model('yiFu10');
var yiFu11 = mongoose.model('yiFu11');
var yiFu12 = mongoose.model('yiFu12');
var yiFu13 = mongoose.model('yiFu13');
var yiFu14 = mongoose.model('yiFu14');
var yiFu20 = mongoose.model('yiFu20');
var yiFu21 = mongoose.model('yiFu21');
var yiFu22 = mongoose.model('yiFu22');
var yiFu23 = mongoose.model('yiFu23');
var yiFu24 = mongoose.model('yiFu24');
var yiFu30 = mongoose.model('yiFu30');
var yiFu31 = mongoose.model('yiFu31');
var yiFu32 = mongoose.model('yiFu32');
var yiFu33 = mongoose.model('yiFu33');
var yiFu34 = mongoose.model('yiFu34');
var yiFu40 = mongoose.model('yiFu40');
var yiFu41 = mongoose.model('yiFu41');
var yiFu42 = mongoose.model('yiFu42');
var yiFu43 = mongoose.model('yiFu43');
var yiFu44 = mongoose.model('yiFu44');
var yiFu50 = mongoose.model('yiFu50');
var yiFu51 = mongoose.model('yiFu51');
var yiFu52 = mongoose.model('yiFu52');
var yiFu53 = mongoose.model('yiFu53');
var yiFu54 = mongoose.model('yiFu54');

var xingXiang00 = mongoose.model('xingXiang00');
var xingXiang01 = mongoose.model('xingXiang01');
var xingXiang02 = mongoose.model('xingXiang02');
var xingXiang03 = mongoose.model('xingXiang03');
var xingXiang04 = mongoose.model('xingXiang04');
var xingXiang10 = mongoose.model('xingXiang10');
var xingXiang11 = mongoose.model('xingXiang11');
var xingXiang12 = mongoose.model('xingXiang12');
var xingXiang13 = mongoose.model('xingXiang13');
var xingXiang14 = mongoose.model('xingXiang14');
var xingXiang20 = mongoose.model('xingXiang20');
var xingXiang21 = mongoose.model('xingXiang21');
var xingXiang22 = mongoose.model('xingXiang22');
var xingXiang23 = mongoose.model('xingXiang23');
var xingXiang24 = mongoose.model('xingXiang24');
var xingXiang30 = mongoose.model('xingXiang30');
var xingXiang31 = mongoose.model('xingXiang31');
var xingXiang32 = mongoose.model('xingXiang32');
var xingXiang33 = mongoose.model('xingXiang33');
var xingXiang34 = mongoose.model('xingXiang34');
var xingXiang40 = mongoose.model('xingXiang40');
var xingXiang41 = mongoose.model('xingXiang41');
var xingXiang42 = mongoose.model('xingXiang42');
var xingXiang43 = mongoose.model('xingXiang43');
var xingXiang44 = mongoose.model('xingXiang44');
var xingXiang50 = mongoose.model('xingXiang50');
var xingXiang51 = mongoose.model('xingXiang51');
var xingXiang52 = mongoose.model('xingXiang52');
var xingXiang53 = mongoose.model('xingXiang53');
var xingXiang54 = mongoose.model('xingXiang54');


var wenKe00 = mongoose.model('wenKe00');
var wenKe01 = mongoose.model('wenKe01');
var wenKe02 = mongoose.model('wenKe02');
var wenKe03 = mongoose.model('wenKe03');
var wenKe04 = mongoose.model('wenKe04');
var wenKe10 = mongoose.model('wenKe10');
var wenKe11 = mongoose.model('wenKe11');
var wenKe12 = mongoose.model('wenKe12');
var wenKe13 = mongoose.model('wenKe13');
var wenKe14 = mongoose.model('wenKe14');
var wenKe20 = mongoose.model('wenKe20');
var wenKe21 = mongoose.model('wenKe21');
var wenKe22 = mongoose.model('wenKe22');
var wenKe23 = mongoose.model('wenKe23');
var wenKe24 = mongoose.model('wenKe24');
var wenKe30 = mongoose.model('wenKe30');
var wenKe31 = mongoose.model('wenKe31');
var wenKe32 = mongoose.model('wenKe32');
var wenKe33 = mongoose.model('wenKe33');
var wenKe34 = mongoose.model('wenKe34');
var wenKe40 = mongoose.model('wenKe40');
var wenKe41 = mongoose.model('wenKe41');
var wenKe42 = mongoose.model('wenKe42');
var wenKe43 = mongoose.model('wenKe43');
var wenKe44 = mongoose.model('wenKe44');
var wenKe50 = mongoose.model('wenKe50');
var wenKe51 = mongoose.model('wenKe51');
var wenKe52 = mongoose.model('wenKe52');
var wenKe53 = mongoose.model('wenKe53');
var wenKe54 = mongoose.model('wenKe54');

var erJiao00 = mongoose.model('erJiao00');
var erJiao01 = mongoose.model('erJiao01');
var erJiao02 = mongoose.model('erJiao02');
var erJiao03 = mongoose.model('erJiao03');
var erJiao04 = mongoose.model('erJiao04');
var erJiao10 = mongoose.model('erJiao10');
var erJiao11 = mongoose.model('erJiao11');
var erJiao12 = mongoose.model('erJiao12');
var erJiao13 = mongoose.model('erJiao13');
var erJiao14 = mongoose.model('erJiao14');
var erJiao20 = mongoose.model('erJiao20');
var erJiao21 = mongoose.model('erJiao21');
var erJiao22 = mongoose.model('erJiao22');
var erJiao23 = mongoose.model('erJiao23');
var erJiao24 = mongoose.model('erJiao24');
var erJiao30 = mongoose.model('erJiao30');
var erJiao31 = mongoose.model('erJiao31');
var erJiao32 = mongoose.model('erJiao32');
var erJiao33 = mongoose.model('erJiao33');
var erJiao34 = mongoose.model('erJiao34');
var erJiao40 = mongoose.model('erJiao40');
var erJiao41 = mongoose.model('erJiao41');
var erJiao42 = mongoose.model('erJiao42');
var erJiao43 = mongoose.model('erJiao43');
var erJiao44 = mongoose.model('erJiao44');
var erJiao50 = mongoose.model('erJiao50');
var erJiao51 = mongoose.model('erJiao51');
var erJiao52 = mongoose.model('erJiao52');
var erJiao53 = mongoose.model('erJiao53');
var erJiao54 = mongoose.model('erJiao54');

var yiJiao00 = mongoose.model('yiJiao00');
var yiJiao01 = mongoose.model('yiJiao01');
var yiJiao02 = mongoose.model('yiJiao02');
var yiJiao03 = mongoose.model('yiJiao03');
var yiJiao04 = mongoose.model('yiJiao04');
var yiJiao10 = mongoose.model('yiJiao10');
var yiJiao11 = mongoose.model('yiJiao11');
var yiJiao12 = mongoose.model('yiJiao12');
var yiJiao13 = mongoose.model('yiJiao13');
var yiJiao14 = mongoose.model('yiJiao14');
var yiJiao20 = mongoose.model('yiJiao20');
var yiJiao21 = mongoose.model('yiJiao21');
var yiJiao22 = mongoose.model('yiJiao22');
var yiJiao23 = mongoose.model('yiJiao23');
var yiJiao24 = mongoose.model('yiJiao24');
var yiJiao30 = mongoose.model('yiJiao30');
var yiJiao31 = mongoose.model('yiJiao31');
var yiJiao32 = mongoose.model('yiJiao32');
var yiJiao33 = mongoose.model('yiJiao33');
var yiJiao34 = mongoose.model('yiJiao34');
var yiJiao40 = mongoose.model('yiJiao40');
var yiJiao41 = mongoose.model('yiJiao41');
var yiJiao42 = mongoose.model('yiJiao42');
var yiJiao43 = mongoose.model('yiJiao43');
var yiJiao44 = mongoose.model('yiJiao44');
var yiJiao50 = mongoose.model('yiJiao50');
var yiJiao51 = mongoose.model('yiJiao51');
var yiJiao52 = mongoose.model('yiJiao52');
var yiJiao53 = mongoose.model('yiJiao53');
var yiJiao54 = mongoose.model('yiJiao54');

var router = express.Router();
var responseData;
var libraryData;

//mongoose.connect('mongodb://localhost:27017/blog')
//function getData(require,requirement) {
//    var MongoClient = require('mongodb').MongoClient;
//    var url = 'mongodb://localhost:27017/blog';
//    MongoClient.connect("mongodb://localhost/blog", function (err, db) {
//        var blog = db.db("blog");
//        blog.collection("seats", function (err, seats) {
//            seats.find({require: requirement}).toArray(function (err, docs) {
//                console.log(docs)
//                libraryData = docs;
//            })
//        })
//    })
//}
router.use(function (req, res, next) {

    responseData = {
        code: 0,
        message: ''
    }
    next();
});
router.get('/positionlist', function (req, res) {
    responseData.code = 1;
    responseData.message = 'ok';
    responseData.li = viru.city;

    res.json(responseData);
})
router.get('/index', function (req, res) {
    responseData.code = 1;
    responseData.message = 'ok';
    responseData.data = {
        swiperImg: ['http://localhost:8888/public/img/swiper/1.png', 'http://localhost:8888/public/img/swiper/2.png', 'http://localhost:8888/public/img/swiper/3.png'],
        moviesList: viru.indexmovie
    };
    res.json(responseData);
})
router.get('/moviesDetail', function (req, res) {
    var reqtitle = req.query.title
    console.log(reqtitle);

    responseData.data = viru.movie;
    console.log(responseData);
    responseData.code = 1;
    responseData.message = 'ok';
    res.json(responseData);
})


router.get('/test', function (req, res) {
    var reqtitle = req.query.title
    console.log(reqtitle);

    responseData.data = viru.title[reqtitle];
    console.log(responseData);
    responseData.code = 1;
    responseData.message = 'ok';
    res.json(responseData);
})
router.get('/building', function (req, res) {
    console.log(req.query)
    var teachingBuilding = req.query.teachingBuilding;
    var floor = req.query.floor;
    var classroom = req.query.classroom;
    responseData.data = viru.teachingBuilding[teachingBuilding][floor][classroom];
    responseData.code = 1;
    responseData.message = 'ok';
    res.json(responseData);
})
router.get('/classroom', function (req, res) {
//    var building=req.query.building;
//    var floor=req.query.floor;
//    var room=req.query.room;
    var room = req.query.room;
    //getData("rowId",0);
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/blog';
    MongoClient.connect("mongodb://localhost/blog", function (err, db) {
        var blog = db.db("blog");
        blog.collection(room, function (err, room) {
//            seats.find({"building":"library","floor":0,"room":0}).toArray(function (err, docs) {
//                console.log(docs)
//                libraryData = docs;
//                responseData.data=libraryData;
//                console.log(responseData)
//                responseData.code = 1;
//                responseData.message = 'ok';
//                res.json(responseData);
//            })
            room.find().toArray(function (err, docs) {
                libraryData = docs;
                responseData.data = libraryData;
                responseData.code = 1;
                responseData.message = 'ok';
                res.json(responseData);
            })
        })
    })

})
router.get('/username', function (req, res) {
    var username = req.query.username;
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/blog';
    MongoClient.connect("mongodb://localhost/blog", function (err, db) {
        var blog = db.db("blog");
        blog.collection("users", function (err, users) {
            var queryObj = {
                "username": username
            }
            users.findOne(queryObj, function (err, userInfo) {
                if (err) {
                    console.log("查找失败！");
                    responseData.message = 'fail';
                    res.json(responseData);
                } else {
                    if (userInfo) {
                        console.log("已有帐号：" + userInfo);
                        responseData.message = 'false';
                        //responseData.data = userInfo;
                        res.json(responseData);
                    } else {
                        console.log("可新建！");
                        responseData.message = 'true';
                        res.json(responseData);
                    }
                }
            })
        })
    })
})
//router.post('/classroom',function(req,res){
//    var roomDataIdx=req.query.roomDataIdx;
//    //getData("rowId",0);
//    var MongoClient = require('mongodb').MongoClient;
//    var url = 'mongodb://localhost:27017/blog';
//    MongoClient.connect("mongodb://localhost/blog", function (err, db) {
//        var blog = db.db("blog");
//        blog.collection("seats", function (err, seats) {
////            seats.update({"building":"library","floor":0,"room":0,times:{$elemmatch:{roomDataIdx:{$elemmatch:{"type":"Y"}}}},{$set:{"times.$."+roomDataIdx+".type":'N'}},function(err,result){
//            console.log(result)
//        }
//    })
//})
//
//})

router.post('/classroom', function (req, res) {
    var houRoom = req.query.houRoom;
    var timePeiodIdx = req.query.timePeiodIdx;
    var status = req.query.status;
    var MongoClient = require('mongodb').MongoClient;
    console.log(status);
    console.log(houRoom);


    if (req.query.tableIdx) {//单个座位修改状态
        var roomDataIdx = req.query.roomDataIdx;
        var username = req.body.username;
        var bookDate = req.body.bookDate;
        var bookTime = req.body.bookTime;
        var bookPlace = req.body.bookPlace;
        var columnId = parseInt(req.query.tableIdx);
        var rowId = parseInt(req.query.seatIdx);
        console.log(columnId);
        console.log(rowId);
        console.log(username);
        //getData("rowId",0);
        var url = 'mongodb://localhost:27017/blog';
        MongoClient.connect("mongodb://localhost/blog", function (err, db) {
            var blog = db.db("blog");
            //blog.collection("users");


            if (status == 'Y') {
                console.log('N');
                var usernameTemp = "";
                var blog = db.db("blog");
                var queryObj = {'columnId': columnId, 'rowId': rowId};
                blog.collection(houRoom, function (err, houRoom) {
                    houRoom.findOne(queryObj, function (err, userInfo) {
                        console.log(userInfo);
                        if (timePeiodIdx == "8") {
                            usernameTemp = userInfo['times'][0][8][0]['username'];
                        } else if (timePeiodIdx == "9") {
                            usernameTemp = userInfo['times'][0][9][0]['username'];
                        } else if (timePeiodIdx == "10") {
                            usernameTemp = userInfo['times'][0][10][0]['username'];
                        } else if (timePeiodIdx == "11") {
                            usernameTemp = userInfo['times'][0][11][0]['username'];
                        } else if (timePeiodIdx == "12") {
                            usernameTemp = userInfo['times'][0][12][0]['username'];
                        } else if (timePeiodIdx == "13") {
                            usernameTemp = userInfo['times'][0][13][0]['username'];
                        } else if (timePeiodIdx == "14") {
                            usernameTemp = userInfo['times'][0][14][0]['username'];
                        } else if (timePeiodIdx == "15") {
                            usernameTemp = userInfo['times'][0][15][0]['username'];
                        } else if (timePeiodIdx == "16") {
                            usernameTemp = userInfo['times'][0][16][0]['username'];
                        } else if (timePeiodIdx == "17") {
                            usernameTemp = userInfo['times'][0][17][0]['username'];
                        } else if (timePeiodIdx == "18") {
                            usernameTemp = userInfo['times'][0][18][0]['username'];
                        } else if (timePeiodIdx == "19") {
                            usernameTemp = userInfo['times'][0][19][0]['username'];
                        } else if (timePeiodIdx == "20") {
                            usernameTemp = userInfo['times'][0][20][0]['username'];
                        } else if (timePeiodIdx == "21") {
                            usernameTemp = userInfo['times'][0][21][0]['username'];
                        }
                        console.log(usernameTemp);


                    })


                });
                interval = setInterval(function () {
                    if (usernameTemp != "") {
                        console.log("usernameTemp" + usernameTemp);
                        var userObj = {"username": usernameTemp};
                        blog.collection("users", function (err, users) {
                            console.log(usernameTemp);
                            users.findOne(userObj, function (err, userInfo) {
                                console.log(userInfo)

                            })
                            //users.update({"username": usernameTemp}, {
                            //    $set: {
                            //        'failTimes': failTimes
                            //    }
                            //})
                        })
                        clearInterval(interval);
                    }
                }, 1000);
                //var userObj={"username": usernameTemp};
                //blog.collection("users", function (err, users) {
                //    console.log(usernameTemp);
                //    users.findOne(userObj, function (err, user) {
                //        console.log(user)
                //        console.log(user.failTimes)
                //        failTimes = user.failTimes;
                //        failTimes = parseInt(failTimes) + 1;
                //    })
                //    users.update({"username": usernameTemp}, {
                //        $set: {
                //            'failTimes': failTimes
                //        }
                //    })
                //})

            }

            blog.collection("users", function (err, users) {
                var queryObj = {"username": username};
                users.update(queryObj, {
                    $set: {
                        'recentBook.bookDate': bookDate,
                        'recentBook.bookTime': bookTime,
                        'recentBook.bookPlace': bookPlace
                    }
                })
            })

            //blog.houRoom.update({'columnId':columnId,'rowId':rowId}, {$set: {'times[timePeiodIdx][type]': 'N'}});
            blog.collection(houRoom, function (err, houRoom) {
                if (timePeiodIdx == "8") {
                    houRoom.update({'columnId': columnId, 'rowId': rowId}, {
                        $set: {
                            'times.0.8.0.type': status,
                            'times.0.8.0.username': username
                        }
                    }, function () {
                        console.log('update')
                    });
                } else if (timePeiodIdx == "9") {
                    houRoom.update({'columnId': columnId, 'rowId': rowId}, {
                        $set: {
                            'times.0.9.0.type': status,
                            'times.0.9.0.username': username
                        }
                    }, function () {
                        console.log('update')
                    });
                }
                else if (timePeiodIdx == "10") {
                    houRoom.update({'columnId': columnId, 'rowId': rowId}, {
                        $set: {
                            'times.0.10.0.type': status,
                            'times.0.10.0.username': username
                        }
                    }, function () {
                        console.log('update')
                    });
                } else if (timePeiodIdx == "11") {
                    houRoom.update({'columnId': columnId, 'rowId': rowId}, {
                        $set: {
                            'times.0.11.0.type': status,
                            'times.0.11.0.username': username
                        }
                    }, function () {
                        console.log('update')
                        console.log('if11')

                    });
                } else if (timePeiodIdx == "12") {
                    houRoom.update({'columnId': columnId, 'rowId': rowId}, {
                        $set: {
                            'times.0.12.0.type': status,
                            'times.0.12.0.username': username
                        }
                    }, function () {
                        console.log('update')
                        console.log('if12')
                    });
                } else if (timePeiodIdx == "13") {
                    houRoom.update({'columnId': columnId, 'rowId': rowId}, {
                        $set: {
                            'times.0.13.0.type': status,
                            'times.0.13.0.username': username
                        }
                    }, function () {
                        console.log('update')
                    });
                } else if (timePeiodIdx == "14") {
                    houRoom.update({'columnId': columnId, 'rowId': rowId}, {
                        $set: {
                            'times.0.14.0.type': status,
                            'times.0.14.0.username': username
                        }
                    }, function () {
                        console.log('update')
                    });
                } else if (timePeiodIdx == "15") {
                    houRoom.update({'columnId': columnId, 'rowId': rowId}, {
                        $set: {
                            'times.0.15.0.type': status,
                            'times.0.15.0.username': username
                        }
                    }, function () {
                        console.log('update')
                    });
                } else if (timePeiodIdx == "16") {
                    houRoom.update({'columnId': columnId, 'rowId': rowId}, {
                        $set: {
                            'times.0.16.0.type': status,
                            'times.0.16.0.username': username
                        }
                    }, function () {
                        console.log('update')
                    });
                } else if (timePeiodIdx == "17") {
                    houRoom.update({'columnId': columnId, 'rowId': rowId}, {
                        $set: {
                            'times.0.17.0.type': status,
                            'times.0.17.0.username': username
                        }
                    }, function () {
                        console.log('update')
                    });
                } else if (timePeiodIdx == "18") {
                    houRoom.update({'columnId': columnId, 'rowId': rowId}, {
                        $set: {
                            'times.0.18.0.type': status,
                            'times.0.18.0.username': username
                        }
                    }, function () {
                        console.log('update')
                    });
                } else if (timePeiodIdx == "19") {
                    houRoom.update({'columnId': columnId, 'rowId': rowId}, {
                        $set: {
                            'times.0.19.0.type': status,
                            'times.0.19.0.username': username
                        }
                    }, function () {
                        console.log('update')
                    });
                } else if (timePeiodIdx == "20") {
                    houRoom.update({'columnId': columnId, 'rowId': rowId}, {
                        $set: {
                            'times.0.20.0.type': status,
                            'times.0.20.0.username': username
                        }
                    }, function () {
                        console.log('update')
                    });
                } else if (timePeiodIdx == "21") {
                    houRoom.update({'columnId': columnId, 'rowId': rowId}, {
                        $set: {
                            'times.0.21.0.type': status,
                            'times.0.21.0.username': username
                        }
                    }, function (data) {
                        console.log('update')
                        console.log('status')
                        console.log(data)
                    });
                }
            })

        })
    } else if (req.query.arrayTimePeiodIdx) {//教室状态修改
        var arrayTimePeiodIdx = req.query.arrayTimePeiodIdx;
        var url = 'mongodb://localhost:27017/blog';
        MongoClient.connect("mongodb://localhost/blog", function (err, db) {
            var blog = db.db("blog");
            //blog.houRoom.update({'columnId':columnId,'rowId':rowId}, {$set: {'times[timePeiodIdx][type]': 'N'}});
            blog.collection(houRoom, function (err, houRoom) {

                if (arrayTimePeiodIdx == 0 || arrayTimePeiodIdx == 2) {
                    houRoom.update({}, {
                        $set: {
                            'times.0.8.0.type': status,
                            'times.0.8.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                    houRoom.update({}, {
                        $set: {
                            'times.0.9.0.type': status,
                            'times.0.9.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                    houRoom.update({}, {
                        $set: {
                            'times.0.10.0.type': status,
                            'times.0.10.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                    houRoom.update({}, {
                        $set: {
                            'times.0.11.0.type': status,
                            'times.0.11.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                    houRoom.update({}, {
                        $set: {
                            'times.0.12.0.type': status,
                            'times.0.12.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                    houRoom.update({}, {
                        $set: {
                            'times.0.13.0.type': status,
                            'times.0.13.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                } else if (arrayTimePeiodIdx == 1 || arrayTimePeiodIdx == 2) {
                    houRoom.update({}, {
                        $set: {
                            'times.0.14.0.type': status,
                            'times.0.14.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                    houRoom.update({}, {
                        $set: {
                            'times.0.15.0.type': status,
                            'times.0.15.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                    houRoom.update({}, {
                        $set: {
                            'times.0.16.0.type': status,
                            'times.0.16.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                    houRoom.update({}, {
                        $set: {
                            'times.0.17.0.type': status,
                            'times.0.17.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                    houRoom.update({}, {
                        $set: {
                            'times.0.18.0.type': status,
                            'times.0.18.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                    houRoom.update({}, {
                        $set: {
                            'times.0.19.0.type': status,
                            'times.0.19.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                    houRoom.update({}, {
                        $set: {
                            'times.0.20.0.type': status,
                            'times.0.20.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                    houRoom.update({}, {
                        $set: {
                            'times.0.21.0.type': status,
                            'times.0.21.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                }
            })
        })
    } else {//
        MongoClient.connect("mongodb://localhost/blog", function (err, db) {
            var blog = db.db("blog");
            //blog.houRoom.update({'columnId':columnId,'rowId':rowId}, {$set: {'times[timePeiodIdx][type]': 'N'}});
            blog.collection(houRoom, function (err, houRoom) {
                if (timePeiodIdx == '8') {
                    houRoom.update({}, {
                        $set: {
                            'times.0.8.0.type': 'N',
                            'times.0.8.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                } else if (timePeiodIdx == '9') {
                    houRoom.update({}, {
                        $set: {
                            'times.0.9.0.type': 'N',
                            'times.0.9.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                } else if (timePeiodIdx == '10') {
                    houRoom.update({}, {
                        $set: {
                            'times.0.10.0.type': 'N',
                            'times.0.10.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                    });
                } else if (timePeiodIdx == '11') {
                    houRoom.update({}, {
                        $set: {
                            'times.0.11.0.type': 'N',
                            'times.0.11.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                        console.log('else11')

                    });
                } else if (timePeiodIdx == '12') {
                    houRoom.update({}, {
                        $set: {
                            'times.0.12.0.type': 'N',
                            'times.0.12.0.username': username
                        }
                    }, {multi: true, upsert: true}, function () {
                        console.log('update')
                        console.log('else12')

                    });
                } else if (timePeiodIdx == '13') {
                    houRoom.update({}, {
                            $set: {
                                'times.0.13.0.type': 'N',
                                'times.0.13.0.username': username
                            }
                        }, {multi: true, upsert: true},
                        function () {
                            console.log('update')
                        });
                } else if (timePeiodIdx == '14') {
                    houRoom.update({}, {
                            $set: {
                                'times.0.14.0.type': 'N',
                                'times.0.14.0.username': username
                            }
                        }, {multi: true, upsert: true},
                        function () {
                            console.log('update')
                        });
                } else if (timePeiodIdx == '15') {
                    houRoom.update({}, {
                            $set: {
                                'times.0.15.0.type': 'N',
                                'times.0.15.0.username': username
                            }
                        }, {multi: true, upsert: true},
                        function () {
                            console.log('update')
                        });
                } else if (timePeiodIdx == '16') {
                    houRoom.update({}, {
                            $set: {
                                'times.0.16.0.type': 'N',
                                'times.0.16.0.username': username
                            }
                        }, {multi: true, upsert: true},
                        function () {
                            console.log('update')
                            console.log('16')
                        }
                    );
                } else if (timePeiodIdx == '17') {
                    houRoom.update({}, {
                            $set: {
                                'times.0.17.0.type': 'N',
                                'times.0.17.0.username': username
                            }
                        }, {multi: true, upsert: true},
                        function () {
                            console.log('update')
                            console.log('17')

                        });
                } else if (timePeiodIdx == '18') {
                    houRoom.update({}, {
                            $set: {
                                'times.0.18.0.type': 'N',
                                'times.0.18.0.username': username
                            }
                        },
                        {multi: true, upsert: true},
                        function () {
                            console.log('update')
                        });
                } else if (timePeiodIdx == '19') {
                    houRoom.update({}, {
                            $set: {
                                'times.0.19.0.type': 'N',
                                'times.0.19.0.username': username
                            }
                        }, {multi: true, upsert: true},
                        function () {
                            console.log('update')
                        });
                } else if (timePeiodIdx == '20') {
                    houRoom.update({}, {
                            $set: {
                                'times.0.20.0.type': 'N',
                                'times.0.20.0.username': username
                            }
                        }, {multi: true, upsert: true},
                        function () {
                            console.log('update')
                        });
                } else if (timePeiodIdx == '21') {
                    houRoom.update({}, {
                            $set: {
                                'times.0.21.0.type': 'N',
                                'times.0.21.0.username': username
                            }
                        }, {multi: true, upsert: true},
                        function () {
                            console.log('update')
                        });
                }
            })
            var username = req.body.username;
            var bookDate = req.body.bookDate;
            var bookTime = req.body.bookTime;
            var bookPlace = req.body.bookPlace;
            console.log('修改！')
            blog.collection("users", function (err, users) {
                var queryObj = {"username": username};
                console.log(username)
                users.update(queryObj, {
                    $set: {
                        'recentBook.bookDate': bookDate,
                        'recentBook.bookTime': bookTime,
                        'recentBook.bookPlace': bookPlace
                    }
                })
            })
        })
    }
})
router.post('/create', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var infoType = req.body.infoType;
    var md5 = crypto.createHash('md5');
    md5.update(password);
    var d = md5.digest('hex')
    console.log('加密的结果：' + d);
    console.log(username);
    console.log(password);
    var user = {
        "username": username,
        "password": d,
        "infoType": infoType
    }
    //var mdPassword=crypt.md5(req.body.password);
    var queryObj = {username: req.body.username, password: req.body.password};
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect("mongodb://localhost/blog", function (err, db) {
        var blog = db.db("blog");
        blog.collection("users", function (err, users) {
            users.insert(user
            );
        })
    })
})
router.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var md5 = crypto.createHash('md5');
    md5.update(password);
    var d = md5.digest('hex')
    console.log('加密的结果：' + d);
    //var mdPassword=crypt.md5(req.body.password);
    var queryObj = {username: req.body.username, password: d};
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect("mongodb://localhost/blog", function (err, db) {
        var blog = db.db("blog");
        blog.collection("users", function (err, users) {
            users.findOne(queryObj, function (err, userInfo) {
                if (err) {
                    console.log("登陆失败！");
                    responseData.message = 'fail';
                    res.json(responseData);
                } else {
                    if (userInfo) {
                        console.log(userInfo)
                        responseData.message = 'true';
                        responseData.data = userInfo;
                        res.json(responseData);
                    } else {
                        console.log("用户名和密码错误！");
                        responseData.message = 'cuowu';
                        res.json(responseData);
                    }
                }
            })
        })
    })
})

router.post('/building', function (req, res) {
    //console.log(req.body.username);
    //responseData.data=libraryData;

    //var library=seats.find({});
    //console.log(library);
    //responseData.data = library;
    responseData.code = 1;
    responseData.message = 'ok';
    res.json(responseData);
    var buildingAry = ['library', 'yiFu', 'xingXiang', 'wenKe', 'erJiao', 'yiJiao'];
//    var blog = db.db("blog");
//    var kumingTest = db.db("blog").collection('kumingTest');
//    for (var m = 0; m < 4; m++) {


    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 6; j++) {
            var a = new yiJiao00({
                building: 'yiJiao',
                floor: 0,
                room: 0,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            a.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })

            var a = new yiJiao01({
                building: 'yiJiao',
                floor: 0,
                room: 1,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            a.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var a = new yiJiao02({
                building: 'yiJiao',
                floor: 0,
                room: 2,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            a.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var a = new yiJiao03({
                building: 'yiJiao',
                floor: 0,
                room: 3,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            a.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var a = new yiJiao04({
                building: 'yiJiao',
                floor: 0,
                room: 4,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            a.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })

            var b = new yiJiao10({
                building: 'yiJiao',
                floor: 1,
                room: 0,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao11({
                building: 'yiJiao',
                floor: 1,
                room: 1,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao12({
                building: 'yiJiao',
                floor: 1,
                room: 2,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao13({
                building: 'yiJiao',
                floor: 1,
                room: 3,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao14({
                building: 'yiJiao',
                floor: 1,
                room: 4,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })


            var c = new yiJiao20({
                building: 'yiJiao',
                floor: 2,
                room: 0,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            c.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var c = new yiJiao21({
                building: 'yiJiao',
                floor: 2,
                room: 1,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            c.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var c = new yiJiao22({
                building: 'yiJiao',
                floor: 2,
                room: 2,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao23({
                building: 'yiJiao',
                floor: 2,
                room: 3,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao24({
                building: 'yiJiao',
                floor: 2,
                room: 4,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })

            var d = new yiJiao30({
                building: 'yiJiao',
                floor: 3,
                room: 0,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            d.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao31({
                building: 'yiJiao',
                floor: 3,
                room: 1,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao32({
                building: 'yiJiao',
                floor: 3,
                room: 2,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao33({
                building: 'yiJiao',
                floor: 3,
                room: 3,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao34({
                building: 'yiJiao',
                floor: 3,
                room: 4,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })


            var e = new yiJiao40({
                building: 'yiJiao',
                floor: 4,
                room: 0,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            e.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao41({
                building: 'yiJiao',
                floor: 4,
                room: 1,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao42({
                building: 'yiJiao',
                floor: 4,
                room: 2,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao43({
                building: 'yiJiao',
                floor: 4,
                room: 3,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao44({
                building: 'yiJiao',
                floor: 4,
                room: 4,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })


            var f = new yiJiao50({
                building: 'yiJiao',
                floor: 5,
                room: 0,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            f.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao51({
                building: 'yiJiao',
                floor: 5,
                room: 1,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao52({
                building: 'yiJiao',
                floor: 5,
                room: 2,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao53({
                building: 'yiJiao',
                floor: 5,
                room: 3,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })
            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })
            var b = new yiJiao54({
                building: 'yiJiao',
                floor: 5,
                room: 4,
                columnId: i,
                rowId: j,
                times: {
                    "8": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "9": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "10": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "11": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    "12": {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    13: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    14: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    15: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    16: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    17: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    18: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    19: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    20: {
                        type: "Y",
                        username: "",
                        class: ""
                    },
                    21: {
                        type: "Y",
                        username: "",
                        class: ""
                    }
                }
            })

            b.save(function (err, yiJiao) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('success')
                }
            })


        }
        //for i或者j
    }
    //for  i或者j


    //}
//    for(var buildingIdx=0;buildingIdx<6;buildingIdx++) {
//        for (var n = 0; n < 6; n++) {
//            for (var m = 0; m < 5; m++) {
//                for (var j = 0; j < 5; j++) {
//                    for (var i = 0; i < 6; i++) {
//                        var library = new Seat({
//                            building: buildingAry[buildingIdx],
//                            floor: n,
//                            room: m,
//                            columnId: j,
//                            rowId: i,
//                            times: {
//                                "8": {
//                                    type: "Y",
//                                    username: "",
//                                    class: ""
//                                },
//                                "9": {
//                                    type: "Y",
//                                    username: "",
//                                    class: ""
//                                },
//                                "10": {
//                                    type: "Y",
//                                    username: "",
//                                    class: ""
//                                },
//                                "11": {
//                                    type: "Y",
//                                    username: "",
//                                    class: ""
//                                },
//                                "12": {
//                                    type: "Y",
//                                    username: "",
//                                    class: ""
//                                },
//                                13: {
//                                    type: "Y",
//                                    username: "",
//                                    class: ""
//                                },
//                                14: {
//                                    type: "Y",
//                                    username: "",
//                                    class: ""
//                                },
//                                15: {
//                                    type: "Y",
//                                    username: "",
//                                    class: ""
//                                },
//                                16: {
//                                    type: "Y",
//                                    username: "",
//                                    class: ""
//                                },
//                                17: {
//                                    type: "Y",
//                                    username: "",
//                                    class: ""
//                                },
//                                18: {
//                                    type: "Y",
//                                    username: "",
//                                    class: ""
//                                },
//                                19: {
//                                    type: "Y",
//                                    username: "",
//                                    class: ""
//                                },
//                                20: {
//                                    type: "Y",
//                                    username: "",
//                                    class: ""
//                                },
//                                21: {
//                                    type: "Y",
//                                    username: "",
//                                    class: ""
//                                }
//                            }
//                        })
//                        library.save(function (err, library) {
//                            if (err) {
//                                console.log(err)
//                            }
//                            else {
//                                console.log('success')
//                            }
//                        })
//
//                    }
//                }
//            }
//        }
//    }
//	var user=new User({
//		username:req.body.username
//	})
//	user.save(function(err,user){
////		req.session.user=user;
//		if(err){
////
//			console.log('fail');
//console.log(err);
//			}else{
//				console.log('success')
//				console.log(user)
//				}
//		})
//    var library0 = new Seat({
//        building: "library",
//        floor:0,
//        room: 0,
//        columnId: 0,
//        rowId: 0,
//        type: "N",
//        username: "2013190419"
//        //columnId: 1,
//        //rowId: 1,
//        ////seatNo: 0,
//        //type: "Y",
//        //username: "2013190419"
//
//    })
//    var library1 = new Seat({
//        building: "library",
//        floor:0,
//        room: 0,
//        columnId: 0,
//        rowId: 1,
//        type: "N",
//        username: "2013190419"
//        //columnId: 1,
//        //rowId: 1,
//        ////seatNo: 0,
//        //type: "Y",
//        //username: "2013190419"
//
//    })
//    var library2 = new Seat({
//        building: "library",
//        floor:0,
//        room: 0,
//        columnId: 0,
//        rowId: 2,
//        type: "N",
//        username: "2013190419"
//        //columnId: 1,
//        //rowId: 1,
//        ////seatNo: 0,
//        //type: "Y",
//        //username: "2013190419"
//
//    })
//    var library3 = new Seat({
//        building: "library",
//        floor:0,
//        room: 0,
//        columnId: 0,
//        rowId: 3,
//        type: "N",
//        username: "2013190419"
//        //columnId: 1,
//        //rowId: 1,
//        ////seatNo: 0,
//        //type: "Y",
//        //username: "2013190419"
//
//    })
//    var library4 = new Seat({
//        building: "library",
//        floor:0,
//        room: 0,
//        columnId: 0,
//        rowId: 4,
//        type: "N",
//        username: "2013190419"
//        //columnId: 1,
//        //rowId: 1,
//        ////seatNo: 0,
//        //type: "Y",
//        //username: "2013190419"
//
//    })
//    var library5 = new Seat({
//        building: "library",
//        floor:0,
//        room: 0,
//        columnId: 0,
//        rowId: 5,
//        type: "N",
//        username: "2013190419"
//        //columnId: 1,
//        //rowId: 1,
//        ////seatNo: 0,
//        //type: "Y",
//        //username: "2013190419"
//
//    })
//    //library.save(function (err, library) {
//    //    if (err) {
//    //        console.log(err)
//    //    }
//    //    else {
//    //        console.log(library)
//    //    }
//    //})
//    library0.save(function (err, library) {
//    })
//    library1.save(function (err, library) {
//    })
//    library2.save(function (err, library) {
//    })
//    library3.save(function (err, library) {
//    })
//    library4.save(function (err, library) {
//    })
//    library5.save(function (err, library) {
//    })
})
router.get('/publicData', function (req, res) {
    var reqtitle = req.query.library
    console.log("reqtitle " + reqtitle);

    responseData.data = viru.publicData[0][0];
    console.log(responseData);
    responseData.code = 1;
    responseData.message = 'ok';
    res.json(responseData);
})


router.post('/search', function (req, res) {
    var key = req.body.key
    if (key.length > 4 || key == '') {
        responseData.code = 2;
        responseData.message = '没有找到相关';
        res.json(responseData);
    }
    else {
        responseData.code = 200;
        responseData.message = '获取到相关';
        responseData.data = theater.wanda
        res.json(responseData)
    }


})


module.exports = router;