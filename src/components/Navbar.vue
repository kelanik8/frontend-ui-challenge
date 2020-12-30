<template>
  <header :class="'header-' + navLevel">
    <nav
      class="navbar navbar-expand-lg py-4 fixed-top"
      :style="`background: ${navBackground}`"
    >
      <div class="container-fluid">
        <a class="navbar-brand" v-if="navLevel === 1" href="#">
          <img src="@/assets/logo-box-1.svg" class="nav-brand-box" alt="Logo" />
          <img src="@/assets/logo-1.svg" alt="Logo" />
        </a>
        <a class="navbar-brand" v-else-if="navLevel === 2" href="#">
          <img src="@/assets/logo-box-2.svg" class="nav-brand-box" alt="Logo" />
          <img src="@/assets/logo-2.svg" alt="Logo" />
        </a>
        <a class="navbar-brand" v-else-if="navLevel === 3" href="#">
          <img src="@/assets/logo-box-3.svg" class="nav-brand-box" alt="Logo" />
          <img src="@/assets/logo-3.svg" alt="Logo" />
        </a>
        <a class="navbar-brand" v-else-if="navLevel === 4" href="#">
          <img src="@/assets/logo-box-4.svg" class="nav-brand-box" alt="Logo" />
          <img src="@/assets/logo-4.svg" alt="Logo" />
        </a>
        <a class="navbar-brand" v-else-if="navLevel === 5" href="#">
          <img src="@/assets/logo-box-5.svg" class="nav-brand-box" alt="Logo" />
          <img src="@/assets/logo-5.svg" alt="Logo" />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mainNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">For Team</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">For Individuals</a>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">Sign in</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    navBackground: {
      type: String,
      required: true,
    },
    navLevel: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";

.header-1 {
  .nav-link {
    font-size: 18px;
    color: #fff;
    line-height: 1.625em;
  }
}
.header-2 {
  .nav-link {
    font-size: 18px;
    color: #1b2733;
    line-height: 1.625em;
  }
}
.header-3 {
  .nav-link {
    font-size: 18px;
    color: #fff;
    line-height: 1.625em;
  }
}
.header-4 {
  .nav-link {
    color: #1b2733;
    font-size: 18px;
    line-height: 1.625em;
  }
}

.nav {
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 60px;
}

.nav-brand-box {
  margin-right: 6px;
  max-width: 36px;
}
</style>
