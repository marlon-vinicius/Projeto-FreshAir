const {createApp} = Vue 

createApp({
    data(){
        return {
            filters: [{nome:'Ventilador de mesa'},{nome: 'Ventilador de teto'},{nome: 'Ventilador de coluna'}, {nome: 'Ventilador de parede'}, {nome: 'Peças de reposição'}],
            produtos: [{nome:'FAM-01', img: '../img/ventilador.png'},{nome: 'FAM-01 Turbo', img: '../img/ventilador.png'},{nome:'FAC-01', img: '../img/ventilador.png'},
                      {nome: 'FAC-01 Turbo', img: '../img/ventilador.png'},{nome:'FAT-01', img: '../img/ventilador.png'},{nome: 'FAC-01 Turbo', img: '../img/ventilador.png'},
                      {nome:'FAP-01', img: '../img/ventilador.png'},{nome: 'FAP-01 Turbo', img: '../img/ventilador.png'},{nome:'FAM-02', img: '../img/ventilador.png'},
                      {nome: 'FAM-02 Turbo', img: '../img/ventilador.png'},{nome:'FAC-02', img: '../img/ventilador.png', img: '../img/ventilador.png'},
                      {nome: 'FAC-02 Turbo', img: '../img/ventilador.png'},{nome:'FAT-02', img: '../img/ventilador.png'},{nome: 'FAC-02 Turbo', img: '../img/ventilador.png'},
                      {nome:'FAP-02', img: '../img/ventilador.png'},{nome: 'FAP-02 Turbo', img: '../img/ventilador.png'},],
            

        }           
    }
   
}).mount("#app")