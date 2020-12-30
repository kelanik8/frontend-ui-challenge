<template>
  <div id="app">
    <div id="signup-container">
      <div class="signupnav w-100 mr-5">
        <ul class="navbar-nav flex-row py-4 justify-content-end mr-5">
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">Sign in</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">Download</a>
          </li>
        </ul>
      </div>
      <SignUpContainer />
    </div>
    <HeroSection />

    <section class="page-block hero-section-2">
      <div class="nav-slick">
        <Navbar :navLevel="2" navBackground="#ffe7aa" />
      </div>
      <div class="main-content">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-8">
              <img src="@/assets/home-hero.jpg" class="hero-img" alt="Hero" />
            </div>
            <div class="col-sm-12 col-md-4 d-flex align-items-center justify-content-center">
              <div class="content">
                <h1 class="headline">Say goodbye to busywork</h1>
                <p class="subtext">
                  Most “productivity” tools get in your way and constantly disrupt your flow.
                  There’s a more enlightened way to work. Dropbox helps people be organized, stay
                  focused, and get in sync with their teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-block section-3">
      <div class="nav-slick">
        <Navbar :navLevel="3" navBackground="#0d2f81" />
      </div>
      <div class="main-content">
        <div class="container">
          <div class="title">
            File storage and sharing are <br />
            just the beginning
          </div>
          <div class="row mt-3 position-relative">
            <div class="col-sm-12 col-md-5 position-relative">
              <div class="sticky-scroll-nav" style="top: 100px;width: 30vw;" id="sticky-scroll-nav">
                <div class="tour-item tour-1">
                  <h3 class="tour-title">
                    Be organized
                  </h3>
                  <p class="sub-description">
                    Bring traditional files, cloud content, Dropbox Paper docs, and web shortcuts
                    together in one place—and work the way that works for you.
                  </p>
                </div>
                <div class="tour-item tour-1">
                  <h3 class="tour-title">
                    Stay focused
                  </h3>
                  <p class="sub-description">
                    Personalized suggestions give you files and folders when you need them so you
                    spend less time searching.
                  </p>
                </div>
                <div class="tour-item tour-1">
                  <h3 class="tour-title">
                    Get in sync
                  </h3>
                  <p class="sub-description">
                    Coordinate with your team and push projects forward with the tools you use every
                    day—all within Dropbox.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-7">
              <div class="tour-images">
                <img src="@/assets/tour-1.png" alt="image 1" />
                <img src="@/assets/tour-2.png" alt="image 1" />
                <img src="@/assets/tour-3.png" alt="image 1" />
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <hr style="width: 100%; opacity: 0.5; background: #fff" />
          <div class="learn-more">
            <div class="d-flex flex-wrap justify-content-lg-between">
              <h1>
                Learn more about the <br />
                benefits of Dropbox
              </h1>

              <button class="features-btn">See Features</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-block section-4">
      <div class="nav-slick">
        <Navbar :navLevel="4" navBackground="#fff" />
      </div>
      <div class="main-content" style="padding-bottom: 100px">
        <div class="container">
          <div class="title">Find the right Dropbox plan for you</div>
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="main-title">For freelancers and solo workers</div>
              <button class="dropbox-btn">Get Dropbox</button>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="main-title">For businesses and teams of any size</div>
              <button class="dropbox-btn">Get Dropbox Business</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
/* eslint-disable */
import Navbar from "@/components/Navbar.vue";
import HeroSection from '@/components/HeroSection.vue'
import SignUpContainer from "@/components/SignUpContainer.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Navbar, SignUpContainer, Footer, HeroSection },
  mounted() {
    const SignUpContainer = document.getElementById("signup-container");
    const TourNavContainer = document.getElementById("sticky-scroll-nav");
    window.onscroll = function() {
      if (document.scrollingElement.scrollTop >= 400) {
        SignUpContainer.classList.add("hide-signup");
        SignUpContainer.classList.remove("show-signup");
      } else {
        SignUpContainer.classList.add("show-signup");
        SignUpContainer.classList.remove("hide-signup");
      }
      if (
        document.scrollingElement.scrollTop >= 1759 &&
        document.scrollingElement.scrollTop <= 2860
      ) {
        TourNavContainer.classList.add("position-sticky");
        TourNavContainer.classList.remove("position-relative");
      } else {
        TourNavContainer.classList.add("position-relative");
        TourNavContainer.classList.remove("position-sticky");
      }
    };
  }
};
</script>

<style lang="scss">
@import "@/scss/main.scss";

.page-block {
  position: relative;
  min-height: 95vh;
}

.nav-slick {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  clip: rect(auto, auto, auto, auto);
  // pointer-events: none;
}

.main-content {
  padding-top: 100px;
}


.hero-section-2 {
  background: #ffe7aa;
  .hero-img {
    width: 100%;
    transform: translateY(-140px);
  }
  .content {
    margin-left: 40px;
    // margin-left: 80px;
    margin-top: -30px;
    margin-top: -30px;
  }
  .headline {
    margin-bottom: 20px;
    color: #0d2f81;
    font-size: 32px;
    font-weight: bold;
    line-height: 38px;
  }
  .subtext {
    font-size: 16px;
    line-height: 26px;
    margin: 0;
    font-weight: 400;
    color: #000;
  }
}

.section-3 {
  background: #0d2f81;

  .title {
    color: #ffe7aa;
    font-size: 40px;
    line-height: 46px;
    font-weight: 500;
  }

  .learn-more {
    padding: 120px 0;
  }
  h1 {
    font-size: 40px;
    line-height: 46px;
    color: #ffe7aa;
  }
  .features-btn {
    background-color: #fff;
    color: #000;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 16px;
    line-height: 26px;
    padding-top: 8px;
    padding-bottom: 8px;
    cursor: pointer;
    position: relative;
    border: 1px solid transparent;
    font-weight: 400;
    text-decoration: none;
    text-align: center;
    height: 50px;
  }
  .sticky-scroll-nav {
    .tour-item {
      margin-top: 30px;
      .tour-title {
        margin-bottom: 20px;
        font-size: 25px;
        padding-top: 10px;
        color: #fff;
        line-height: 32px;
        font-weight: 500;
      }
      .sub-description {
        color: #fff;
        margin: 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
  .tour-images img {
    width: 100%;
  }
}

.section-4 {
  background: #fff;
  min-height: 50vh;
  .title {
    margin-bottom: 50px;
    font-size: 25px;
    line-height: 32px;
    font-weight: bold;
    color: #000;
  }
  .main-title {
    font-size: 40px;
    line-height: 46px;
    margin-bottom: 50px;
    font-weight: bolder;
  }
  .dropbox-btn {
    background-color: #0061ff;
    color: #fff;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 16px;
    line-height: 26px;
    padding-top: 8px;
    padding-bottom: 8px;
    cursor: pointer;
    position: relative;
    border: 1px solid transparent;
    font-weight: 400;
    text-decoration: none;
    text-align: center;
  }
}

@keyframes transition {
  0% {
    transform: translateY(-62px);
  }
  85% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}

.hero-arrow-button {
  width: 40px;
  height: 60px;
  -webkit-appearance: none;
  margin-top: 35px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  transform: translateY(-50%);
  overflow: hidden;
  img {
    margin: 12px 0;
    transform: translateY(-62px);
    animation: transition 2s cubic-bezier(0.15, 1, 0.75, 1) 1s infinite;
  }
}
</style>
