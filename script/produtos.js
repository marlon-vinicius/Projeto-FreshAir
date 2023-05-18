const {createApp} = Vue 

createApp({
    data(){
        return {
            produtos: [{nome:'Ventilador de mesa'},{nome: 'Ventilador de teto'},{nome: 'Ventilador de coluna'}, {nome: 'Ventilador de parede'}, {nome: 'Peças de reposição'}],
            modelos: [{nome:'FAM-01'},{nome: 'FAM-01 Turbo'},{nome:'FAC-01'},{nome: 'FAC-01 Turbo'},{nome:'FAT-01'},{nome: 'FAC-01 Turbo'}, {nome:'FAP-01'},{nome: 'FAP-01 Turbo'},
                      {nome:'FAM-02'},{nome: 'FAM-02 Turbo'},{nome:'FAC-02'},{nome: 'FAC-02 Turbo'},{nome:'FAT-02'},{nome: 'FAC-02 Turbo'}, {nome:'FAP-02'},{nome: 'FAP-02 Turbo'},],

        }           
    }
   
}).mount("#app")