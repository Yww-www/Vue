
<template>
  <div style="display:flex;flex-direction: column;padding: 50px">
    <div style="padding: 50px;display: flex;justify-content: center" >
      <a-card title="已完成题目数量" style="width: 500px;height: 200px;text-align: center;margin-right: 100px">
        <span style="fontSize:20px;marginBottom:0px">2154道     <span style="font-size: 12px">相比于上周</span></span>
        <a-statistic
          :value="11.28"
          :precision="2"
          suffix="%"
          :value-style="{ color: '#3f8600' }"
          style="margin-right: 20px;display: inline-block"
        >
          <template #prefix>
            <a-icon type="arrow-up" />
          </template>
        </a-statistic>
      </a-card>
      <a-card title="练习时常" style="width: 500px;height: 200px;text-align: center;margin-left: 100px">
        <span style="fontSize:20px;marginBottom:0px">44 小时25分钟  <span style="font-size: 12px">相比于上周</span></span>
        <a-statistic
          :value="28"
          :precision="2"
          suffix="%"
          :value-style="{ color: '#cf1322' }"
          style="margin-right: 20px;display: inline-block"
        >
          <template #prefix>
            <a-icon type="arrow-down" />
          </template>
        </a-statistic>
      </a-card>
    </div>
    <a-divider>题目完成情况</a-divider>
    <div id="fwdata" style="width:1350px;height: 500px;padding: 50px">
    </div>
    <a-divider>做题情况</a-divider>
    <div style="display:flex;">
      <div id="aboutright" style="width: 100%;height: 500px;padding: 50px"></div>
      <div id="aboutclass" style="width: 100%;height: 500px;padding: 50px">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('fwdata'))
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['错误题目数', '正确题目数', '联盟广告', '视频广告', '题目完成数目']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            min:0,
            max:200,
            splitNumber: 10,
          },
          yAxis: {
            type: 'category',
            data: ['七天前', '六天前', '五天前', '四天前', '三天前', '两天前', '一天前']
          },
          series: [
            {
              name: '错误题目数',
              type: 'bar',
              stack: '1',
              color:'#EE4653',
              label: {
                show: true,
                position: 'insideRight'
              },
              data: [32, 32, 31, 34, 39, 8, 11]
            },
            {
              name: '正确题目数',
              type: 'bar',
              color:'#3da600',
              stack: '1',
              label: {
                show: true,
                position: 'insideRight'
              },
              data: [50,51,60,59,81,122, 49]
            },
            {
              name: '题目完成数目',
              type: 'bar',
              stack: '总量',
              color: '#37B5F8',
              label: {
                show: true,
                position: 'insideRight'
              },
              data: [82, 83, 91, 93, 120, 130, 60]
            }
          ]
        });
      },
      drawright(){
        let myChart = this.$echarts.init(document.getElementById('aboutright'))
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          xAxis: {
            type: 'category',
            data: ['七天前', '六天前', '五天前', '四天前', '三天前', '两天前', '一天前']
          },

          yAxis: {
            type: 'value',
            name:'正确率'
          },
          series: [{
            data: [70, 71.2, 80, 75, 61, 80, 85],
            type: 'line',
            name:'正确率',
            smooth: true
          }]
        });
      },
      drawabout(){
        let myChart = this.$echarts.init(document.getElementById('aboutclass'))
        // 绘制图表
        myChart.setOption({
          legend: {},
          tooltip: {
            trigger: 'axis',
            showContent: false
          },
          dataset: {
            source: [
              ['日期', '七天前', '六天前', '五天前', '四天前', '三天前', '两天前','一天前'],
              ['顺序练习', 41, 30, 65, 53, 83, 98,52],
              ['随机练习', 86, 92, 85, 83, 74, 55,100],
              ['专项挑战', 24, 67, 79, 86, 65, 82,30],
              ['难题攻克', 55, 67, 69, 72, 53, 39,60]
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {gridIndex: 0},
          grid: {top: '55%'},
          series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '25%'],
              label: {
                formatter: '{b}: {@七天前} ({d}%)'
              },
              encode: {
                itemName: '日期',
                value: '七天前',
                tooltip: '七天前'
              }
            }
          ]
        });

        myChart.on('updateAxisPointer', function (event) {
          var xAxisInfo = event.axesInfo[0];
          if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
              series: {
                id: 'pie',
                label: {
                  formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                  value: dimension,
                  tooltip: dimension
                }
              }
            });
          }
        });
      },
      changeLimit () {
        function getArrayItems(arr, num) {
          const temp_array = [];
          for (let index in arr) {
            temp_array.push(arr[index]);
          }
          const return_array = [];
          for (let i = 0; i<num; i++) {
            if (temp_array.length>0) {
              const arrIndex = Math.floor(Math.random()*temp_array.length);
              return_array[i] = temp_array[arrIndex];
              temp_array.splice(arrIndex, 1);
            } else {
              break;
            }
          }
          return return_array;
        }
        this.randomMovieList = getArrayItems(this.movieList, 5);
      }
    },
    mounted () {
      this.drawLine();
      this.drawright();
      this.drawabout();
    }
  }
</script>

<style scoped>

</style>
