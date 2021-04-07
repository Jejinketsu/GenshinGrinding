
function Char(props: { path: string; name: string; }) {
    return (
        <div className="char_wrapper">
            <div className="char_box">
                <div className="basic_info">
                    <img src={props.path}/>
                    <div className="bottom_info">
                        <div className="level_badge">
                            <p className="char_level">Lv. 1</p>    
                        </div>
                        <p className="char_name">{props.name}</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Char;