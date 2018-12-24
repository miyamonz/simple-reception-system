<template>
  <div id="main" style="height: 100vh">
    <header> <HeaderContent /> </header>

    <CalledList :array="called" ref="calledList"
      @toAbsence=" e => move('ABSENCE')(e)"
    />

    <AbsenceList :array="absence"
      @toRemove="toRemove"
      @toCalled="e => move('CALLED')(e)"
    />

    <footer style="position :fixed; bottom: 0">
      <BottomContent/>
    </footer>
  </div>
</template>
<script>
import {HeaderContent} from "./components";
export default {
  name: "MainView"
  components: {...components}
};
</script>
