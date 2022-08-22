<template>
  <div class="home">
    <h1>CSV</h1>
    <label class="text-reader">
      <input type="file" @change="loadTextFromFile">
    </label>
  </div>
</template>

<script>
import { VueCsvImport } from "vue-csv-import";

export default {
  name: 'HomeView',
  components: {
    VueCsvImport
  },
  data() {
    return {
      csv: null,
    };
  },
  methods: {
    loadTextFromFile(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();

      reader.onload = e => {
        let listNodos = e.target.result;
        let splitSaltosDeLinea = listNodos.split(/\r\n|\r|\n/, -1);
        const ArrayOperacionObjeto = [];
        splitSaltosDeLinea.forEach( element =>{
          let NewElement = element.split(";")
          let ObjectInsert = {
            Operacion: NewElement[0],
            Persona: JSON.parse(NewElement[1])
          }
          ArrayOperacionObjeto.push(ObjectInsert)
        })
        console.log(ArrayOperacionObjeto)
      };
      reader.readAsText(file);
    }
  }
}
</script>
