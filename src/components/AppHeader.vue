<template>
<v-container fluid>
  <v-system-bar app fixed color="primary" height="40" width="100%">
    <v-row d-flex align="center" justify="end" class="mr-10">
      <v-spacer class="d-none d-lg-flex d-xl-flex"></v-spacer>
      <span width="12" height="12" class="mr-2">
        <v-img src="@/assets/home/icons/system-bar-call-answer.png" contain></v-img>
      </span>
      <span class="system-bar-phone ml-2 mr-12">1300 857 501</span>
      <span width="10" height="10" class="mr-4">
        <a href="https://www.linkedin.com/company/pineapplenet/" target="_blank">
          <v-img src="@/assets/home/icons/system-bar-linkedin.png"></v-img>
        </a>
      </span>
      <span width="10" height="10">
        <a href="https://www.facebook.com/PineappleNetAU/" target="_blank">
          <v-img src="@/assets/home/icons/system-bar-facebook.png"></v-img>
        </a>
      </span>
    </v-row>
  </v-system-bar>
    <v-card
            height="80"
            width="100%"
            flat
            class="homefone app-bar mt-10 pt-4"
            style="position: fixed; z-index: 5"
    >
    <v-row align="center" justify="start">
      <span height="45" width="150" class="ml-10">
        <v-img src="@/assets/logo.svg" contain width="150" height="45"></v-img>
      </span>
    </v-row>
  </v-card>
</v-container>
</template>

<style scoped>

.v-btn-toggle > .v-btn.v-btn--active {
  color: #72BF44!important;
}
.app-bar-icon {
  display: inline-block;
  width: 10px;
  height: 10px;
}
.app-bar-menu {
  font-size: 13px;
  line-height: 24px;
  text-transform: none!important;
  font-style: normal;
  font-weight: 500;
  color: #000;
}
.app-bar-menu-bordered {
  border: solid 2px #51AD30!important;
  border-radius: 100px!important;
}
.system-bar-phone {
  font-size: 16px;
  color: #ffffff;
}
</style>

<script>

export default {
  name: 'AppHeader'
}
</script>
