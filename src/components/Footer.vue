<template>
  <footer class="footer-section pb-3">
    <div class="container">
      <div class="row footer-groups justify-content-between">
        <div class="col-sm-12 col-md-4 col-lg-2">
          <p class="footer-group-title">Dropbox</p>
          <ul class="footer-list">
            <li>
              <a href="#">Desktop app</a>
            </li>
            <li><a href="#">Mobile apps</a></li>
            <li><a href="#">Plans</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Fearutes</a></li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-2">
          <p class="footer-group-title">Products</p>
          <ul class="footer-list">
            <li>
              <a href="#">Plus</a>
            </li>
            <li><a href="#">Family</a></li>
            <li><a href="#">Professional</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Enterprise</a></li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-2">
          <p class="footer-group-title">Company</p>
          <ul class="footer-list">
            <li>
              <a href="#">About us</a>
            </li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Investor relations</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-2">
          <p class="footer-group-title">Support</p>
          <ul class="footer-list">
            <li>
              <a href="#">Help center</a>
            </li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Privacy & terms</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-2">
          <p class="footer-group-title">Community</p>
          <ul class="footer-list">
            <li>
              <a href="#">Developers</a>
            </li>
            <li><a href="#">Referrals</a></li>
            <li><a href="#">Forum</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-divide"></div>
      <div class="footer-lang">
        <select name="" id="">
          <option value="">English (United States)</option>
        </select>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer-section {
  background: #000;
  .footer-groups {
    padding: 160px 0 120px 0;
  }
  .footer-group-title {
    font-size: 20px;
    font-weight: 500;
    color: inherit;
    margin: 0;
    color: #fff !important;
  }
  ul.footer-list {
    list-style-type: none;
    padding-left: 0;
    margin-top: 14px;
    li a {
      font-size: 14px;
      font-weight: 400;
      color: #fff;
      text-decoration: none;
      padding-bottom: 6px;
      padding-top: 6px;
    }
  }
  .footer-divide {
    border-bottom: 1px solid white;
    width: 120px;
    margin-bottom: 40px;
  }
  .footer-lang select {
    background: none;
    border: none;
    color: #fff !important;
  }
}
</style>
