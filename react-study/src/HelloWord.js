import React from "react";

//Classe JavaScript com código React embutido
class HelloWorld extends React.Component {
    //Exibir algo na tela
    render(){
        return(
            <div className="helloWorld">
                <h1>Augusto Brandão</h1>
                <p>Sou um Osasquence, de 24 anos, que está estudando sobre a biblioteca React.</p>
                <h2>Minhas Habilidades:</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Jest</li>
                    <li>React</li>
                </ul>
            </div>
        )
    }
}

export default HelloWorld;