
(
function(){

  selic.api = {}

  const apiSelic = "http://api.bcb.gov.br/dados/serie/bcdata.sgs.4390/dados?formato=json&dataInicial=01/01/2015&dataFinal=31/12/2020"

  function init() {
    selic.api.handleApi();  
  }

  selic.api.handleApi = () => {
    axios.get(apiSelic)
    .then(response => {
      selic.info.init(response.data)
    })
    .catch(response => console.error(response))
  }



  init()

})()
