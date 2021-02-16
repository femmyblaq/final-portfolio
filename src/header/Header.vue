<template>
  <div class="navbar navbar-expand-lg py-4 px-4">
    <a href="" class="navbar-brand">BG</a>
    <button
      class="navbar-toggler"
      type="button"
      data-target="#myNav"
      data-toggle="collapse"
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
</style>