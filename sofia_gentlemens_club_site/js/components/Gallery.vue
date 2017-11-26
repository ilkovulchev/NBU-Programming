<template src="./../../html/components/Gallery.html"></template>

<script>

	export default {
		data: function() {
			return {
        photos: {},
			};
		},
    mounted() {
      var galleryImage = document.getElementsByClassName('sgc_gallery_image');

      if (galleryImage) {

        for (var i = 0; i < galleryImage.length; i++) {
          galleryImage[i].style.backgroundImage = 'url(./../img/gallery_photo_' + (i + 1) + '.jpg)';
        }
      }
    },
    methods: {
      // openImage(imageClass) {
      //
      //   var image = document.getElementsByClassName(imageClass)[0];
      //   image.style.transform = 'scale(4)';
      //   // this.$store.state.closeOpenedImage = true;
      // }
    },
	}
</script>
