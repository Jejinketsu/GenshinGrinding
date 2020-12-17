import { useState } from 'react'

import '../styles/components/Inventory.css'
import imageTest from '../images/Item_Cor_Lapis.png'

import Item_Component from './Itemc'

interface Image {
    id: number,
    path: string,
}

interface Item {
    id: number,
    name: string,
    qtd: number,
    type: string,
    rarity: number,
    description: string,
    image: Image,    
}

function Inventory(){

    const [items, setItems] = useState<Item[]>([{
        id: 1,
        name: 'Cor Lapis',
        qtd: 95,
        type: 'A Local Specialty of Liyue',
        rarity: 1,
        description: "A precious crystal of condensed pure Geo element that usually grows along with other minerals. It's also commonly called Cor Petrae.",
        image: {id: 1, path: imageTest},
    }]);

    return (
        <>
            <h1 className="section_title">Inventory</h1>

            <div className="inventory_box">
                
                {items.map(element => {
                    return (
                        <Item_Component name={element.name} qtd={element.qtd} path={element.image.path}/>
                    );
                })}
                
            </div>
        </>
    )
}

export default Inventory;