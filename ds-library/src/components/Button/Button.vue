<template>
	<div>
		<v-btn
		v-bind="$attrs"
		:color="color"
		:type="type"
		:[computeSizeAttribute]="sizeValidator"
		v-on="$listeners"
    	>
			<!-- pass through scoped slots -->
			<template v-for="(_, scopedSlotName) in $scopedSlots" v-slot:[scopedSlotName]="slotData">
				<slot :name="scopedSlotName" v-bind="slotData" />
			</template>

			<!-- pass through normal slots -->
			<template v-for="(_, slotName) in $slots" v-slot:[slotName]>
				<slot :name="slotName" />
			</template>
    	</v-btn>
	</div>
</template>

<script>
import { VBtn } from 'vuetify/lib'
import loggerMixin from '../../mixins/loggerMixin'
//import { FacebookLoader, RingLoader } from "vue-spinners-css"

/**
 * Button component.
 */
export default {
	name: 'Button',
	inheritAttrs: false,
	components: {
		VBtn
	},
	mixins: [loggerMixin],
	props: {
		/**
		 * The color of the button
		 * @values primary, secondary, accent, error, info, success, warning
		 *
		 */
		color: {
			type: String,
			default: 'success'
		},
		/**
		 * The size of the button
		 * @values x-small, small, normal, large, x-large
		 */
		size: {
			type: String,
			default: 'normal'
		},
		/**
		 * Set the button's type attribute
		 * @values button, submit, reset
		 */
		 type: {
			type: String,
			default: 'button'
		}
	},
	computed: {
		sizeValidator() {
			const sizeValues = ['x-small', 'small', 'large', 'x-large'];
			return sizeValues.includes(this.size);
		},
		computeSizeAttribute() {
			return this.sizeValidator ? this.size : null;
		}
	}
}
</script>
