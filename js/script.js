document.getElementById("petFilter").addEventListener("change", function () {
  const selectedCategory = this.value;
  const petCards = document.querySelectorAll(".pet-card");

  petCards.forEach((card) => {
    const cardCategory = card.getAttribute("data-category");

    if (selectedCategory === "all" || selectedCategory === cardCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
