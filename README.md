# Taxa Selic
Mostra em  gráfico a evolução da taxa Selic. Os dados mostram a porcentagem acumulada no mês da taxa Selic e tem origem do [Portal Brasileiro de Dados Abertos](http://dados.gov.br/dataset/4390-taxa-de-juros-selic-acumulada-no-mes/resource/449efbb5-366b-4907-820f-8143a63733e1).


## API
URL: http://api.bcb.gov.br/dados/serie/bcdata.sgs.4390/dados?formato=json

Para acessar o serviço é necessário utilizar o endereço padrão e informar os seguintes parâmetros:

Endereço padrão: http://api.bcb.gov.br/dados/serie/bcdata.sgs.{codigo_serie}/dados?formato=json&dataInicial={dataInicial}&dataFinal={dataFinal}

Parâmetros:

- codigo_Serie (obrigatório): parâmetro numérico que representa o código da série a ser consultada.
- dataInicial (opcional): parâmetro textual que representa a data de início da consulta, no formato dd/MM/aaaa.
- dataFinal (opcional): parâmetro textual que representa a data final da consulta, no formato dd/MM/aaaa.

O serviço permite também recuperar os N últimos valores de uma determinada série:

`http://api.bcb.gov.br/dados/serie/bcdata.sgs.{codigo_serie}/dados/ultimos/{N}?formato=json`

Alguns exemplos de URLs:
- http://api.bcb.gov.br/dados/serie/bcdata.sgs.4390/dados?formato=json&dataInicial=01/01/2010&dataFinal=31/12/2016
- http://api.bcb.gov.br/dados/serie/bcdata.sgs.4390/dados?formato=json
- http://api.bcb.gov.br/dados/serie/bcdata.sgs.4390/dados/ultimos/10?formato=json