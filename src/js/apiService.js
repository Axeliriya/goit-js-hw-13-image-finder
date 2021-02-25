const apiService = {
  apiKey: '20161669-2a892b4c586ef08617ab50d2d',
  page: 1,

  async getFetch(search) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${this.page}&per_page=12&key=${this.apiKey}`;
    this.page += 1;

    return fetch(url)
      .then(response => response.json())
      .catch(err => fall(err));
  },
};

export default apiService;
