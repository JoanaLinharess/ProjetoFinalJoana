//Raiz Quadrada
module.exports = {
    index(req, res) {
        const {valor1} = req.body;
        try{
            if(isNaN(+valor1)){
                throw "ERRO:Entre com numeros"
             }
            const resultado = Math.sqrt(valor1);
            console.log("Resultado da raiz Quadrada: " + resultado);
            return res.status(200).json(resultado);
        }
        catch(error){
            return res.status(400).send("Erro: " + error)
        }
    },
}