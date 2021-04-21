const row = document.querySelector('.row')

const getApiBody = async () => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", { headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTQ4Y2IxZjBmYjAwMTVkOTE3NWYiLCJpYXQiOjE2MTkwMDc1MjQsImV4cCI6MTYyMDIxNzEyNH0.81RRvTd2IqaPZsKsv6VfBMJBnL17zGR0wW-6hEZVefU"}})
    const body = await response.json()
    return body
}

const displayProducts = async () => {
    const products = await getApiBody()
    console.log('products', products)
    row.innerHTML = products.map(
        pr => {
            return         `
            <div class="col-3">
            <div class="card p-2">
                <img class="img-fluid card-img-top" src="${pr.imageUrl}" alt="Card image cap">
                <div class="card-body">
                    <h5>${pr.brand}</h5>
                    <p class="card-text">${pr.name}</p>
                </div>
            </div>
            </div>
            `
        }
    ).join('')
}

window.onload = displayProducts
