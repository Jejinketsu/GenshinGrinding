import TopBar from '../components/TopBar'
import Inventory from '../components/Inventory'

import '../styles/global.css'

function Characters(){
    return (
        <>
            <TopBar pageLink="characters" />

            <div className='main'>
                <div className='wrapper'>
                    <Inventory />
                </div>
            </div>
        </>
    )
}

export default Characters;