type Facility = {
    id: string;
    name: string;
    description: string;
    companyId: string;
    settings: Record<string, string>
}
const fakeFacility: Facility[] = [{
    id: "ae30da9f-6707-4e23-b290-244b46315095",
    name: "Herman Inc",
    description: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    companyId: "3419da02-7a35-4baf-b6aa-b905386b1043",
    settings: {}
  }, {
    id: "26e51ed8-83ec-48b3-88a9-351c40377822",
    name: "Hudson, Hodkiewicz and Kassulke",
    description: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    companyId: "3419da02-7a35-4baf-b6aa-b905386b1043",
    settings: {
        test: "test"
    }
  }, {
    id: "60e25c01-c910-44ef-8d30-696df752077a",
    name: "Kassulke-Keebler",
    description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    companyId: "ca2af823-65a4-4505-a93a-ce70ccab5618",
    settings: {
        noShape: "noShape"
    }
  }, {
    id: "4bb83028-eb57-4485-bb72-1f451db68ce8",
    name: "Rogahn, Schoen and Heller",
    description: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    companyId: "ca2af823-65a4-4505-a93a-ce70ccab5618",
    settings: {
        random: "random"
    }
  }, {
    id: "cd610baa-7c4e-4678-a18a-e31c12a58477",
    name: "Cruickshank and Sons",
    description: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    companyId: "ca2af823-65a4-4505-a93a-ce70ccab5618",
    settings: {
        test: "test",
        test2: "test2",
        hello: "hello"
    }
  }]
  

function getNewSet(){
    return [...fakeFacility];
}

type Where = {
    id: string | string[];
}

export function findMany(where: Where) {
    const facilities = getNewSet();
    return facilities.filter(facility => {
        if(Array.isArray(where.id)){
            return where.id.includes(facility.id);
        }
        return facility.id === where.id;
    })
}

export function findOneById(id: string) {
    const facilities = getNewSet();
    return facilities.find(facility => {
        return facility.id === id;
    })
}