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
  import Roster from './../components/Roster.vue';
  import ScheduleResults from './../components/ScheduleResults.vue';


	export default {
		components: {
      headerFile: Header,
			home: Home,
      roster: Roster,
      scheduleResults: ScheduleResults,
		},
		data: function() {
			return {

			};
		},
	}
</script>
