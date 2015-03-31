/**
 * Created by jay on 15/3/23.
 */



var randomdata
var realTime = "undef"
var currentStatus = "nill"
var realData = [
    {
        timeStart : "07:00:00",
        timeEnd : "08:00:00",
        status : "Commuting to school"
    },
    {
        timeStart : "08:00:00",
        timeEnd : "09:30:00",
        status : "In the Office"
    },
    {
        timeStart : "09:30:00",
        timeEnd : "10:00:00",
        status : "Class Hemingway"
    },
    {
        timeStart : "10:00:00",
        timeEnd : "11:30:00",
        status : "Cheng Li's Office"
    },
    {
        timeStart : "11:30:00",
        timeEnd : "12:30:00",
        status : "Eating in the library"
    },
    {
        timeStart : "12:30:00",
        timeEnd : "13:40:00",
        status : "Speaking to Frances in her office."
    },
    {
        timeStart : "13:40:00",
        timeEnd : "14:30:00",
        status : "Shouting at JACK!!!!!!!(By the lake)"
    },
    {
        timeStart : "14:30:00",
        timeEnd : "16:00:00",
        status : "collecting fapiao in Class Newton"
    },
    {
        timeStart : "16:00:00",
        timeEnd : "17:00:00",
        status : "checking TOEFL scores in the Office"
    },
    {
        timeStart : "17:00:00",
        timeEnd : "19:00:00",
        status : "Gossiping in the little black room"
    },
    {
        timeStart : "19:00:00",
        timeEnd : "21:00:00",
        status : "Attending ‘Ways to say no’ course at Tsinghua University"
    },
    {
        timeStart : "21:00:00",
        timeEnd : "22:00:00",
        status : "On her way home"
    },
    {
        timeStart : "22:00:00",
        timeEnd : "24:00:00",
        status : "Partaking in her beauty sleep"
    },
    {
        timeStart : "00:00:00",
        timeEnd : "07:00:00",
        status : "Partaking in her beauty sleep"
    }
]
function pushRandomMsg(){
    var data = new Array("TEST1","TEST2","TEST3","TEST4");
    randomdata = data[Math.floor(Math.random() * data.length)];

}
function alertView() {
    pushRandomMsg()
    alert(currentStatus);
}

//
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    var currentTime = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime()
    }, 1000);
    realTime = currentTime
}
startTime();


for (var i = 0; i < realData.length; i++){
    var x = realData[i]


    if (x.timeStart < realTime && realTime <= x.timeEnd) {
        currentStatus = x.status
    }

}