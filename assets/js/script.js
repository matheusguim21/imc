const form = document.querySelector('#formulario');

// Captura o evento, e faz com que o submit não troque de página
form.addEventListener('submit', function(evento){
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura =evento.target.querySelector('#altura');
    console.log(inputAltura, inputPeso);
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const mensagem = `Seu IMC é de ${imc} (${nivelImc})`;

    // vefifica se os campos dos inputs são válidos

    if((peso == '' || peso == null )&& (altura == '' || altura == null)){
        setResultado('Peso e altura não preenchidos', false);
        return;
    }
    
    if(!altura && (peso == '' || peso == null)  ){
        setResultado('Peso não preenchido, e altura inválida', false);
        return;
    }
    if(!peso && (altura == '' || altura == null)  ){
        setResultado('Altura não preenchida, e peso inválido', false);
        return;
    }
    if(altura == '' || altura == null){
        setResultado('Altura não preenchida', false);
        return;
    }
    if(peso == '' || peso == null){
        setResultado('Peso não preenchido', false);
        return;
    }
    
    if(!peso){
        setResultado('O peso é inválido',false);
        return;
    }
    if(!altura){
        setResultado('A altura é inválida',false);
        return;
    }


    setResultado(mensagem,true);
});



function criaParagrafo(){
    const p = document.createElement('p');
    return p;
}

// esse adiciona o resultado ao parágrafo no final da página
function setResultado(mensagem, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaParagrafo();
    verificaresultado(peso,altura);
    if(isValid) p.classList = 'paragrafo-resultado-true';
    if (!isValid) p.classList = 'paragrafo-resultado-false';
    resultado.appendChild(p);
    p.innerHTML = mensagem;
    
    


}

// calcula o IMC
function getImc(peso, altura){
    const imc = peso/ altura **2;
    return imc.toFixed(2);
    

}

// verifica o niveL/grau de IMC
function getNivelImc(imc){
    const niveis = ['Abaixo do peso', 'Peso Normal', 'Acima do Peso', 'Obesidade nível 1',
    'Obesidade nível 2','Obesidade nível 3'];

    if(imc > 39.9) return niveis[5];

    if(imc > 34.9) return niveis [4];

    if(imc > 29.9) return niveis [3];

    if(imc > 24.9) return niveis [2];

    if(imc > 18.5) return niveis [1];

    if(imc < 18.5) return niveis [0];
}