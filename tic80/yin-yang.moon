-- title:  Yin Yang
-- author: Kodumaro
-- script: moon
export ^

c=x:120,y:68
:sin,:cos,:pi=math
tau=pi*2
angle=0
rm=3
rM=20
yin=15
yang=12
fst_tick=true

SCN==>
 poke 0x3fc1,@
 poke 0x3fc2,@+120

TIC=->
 if fst_tick
  cls!
  fst_tick=false
 c1=x:c.x+cos(angle)*rM,y:c.y+sin(angle)*rM
 a2=angle+pi
 c2=x:c.x+cos(a2)*rM,y:c.y+sin(a2)*rM
 circ c1.x,c1.y,rM,yin
 circ c2.x,c2.y,rM,yang
 circ c1.x,c1.y,rm,yang
 circ c2.x,c2.y,rm,yin
 angle=(angle+pi/60)%tau
