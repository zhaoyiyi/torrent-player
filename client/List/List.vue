<template>
  <section>
    <el-input placeholder="search or link" v-model="searchText" @keyup.enter="handleSearch" class="input-with-select">
      <el-select v-model="source" slot="prepend" placeholder="Source">
        <el-option label="dmhy" value="dmhy"></el-option>
        <el-option label="meijuhui" value="meijuhui"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
    </el-input>
  </section>
</template>

<script>
export default {
  data() {
    return {
      source: '',
      searchText: '',
    };
  },
  methods: {
    handleSearch(value) {
      console.log(value);
    },
  },
};
</script>

<style>
.el-select .el-input {
  width: 110px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
