module.exports = async function (context) {
    //"How are you?"
    //"What is your name?"
    //"How much do I owe you?"
    if(context.bindings.questiontext == "How are you?"){
        return `${context.bindings.questiontext} Oh! I'm very fine, thanks :) !`;
    } else if(context.bindings.questiontext == "What is your name?"){
        return `${context.bindings.questiontext} Oh! My name is Millena :) !`;
    } else if(context.bindings.questiontext == "How much do I owe you?"){
        return `${context.bindings.questiontext} Oh! You owe me a thousand dollars :) !`;
    } else {
        return `${context.bindings.questiontext} Sorry, but I can't understand what you trying say to me.`;
    }
};