<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ $store.state.score }}</h1>
    <h1>{{ $store.getters.scoreButPretty }}</h1>
    <p>
      <button @click="$store.commit('INCREMENT', 10)">+ plus</button>
      <button @click="$store.commit('DECREMENT')">- minus</button>

      <button @click="$store.dispatch('increment')">+ plus</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style lang="scss" scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $dark-yellow;
}
</style>
