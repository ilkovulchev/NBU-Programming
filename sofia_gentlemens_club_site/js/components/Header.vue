<template src="./../../html/components/Header.html"></template>

<script>

	export default {
		data: function() {
			return {

			};
		},
    methods: {
      setActiveTab( tabID ) {
        this.$store.state.selectedTab = tabID;
      },
    },
	}
</script>
