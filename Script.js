class Script{
    constructor(){
        this.slider = document.querySelector('.snapbox');
        this.next = document.querySelector('.arrow.right');
        this.prev = document.querySelector('.arrow.left');
        this.bindEvents();
    }

    bindEvents(){
        this.next.addEventListener('click',()=>{this.slideNext();});
        this.prev.addEventListener('click',()=>{this.slidePrev();});
    }

    slideNext(){
        this.slider.scrollLeft+=300;
    }

     slidePrev(){
        this.slider.scrollLeft-=300;
    }

}

new Script();