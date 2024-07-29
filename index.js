const boxes = document.querySelectorAll('.box1');
const newBoxes = document.querySelectorAll('.new-box1')
// Iterate through each box and add an event listener
boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Get the target page from the data-target attribute
        const targetPage = box.getAttribute('data-target');
        // Redirect to the target page
        window.location.href = targetPage;
    });
});
newBoxes.forEach(newBox => {
    newBox.addEventListener('click',() => {
        const newTargetPage = newBox.getAttribute('data-target') ;
        window.location.href = newTargetPage;
    })
})



// image 

const thumbnail = document.querySelectorAll(".thumbnail img");
const mainImage = document.getElementById("mainImage");

thumbnail.forEach(thumbnail => {
    thumbnail.addEventListener('click',function(){
        mainImage.src = this.src;
    });
});


//Shop now
const shopButton = document.getElementById("shopNow");

shopButton.addEventListener('click', shopNow);

function shopNow() {
    window.open("shop.html",'_parent'); 
}


const exploreButton = document.getElementById("exploreBtn");
exploreButton.addEventListener('click',exploreBtn);

function exploreBtn(){
    window.open("shop.html","_parent");
}




    // Function to open sliding cart and add product
    function addToCart(product) {
        const slidingCart = document.getElementById('sliding-cart');
        const cartTableBody = document.querySelector('#cart-table tbody');
        
        // Create a new row
        const newRow = document.createElement('tr');
        
        // Create cells
        const removeCell = document.createElement('td');
        const imageCell = document.createElement('td');
        const nameCell = document.createElement('td');
        const quantityCell = document.createElement('td');
        
        // Add content to cells
        removeCell.innerHTML = '<button class="remove-btn">Remove</button>';
        imageCell.innerHTML = `<img src="${product.imageSrc}" alt="Product Image" width="50">`;
        nameCell.textContent = product.name;
        quantityCell.innerHTML = '<input type="number" value="1" min="1">';
        
        // Append cells to the row
        newRow.appendChild(removeCell);
        newRow.appendChild(imageCell);
        newRow.appendChild(nameCell);
        newRow.appendChild(quantityCell);
        
        // Append row to table body
        cartTableBody.appendChild(newRow);
        
        // Show sliding cart
        slidingCart.style.display = 'block';
    }

    // Function to handle cart icon click
    document.getElementById('cart-icon').addEventListener('click', function() {
        const product = {
            imageSrc: 'asset/p1.png',
            name: 'Cartoon Astronaut T-shirts'
        };
        addToCart(product);
    });

    // Function to close sliding cart
    document.getElementById('close-cart').addEventListener('click', function() {
        document.getElementById('sliding-cart').style.display = 'none';
    });

