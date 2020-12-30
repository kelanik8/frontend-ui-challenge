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
          <img src="@/assets/arrow-1.svg" />
          <img src="@/assets/arrow-2.svg" />
        </button>
      </div>
    </div>
  </section>
</template>
<script>
/* eslint-disable */
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
