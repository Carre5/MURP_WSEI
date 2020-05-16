export class Order {
    public ID: number;
    public name: string;
    public description: string;
    public startingPoint: string;
    public destination: string;
    public orderDate: string;
    public orderPricePerKm: number;
    public orderBasePrice: number;

    constructor(ID: number, name: string, description: string, startingPoint: string, destination: string, orderDate: string){
        this.ID = ID;
        this.name = name;
        this.description = description;
        this.startingPoint = startingPoint;
        this.destination = destination;
        this.orderDate = orderDate;
    }
}