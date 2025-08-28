class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get password(){
        return `${this._password}hitech`
    }
    set password(value){
        return this._password = value.toUpperCase()
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}

const hitesh = new User("h@hitesh.ai", "rohit")
console.log(hitesh.password)

console.log(hitesh.email)