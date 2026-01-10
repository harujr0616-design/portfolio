class AutoSlider {
  constructor() {
    this.slider = document.querySelector('.slidemain');
    this.sliderSub = document.querySelector('.mainimgbox');
    this.slides = this.sliderSub.children;
    this.index = 0;
    this.slideCount = this.slides.length;
    this.start();
  }

  start() {
    setInterval(() => {
      this.index++;

      if (this.index >= this.slideCount) {
        this.index = 0;
      }

      this.slider.style.transform =
        `translateX(-${this.index * 100}%)`;
    }, 3000); // 3秒ごと
  }
}

new AutoSlider();
