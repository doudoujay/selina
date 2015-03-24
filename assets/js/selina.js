/**
 * Created by jay on 15/3/23.
 */



var randomdata
function pushRandomMsg(){
    var data = new Array("TEST1","TEST2","TEST3","TEST4");
    randomdata = data[Math.floor(Math.random() * data.length)];

}
function alertView() {
    pushRandomMsg()
    alert(randomdata);
}