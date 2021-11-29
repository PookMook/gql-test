type Resident = {
    id: string;
    name: string;
    facilityId: string;
}
const fakeResident: Resident[] = [{
    "id": "b9649eaa-fbb8-4c81-ad38-d7dd1c382774",
    "name": "Cort Mowlam",
    "facilityId": "ae30da9f-6707-4e23-b290-244b46315095"
  }, {
    "id": "7b8a6e5a-f150-403f-bb2c-4aaf0e4b9a27",
    "name": "Athena Manford",
    "facilityId": "ae30da9f-6707-4e23-b290-244b46315095"
  }, {
    "id": "1d4faf76-444b-476c-b9a2-854b4c1b81ca",
    "name": "Billie Jinkinson",
    "facilityId": "26e51ed8-83ec-48b3-88a9-351c40377822"
  }, {
    "id": "0433ec81-884c-4c80-9e56-7fb40b40625f",
    "name": "Karlens De la Feld",
    "facilityId": "60e25c01-c910-44ef-8d30-696df752077a"
  }, {
    "id": "ec8d0939-1ddb-424b-bfe2-56120edd6371",
    "name": "Gui Gossage",
    "facilityId": "60e25c01-c910-44ef-8d30-696df752077a"
  }, {
    "id": "0a682e54-424e-4db6-b9f0-df2af92c88b9",
    "name": "Stacia Raistrick",
    "facilityId": "60e25c01-c910-44ef-8d30-696df752077a"
  }, {
    "id": "97c2af7f-7392-4a9a-8e2f-4d9ef7d45f1c",
    "name": "Brandi Iseton",
    "facilityId": "4bb83028-eb57-4485-bb72-1f451db68ce8"
  }, {
    "id": "8aadd1df-43d0-4abe-8cf0-e67c5a08290a",
    "name": "Winfred Harrow",
    "facilityId": "4bb83028-eb57-4485-bb72-1f451db68ce8"
  }, {
    "id": "ab09ba71-2630-4036-bece-f45f3f4cf881",
    "name": "Rozella Roistone",
    "facilityId": "cd610baa-7c4e-4678-a18a-e31c12a58477"
  }, {
    "id": "de2f667a-b998-4327-86cd-b4414193d545",
    "name": "Melamie Cowdrey",
    "facilityId": "cd610baa-7c4e-4678-a18a-e31c12a58477"
  }, {
    "id": "52886252-2178-4154-ae65-e69936fd6d49",
    "name": "Katheryn Darwood",
    "facilityId": "cd610baa-7c4e-4678-a18a-e31c12a58477"
  }, {
    "id": "212d0af3-f6b1-4860-8647-75889a85576f",
    "name": "Natty McAughtrie",
    "facilityId": "cd610baa-7c4e-4678-a18a-e31c12a58477"
  }, {
    "id": "1b0a0fa6-a0e1-4d56-a26c-4fad84ebf553",
    "name": "Antonia Andrys",
    "facilityId": "cd610baa-7c4e-4678-a18a-e31c12a58477"
  }, {
    "id": "0db46325-0ab6-4450-9748-f85290ae9b8d",
    "name": "Erny Renackowna",
    "facilityId": "cd610baa-7c4e-4678-a18a-e31c12a58477"
  }, {
    "id": "d5ef2f54-af5d-4e02-bafe-a6b7bdce005b",
    "name": "Milly Della Scala",
    "facilityId": "cd610baa-7c4e-4678-a18a-e31c12a58477"
  }]
  
  


function getNewSet(){
    return [...fakeResident];
}

type Where = {
    id: string | string[];
}

export function findMany(where: Where) {
    const residents = getNewSet();
    return residents.filter(resident => {
        if(Array.isArray(where.id)){
            return where.id.includes(resident.id);
        }
        return resident.id === where.id;
    })
}

export function findOneById(id: string) {
    const residents = getNewSet();
    return residents.find(resident => {
        return resident.id === id;
    })
}