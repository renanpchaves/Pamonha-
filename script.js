document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".add")
  const removeButton = document.querySelector(".remove")
  const portionAmount = document.querySelector(".porcoes-amount")
  const quantities = document.querySelectorAll(".quant")

  function updateQuantities(multiplier) {
    quantities.forEach((quant) => {
      const baseAmount = parseInt(quant.getAttribute("data-base"))
      quant.textContent = baseAmount * multiplier
    })
  }
  addButton.addEventListener("click", () => {
    let currentAmount = parseInt(portionAmount.textContent)
    if (currentAmount < 30) {
      currentAmount += 1
      portionAmount.textContent = String(currentAmount).padStart(2, "0")
      updateQuantities(currentAmount)
    }
  })
  removeButton.addEventListener("click", () => {
    let currentAmount = parseInt(portionAmount.textContent)
    if (currentAmount > 1) {
      currentAmount -= 1
      portionAmount.textContent = String(currentAmount).padStart(2, "0")
      updateQuantities(currentAmount)
    }
  })

  //inicializar database p quantidades
  quantities.forEach((quantity) => {
    quantity.setAttribute("data-base", quantity.textContent)
  })
})
