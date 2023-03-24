const f = {
  top: () => document.getElementById('cima'),
  left: () => document.getElementById('esquerda'),
  right: () => document.getElementById('direita'),
  bottom: () => document.getElementById('baixo'),
  c3: () => document.getElementById('c3'),
  c2: () => document.getElementById('c2')
}

var movTop = movLeft = movBottom = movRigth = false


f.c2().addEventListener('touchstart', ()=>{
  
  zMais = true;
  f.c2().style.background = "black"
  
})

f.c2().addEventListener('touchend', ()=>{
  
  zMais = false;
  
  
  
  f.c2().style.background = "gray"
})





f.c3().addEventListener('touchstart', ()=>{
  zMenos = true;
  f.c3().style.background = "black"
  
})

f.c3().addEventListener('touchend', ()=>{
  
  zMenos = false;
  
  f.c3().style.background = "gray"
})



f.top().addEventListener('touchstart', ()=>{
  movTop = true
  f.top().style.background = "black"
})


f.left().addEventListener('touchstart', ()=>{
  
  movLeft = true
  f.left().style.background = "black"
})

f.bottom().addEventListener('touchstart', ()=>{
  movBottom = true
  f.bottom().style.background = "black"
})   

f.right().addEventListener('touchstart', ()=>{
  movRigth = true
  f.right().style.background = "black"
})

f.top().addEventListener('touchend', ()=>{
  movTop = false
  f.top().style.background = "gray"
})


f.left().addEventListener('touchend', ()=>{
  movLeft = false
  f.left().style.background = "gray"
})

f.bottom().addEventListener('touchend', ()=>{
  movBottom = false
  f.bottom().style.background = "gray"
})   

f.right().addEventListener('touchend', ()=>{
  movRigth = false
  f.right().style.background = "gray"
})



function movPerson(){


  switch (true) {
    case movRigth:
      srcX += 2;
      break;
    
    case movLeft:
      srcX -= 2;
      break;
      
    case movTop:
      srcY -= 2;
      break;  
      
    case movBottom:
      srcY += 2;
      break;  
      
    case zMenos:
      size += speed;
      break;
    
    case zMais:
      size -= speed;
      break;
  }
  
  
  
}

function colider(){
  
  if(movLeft){
    
    if(srcX + canvas.width < canvas.width){
      
      srcX = srcX + 2
      
    
    }
    
  }
  

  
  if(movRigth){
    
    if(srcX + size > 4500){
     srcX = srcX - 2
     
    }
  }
  

  
  
  if(movBottom){
    
    if(srcY + size > 2234){
      srcY = srcY - 2
        
    }
    
  }
  
  
  
  
  if(movTop){
    
    if(srcY + canvas.height < canvas.height){
      srcY = srcY + 2
    }
    
  }
  
  
  
  
  
  
}