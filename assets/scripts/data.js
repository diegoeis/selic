(
  function () {
    selic.info = {}

    selic.info.init = (data) => {
      const parsedData = data.map(s => ({ 
        date: s.data,
        index: parseFloat(s.valor)
      }))

      fillGraph(parsedData)
      fillTable(parsedData)
    }

    const fillTable = (data) => {
      data.reverse().forEach(d => {
        const row = document.createElement('tr')
        row.innerHTML = `
          <td>${d.date}</td>
          <td>${d.index}</td>
        `

        document.querySelector('.sel-table-info').appendChild(row)
      })
    }

    const fillGraph = (data) => {
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
          categories: data.map(d => d.date),
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
          data: data.map(d => d.index),
          enableMouseTracking: true
        }]
      });
    }
  }
)()
