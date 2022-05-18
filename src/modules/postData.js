const postDataPH = () => {
    return fetch('https://test-e79a5-default-rtdb.firebaseio.com/goods.json', {
        method: 'POST',
        body: JSON.stringify({
          title: "Игра Ведьмак 3",
          price: 2000,
          sale: true,
          img: "https://cdn1.ozone.ru/multimedia/c400/1027495663.jpg",
          hoverImg: "https://cdn1.ozone.ru/multimedia/c400/1028469540.jpg",
          category: "Игра"
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
    }

export default postDataPH