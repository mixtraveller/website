function renderProducts(productList) {
  const parentElement = document.getElementById('productList');

  let productCount = '';

  productList.forEach(element => {
    productCount += `<div class="product">
        <div class="product-category">
          ${element.category}
        </div>
        <div class="product-title">
          Product Name: ${element.title}
        </div>
        <img src="${element.image}"
          alt="${element.title}">
        <div class="product-overview">
          <div class="product-price">
            Price: ${element.price} $
          </div>
          <div class="product-rating">
            Rating: ${element.rating.rate}
          </div>
          <div class="product-rating-count">
            Vote Count: ${element.rating.count}
          </div>
        </div>
        <div class="product-description">
          ${element.description}
        </div>
        </div>`
  });

  parentElement.innerHTML = productCount;
}

async function getProducts() {
  const productFetch = await fetch("https://fakestoreapi.com/products");

  return productFetch.json();
}

function render() {
  getProducts().then(items => renderProducts(items))
}
