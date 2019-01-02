<template>
	<div class="home">
		<b-jumbotron>
			<img alt="Vue logo" src="../assets/logo.png">
		</b-jumbotron>
 
		<b-button @click="onAxios"><i class="fas fa-cat"></i> Click</b-button>

		 <b>Info:</b> {{ info }}
	</div>
</template>

<script>
export default {
	name: 'home',

	computed: {
		info() {
			return this.$store.state.info
		}
	},
mounted: function() {
	this.onAxios();
},

	methods: {
		onAxios () {
			this.$store.commit('changeAxios', 'click')
		}
	}
};
</script>
