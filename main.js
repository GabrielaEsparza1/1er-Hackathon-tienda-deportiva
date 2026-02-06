// Bloque para efecto estrella
(function() {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        // Efecto cuando el mouse entra en una estrella
        star.addEventListener('mouseover', function() {
            const val = this.dataset.value;
            // Seleccionamos las estrellas solo de este modal
            const allStars = this.parentElement.querySelectorAll('.star');
            allStars.forEach(s => {
                if (parseInt(s.dataset.value) <= parseInt(val)) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });

        // Efecto cuando el mouse sale de la estrella
        star.addEventListener('mouseout', function() {
            const allStars = this.parentElement.querySelectorAll('.star');
            allStars.forEach(s => s.classList.remove('active'));
        });
    });
})();

// ================================
// 🛒 BLOQUE CARRITO
// ================================
document.addEventListener("DOMContentLoaded", () => {

  const cart = [];

  const cartPanel = document.getElementById("cart-panel");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const clearCart = document.getElementById("clear-cart");
  const cartBtn = document.querySelector(".icon-btn");

  // 🔴 Protección: si no existe el HTML del carrito
  if (!cartPanel || !cartItems || !cartTotal || !clearCart || !cartBtn) {
    console.warn("⚠️ Carrito: faltan elementos en el HTML");
    return;
  }

  // ➕ AGREGAR PRODUCTO AL CARRITO
  document.querySelectorAll(".producto-card button").forEach(button => {
    button.addEventListener("click", () => {

      const card = button.closest(".producto-card");
      if (!card) return;

      const name = card.querySelector("h5")?.innerText || "Producto";
      const priceText = card.querySelector(".precio")?.innerText || "$0";
      const price = parseFloat(priceText.replace("$", ""));

      const existing = cart.find(p => p.name === name);

      if (existing) {
        existing.qty++;
      } else {
        cart.push({ name, price, qty: 1 });
      }

      renderCart();
      cartPanel.style.display = "block";
    });
  });

  // 👜 ABRIR / CERRAR CARRITO (ICONO EXISTENTE)
  cartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    cartPanel.style.display =
      cartPanel.style.display === "none" || cartPanel.style.display === ""
        ? "block"
        : "none";
  });

  // 🧾 RENDER DEL CARRITO
  function renderCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
      total += item.price * item.qty;

      const li = document.createElement("li");
      li.style.display = "flex";
      li.style.justifyContent = "space-between";
      li.style.marginBottom = "6px";

      li.innerHTML = `
        <span>${item.name} x${item.qty}</span>
        <span>$${(item.price * item.qty).toFixed(2)}</span>
      `;

      cartItems.appendChild(li);
    });

    cartTotal.innerText = total.toFixed(2);
  }

  // 🗑️ VACIAR CARRITO
  clearCart.addEventListener("click", () => {
    cart.length = 0;
    renderCart();
  });

});

