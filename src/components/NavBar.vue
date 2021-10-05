<template>
  <div class="navbar flex-row-center">
    <div class="cont flex-row-center align-center">
      <div class="logo flex-column-center">
        <img src="../assets/img/logos/LogoHotRadioDance.svg" alt="" />
      </div>
      <div class="info flex-row-center align-center">
        <div class="bloque flex-row-center align-center">
          <a href="#" target="_blank" class="icono">
            <img src="../assets/img/iconos/Youtube.svg" alt="icono-youtube" />
          </a>
          <a href="https://m.facebook.com/HotRadioDanceec/" target="_blank" class="icono">
            <img src="../assets/img/iconos/Facebook.svg" alt="icono-facebook" />
          </a>
          <a href="https://www.instagram.com/hotradiodanceec/" target="_blank" class="icono">
            <img src="../assets/img/iconos/Instagram.svg" alt="icono-instagram" />
          </a>
          <a href="" target="_blank">
            <span class="email">
              @HotRadioDanceec
            </span>
          </a>
          <a href="https://wa.me/593983803798" target="_blank" class="icono">
            <img src="../assets/img/iconos/Telefono.svg" alt="icono-telefono" />
          </a>
          <a href="https://wa.me/593983803798" target="_blank" class="icono phone">
            <span>098 380 3798</span>
          </a>
          
          <a href="" target="_blank" class="icono spotify">
            <img src="../assets/img/iconos/Spotify.svg" alt="icono-spotify" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.navbar {
  position: relative;
  width: 100%;
  height: 10vw;
  color: #fff;
  justify-content: flex-end;
}

.navbar .cont {
  height: 100%;
  width: 75%;
  margin: 0 auto;
}

.navbar .cont .logo {
  width: 30%;
  height: 100%;
  position: relative;
}

.navbar .cont .logo img {
  width: 65%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.navbar .cont .info {
  width: 70%;
  height: 100%;
  align-items: center;
}

.navbar .cont .info .bloque { 
  width: 100%;
  padding: 0;
  height: 100%;
  justify-content: flex-end;
}

.navbar .cont .info .bloque a {
  text-decoration: none;
}

.navbar .cont .info .bloque .icono {
  margin-right: 1vw;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 2vw;
  height: 2vw;
}

.navbar .cont .info .bloque .icono.phone {
  width: auto;
  height: auto;
}

.navbar .cont .info .bloque .icono.phone img{
  width: 2vw;
  height: 2vw;
}

.navbar .cont .info .bloque .icono.phone span {
  width: 10vw;
  text-decoration: none;
}

.navbar .cont .info .bloque .icono img {
  width: 100%;
}

.navbar .cont .info .bloque .icono.spotify {
  width: 10vw;
}

.navbar .cont .info .bloque .icono.spotify img {
  width: 100%;
}

.navbar .cont .info .bloque span {
  color: #fff;
  font-size: 1.2vw;
  margin-left: 0.5vw;
  margin-right: 2vw;
  display: block;
  font-family: muli_light;
}


@media only screen and (min-width: 320px) and (max-width: 767px) {

  .navbar {
    height: 20vw;
  }

  .navbar .cont {
    width: 95%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
  }

  .navbar .cont .logo {
    width: 100%;
  }
  .navbar .cont .info{
    width: 100%;
  }

  .navbar .cont .logo img {
    width: 20%;
    margin: 4vw auto 4vw auto;
  }

  .navbar .cont .info .bloque{
    justify-content: center;
  }

  .navbar .cont .info .bloque .icono.phone span {
    width: auto;
  }

  .navbar .cont .info .bloque .icono {
    width: 3vw;
    height: 3vw;
  }

  .navbar .cont .info .bloque .icono.phone img {
    width: 3vw;
    height: 3vw;
  }

  .navbar .cont .info .bloque .icono.spotify img {
    width: 120%;
  }

  .navbar .cont .info .bloque span {
    font-size: 1.8vw;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .navbar .cont .logo img {
    width: 45%;
  }
  .navbar .cont .info .bloque .icono {
    width: 3vw;
    height: 3vw;
  }

  .navbar .cont .info .bloque .icono.phone img {
    width: 3vw;
    height: 3vw;
  }

  .navbar .cont .info .bloque .icono.spotify img {
    width: 70%;
  }

  .navbar .cont .info .bloque span {
    font-size: 1.4vw;
  }
}

@media only screen and (min-width: 1024px) {
  .navbar .cont .logo img {
    width: 60%;
  }

  .navbar .cont .info .bloque .icono {
    width: 3vw;
    height: 3vw;
  }

  .navbar .cont .info .bloque .icono.phone img {
    width: 2vw;
    height: 2vw;
  }

  .navbar .cont .info .bloque .icono.spotify img {
    width: 100%;
    height: 100%;
  }
}


</style>
