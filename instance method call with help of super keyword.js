//create class
class Students{

    //create constructor for parent class
    
    constructor(name,age,cls){
        this.myname = name
        this.myage = age
        this.mycls = cls
    }

     //instance method 

    biodata(){
        return `my name is ${this.myname} . my age is ${this.myage} . my class is ${this.mycls}`
    }
    
}
//create child class player with the help of  extends get parents class properties
class Player extends Students{
    //child constructor
    constructor(name,age,cls,game){
        super(name,age,cls)
        this.mygame = game
    }
   play_biodata(){
        return `${super.biodata()} , my game is ${this.mygame}`    
    }
}
let obj1 = new Player('ayushi',24,'BE(CS)','football')

console.log(obj1.play_biodata())