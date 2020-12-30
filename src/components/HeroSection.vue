<template>
  <section class="page-block hero-section">
    <div class="nav-slick">
      <Navbar :navLevel="1" navBackground="#0d2f81" />
    </div>
    <div class="main-content">
      <div class="container pt-4">
        <h3 class="title">Dropbox</h3>
        <div class="main-title">
          Focus on the <br />
          work that <br />
          matters
        </div>
        <p class="sub-text">
          Dropbox is the world’s first smart workspace. We bring all <br />
          your team’s content together while letting you use the tools <br />
          you love. And we help cut through the clutter, surfacing <br />
          what matters most.
        </p>
        <button class="hero-arrow-button">
          <svg width="24" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.456 34.144c2.112-3.696 7.008-8.064 10.992-9.552v-3.408c-4.128 1.632-8.256 5.328-10.272 8.16V.016h-2.88v29.328C8.328 26.512 4.248 22.816.12 21.232v3.36c3.984 1.44 8.784 5.856 10.896 9.552h1.44z"
              fill="#FFE7AA"
            ></path></svg
          ><svg width="24" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.456 34.144c2.112-3.696 7.008-8.064 10.992-9.552v-3.408c-4.128 1.632-8.256 5.328-10.272 8.16V.016h-2.88v29.328C8.328 26.512 4.248 22.816.12 21.232v3.36c3.984 1.44 8.784 5.856 10.896 9.552h1.44z"
              fill="#FFE7AA"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: { Navbar }
};
</script>
<style lang="scss">
.hero-section {
  min-height: 92vh;
  background: #0d2f81;
  .title {
    margin-bottom: 20px;
    color: #ffe7aa;
    font-size: 25px;
    line-height: 32px;
    font-weight: bolder;
  }
  .main-title {
    font-size: 71px;
    line-height: 79px;
    letter-spacing: -1px;
    font-weight: bolder;
    color: #ffe7aa;
    margin-bottom: 20px;
  }
  p.sub-text {
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    color: #fff;
    font-size: 16px;
    line-height: 26px;
  }
}
</style>
