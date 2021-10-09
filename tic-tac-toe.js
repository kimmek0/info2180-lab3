onload=function(){
    const player1='X';  //const wont change
    const player2='O';  //const wont change
    var array=[];
    let player_current;
    var get_squares=document.getElementById('board').getElementsByTagName('div');
    var len=get_squares.length;
    for(let i=0;i<len;i++){
        get_squares[i].className+=('square');
        get_squares[i].addEventListener('click',function(){
            

            getplayer()
            function getplayer(){

                if(player_current===player1){
                    player_current=player2;
                    document.getElementById('board').getElementsByTagName('div')[i].className+=(' O');
                }
                else{
                    player_current=player1;
                    document.getElementById('board').getElementsByTagName('div')[i].className+=(' X');
                }
                array.push(get_squares[i].innerHTML=player_current);

                
            }

        },{once:true});
    }  
}