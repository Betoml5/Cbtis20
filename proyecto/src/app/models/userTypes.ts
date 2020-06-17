export class User{
    constructor(
        public _id: string,
        public userName: string,
        public password: string,
        public type: string,
        public email: string,
        public singupDay: any
    ) {}
}

export class Admin{
    constructor(
        public _id:string,
        public userName: string,
        public password: string,
        public userType:string,
    ){}
}

