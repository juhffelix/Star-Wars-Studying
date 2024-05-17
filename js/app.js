const LIST = [ {
        id: 1,
        nome: 'Yoda',
        avatar: '/sw/starwars-images/yoda.png'
    },

    {
        id: 2,
        nome: 'Luke Skywalker',
        avatar: '/sw/starwars-images/luke.png'
    },

    {
        id: 3,
        nome: 'Princesa Léia',
        avatar: '/sw/starwars-images/leia.png'
    },
    {
        id: 4,
        nome: 'Han Solo',
        avatar: '/sw/starwars-images/hansolo.png'
    },
    {
        id: 5,
        nome: 'Darth Vader',
        avatar: '/sw/starwars-images/vader.png'
    },
    {
        id: 6,
        nome: 'Chewbacca',
        avatar: '/sw/starwars-images/chewbacca.png'
    },
    {
        id: 7,
        nome: 'R2D2',
        avatar: '/sw/starwars-images/r2d2.png'
    },
    {
        id: 8,
        nome: 'C3pO',
        avatar: '/sw/starwars-images/c3po.png'
    }]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName} recebeu um like!`)
        },

        reloadPage() {
              window.location.reload();
            },
        
        
            remove(id) {
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id
            })

            this.characters = result

        },
        search() {

            if (this.searchName === '')
             { return alert('Campo de busca precisa ser preenchido')

 }
            const list = this.characters = LIST
            
            const result = list.filter (item => {
                return item.nome === this.searchName
            })

            if (result.length <= 0) {
                alert('Nenhum registro encontrado')
            } else {
                this.characters = result}
        },
        
    }
})