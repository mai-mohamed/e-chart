export const option2= {
    color: ['#ed5564', '#336cfb'],
    tooltip: {
      trigger: 'none',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['a', 'b']
    },
    grid: {
      left: 30,
      right: 0,
      top: 50,
      bottom: 50
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: '#336cfb'
          }
        },
        axisPointer: {
          label: {
            formatter: function(params) {
              return (
                'a ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
              );
            }
          }
        },
        data: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12'
        ]
      },
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: '#ed5564'
          }
        },
        axisPointer: {
          label: {
            formatter: function(params) {
              return (
                'a' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
              );
            }
          }
        },
        data: [
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
          '21',
          '22'
        ]
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'a',
        type: 'line',
        xAxisIndex: 1,
        smooth: true,
        data: [159, 149, 174, 182, 219, 201, 175, 182, 119, 118, 112, 96]
      },
      {
        name: 'b',
        type: 'line',
        smooth: true,
        data: [95, 124, 132, 143, 138, 178, 194, 211, 234, 257, 241, 226]
      }
    ]
  };
 ////////////////////////////////////////////////////////////////
 
 /////////////////////////////////////////////////////////////////
export const option1= {
  color:"green",
  title: {
    text: 'EChart'
  },
  tooltip: {},
  legend: {
    data:["n"]
  },
  xAxis: {
    data: ['1', '2', '3', '4', '5', '6']
  },
  yAxis: {},
  series: [{
    name: 'bbb',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
}

//////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
export const option3={
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br>{c} ({d}%)'
  },
  series: [
    {
      name: 'pie',
      type: 'pie',
      selectedMode: 'single',
      selectedOffset: 30,
      clockwise: true,
      radius: [0, '90%'],
      label: {
        normal: {
          position: 'inner',
          textStyle: {
            fontSize: 14,
            fontWeight: 700,
            color: '#000'
          }
        }
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: '#336cfb'
          }
        }
      },
      data: [
        { value: 154, name: 'Female' },
        { value: 173, name: 'Male' }
      ],
      // itemStyle: pieStyle
    }
  ]
}
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

export const option4={

    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}<br>{c} ({d}%)'
    },
    series: [
      {
        name: 'pie',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 30,
        clockwise: true,
        radius: [60, '90%'],
        label: {
          normal: {
            position: 'inner',
            textStyle: {
              fontSize: 14,
              fontWeight: 700,
              color: '#000'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: '#336cfb'
            }
          }
        },
        data: [
          { value: 347, name: '0-10' },
          { value: 310, name: '10-20' },
          { value: 234, name: '20-30' },
          { value: 195, name: '30-40' },
          { value: 670, name: '40+' }
        ],
        // itemStyle: pieStyle
      }
    ]
  
}
////////////////////////////////////
/////////////////////////////////////
export const option5 = {
  color: ["pink"],
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  xAxis: {
    boundaryGap: false,
    type: 'category'
  },
  yAxis: {
    show: false
  },
  series: [
    {
      name: 'patients 2019',
      type: 'line',
      smooth: true,
      data: [94, 111, 90, 85, 70, 83, 94, 109, 89, 74, 83, 78],
      areaStyle: {}
    }
  ]
};