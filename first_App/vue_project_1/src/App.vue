<!-- <script setup>
import { ref } from 'vue'
const count = ref(0)
</script> -->

<!------------------------------------- // Api OPtions -> имеет в себе data, methodts, mounted -->
<script>
export default {
  data() {
    return {
      someObject: {},
      author: {
        books: ['vue1 - advanced Guide', 'vue1 - advanced Guide', 'vue1 - advanced Guide']
      },
      names: {
        firstname: 'jhon',
        lastName: 'Doe'
      }
    }
  },

  computed: {
    publishedBookMessage() {
      return this.author.books.length > 0 ? 'yes' : 'no'
    },
    fullName: {
      // getter
      get() {
        return this.names.firstName + ' ' + this.names.lastName
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        ;[this.names.firstName, this.names.lastName] = newValue.split(' ')
      }
    }
  },

  methods: {},

  mounted() {
    const newObj = {}
    this.someObject = newObj
    console.log(newObj === this.someObject) // false
  }
}
</script>

<!-- ----------------------------------------------------API Composition -->

<!-- <script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
function decrement() {
  count.value = count.value - 1
}

onMounted(() => {
  console.log(`Инициализация прошла ${count.value}`)
})
</script> -->

<!-- <template>
  <span>Счетчик</span>
  <span>{{ count }}</span>
  <div class="container">
    <div>
      <button @click="increment">Count increment</button>
    </div>
    <div class="button2">
      <button @click="decrement">Count dec</button>
    </div>
    <p>Our books</p>
    <span>{{ publishedBookMessage }}</span>
    <div class="names">
      <span>Имя полное</span> <span>{{ fullName.get }}</span>
    </div>
  </div>
</template> -->
