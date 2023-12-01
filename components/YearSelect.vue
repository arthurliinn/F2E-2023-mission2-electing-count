<template>
  <div class="content">
    <div class="logo">
      <img src="~/assets/images/logo.svg" alt="">
    </div>
    <div class="year_selector">
      <ul>
        <li class="year_btn" v-for="(year,index) in years" :key="index">
          <a>
            {{ year }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
let years: Array<string> = ['1996','2000','2004','2008','2012','2016','2020'];

</script>

<style lang="scss">
@import '~/assets/scss/components/YearSelect.scss';
.year_btn{
  // background-color: $gray-1000;
}
</style>