type Event = {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    hobby: string[];
    facilityId: string;
}
const fakeEvents: Event[] = [{
    id: "b9649eaa-fbb8-4c81-ad38-d7dd1c382774",
    name: "Condemned, The",
    hobby: "Action|Adventure|Crime|Thriller".split("|"),
    startDate: new Date(),
    endDate: new Date(),
    facilityId: "ae30da9f-6707-4e23-b290-244b46315095"
  }, {
    id: "7b8a6e5a-f150-403f-bb2c-4aaf0e4b9a27",
    name: "Chronicles (Crónicas)",
    hobby: "Crime|Drama".split("|"),
    startDate: new Date(),
    endDate: new Date(),
    facilityId: "ae30da9f-6707-4e23-b290-244b46315095"
  }, {
    id: "1d4faf76-444b-476c-b9a2-854b4c1b81ca",
    name: "Movie, A",
    hobby: "Documentary".split("|"),
    startDate: new Date(),
    endDate: new Date(),
    facilityId: "26e51ed8-83ec-48b3-88a9-351c40377822"
  }, {
    id: "0433ec81-884c-4c80-9e56-7fb40b40625f",
    name: "More Wild Wild West",
    hobby: "Adventure|Comedy|Sci-Fi|Western".split("|"),
    startDate: new Date(),
    endDate: new Date(),
    facilityId: "60e25c01-c910-44ef-8d30-696df752077a"
  }, {
    id: "ec8d0939-1ddb-424b-bfe2-56120edd6371",
    name: "Tobacco Road",
    hobby: "Comedy|Drama".split("|"),
    startDate: new Date(),
    endDate: new Date(),
    facilityId: "60e25c01-c910-44ef-8d30-696df752077a"
  }, {
    id: "0a682e54-424e-4db6-b9f0-df2af92c88b9",
    name: "Dying Swan, The (Umirayushchii lebed)",
    hobby: "Drama".split("|"),
    startDate: new Date(),
    endDate: new Date(),
    facilityId: "60e25c01-c910-44ef-8d30-696df752077a"
  }, {
    id: "313fd689-490c-455a-bfc5-179c7dad9b43",
    name: "Fox and His Friends (Faustrecht der Freiheit)",
    hobby: "Drama".split("|"),
    startDate: new Date(),
    endDate: new Date(),
    facilityId: "4bb83028-eb57-4485-bb72-1f451db68ce8"
  }, {
    id: "ab337849-3d04-4dba-9995-9dc99a6a73ff",
    name: "Midnight Movie",
    hobby: "Horror|Thriller".split("|"),
    startDate: new Date(),
    endDate: new Date(),
    facilityId: "4bb83028-eb57-4485-bb72-1f451db68ce8"
  }, {
    id: "4b8703f3-1076-4389-9f5b-7f9c1eca11d9",
    name: "Burn Paris Burn",
    hobby: "Animation|Fantasy|Mystery".split("|"),
    startDate: new Date(),
    endDate: new Date(),
    facilityId: "cd610baa-7c4e-4678-a18a-e31c12a58477"
  }, {
    id: "c719e813-8a34-4924-a097-c62de1374dbc",
    name: "Day of the Animals",
    hobby: "Horror|Thriller".split("|"),
    startDate: new Date(),
    endDate: new Date(),
    facilityId: "cd610baa-7c4e-4678-a18a-e31c12a58477"
  }, {
    id: "2d018f51-3033-4e53-8bfa-5481cc5ffa78",
    name: "Lightning Jack",
    hobby: "Comedy|Western".split("|"),
    startDate: new Date(),
    endDate: new Date(),
    facilityId: "cd610baa-7c4e-4678-a18a-e31c12a58477"
  }, {
    id: "acd6f4c2-d9b3-47ef-b5f3-8911a3448888",
    name: "Blue Chips",
    hobby: "Drama".split("|"),
    startDate: new Date(),
    endDate: new Date(),
    facilityId: "cd610baa-7c4e-4678-a18a-e31c12a58477"
  }, {
    id: "039edcbb-128b-4a1a-b070-8934634a76da",
    name: "Buy the Ticket, Take the Ride: Hunter S. Thompson on Film",
    hobby: "Documentary".split("|"),
    startDate: new Date(),
    endDate: new Date(),
    facilityId: "cd610baa-7c4e-4678-a18a-e31c12a58477"
  }, {
    id: "e93a4bac-f497-4b68-9b3d-e4782c46db4d",
    name: "Byzantium",
    hobby: "Drama|Fantasy|Thriller".split("|"),
    startDate: new Date(),
    endDate: new Date(),
    facilityId: "cd610baa-7c4e-4678-a18a-e31c12a58477"
  }]
  
  

function getNewSet(){
    return [...fakeEvents];
}

type Where = {
    facilityId: string,
    id?: string | string[];
    endDate: Date;
    startDate: Date;
}

export function findMany(where: Where): Event[] {
    let events = getNewSet();
    const { id, startDate, endDate } = where;
    events = events.filter(event => {
        event.facilityId === where.facilityId;
    })

    if (id) {
        if(Array.isArray(id)){
            events = events.filter(e => id.includes(e.id));
        }
        else{
            events = events.filter(e => e.id === id);
        }
    }
    if(startDate){
        events = events.filter(e => e.startDate >= startDate);
    }
    if(endDate){
        events = events.filter(e => e.endDate <= endDate);
    }
    return events;
}

export function findOneById(id: string) {
    const events = getNewSet();
    return events.find(event => {
        return event.id === id;
    })
}