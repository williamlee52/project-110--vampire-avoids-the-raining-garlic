sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 100)
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    umbrella = sprites.createProjectileFromSprite(img`
. . . . . . . a a a . . . . . . 
. . . . . . a a a a a . . . . . 
. . . . . a a a a a a a . . . . 
. . . . a a a a a a a a a . . . 
. . . a a a a a a a a a a a . . 
. . a . a . a . a . a . a . a . 
. . . . . . . . c . . . . . . . 
. . . . . . . . c . . . . . . . 
. . . . . . . . c . . . . . . . 
. . . . . c . . c . . . . . . . 
. . . . . c . . c . . . . . . . 
. . . . . c c c c . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, vampire, 0, -100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 100)
    info.changeLifeBy(-1)
})
let garlic: Sprite = null
let umbrella: Sprite = null
let vampire: Sprite = null
scene.setBackgroundColor(11)
vampire = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . . 
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . . 
. . . f 1 b 1 b 1 b f 1 1 f d d d f . . . . . . 
. . . f b f b f f c f 1 1 f c d d f . . . . . . 
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . . 
. . . . . . . c c b d b 1 b 1 f c f . . . . . . 
. . . . . . . f f f b f b f d f f . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f c 1 1 1 c f . . . . 
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . . f f f f b f b f b f . . . . 
. . . . . . . . . . . f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(vampire)
info.setLife(3)
vampire.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(30)
game.onUpdateInterval(300, function () {
    garlic = sprites.create(img`
. . . . . . . 5 . . . . . . . . 
. . . . . . 5 d 5 . . . . . . . 
. . . . . 5 d d d 5 . . . . . . 
. . . . 5 d d 5 d d 5 . . . . . 
. . . 5 d d 5 d 5 d d 5 . . . . 
. . 5 d d d d 5 d 5 d d 5 . . . 
. 5 d d d d d 5 d 5 d d d 5 . . 
. 5 d d d d d 5 d 5 d d d 5 . . 
. 5 d d d d d 5 d 5 d d d 5 . . 
. 5 d d d d d 5 d 5 d d d 5 . . 
. 5 d d d d d 5 d 5 d d d 5 . . 
. . 5 d d d 5 d 5 d d d 5 . . . 
. . . 5 5 5 . 5 . 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    garlic.setVelocity(0, 100)
    garlic.setPosition(Math.randomRange(0, 160), 0)
})
