<template>
  <q-table
    title="Historias Clínicas Actuales"
    :columns="columns"
    :rows="productos"
    no-data-label="No hay historias clínicas para mostrar."
  />
  <!--<pre>{{productos}}</pre>-->
</template>

<script>
const columns = [
  {
    name: "producto",
    align: "left",
    label: "Nombre y Apellido",
    field: "producto",
    sortable: true,
  },
  { name: "prioridad", label: "Sexo", field: "prioridad", sortable: true },
  { name: "edad", label: "Edad", field: "edad", sortable: true },
  { name: "lugarnacimiento", label: "Lugar de Nacimiento", field: "lugarnacimiento", sortable: true },
  { name: "tiposangre", label: "Tipo de Sangre", field: "tiposangre", sortable: true },
  { name: "estadoactual", label: "Estado Actual", field: "estadoactual", sortable: true },
];

const row = [
  {
    Producto: "fsad",
    prioridad: "Máxima",
    Edad: "fsad",
    tiposangre: "Máxima",
    estadoactual: "fsad",
  },
];
export default {
  props: {
    productos: Array,
    edad: Array,
    estadoactual: Array,
  },
  setup() {
    return {
      columns,
      row,
    };
  },
};
</script>
