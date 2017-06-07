var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: {type: String, unique: true},
//    email: String,
//    color: String,
//    hashed_password: String
});
var timesAryList=new Schema({
    type: String,
    username:String,
    class:String
});

var timesAry=new Schema({
    "8":[timesAryList],
    "9":[timesAryList],
    "10":[timesAryList],
    "11":[timesAryList],
    "12":[timesAryList],
    "13":[timesAryList],
    "14":[timesAryList],
    "15":[timesAryList],
    "16":[timesAryList],
    "17":[timesAryList],
    "18":[timesAryList],
    "19":[timesAryList],
    "20":[timesAryList],
    "21":[timesAryList]
});

var SeatSchema = new Schema({
    building: String,
    floor: Number,
    room: Number,
    columnId: Number,
    rowId: Number,
    times:[timesAry]
    //times:{
    //    "8":{
    //        type: String,
    //        username:String,
    //        class:String
    //    }
        //"9":{
        //    type: String,
        //    username:String,
        //    class:String
        //},
        //"10":{
        //    type: String,
        //    username:String,
        //    class:String
        //},
        //"11":{
        //    type: String,
        //    username:String,
        //    class:String
        //},
        //"12":{
        //    type: String,
        //    username:String,
        //    class:String
        //}
        //13:{
        //    type: String,
        //    username:String,
        //    class:String
        //},
        //14:{
        //    type: String,
        //    username:String,
        //    class:String
        //},
        //15:{
        //    type: String,
        //    username:String,
        //    class:String
        //},
        //16:{
        //    type: String,
        //    username:String,
        //    class:String
        //},
        //17:{
        //    type: String,
        //    username:String,
        //    class:String
        //},
        //18:{
        //    type: String,
        //    username:String,
        //    class:String
        //},
        //19:{
        //    type: String,
        //    username:String,
        //    class:String
        //},
        //20:{
        //    type: String,
        //    username:String,
        //    class:String
        //},
        //21:{
        //    type: String,
        //    username:String,
        //    class:String
        //}
    //}
});

mongoose.model('User', UserSchema);
//mongoose.model('Seat', SeatSchema);
mongoose.model('library00', SeatSchema);
mongoose.model('library10', SeatSchema);
mongoose.model('library20', SeatSchema);
mongoose.model('library30', SeatSchema);
mongoose.model('library40', SeatSchema);
mongoose.model('library50', SeatSchema);


mongoose.model('yiFu00', SeatSchema);
mongoose.model('yiFu01', SeatSchema);
mongoose.model('yiFu02', SeatSchema);
mongoose.model('yiFu03', SeatSchema);
mongoose.model('yiFu04', SeatSchema);
mongoose.model('yiFu10', SeatSchema);
mongoose.model('yiFu11', SeatSchema);
mongoose.model('yiFu12', SeatSchema);
mongoose.model('yiFu13', SeatSchema);
mongoose.model('yiFu14', SeatSchema);
mongoose.model('yiFu20', SeatSchema);
mongoose.model('yiFu21', SeatSchema);
mongoose.model('yiFu22', SeatSchema);
mongoose.model('yiFu23', SeatSchema);
mongoose.model('yiFu24', SeatSchema);
mongoose.model('yiFu30', SeatSchema);
mongoose.model('yiFu31', SeatSchema);
mongoose.model('yiFu32', SeatSchema);
mongoose.model('yiFu33', SeatSchema);
mongoose.model('yiFu34', SeatSchema);
mongoose.model('yiFu40', SeatSchema);
mongoose.model('yiFu41', SeatSchema);
mongoose.model('yiFu42', SeatSchema);
mongoose.model('yiFu43', SeatSchema);
mongoose.model('yiFu44', SeatSchema);
mongoose.model('yiFu50', SeatSchema);
mongoose.model('yiFu51', SeatSchema);
mongoose.model('yiFu52', SeatSchema);
mongoose.model('yiFu53', SeatSchema);
mongoose.model('yiFu54', SeatSchema);



mongoose.model('xingXiang00', SeatSchema);
mongoose.model('xingXiang01', SeatSchema);
mongoose.model('xingXiang02', SeatSchema);
mongoose.model('xingXiang03', SeatSchema);
mongoose.model('xingXiang04', SeatSchema);
mongoose.model('xingXiang10', SeatSchema);
mongoose.model('xingXiang11', SeatSchema);
mongoose.model('xingXiang12', SeatSchema);
mongoose.model('xingXiang13', SeatSchema);
mongoose.model('xingXiang14', SeatSchema);
mongoose.model('xingXiang20', SeatSchema);
mongoose.model('xingXiang21', SeatSchema);
mongoose.model('xingXiang22', SeatSchema);
mongoose.model('xingXiang23', SeatSchema);
mongoose.model('xingXiang24', SeatSchema);
mongoose.model('xingXiang30', SeatSchema);
mongoose.model('xingXiang31', SeatSchema);
mongoose.model('xingXiang32', SeatSchema);
mongoose.model('xingXiang33', SeatSchema);
mongoose.model('xingXiang34', SeatSchema);
mongoose.model('xingXiang40', SeatSchema);
mongoose.model('xingXiang41', SeatSchema);
mongoose.model('xingXiang42', SeatSchema);
mongoose.model('xingXiang43', SeatSchema);
mongoose.model('xingXiang44', SeatSchema);
mongoose.model('xingXiang50', SeatSchema);
mongoose.model('xingXiang51', SeatSchema);
mongoose.model('xingXiang52', SeatSchema);
mongoose.model('xingXiang53', SeatSchema);
mongoose.model('xingXiang54', SeatSchema);


mongoose.model('wenKe00', SeatSchema);
mongoose.model('wenKe01', SeatSchema);
mongoose.model('wenKe02', SeatSchema);
mongoose.model('wenKe03', SeatSchema);
mongoose.model('wenKe04', SeatSchema);
mongoose.model('wenKe10', SeatSchema);
mongoose.model('wenKe11', SeatSchema);
mongoose.model('wenKe12', SeatSchema);
mongoose.model('wenKe13', SeatSchema);
mongoose.model('wenKe14', SeatSchema);
mongoose.model('wenKe20', SeatSchema);
mongoose.model('wenKe21', SeatSchema);
mongoose.model('wenKe22', SeatSchema);
mongoose.model('wenKe23', SeatSchema);
mongoose.model('wenKe24', SeatSchema);
mongoose.model('wenKe30', SeatSchema);
mongoose.model('wenKe31', SeatSchema);
mongoose.model('wenKe32', SeatSchema);
mongoose.model('wenKe33', SeatSchema);
mongoose.model('wenKe34', SeatSchema);
mongoose.model('wenKe40', SeatSchema);
mongoose.model('wenKe41', SeatSchema);
mongoose.model('wenKe42', SeatSchema);
mongoose.model('wenKe43', SeatSchema);
mongoose.model('wenKe44', SeatSchema);
mongoose.model('wenKe50', SeatSchema);
mongoose.model('wenKe51', SeatSchema);
mongoose.model('wenKe52', SeatSchema);
mongoose.model('wenKe53', SeatSchema);
mongoose.model('wenKe54', SeatSchema);


mongoose.model('erJiao00', SeatSchema);
mongoose.model('erJiao01', SeatSchema);
mongoose.model('erJiao02', SeatSchema);
mongoose.model('erJiao03', SeatSchema);
mongoose.model('erJiao04', SeatSchema);
mongoose.model('erJiao10', SeatSchema);
mongoose.model('erJiao11', SeatSchema);
mongoose.model('erJiao12', SeatSchema);
mongoose.model('erJiao13', SeatSchema);
mongoose.model('erJiao14', SeatSchema);
mongoose.model('erJiao20', SeatSchema);
mongoose.model('erJiao21', SeatSchema);
mongoose.model('erJiao22', SeatSchema);
mongoose.model('erJiao23', SeatSchema);
mongoose.model('erJiao24', SeatSchema);
mongoose.model('erJiao30', SeatSchema);
mongoose.model('erJiao31', SeatSchema);
mongoose.model('erJiao32', SeatSchema);
mongoose.model('erJiao33', SeatSchema);
mongoose.model('erJiao34', SeatSchema);
mongoose.model('erJiao40', SeatSchema);
mongoose.model('erJiao41', SeatSchema);
mongoose.model('erJiao42', SeatSchema);
mongoose.model('erJiao43', SeatSchema);
mongoose.model('erJiao44', SeatSchema);
mongoose.model('erJiao50', SeatSchema);
mongoose.model('erJiao51', SeatSchema);
mongoose.model('erJiao52', SeatSchema);
mongoose.model('erJiao53', SeatSchema);
mongoose.model('erJiao54', SeatSchema);

mongoose.model('yiJiao00', SeatSchema);
mongoose.model('yiJiao01', SeatSchema);
mongoose.model('yiJiao02', SeatSchema);
mongoose.model('yiJiao03', SeatSchema);
mongoose.model('yiJiao04', SeatSchema);
mongoose.model('yiJiao10', SeatSchema);
mongoose.model('yiJiao11', SeatSchema);
mongoose.model('yiJiao12', SeatSchema);
mongoose.model('yiJiao13', SeatSchema);
mongoose.model('yiJiao14', SeatSchema);
mongoose.model('yiJiao20', SeatSchema);
mongoose.model('yiJiao21', SeatSchema);
mongoose.model('yiJiao22', SeatSchema);
mongoose.model('yiJiao23', SeatSchema);
mongoose.model('yiJiao24', SeatSchema);
mongoose.model('yiJiao30', SeatSchema);
mongoose.model('yiJiao31', SeatSchema);
mongoose.model('yiJiao32', SeatSchema);
mongoose.model('yiJiao33', SeatSchema);
mongoose.model('yiJiao34', SeatSchema);
mongoose.model('yiJiao40', SeatSchema);
mongoose.model('yiJiao41', SeatSchema);
mongoose.model('yiJiao42', SeatSchema);
mongoose.model('yiJiao43', SeatSchema);
mongoose.model('yiJiao44', SeatSchema);
mongoose.model('yiJiao50', SeatSchema);
mongoose.model('yiJiao51', SeatSchema);
mongoose.model('yiJiao52', SeatSchema);
mongoose.model('yiJiao53', SeatSchema);
mongoose.model('yiJiao54', SeatSchema);