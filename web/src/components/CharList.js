
import '../styles/components/CharList.css'
import CharCard from './CharCard'

import CharImage from '../images/Char_Image.png'

function CharList() {
    return(
        <>

            <h1 className="section_title">Characters</h1>

            <div className="character_box">
                <CharCard path={CharImage} name="Zhongli" />
            </div>
        </>
    )
}

export default CharList;