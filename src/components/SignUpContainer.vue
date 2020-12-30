<template>
  <div class="signup-form p-5 mt-3 w-100">
    <div class="title mx-2">Signup</div>
    <p class="subtext mx-2">or <a href="#"> sign in to your account </a></p>
    <div class="form-row mx-2">
      <div class="col-12 my-2">
        <input type="text" class="form-input" placeholder="First name" />
      </div>
      <div class="col-12 my-2">
        <input type="text" class="form-input" placeholder="Last name" />
      </div>
      <div class="col-12 my-2">
        <input type="text" class="form-input" placeholder="Email" />
      </div>
      <div class="col-12 my-2">
        <input type="text" class="form-input" placeholder="Password" />
      </div>
      <div class="col-12 my-2">
        <div class="form-check">
          <input
            class="form-check-input form-control-lg"
            type="checkbox"
            style="min-width: 20px; height: 20px"
            id="check"
          />
          <label class="form-check-label" for="check" style="margin: 4px 10px">
            I agree to the <a href="#">Dropbox Terms</a>
          </label>
        </div>
      </div>
      <div class="col-12 my-2">
        <button class="signup-btn">Sign up</button>
      </div>
      <div class="col-12 my-2">
        <button class="signup-btn google-btn">Sign up with google</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#signup-container {
  background: #fff;
  height: 100vh;
  width: 35vw;
  // width: calc(100% / 3);
  height: 100vh;
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: top;
  box-sizing: border-box;
  transition: none;
  // transform: translateX(100%);
  will-change: height;
  box-shadow: -7px 0 5px -6px rgba(0, 0, 0, 0.075);
  transition: transform 500ms cubic-bezier(0.5, 0, 0, 1);
  transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
  &.hide-signup {
    transform: translateX(100%);
  }
  &.show-signup {
    transform: translateX(0);
  }
  .signup-nav a {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    font-weight: bold;
  }
  .nav-link {
    font-size: 18px;
    color: #000;
    line-height: 1.625em;
  }
  .title {
    font-size: 25px;
    line-height: 1.14286;
    font-weight: 500;
  }
  .subtext {
    font-size: 12px;
    line-height: 2.28571;
    font-weight: 400;
    a {
      color: #0061ff;
    }
  }
  .form-input {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    border-radius: 0;
    padding-top: 8px;
    padding-left: 18px;
    height: 44px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 5px 6px;
    &:focus {
      outline: 1px solid #000;
    }
  }
  a {
    color: #0061ff;
  }
  .signup-btn {
    width: 100%;
    background-color: #0061ff;
    border-radius: 0;
    height: 44px;
    color: #fff;
    border: none;
    min-height: 32px;
    padding: 0 16px;
    cursor: pointer;
    overflow: visible;
    text-decoration: none;
    line-height: 1;
    &.google-btn {
      background: #fff;
      border: 1px solid #d0d0d3;
      color: #000;
    }
  }
}
</style>
