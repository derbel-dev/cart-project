document.addEventListener('DOMContentLoaded', () => {
        const cartItems = document.querySelectorAll('.cart-item');
        const totalPriceEl = document.getElementById('total-price');
        
        function updateTotalPrice() {
            let totalPrice = 0;
            cartItems.forEach(item => {
                const itemTotal = parseFloat(item.querySelector('.item-total').textContent);
                totalPrice += itemTotal;
            });
            totalPriceEl.textContent = totalPrice.toFixed(2);
        }
    
        cartItems.forEach(item => {
            const price = parseFloat(item.getAttribute('data-price'));
            const quantityEl = item.querySelector('.quantity');
            const itemTotalEl = item.querySelector('.item-total');
            
            const likeButton = item.querySelector('.like-button');
            likeButton.addEventListener('click', () => {
                likeButton.classList.toggle('liked');
            });
    
            const deleteButton = item.querySelector('.delete-button');
            deleteButton.addEventListener('click', () => {
                item.remove();
                updateTotalPrice();
            });
    
            const minusButton = item.querySelector('.minus-button');
            minusButton.addEventListener('click', () => {
                let quantity = parseInt(quantityEl.textContent);
                if (quantity > 1) {
                    quantity--;
                    quantityEl.textContent = quantity;
                    itemTotalEl.textContent = (price * quantity).toFixed(2);
                    updateTotalPrice();
                }
            });
    
            const plusButton = item.querySelector('.plus-button');
            plusButton.addEventListener('click', () => {
                let quantity = parseInt(quantityEl.textContent);
                quantity++;
                quantityEl.textContent = quantity;
                itemTotalEl.textContent = (price * quantity).toFixed(2);
                updateTotalPrice();
            });
        });
    
        updateTotalPrice();
    });