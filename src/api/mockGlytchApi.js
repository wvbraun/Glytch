
const delay = 1000;

const images = [
  {
    alt: "nostalgia-smeared.jpg",
    src: "http://localhost:3000/img/nostalgia-smeared.jpg"
  },
  {
    alt: "bamboo.png",
    src: "http://localhost:3000/img/bamboo.png"
  }
];

class MockGlytchApi {
  static getAllImages() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const _images = Object.assign([], images);
        resolve(Object.assign({}, {
          images: _images,
          image: _images[0]
        }));
      }, delay);
    });
  }

  static addImage(image) {
    // image = Object.assign({}, image);
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let img = { alt: image.name };
        reader.onload = (event) => {
          img.src = reader.result;
          images.push(img);
          resolve(Object.assign({}, img));
        }
        reader.readAsDataURL(image)
      }, delay);
    });
  }
}

export default MockGlytchApi;
