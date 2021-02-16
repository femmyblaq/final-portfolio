<template>
  <div>
    <div id="sideBar">
      <div class="container p-5">
        <img src="/public/img/White.jpg" alt="" />
        <div id="aboutMe" class="mt-4">
          <h6>ABOUT ME</h6>
          <p>
            I'm a student of Yaba College of Technology, with a certifcate of
            OND.A Web Designer motivated with a year Area of expertise.
            Recognise for assesing operational needs for developing solution to
            save cost.
          </p>
        </div>
        <hr class="my-4" />
        <div id="web">
          <h6>WEBSITE & SOCIAL LINKS</h6>
          <p>
            <strong>Facebook:</strong><br />
            facebook.com/femmyHY
          </p>
          <p>
            <strong>GitHub:</strong><br />
            github.com/femmyblaq
          </p>
          <p>
            <strong>Instagram:</strong><br />
            instagram.com/phemmyHY
          </p>
        </div>
        <hr />
        <div id="reference">
          <h6>REFERENCES</h6>
          <div class="mt-2">
            <h6>MR. YUSUPH HABEEB</h6>
            <p><small>Graphic and Web Designer</small></p>
            <p>T: (+234) 9016290149</p>
            <p>E: phemmyhy@gmail.com</p>
          </div>
          <div class="mt-2">
            <h6>MR. YUSUPH HABEEB</h6>
            <p><small>Graphic and Web Designer</small></p>
            <p>T: (+234) 9016290149</p>
            <p>E: femmyblaq@gmail.com</p>
          </div>
        </div>
        <hr class="my-2" />
        <div id="language">
          <h6>LANGUAGE</h6>
          <p><strong>ENGLISH</strong></p>
          <div class="progress">
            <div
              class="progress-bar bg-dark"
              role="progressbar"
              style="width: 75%"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p><strong>YORUBA</strong></p>
          <div class="progress">
            <div
              class="progress-bar bg-dark"
              role="progressbar"
              style="width: 60%"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#sideBar {
  background-color: brown;
  width: 30%;
  margin: 0;
  padding: 0;
  position: absolute;
}
img {
  width: 150px;
  height: 150px;
  border-radius: 100%;
}
#sideBar > .container p {
  color: aliceblue;
  font-size: 18px;
}
h6 {
  font-weight: 700;
  color: aliceblue;
}
.progress {
  border-radius: 0;
}
</style>