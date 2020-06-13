export class User{
    constructor(
        public _id: string,
        public userName: string,
        public password: string,
        public userType: string,
    ) {}
}

export class admin{
    constructor(
        public _id:string,
        public userName: string,
        public password: string,
        public userType:string,
    ){}
}

