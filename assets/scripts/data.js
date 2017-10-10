(
  function () {

    selic.info = {}

    const dates = []
    const index = []

    selic.info.init = (data) => {
      for (var i = 0; i < data.length; i++) {
        dates.push(data[i].data)
        index.push(parseFloat(data[i].valor))
      }
      selic.info.graph(dates, index)
      selic.info.table(dates.reverse(), index.reverse())
    }

    selic.info.table = (dates, index) => {
      $.each(dates, function(i, item) {
        $('<tr><td>'+dates[i]+'</td><td>'+index[i]+'</td></tr>').appendTo('.sel-table-info')
      });
    }

    selic.info.graph = (dates, index) => {

      Highcharts.chart('selicChart', {
        chart: {
          type: 'line',
          zoomType: 'x',
          backgroundColor: null,
        },
        title: {
          text: 'Evolução da Taxa Selic Acumulado Mensal',
          align: 'left',
          x: 30,
          y: 30,
          style: {
            color: '#fff',
          }
        },
        subtitle: {
          align: 'right',
          text: 'Fonte: Banco Central - Portal Brasileiro de Dados Abertos',
          x: -10,
          y: 30,
          style: {
            color: '#696B6E',
          }
        },
        xAxis: {
          categories: ["01/01/2015", "01/02/2015", "01/03/2015", "01/04/2015", "01/05/2015", "01/06/2015", "01/07/2015", "01/08/2015", "01/09/2015", "01/10/2015", "01/11/2015", "01/12/2015", "01/01/2016", "01/02/2016", "01/03/2016", "01/04/2016", "01/05/2016", "01/06/2016", "01/07/2016", "01/08/2016", "01/09/2016", "01/10/2016", "01/11/2016", "01/12/2016", "01/01/2017", "01/02/2017", "01/03/2017", "01/04/2017", "01/05/2017", "01/06/2017", "01/07/2017", "01/08/2017", "01/09/2017", "01/10/2017"],
          lineColor: '#3A3C42',
        },
        yAxis: {
          title: {
            text: 'Porcentagem'
          },
          gridLineColor: '#3A3C42',
        },
        plotOptions: {
          series: {
            lineWidth: 1,
            lineColor: '#fff',
            marginLeft: 0,
            marker: {
              radius: 0,
              fillColor: '#fff',
            },
            dataLabels: {
              enabled: true,
              color: '#fff',
              textOutline: 1,
            }
          },
          area: {
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, '#2F3238'],
                [1, Highcharts.Color('#4D5057').setOpacity(0).get('rgba')]
              ]
            },
          }
        },
        series: [{
          name: 'Taxa Selic',
          type: 'area',
          data: index,
          enableMouseTracking: true
        }]
      });

    }

  }
)()
