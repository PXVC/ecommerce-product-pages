// NOTE: The child Elements will be like the comment below
/* <img
    src="images/image-product-1-thumbnail.jpg"
    alt="order-preview-image"
/>
<div class="order-details">
    <h6 class="name">
        Fall Limited Edition Sneakers
    </h6>
    <h6 class="final-price">$125.00 x 3 <strong>$375.00</strong></h6>
</div>
<img src="images/icon-delete.svg" alt="delete icon">
<button class="btn-orange">Checkout</button> 
*/

// Call elements take part in creating the order
let addToCartBtn = document.querySelector(".btn-add-to-cart");
let wrapper = document.querySelector(".product-order");
let emptyCartMsg = document.getElementById("empty-message");
let cartIconWrapper = document.querySelector(".cart-icon-wrapper");
let myAlert = document.getElementById("alert");

// Creating elements of the order and set some attributes
let orderPreview = document.createElement("img");
orderPreview.src = "images/image-product-1-thumbnail.jpg";
orderPreview.alt = "order-preview-image";

let orderDetails = document.createElement("div");
orderDetails.className = "order-details";

let orderName = document.createElement("h6");
orderName.className = "name";
orderName.textContent = "Fall Limited Edition Sneakers";

let orderPrice = document.createElement("h6");
orderPrice.className = "final-price";

let PriceTimesAmount = document.createElement("strong");

let recycleBin = document.createElement("img");
recycleBin.src = "images/icon-delete.svg";
recycleBin.alt = "delete icon";
recycleBin.style.cursor = "pointer";

let checkoutBtn = document.createElement("button");
checkoutBtn.className = "btn-orange";
checkoutBtn.textContent = "Checkout";

addToCartBtn.addEventListener("click", () => {
	let amountDisplayElement = document.querySelector(".btn-amount span");
	console.log(myAlert.textContent.length);

	if (amountDisplayElement.textContent == "0") {
		myAlert.style.width = myAlert.textContent.length * 9 + "px";
		myAlert.textContent = "You cannot take this product free";
		myAlert.classList.add("show");
		myAlert.classList.remove("hide");
		setTimeout(() => {
			myAlert.classList.remove("show");
			myAlert.classList.add("hide");
		}, 3000);
		console.log("You cannot take this product free");
	} else if (
		wrapper.childElementCount == 4 &&
		emptyCartMsg.style.display == "none"
	) {
		myAlert.style.width = myAlert.textContent.length * 9 + "px";
		myAlert.textContent = "You already add this product to the cart";
		myAlert.classList.add("show");
		myAlert.classList.remove("hide");
		setTimeout(() => {
			myAlert.classList.remove("show");
			myAlert.classList.add("hide");
		}, 3000);
		console.log("You already add this product to the cart");
	} else {
		orderPrice.textContent =
			"$125.00 x " + amountDisplayElement.textContent;
		PriceTimesAmount.textContent =
			" $" +
			(125.0 * parseInt(amountDisplayElement.textContent))
				.toFixed(2)
				.toString();
		cartIconWrapper.classList.add("active");
		emptyCartMsg.style.display = "none";
		wrapper.appendChild(orderPreview);
		wrapper.appendChild(orderDetails);
		orderDetails.appendChild(orderName);
		orderDetails.appendChild(orderPrice);
		orderPrice.appendChild(PriceTimesAmount);
		wrapper.appendChild(recycleBin);
		wrapper.appendChild(checkoutBtn);
	}
});

recycleBin.addEventListener("click", () => {
	emptyCartMsg.style.display = "block";
	removeChildren(orderPreview, orderDetails, recycleBin, checkoutBtn);
});

const removeChildren = (
	childElement1,
	childElement2,
	childElement3,
	childElement4
) => {
	wrapper.removeChild(childElement1);
	wrapper.removeChild(childElement2);
	wrapper.removeChild(childElement3);
	wrapper.removeChild(childElement4);
};
