const {createApp} = Vue 

createApp({
    data(){
        return {
            filters: [{nome:'Ventilador de mesa'},{nome: 'Ventilador de teto'},{nome: 'Ventilador de coluna'}, {nome: 'Ventilador de parede'}, {nome: 'Peças de reposição'}],
            produtos: [{nome:'FAM-01', img: '../img/ventilador.png'},{nome:'FAM-02', img: '../img/ventilador2.png'},
                      {nome:'FAT-01', img: '../img/ventilador_de_teto.png'},{nome:'FAT-02', img: '../img/ventilador_de_teto2.png'},
                      {nome:'FAC-01', img: '../img/ventilador_de_coluna.png'},{nome:'FAC-02', img: '../img/ventilador_de_coluna2.png'},
                      {nome:'FAP-01', img: '../img/ventilador_parede.png'},{nome:'FAP-02', img: '../img/ventilador_parede2.png'},],
        }           
    }
   
}).mount("#app")