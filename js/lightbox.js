let lightbox = document.getElementById("lightbox");
let closeIcon = document.querySelector(".close-icon");
let mainImage = document.getElementById("product-image");
let LightboxMainImage = document.getElementById("lightbox-product-image");
let previousBtn = document.querySelector(".btn-previous-img-wrapper");
let nextBtn = document.querySelector(".btn-next-img-wrapper");
let lightboxImageThumbnails = document.querySelectorAll(
	".lightbox-image-wrapper"
);
let lightboxThumbnailsLen = lightboxImageThumbnails.length;
console.log(lightboxThumbnailsLen);
let i = 0;
let j = 0;

export const showLightbox = () => {
	mainImage.addEventListener("click", () => {
		lightbox.classList.add("show");
	});
	closeIcon.addEventListener("click", () => {
		lightbox.classList.remove("show");
		setTimeout(() => {
			lightboxImageThumbnails.forEach((thumbnail) =>
				thumbnail.classList.remove("active")
			);
			lightboxImageThumbnails[0].classList.add("active");
			LightboxMainImage.src = "images/image-product-" + 1 + ".jpg";
		}, 1000);
	});

	previousBtn.addEventListener("click", () => {
		lightboxImageThumbnails[i].classList.remove("active");
		i = (i - 1 + lightboxThumbnailsLen) % lightboxThumbnailsLen;
		lightboxImageThumbnails[i].classList.add("active");
		LightboxMainImage.src = "images/image-product-" + (i + 1) + ".jpg";
	});

	nextBtn.addEventListener("click", () => {
		lightboxImageThumbnails[i].classList.remove("active");
		i = (i + 1) % lightboxThumbnailsLen;
		lightboxImageThumbnails[i].classList.add("active");
		LightboxMainImage.src = "images/image-product-" + (i + 1) + ".jpg";
	});

	// previousBtn.addEventListener("click", () => {
	// 	j = ((j - 1 + lightboxThumbnailsLen) % lightboxThumbnailsLen) + 1;
	//     LightboxMainImage.src = "images/image-product-" + j + ".jpg";
	// });

	// nextBtn.addEventListener("click", () => {
	// 	j = ((j + 1) % lightboxThumbnailsLen) - 1;
	//     LightboxMainImage.src = "images/image-product-" + j + ".jpg";
	// });
};
