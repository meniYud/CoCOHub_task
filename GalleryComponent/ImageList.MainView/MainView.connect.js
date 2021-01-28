import axios from 'axios';
import {dataUrl} from './MainView.consts';

const imageGetter = async () => {
    let imageList = {
        data: [],
        err: ''
    };
    try {
        const response = await axios.get(dataUrl);
        imageList = {
            data: response.data,
            err: '' 
        }

    } catch (error) {
        imageList = {
            data: [],
            err: error
        }
    }
    
    return imageList;
}

export default imageGetter;