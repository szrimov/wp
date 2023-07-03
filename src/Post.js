export default class Post {
  constructor(title, logo) {
    this.title = title;
    this.date = new Date();
    this.logo = logo;
  }
  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON(),
      logo: this.logo,
    });
  }
  get hello() {
    return this.date;
  }
}
