    <script>
      function orderStatus(message) {
        let status = document.querySelector("h3");
        status.textContent = message;
      }

      function drinkOrder() {
        let name = prompt(
          "Hi 👋🏾 Welcome to Matcha-Love Cafe, What is your name?"
        );
        name = name.toUpperCase();

        let order = prompt("What is your order ? ").toUpperCase();

        if (
          order === "ICED MOCHA LATTE" ||
          order === "ICED PEACH GREEN TEA" ||
          order === "GREEN MATCHA LATTE"
        ) {
          orderStatus(
            `✅ Thank you, ${name} for your ${order} order. It shall be ready in 15minutes.`
          );
        } else {
          orderStatus(
            `😢 Sorry, ${name} We don't have your ${order} order. Please choose another drink from the Menu
            below.`
          );
        }
      }

      let buyButton = document.querySelector("button");
      buyButton.addEventListener("click", drinkOrder);
    </script>
