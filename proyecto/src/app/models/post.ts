export class Post {
  constructor(
    public _id: string,
    public title: string,
    public content: string,
    public date: any,
    public category: string,
    public author: string
  ) {}
}
