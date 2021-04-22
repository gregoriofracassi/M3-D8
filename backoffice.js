const submit = document.querySelector('.submit')
const urlParams = new URLSearchParams(window.location.search);
const product_id = urlParams.get('id')
const endpoint = product_id ? `https://striveschool-api.herokuapp.com/api/product/${product_id}` : "https://striveschool-api.herokuapp.com/api/product/"
const method = product_id ? "PUT" : "POST"

console.log(endpoint, method)

window.onload = async () => {
    const response = await fetch(endpoint, {
        headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTQ4Y2IxZjBmYjAwMTVkOTE3NWYiLCJpYXQiOjE2MTkwMDc1MjQsImV4cCI6MTYyMDIxNzEyNH0.81RRvTd2IqaPZsKsv6VfBMJBnL17zGR0wW-6hEZVefU"}
    })
    const respBody = await response.json()
    
    document.querySelector('#name').value = respBody.name
    document.querySelector('#description').value = respBody.description
    document.querySelector('#brand').value = respBody.brand
    document.querySelector('#imageUrl').value = respBody.imageUrl
    document.querySelector('#price').value = respBody.price
}

const postData = async (e) => {
    e.preventDefault()
    
    const newProduct = {
        name: document.querySelector('#name').value,
        description: document.querySelector('#description').value,
        brand: document.querySelector('#brand').value,
        imageUrl: document.querySelector('#imageUrl').value,
        price: document.querySelector('#price').value
    }

    try {
        const response = await fetch(endpoint, { 
            method: method,
            headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTQ4Y2IxZjBmYjAwMTVkOTE3NWYiLCJpYXQiOjE2MTkwMDc1MjQsImV4cCI6MTYyMDIxNzEyNH0.81RRvTd2IqaPZsKsv6VfBMJBnL17zGR0wW-6hEZVefU",
                        "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })  
        if(!response.ok) {
            throw new Error('something went wrong')
        }
        const postResponse = await response.json()
        console.log(postResponse)
        alert(`successfully added product ${postResponse._id}`)
    } catch (error) {
        console.log(error)
        alert(error.message)
    }

}

submit.onsubmit = postData