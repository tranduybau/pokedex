<template>
  <div>
    <b-alert show :variant="`alertType`" v-if="isAlertShow">{{ message }}</b-alert>
  </div>
</template>

<script>
  export default {
    name: 'Alert',
    props: {
      alertType: {
        type: String,
        default: 'primary',
      },
      message: {
        type: String,
        default: '',
      },
      isShow: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      isAlertShow: function () {
        return this.isShow;
      },
    },
    updated: function () {
      if (this.isAlertShow) {
        setTimeout(() => {
          this.isAlertShow = false;
        }, 2000);
      }
    },
  };
</script>
