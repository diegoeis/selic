(
  function () {

    selic.chart = {}

    const dates = []
    const index = []

    selic.chart.init = (data) => {
      for (var i = 0; i < data.length; i++) {
        dates.push(data[i].data)
        index.push(parseFloat(data[i].valor))
      }
      selic.chart.graph(dates, index)
    }

    selic.chart.graph = (dates, index) => {

      Highcharts.chart('selicChart', {
        chart: {
          type: 'line',
          zoomType: 'x'
        },
        title: {
          text: 'Taxa Selic'
        },
        subtitle: {
          text: 'Fonte: Banco Central - Portal Brasileiro de Dados Abertos'
        },
        xAxis: {
          categories: ["01/01/2015", "01/02/2015", "01/03/2015", "01/04/2015", "01/05/2015", "01/06/2015", "01/07/2015", "01/08/2015", "01/09/2015", "01/10/2015", "01/11/2015", "01/12/2015", "01/01/2016", "01/02/2016", "01/03/2016", "01/04/2016", "01/05/2016", "01/06/2016", "01/07/2016", "01/08/2016", "01/09/2016", "01/10/2016", "01/11/2016", "01/12/2016", "01/01/2017", "01/02/2017", "01/03/2017", "01/04/2017", "01/05/2017", "01/06/2017", "01/07/2017", "01/08/2017", "01/09/2017", "01/10/2017"],
        },
        yAxis: {
          title: {
            text: 'Porcentagem'
          }
        },
        plotOptions: {
          area: {
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
              ]
            },
            marker: {
              radius: 2
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1
              }
            },
          }
        },
        series: [{
          name: 'Taxa Selic',
          type: 'area',
          data: index,
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: true
        }]
      });

    }

  }
)()
