<template>
	<div class="sgc_site">
		<div class="sgc_site_wrapper">
			<header-file></header-file>
			<keep-alive>
				<component :is="$store.state.selectedTab"></component>
			</keep-alive>
		</div>
	</div>
</template>

<script>

  import Header from './../js/components/Header.vue';
	import Home from './../js/components/Home.vue';
  import Roster from './../js/components/Roster.vue';
  import ScheduleResults from './../js/components/ScheduleResults.vue';
	import Gallery from './../js/components/Gallery.vue';

	export default {
		components: {
      headerFile: Header,
			home: Home,
      roster: Roster,
      scheduleResults: ScheduleResults,
			gallery: Gallery,
		},
		data: function() {
			return {

			};
		},
		methods: {
			// closeImage() {
			//
			// 	var imagesArray = document.getElementsByClassName('sgc_gallery_image');
			// 	if (imagesArray.length > 0) {
			// 		console.log('this.$store.state.closeOpenedImage', this.$store.state.closeOpenedImage);
			// 		for (var i = 0; i < imagesArray.length; i++) {
			// 			if (imagesArray[i].style.transform == 'scale(4)' && this.$store.state.closeOpenedImage) {
			//
			// 				console.log('aasas', imagesArray[i].style.transform);
			// 			}
			// 		}
			// 	}
			// },
		},
	}
</script>
