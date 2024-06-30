var starcontainer = document.getElementsByClassName("starcontainer")[0];
function randomColor(){
    var red =Math.floor(Math.random()*50 + 100 + 1);
    var green=Math.floor(Math.random()*255 + 1);
    var blue=Math.floor(Math.random()*255 + 1);
    return ("rgb("+red+","+green+","+blue+")");
}
function createStar(){
    document.getElementsByClassName("star")[0].remove();
    var ileft =Math.floor(Math.random()*5 +1);
    var ibottom= Math.floor(Math.random()*25 +70 +1 );
    var fleft= Math.floor(Math.random()*20 +50 +1);
    var fbottom= Math.floor(Math.random()*15 +50 +1);
    var angle = Math.atan(((ileft-fleft)*window.innerWidth/100)/((ibottom-fbottom)*window.innerHeight/100));
    if(fbottom>ibottom){
        angle+=Math.PI;
    }
    var star = document.createElement("div");
    star.className="star";
    star.style="--center_color:"+randomColor()+";--left_line_color:"+randomColor()+";--right_line_color:"+randomColor()+";--first_center_line_color:"+randomColor()+";--second_center_line_color:"+randomColor()+";--third_center_line_color:"+randomColor()+";--fourth_center_line_color:"+randomColor()+";--degree:"+angle+"rad;--ileft:"+ileft+"%; --fleft:"+fleft+"%; --ibottom:"+ibottom+"%; --fbottom:"+fbottom+"%";
    for(var i =0;i<7;++i){
        var starpart = document.createElement("div");
        starpart.className="starpart";
        star.appendChild(starpart);
    }
    starcontainer.appendChild(star);
}
setInterval(createStar,Math.floor(Math.random() +2000 +1));


