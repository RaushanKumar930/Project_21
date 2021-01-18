function bounceOff(ob1,ob2){
    if(ob1.x-ob2.x<=ob2.width/2+ob1.width/2&&ob2.x-ob1.x<=ob2.width/2+ob1.width/2){
      ob1.velocityX*=(-1)
      ob2.velocityX*=(0)
    }
    if (ob1.y-ob2.y<=ob2.height/2+ob1.height/2&&ob2.y-ob1.y<=ob2.height/2+ob1.height/2){
      ob1.velocityY*=(-1)
      ob2.velocityY*=(0)
    }
  }