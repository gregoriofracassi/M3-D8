const row = document.querySelector('.row')
const deleters = []

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
            <a href="product-page.html?id=${pr._id}">
            <div class="col-3">
            <div class="card p-2">
                <img class="img-fluid card-img-top" src="${pr.imageUrl}" alt="Card image cap">
                <div class="card-body">
                    <h5>${pr.brand}</h5>
                    <p class="card-text">${pr.name}</p>
                    <a href="backoffice.html?id=${pr._id}">Edit</a> | <p class="delete d-inline pointer" onclick="deleteProduct('${pr._id}')">Delete</p>
                </div>
            </div>
            </div>
            </a>
            `
        }
    ).join('')
   
}


const deleteProduct = async (id) => {
    console.log(id);

    try {
        const response = await fetch (`https://striveschool-api.herokuapp.com/api/product/${id}`, {
            method: "DELETE",
            headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTQ4Y2IxZjBmYjAwMTVkOTE3NWYiLCJpYXQiOjE2MTkwMDc1MjQsImV4cCI6MTYyMDIxNzEyNH0.81RRvTd2IqaPZsKsv6VfBMJBnL17zGR0wW-6hEZVefU",
                            "Content-Type": "application/json"
                }
        })
        if (!response.ok) {
            throw new Error('endpoint isnt working properly')
        }
        const responseBody = response.json()
        alert(`succesfully deleted product ${id}`)
    } catch (error) {
        console.log(error)
        alert(error.message)
    }
    location.assign('index.html')
}
/*
const assignDelete = () => {
    let deleters = document.querySelectorAll('.delete')
    deleters.forEach( del => {
        del.onclick = () => deleteProduct(del.dataset.id)
    })
    console.log(deleters);
}

*/


window.onload = displayProducts
