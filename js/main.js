const app = new Vue(
    {
        el: "#app",

        data:{
            attivazioneSlide: 0,            // è un numero che ci sta a indicare a che indice stiamo per mostrare sia l'immagine principale che la scroll in basso
            scroll: null,
            lago :[
                {
                    url: 'https://siviaggia.it/wp-content/uploads/sites/2/2020/08/lago-di-ledro-perla-del-trentino-.jpg',
                },
                {
                    url: 'https://cdn.marcopolo.tv/960x480/media/post/4e85frg/lago_di_scanno.jpg',
                },
                {
                
                    url: 'https://siviaggia.it/wp-content/uploads/sites/2/2020/04/lago-molveno-.jpg',
                },
                {
                    url: 'https://www.guidatorino.com/wp-content/uploads/2020/08/lago-orfu-gad.jpg',
                },
                {
                    url: 'https://www.toscana.info/wp-content/uploads/sites/123/lago-orecchiella-garfagnana-hd.jpg',
                },
                {
                    url: 'https://www.bimbiviaggiatori.it/wp-content/uploads/2019/06/Lago-di-Ledro-passeggiate.jpg',
                },
            ]
            
        },
        methods: {
            cliccaImmagine(indexImg){
                this.attivazioneSlide = indexImg
            },

            previous(){                                                 // per andare indietro con le immagine
                if( this.attivazioneSlide === 0){
                    this.attivazioneSlide = this.lago.length -1         // per tornare indietro
                } else{
                    this.attivazioneSlide --;
                }
            }, 

            next(){                                                          // per andare avanti con le immagini
                if( this.attivazioneSlide === this.lago.length -1 ){        // se sono all'ultimo elemento 
                    this.attivazioneSlide = 0                           //lo azzero 
                } else{
                    this.attivazioneSlide ++;
                }
            },

            scrollo(){
              this.scroll = setInterval( this.next, 2000)                 // con questa funzione mi vado a gestire la visualizzazione deelle immagini ogni 2
            },
            stopScroll(){
                clearInterval(this.scroll);    // senza di vesso e il richiamo della variabile non si potrebbe fermare il ciclo
                this.scroll = null;
            }
            
        }
        
    }
)




