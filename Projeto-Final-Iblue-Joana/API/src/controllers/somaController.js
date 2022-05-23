//Soma
module.exports = {
    index(request, response) {
        const {valor1, valor2} = request.body;
        try{
           if(isNaN(+valor1) || isNaN(+valor2)){
               throw "ERRO:Entre com numeros"
            }
            const resultado = valor1 + valor2;
            console.log("Resultado da soma: " + resultado);
            return response.status(200).json(resultado);
        }
        catch(error){
            return response.status(400).send("Erro: " + error)
        }
    }, 
    
}