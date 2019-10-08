const db = require('../functions/databaseFunctions');
//-----------------------------------------------------------
const TB_CUSTOMERS = 'TB_CUSTOMERS';
const TB_FIRST_CONTACT = 'TB_FIRST_CONTACT';
const NEW_CALL_STATUS = 'call.new';
const STANDBY_CALL_STATUS = 'call.standby';

class EventsHandler {
  get key() {
    return 'EventsHandler';
  }

  async handle(job, done) {
    const { type: status, their_number: id } = job.data;
    /* Adicionar aqui a lógica do  eventsReceiver2*/
    /* Acompanhar códigos de retorno e salvar um log */
    // https://blog.rocketseat.com.br/fila-de-processamento-com-redis/
    // failed attempts
    await db.insert({ id, status }, 'TB_CUSTOMERS');

    return done();
  }
}
module.exports = new EventsHandler();

/*
eventsReceiver2=(req, res)=>{
  const { type: status, their_number: id } = req.body;
  let returnCode;

  switch (status) {
    case NEW_CALL_STATUS:
      //If it's a new customer...
      if (!(await db.findById(id, TB_CUSTOMERS))) {
        returnCode = await insert({ id, status }, TB_CUSTOMERS);
        returnCode = await insert({ id }, TB_FIRST_CONTACT);
      } else {
        returnCode = await update({ id, status }, TB_CUSTOMERS);
      }
      if (returnCode.status === 0) {
        // Deverá fazer retentativas em caso de erro (Configuráveis)
        // Caso contrário retorna erro e pede para cadastro manual
      }
      break;
    case STANDBY_CALL_STATUS:
      //If it's a new customer...
      if (!(await db.findById(id, TB_FIRST_CONTACT))) {
        await db.delete(id, TB_FIRST_CONTACT);
        //O número virá sem *2
        //delegate that call based, by POSTing to Teravoz API's /actions endpoint with *2900
      } else {
        //delegate that call based, by POSTing to Teravoz API's /actions endpoint with *2901
      }
      console.log('STANDBY_CALL_STATUS');
      break;
    default:
      const updateResponse = await update({ id, status }, TB_CUSTOMERS);
      if (updateResponse.status === 0) {
      }
      console.log(status);
  }

  return res.json(func.eventsHandler(req.body));
}*/
