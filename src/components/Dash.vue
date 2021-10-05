<template>
  <div class="dash flex-row-center">
    <div class="cont-radio flex-row-center align-center">
      <div class="a flex-row-center">
        <div class="fondo-orange">
          <img src="../assets/img/Dance-girl.png" alt />
        </div>
      </div>
      <div class="b flex-row-center">

        <div class="flex-row-center align-row-start titulo">
          <span class="black">Sonido</span>
          <span class="light">Dance</span>
        </div>

        <div class="cont-iframe">
          <!-- <iframe src=" http://192.168.97.106:8080/streaming" frameborder="no" width="100%" height="100%" scrolling="no"></iframe> -->
          <iframe src="https://hotradio-ec032.web.app/streaming" frameborder="no" width="100%" height="100%" scrolling="no"></iframe>
        </div>
        <div class="detail"></div>
      </div>
    </div>
  </div>
</template>


<style>
.dash {
  position: relative;
  width: 100%;
  top: 0;
  height: calc(100% - 22vw);
  justify-content: center;
  align-items: center;
}

.dash .cont-radio {
  width: 75%;
  height: 100%;
  position: relative;
  margin: 0 auto;
}

.dash .cont-radio .a {
  width: 50%;
  height: 100%;
  justify-content: center;
}

.dash .cont-radio .a .fondo-orange {
  background: rgba(231, 67, 37, 1);
  background: -moz-linear-gradient(
    45deg,
    rgba(231, 67, 37, 1) 0%,
    rgba(231, 67, 37, 1) 68%,
    rgba(229, 22, 103, 1) 95%,
    rgba(229, 22, 103, 1) 100%
  );
  background: -webkit-gradient(
    left bottom,
    right top,
    color-stop(0%, rgba(231, 67, 37, 1)),
    color-stop(68%, rgba(231, 67, 37, 1)),
    color-stop(95%, rgba(229, 22, 103, 1)),
    color-stop(100%, rgba(229, 22, 103, 1))
  );
  background: -webkit-linear-gradient(
    45deg,
    rgba(231, 67, 37, 1) 0%,
    rgba(231, 67, 37, 1) 68%,
    rgba(229, 22, 103, 1) 95%,
    rgba(229, 22, 103, 1) 100%
  );
  background: -o-linear-gradient(
    45deg,
    rgba(231, 67, 37, 1) 0%,
    rgba(231, 67, 37, 1) 68%,
    rgba(229, 22, 103, 1) 95%,
    rgba(229, 22, 103, 1) 100%
  );
  background: -ms-linear-gradient(
    45deg,
    rgba(231, 67, 37, 1) 0%,
    rgba(231, 67, 37, 1) 68%,
    rgba(229, 22, 103, 1) 95%,
    rgba(229, 22, 103, 1) 100%
  );
  background: linear-gradient(
    45deg,
    rgba(231, 67, 37, 1) 0%,
    rgba(231, 67, 37, 1) 68%,
    rgba(229, 22, 103, 1) 95%,
    rgba(229, 22, 103, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e74325', endColorstr='#e51667', GradientType=1 );

  width: 20vw;
  height: 22vw;
  border-radius: 1.5vw;
  display: block;
  position: relative;
  z-index: -1;
}

.dash .cont-radio .a .fondo-orange img {
  position: absolute;
  bottom: 0;
  right: -6vw;
  height: 26vw;
  z-index: 2;
}

.dash .cont-radio .b {
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
}

.dash .cont-radio .b .titulo {
  position: absolute;
  top: 6vw;
  left: 2vw;
}

.dash .cont-radio .b .titulo .black {
  font-family: muli_light;
  color: #fff;
  font-size: 3vw;
  margin-right: 0.25vw;
}

.dash .cont-radio .b .titulo .light {
  font-family: muli_black;
  color: #fff;
  font-size: 3vw;
  margin-left: 0.25vw;
}

.dash .cont-radio .b .detail { 
  position: absolute;
  width: 30vw;
  height: 8vw;
  left: -10vw;
  background: rgb(30, 37, 43);
  z-index: -2;
  border-radius: 1vw;
}

.dash .cont-radio .b .cont-iframe {
  position: relative;
  width: 30vw;
  height: 8vw;
  border-radius: 1vw;
}

@media only screen and (min-width: 320px) and (max-width: 767px) and (orientation: portrait){
  .dash {
    height: calc(100% - 38vw);
  }

  .dash .cont-radio {
    display: flex;
    flex-flow: column;
  }

  .dash .cont-radio .a {
    width: 80%;
    height: 50%;
    align-items: flex-end;
  }

  .dash .cont-radio .b {
    width: 80%;
    height: 50%;
  }

  .dash .cont-radio .b .titulo {
    width: 100%;
    text-align: center;
    justify-content: center;
    top: 10vw;
  }

  .dash .cont-radio .b .titulo .black {
    font-size: 6vw;
    margin-right: 0.8vw;
  }

  .dash .cont-radio .b .titulo .light {
    font-size: 6vw;
    margin-left: 0.8vw;
  }

  .dash .cont-radio .a .fondo-orange {
    width: 40vw;
    height: 45vw;
  }

  .dash .cont-radio .a .fondo-orange img {
    height: 50vw;
  }

  .dash .cont-radio .b .detail {
    display: none;
  }

  .dash .cont-radio .b .cont-iframe {
    width: 70vw;
    height: 22vw;
    top: 4vw;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {

}

@media only screen and (min-width: 1024px) {

}
</style>
