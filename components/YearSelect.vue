<template>
  <div class="content">
    <div class="logo">
      <img src="~/assets/images/logo.svg" alt="">
      <p>選擇查詢年份</p>
    </div>
    <div class="year_selector">
      <ul>
        <li class="year_btn" v-for="(year,index) in years" :key="index">
          <NuxtLink to="/ElectingCountPage">
            {{ year }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="footer_guys">
      <img class="pc_guys" src="~/assets/images/little_guy.png" alt="">
      <img class="mobile_guys" src="~/assets/images/little_guy_mobile.png" alt="">
    </div>
  </div>
</template>

<script lang="ts" setup>
let years: Array<string> = ['1996','2000','2004','2008','2012','2016','2020'];

</script>

<style lang="scss">
@import '~/assets/scss/components/YearSelect.scss';
</style>