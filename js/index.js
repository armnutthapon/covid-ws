/*$(function () {
  var url = "https://pomber.github.io/covid19/timeseries.json";
  $.getJSON(url, function (result) {
    console.log(result);
    var no = 1;
    for (var country in result) {
      var row = `<tr>
                        <th scope="row">${no}</th>
                        <td><a href="country2.html?country=${country}">${country}</a></td>
                 </tr>`;
      $("#data").append(row);
      no++;
    }
  });
});

*/

$(function () {
  var url = "https://pomber.github.io/covid19/timeseries.json";
  $.getJSON(url, function (result) {
    console.log(result);
    var no = 1;
    var confirmed = 0;
    var deaths = 0;
    var recovered = 0;
    for (var country in result) {
      var row = `<tr>
                          <th scope="row">${no}</th>
                          <td><a href="country2.html?country=${country}">${country}</a></td>
                   </tr>`;
      $("#data").append(row);
      no++;
    }
    for (var country in result) {
      var selectedCountry = result[country];
      var total = selectedCountry.length;
      confirmed = confirmed + selectedCountry[total - 1].confirmed;
      deaths = deaths + selectedCountry[total - 1].deaths;
      recovered = recovered + selectedCountry[total - 1].recovered;
    }
    $("#confirmed").append(confirmed);
    $("#deaths").append(deaths);
    $("#recovered").append(recovered);



    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ["CONFIRMED", "DEATHS", "RECOVERED"],
        datasets: [{
          data: [confirmed, deaths, recovered],
          backgroundColor: ['#f6c23e', '#e74a3b', '#1cc88a'],
          hoverBackgroundColor: ['#f6c23e', '#e74a3b', '#1cc88a'],
          hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: false
        },
        cutoutPercentage: 80,
      },
    });





    var totalconfirmed1 = [], totalconfirmed2 = [], totalconfirmed3 = [], totalconfirmed4 = [], totalconfirmed5 = [], totalconfirmed6 = [];
    var totalrecovered1 = [], totalrecovered2 = [], totalrecovered3 = [], totalrecovered4 = [], totalrecovered5 = [], totalrecovered6 = [];
    var totaldeaths1 = [], totaldeaths2 = [], totaldeaths3 = [], totaldeaths4 = [], totaldeaths5 = [], totaldeaths6 = [];

    var totalweek1 = [], totalweek2 = [], totalweek3 = [], totalweek4 = [], totalweek5 = [], totalweek6 = [];

    $.getJSON(url, function (result) {

      var c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;
      var r1 = 0, r2 = 0, r3 = 0, r4 = 0, r5 = 0, r6 = 0;
      var d1 = 0, d2 = 0, d3 = 0, d4 = 0, d5 = 0, d6 = 0;
      for (var country in result) {

        var selectedCountry = result[country];
        var total = selectedCountry.length;

        c1 = c1 + selectedCountry[total - 1].confirmed;
        c2 = c2 + selectedCountry[total - 7].confirmed;
        c3 = c3 + selectedCountry[total - 14].confirmed;
        c4 = c4 + selectedCountry[total - 21].confirmed;
        c5 = c5 + selectedCountry[total - 28].confirmed;
        c6 = c6 + selectedCountry[total - 35].confirmed;

        r1 = r1 + selectedCountry[total - 1].recovered;
        r2 = r2 + selectedCountry[total - 7].recovered;
        r3 = r3 + selectedCountry[total - 14].recovered;
        r4 = r4 + selectedCountry[total - 21].recovered;
        r5 = r5 + selectedCountry[total - 28].recovered;
        r6 = r6 + selectedCountry[total - 35].recovered;

        d1 = d1 + selectedCountry[total - 1].deaths;
        d2 = d2 + selectedCountry[total - 7].deaths;
        d3 = d3 + selectedCountry[total - 14].deaths;
        d4 = d4 + selectedCountry[total - 21].deaths;
        d5 = d5 + selectedCountry[total - 28].deaths;
        d6 = d6 + selectedCountry[total - 35].deaths;

        week1 = selectedCountry[total - 1].date;
        week2 = selectedCountry[total - 7].date;
        week3 = selectedCountry[total - 14].date;
        week4 = selectedCountry[total - 21].date;
        week5 = selectedCountry[total - 28].date;
        week6 = selectedCountry[total - 35].date;


      }

      totalconfirmed1.push(c1), totalconfirmed2.push(c2), totalconfirmed3.push(c3), totalconfirmed4.push(c4),
        totalconfirmed5.push(c5), totalconfirmed6.push(c6)

      totalrecovered1.push(r1), totalrecovered2.push(r2), totalrecovered3.push(r3), totalrecovered4.push(r4),
        totalrecovered5.push(r5), totalrecovered6.push(r6)

      totaldeaths1.push(d1), totaldeaths2.push(d2), totaldeaths3.push(d3), totaldeaths4.push(d4),
        totaldeaths5.push(d5), totaldeaths6.push(d6)


      totalweek1.push(week1), totalweek2.push(week2), totalweek3.push(week3),
        totalweek4.push(week4), totalweek5.push(week5), totalweek6.push(week6)





      var ctx = document.getElementById("myAreaChart");
      var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [totalweek6, totalweek5, totalweek4, totalweek3, totalweek2, totalweek1],
          datasets: [{
            label: "Confirmed : ",
            lineTension: 0.3,
            backgroundColor: "rgba(246, 194, 62, 0.5)",
            borderColor: "rgba(246, 194, 62, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(78, 115, 223, 1)",
            pointBorderColor: "rgba(78, 115, 223, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(28, 200, 138, 1)",
            pointHoverBorderColor: "rgba(246, 194, 62, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [totalconfirmed6, totalconfirmed5, totalconfirmed4, totalconfirmed3, totalconfirmed2, totalconfirmed1],
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function (value, index, values) {
                  return number_format(value);
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: 'index',
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + number_format(tooltipItem.yLabel);
              }
            }
          }
        }
      });



      var ctx = document.getElementById("myAreaChart2");
      var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [totalweek6, totalweek5, totalweek4, totalweek3, totalweek2, totalweek1],
          datasets: [{
            label: "Confirmed : ",
            lineTension: 0.3,
            backgroundColor: "rgba(28, 200, 138, 0.5)",
            borderColor: "rgba(28, 200, 138, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(78, 115, 223, 1)",
            pointBorderColor: "rgba(78, 115, 223, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(28, 200, 138 1)",
            pointHoverBorderColor: "rgba(28, 200, 138, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [totaldeaths6, totaldeaths5, totaldeaths4, totaldeaths3, totaldeaths2, totaldeaths1],
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function (value, index, values) {
                  return number_format(value);
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: 'index',
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + number_format(tooltipItem.yLabel);
              }
            }
          }
        }
      });
      var ctx = document.getElementById("myAreaChart3");
      var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [totalweek6, totalweek5, totalweek4, totalweek3, totalweek2, totalweek1],
          datasets: [{
            label: "Confirmed : ",
            lineTension: 0.3,
            backgroundColor: "rgba(231, 74, 59, 0.5)",
            borderColor: "rgba(231, 74, 59, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(78, 115, 223, 1)",
            pointBorderColor: "rgba(78, 115, 223, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
            pointHoverBorderColor: "rgba(231, 74, 59, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [totalrecovered6, totalrecovered5, totalrecovered4, totalrecovered3, totalrecovered2, totalrecovered1],
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function (value, index, values) {
                  return number_format(value);
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: 'index',
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + number_format(tooltipItem.yLabel);
              }
            }
          }
        }
      });recovered


    });


    Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#858796';

    function number_format(number, decimals, dec_point, thousands_sep) {
      // *     example: number_format(1234.56, 2, ',', ' ');
      // *     return: '1 234,56'
      number = (number + '').replace(',', '').replace(' ', '');
      var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
          var k = Math.pow(10, prec);
          return '' + Math.round(n * k) / k;
        };
      // Fix for IE parseFloat(0.55).toFixed(0) = 0;
      s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
      if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
      }
      if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
      }
      return s.join(dec);
    }

    // Area Chart Example
    // var ctx = document.getElementById("myAreaChart");
    // var myLineChart = new Chart(ctx, {
    //   type: 'line',
    //   data: {
    //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    //     datasets: [{
    //       label: "Earnings",
    //       lineTension: 0.3,
    //       backgroundColor: "rgba(78, 115, 223, 0.05)",
    //       borderColor: "rgba(78, 115, 223, 1)",
    //       pointRadius: 3,
    //       pointBackgroundColor: "rgba(78, 115, 223, 1)",
    //       pointBorderColor: "rgba(78, 115, 223, 1)",
    //       pointHoverRadius: 3,
    //       pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
    //       pointHoverBorderColor: "rgba(78, 115, 223, 1)",
    //       pointHitRadius: 10,
    //       pointBorderWidth: 2,
    //       data: [totaldeaths6,totaldeaths5,totaldeaths4,totaldeaths3,totaldeaths2,totaldeaths1],
    //     }],
    //   },
    //   options: {
    //     maintainAspectRatio: false,
    //     layout: {
    //       padding: {
    //         left: 10,
    //         right: 25,
    //         top: 25,
    //         bottom: 0
    //       }
    //     },
    //     scales: {
    //       xAxes: [{
    //         time: {
    //           unit: 'date'
    //         },
    //         gridLines: {
    //           display: false,
    //           drawBorder: false
    //         },
    //         ticks: {
    //           maxTicksLimit: 7
    //         }
    //       }],
    //       yAxes: [{
    //         ticks: {
    //           maxTicksLimit: 5,
    //           padding: 10,
    //           // Include a dollar sign in the ticks
    //           callback: function (value, index, values) {
    //             return number_format(value);
    //           }
    //         },
    //         gridLines: {
    //           color: "rgb(234, 236, 244)",
    //           zeroLineColor: "rgb(234, 236, 244)",
    //           drawBorder: false,
    //           borderDash: [2],
    //           zeroLineBorderDash: [2]
    //         }
    //       }],
    //     },
    //     legend: {
    //       display: false
    //     },
    //     tooltips: {
    //       backgroundColor: "rgb(255,255,255)",
    //       bodyFontColor: "#858796",
    //       titleMarginBottom: 10,
    //       titleFontColor: '#6e707e',
    //       titleFontSize: 14,
    //       borderColor: '#dddfeb',
    //       borderWidth: 1,
    //       xPadding: 15,
    //       yPadding: 15,
    //       displayColors: false,
    //       intersect: false,
    //       mode: 'index',
    //       caretPadding: 10,
    //       callbacks: {
    //         label: function (tooltipItem, chart) {
    //           var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
    //           return datasetLabel + number_format(tooltipItem.yLabel);
    //         }
    //       }
    //     }
    //   }
    // });




  });
});

