function update ()
{
    if(!timeline.isPlaying()){
        sprite.anims.play('turn'); 
    }
    if(sprite.x > (initPosX + (moveX * 5))){
        console.log("se cayo a la derecha");
        title.visible = true;  
    }
    if(sprite.x < initPosX){
        console.log("se cayo a la izq");
        title.visible = true;  
    }
    if(sprite.y > initPosY){
        console.log("se cayo abajo");        
        sprite.visible = false;
        title.visible = true;  
    }
    if(sprite.y < (initPosY - (moveY * 5)) ){
        console.log("se cayo arriba");   
        title.visible = true;     
    }
}