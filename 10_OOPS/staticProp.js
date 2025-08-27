class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`;
    }
}
const ritesh = new User("Ritesh")
//onsole.log(ritesh.createId())

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "iphone.com")
iphone.logMe()
iphone.createId()