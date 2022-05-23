//Subtração
module.exports = {
    index(req, res) {
        const {valor1, valor2} = req.body;
        try{
            if(isNaN(+valor1) || isNaN(+valor2)){
                throw "ERRO:Entre com numeros"
             }
            const resultado = valor1 - valor2;
            console.log("Resultado da subtração: " + resultado);
            return res.status(200).json(resultado);
        }
        catch(error){
            return res.status(400).send("Erro: " + error)
        }
    },
}