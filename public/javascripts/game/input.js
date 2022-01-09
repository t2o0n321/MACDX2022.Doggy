class inputHandler{
    #lastKey = ''
    constructor(){
        window.addEventListener('keydown', (e)=>{
            switch(e.key){
                case 'w':
                    this.#lastKey = 'dw';
                    break;
                case 'a':
                    this.#lastKey = 'da';
                    break;
                case 's':
                    this.#lastKey = 'ds';
                    break;
                case 'd':
                    this.#lastKey = 'dd';
                    break;
                default:
                    this.#lastKey = '';
                    break;
            }
        })
        window.addEventListener('keyup', (e)=>{
            switch(e.key){
                case 'w':
                    this.#lastKey = 'uw';
                    break;
                case 'a':
                    this.#lastKey = 'ua';
                    break;
                case 's':
                    this.#lastKey = 'us';
                    break;
                case 'd':
                    this.#lastKey = 'ud';
                    break;
                default:
                    this.#lastKey = '';
                    break;
            }
        })    
    }
    getLastKey() {return this.#lastKey}
}

export default inputHandler;