//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('ul');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

// Mainslider
if (document.querySelector('.mainslider__body')) {
	let mainsliderBody = new Swiper('.mainslider__body', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		pagination: {
			el: '.mainslider__pagination',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.mainslider__arrow_next',
			prevEl: '.mainslider__arrow_prev',
		},
		/*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
		on: {
			lazyImageReady: function () {
				ibg();
			},
		}
		// And if we need scrollbar
		//scrollbar: {
		//	el: '.swiper-scrollbar',
		//},
	});
	let mainsliderImages = document.querySelectorAll('.mainslider__image');
	let mainsliderDotts = document.querySelectorAll('.mainslider__dots .swiper-pagination-bullet');

	for (let i = 0; i < mainsliderImages.length; i++) {
		const mainsliderImage = mainsliderImages[i].querySelector('img').getAttribute('src');
		mainsliderDotts[i].style.backgroundImage = "url('" + mainsliderImage + "')";
	}
};

// Bottom-Slider
if (document.querySelector('.bottom-slider')) {
	let bottomSlider = new Swiper('.bottom-slider__body ', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		// slidesPerView: 4,
		spaceBetween: 15,
		autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		pagination: {
			el: '.bottom-slider__pagination',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.bottom-slider__arrow_next',
			prevEl: '.bottom-slider__arrow_prev',
		},

		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 25,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1201: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
		},

	});
};
