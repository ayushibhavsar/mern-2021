class Students{
    
    constructor(name,age,cls){
        this.myname = name
        this.myage = age
        this.mycls = cls
    }

    biodata(){
        console.log(`my name is ${this.myname} . my age is ${this.myage} . my class is ${this.mycls}`)
    }
    
}

class Player extends Students{
    constructor(name,age,cls,game){
        super(name,age,cls)
        this.mygame = game
    }
   play_biodata(){
        console.log(`my name is ${this.myname} . my age is ${this.myage} . my class is ${this.mycls} , my game is ${this.mygame}`)
    }
}
let obj1 = new Player('ayushi',24,'BE(CS)','football')

obj1.play_biodata()