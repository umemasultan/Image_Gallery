const filterItems = document.querySelectorAll(".item");
const filterImages = document.querySelectorAll(".gallery .image");

filterItems.forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector(".item.active").classList.remove("active");
    item.classList.add("active");

    let filterName = item.getAttribute("data-name");

    filterImages.forEach(image => {
      let imageCategory = image.getAttribute("data-name");

      if (filterName === "all" || filterName === imageCategory) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });
});

// DOM Elements
const previewBox = document.querySelector(".preview-box");
const shadow = document.querySelector(".shadow");
const closeIcon = document.querySelector(".icon.fa-times");
const categoryPara = document.querySelector(".title p");
const previewImg = document.querySelector(".image-box img");

// Fullscreen preview image function
function preview(element) {
  document.body.style.overflow = "hidden";
  const selectedPrevImg = element.querySelector("img").src;
  const selectedImgCategory = element.dataset.name;

  categoryPara.textContent = selectedImgCategory;
  previewImg.src = selectedPrevImg;

  previewBox.classList.add("show");
  shadow.classList.add("show");
}

// Close preview
closeIcon.addEventListener("click", () => {
  previewBox.classList.remove("show");
  shadow.classList.remove("show");
  document.body.style.overflow = "auto";
});

// Click event for images
document.querySelectorAll(".gallery .image").forEach(image => {
  image.addEventListener("click", () => {
    preview(image);
  });
});
