const submit = document.querySelector('.submit')

const postData = async (e) => {
    e.preventDefault()
    
    const newProduct = {
        name: document.querySelector('#name').value,
        description: document.querySelector('#description').value,
        brand: document.querySelector('#brand').value,
        imageUrl: document.querySelector('#imageUrl').value,
        price: document.querySelector('#price').value
    }

    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", { 
        method: 'POST',
        headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTQ4Y2IxZjBmYjAwMTVkOTE3NWYiLCJpYXQiOjE2MTkwMDc1MjQsImV4cCI6MTYyMDIxNzEyNH0.81RRvTd2IqaPZsKsv6VfBMJBnL17zGR0wW-6hEZVefU",
                    "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    })

    const postResponse = await response.json()
    console.log(postResponse)
}

submit.onsubmit = postData