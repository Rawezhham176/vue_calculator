let app = new Vue({
    el: '#app',
    data: {
        calc: '',
        value: null
    }, 
    methods: {
        add() {
            this.calc += '+'
        },
        substract() {
            this.calc -= '-'
        },
        divide() {
            this.calc /= '/'
        },
        multiply() {
            this.calc *= '*'
        },
        setModifier(x) {
            this.calc += x
        },
        calculate () {
            this.value = eval(this.calc)
            this.calc = this.value
        },
        reset () {
            this.value = null
            this.calc = ''
        },
        key (e) {
            console.log(e.keyCode)
        }
    }
})