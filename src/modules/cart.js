import getDataPH from "./getData";
import postDataPH from "./postData";

const cart = () => {
    const cartBtn = document.querySelector('#cart')
    getDataPH().then((data) => {
        console.log(data);
    });


    // cartBtn.addEventListener('click', () => {
    //     postDataPH().then((data) => {
    //         console.log(data);

    //         getDataPH().then((data) => {
    //             console.log(data);
    //         });
    //     })
    // })
}

export default cart