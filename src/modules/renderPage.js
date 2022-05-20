import getDataPH from "./getData";
import postDataPH from "./postData";
import renderGoods from './renderGoods'

const renderPage = () => {

    getDataPH().then((data) => {
            data.forEach((element) => {
                renderGoods(element);
            })
            })

    

    // cartBtn.addEventListener('click', () => {
    //     postDataPH().then((data) => {
    //         console.log(data);

    //         getDataPH().then((data) => {
    //             console.log(data);
    //         });
    //     })
    // })
}

export default renderPage