
function Item(props: { path: string; name: string; qtd: number }) {
    return (
        <div className="item_wrapper">
            <div className="item_box">
                <div className="item_qtd">
                    <p>{props.qtd}</p>
                </div>
                <img src={props.path}/>
            </div>
            <p className="item_name">{props.name}</p>
        </div>
    )
}

export default Item;