document.addEventListener("DOMContentLoaded", function() {
  console.log("Non-inclusive site loaded.");
});


const apiGallery = document.getElementById('apiGallery');
const accessKey = 'Hska7ChkQo4iN2mOOz5BVqzRCCQ84RI8WX8brOUF2K4JxhwtbFXCx8yW'; // keep this safe!

async function loadTravelImages() {
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=holiday travel&per_page=12&client_id=${accessKey}`);
    const data = await response.json();

    apiGallery.innerHTML = ''; // Clear content
    data.results.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo.urls.small;
      img.alt = photo.alt_description || "Travel Image";
      img.classList.add('gallery-image');
      apiGallery.appendChild(img);
    });
  } catch (error) {
    console.error('Error loading travel images:', error);
    apiGallery.innerHTML = `<p>Error loading images. Please try again later.</p>`;
  }
}

document.addEventListener('DOMContentLoaded', loadTravelImages);

  