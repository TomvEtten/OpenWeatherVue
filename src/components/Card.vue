<template>
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">
        <slot name="title"></slot>
      </h5>
      <hr/>
        <slot name="content"></slot>
      </div>
    </div>
  </template>

<style scoped>
    .card {
        width: 14rem;
    }
</style>
  