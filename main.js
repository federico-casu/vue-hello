/* ----------------------------------------------------------------------

Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

---------------------------------------------------------------------- */

const { createApp } = Vue;

createApp({
    data() {
        return {
            /* 
                qui dichiaro e iniizializzo le variabili con la sintassi chiave : valore
            */
           message: 'Hello Vue',
           message2: '!',
           linkImg: 'https://images.unsplash.com/photo-1498447817931-2edda1605b97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
           linkImg2: 'https://images.unsplash.com/photo-1511745235279-2f7276d5ba65?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
           imgProperties: 'max-width: 600px; border: 5px solid red;'
        }
    },
    methods: {
        /*  qui dichiaro le funzioni e la loro logica 
            con la seguente sintassi:

            miaFunzione() {
                // logica della funzione
            }
        */
    }
}).mount('#app');