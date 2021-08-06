import moment from 'moment';

export interface IAuthor {
  name: string;
  email: string;
  date: string;
}

export class AuthorModel implements IAuthor {
  name: string;
  email: string;
  date: string;

  constructor({ name, email, date }: any) {
    this.name = name;
    this.email = email;
    this.date = moment(date).format('dddd, DD of MMMM, YYYY - HH:mm:ss');
  }
}
