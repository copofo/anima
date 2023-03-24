
window.onload = function(){
  
  
  
  
  
  
  
  
  
  var cnv = 
  document.getElementById('canvas')
  
  var ctx = cnv.getContext("2d")
  
  var spriteSheet = new Image()
  
  spriteSheet.src = "../img/img.png"
  
  var zezim = new Sprite(spriteSheet);
  
  
  spriteSheet.onload = function(){
    
    init();
    
  }
  
  
  function init(){
    
    loop();
    
    
  }
  
  
  function update(){
  
    zezim.mover()
    
    
  }
  
  
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    zezim.draw(ctx);
    
    
  }
  
  
  
  function loop(){
    
    window.requestAnimationFrame(loop,cnv)
    update();
    draw();
    
  }
  
  
  
  
}