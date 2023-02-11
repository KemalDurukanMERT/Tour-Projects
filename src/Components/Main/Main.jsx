import './Main.scss';

import {data} from '../../Helper/data';
import Card from './Card';

const MainComponent = () => {
    // console.log(data);

    return(
        <div className="card-containerx">
            {data.map((item, index) => <Card{...item} key = {index}/>)}
        </div>
    )
}


export default MainComponent;