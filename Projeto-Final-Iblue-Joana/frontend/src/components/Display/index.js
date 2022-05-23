import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import api from '../../services/api'
import './styles.css'
import TextField from '@mui/material/TextField';


function Display(props) {
    const {value, setValue} = props;
    function operacao(operacao, valor1, valor2, proximaOperacao){
        const operacoes ={
            "+":"/soma",
            "-":"/subtracao",
            "*":"/multiplicacao",
            "/":"/divisao",
            "=":"igual",
            "√":"raizQuadrada",
            "%":"porcentagem"
        }
        if(!isNaN(parseFloat(valor2))){
            api.post(operacoes[operacao], {
                valor1: parseFloat(valor1),
                valor2: parseFloat(valor2)
            }).then(response =>{
                if(response.data){
                    setValue(response.data + " " + proximaOperacao + " ")
                }
                else{
                    setValue("0");
                }
            })
        }
        else{
            setValue(valor1 + " " + proximaOperacao + " ")
        }
    }
    function handleClickDigit(event){  
        setValue(value + event.target.innerText);
    }
    function handleClickOperation(event){
        setValue(value + " " + event.target.innerText + " ")
        const splittedValues = value.split(" ");
        console.log(splittedValues)
        if(splittedValues.length === 3){
            operacao(splittedValues[1], splittedValues[0], splittedValues[2], event.target.innerText);
        }
    }
    function handleClickResult(){
        const splittedValues = value.split(" ");
        console.log(splittedValues)
        if(splittedValues.length === 3){
            operacao(splittedValues[1], splittedValues[0], splittedValues[2], '');
        }
    }
    function handleClickClear(value){
        setValue("");
    }
    return (
        <Box className="display">
           <Box>
                <TextField className="result_area" value={value} disabled id="outlined-basic" variant="outlined" />
             </Box>
            <Grid container spacing={2} columns={4}>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={handleClickClear}>C</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={handleClickOperation}>√</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={handleClickOperation}>%</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button operacao" variant="contained" onClick={handleClickOperation}>/</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={handleClickDigit}>7</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={handleClickDigit}>8</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={handleClickDigit}>9</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button operacao" variant="contained" onClick={handleClickOperation}>*</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={handleClickDigit}>4</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={handleClickDigit}>5</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={handleClickDigit}>6</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button operacao" variant="contained" onClick={handleClickOperation}>-</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={handleClickDigit}>1</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={handleClickDigit}>2</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={handleClickDigit}>3</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button operacao" variant="contained" onClick={handleClickOperation}>+</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="button" variant="contained" onClick={handleClickDigit}>0</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={handleClickDigit}>.</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button operacao" variant="contained" onClick={handleClickResult}>=</Button>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Display;