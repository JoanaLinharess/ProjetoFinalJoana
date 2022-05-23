const supertest = require('supertest');

const request = supertest("http://localhost:3001/v1")

test('SUBTRAÇÃO: ', () => {
    return request.post("/subtracao").send({valor1: "X", valor2: "x"}).then(res => { 
            expect(res.text).toEqual("Ocorreu um erro: Valor inválido informado")
            expect(res.statusCode).toEqual(400)
        }
    );
});

test('SUBTRAÇÃO: ', () => {
    return request.post("/subtracao").send({valor1: "10", valor2: 10}).then(res => { 
            expect(res.text).toEqual("Ocorreu um erro: Valor inválido informado")
            expect(res.statusCode).toEqual(400)
        }
    );
});

test('SUBTRAÇÃO: ', () => {
    return request.post("/subtracao").send({valor1: 10, valor2: 10}).then(res => { 
            expect(res.body).toEqual(0)
            expect(res.statusCode).toEqual(200)
        }
    );
});