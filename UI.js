export class UI{
    constructor(game){
        this.game = game;
        this.fontSize = 40;
        this.fontFamily = 'Bangers';
        this.livesImage = document.getElementById('lives');
    }
    draw(context){
        context.save();
        context.shadowOffsetX = 2 ;
        context.shadowOffsetY = 2 ;
        context.shadowColor = 'white' ;
        context.shadowBlur = 0;
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;

        //score
        context.fillText('Score: ' + this.game.score, 20, 50);

        //score
        context.fillText('PowerUp Time: ' + (this.game.player.stateTime * 0.001).toFixed(1), 600, 50);

        //timer
        context.font  =this.fontSize *0.8 + 'px ' + this.fontFamily;
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 20, 80)

        //lives
        for(let i = 0; i<this.game.lives; i++)
        context.drawImage(this.livesImage, 40 * i + 20 ,95, 30, 30)

        //gameover message
        if(this.game.gameOver){
            context.textAlign = 'center';
            context.font = this.fontSize *1.5 + 'px ' +this.fontFamily;
            context.fillText('Great!!! Score ' + this.game.score,  this.game.width * 0.5, this.game.height * 0.5)
        }
        context.restore();
    }
}