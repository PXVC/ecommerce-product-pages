let cartIcon = document.querySelector(".cart");
let cart = document.querySelector(".basket");
let thumbnails = document.querySelectorAll(".image-wrapper");
let mainImage = document.getElementById("product-image");
let index = 0;
export const imageSlider = () => {
	cartIcon.addEventListener("click", (e) => {
		cart.classList.toggle("active");
		cartIconWrapper.classList.remove("active");
	});

	thumbnails.forEach((thumbnail, i) => {
		thumbnail.addEventListener("click", (e) => {
			index = i;
			ImgChange(i);
		});
	});

	const ImgChange = (i) => {
		let mainImageUpdate = i + 1;
		thumbnails.forEach((thumbnail) => thumbnail.classList.remove("active"));
		mainImage.src = "images/image-product-" + mainImageUpdate + ".jpg";
		thumbnails[i].classList.add("active");
	};

	// Run automatically
	setInterval(() => {
		if (index == thumbnails.length - 1) {
			index = 0;
		} else {
			index++;
		}
		ImgChange(index);
	}, 13000);
};
