

async function getPost() {

    const response = await axios.get('https://dummyjson.com/products');
    //console.log(response.data);
    const data = response.data.products;
    console.log(data);
    const result = data.map(function (ele) {
        return `
        <div class="product_item">
                <h2>${ele.title}</h2>
                <div class="product_card">
                   <img src="${ele.thumbnail}">
                   <div class="product_desc">
                   <span>${ele.price}$</span>
                   <span>${ele.brand}</span>
                   </div>
                </div>
                    
                 <a href="details.html?product_id=${ele.id}">details </a>
                

        </div>

                 `;
    })
        .join("");
    document.querySelector(".product_sec").innerHTML = result;
}
getPost();

