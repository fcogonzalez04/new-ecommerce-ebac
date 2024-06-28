document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.querySelector(".cart");
    const cartIcon = document.querySelector(".header__cart");

    cartIcon.addEventListener('click', () => {
        cartContainer.classList.toggle('visible');
    });

    const addProductButtons = document.querySelectorAll(".product__cart");

    const cartItemsContainer = document.querySelector(".cart__items");

    const cartItemCountElement = document.querySelector(".cart-item-count");

    const totalPriceElement = document.querySelector(".cart__total");

    let totalPrice = 0;
    let totalItems = 0;

    addProductButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-product");
            const productPrice = parseFloat(button.getAttribute("data-price"));
            const productImg = button.getAttribute("data-img");

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart__item");

            cartItem.innerHTML = `
                <img src="${productImg}" alt="${productName}" class="cart__img">
                <p class="cart__text">${productName}</p>
                <p class="cart__price">$${productPrice.toFixed(2)} MXN</p>
                <i class="cart__img--delete"><img src="img/delete-icon.png" alt="Icono Quitar" class="cart__img--remove"></i>
            `;

            cartItemsContainer.appendChild(cartItem);

            totalPrice += productPrice;

            totalItems += 1;

            totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)} MXN`;

            cartItemCountElement.textContent = totalItems;

            const deleteButton = cartItem.querySelector(".cart__img--delete");
            deleteButton.addEventListener("click", () => {
                cartItemsContainer.removeChild(cartItem);
                totalPrice -= productPrice;
                totalItems -= 1;
                totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)} MXN`;
                cartItemCountElement.textContent = totalItems;
            });
        });
    });

    const button = document.querySelector(".cart__button");
    if (button) {
        button.addEventListener('click', () => {
            button.classList.toggle("toggle");
        });
    }

    const iconRemove = document.querySelectorAll(".cart__img--delete");
    iconRemove.forEach(elem => {
        elem.addEventListener("click", () => {
            const elemParent = elem.parentElement;
            elemParent.remove();
        });
    });
});