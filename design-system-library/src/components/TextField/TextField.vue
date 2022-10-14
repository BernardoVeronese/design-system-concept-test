<template>
	<div>
		<v-text-field
		v-bind="$attrs"
		:value="value"
		:color="color"
		:label="label"
		v-on="{
			...$listeners,
      		change: event => $emit('change', event.target.value)
		}">
			<!-- pass through scoped slots -->
			<template v-for="(_, scopedSlotName) in $scopedSlots" v-slot:[scopedSlotName]="slotData">
				<slot :name="scopedSlotName" v-bind="slotData" />
			</template>

			<!-- pass through normal slots -->
			<template v-for="(_, slotName) in $slots" v-slot:[slotName]>
				<slot :name="slotName" />
			</template>
        </v-text-field>
	</div>
</template>

<script>
import { VTextField } from 'vuetify/lib'

/**
 * Text field component.
 */
export default {
	name: 'TextField',
	inheritAttrs: false,
	components: {
		VTextField
	},
	props: {
		/**
		 * Sets input label
		 *
		 */
         label: {
			type: String,
			default: undefined
		},
		/**
		 * The color for the text field
		 * @values primary, secondary, accent, error, info, success, warning
		 *
		 */
		color: {
			type: String,
			default: 'success'
		},
		/**
		 * Puts the input in an error state and passes through custom error messages. 
		 * Will be combined with any validations that occur from the rules prop. 
		 * This field will not trigger validation
		 *
		 */
		errorMessages: {
			type: [String, Array],
			default: () => []
		},
		/**
		 * The input's value
		 *
		 */ 
		value: {
			default: undefined
		}
	}
}
</script>
