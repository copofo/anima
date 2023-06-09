function Sprite(img){
  //Atributos
  this.movTop = this.movLeft = this.movBottom = this.movRigth = false;
  this.srcX = this.srcY = 0;
  this.width = 24;
  this.height = 32;
  this.posX = posY = 0;
  this.img = img;
  this.posXAlt = canvas.width / 2;
  this.posYAlt = canvas.height / 2;
  this.speed = 1;
  this.countAnime = 0;
  
  //Métodos
  //Desenha
  
  this.draw = function(ctx){
    
    ctx.drawImage
    (this.img,this.srcX,this.srcY,this.width,this.height,this.posXAlt,this.posYAlt,this.width,this.height)
    
    this.animation()
    
    
  }
  
  
  this.mover = function(){
    
    
    
    
    
    if(movRigth){
    
          this.posXAlt += this.speed;
          this.srcY = this.height * 3;
    }else if(movLeft){
        
        
          this.posXAlt -= this.speed;
          this.srcY = this.height * 2;
          
    } else if(movTop){   
        
          this.posYAlt -= this.speed;
          this.srcY = this.height * 1;
  
    } else if(movBottom){
      
          this.posYAlt += this.speed;
          this.srcY = this.height * 0;
          
    }
    
    this.posXAlt = Math.max(0, Math.min(canvas.width - this.width, this.posXAlt))
    
    this.posYAlt = Math.max(0, Math.min(canvas.height - this.height, this.posYAlt))
    
    
  }
  
  
  this.animation = function(){
    
    if(movBottom || movLeft || movTop || movRigth){
      
      
      this.countAnime++;
      
      
      if(this.countAnime >= 40){
        
        this.countAnime = 0;
        
      }
      
      
      this.srcX = Math.floor(this.countAnime / 5) * this.width
      
    }else if (movLeft == false || movTop == false || movRight == false || movBottom== false){

          this.srcX = 0 * this.width

      }
    
    
    
  }
  
  
    
    
    
  }