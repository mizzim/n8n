import N8nSelect from './Select.vue';
import N8nOption from '../N8nOption';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Atoms/Select',
	component: N8nSelect,
	argTypes: {
		disabled: {
			control: {
				type: 'boolean',
			},
		},
		size: {
			control: {
				type: 'select',
				options: ['large', 'medium', 'small', 'mini'],
			},
		},
		loading: {
			control: {
				type: 'boolean',
			},
		},
		filterable: {
			control: {
				type: 'boolean',
			},
		},
		defaultFirstOption: {
			control: {
				type: 'boolean',
			},
		},
	},
	parameters: {
		backgrounds: { default: '--color-background-light' },
	},
};

const methods = {
	onInput: action('input'),
	onChange: action('change'),
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: {
		N8nSelect,
		N8nOption,
	},
	template: '<n8n-select v-bind="$props" v-model="val" @input="onInput" @change="onChange"><n8n-option value="1">op1</n8n-option><n8n-option value="2">op2</n8n-option></n8n-select>',
	data() {
		return {
			val: '',
		};
	},
	methods,
});

export const Input = Template.bind({});

export const Filterable = Template.bind({});
Filterable.args = {
	filterable: true,
	defaultFirstOption: true,
};

const selects = ['large', 'medium', 'small', 'mini'].map((size) => `<n8n-select v-bind="$props" v-model="val" @input="onInput" @change="onChange" size="${size}"><n8n-option value="1">op1</n8n-option><n8n-option value="2">op2</n8n-option></n8n-select>`).join('');

const ManyTemplate = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: {
		N8nSelect,
		N8nOption,
	},
	template: `<div class="multi-container">${selects}</div>`,
	methods,
	data() {
		return {
			val: '',
		};
	},
});

export const Sizes = ManyTemplate.bind({});
Sizes.args = {
	type: 'text',
	label: 'text input:',
	placeholder: 'placeholder...',
};

const selectsWithIcon = ['xlarge', 'large', 'medium', 'small', 'mini'].map((size) => `<n8n-select v-bind="$props" v-model="val" @input="onInput" size="${size}"><n8n-icon icon="search" slot="prefix" /><n8n-option value="1">op1</n8n-option><n8n-option value="2">op2</n8n-option></n8n-select>`).join('');

const ManyTemplateWithIcon = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: {
		N8nSelect,
		N8nOption,
	},
	template: `<div class="multi-container">${selectsWithIcon}</div>`,
	methods,
	data() {
		return {
			val: '',
		};
	},
});


export const WithIcon = ManyTemplateWithIcon.bind({});
WithIcon.args = {
	type: 'text',
	label: 'text input:',
	placeholder: 'placeholder...',
};
