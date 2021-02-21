<template>
  <nav class="navbar navbar-expand-lg p-sm-3 fixed">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Y</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#femiNavbar"
        aria-controls="femiNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="femiNavbar">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="#about" class="nav-link"><span>01. </span>About</a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link"><span>02. </span>Experience</a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link"><span>03. </span>Work</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link"><span>04. </span>Contact</a>
          </li>
          <li>
            <a href="">
              <button class="btn btn-sm btn-outline-primary py-2 px-3">
                Resume
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- <div class="container-fluid">
    <div class="navbar navbar-expand-lg p-lg-4 p-xs-4">
      <a href="" class="navbar-brand">BG</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-target="#myNav"
        data-bs-toggle="collapse"
        aria-controls="myNav"
        aria-expanded="false"
        aria-label="Toggle-Navigation"
      >
        <span class="navbar-toggle-icon text-black"></span>
      </button>
      <div class="collapse navbar-collapse" id="myNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="#about" class="nav-link"><span>01. </span>About</a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link"><span>02. </span>Experience</a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link"><span>03. </span>Work</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link"><span>04. </span>Contact</a>
          </li>
          <li>
            <a href="">
              <button class="btn btn-sm btn-outline-primary py-2 px-3">
                Resume
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {};
</script>

<style scoped>
li,
a {
  font-family: "Roboto Mono";
  font-size: 0.8em;
  margin-right: 8px;
  color: #00aff0;
}
span {
  color: #063b4e;
}
.navbar-brand {
  border: 3px solid #00aff0;
  font-weight: 900;
  font-size: 1.5em;
  padding: 0 10px;
}
.btn-outline-primary {
  border: 1px solid #00aff0;
  color: #00aff0;
  font-size: 1.1em;
}
.btn-outline-primary:hover {
  background-color: #4ab7df;
  color: #ffffff;
}
.collapse .navbar-nav {
  text-align: right;
}
.collapse .navbar-nav .nav-item {
  margin: 10px 5px;
}
</style>
