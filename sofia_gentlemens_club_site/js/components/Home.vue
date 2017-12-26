<template src="./../../html/components/Home.html"></template>

<script>

	export default {
		data: function() {
			return {
				slideIndex: 1,
			};
		},
		mounted() {
			this.showSlides(this.slideIndex);
		},
		methods: {
			plusSlides(n) {
				// Next/previous controls
				this.showSlides(this.slideIndex += n);
			},
			currentSlide(n) {
				// Thumbnail image controls
				this.showSlides(this.slideIndex = n);
			},
			showSlides(n) {
				var i;
			  var slides = document.getElementsByClassName("mySlides");
			  var dots = document.getElementsByClassName("dot");
			  if (n > slides.length) {this.slideIndex = 1}
			  if (n < 1) {this.slideIndex = slides.length}
			  for (i = 0; i < slides.length; i++) {
			      slides[i].style.display = "none";
			  }
			  for (i = 0; i < dots.length; i++) {
			      dots[i].className = dots[i].className.replace(" active", "");
			  }
			  slides[this.slideIndex-1].style.display = "block";
			  dots[this.slideIndex-1].className += " active";
			}
		}
	}
</script>
