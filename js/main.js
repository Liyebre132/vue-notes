const App = {
    data() {
        return {
            notes: [],
            input: ''
        }
    },
    methods: {
        addNote() {
            if (this.input.length > 1) {
                this.notes.push(this.input)
                this.input = ''
            }
        },
        removeNote(index) {
            this.notes.splice(index, 1)
        }
    }
}

Vue.createApp(App).mount('#app')