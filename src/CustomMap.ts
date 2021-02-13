/// <reference types="@types/googlemaps" />
// import { User } from './User';
// import { Company } from './Company';

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
    color: string;
}

export class CustomMap {
    
    private googleMap: google.maps.Map;
    
    constructor(divId:string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
        zoom: 1, 
        center: {
            lat: 0,
            lng: 0
            }
        });
    }
    
    // addMarker(mappable: User | Company): void{

    addMarker(mappable: Mappable): void{
    
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }
        });
        
         const infoWindow = new google.maps.InfoWindow({
             content: mappable.markerContent(),
         });
        
        marker.addListener('click', () => {
            infoWindow.open(this.googleMap, marker);
        })
    }
    
    // addCompanyMarker(company: Company):void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng,
    //         }
    //     })
    // }
    
}