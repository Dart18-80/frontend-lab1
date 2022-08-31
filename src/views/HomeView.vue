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
      arregloGeneral: [],
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
          if(element != ""){
            let NewElement = element.split(";")
            let ObjectInsert = {
              Operacion: NewElement[0],
              Persona: JSON.parse(NewElement[1])
            }
            ArrayOperacionObjeto.push(ObjectInsert)
          }
        })
        this.arregloGeneral = ArrayOperacionObjeto;
        this.cargarArbol();
      };
      reader.readAsText(file);
    },
    cargarArbol(){
      this.arregloGeneral.forEach(line => {
        if(line.Operacion == "INSERT"){
          console.log(line.Persona)
          this.$store.dispatch('ADDNODE', line.Persona )     
        }
        else if (line.Operacion == "DELETE"){
          console.log(line.Persona)
          this.$store.dispatch('DELETENODE', line.Persona )
        }
        else if (line.Operacion == "PATCH"){

        }
      })
    }
  }
}
</script>
