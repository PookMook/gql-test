type Company = {
    id: string;
    name: string;
    description: string;
}
const fakeCompanies: Company[] = [{
    id: "3419da02-7a35-4baf-b6aa-b905386b1043",
    name: "MacGyver LLC",
    description: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
  }, {
    id: "ca2af823-65a4-4505-a93a-ce70ccab5618",
    name: "Parker, Kautzer and Carter",
    description: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
  }]

function getNewSet(){
    return [...fakeCompanies];
}

type Where = {
    id: string | string[];
}

export function findMany(where: Where) {
    const companies = getNewSet();
    return companies.filter(company => {
        if(Array.isArray(where.id)){
            return where.id.includes(company.id);
        }
        return company.id === where.id;
    })
}

export function findOneById(id: string) {
    const companies = getNewSet();
    return companies.find(company => {
        return company.id === id;
    })
}