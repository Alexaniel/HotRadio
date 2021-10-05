<template>
  <div class="footer flex-row-center">
    <div class="cont">
      <span class="title">Nuestros auspiciantes</span>
      <div class="auspiciantes flex-row-center align-center">
        <div class="cont-img flex-column-center">
          <img src="../assets/img/auspiciantes/electrocompu.svg" alt="electrocompu" class="ecompu"/>
        </div>
        <div class="cont-img flex-column-center derma">
          <img src="../assets/img/auspiciantes/dermatologik.png" alt="" />
        </div>
        <div class="cont-img flex-column-center">
          <img src="../assets/img/auspiciantes/clipp.svg" alt="" />
        </div>
        <div class="cont-img flex-column-center">
          <img src="../assets/img/auspiciantes/1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.footer {
  position: relative;
  width: 100%;
  height: 12vw;
  justify-content: flex-end;
}

.footer .cont {
  height: 100%;
  width: 65%;
  margin: 0 auto;
}

.footer .cont .title {
  display: block;
  width: 100%;
  height: 2vw;
  margin: 0 auto;
  text-align: center;
  font-family: muli_light;
  font-size: 1.4vw;
  color: #fff;
}

.footer .cont .auspiciantes {
  width: 100%;
  height: calc(100% - 2vw);
}

.footer .cont .auspiciantes .cont-img {
  width: calc(25% - 0.5vw);
  margin: 0 0.5vw;
  height: 100%;
}

.footer .cont .auspiciantes .cont-img.derma img { 
  width: 120%;
}

.footer .cont .auspiciantes .cont-img img {
  width: 85%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.footer .cont .auspiciantes .cont-img img.ecompu {
  width: 100%;
}

@media only screen and (min-width: 320px) and (max-width: 767px) {

  .footer {
    height: 18vw;
  }

  .footer .cont {
    width: 85%;
  }

  .footer .cont .title {
    font-size: 2.4vw;
  }

  .footer .cont .auspiciantes .cont-img img {
    width: 65%;
  }

}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .footer {
    height: 12vw;
  }

  .footer .cont {
    width: 85%;
  }

  .footer .cont .title {
    font-size: 2.4vw;
  }
}




</style>
