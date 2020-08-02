import { Car } from './../company/fleet/car/car.model';

export class UserRating {
  public ID: number;
  public rating: number;
  public comment: string;
  public car: Car;

  constructor(ID: number, rating: number, comment: string) {
    this.ID = ID;
    this.rating = rating;
    this.comment = comment;
  }
}
