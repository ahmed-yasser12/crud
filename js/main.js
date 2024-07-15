
let productNameInput = document.getElementById("productName"),
    productPriceInput = document.getElementById("productPrice"),
    productCategoryInput = document.getElementById("productCategory"),
    productDescInput = document.getElementById("productDesc"),
    mainBtnInput = document.getElementById("mainBtn"),
    temp,
    productsContainer ;
if (localStorage.getItem("products") == null) {
    productsContainer = [];
} else {
    productsContainer = JSON.parse(localStorage.getItem("products"));
    displayProduct(productsContainer);
}

function updateProduct(i) {
    productNameInput.value = productsContainer[i].name;
    productCategoryInput.value = productsContainer[i].category;
    productDescInput.value = productsContainer[i].desc;
    productPriceInput.value = productsContainer[i].price;
    mainBtn.innerHTML = "Update Product"
    temp = i;
    // scroll({top : 0 ,behavior :"smooth "})

}

function searchProducts(word) {

    let searchProduct = [];
    for (let i = 0; i < productsContainer.length; i++) {
        if (productsContainer[i].name.toLowerCase().includes(word.toLowerCase()) == true) {
            searchProduct.push(productsContainer[i])
        }
    }
    displayProduct(searchProduct);

}
console.log(mainBtnInput.innerHTML)
function addProduct() {
    let products = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    if (mainBtnInput.innerHTML !== "Update Product") {
        
        productsContainer.push(products);
        localStorage.setItem("products", JSON.stringify(productsContainer));
        displayProduct(productsContainer);
        clearForm()
    } else {
        productsContainer[temp] = products;
        console.log(temp)
        localStorage.setItem("products", JSON.stringify(productsContainer));
        displayProduct(productsContainer);
        clearForm();
        mainBtnInput.innerHTML = "Add Product"
    }

}

function clearForm() {
    productCategoryInput.value = "";
    productDescInput.value = "";
    productNameInput.value = "";
    productPriceInput.value = "";

}
function displayProduct(productList) {

    cartoona = ``;
    for (let i = 0; i < productList.length; i++) {

        cartoona += `<tr>
          <td>${i}</td>
          <td>${productList[i].name}</td>
          <td>${productList[i].price}</td>
          <td>${productList[i].category}</td>
          <td>${productList[i].desc}</td>
          <td><button onclick="updateProduct(${i})" class="btn btn-warning">Update</button></td>
          <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
        </tr>`
    }
    document.getElementById("tableRow").innerHTML = cartoona;

}
function deleteProduct(index) {
    productsContainer.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(productsContainer));
    displayProduct(productsContainer);
}