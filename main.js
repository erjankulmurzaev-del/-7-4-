function createProduct(event) {
    event.preventDefault();

    const form = document.getElementById("productForm");
    const title = document.getElementById("title").value.trim();
    const price = document.getElementById("price").value.trim();


    if (!title || !price) {
        alert("Заполните поля");
        return;
    }

    const product = {
        title: title,
        price: Number(price)
    };

    fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Ошибка при добавлении товара");
            }

            return response.json();
        })
        .then(function(data) {
            console.log("Товар добавлен:", data);
            alert("Товар успешно добавлен!");

            form.reset();
        })
        .catch(function(error) {
            console.error(error);
            alert("Не удалось добавить товар");
        })
        .finally(function() {
            console.log("Запрос завершён");
        });
}