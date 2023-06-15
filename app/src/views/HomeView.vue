<script>
import LayoutTemplate from "../components/LayoutTemplate.vue"
import { useCountdownStore } from "../stores/countdowns"
import { mapStores } from "pinia"

export default {
  computed: {
    ...mapStores(useCountdownStore),
  },
  mounted(){
    this.countdownsStore.init()
  },
  data(){
    return {
      isNewModalOpened: false,
      countDownForm: {
        title: "",
        datetime: "",
      },
    }
  },
  components: {
    LayoutTemplate,
  },
  methods: {
    reset(){
      this.isNewModalOpened = false
      this.countDownForm = {
        title: "",
        datetime: "",
      }
    },
    newCountDown(){
      this.countdownsStore.createCountdown(this.countDownForm)
      this.reset()
    },
  },
}
</script>

<template>
    <layout-template @new="isNewModalOpened = true">
      <el-empty description="There is no countdown" v-if="countdownsStore.items.length == 0"></el-empty>
      <div class="flex" v-else>
        <el-card class="box-card m-5 min-w-[25%]" v-for="countdown in countdownsStore.items" :key="countdown.id">
          <div slot="header" class="flex items-center">
            <span class="block font-bold">{{ countdown.title }}</span>
            <el-button type="danger" icon="el-icon-delete" circle class="!block !ml-auto" @click.prevent="countdownsStore.deleteCountdown(countdown.id)"></el-button>
          </div>
          <el-statistic :value="new Date(countdown.datetime)" time-indices format="HH:mm:ss"></el-statistic>
        </el-card>
      </div>
      <el-dialog
        title="Create a new countdown"
        :visible.sync="isNewModalOpened"
        width="50%"
      >
      <el-form ref="form" :model="countDownForm" label-width="120px">
        <el-form-item label="Event title">
          <el-input v-model="countDownForm.title"></el-input>
        </el-form-item>
        <el-form-item label="Event date">
          <el-col>
            <el-date-picker
              v-model="countDownForm.datetime"
              type="datetime"
              placeholder="Select date and time">
            </el-date-picker>
          </el-col>
        </el-form-item>
        </el-form>
        
        <span slot="footer" class="dialog-footer">
          <el-button @click="reset">Cancel</el-button>
          <el-button type="primary" @click="newCountDown">Confirm</el-button>
        </span>
      </el-dialog>
    </layout-template>
</template>

<style>
</style>