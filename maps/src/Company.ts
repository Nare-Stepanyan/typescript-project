import faker from 'faker';

export class Company {
    companyName: string;
    cathcPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    constructor(){
        this.companyName = faker.company.companyName(),
        this.cathcPhrase = faker.company.catchPhrase(),
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
}

