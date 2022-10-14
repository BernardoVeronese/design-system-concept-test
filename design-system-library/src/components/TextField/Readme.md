The text field component wraps the Vuetify implementation - check the [link to the API](https://vuetifyjs.com/en/api/v-text-field/).

Basic text field:

```jsx
<TextField color="primary" label="Try me!"></TextField>
```

The `v-model` directive works just as fine:

```vue
<template>
    <div class="wrapper">
        <TextField outlined v-model="text" hint="Write anything you want!"> </TextField>
        <p class="text-name">You have written {{ text ? text : placeholder }}</p>
    </div>
</template>
<script>

// You can also use 'exports.default = {}' style module exports.
export default {
  data() {
    return { 
        text: '', 
        placeholder: 'nothing so far'
    }
  }
}
</script>
<style scoped>
.wrapper {
  padding: 10px;
}
.text-name {
  color: red;
}
</style>
```
