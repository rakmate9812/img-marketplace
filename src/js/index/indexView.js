export default class View {
  _data;

  render(data) {
    // TODO
    // if (!data || (Array.isArray(data) && data.length === 0))
    //   return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _generateMarkup() {
    // implementing in sub-classes
  }
}

export class TrendingView extends View {
  _parentElement = document.querySelector(".swiper-wrapper");

  _generateMarkup() {
    return this._data
      .map(
        (img) => `
        <div class="swiper-slide gallery-item">
          <img src="${img.urls.regular}" alt="${img.alt_description}" class="gallery-image">
        </div>
      `
      )
      .join("");
  }
}
