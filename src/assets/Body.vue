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
          <div class="appear animate__animated animate__fadeInUp">
            <p class="hi">Hi, my name is</p>
            <h1>Yusuph Habeeb.</h1>
            <h2>I build things for the web.</h2>
          </div>
          <div class=" mt-3">
            <div
              class="appear animate__animated animate__fadeInUp animate__slow animate__"
            >
              <p>
                I'm a software engineering based in Lagos city. The world need
                helpful Technology that make things easier, i specialize in
                building exceptional website, application and everything
                between.
              </p>

              <div class="myBtn pt-4">
                <button class="btn btn-outline-primary btn-lg">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About section -->
    <section id="about">
      <div
        class="container-lg p-lg-5  mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
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

    <section
      id="experience"
      class="mt-5 p-3"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="container-lg p-0 mt-5 text-center">
        <div class="row mb-lg-4">
          <div class="col-lg-10 p-0 text-center mx-lg-auto">
            <h5><span class="span">02. </span>Where I've Worked</h5>
            <div class="linediv"></div>
          </div>
        </div>
      </div>
      <div class="container py-2">
        <div class="row">
          <div class="col-lg-8 d-flex align-items-center m-auto">
            <div class="bd-example">
              <div class="d-flex align-items-start tab-holder">
                <div
                  class="nav flex-column me-3 bg-light tab-top"
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
    <section id="hardest">
      <div class="container-lg p-0 my-5">
        <div class="row mb-lg-4 ">
          <div class="col-lg-12 p-0holder">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              class="d-flex flex-row justify-content-start"
            >
              <h5 class="ms-2">
                <span class="span">03. </span>Some Things I've done.
              </h5>
              <div class="linediv mt-lg-3 mt-md-4 mt-sm-3 ms-lg-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="first-row"
        class="row mx-0"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="work-done d-flex justify-content-end ">
          <div class="workdone-img">
            <div class="overlay-container w-50 h-100 position-relative">
              <img
                src="../../public/image/website1.png"
                class="w-100 h-100 d-block"
                alt=""
              />

              <div
                class="overlay position-absolute top-0 bottom-0 start-0 end-0 h-100 w-100"
              ></div>
            </div>
          </div>
          <div class="workdone-content text-right position-absolute w-50">
            <p class="text-end text-right mb-0 p">Feature Project</p>
            <h3 class="text-end text-right">Next Technology</h3>
            <div class="bg-light shadow">
              <p class="p-3 text-right">
                Next Technology is a beautiful website, with a
                <span style="color: #00aff0">friendly user interface.</span>
                That also has the sign in page for quick access. Lorem ipsum
                dolor, sit amet consectetur adipisicing.
              </p>
            </div>
            <ul class="list-inline text-end">
              <li class="list-inline-item">Html</li>
              <li class="list-inline-item">Bootstrap</li>
              <li class="list-inline-item">Font awesome</li>
              <li class="list-inline-item">Vue js</li>
              <li class="list-inline-item">Css</li>
            </ul>
            <div class="links mt-2">
              <p class="text-end">
                <a href="" class="text-dark text-decoration-none"
                  ><i class="fa fa-github pe-2" aria-hidden="true"></i
                ></a>
                <a href="" class="text-dark text-decoration-none"
                  ><i class="fas fa-external-link-alt ps-2 pe-0"></i
                ></a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- second wrap stuling -->
      <div
        id="second-row"
        class="row mx-0 mt-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="work-done d-flex justify-content-start ">
          <div class="workdone-content text-left position-absolute w-50">
            <div>
              <p class="text-start text-left mb-0 p">Feature Project</p>
              <h3 class="text-start text-left">Master Build</h3>
              <div class="bg-light shadow">
                <p class="p-3 text-left">
                  Master Build is a professional website created using the
                  <span style="color: #00aff0"> Vue cli command</span>, That
                  allows user to know that they can explore their business with
                  a website. And also they can also sign up, so they can get
                  complete access.
                </p>
              </div>
              <ul class="list-inline text-start ">
                <li class="list-inline-item">Html</li>
                <li class="list-inline-item">Bootstrap</li>
                <li class="list-inline-item">Font awesome</li>
                <li class="list-inline-item">Vue js</li>
                <li class="list-inline-item">Css</li>
              </ul>
              <div class="links mt-2">
                <p class="text-start">
                  <a href="" class="text-dark text-decoration-none"
                    ><i class="fa fa-github pe-2" aria-hidden="true"></i
                  ></a>
                  <a href="" class="text-dark text-decoration-none"
                    ><i class="fas fa-external-link-alt ps-2 pe-0"></i
                  ></a>
                </p>
              </div>
            </div>
          </div>
          <div class="workdone-img d-flex justify-content-end">
            <div class="overlay-container w-50 h-100 position-relative">
              <img
                src="../../public/image/masterbuild.png"
                class="w-100 h-100 d-block"
                alt=""
              />

              <div
                class="overlay position-absolute top-0 bottom-0 start-0 end-0 h-100 w-100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- project that have done -->
    <section
      id="projects"
      class="mt-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
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
                {{ text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Get in Touch with me -->
    <section id="contact" data-aos="fade-up" data-aos-duration="1000">
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
          <ul class="list-inline">
            <li class="list-inline-item me-4">
              <i class="far fa-star"></i> 104
            </li>
            <li class="list-inline-item">
              <i class="fas fa-code-branch"></i> 205
            </li>
          </ul>
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
      text: "Show More",
    };
  },
  methods: {
    show() {
      this.showMore = !this.showMore;
      if (this.showMore == true) {
        this.text = "Show Less";
      } else {
        this.text = "Show More";
      }
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
