// an example of implementation of the operations in the openapi specification

export class Service {
    async listPets(req, resp) {
        console.log("getPets");
        return [{
            id: 0,
            name: "dog",
        }, {
            id: 0,
            name: "cat",
        }];
    }
}