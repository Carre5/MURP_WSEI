import { Company } from './../../company.model';

export class Car {
    public ID: number;
    public model: string;
    public load: number;
    public registrationNumber: string;
    public status: string;
    public companyEmail: string;
    public company: Company;

    constructor(ID: number) {
        this.ID = ID;
    }
}
