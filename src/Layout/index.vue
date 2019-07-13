<template>
    <div>
      <h1>头部</h1>
      <h1>layout</h1>
      <nav>
        <ul>
          <router-link to="/studio" tag="li"> studio</router-link>
          <router-link to="/map" tag="li"> map</router-link>
          <router-link to="/mining" tag="li"> mining</router-link>
          <router-link to="/more" tag="li"> more</router-link>
          
        </ul>
      </nav>
      <router-view></router-view>
    </div>
</template>

<script>

export default {
  name:'Layout',
  

}
</script>

<style>
.router-link-active {
  color: red;
}

</style>
