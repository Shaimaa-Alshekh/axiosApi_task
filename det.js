getDet();


async function getDet() {

    let params = new URLSearchParams(document.location.search);
    let name = params.get("product_id");
     console.log(params);
    console.log(name);

    const response = await axios.get(`https://dummyjson.com/products/${name}`);
    const res = response.data;
    console.log(res);
    /*console.log(data.title);
let title=data.title;
    document.querySelector("h1").innerHTML = title;
*/
    let result = `
         <h1>${res.title}<h1/>

         <div class="product_card">
           <div> <img src="${res.thumbnail}">         </div>
           <div class="productitem_desc">
               <li> Id is :<span>${res.id}</span> </li>
               <li> Category is : <span>${res.category}</span>  </li>
               <li> Brand is : <span>${res.brand}</span>  </li>
               <li> Description : <span>${res.description}</span> </li>
               <li> Price is : <span>${res.price}</span>  </li>
               <li> DiscountPercentage is : <span>${res.discountPercentage}</span>  </li>
               <li> Rating is : <span>${res.rating}</span>  </li>
               <li> Stock is : <span>${res.stock}</span>  </li>

            </div>
         </div>
    
    `;
    document.querySelector(".productItem_sec").innerHTML = result;

    const img = res.images;
    console.log(img);
    let im = "";
    for (let i = 0; i < img.length; i++) {
        im += `
        <img src="${img[i]}">

        `;
    }

    document.querySelector(".img_sec").innerHTML = im;

   


}

