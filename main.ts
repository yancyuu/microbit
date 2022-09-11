input.onButtonPressed(Button.A, function () {
    snake.turn(Direction.Right, 90)
})
input.onButtonPressed(Button.B, function () {
    snake.turn(Direction.Left, 90)
})
let snake: game.LedSprite = null
snake = game.createSprite(randint(0, 3), randint(0, 3))
let apple = game.createSprite(randint(0, 4), randint(0, 4))
apple.set(LedSpriteProperty.Blink, 500)
let score = 0
basic.forever(function () {
    basic.pause(1000)
    snake.move(1)
    if (snake.isTouching(apple)) {
        score = score + 1
        apple.delete()
        apple = game.createSprite(randint(0, 4), randint(0, 4))
        apple.set(LedSpriteProperty.Blink, 500)
    }
    snake.ifOnEdgeBounce()
})
