import renderCart from './renderCart'
import postDataPH from './postData'

const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const cartCloseBtn = document.querySelector('.cart-close')
    const goodsWrapper = document.querySelector('.goods')
    const cartTotal = document.querySelector('.cart-total > span')
    const cartContainer = document.querySelector('.cart-wrapper')
    const cartSend = document.querySelector('.cart-confirm')
    const cartCounter = document.querySelector('.counter')



    const openCart = () => {
        cartModal.style.display = 'flex'
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        renderCart(cart)

        cartTotal.textContent = cart.reduce((sum, goodsItem) => {
            return sum + goodsItem.price
        },0)
    }

    const closeCart = () => {
        cartModal.style.display = ''
    }

    cartBtn.addEventListener('click', openCart)
    cartCloseBtn.addEventListener('click', closeCart)

    
    goodsWrapper.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('btn-primary')) {
            const key = evt.target.closest('.card').dataset.key
            const goods = JSON.parse(localStorage.getItem('goods'))
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

            const goodItem = goods.find((item) => {
                return item.id === +key
            })
            cart.push(goodItem)
            localStorage.setItem('cart', JSON.stringify(cart))

            // cartCounter.textContent = cart.reduce((sum, goodsItem) => {
            //     return sum + 1
            // },0)

            cartCounter.textContent = Number(cartCounter.textContent) + 1
            
        }


    })

    cartContainer.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            const key = evt.target.closest('.card').dataset.key;

            const index = cart.findIndex((item) => {
                return item.id === +key;
            })

            cart.splice(index, 1)


            localStorage.setItem('cart', JSON.stringify(cart))

            renderCart(cart)

            cartTotal.textContent = cart.reduce((sum, goodsItem) => {
                return sum + goodsItem.price
            },0)

            cartCounter.textContent = cartCounter.textContent - 1
        }

    })

    cartSend.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        postDataPH(cart).then(() => {
            localStorage.removeItem('cart')

            renderCart([])

            cartTotal.textContent = 0

            cartCounter.textContent = 0
        })
    })
}

export default cart