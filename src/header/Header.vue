<template>
  <div class="container-fluid px-0">
    <nav id="navbar" class="navbar navbar-expand-lg px-sm-3 w-100">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="../../public/image/yusuphLogo.png" class="w-50 mt-0" alt=""
        /></a>
        <button
          class="navbar-toggler d-sm-none"
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
            <li
              class="nav-item animate__animated animate__fadeInDown animate__delay-0.5s"
            >
              <a href="#about" class="nav-link"><span>01. </span>About</a>
            </li>
            <li
              class="nav-item animate__animated animate__fadeInDown animate__delay-0.6s"
            >
              <a href="" class="nav-link"><span>02. </span>Experience</a>
            </li>
            <li
              class="nav-item animate__animated animate__fadeInDown animate__delay-0.7s"
            >
              <a href="" class="nav-link"><span>03. </span>Work</a>
            </li>
            <li
              class="nav-item animate__animated animate__fadeInDown animate__delay-0.8s"
            >
              <a href="#contact" class="nav-link"><span>04. </span>Contact</a>
            </li>
            <li
              class="animate__animated animate__fadeInDown animate__delay-0.9s"
            >
              <a href="">
                <button class="btn btn-sm btn-outline-primary py-2 mt-2 px-3">
                  Resume
                </button>
              </a>
            </li>
          </ul>
        </div>
        <a href="" class="text-decoration-none d-lg-none"
          ><button class="btn btn-sm btn-outline-primary  px-3">
            Resume
          </button></a
        >
      </div>
    </nav>
    <!-- <div class="navbar d-flex bg-dark align-items-center py-3 px-2">
      <div class="navbar-container d-flex justify-content-between w-100 ">
        <a
          href="#home-content"
          id="navbar-logo"
          class="text-decoration-none d-flex align-items-center"
          ><img src="../../public/image/yusuphLogo.png" class="w-50 mt-0" alt=""
        /></a>

        <div class="navbar-toggle d-lg-none" id="mobile-menu">
          <span class="bar" style="width: 35px;"></span>
          <span class="bar mx-0" style="width: 30px;"></span>
          <span class="bar mx-0"></span>
        </div>

        <ul class="navbar-menu list-inline text-center mt-3">
          <li class="navbar-item h-5 list-inline-item me-lg-4">
            <a href="#about" class="navbar-link h-100 text-decoration-none"
              ><span>01. </span>About</a
            >
          </li>
          <li class="navbar-item h-5 list-inline-item me-lg-4">
            <a href="#experience" class="navbar-link h-100 text-decoration-none"
              ><span>02. </span>Experience</a
            >
          </li>
          <li class="navbar-item h-5 list-inline-item me-lg-4">
            <a href="#hardest" class="navbar-link h-100 text-decoration-none"
              ><span>03. </span>Work</a
            >
          </li>
          <li class="navbar-item h-5 list-inline-item me-lg-4">
            <a href="#contact" class="navbar-link h-100 text-decoration-none"
              ><span>04. </span>Contact</a
            >
          </li>
          <li class=" list-inline-item">
            <a href="" class="text-decoration-none"
              ><button class="btn btn-sm btn-outline-primary py-2 px-3">
                Resume
              </button></a
            >
          </li>
        </ul>
        
      </div>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  position: fixed;
  z-index: 999;
  top: 0;
  transition: top 0.3s;
  background-color: rgba(0, 0, 0, 0.1);
}
li,
a {
  font-family: "Roboto Mono";
  font-size: 0.8em;
  margin-right: 8px;
  color: #00aff0;
}
li,
a:hover {
  color: #fff;
}
span {
  color: #fff;
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
@media (max-width: 991px) {
  .navbar {
    height: 80px;
  }
  .navbar img {
    margin-left: 0;
    margin-top: 15px;
  }
  .navbar-toggler {
    display: none !important;
  }
  .navbar-menu {
    display: none;
    margin-top: 0 !important;
    background-color: #141414;
    width: 50% !important;
    height: 100vh !important;
    transition: all 500s ease;
    position: fixed;
    right: 0%;
    top: 0% !important;
    text-align: center;
    padding: 100px 50px;
    z-index: 2;
    backdrop-filter: blur(2rem);
  }

  .navbar-menu.active {
    right: 0%;
    display: grid;
    transition: all 500s ease;
    z-index: 2;
    height: 100vh;
  }
  .navbar-toggle .bar {
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background: #00aff0;
    transition: all 0.3s ease-in-out;
  }
  .navbar-item {
    width: 100%;
  }
  .navbar-link {
    width: 100%;
    padding: 2rem;
    text-align: center;
    display: table;
  }

  #mobile-menu {
    position: absolute;
    top: 15%;
    right: 5%;
    transform: translate(5%, 20%);
    z-index: 99;
    display: none;
  }
  .navbar-toggle .bar {
    display: block;
    cursor: pointer;
  }
  #mobile-menu.is-active .bar:nth-child(2) {
    opacity: 0;
  }

  #mobile-menu.is-active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  #mobile-menu.is-active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
