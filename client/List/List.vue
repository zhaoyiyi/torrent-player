<template>
  <section>
    <el-input placeholder="search or link" v-model="searchText" @keyup.enter="handleSearch" class="input-with-select">
      <el-select v-model="source" slot="prepend" placeholder="Source">
        <el-option label="dmhy" value="dmhy"></el-option>
        <el-option label="meijuhui" value="meijuhui"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
    </el-input>
    <ul v-if="searchResults.length">
      <li v-for="item in searchResults" :key="item.link" @click="handleSelect(item)">
        <h3>{{item.title}}</h3>
      </li>
    </ul>
  </section>
</template>

<script>
import { ipcRenderer } from 'electron';

export default {
  data() {
    return {
      source: '',
      searchText: '',
      searchResults: [],
    };
  },
  created() {
    ipcRenderer.on('search-result', (e, searchResults) => {
      this.searchResults = searchResults;
    });
  },
  methods: {
    handleSearch() {
      console.log('search')
      ipcRenderer.send('search', {
        source: this.source,
        searchText: this.searchText,
      });
    },
    handleSelect(item) {
      ipcRenderer.send('select-file', item);
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
