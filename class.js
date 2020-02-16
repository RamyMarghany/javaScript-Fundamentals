class User{
    constructor(firstName, email, age){
        this.firstName= firstName,
        this.email = email,
        this.age = age
    }

    getName(){
        console.log(`the name of the new user is ${this.firstName}`)
    }

    static getAge(){
        console.log(`I am a static function I am not inherted method`)   
    }
}

class Member extends User{
    //the constructor of the new class can has a different paramters of the parent constructor
    constructor(firstName, email, age, memberPackage){ 
        // super function is calling the constructor of the parent class
        super(firstName, email, age); 
        this.memberPackage = memberPackage;
        // this.age = age;
    }
    getPackage(){
        console.log(`${this.firstName} has this kind of  with ${this.age} years old ${this.memberPackage} Membership`)
    }
}


const Ramy = new User('Ramy', 'ramy.med7t@gmail.com', 28)
console.log(Ramy)
Ramy.getName()
User.getAge()


const Marghany = new Member('Marghany', 'Marghany@email.com', 65 , 'Standard')
console.log(Marghany)
Marghany.getPackage()
Marghany.getName()