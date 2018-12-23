<template>
  <div>
    <b-col cols="4">
      <b-card title="Pokemon Info" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image"
      img-top tag="article" style="max-width: 20rem;" class="mb-2">
        <p class="card-text">
          {{ name }}
        </p>
        <b-button to="/" variant="primary">Go back to home</b-button>
      </b-card>
    </b-col>
  </div>
</template>
