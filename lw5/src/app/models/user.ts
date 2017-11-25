export class User {
  constructor (
    public id: number,
    public name: string,
    public nickname: string,
    public email: string,
    public site: string,
    public location: string,
    public img: string,
    public shortDescription: string
  ) {}
}
