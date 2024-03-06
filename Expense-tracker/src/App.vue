<script>
import HeaderTracker from './components/HeaderTracker.vue'
import Balance from './components/Balance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'
export default {
  components: {
    HeaderTracker,
    Balance,
    IncomeExpenses,
    TransactionList,
    AddTransaction,
  }
}
</script>
<template>
  <div class="container">
    <HeaderTracker />
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
  </div>
</template>
