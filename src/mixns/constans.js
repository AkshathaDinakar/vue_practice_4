const sharedItems = {
    data() {
        return {
            name: 'aditya'
        }
    },
    computed : {
        getName(){
            return this.name
        }
    },
    methods: {
        getGame() {
            console.log(this.name)
        }
    }
}
export default sharedItems