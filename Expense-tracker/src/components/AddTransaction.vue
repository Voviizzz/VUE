<script setup>
import { ref, defineEmits } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()
const text = ref('')
const amount = ref('')

const emit = defineEmits(['transactionSubmited'])

const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error('Please add a text and amount')
  } else {
    const transactionData = {
      text: text.value,
      amount: parseFloat(amount.value)
    }
    emit('transactionSubmited', transactionData)

    text.value = ''
    amount.value = ''
  }
}
</script>

<template>
  <div>
    <h3>Add new transaction</h3>
    <form id="form">
      <div class="form-control">
        <label for="text">Text</label>
        <input type="text" id="text " placeholder="Enter text" v-model="text" />
      </div>
      <div class="form-control">
        <label for="amount"
          >Amount <br />
          (negative - expense, positive - income)</label
        >
        <input type="text" id="amount" placeholder="Enter amount" v-model="amount" />
      </div>
      <button class="btn" @click.prevent="onSubmit" @keyup.enter.prevent="onSubmit">
        Add transaction
      </button>
    </form>
  </div>
</template>
