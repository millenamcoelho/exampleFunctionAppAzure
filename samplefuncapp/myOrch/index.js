const df = require("durable-functions");
const moment = require("moment");

module.exports = df.orchestrator(function* (context) {
    const outputs = [];

    //pega a data atual e adiciona dois minutos
    const deadline = moment.utc(context.df.currentUtcDateTime).add(2, 'm');

    outputs.push(yield context.df.callActivity("Question", "How are you?"));

    deadline = moment.utc(context.df.currentUtcDateTime).add(2, 'm');

    //cria o contador de suspensao para esperar passar o tempo e executar a proxima funcao
    yield context.df.createrTimer(deadline.toDate());
    outputs.push(yield context.df.callActivity("Question", "What is your name?"));

    deadline = moment.utc(context.df.currentUtcDateTime).add(2, 'm');
    yield context.df.createrTimer(deadline.toDate());
    outputs.push(yield context.df.callActivity("Question", "How much do I owe you?"));

    deadline = moment.utc(context.df.currentUtcDateTime).add(2, 'm');
    yield context.df.createrTimer(deadline.toDate());
    outputs.push(yield context.df.callActivity("Question", "What do you like to do?"));

    return outputs;
});