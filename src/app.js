document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta Brazil", img: "Product-1.jpg", price: 30000 },
      { id: 1, name: "Arabica Blend", img: "Product-2.jpg", price: 38000 },
      { id: 1, name: "Primo Passo", img: "Product-3.jpg", price: 32000 },
      { id: 1, name: "Aceh Gayo", img: "Product-4.jpg", price: 40000 },
      { id: 1, name: "Sumatra Mandailing", img: "Product-5.jpg", price: 28000 },
    ],
  }));
});
