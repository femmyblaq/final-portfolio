<template>
  <div id="all-works" class="container-fluid">
    <!-- My sides -->
    <div class="vetical-left-side">
      <ul class="side-icons">
        <li><i class="fa fa-github" aria-hidden="true"></i></li>
        <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
        <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
        <li><i class="fa fa-linkedin" aria-hidden="true"></i></li>
        <li><i class="fa fa-codepen" aria-hidden="true"></i></li>
      </ul>
      <div class="line"></div>
    </div>
    <div class="vetical-right-side">
      <a href="">Femmyblaq@gmail.com</a>
      <div class="line"></div>
    </div>
    <!-- Home section  -->
    <section id="home-content">
      <div class="header row mb-lg-5">
        <div class="col-lg-10 m-lg-auto px-lg-5">
          <p class="hi">Hi, my name is</p>
          <h1>Yusuph Habeeb.</h1>
          <h2>I build things for the web.</h2>
          <div class=" mt-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              veniam iusto harum in deleniti reiciendis, est nesciunt Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
              voluptatum!
            </p>
          </div>
          <div class="myBtn pt-4">
            <button class="btn btn-outline-primary btn-lg">Get In Touch</button>
          </div>
        </div>
      </div>
    </section>

    <!-- About section -->
    <section id="about">
      <div class="container-lg p-lg-5  mx-auto">
        <div class="row mb-4">
          <div class="col-lg-10 px-0">
            <h5><span class="span">01. </span>About Me</h5>
            <div class="linediv"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7 p-0">
            <p>Hello, i'm habeeb, a software engeneering base on Lagos City.</p>
            <p>
              To me creating things on the internet is fun, like, i do enjoy it.
              Whether web application or anything between. My goal is to always
              build web apps that enable people interaction.
            </p>
            <p>
              Shortly after i finished my ND from
              <span style="color: #00aff0">YABA COLLEGE OF TECHNOLOGY.</span> I
              joined the engineering team at
              <span style="color: #00aff0">@company_name</span>
              where i work at a wild variety of iteresting projects on a daily
              basis.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <div class="row tools pe-lg-2">
              <ul class="col-lg-6 ps-1">
                <li class="">
                  <i class="fas fa-angle-right mx-2 mt-0"></i>JavaScript (Es6)
                </li>
                <li class="my-2"><i class="fas fa-angle-right mx-2"></i>Vue</li>
                <li class="my-2">
                  <i class="fas fa-angle-right mx-2"></i>Jquery
                </li>
              </ul>
              <ul class="col-lg-6 ps-1">
                <li class="">
                  <i class="fas fa-angle-right mx-2"></i>Html S(CSS)
                </li>
                <li class="my-2">
                  <i class="fas fa-angle-right mx-2"></i>Bootstrap
                </li>
                <li class="my-2">
                  <i class="fas fa-angle-right mx-2"></i>Wordpress
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-5 ms-sm-auto">
            <div class="overlay-container">
              <img class="my_img" src="image/yusuph.png" />
              <div class="overlay"></div>
              <div class="box"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience section -->

    <section id="experience" class="my-5">
      <div class="container-lg p-0 mt-5 px-lg-5 text-center">
        <div class="row mb-lg-4">
          <div class="col-lg-10 p-0 m-auto text-center">
            <h5><span class="span">02. </span>Where I've Worked</h5>
            <div class="linediv"></div>
          </div>
        </div>
      </div>
      <div class="container py-2">
        <div class="row">
          <div class="col-lg-8 d-flex align-items-center m-auto">
            <div class="bd-example">
              <div class="d-flex align-items-start">
                <div
                  class="nav flex-column me-3 bg-light"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    class="nav-link active"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Home
                  </button>
                  <button
                    class="nav-link"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Profile
                  </button>
                  <button
                    class="nav-link"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    Messages
                  </button>
                  <button
                    class="nav-link"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    Settings
                  </button>
                </div>
                <div class="tab-content" id="v-pills-tabContent">
                  <div
                    class="tab-pane fade active show"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div class="tab-header">
                      <h5>
                        Engineer
                        <span style="color: #00aff0;">@ Company_name</span>
                      </h5>
                      <p><small>February 2021 - Present</small></p>
                    </div>
                    <ul class="tab-write">
                      <li class="d-flex ">
                        <i
                          class="fas fa-angle-right mt-2 me-3"
                          style="font-size: 0.7em; color: #00aff4"
                        ></i>
                        <p class="mb-2" style="margin-top: 3px">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Molestias maxime dignissimos harum eius veniam!
                          Nisi!
                        </p>
                      </li>

                      <li class="d-flex">
                        <i
                          class="fas fa-angle-right mt-2 me-3"
                          style="font-size: 0.7em; color: #00aff4"
                        ></i>
                        <p class="mb-2" style="margin-top: 3px">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Molestias maxime dignissimos harum eius veniam!
                          Nisi!
                        </p>
                      </li>

                      <li class="d-flex">
                        <i
                          class="fas fa-angle-right mt-2 me-3"
                          style="font-size: 0.7em; color: #00aff4"
                        ></i>
                        <p class="mb-2" style="margin-top: 3px">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Molestias maxime dignissimos harum eius veniam!
                          Nisi!
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div class="tab-header">
                      <h5>
                        Engineer
                        <span style="color: #00aff0;">@ Company_name</span>
                      </h5>
                      <p><small>February 2021 - Present</small></p>
                    </div>
                    <ul class="tab-write">
                      <li class="d-flex ">
                        <i
                          class="fas fa-angle-right mt-2 me-3"
                          style="font-size: 0.7em; color: #00aff4"
                        ></i>
                        <p class="mb-2" style="margin-top: 3px">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Molestias maxime dignissimos harum eius veniam!
                          Nisi!
                        </p>
                      </li>

                      <li class="d-flex">
                        <i
                          class="fas fa-angle-right mt-2 me-3"
                          style="font-size: 0.7em; color: #00aff4"
                        ></i>
                        <p class="mb-2" style="margin-top: 3px">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Molestias maxime dignissimos harum eius veniam!
                          Nisi!
                        </p>
                      </li>

                      <li class="d-flex">
                        <i
                          class="fas fa-angle-right mt-2 me-3"
                          style="font-size: 0.7em; color: #00aff4"
                        ></i>
                        <p class="mb-2" style="margin-top: 3px">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Molestias maxime dignissimos harum eius veniam!
                          Nisi!
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div class="tab-header">
                      <h5>
                        Engineer
                        <span style="color: #00aff0;">@ Company_name</span>
                      </h5>
                      <p><small>February 2021 - Present</small></p>
                    </div>
                    <ul class="tab-write">
                      <li class="d-flex ">
                        <i
                          class="fas fa-angle-right mt-2 me-3"
                          style="font-size: 0.7em; color: #00aff4"
                        ></i>
                        <p class="mb-2" style="margin-top: 3px">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Molestias maxime dignissimos harum eius veniam!
                          Nisi!
                        </p>
                      </li>

                      <li class="d-flex">
                        <i
                          class="fas fa-angle-right mt-2 me-3"
                          style="font-size: 0.7em; color: #00aff4"
                        ></i>
                        <p class="mb-2" style="margin-top: 3px">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Molestias maxime dignissimos harum eius veniam!
                          Nisi!
                        </p>
                      </li>

                      <li class="d-flex">
                        <i
                          class="fas fa-angle-right mt-2 me-3"
                          style="font-size: 0.7em; color: #00aff4"
                        ></i>
                        <p class="mb-2" style="margin-top: 3px">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Molestias maxime dignissimos harum eius veniam!
                          Nisi!
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <div class="tab-header">
                      <h5>
                        Engineer
                        <span style="color: #00aff0;">@ Company_name</span>
                      </h5>
                      <p><small>February 2021 - Present</small></p>
                    </div>
                    <ul class="tab-write">
                      <li class="d-flex ">
                        <i
                          class="fas fa-angle-right mt-2 me-3"
                          style="font-size: 0.7em; color: #00aff4"
                        ></i>
                        <p class="mb-2" style="margin-top: 3px">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Molestias maxime dignissimos harum eius veniam!
                          Nisi!
                        </p>
                      </li>

                      <li class="d-flex">
                        <i
                          class="fas fa-angle-right mt-2 me-3"
                          style="font-size: 0.7em; color: #00aff4"
                        ></i>
                        <p class="mb-2" style="margin-top: 3px">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Molestias maxime dignissimos harum eius veniam!
                          Nisi!
                        </p>
                      </li>

                      <li class="d-flex">
                        <i
                          class="fas fa-angle-right mt-2 me-3"
                          style="font-size: 0.7em; color: #00aff4"
                        ></i>
                        <p class="mb-2" style="margin-top: 3px">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Molestias maxime dignissimos harum eius veniam!
                          Nisi!
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- work have built -->
    <section id="work-done">
      <div class="container-lg">
        <div class="row mb-4">
          <div class="col-lg-10 d-grid">
            <h5><span>03. </span>Some Things I've Built</h5>
            <div class="linediv"></div>
          </div>
        </div>
      </div>
      <div class="container-lg">
        <div class="row work-wrap py-4">
          <div class="work-img col-12">
            <div class="overlay-container">
              <img src="image/website1.png" alt="" />
              <div class="overlay"></div>
            </div>
          </div>
          <div class="work-content col-12 position-absolute">
            <p class="m-0">Featured Project</p>
            <h4>Personal Info</h4>
            <div class="card bg-light">
              <div class="card-body ">
                <p class="card-text mt-0">
                  This website is all about Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Optio dolor illo a nemo,
                  possimus quibusdam.
                </p>
              </div>
            </div>
            <div class=" m-2">
              <ul class="text-end mt-lg-2">
                <li>Html <span>Bootstrap</span> <span>Font Awesome</span></li>
              </ul>
            </div>
            <div class="links mt-2">
              <p class="text-end">
                <i class="fa fa-github pe-2" aria-hidden="true"></i>
                <i class="fas fa-external-link-alt ps-2 pe-0"></i>
              </p>
            </div>
          </div>
        </div>

        <div class="row work-wrap py-4">
          <div class="work-content-left col-12 position-absolute">
            <p class="m-0">Featured Project</p>
            <h4>Personal Info</h4>
            <div class="card bg-light">
              <div class="card-body ">
                <p class="card-text mt-0">
                  This website is all about Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Optio dolor illo a nemo,
                  possimus quibusdam.
                </p>
              </div>
            </div>
            <div class=" my-2">
              <ul class=" mt-lg-2">
                <li class="ps-0 text-start">
                  Html <span>Bootstrap</span> <span>Font Awesome</span>
                </li>
              </ul>
            </div>
            <div class="links mt-2">
              <p class="text-start">
                <i class="fa fa-github pe-2" aria-hidden="true"></i>
                <i class="fas fa-external-link-alt ps-2 pe-0"></i>
              </p>
            </div>
          </div>
          <div class="work-img-right col-12">
            <div class="overlay-container">
              <img src="image/website1.png" alt="" />
              <div class="overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- project that have done -->
    <section id="projects" class="mt-4">
      <div class="container mt-5">
        <div class="project-header text-center">
          <h3>Other Networthy Projects</h3>
          <p>view the archive</p>
        </div>
        <div class="row projects pb-0 px-lg-4 mt-2">
          <div class="col-lg-4 col-md-6">
            <div class="card bg-light py-4 px-2">
              <div class="card-body">
                <div class="icons mb-4">
                  <i class="far fa-folder"></i>
                  <span
                    ><i class="fa fa-github" aria-hidden="true"></i>
                    <i class="fas fa-external-link-alt p-2"></i
                  ></span>
                </div>
                <h6 class="card-text">
                  Professional Website using html and css
                </h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil impedit qui magnam suscipit?
                </p>
                <p class="card-text">
                  <span class="text-muted">Html Css Bootstrap</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card bg-light py-4 px-2">
              <div class="card-body">
                <div class="icons mb-4">
                  <i class="far fa-folder"></i>
                  <span
                    ><i class="fa fa-github" aria-hidden="true"></i>
                    <i class="fas fa-external-link-alt p-2"></i
                  ></span>
                </div>
                <h6 class="card-text">
                  Professional Website using html and css
                </h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil impedit qui magnam suscipit?
                </p>
                <p class="card-text">
                  <span class="text-muted">Html Css Bootstrap</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card bg-light py-4 px-2">
              <div class="card-body">
                <div class="icons mb-4">
                  <i class="far fa-folder"></i>
                  <span
                    ><i class="fa fa-github" aria-hidden="true"></i>
                    <i class="fas fa-external-link-alt p-2"></i
                  ></span>
                </div>
                <h6 class="card-text">
                  Professional Website using html and css
                </h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil impedit qui magnam suscipit?
                </p>
                <p class="card-text">
                  <span class="text-muted">Html Css Bootstrap</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="card bg-light py-4 px-2">
              <div class="card-body">
                <div class="icons mb-4">
                  <i class="far fa-folder"></i>
                  <span
                    ><i class="fa fa-github" aria-hidden="true"></i>
                    <i class="fas fa-external-link-alt p-2"></i
                  ></span>
                </div>
                <h6 class="card-text">
                  Professional Website using html and css
                </h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil impedit qui magnam suscipit?
                </p>
                <p class="card-text">
                  <span class="text-muted">Html Css Bootstrap</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="card bg-light py-4 px-2">
              <div class="card-body">
                <div class="icons mb-4">
                  <i class="far fa-folder"></i>
                  <span
                    ><i class="fa fa-github" aria-hidden="true"></i>
                    <i class="fas fa-external-link-alt p-2"></i
                  ></span>
                </div>
                <h6 class="card-text">
                  Professional Website using html and css
                </h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil impedit qui magnam suscipit?
                </p>
                <p class="card-text">
                  <span class="text-muted">Html Css Bootstrap</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="card bg-light py-4 px-2">
              <div class="card-body">
                <div class="icons mb-4">
                  <i class="far fa-folder"></i>
                  <span
                    ><i class="fa fa-github" aria-hidden="true"></i>
                    <i class="fas fa-external-link-alt p-2"></i
                  ></span>
                </div>
                <h6 class="card-text">
                  Professional Website using html and css
                </h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil impedit qui magnam suscipit?
                </p>
                <p class="card-text">
                  <span class="text-muted">Html Css Bootstrap</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row projects pt-0 mt-0 px-lg-4" v-if="showMore">
          <div class="col-lg-4 col-md-6">
            <div class="card bg-light py-4 px-2">
              <div class="card-body">
                <div class="icons mb-4">
                  <i class="far fa-folder"></i>
                  <span
                    ><i class="fa fa-github" aria-hidden="true"></i>
                    <i class="fas fa-external-link-alt p-2"></i
                  ></span>
                </div>
                <h6 class="card-text">
                  Professional Website using html and css
                </h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil impedit qui magnam suscipit?
                </p>
                <p class="card-text">
                  <span class="text-muted">Html Css Bootstrap</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="card bg-light py-4 px-2">
              <div class="card-body">
                <div class="icons mb-4">
                  <i class="far fa-folder"></i>
                  <span
                    ><i class="fa fa-github" aria-hidden="true"></i>
                    <i class="fas fa-external-link-alt p-2"></i
                  ></span>
                </div>
                <h6 class="card-text">
                  Professional Website using html and css
                </h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil impedit qui magnam suscipit?
                </p>
                <p class="card-text">
                  <span class="text-muted">Html Css Bootstrap</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="card bg-light py-4 px-2">
              <div class="card-body">
                <div class="icons mb-4">
                  <i class="far fa-folder"></i>
                  <span
                    ><i class="fa fa-github" aria-hidden="true"></i>
                    <i class="fas fa-external-link-alt p-2"></i
                  ></span>
                </div>
                <h6 class="card-text">
                  Professional Website using html and css
                </h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil impedit qui magnam suscipit?
                </p>
                <p class="card-text">
                  <span class="text-muted">Html Css Bootstrap</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="card bg-light py-4 px-2">
              <div class="card-body">
                <div class="icons mb-4">
                  <i class="far fa-folder"></i>
                  <span
                    ><i class="fa fa-github" aria-hidden="true"></i>
                    <i class="fas fa-external-link-alt p-2"></i
                  ></span>
                </div>
                <h6 class="card-text">
                  Professional Website using html and css
                </h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil impedit qui magnam suscipit?
                </p>
                <p class="card-text">
                  <span class="text-muted">Html Css Bootstrap</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="card bg-light py-4 px-2">
              <div class="card-body">
                <div class="icons mb-4">
                  <i class="far fa-folder"></i>
                  <span
                    ><i class="fa fa-github" aria-hidden="true"></i>
                    <i class="fas fa-external-link-alt p-2"></i
                  ></span>
                </div>
                <h6 class="card-text">
                  Professional Website using html and css
                </h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil impedit qui magnam suscipit?
                </p>
                <p class="card-text">
                  <span class="text-muted">Html Css Bootstrap</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card bg-light py-4 px-2">
              <div class="card-body">
                <div class="icons mb-4">
                  <i class="far fa-folder"></i>
                  <span
                    ><i class="fa fa-github" aria-hidden="true"></i>
                    <i class="fas fa-external-link-alt p-2"></i
                  ></span>
                </div>
                <h6 class="card-text">
                  Professional Website using html and css
                </h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil impedit qui magnam suscipit?
                </p>
                <p class="card-text">
                  <span class="text-muted">Html Css Bootstrap</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- show button -->
        <div class="row mt-5">
          <div class="col-lg-4 text-center m-auto">
            <div class="show-button">
              <div class="btn btn-outline-primary btn-lg px-lg-5" @click="show">
                Show More
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Get in Touch with me -->
    <section id="contact">
      <div class="row my-5">
        <div class="col-lg-6 text-center m-auto">
          <div class="in-touch">
            <p class="next">04. What's Next?</p>
            <h1>Get In Touch</h1>
            <p class="message mt-sm-2">
              Actually, am looking for any opportunities that can offer me well,
              and i promise to do my possible best. my inbox is always open,
              whether you want to say hi, i will try my best to get back to you.
            </p>
          </div>
          <div class="in-touch-btn my-5">
            <div class="btn btn-outline-primary btn-lg">Say Hello!</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <section id="footer">
      <div class="row ">
        <div class="icons d-lg-none col-12 m-auto">
          <ul class="bottom-icons d-flex m-auto">
            <li><i class="fa fa-github" aria-hidden="true"></i></li>
            <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
            <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
            <li><i class="fa fa-linkedin" aria-hidden="true"></i></li>
            <li><i class="fa fa-codepen" aria-hidden="true"></i></li>
          </ul>
        </div>
        <div class="col-lg-3 m-auto text-center">
          <p>Design & built by Yusuph Habeeb</p>
          <p>
            <i class="far fa-star"></i><span> 304 </span
            ><i class="fas fa-code-branch"></i> 205
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMore: false,
    };
  },
  methods: {
    show() {
      this.showMore = true;
    },
  },
};
</script>

<style scoped>
/* My experience nav and tab styling */
/* .bd-example .nav { */
/* border-left: 5px solid #55a4be; */
/* } */
/* What have done styling */

@media screen and (max-width: 480px) {
  body {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  /* Work done style */
}

/* @media screen and (max-width: 790px) {

    #work-done {
        padding: 10px 50px;
    }

    .work-img img {
        width: 600px;
        height: 450px;
    }


    #work-done .work-content ul {
        list-style: none;
        display: flex;
        position: absolute;
        
    }

    #work-done .work-content ul li {
        padding: 5px;

    }
} */
</style>
