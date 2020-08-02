export class Order {
  public id: number;
  public creationDate: string;

  public companyID: number;
  public carID: number;
  public carRegistrationNumber: string;

  public priceMin: number;
  public endPrice: number;
  public priceMax: number;
  public startTiming: string;
  public endTiming: string;
  public wasStartedTiming: boolean;
  public kilometersTaken: number;
  public priority: number;

  public driverRequired: boolean;
  public userRating: number;

  public status: number;
  public companyName: string;
  public carModel: string;

  public orderID: string;
  public dateStart: string;
  public dateEnd: string;
  public location: string;
  public description: string;

  constructor(
    // id: number,
    // orderID: string,
    // creationDate: string,
    // dateStart: string,
    // dateEnd: string,
    // driverRequired: boolean,
    // userRating: number
  ) {
    // this.id = id;
    // this.orderID = orderID;
    // this.creationDate = creationDate;
    // this.dateStart = dateStart;
    // this.dateEnd = dateEnd;
    // this.driverRequired = driverRequired;
    // this.userRating = userRating;
  }
}
