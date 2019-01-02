 <template>

	<div>
		Doing vSelect:
		<v-select multiple :options="options"></v-select>

		Editor
		<VueTrix v-model="editorContent"></VueTrix>
		<br />

	</div>
</template>

<style lang="less">
.dropdown-toggle::after	{
	display : none !important;
}
</style>


<script>
import VueTrix from 'vue-trix'

export default {
	name: 'trix',

	data: function () {
		return { 
			editorContent : '',
			options : ["red", "orange", "yellow", "green", "blue"]
			};
	},
	
	components: {
		VueTrix
  	}

};
</script>
