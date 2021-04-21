const containerDiv = document.querySelector('.col-8')

const getProduct = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const product_id = urlParams.get('id')
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", { headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTQ4Y2IxZjBmYjAwMTVkOTE3NWYiLCJpYXQiOjE2MTkwMDc1MjQsImV4cCI6MTYyMDIxNzEyNH0.81RRvTd2IqaPZsKsv6VfBMJBnL17zGR0wW-6hEZVefU"}})
    const body = await response.json()
    const product = body.find( pr => pr._id === product_id)
    return product
}

const displayProduct = async () => {
    const product = await getProduct()
    containerDiv.innerHTML = `
    <div class="card">
      <img class="card-img-top" src="${product.imageUrl}" alt="Card image cap">
      <div class="card-body">
        <h3>${product.brand} || ${product.name}</h3>
        <h4>€ ${product.price}</h4>
        <p>${product.description}</p>
      </div>
    </div>
    `
}


window.onload = displayProduct

