<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url(assets/fonts/muli/index.css);
body {
  background-image: url("assets/img/fondo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0;
  margin: 0;
  font-size: 0.9vw;
}
.shadow {
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}
.border {
  border: solid 1px red;
}
.nopadding {
  padding: 0;
}
.section {
  position: relative;
  height: 49.45vw;
}
.all_size {
  width: 100%;
  height: 100%;
}
.flex-row-center {
  display: flex;
  flex-flow: row;
  align-items: center;
}

.flex-column-center {
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.align-center {
  align-items: center;
}

.align-start {
  align-items: flex-start;
}

.align-end {
  align-items: flex-end;
}

</style>
