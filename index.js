// HOW THE ANIMATION WORKS
// LET'S IMAGINE THE SITUATION WHERE A BALL IS MOVING ON THE SCREEN 

var loop;
var fps= 60;

var cnv, cxt;

var ball ={
    xpos : 0,
    ypos : 0,
    size : 30,
    color : 'white',
    draw : function(ctx){
        ctx.fillStyle= this.color;
        ctx.beginPath();
        ctx.arc(this.xpos,this.ypos,this.size,0,Math.PI*2,true);
        ctx.fill();
    } ,   
    init : function(cnv){
        this.xpos = (cnv.width-this.size)/2;
        this.ypos = (cnv.height-this.size)/2;
    },
    xvel: 10,
    yvel : 10,
    update: function(){
        this.xpos += this.xvel;
        this.ypos += this.yvel;
        this.checkForCollusion(cnv);
    },
    checkForCollusion: function(cnv){
        if((this.xpos + this.size / 2 > cnv.width) || (this.xpos-this.size/2 <0)){
            this.xvel = -this.xvel;
        }
        if((this.ypos + this.size / 2 > cnv.height) || (this.ypos-this.size/2 <0)){
            this.yvel = -this.yvel;
        }
    }
    
}
window.onload=function(){
  
  prepareCanvas();
  ball.init(cnv);
  loop= setInterval( ()=>{
    update();
    render();
  }, 1000/fps)
}
function fillContext(){
    ctx.fillStyle= '#1bafdb';
    ctx.fillRect(0,0,this.innerWidth,this.innerHeight);
}
function prepareCanvas(){
    cnv= document.getElementById("cnv");
    ctx= cnv.getContext("2d");
    cnv.width= window.innerWidth;
    cnv.height=  window.innerHeight;
    document.body.style.padding=0;
    document.body.style.margin=0;
}

function update(){
    
    ball.update();
}

function render(){
    
    fillContext();
    ball.draw(ctx);
}
