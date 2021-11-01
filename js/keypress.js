
//key up --> isplay key code
function showkeycode(e){
console.log("in the keycode")
var lastkeyE = document.getElementById('lastKey');
}
//bind the action
$('#message').keyup(showkeycode)

//perform an action when you press a key
var posX = 100;
var posY = 10;
function moveit(e){
    if (e.keys = "s"){
        $('img').animate({left:"40px"}, 500, 'linear');
    }
    else if (e.keys = "u"){
        $('img').animate({top:"posY+50"}, 500, 'linear');
    }
}
//bind the action
document.addEventListener('keydown', moveit)

//on click show the position of the mouse
function showMouse(){
    var lastkeyE = document.getElementById(lastkeyE);
    lastkeyE.textContent = "position ("+e.pageX+" , "+e.pageY+")";
}
document.addEventListener