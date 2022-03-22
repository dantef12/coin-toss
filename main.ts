input.onGesture(Gesture.Shake, function () {
    soundExpression.slide.playUntilDone()
    coin_1 = randint(1, 2)
    coin_2 = randint(1, 2)
    if (coin_1 == 1 && coin_2 == 1) {
        basic.showString("2 heads")
        basic.showString("Point For PLayer 1")
        player_1_score += 1
        basic.showNumber(player_1_score)
    } else if (coin_1 == 2 && coin_2 == 2) {
        basic.showString("2 tails")
        basic.showString("Point For PLayer 1")
        player_1_score += 1
        basic.showNumber(player_1_score)
    } else {
        basic.showString("Tails and Heads")
        basic.showString("Point For PLayer 2")
        player_2_score += 1
        basic.showNumber(player_2_score)
        if (player_1_score == 3) {
            music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
            basic.showNumber(player_1_score)
            basic.showString("to")
            basic.showNumber(player_2_score)
            basic.showString("Player 1 Win!")
            basic.showIcon(IconNames.Happy)
            basic.clearScreen()
            coin_1 = randint(1, 2)
            coin_2 = randint(1, 2)
            player_1_score = 0
            player_2_score = 0
            if (player_2_score == 3) {
                let player_2 = 0
                music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
                basic.showNumber(player_2)
                basic.showString("to")
                basic.showNumber(player_1_score)
                basic.showString("Player 2 Win!")
                basic.showIcon(IconNames.Happy)
                basic.clearScreen()
                coin_1 = randint(1, 2)
                coin_2 = randint(1, 2)
                player_1_score = 0
                player_2_score = 0
            }
        }
    }
})
let player_2_score = 0
let player_1_score = 0
let coin_2 = 0
let coin_1 = 0
coin_1 = 0
coin_2 = 0
player_1_score = 0
player_2_score = 0
