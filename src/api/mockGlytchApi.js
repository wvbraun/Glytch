
const delay = 1000;

const images = [
  {
    name: "nostalgia-smeared",
    url: "http://localhost:3000/img/nostalgia-smeared.jpg"
  },
  {
    name: "bamboo",
    url: "http://localhost:3000/img/bamboo.png"
  }
];

class MockGlytchApi {
  static getAllImages() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const _images = Object.assign([], images);
        resolve(Object.assign({},
          { images: _images,
            image: _images[0]
          })
        );
      }, delay);
    });
  }

  static uploadImage(image) {
    image = Object.assign({}, image);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        images.push(image);
      }, delay);
    });
  }
}

export default MockGlytchApi;
