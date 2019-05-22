document.getElementById('start_game').onclick = function () {
    var timer;
    var a = 0;
    timer();
    function timer() {
        document.getElementById('out').innerHTML = a;
        a++;
        setTimeout(timer,1000);
    }   
}
var game=document.getElementsByClassName('squad');
    
    for(var i=0; i<game.length;i++){
        game[i].onclick=f1;
    }
    function f1(){
        this.classList.toggle('active');
    }



