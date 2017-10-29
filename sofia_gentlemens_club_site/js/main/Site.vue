<template>
	<div class="sgc_site_wrapper">
    <header-file></header-file>
    <keep-alive>
      <component :is="$store.state.selectedTab"></component>
    </keep-alive>
    <!-- <home></home>
    <schedule-results></schedule-results> -->
	</div>
</template>

<script>

  import Header from './../components/Header.vue';
	import Home from './../components/Home.vue';
  import ScheduleResults from './../components/ScheduleResults.vue';


	export default {
		components: {
      headerFile: Header,
			home: Home,
      scheduleResults: ScheduleResults,
		},
		data: function() {
			return {

			};
		},
	}
</script>
