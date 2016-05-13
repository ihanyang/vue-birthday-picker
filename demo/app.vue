<style>
	p, h2, h4, div, ul, li, body {
		padding: 0;
		margin: 0;
	}
	body {
		font-family: "微软雅黑";
		background-color: #F0F0F0;
	}

	#app > .btn {
		display: flex;
		justify-content: space-between;
		padding: 0 .6rem 0 .3rem;
		position: relative;
		font-size: .3rem;
		line-height: .9rem;
		background-color: #FFF;
	}
	#app > .btn::after {
		content: "";
	    width: .2rem;
	    height: .2rem;
	    position: absolute;
	    top: 50%;
	    border-top: 1px solid #CCC;
	    border-right: 1px solid #CCC;
	    transform: rotate(45deg) translateY(-50%);
	}
</style>

<template>
	<div>
		<div class="btn" @click="status = true">
			<span>日期</span>
			<span v-text="date | format"></span>
		</div>
		<date-picker :status.sync="status" :year-value.sync="year" :month-value.sync="month" v-if="status"></date-picker>
	</div>
</template>

<script>
	import datePicker from "../src/date-picker.vue"

	export default {
		data() {
			return {
				status: false,
				year: 1991,
				month: 12,
				date: 692985600000
			}
		},
		created() {
			let deviceWidth = Math.min(640, window.innerWidth, document.documentElement.clientWidth)

			document.documentElement.style.fontSize = `${deviceWidth / 7.5}px`
		},
		components: {
			datePicker
		},
		watch: {
			year(value) {
				this.date = + new Date(`${value}/${this.month}`)
			},
			month(value) {
				this.date = + new Date(`${this.year}/${value}`)
			}
		},
		filters: {
			format(value) {
				let date = new Date(value)

				// 注意兼容性 腊鸡安卓
				let str = date.toLocaleDateString()

				return str.replace(/\b(\w)\b/g, "0$1").slice(0, -3)
			}
		}
	}
</script>