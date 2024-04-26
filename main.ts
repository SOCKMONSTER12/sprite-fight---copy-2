namespace SpriteKind {
    export const BIOMES = SpriteKind.create()
    export const Plant = SpriteKind.create()
    export const PLANTS = SpriteKind.create()
    export const THE_PLAYERS = SpriteKind.create()
}
function Player_2 () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
        . . . d d d d d d d d . . . 
        . . d d d d d d d d d d . . 
        . d d d d d d d d d d d d . 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        . d d d d d d d d d d d d . 
        . . d d d d d d d d d d . . 
        . . . d d d d d d d d . . . 
        `, SpriteKind.Player))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setKind(SpriteKind.THE_PLAYERS)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 1000, 1000)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
    toolbar2 = Inventory.create_toolbar([
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ], 3)
    inventory2 = Inventory.create_inventory([
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ], 50)
    toolbar2.setFlag(SpriteFlag.Invisible, true)
    inventory2.setScale(0.5, ScaleAnchor.Middle)
    inventory2.setFlag(SpriteFlag.Invisible, true)
    statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar2.value = 100
    statusbar2.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)))
    statusbar2.setColor(6, 2, 10)
    statusbar2.setBarBorder(1, 15)
    statusbar2.setLabel("HP")
    statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).z = -10
    statusbar2.z = -10
}
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (toolbar3.get_number(ToolbarNumberAttribute.SelectedIndex) > 1) {
        toolbar3.set_number(ToolbarNumberAttribute.SelectedIndex, 0)
    } else {
        toolbar3.change_number(ToolbarNumberAttribute.SelectedIndex, 1)
    }
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (toolbar2.get_number(ToolbarNumberAttribute.SelectedIndex) > 1) {
        toolbar2.set_number(ToolbarNumberAttribute.SelectedIndex, 0)
    } else {
        toolbar2.change_number(ToolbarNumberAttribute.SelectedIndex, 1)
    }
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (toolbar4.get_number(ToolbarNumberAttribute.SelectedIndex) > 1) {
        toolbar4.set_number(ToolbarNumberAttribute.SelectedIndex, 0)
    } else {
        toolbar4.change_number(ToolbarNumberAttribute.SelectedIndex, 1)
    }
})
mp.onControllerEvent(ControllerEvent.Connected, function (player2) {
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).z = 1
        statusbar2.z = 1
    }
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Three))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).z = 1
        statusbar3.z = 1
    }
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Four))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).z = 1
        statusbar4.z = 1
    }
    gs = true
})
function SET_SEED () {
    Seed = Seed * 6
    SEED()
    Seed += 2
    Seed = Math.abs(Seed)
}
function Player_4 () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
        . . . d d d d d d d d . . . 
        . . d d d d d d d d d d . . 
        . d d d d d d d d d d d d . 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        . d d d d d d d d d d d d . 
        . . d d d d d d d d d d . . 
        . . . d d d d d d d d . . . 
        `, SpriteKind.Player))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setKind(SpriteKind.THE_PLAYERS)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four), 100, 100)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera4, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)))
    toolbar4 = Inventory.create_toolbar([
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ], 3)
    inventory4 = Inventory.create_inventory([
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ], 50)
    toolbar4.setFlag(SpriteFlag.Invisible, true)
    inventory4.setScale(0.5, ScaleAnchor.Middle)
    inventory4.setFlag(SpriteFlag.Invisible, true)
    statusbar4 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar4.value = 100
    statusbar4.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)))
    statusbar4.setColor(6, 2, 10)
    statusbar4.setBarBorder(1, 15)
    statusbar4.setLabel("HP")
    statusbar4.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).z = -10
    statusbar4.z = -10
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 0)
        inventory.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
        inventory.setFlag(SpriteFlag.Invisible, false)
        timer.after(100, function () {
            if (controller.menu.isPressed() && mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
                inventory.setFlag(SpriteFlag.Invisible, true)
                mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 1000, 1000)
            }
        })
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 0)
        inventory2.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y)
        inventory2.setFlag(SpriteFlag.Invisible, false)
        timer.after(100, function () {
            if (controller.menu.isPressed() && mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
                inventory2.setFlag(SpriteFlag.Invisible, true)
                mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 100)
            }
        })
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.A)) {
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three), 0, 0)
        inventory3.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y)
        inventory3.setFlag(SpriteFlag.Invisible, false)
        timer.after(100, function () {
            if (controller.menu.isPressed() && mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.A)) {
                inventory3.setFlag(SpriteFlag.Invisible, true)
                mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three), 100, 100)
            }
        })
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.A)) {
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four), 0, 0)
        inventory4.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).y)
        inventory4.setFlag(SpriteFlag.Invisible, false)
        timer.after(100, function () {
            if (controller.menu.isPressed() && mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.A)) {
                inventory4.setFlag(SpriteFlag.Invisible, true)
                mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four), 100, 100)
            }
        })
    }
})
function SPRITESSTRUCTURES () {
    for (let value of tiles.getTilesByType(sprites.castle.tileGrass3)) {
        if (Seed == 10) {
            tiles.setTileAt(value, assets.tile`myTile2`)
            for (let index = 0; index < 1; index++) {
                SET_SEED()
            }
        }
        SET_SEED()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        if (Seed == 10) {
            tiles.setTileAt(value, assets.tile`myTile3`)
            for (let index = 0; index < 1; index++) {
                SET_SEED()
            }
        }
        SET_SEED()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        if (Seed == 10) {
            tiles.setTileAt(value, assets.tile`myTile5`)
            for (let index = 0; index < 1; index++) {
                SET_SEED()
            }
        }
        SET_SEED()
    }
    for (let value of tiles.getTilesByType(sprites.castle.tileGrass3)) {
        if (Seed == 10) {
            tiles.setTileAt(value, assets.tile`myTile9`)
            for (let index = 0; index < 1; index++) {
                SET_SEED()
            }
        }
        SET_SEED()
    }
    for (let value of tiles.getTilesByType(sprites.castle.tileGrass3)) {
        if (Seed == 10) {
            tiles.setTileAt(value, assets.tile`myTile10`)
            for (let index = 0; index < 1; index++) {
                SET_SEED()
            }
        }
        SET_SEED()
    }
    FillinWorld()
}
function P11Menus () {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
        if (sprites.readDataBoolean(P1_MENU, "Trading") == false) {
            P1_MENUS()
            mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 0)
            P1_MENU.setFlag(SpriteFlag.Invisible, false)
            sprites.setDataBoolean(P1_MENU, "Trading", true)
        }
    }
    if (sprites.readDataBoolean(P1_MENU, "Trading") == true) {
        P1_MENU.onButtonPressed(controller.B, function (selection, selectedIndex) {
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.B)) {
                sprites.destroy(P1_MENU)
                if (selection == "Building Blocks") {
                    P1_BUILDING_BLOCKS.setFlag(SpriteFlag.Invisible, false)
                    timer.after(500, function () {
                        sprites.setDataBoolean(P1_BUILDING_BLOCKS, "Building-Trading", true)
                    })
                    P1_BUILDING_BLOCKS.onButtonPressed(controller.B, function (selection, selectedIndex) {
                        if (sprites.readDataBoolean(P1_BUILDING_BLOCKS, "Building-Trading") == true) {
                            if (selectedIndex == 0) {
                            	
                            } else if (selectedIndex == 1) {
                            	
                            } else if (selectedIndex == 2) {
                            	
                            } else if (selectedIndex == 3) {
                                mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 1000, 1000)
                            }
                        }
                        sprites.destroy(P1_BUILDING_BLOCKS)
                        sprites.destroy(P1_TOOLSWEAPONS)
                        sprites.setDataBoolean(P1_MENU, "Trading", false)
                        sprites.setDataBoolean(P1_BUILDING_BLOCKS, "Building-Trading", false)
                    })
                }
                if (selection == "Tools/Weapons") {
                    P1_TOOLSWEAPONS.setFlag(SpriteFlag.Invisible, false)
                    timer.after(500, function () {
                        sprites.setDataBoolean(P1_TOOLSWEAPONS, "Tool/Weapon-Trading", true)
                    })
                    P1_TOOLSWEAPONS.onButtonPressed(controller.B, function (selection, selectedIndex) {
                        if (sprites.readDataBoolean(P1_TOOLSWEAPONS, "Tool/Weapon-Trading") == true) {
                            if (selectedIndex == 0) {
                            	
                            } else if (selectedIndex == 1) {
                            	
                            } else if (selectedIndex == 2) {
                            	
                            } else if (selectedIndex == 3) {
                            	
                            } else if (selectedIndex == 4) {
                            	
                            } else if (selectedIndex == 5) {
                                mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 1000, 1000)
                            }
                        }
                        sprites.destroy(P1_TOOLSWEAPONS)
                        sprites.destroy(P1_TOOLSWEAPONS)
                        sprites.setDataBoolean(P1_MENU, "Trading", false)
                        sprites.setDataBoolean(P1_TOOLSWEAPONS, "Tool/Weapon-Trading", false)
                    })
                }
                if (selection == "Exit") {
                    sprites.destroy(P1_BUILDING_BLOCKS)
                    sprites.destroy(P1_TOOLSWEAPONS)
                    sprites.setDataBoolean(P1_MENU, "Trading", false)
                    sprites.setDataBoolean(P1_BUILDING_BLOCKS, "Building-Trading", false)
                    sprites.setDataBoolean(P1_TOOLSWEAPONS, "Tool/Weapon-Trading", false)
                    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 1000, 1000)
                }
            }
        })
    }
}
function P1_MENUS () {
    P1_MENU = miniMenu.createMenu(
    miniMenu.createMenuItem("Building Blocks"),
    miniMenu.createMenuItem("Tools/Weapons"),
    miniMenu.createMenuItem("Exit")
    )
    sprites.setDataBoolean(P1_MENU, "Trading", false)
    P1_MENU.setTitle("Shop")
    P1_MENU.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 75)
    P1_MENU.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 30)
    P1_MENU.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 2)
    P1_MENU.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 2)
    P1_MENU.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Alignment, 1)
    P1_TOOLSWEAPONS = miniMenu.createMenu(
    miniMenu.createMenuItem("Stone Sword", img`
        . . . . . . . . . . . . . f f f 
        . . . . . . . . . . . . f b c f 
        . . . . . . . . . . . f b c b f 
        . . . . . . . . . . f b c b f . 
        . . . . . . . . . f b c b f . . 
        . . . . . . . . f b c b f . . . 
        . . . . . . . f b c b f . . . . 
        . . . . . . f b c b f . . . . . 
        . . . . . f b c b f . . . . . . 
        . f f . f b c b f . . . . . . . 
        . f e f b c b f . . . . . . . . 
        . . f e c b f . . . . . . . . . 
        . f e c e f . . . . . . . . . . 
        f e e e f e f . . . . . . . . . 
        e e e f . f f . . . . . . . . . 
        c e f . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Stone Pickaxe"),
    miniMenu.createMenuItem("Stone Axe"),
    miniMenu.createMenuItem("War Hammer"),
    miniMenu.createMenuItem("Stone Slingshot"),
    miniMenu.createMenuItem("Exit")
    )
    sprites.setDataBoolean(P1_TOOLSWEAPONS, "Tool/Weapon-Trading", false)
    P1_TOOLSWEAPONS.setTitle("Tools/Weapons")
    P1_TOOLSWEAPONS.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 75)
    P1_TOOLSWEAPONS.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 30)
    P1_TOOLSWEAPONS.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    P1_TOOLSWEAPONS.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 1)
    P1_TOOLSWEAPONS.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Alignment, 1)
    P1_BUILDING_BLOCKS = miniMenu.createMenu(
    miniMenu.createMenuItem("Stone Wall"),
    miniMenu.createMenuItem("Wooden Barrier"),
    miniMenu.createMenuItem("Shock Gate"),
    miniMenu.createMenuItem("Exit")
    )
    sprites.setDataBoolean(P1_BUILDING_BLOCKS, "Building-Trading", false)
    P1_BUILDING_BLOCKS.setTitle("Building Blocks")
    P1_BUILDING_BLOCKS.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 75)
    P1_BUILDING_BLOCKS.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 30)
    P1_BUILDING_BLOCKS.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    P1_BUILDING_BLOCKS.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 1)
    P1_BUILDING_BLOCKS.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Alignment, 1)
    for (let value of sprites.allOfKind(SpriteKind.MiniMenu)) {
        value.setFlag(SpriteFlag.Invisible, true)
    }
}
function FillinWorld () {
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        if (Seed == 10 || Seed == 98) {
        	
        } else {
            tiles.setTileAt(value, assets.tile`myTile8`)
        }
        SET_SEED()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        if (Seed == 10) {
        	
        } else {
            tiles.setTileAt(value, sprites.castle.tileGrass3)
        }
        SET_SEED()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
        if (Seed == 10 || Seed == 98) {
        	
        } else {
            tiles.setTileAt(value, sprites.castle.tileGrass3)
        }
        SET_SEED()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
        if (Seed == 10) {
        	
        } else {
            tiles.setTileAt(value, sprites.castle.tileGrass3)
        }
        SET_SEED()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        if (Seed == 10 || Seed == 98) {
        	
        } else {
            tiles.setTileAt(value, assets.tile`myTile`)
        }
        SET_SEED()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
        if (Seed >= 90) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile9`)
        }
        if (Seed >= 90) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile9`)
        }
        if (Seed >= 90) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile9`)
        }
        if (Seed >= 90) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile9`)
        }
        SET_SEED()
    }
    tileUtil.setWalls(assets.tile`myTile9`, true)
    tileUtil.setWalls(assets.tile`myTile2`, true)
    tileUtil.setWalls(assets.tile`myTile3`, true)
    tiles.replaceAllTiles(assets.tile`transparency16`, sprites.castle.tileGrass3)
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile4`)
        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile4`)
        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile4`)
        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile4`)
        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile4`)
        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile4`)
        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile4`)
        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile4`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        if (tiles.tileImageAtLocation(value.getNeighboringLocation(CollisionDirection.Left)) == sprites.castle.tileGrass3) {
            if (Seed >= 90) {
                tiles.setTileAt(value, sprites.castle.tileGrass3)
            }
        }
        if (tiles.tileImageAtLocation(value.getNeighboringLocation(CollisionDirection.Top)) == sprites.castle.tileGrass3) {
            if (Seed >= 90) {
                tiles.setTileAt(value, sprites.castle.tileGrass3)
            }
        }
        if (tiles.tileImageAtLocation(value.getNeighboringLocation(CollisionDirection.Right)) == sprites.castle.tileGrass3) {
            if (Seed >= 90) {
                tiles.setTileAt(value, sprites.castle.tileGrass3)
            }
        }
        if (tiles.tileImageAtLocation(value.getNeighboringLocation(CollisionDirection.Bottom)) == sprites.castle.tileGrass3) {
            if (Seed >= 90) {
                tiles.setTileAt(value, sprites.castle.tileGrass3)
            }
        }
        SET_SEED()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        if (tiles.tileImageAtLocation(value.getNeighboringLocation(CollisionDirection.Left)) == sprites.castle.tileGrass3) {
            if (Seed >= 90) {
                tiles.setTileAt(value, sprites.castle.tileGrass3)
            }
        }
        if (tiles.tileImageAtLocation(value.getNeighboringLocation(CollisionDirection.Top)) == sprites.castle.tileGrass3) {
            if (Seed >= 90) {
                tiles.setTileAt(value, sprites.castle.tileGrass3)
            }
        }
        if (tiles.tileImageAtLocation(value.getNeighboringLocation(CollisionDirection.Right)) == sprites.castle.tileGrass3) {
            if (Seed >= 90) {
                tiles.setTileAt(value, sprites.castle.tileGrass3)
            }
        }
        if (tiles.tileImageAtLocation(value.getNeighboringLocation(CollisionDirection.Bottom)) == sprites.castle.tileGrass3) {
            if (Seed >= 90) {
                tiles.setTileAt(value, sprites.castle.tileGrass3)
            }
        }
        SET_SEED()
    }
}
function SEED () {
    if (Seed >= 100) {
        Seed += -100
        SEED()
    } else {
    	
    }
}
spriteutils.createRenderable(350, function (screen2) {
    if (gs == true) {
        spriteutils.drawTransparentImage(toolbar1.image, screen2, 10, 40)
        spriteutils.drawTransparentImage(toolbar2.image, screen2, 100, 40)
        spriteutils.drawTransparentImage(toolbar3.image, screen2, 20, 90)
        spriteutils.drawTransparentImage(toolbar4.image, screen2, 100, 90)
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    sprites.setDataImageValue(HOTBARP1USING, "P1-Hotbar-Item", toolbar1.get_items()[toolbar1.get_number(ToolbarNumberAttribute.SelectedIndex)].get_image())
    if (sprites.readDataImage(HOTBARP1USING, "P1-Hotbar-Item") == img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `) {
        sprites.setDataString(HOTBARP1USING, "Item-In-Use-Name", "Fists")
    } else if (sprites.readDataImage(HOTBARP1USING, "P1-Hotbar-Item") == img`
        . . . . . . . . . . . . . f f f 
        . . . . . . . . . . . . f b c f 
        . . . . . . . . . . . f b c b f 
        . . . . . . . . . . f b c b f . 
        . . . . . . . . . f b c b f . . 
        . . . . . . . . f b c b f . . . 
        . . . . . . . f b c b f . . . . 
        . . . . . . f b c b f . . . . . 
        . . . . . f b c b f . . . . . . 
        . f f . f b c b f . . . . . . . 
        . f e f b c b f . . . . . . . . 
        . . f e c b f . . . . . . . . . 
        . f e c e f . . . . . . . . . . 
        f e e e f e f . . . . . . . . . 
        e e e f . f f . . . . . . . . . 
        c e f . . . . . . . . . . . . . 
        `) {
        sprites.setDataString(HOTBARP1USING, "Item-In-Use-Name", "Stone Sword")
        HOTBARP1USING.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (sprites.readDataImage(HOTBARP1USING, "P1-Hotbar-Item") == img`
        . . . . . . f c b b f f . . . . 
        . . . . . . . f c c b b f f . . 
        . . . . . . . . f f c c b b f . 
        . . . . . . . . . . . f e b f . 
        . . . . . . . . . . f e f c b f 
        . . . . . . . . . f e f . c b f 
        . . . . . . . . f e f . . f c b 
        . . . . . . . f e f . . . . c b 
        . . . . . . f e f . . . . . f c 
        . . . . . f e f . . . . . . . f 
        . . . . f e f . . . . . . . . . 
        . . . f e f . . . . . . . . . . 
        . . f e f . . . . . . . . . . . 
        . f e f . . . . . . . . . . . . 
        f e f . . . . . . . . . . . . . 
        e f . . . . . . . . . . . . . . 
        `) {
        sprites.setDataString(HOTBARP1USING, "Item-In-Use-Name", "Stone Pickaxe")
    }
})
function P2_MENUS () {
    P2_MENU = miniMenu.createMenu(
    miniMenu.createMenuItem("Building Blocks"),
    miniMenu.createMenuItem("Tools/Weapons"),
    miniMenu.createMenuItem("Exit")
    )
    sprites.setDataBoolean(P2_MENU, "Trading", false)
    P2_MENU.setTitle("Shop")
    P2_MENU.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 75)
    P2_MENU.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 30)
    P2_MENU.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 2)
    P2_MENU.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 2)
    P2_MENU.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Alignment, 1)
    P2_toolsweapons = miniMenu.createMenu(
    miniMenu.createMenuItem("Stone Sword", img`
        . . . . . . . . . . . . . f f f 
        . . . . . . . . . . . . f b c f 
        . . . . . . . . . . . f b c b f 
        . . . . . . . . . . f b c b f . 
        . . . . . . . . . f b c b f . . 
        . . . . . . . . f b c b f . . . 
        . . . . . . . f b c b f . . . . 
        . . . . . . f b c b f . . . . . 
        . . . . . f b c b f . . . . . . 
        . f f . f b c b f . . . . . . . 
        . f e f b c b f . . . . . . . . 
        . . f e c b f . . . . . . . . . 
        . f e c e f . . . . . . . . . . 
        f e e e f e f . . . . . . . . . 
        e e e f . f f . . . . . . . . . 
        c e f . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Stone Pickaxe"),
    miniMenu.createMenuItem("Stone Axe"),
    miniMenu.createMenuItem("War Hammer"),
    miniMenu.createMenuItem("Stone Slingshot"),
    miniMenu.createMenuItem("Exit")
    )
    sprites.setDataBoolean(P2_toolsweapons, "Tool/Weapon-Trading", false)
    P2_toolsweapons.setTitle("Tools/Weapons")
    P2_toolsweapons.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 75)
    P2_toolsweapons.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 30)
    P2_toolsweapons.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    P2_toolsweapons.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 1)
    P2_toolsweapons.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Alignment, 1)
    P2_building_blocks = miniMenu.createMenu(
    miniMenu.createMenuItem("Stone Wall"),
    miniMenu.createMenuItem("Wooden Barrier"),
    miniMenu.createMenuItem("Shock Gate"),
    miniMenu.createMenuItem("Exit")
    )
    sprites.setDataBoolean(P2_building_blocks, "Building-Trading", false)
    P2_building_blocks.setTitle("Building Blocks")
    P2_building_blocks.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 75)
    P2_building_blocks.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 30)
    P2_building_blocks.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    P2_building_blocks.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 1)
    P2_building_blocks.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Alignment, 1)
    for (let value of sprites.allOfKind(SpriteKind.MiniMenu)) {
        value.setFlag(SpriteFlag.Invisible, true)
    }
}
function TILEMAPGENERATION () {
    for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
        if (Seed <= 50) {
            tiles.setTileAt(value, sprites.castle.tileGrass3)
        } else if (Seed > 50 && Seed <= 70) {
            tiles.setTileAt(value, assets.tile`myTile`)
        } else {
            tiles.setTileAt(value, assets.tile`myTile8`)
        }
        SET_SEED()
    }
    Width_Square = 50
    Height_Square = 50
    for (let value of tiles.getTilesByType(sprites.castle.tileGrass3)) {
        Left_Square = value.column
        Top_Square = value.row
        for (let indexX = 0; indexX <= Height_Square - 1; indexX++) {
            for (let indexY = 0; indexY <= Width_Square - 1; indexY++) {
                tiles.setTileAt(tiles.getTileLocation(Left_Square + indexX, Top_Square + indexY), sprites.castle.tileGrass3)
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        Left_Square = value.column
        Top_Square = value.row
        for (let indexX = 0; indexX <= Height_Square - 1; indexX++) {
            for (let indexY = 0; indexY <= Width_Square - 1; indexY++) {
                tiles.setTileAt(tiles.getTileLocation(Left_Square + indexX, Top_Square + indexY), assets.tile`myTile`)
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        Left_Square = value.column
        Top_Square = value.row
        for (let indexX = 0; indexX <= Height_Square - 1; indexX++) {
            for (let indexY = 0; indexY <= Width_Square - 1; indexY++) {
                tiles.setTileAt(tiles.getTileLocation(Left_Square + indexX, Top_Square + indexY), assets.tile`myTile8`)
            }
        }
    }
}
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (toolbar1.get_number(ToolbarNumberAttribute.SelectedIndex) > 1) {
        toolbar1.set_number(ToolbarNumberAttribute.SelectedIndex, 0)
    } else {
        toolbar1.change_number(ToolbarNumberAttribute.SelectedIndex, 1)
    }
})
scene.onOverlapTile(SpriteKind.THE_PLAYERS, assets.tile`myTile13`, function (sprite, location) {
    P11Menus()
    P22Menus()
})
function Player_3 () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
        . . . d d d d d d d d . . . 
        . . d d d d d d d d d d . . 
        . d d d d d d d d d d d d . 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        . d d d d d d d d d d d d . 
        . . d d d d d d d d d d . . 
        . . . d d d d d d d d . . . 
        `, SpriteKind.Player))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setKind(SpriteKind.THE_PLAYERS)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three), 100, 100)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)))
    toolbar3 = Inventory.create_toolbar([
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ], 3)
    inventory3 = Inventory.create_inventory([
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ], 50)
    toolbar3.setFlag(SpriteFlag.Invisible, true)
    inventory3.setScale(0.5, ScaleAnchor.Middle)
    inventory3.setFlag(SpriteFlag.Invisible, true)
    statusbar3 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar3.value = 100
    statusbar3.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)))
    statusbar3.setColor(6, 2, 10)
    statusbar3.setBarBorder(1, 15)
    statusbar3.setLabel("HP")
    statusbar3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).z = -10
    statusbar3.z = -10
}
function Player_1 () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
        . . . d d d d d d d d . . . 
        . . d d d d d d d d d d . . 
        . d d d d d d d d d d d d . 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d 
        . d d d d d d d d d d d d . 
        . . d d d d d d d d d d . . 
        . . . d d d d d d d d . . . 
        `, SpriteKind.Player))
    HOTBARP1USING = sprites.create(img`
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        `, SpriteKind.Player)
    sprites.setDataString(HOTBARP1USING, "Item-In-Use-Name", "Fists")
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setKind(SpriteKind.THE_PLAYERS)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 500, 500)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    toolbar1 = Inventory.create_toolbar([
    Inventory.create_item("Stone Sword", img`
        . . . . . . . . . . . . . f f f 
        . . . . . . . . . . . . f b c f 
        . . . . . . . . . . . f b c b f 
        . . . . . . . . . . f b c b f . 
        . . . . . . . . . f b c b f . . 
        . . . . . . . . f b c b f . . . 
        . . . . . . . f b c b f . . . . 
        . . . . . . f b c b f . . . . . 
        . . . . . f b c b f . . . . . . 
        . f f . f b c b f . . . . . . . 
        . f e f b c b f . . . . . . . . 
        . . f e c b f . . . . . . . . . 
        . f e c e f . . . . . . . . . . 
        f e e e f e f . . . . . . . . . 
        e e e f . f f . . . . . . . . . 
        c e f . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ], 3)
    inventory = Inventory.create_inventory([
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ], 50)
    inventory.setScale(0.5, ScaleAnchor.Middle)
    toolbar1.setFlag(SpriteFlag.Invisible, true)
    inventory.setFlag(SpriteFlag.Invisible, true)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.value = 100
    statusbar.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    statusbar.setColor(6, 2, 10)
    statusbar.setBarBorder(1, 15)
    statusbar.setLabel("HP")
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
}
function P22Menus () {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
        if (sprites.readDataBoolean(P2_MENU, "Trading") == false) {
            P2_MENUS()
            mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 0)
            P2_MENU.setFlag(SpriteFlag.Invisible, false)
            sprites.setDataBoolean(P2_MENU, "Trading", true)
        }
    }
    if (sprites.readDataBoolean(P2_MENU, "Trading") == true) {
        P2_MENU.onButtonPressed(controller.B, function (selection, selectedIndex) {
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.B)) {
                sprites.destroy(P2_MENU)
                if (selection == "Building Blocks") {
                    P2_building_blocks.setFlag(SpriteFlag.Invisible, false)
                    timer.after(500, function () {
                        sprites.setDataBoolean(P2_building_blocks, "Building-Trading", true)
                    })
                    P2_building_blocks.onButtonPressed(controller.B, function (selection, selectedIndex) {
                        if (sprites.readDataBoolean(P2_building_blocks, "Building-Trading") == true) {
                            if (selectedIndex == 0) {
                            	
                            } else if (selectedIndex == 1) {
                            	
                            } else if (selectedIndex == 2) {
                            	
                            } else if (selectedIndex == 3) {
                                mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 1000, 1000)
                            }
                        }
                        sprites.destroy(P2_building_blocks)
                        sprites.destroy(P2_building_blocks)
                        sprites.setDataBoolean(P2_MENU, "Trading", false)
                        sprites.setDataBoolean(P2_building_blocks, "Building-Trading", false)
                    })
                }
                if (selection == "Tools/Weapons") {
                    P2_toolsweapons.setFlag(SpriteFlag.Invisible, false)
                    timer.after(500, function () {
                        sprites.setDataBoolean(P2_toolsweapons, "Tool/Weapon-Trading", true)
                    })
                    P2_toolsweapons.onButtonPressed(controller.B, function (selection, selectedIndex) {
                        if (sprites.readDataBoolean(P2_toolsweapons, "Tool/Weapon-Trading") == true) {
                            if (selectedIndex == 0) {
                            	
                            } else if (selectedIndex == 1) {
                            	
                            } else if (selectedIndex == 2) {
                            	
                            } else if (selectedIndex == 3) {
                            	
                            } else if (selectedIndex == 4) {
                            	
                            } else if (selectedIndex == 5) {
                                mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 1000, 1000)
                            }
                        }
                        sprites.destroy(P2_toolsweapons)
                        sprites.destroy(P2_toolsweapons)
                        sprites.setDataBoolean(P2_MENU, "Trading", false)
                        sprites.setDataBoolean(P2_toolsweapons, "Tool/Weapon-Trading", false)
                    })
                }
                if ((0 as any) == ("Exit" as any)) {
                    sprites.destroy(P2_building_blocks)
                    sprites.destroy(P2_toolsweapons)
                    sprites.setDataBoolean(P2_MENU, "Trading", false)
                    sprites.setDataBoolean(P2_building_blocks, "Building-Trading", false)
                    sprites.setDataBoolean(P2_toolsweapons, "Tool/Weapon-Trading", false)
                    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 1000, 1000)
                }
            }
        })
    }
}
let statusbar: StatusBarSprite = null
let Top_Square = 0
let Left_Square = 0
let Height_Square = 0
let Width_Square = 0
let P2_building_blocks: miniMenu.MenuSprite = null
let P2_toolsweapons: miniMenu.MenuSprite = null
let P2_MENU: miniMenu.MenuSprite = null
let HOTBARP1USING: Sprite = null
let toolbar1: Inventory.Toolbar = null
let P1_TOOLSWEAPONS: miniMenu.MenuSprite = null
let P1_BUILDING_BLOCKS: miniMenu.MenuSprite = null
let P1_MENU: miniMenu.MenuSprite = null
let inventory3: Inventory.Inventory = null
let inventory: Inventory.Inventory = null
let inventory4: Inventory.Inventory = null
let statusbar4: StatusBarSprite = null
let statusbar3: StatusBarSprite = null
let toolbar4: Inventory.Toolbar = null
let toolbar3: Inventory.Toolbar = null
let statusbar2: StatusBarSprite = null
let inventory2: Inventory.Inventory = null
let toolbar2: Inventory.Toolbar = null
let Seed = 0
let gs = false
gs = false
Seed = game.askForNumber("Enter a Seed or press \"Ok\"", 2)
tiles.setCurrentTilemap(tilemap`level1`)
TILEMAPGENERATION()
SPRITESSTRUCTURES()
Player_1()
Player_2()
Player_3()
Player_4()
stats.turnStats(true)
stats.setStat("Stats:")
