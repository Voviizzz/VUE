<script setup>
import Balance from './components/Balance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'
import HeaderTracker from './components/HeaderTracker.vue'
import { useToast } from 'vue-toastification'
import { ref, computed, onMounted } from 'vue'

const transactions = ref([])
const toast = useToast()

const total = computed(() => {
  return transactions.value.reduce((acc, item) => (acc += item.amount), 0)
})

//CHECK LOCAL STORAGE
onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'))
  if (savedTransactions) {
    transactions.value = savedTransactions
  }
})

const saveTransctionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}
//income
const income = computed(() => {
  return transactions.value
    .filter((transactions) => transactions.amount > 0)
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2)
})

const expense = computed(() => {
  return transactions.value
    .filter((transactions) => transactions.amount < 0)
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2)
})

//add transaction
const handleTransactionSubmited = (transactionData) => {
  transactions.value.push({
    id: transactions.value.length + 1,
    text: transactionData.text,
    amount: transactionData.amount
  })
  toast.success('sucsses')
  saveTransctionsToLocalStorage()
}

//Delite transaction
const handleTransactionDelited = (id) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id)
  toast.success('Transaction deleted')
  saveTransctionsToLocalStorage
}
//SAVE TO LOCAL STORAGE
</script>
<template>
  <div>
    <HeaderTracker />
    <div class="container">
      <Balance :total="total" />
      <IncomeExpenses :income="+income" :expense="expense" />
      <TransactionList
        :transactions="transactions"
        @transactionDelited="handleTransactionDelited"
      />
      <AddTransaction @transactionSubmited="handleTransactionSubmited" />
    </div>
  </div>
</template>
