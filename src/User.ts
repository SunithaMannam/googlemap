import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements  Mappable{
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = "red";
    
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()) ,
            lng : parseFloat( faker.address.longitude()) ,
        }
    }
    
    markerContent(): string {
        return `<h2> User Name: ${this.name} </h2>`;
    }

/**
In npmjs.com 
search for  @types/<library name>
example: @types/faker   => This give the typescript definition for the JS library.

For some JS libraries, the default type-definiton files are available by default, for some we have to install them again 

-----------------

typedef file for googlemap:   @types/googlemaps 

npm install @types/googlemaps
 */