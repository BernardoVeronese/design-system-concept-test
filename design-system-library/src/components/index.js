import Vue from 'vue';

import Button from './Button/Button.vue';
import TextField from './TextField/TextField.vue';

const Components = {
    Button,
    TextField
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;