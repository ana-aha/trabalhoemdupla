import React, {useState} from 'react';
import './media.css';
 
function Media() {
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');
    const [media, setMedia] = useState(null);
 
    const CalcularMedia = () => {
        const resultado =  (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
        setMedia(resultado);
        if (media > 4){
            alert ("Sua média é menor que 4, portanto você está reprovado!")
        }
        else if (media > 4 && media < 6){
            alert ("Sua média é maior que 4 e menor que 6, portanto você está de recuperação!")
        }
        else {
            alert ("Sua média é maior que 6, portanto você está aprovado!")
        }
    };
 
 
return (
    <div className='quadro'>
        <input
        type="number"
        value={nota1}
        onChange={(e) => setNota1(e.target.value)}
        placeholder="Digite a primeira nota: ai mano"
        />
        <input
        type="number"
        value={nota2}
        onChange={(e) => setNota2(e.target.value)}
        placeholder="Digite a segunda nota: "
        />
        <input
        type="number"
        value={nota3}
        onChange={(e) => setNota3(e.target.value)}
        placeholder="Digite a terceira nota: "
        />
        <button onClick={CalcularMedia}>Calcular Média</button>
        {media !==null && <p>Sua média é: {media}</p>}
    </div>
)
}
 
export default Media;
