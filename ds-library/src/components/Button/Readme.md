The button component wraps the Vuetify implementation - check the [link to the API](https://vuetifyjs.com/en/api/v-btn/).

Basic button:

```jsx
<Button color="primary" size="large">{{$t("message.hello")}}</Button>
```

Button also accepts icons as slots. An example using the `fab` prop:

```jsx
<Button fab color="secondary" size="x-large">
  <v-icon>house</v-icon>
</Button>
```

Loading button:

```jsx
<Button loading></Button>
```

Disabled button:

```jsx
<Button disabled></Button>
```

You can also use the Single File Component Format

```vue
<template>
    <div class="wrapper">
        <Button @click.native="pushButton">{{$t("message.hello")}}</Button>
        <hr />
        <p class="text-name">Next Dog Name: {{ dogName }}</p>
    </div>
</template>
<script>
const dogNames = require('dog-names').all

// You can also use 'exports.default = {}' style module exports.
export default {
  data() {
    return { numClicks: 0, dogName: dogNames[0] }
  },
  methods: {
    pushButton() {
      this.numClicks += 1
      this.dogName = dogNames[this.numClicks]
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
