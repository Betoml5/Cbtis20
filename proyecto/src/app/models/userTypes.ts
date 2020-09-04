export class User{
    constructor(
        public _id: string,
        public userName: string,
        public password: string,
        public email: string,
        public image: string,
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

