import PogObject from "PogData"

// made by napi :)

const pogObject = new PogObject("NameChanger", {
    isNicked: false,
    nick: ""
})

register("command", (e)=>{
    if (e){
        if (e == "reset"){
            ChatLib.chat(`&l&4[NAME CHANGER]: Reset Name`)
            pogObject.isNicked = false
            pogObject.save()
        } else{
            pogObject.isNicked = true
            pogObject.nick = e
            ChatLib.chat(`&l&4[NAME CHANGER]: Set Name To ${e}`)
            pogObject.save()
        }
    } else{
        ChatLib.chat(`&l&4[NAME CHANGER]: Please Specify A Name`)
    }
}).setName("name")

register("chat", (e)=>{
    const msg = ChatLib.getChatMessage(e, true)

    if (msg.includes(`${Player.getName()}`)){
        if (pogObject.isNicked){
            cancel(e)
            ChatLib.chat(msg.replace(`${Player.getName()}`, pogObject.nick))
        }
    }
})