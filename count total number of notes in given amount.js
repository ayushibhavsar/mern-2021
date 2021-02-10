var amount = 3558
var amount1=0
var notes = {
    2000:0,
    500:0,
    200:0,
    100:0,
    50:0,
    20:0,
    10:0,
    5:0,
    2:0,
    1:0
}

if(amount >= 2000)
{
    notes[2000]=(amount-amount%2000)/2000
    amount= amount-notes[2000]*2000
}

if(amount >= 500)
{
    notes[500]=(amount-amount%500)/500
    amount= amount-notes[500]*500
  
}
if(amount >= 200)
{
    notes[200]=(amount-amount%200)/200
    amount= amount-notes[200]*200
    
}
if(amount >= 100)
{
    notes[100]=(amount-amount%100)/100
    amount= amount-notes[100]*100
   
}
if(amount >= 50)
{
    notes[50]=(amount-amount%50)/50
    amount= amount-notes[50]*50
   
}
if(amount >= 20)
{
    notes[20]=(amount-amount%20)/20
    amount= amount-notes[20]*20
    
}
if(amount >= 5)
{
    notes[5]=(amount-amount%5)/5
    amount= amount-notes[5]*5
   
}
if(amount >= 2)
{
    notes[2]=(amount-amount%2)/2
    amount= amount-notes[2]*2
   
}
if(amount >= 1)
{
    notes[1]=(amount-amount%1)/1
    amount= amount-notes[1]*1
    
}

console.log(notes)





