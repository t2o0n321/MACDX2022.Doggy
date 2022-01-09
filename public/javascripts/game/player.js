class Player{
    #game_width;
    #game_height;
    #dog_width;
    #dog_height;
    #state = [];
    #image = document.getElementById('dogimg');

    constructor(game_width, game_height){
        this.#game_width = game_width;
        this.#game_height = game_height;
        this.#dog_width = 200;
        this.#dog_height = 181;
        // state of doggy
        this.current_state = this.#state[0];
        // pos
        this.x = 0;
        this.y = this.#game_height - this.#dog_height;
        // navigation of doggy
        this.frameX = 1;
        this.frameY = 0;
    }
    // function
    draw(contex){
        // drawImage(image_src, sx, sy, sw, sh, start_posX, start_posY, scaleX, scaleY)
        contex.drawImage(this.#image, this.#dog_width*this.frameX, this.#dog_height*this.frameY, this.#dog_width, this.#dog_height, this.x, this.y, this.#dog_width, this.#dog_height);
    }
}

export default Player