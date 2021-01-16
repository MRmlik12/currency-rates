<template>
  <div>
    <br>
    <a id="about">Copyright 2021&copy; Currency Rates is under MIT lincense.</a><br>
    <div id="icons">
      <i class="icon-github-circled" title="profile" @click="githubClicked"></i>
      <i class="icon-flow-branch" title="repo" @click="githubClicked"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    githubClicked() {
      window.open('https://github.com/MRmlik12');
    },
    repoClicked() {
      window.open('https://github.com/MRmlik12/currency-rates');
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 25px;
  color: white;
}

#about {
  color: white;
}

#icons {
  color: white;
  font-size: 30px;
  margin: 4px;
}

.icon-github-circled:hover{
  cursor: pointer;
}

.icon-flow-branch:hover{
  cursor: pointer;
}
</style>
