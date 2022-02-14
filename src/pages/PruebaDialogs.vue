<template>
  <q-page class="q-pa-md">

    <div class="q-pa-md row items-start q-gutter-md">

    <q-list bordered class="rounded-borders" style="max-width: 600px">
      <q-item-label class="bg-light-blue-7 text-white text-h5" header>Perfil de Pacientes Adultos</q-item-label>

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">GitHub</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">Giovanna Felini</span>
            <span class="text-grey-8"> - Paciente Regular</span>
          </q-item-label>
          <q-item-label caption lines="1">
            {{ name }}
            Vista previa de la descripción del paciente.
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <span class="cursor-pointer" label="Click me" color="primary" @click="medium = true">Abrir Historia Clinica</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="las la-trash" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="las la-check" />
            <q-btn size="12px" flat dense round icon="las la-plus-circle" @click="prompt" />
            <q-btn class="gt-xs" size="12px" color="grey" round flat dense
              :icon="expanded ? 'las la-caret-up' : 'las la-caret-down'"
              @click="expanded = !expanded"
            />
          </div>
        </q-item-section>
      </q-item>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>

      <q-separator spaced />

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">GitHub</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">Giovanna Felini</span>
            <span class="text-grey-8"> - Paciente Regular</span>
          </q-item-label>
          <q-item-label caption lines="1">
            {{ name }}
            Vista previa de la descripción del paciente.
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <span class="cursor-pointer" label="Click me" color="primary" @click="medium = true">Abrir Historia Clinica</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="las la-trash" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="las la-check" />
            <q-btn size="12px" flat dense round icon="las la-plus-circle" @click="prompt" />
            <q-btn class="gt-xs" size="12px" color="grey" round flat dense
              :icon="expanded ? 'las la-caret-up' : 'las la-caret-down'"
              @click="expanded = !expanded"
            />
          </div>
        </q-item-section>
      </q-item>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>

      <q-separator spaced />

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">GitHub</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">Giovanna Felini</span>
            <span class="text-grey-8"> - Paciente Regular</span>
          </q-item-label>
          <q-item-label caption lines="1">
            {{ name }}
            Vista previa de la descripción del paciente.
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <span class="cursor-pointer" label="Click me" color="primary" @click="medium = true">Abrir Historia Clinica</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="las la-trash" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="las la-check" />
            <q-btn size="12px" flat dense round icon="las la-plus-circle" @click="prompt" />
            <q-btn class="gt-xs" size="12px" color="grey" round flat dense
              :icon="expanded ? 'las la-caret-up' : 'las la-caret-down'"
              @click="expanded = !expanded"
            />
          </div>
        </q-item-section>
      </q-item>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>

      <q-separator spaced />

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">GitHub</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">Giovanna Felini</span>
            <span class="text-grey-8"> - Paciente Regular</span>
          </q-item-label>
          <q-item-label caption lines="1">
            {{ name }}
            Vista previa de la descripción del paciente.
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <span class="cursor-pointer" label="Click me" color="primary" @click="medium = true">Abrir Historia Clinica</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="las la-trash" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="las la-check" />
            <q-btn size="12px" flat dense round icon="las la-plus-circle" @click="prompt" />
            <q-btn class="gt-xs" size="12px" color="grey" round flat dense
              :icon="expanded ? 'las la-caret-up' : 'las la-caret-down'"
              @click="expanded = !expanded"
            />
          </div>
        </q-item-section>
      </q-item>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>

    </q-list>

    <!-- Cards de Información-->
    <div class="col-3">
      <q-card
      class="my-card text-white"
      >
      <q-img
        class="absolute-full"
        src="../assets/fondo-general.svg"
        style="height: 200px bg-image"
      ></q-img>

      <q-card-section>
        <div class="text-h6">Nuestro Sistema</div>
        <div class="text-subtitle2">está hecho para ti</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ loremdos }}
      </q-card-section>

      <q-card-actions align="right">
        <q-btn outline rounded flat icon-right="las la-chevron-circle-right" label="Conoce más" />
      </q-card-actions>

    </q-card>
    </div>

    <div class="col-3">
      <q-card class="my-card">
      <q-card-section horizontal>
        <q-img
          class="col"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />

        <q-card-actions horizontal class="justify-around">
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
      </q-card>
    </div>
    <!-- Cards de Información-->
    </div>



  <!-- Aqui va todo el contenido de la Historia Clínica-->
  <q-dialog v-model="medium" persistent transition-show="scale" transition-hide="scale">
      <q-card style="width: 700px; max-width: 80vw;">

        <q-card-section style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
          <div class="text-h4 text-white" text-white>Historia Clínica del Paciente</div>
        </q-card-section>

        <q-space/>

        <q-card-section class="q-pt-none">
          <div class="text-h6">Nombre Completo</div>
          <div class="text-body-1">Luisiana R. Hernández N.</div>
        </q-card-section>

        <q-separator color="blue" inset/>

        <q-card-section class="q-pt-none">
          <div class="text-h6">Descripción</div>
          <div class="text-body-1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</div>
        </q-card-section>

        <q-space/>
        <q-separator color="blue" inset/>

        <q-card-section class="q-pt-none">
          <div class="text-h6">Tipo de Sangre</div>
          <div class="text-body-1">ORH+</div>
        </q-card-section>

        <q-separator color="blue" inset/>

        <q-card-section class="q-pt-none">
          <div class="text-h6">Antecedentes del Paciente</div>
          <div class="text-body-1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- Aqui termina todo el contenido de la Historia Clínica-->

    <!--<span v-if="name" class="text-h6">{{ name }}</span>
    <q-separator spaced v-if="name" /> -->

    <!-- <div class="q-pa-md q-gutter-sm">
      <q-btn label="Alert" color="primary" @click="alert" />
      <q-btn label="Confirm" color="primary" @click="confirm" />
      <q-btn label="Prompt" color="primary" @click="prompt" />
     </div>-->
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'PruebaDialogs',

  setup () {
    const $q = useQuasar()
    const name = ref()

    function alert () {
      $q.dialog({
        title: 'Alert',
        message: 'Some message'
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }

    function confirm () {
      $q.dialog({
        title: 'Confirm',
        message: 'Would you like to turn on the wifi?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        // console.log('>>>> OK')
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }

    function prompt () {
      $q.dialog({
        title: 'Ingresa una Descripción',
        message: '',
        prompt: {
          model: '',
          type: 'text' // optional
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        console.log('>>>> OK, received', data)
        name.value = data
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }

    return { alert, confirm, prompt, name,
      expanded: ref(false),
      medium: ref(false),
      stars: ref(4),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      loremdos: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    }
  }
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
