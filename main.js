
var productNameInput=document.getElementById("productName"),
    productPriceInput=document.getElementById("productPrice"),
    productCategoryInput=document.getElementById("productCategory"),
    productdescInput=document.getElementById("productdesc"),
    mainBtn=document.getElementById("mainBtn");

var productsContainer;
if(localStorage.getItem("product")==null)
    {
        productsContainer=[];
    }
    else
    {
        productsContainer=JSON.parse( localStorage.getItem("product")) ;
        displayProduct(productsContainer);
    }
function addProduct() {
    if(mainBtn.innerHTML="Add Product ")
    {
        
        var product={
            name:productNameInput.value,
            price:productPriceInput.value,
            category:productCategoryInput.value,
            desc:productdescInput.value}
            
            productsContainer.push(product);
            localStorage.setItem('product',JSON.stringify(productsContainer));
            displayProduct(productsContainer);
            clearForm();
    
    }
    else
    {
        updateProduct();
    }

}
function deleteProduct(indexRemove) {
    productsContainer.splice(indexRemove,1);
    localStorage.setItem("product",JSON.stringify(productsContainer));
    displayProduct(productsContainer);
}
function searchProduct(term){
    
    var searchProduct=[];
    for(var i =0;i<productsContainer.length;i++)
    {
        if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase())==true)
        {
            searchProduct.push(productsContainer[i]);
        }
    }
    displayProduct(searchProduct);
}
var x;
function updateProduct(index){
    productNameInput.value=productsContainer[index].name;
    productPriceInput.value=productsContainer[index].price;
    productCategoryInput.value=productsContainer[index].category;
    productdescInput.value=productsContainer[index].desc;
    mainBtn.innerHTML="update Product";
    deleteProduct(index);    
    displayProduct(productsContainer);

}
function clearForm()
{
    productNameInput.value="";
    productPriceInput.value="";
    productCategoryInput.value="";
    productdescInput.value="";
}

function displayProduct(productList) {

    cartoona=``;
    for(var i=0;i<productList.length;i++)
    {
        cartoona+=`<tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].desc}</td>
        <td><button onclick=" updateProduct(${i})" class="btn btn-info">update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-dark">Delete</button></td>
      </tr>`
    }
    document.getElementById("tableRow").innerHTML=cartoona;
}
