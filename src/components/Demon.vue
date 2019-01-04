<template>
    <div class="demon" @click="shootMonster">
        <canvas ref="canvas"  :height=this.height>
            width
        </canvas>
    </div>
</template>

<script>
    /* eslint-disable no-console,vue/no-async-in-computed-properties,no-undef,no-unused-vars */

    export default {
        name: "Demon",
        data() {
            return {
                demonType: "imp",
                state: "walking",
                canvasWidth: null,
                canvasHeight: null,
                ctx: null,
                width: 1250 / 5,
                height: 258,
                lastFrame: -1,
                movementInterval: null,
                spriteWidth: 1250,
                spriteHeight: 258,
                curFrame: 0,
                //The total frame is 5
                frameCount: 5,
                //x and y coordinates to render the sprite
                x: 0,
                y: 0,
                //x and y coordinates of the canvas to get the single frame
                srcX: 0,
                srcY: 0,
                //Creating an Image object for our character
                character: new Image()
            }
        },
        props: {
            demon: Object,
            player: Object

        },
        methods: {
            updateAnimation() {
                this.CanvasWidth = this.width / 0.6;
                //Updating the frame index
                if (this.state === "walking") {
                    this.curFrame = ++(this.curFrame) % this.frameCount;
                } else if (this.state === "shot") {
                    this.curFrame += 1;
                    if (this.curFrame >= this.lastFrame) {
                        this.monsterWalking();
                    }
                } else if (this.state === "dead") {
                    if (this.curFrame < this.lastFrame - 1) {
                        this.curFrame += 1;
                    }
                }
                //Calculating the x coordinate for spritesheet
                this.ctx.clearRect(this.x, this.y, this.width, this.height);
                this.srcX = this.curFrame * this.width;
            },
            drawSprites() {
                this.updateAnimation();
                this.ctx.drawImage(this.character, this.srcX, this.srcY, this.width, this.height, this.x, this.y, this.width, this.height);
            },
            monsterWalking() {
                this.character.src = require('../assets/' + this.demonType + '-alive.png');
                this.spriteWidth = 1250;
                this.spriteHeight = 258;
                this.state = "walking";
                this.frameCount = 5;
                this.curFrame = 0;
                this.lastFrame = -1;
            },
            monsterShot() {
                this.character.src = require('../assets/' + this.demonType + '-hurt.png');
                //the with and height of our spritesheet
                this.spriteWidth = 750;
                this.spriteHeight = 258;
                this.state = "shot";
                this.frameCount = 3;
                this.curFrame = 0;
                this.lastFrame = 3;
            },
            monsterDead() {
                this.character.src = require('../assets/' + this.demonType + '-dead.png');
                this.spriteWidth = 1250;
                this.spriteHeight = 258;
                this.state = "dead";
                this.frameCount = 5;
                this.curFrame = 0;
                this.lastFrame = 5;

            },
            shootMonster() {
                //Setting the source to the image file
                let demonId = this.demon.id;
                this.$emit('shot', demonId);
                // if (this.player.shotgunAmmo !== 0 && this.demon.health > 0) {
                if (this.demon.health > 0) {
                    this.monsterShot();
                } else if (this.demon.health < 0) {
                    this.monsterDead();
                }
            }

        }
        ,
        mounted() {
            this.CanvasWidth = this.width / 0.6;
            this.demonType = this.demon.type.toLowerCase();
            this.ctx = this.$refs.canvas.getContext("2d");
            if (this.demon.health > 0) {
                this.monsterWalking();
            } else {
                this.monsterDead();
            }
            this.movementInterval = setInterval(this.drawSprites, 150);
        }
    }
</script>

<style scoped>
    .demon {
        display: inline-block;
    }
    canvas {
        position: relative;
        max-width: 190px;
        max-height: 200px;
    }

    img {
        height: 16vh;
    }

</style>