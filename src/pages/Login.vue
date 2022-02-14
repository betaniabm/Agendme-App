<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <q-card class="my-card">
        <div class="q-pa-md">
          <div class="text-h6 q-mb-xs">Our Changing Planet</div>
          <q-card-section class="text-dark">
            <div class="text-h6">Iniciar Sesión</div>
            <div class="text-subtitle2">Ingresa a tu AgendME</div>
          </q-card-section>
          <q-icon name="print" class="text-teal" style="font-size: 4.4em;" />
          <div class="q-pa-md" style="max-width: 400px">

                <q-form
                  @submit="onSubmit"
                  @reset="onReset"
                  class="q-gutter-md"
                >
                  <q-input
                    filled
                    v-model="name"
                    label="Usuario o Correo"
                    hint="Usuario o Correo"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Por favor, rellene el campo']"
                  />

                  <q-input
                    filled
                    type="Contraseña"
                    v-model="age"
                    label="Contraseña"
                    lazy-rules
                    :rules="[
                      val => val !== null && val !== '' || 'Por favor, rellene el campo',
                      val => val > 0 && val < 100 || 'Por favor, rellene el campo'
                    ]"
                  />

                  <div>
                    <q-btn outline rounded label="Iniciar Sesión" type="submit" color="primary"/>
                  </div>
                </q-form>

              </div>

        </div>
    </q-card>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
      name,
      age,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Rellena los Campos para Iniciar Sesión'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}
</script>
