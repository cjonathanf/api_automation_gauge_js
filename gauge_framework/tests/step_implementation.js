const rp = require('request-promise');

step("Batendo na API", async function () {
    const options = {
        method: 'GET',
        uri: 'http://localhost:8080/api/v1/customer-wallets',
        resolveWithFullResponse: true
    };

    rp(options)
        .then(function (response) {
            console.log("Get with success", response.statusCode);

        })

        .catch(function (err) {

        })
});

step("Adicionando uma informacao no JSON", async function () {
    const options = {
        method: 'POST',
        uri: 'http://localhost:8080/api/v1/customer-wallets',
        body: {
            name: "Jonathan Cabral Ferreira",
            parentId: "5da9ea6732123433432",
            birthDate: "1966-10-23T03:00:00Z",
            cellphone: "(32)(11111111)",
            phone: "(32)11111111",
            email: "email@email.com.br",
            occupation: "QA",
            state: "SP",
            createdAt: "2020-12-17T16:37:58.979Z"
        },

        json: true

    };
    rp(options)
        .then(function (parsedBody) {
        })
        .catch(function (err) {

        })

})

step("Alterando uma informacao no Json", async function () {
    const options = {
        method: 'PUT',
        uri: 'http://localhost:8080/api/v1/customer-wallets/1234435543',
        body: {

            name: "Jonathan Cabral",
            birthDate: "1992-01-11T03:00:00Z",
            cellphone: "(32)(11111111)",
            phone: "(11)965759797",
            email: "email@email.com.br",
            occupation: "QA",
            state: "SP"

        },

        json: true

    };
    rp(options)
        .then(function (parsedBody) {
        })
        .catch(function (err) {

        })
});

step("Deletando informacao na API", async function () {
    const options = {
        method: 'DELETE',
        uri: 'http://localhost:8080/api/v1/customer-wallets/5da9ea674234635bdff45c02',
        json: true

    };
    rp(options)
        .then(function (parsedBody) {
            console.log("Deleted with success")
        })
        .catch(function (err) {
            console.log("ID not found, please check it and try again")

        })
});