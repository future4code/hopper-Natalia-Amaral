import React from "react";
import './App.css';

class SeçãoProdutos extends React.Component {

    state={
        produtos:[{
            id: 1,
            name: "Viagem para Marte",
            value: 200.00,
            imageUrl: "https://picsum.photos/200/200",
        },
        {
            id: 1,
            name: "Viagem para Kepler B",
            value: 3000.00,
            imageUrl: "https://picsum.photos/200/201",
        }]
    }
    render(){
        return(
            <div>

                
            </div>
        )
    }
}
export default SeçãoProdutos;