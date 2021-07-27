import { User } from './User';
export class CustomMap {
	public googleMap: google.maps.Map;

	constructor(divId: string, user: User) {
		new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: user.location.lat,
				lng: user.location.lng,
			},
		}).setMap(
			new google.maps.Map(document.getElementById(divId), {
				zoom: 1,
				center: {
					lat: 0,
					lng: 0,
				},
			})
		);
	}
}
