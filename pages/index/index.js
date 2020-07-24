import * as echarts from '../../ec-canvas/echart';

Page({
  data: {
  },
  onLoad: function () {
    this.initChart()
  },

  // 初始化图标
  initChart() {
    const chartComponent = this.selectComponent('#chart')
    chartComponent.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width,
        height
      })
      
      const option = {
			  tooltip: {
			    trigger: 'axis',
			    axisPointer: {
			      type: 'shadow'
			    }
			  },
			  legend: {
			    orient: 'vertical',
			    x: 'right',
			    data: ['开单金额'],
			    textStyle: {
			      fontSize: 12,
			      color: '#999999'
			    }
			  },
			  grid: {
			    left: '2%',
			    right: '5%',
			    bottom: '5%',
			    top: "15%",
			    containLabel: true
			  },
			  color: ['#87E7FF'],
			  xAxis: {
			    type: 'category',
			    data: ['2020-07-18', '2020-07-19', '2020-07-20', '2020-07-21', '2020-07-22', '2020-07-23', '2020-07-24'],
			    axisLabel: {
			      textStyle: {
			        fontSize: 12,
			        color: '#999999'
			      }
			    },
			    axisTick: {
			      alignWithLabel: true
			    }
			  },
			  yAxis: {
			    type: 'value',
			    axisTick: {
			      inside: true
			    },
			    scale: true,
			    axisLabel: {
			      textStyle: {
			        fontSize: 12,
			        color: '#999999'
			      },
			      margin: 5,
			      formatter: function (value) {
			        if (value >= 1000) {
			          value = value / 1000 + "k";
			        }
			
			        return value;
			      }
			    }
			  },
			  series: [{
          name: '金额',
          stack: '-',
          type: 'bar',
          data: [ 572011, 2204, 44337, 62701, 106909, 44410, 146850],
          value: [ 572011, 2204, 44337, 62701, 106909, 44410, 146850]
        }]
      };
      chart.setOption(option)
      return chart
    })
  }
})
