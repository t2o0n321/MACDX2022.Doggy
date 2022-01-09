import Player from './player.js';
import inputHandler from './input.js';
import {drawStatusText} from './utils.js';

// Wait until everything loaded
window.addEventListener('load', ()=>{
    const loading = document.getElementById('loading');
    loading.style.display = 'none';

    const cnvs = document.getElementById('game_cnvs');
    const ctx = cnvs.getContext('2d');
    cnvs.width = window.innerWidth;
    cnvs.height = window.innerHeight;
    
    const player = new Player(cnvs.width, cnvs.height);

    var input = new inputHandler()

    function animate(){
        ctx.clearRect(0, 0, cnvs.width, cnvs.height);
        player.draw(ctx);
        drawStatusText(ctx, input.getLastKey());
        requestAnimationFrame(animate);
    }

    animate();
})