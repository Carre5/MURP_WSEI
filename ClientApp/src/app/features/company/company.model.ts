export class Company {
    public ID: number;
    public companyName: string;
    public TIN: number;
    public registrationNumber: string;
    public status: string;
    public companyEmail: string;

    constructor(ID: number) {
        this.ID = ID;
    }
}
