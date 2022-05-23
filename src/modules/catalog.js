import { searchCatalog } from "./searchFilter"
import getDataPH from "./getData"
import renderGoods from './renderGoods'

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button')
    const catalogModal = document.querySelector('.catalog')

    const catalogCat = document.querySelectorAll('.catalog-list li')


    let swithcer = false;
    btnCatalog.addEventListener('click', () => {
        getDataPH().then((data) => {
            renderGoods(data);
        })
        if (swithcer) {
            catalogModal.style.display = 'none';
            swithcer = false;
        }
        else {
            catalogModal.style.display = 'block';
            swithcer = true;
        }
    })

    catalogCat.forEach((elem) => {
        elem.addEventListener('click', () => {
            catalogModal.style.display = 'none';
            swithcer = false;
            getDataPH().then((data) => {
                renderGoods(searchCatalog(data, elem.textContent));
            })
        })
    })

}

export default catalog