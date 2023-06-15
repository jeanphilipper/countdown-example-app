import { defineStore } from "pinia"
import moment from "moment"
import axios from "axios"

export const useCountdownStore = defineStore({
  id: "countdowns",
  state: () => ({
    items: [],
  }),
  actions: {
    createCountdown(form) {
      // generate id
      const id = Math.random().toString(36).substring(2, 6)
      form.id = id

      this.items.push(form)
      this.sync()
    },
    deleteCountdown(id){
      this.items = this.items.filter(el => el.id != id)
      this.sync()
    },
    sync(){
      axios
        .post(import.meta.env.VITE_BACKEND_URL + "/sync", this.items)
        .then((response) => {
          console.log(response)
        })
        .catch(e => {
          console.error(e)
        })
    },
    init(){
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/countdown")
        .then(response => {
          this.items = response.data
        })
        .catch(e => {
          console.error(e)
        })
    },
  },
})
