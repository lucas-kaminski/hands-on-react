import {useState} from 'react';

export default function Button(props) {
    //chaves por volta representa uma variavel do js
    //props.children
    const [counter, banana] = useState(1); //define a variavel 
    //declara em array pq o useState retorna [estado, alterarEstado]
    function increment(){ //função chama on clic
        banana(counter + 1); //função sendo chamada definido na const
        console.log(counter); //provando que não muda o estado mas trabalha normal
        console.log(banana);
    }

    return (
        <>
        <span>{counter}</span>
        <button onClick={increment}>{props.title}</button> 
        <br /> 
        </>
    )
}
