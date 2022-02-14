<template>
  <q-page padding>
    <q-card-section style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
    border-radius: 4px 4px 50px 4px; margin-bottom: 12px;">
          <div class="text-h4 text-white" text-white>Historia Clínica del Paciente</div>
    </q-card-section>

    <q-form
      class="row q-col-gutter-md"
      @reset="onReset"
      @submit.prevent="onSubmit"
      ref="myForm"
      padding
    >
      <q-input
        label="Nombre y Apellido"
        class="col-12 col-sm-6"
        standout="bg-blue text-white"
        v-model.trim="producto"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo vacío']"
      />
      <q-select
        label="Sexo"
        class="col-12 col-sm-6"
        :options="opciones"
        standout="bg-blue text-white"
        v-model="seleccion"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo vacío']"
      />
      <q-input
        label="Edad"
        class="col-12 col-sm-6"
        standout="bg-blue text-white"
        v-model.trim="edad"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo vacío']"
      />
      <q-input
        label="Lugar de Nacimiento"
        class="col-12 col-sm-6"
        standout="bg-blue text-white"
        v-model.trim="lugarnacimiento"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo vacío']"
      />
      <q-select
        label="Tipo de Sangre"
        class="col-12 col-sm-6"
        standout="bg-blue text-white"
        :options="opcionesdos"
        v-model="tiposangre"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo vacío']"
      />
      <q-input
        label="Estado Actual"
        class="col-12 col-sm-6"
        standout="bg-blue text-white"
        v-model.trim="estadoactual"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo vacío']"
      />
      <q-toggle
        label="Confirmo que todos los datos son correctos."
        v-model="condiciones"
        class="col-12"
      />
      <div class="col-12">
        <q-btn label="Crear Historia Clínica"
        type="Crear Historia Clínica"
        color="primary"
        outline rounded />

        <q-btn
          label="Borrar"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
    <!--<pre>{{productos}}</pre>-->

    <lista-productos :productos="productos" class="q-mt-xl" />
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import ListaProductos from "src/components/ListaProductos.vue";
import { ref } from "vue";

export default {
  components: { ListaProductos },
  setup() {
    const $q = useQuasar();
    const myForm = ref(null);

    const productos = ref([]);

    const edad = ref(null);
    const lugarnacimiento = ref (null);
    const tiposangre = ref (null);
    const estadoactual = ref(null);
    const producto = ref(null);
    const seleccion = ref(null);
    const opciones = ["Femenino", "Masculino", "Otros"];
    const opcionesdos = ["A+", "A-", "AB+","AB-"];
    const condiciones = ref(false);

    const onSubmit = () => {
      if (condiciones.value === false) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "las la-exclamation-triangle",
          message: "¡Por favor, verifica los datos!",
        });
      } else {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "las la-check",
          message: "¡Historia Clínica agregada con éxito!",
        });

        myForm.value.resetValidation();
        productos.value = [...productos.value,
          {
            producto: producto.value,
            prioridad: seleccion.value,
            edad: edad.value,
            lugarnacimiento: lugarnacimiento.value,
            tiposangre : seleccion.value,
            estadoactual : estadoactual.value,
          },
        ];
        onReset();
      }
    };

    const onReset = () => {
      producto.value = null;
      seleccion.value = null;
      condiciones.value = false;
      edad.value = null;
      lugarnacimiento.value = null;
      tiposangre.value = null;
      estadoactual.value = null;
    };

    return {
      producto,
      seleccion,
      opciones,
      condiciones,
      onSubmit,
      onReset,
      myForm,
      productos,
      edad,
      lugarnacimiento,
      tiposangre,
      opcionesdos,
      estadoactual,
    };
  },
};
</script>
