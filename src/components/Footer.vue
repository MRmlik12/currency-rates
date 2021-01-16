<template>
  <div>
    <br>
    <div>
      <a>Currency Rates is under <a class="link" href="https://github.com/MRmlik12/currency-rates/blob/master/LICENSE.md">MIT lincense</a><br></a>
      <a>This data is from <a class="link" href="https://exchangeratesapi.io">exchangeratesapi.io</a></a>
    </div>
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
a {
  text-decoration: none;
  color: white;
}

.link:hover {
  color: darkorange;
  cursor: pointer;
}

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
