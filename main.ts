namespace SpriteKind {
    export const Key = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
        tiles.setWallAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), false)
        tiles.setTileAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), sprites.castle.tilePath5)
    }
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`key 5`, function (sprite, location) {
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        tiles.setWallAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), false)
        tiles.setTileAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), sprites.castle.tilePath5)
    }
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`key 3`, function (sprite, location) {
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        tiles.setWallAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), false)
        tiles.setTileAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), sprites.castle.tilePath5)
    }
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
        tiles.setWallAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), false)
        tiles.setTileAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), sprites.castle.tilePath5)
    }
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        tiles.setWallAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), false)
        tiles.setTileAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), sprites.castle.tilePath5)
    }
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    Leval += 1
    if (Leval == 1) {
        tinkerForever += 1
        tiles.setTilemap(tilemap`level2`)
        tiles.placeOnTile(wonder_woman42_super_herocontrole_yourselfbad_at_acts_but_good_at_saving, tiles.getTileLocation(2, 7))
    } else if (Leval == 2) {
        tiles.setTilemap(tilemap`level3`)
        tiles.placeOnTile(wonder_woman42_super_herocontrole_yourselfbad_at_acts_but_good_at_saving, tiles.getTileLocation(2, 7))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key, function (sprite, otherSprite) {
    for (let value of tiles.getTilesByType(assets.tile`myTile16`)) {
        tiles.setWallAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), false)
        tiles.setTileAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`key 1`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(7, 2), sprites.castle.tilePath5)
    tiles.setTileAt(tiles.getTileLocation(8, 2), sprites.castle.tilePath5)
    tiles.setTileAt(tiles.getTileLocation(9, 2), sprites.castle.tilePath5)
    tiles.setWallAt(tiles.getTileLocation(7, 2), false)
    tiles.setWallAt(tiles.getTileLocation(8, 2), false)
    tiles.setWallAt(tiles.getTileLocation(9, 2), false)
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    tiles.placeOnTile(wonder_woman42_super_herocontrole_yourselfbad_at_acts_but_good_at_saving, tiles.getTileLocation(2, 7))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        tiles.setWallAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), false)
        tiles.setTileAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), sprites.castle.tilePath5)
    }
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`key 2`, function (sprite, location) {
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        tiles.setWallAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), false)
        tiles.setTileAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), sprites.castle.tilePath5)
    }
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`key 4`, function (sprite, location) {
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        tiles.setWallAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), false)
        tiles.setTileAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), sprites.castle.tilePath5)
    }
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
        tiles.setWallAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), false)
        tiles.setTileAt(tiles.getTileLocation(tiles.locationXY(value, tiles.XY.column), tiles.locationXY(value, tiles.XY.row)), sprites.castle.tilePath5)
    }
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
let leftArrow: Sprite = null
let collectKey: Sprite = null
let rightArrow: Sprite = null
let wonder_woman42_super_herocontrole_yourselfbad_at_acts_but_good_at_saving: Sprite = null
let Leval = 0
let tinkerForever = 0
Leval = 0
game.showLongText("you need to save the world and overcome the fear that comes with, conspire and defeat the minions to save the world and survive good luck you'll need it, wonder woman42 i need you to do it please your a super hero.", DialogLayout.Full)
wonder_woman42_super_herocontrole_yourselfbad_at_acts_but_good_at_saving = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f f 2 f 2 f f . . . . . 
    . . . f f 5 5 5 5 5 f f . . . . 
    . . . f f d e d e d f f . . . . 
    . . f f f d d d d d f f f . . . 
    . . f f f f d d d f f f f . . . 
    . . f f f 2 2 2 2 2 f f f . . . 
    . f f f 2 2 2 2 2 2 2 f f f . . 
    . . f f 2 2 2 2 2 2 2 f f . . . 
    . . f f 5 2 2 2 2 2 5 f f . . . 
    . . . f d 5 5 4 5 5 d f . . . . 
    . . . f f 8 f f f 8 f f . . . . 
    . . . . f 8 f f f 8 f . . . . . 
    . . . . . 8 . f . 8 . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . 2 2 . . . 2 2 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(wonder_woman42_super_herocontrole_yourselfbad_at_acts_but_good_at_saving, 150, 150)
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(wonder_woman42_super_herocontrole_yourselfbad_at_acts_but_good_at_saving)
tiles.placeOnTile(wonder_woman42_super_herocontrole_yourselfbad_at_acts_but_good_at_saving, tiles.getTileLocation(28, 25))
forever(function () {
    if (tinkerForever == 1) {
        if (Math.percentChance(50)) {
            rightArrow = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                b b b b b b b b 2 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, randint(20, 100), 0)
            tiles.placeOnRandomTile(rightArrow, assets.tile`myTile9`)
            pause(500)
        } else {
            if (Math.percentChance(5)) {
                collectKey = sprites.createProjectileFromSide(img`
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
                    . . . . . . 5 5 . . . . . . . . 
                    . . . . . . 5 . . . . . . . . . 
                    . . . . . . 5 5 . . . . . . . . 
                    . . . . . . 5 . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, randint(-20, -100), 0)
                collectKey.setKind(SpriteKind.Key)
                tiles.placeOnTile(collectKey, tiles.getTileLocation(5, 2))
            } else {
                leftArrow = sprites.createProjectileFromSide(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 2 . . . . . . . 
                    . . . . . . . 2 2 . . . . . . . 
                    . . . . . . 2 2 b b b b b b b b 
                    . . . . . . . 2 2 . . . . . . . 
                    . . . . . . . . 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, randint(-20, -100), 0)
                tiles.placeOnRandomTile(leftArrow, assets.tile`myTile15`)
                pause(500)
            }
        }
    }
})
