
import config from "./config";
const colors = config.chartColors;

let columnColors = [
  colors.blue,
  colors.green,
  colors.orange,
  colors.red,
  colors.default,
  colors.gray,
  colors.teal,
  colors.pink,
];
let lineColors = [colors.blue, colors.green, colors.orange];

export const chartData = {
  apex: {
    column: {
      series: [
        {
          data: [21, 22, 10, 28, 16, 21, 13, 30],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
        },
        legend: {
          show: true,
          labels: {
            colors: colors.textColor,
          },
          itemMargin: {
            horizontal: 10,
            vertical: 5
          },
        },
        colors: columnColors,
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "John",
            "Joe",
            "Jake",
            "Amber",
            "Peter",
            "Mary",
            "David",
            "Lily",
          ],
          labels: {
            style: {
              colors: columnColors,
              fontSize: "14px",
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              color: colors.textColor,
            },
          },
        },
        tooltip: {
          theme: "dark",
        },
        grid: {
          borderColor: colors.gridLineColor,
        },
      },
    },
    pie: {
      series: [25, 15, 44, 55, 41, 17],
      options: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        theme: {
          monochrome: {
            enabled: true,
            color: colors.blue,
          },
        },
        stroke: {
          show: false,
          width: 0,
        },
        legend: false,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    },
  },
  echarts: {
    line: {
      color: lineColors,
      tooltip: {
        trigger: "none",
        axisPointer: {
          type: "cross",
        },
      },
      legend: {
        data: ["2015 Precipitation", "2016 Precipitation"],
        textStyle: {
          color: colors.textColor,
        },
      },
      grid: {
        top: 70,
        bottom: 50,
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: lineColors[1],
            },
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  "Precipitation  " +
                  params.value +
                  (params.seriesData.length
                    ? "：" + params.seriesData[0].data
                    : "")
                );
              },
            },
          },
          data: [
            "2020-1",
            "2020-2",
            "2020-3",
            "2020-4",
            "2020-5",
            "2020-6",
            "2020-7",
            "2020-8",
            "2020-9",
            "2020-10",
            "2020-11",
            "2020-12",
          ],
        },
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: lineColors[0],
            },
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  "Precipitation  " +
                  params.value +
                  (params.seriesData.length
                    ? "：" + params.seriesData[0].data
                    : "")
                );
              },
            },
          },
          data: [
            "2019-1",
            "2019-2",
            "2019-3",
            "2019-4",
            "2019-5",
            "2019-6",
            "2019-7",
            "2019-8",
            "2019-9",
            "2019-10",
            "2019-11",
            "2019-12",
          ],
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            color: colors.textColor,
          },
          axisLine: {
            lineStyle: {
              color: colors.textColor,
            },
          },
          splitLine: {
            lineStyle: {
              color: colors.gridLineColor,
            },
          },
          axisPointer: {
            label: {
              color: colors.dark,
            },
          },
        },
      ],
      series: [
        {
          name: "2015 Precipitation",
          type: "line",
          xAxisIndex: 1,
          smooth: true,
          data: [
            2.6,
            5.9,
            9.0,
            26.4,
            28.7,
            70.7,
            175.6,
            182.2,
            48.7,
            18.8,
            6.0,
            2.3,
          ],
        },
        {
          name: "2016 Precipitation",
          type: "line",
          smooth: true,
          data: [
            3.9,
            5.9,
            11.1,
            18.7,
            48.3,
            69.2,
            231.6,
            46.6,
            55.4,
            18.4,
            10.3,
            0.7,
          ],
        },
      ],
    },
    donut: {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        show: false,
      },
      color: [
        colors.blue,
        colors.green,
        colors.orange,
        colors.red,
        colors.purple,
      ],
      series: [
        {
          name: "Access source",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center",
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold",
              },
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            { value: 335, name: "Direct interview" },
            { value: 310, name: "Email marketing" },
            { value: 234, name: "Alliance advertising" },
            { value: 135, name: "Video ad" },
            { value: 1548, name: "Search engine" },
          ],
        },
      ],
    },
    river: {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
          lineStyle: {
            color: "rgba(0,0,0,0.2)",
            width: 1,
            type: "solid",
          },
        },
      },

      legend: {
        data: ["DQ", "TY", "SS", "QG", "SY", "DD"],
        textStyle: {
          color: colors.textColor,
        },
      },
      color: [
        colors.blue,
        colors.green,
        colors.orange,
        colors.red,
        colors.purple,
        colors.gray,
      ],
      singleAxis: {
        top: 50,
        bottom: 50,
        axisTick: {},
        axisLabel: {
          color: colors.textColor,
        },
        type: "time",
        axisPointer: {
          animation: true,
          label: {
            show: true,
            color: colors.dark,
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: [colors.gridLineColor],
            type: "dashed",
            opacity: 0.2,
          },
        },
        axisLine: {
          lineStyle: {
            color: colors.textColor,
          },
        },
      },

      series: [
        {
          type: "themeRiver",
          itemStyle: {
            emphasis: {
              shadowBlur: 20,
              shadowColor: "rgba(0, 0, 0, 0.8)",
            },
          },
          label: {
            show: false,
          },
          data: [
            ["2015/11/08", 10, "DQ"],
            ["2015/11/09", 15, "DQ"],
            ["2015/11/10", 35, "DQ"],
            ["2015/11/11", 38, "DQ"],
            ["2015/11/12", 22, "DQ"],
            ["2015/11/13", 16, "DQ"],
            ["2015/11/14", 7, "DQ"],
            ["2015/11/15", 2, "DQ"],
            ["2015/11/16", 17, "DQ"],
            ["2015/11/17", 33, "DQ"],
            ["2015/11/18", 40, "DQ"],
            ["2015/11/19", 32, "DQ"],
            ["2015/11/20", 26, "DQ"],
            ["2015/11/21", 35, "DQ"],
            ["2015/11/22", 40, "DQ"],
            ["2015/11/23", 32, "DQ"],
            ["2015/11/24", 26, "DQ"],
            ["2015/11/25", 22, "DQ"],
            ["2015/11/26", 16, "DQ"],
            ["2015/11/27", 22, "DQ"],
            ["2015/11/28", 10, "DQ"],
            ["2015/11/08", 35, "TY"],
            ["2015/11/09", 36, "TY"],
            ["2015/11/10", 37, "TY"],
            ["2015/11/11", 22, "TY"],
            ["2015/11/12", 24, "TY"],
            ["2015/11/13", 26, "TY"],
            ["2015/11/14", 34, "TY"],
            ["2015/11/15", 21, "TY"],
            ["2015/11/16", 18, "TY"],
            ["2015/11/17", 45, "TY"],
            ["2015/11/18", 32, "TY"],
            ["2015/11/19", 35, "TY"],
            ["2015/11/20", 30, "TY"],
            ["2015/11/21", 28, "TY"],
            ["2015/11/22", 27, "TY"],
            ["2015/11/23", 26, "TY"],
            ["2015/11/24", 15, "TY"],
            ["2015/11/25", 30, "TY"],
            ["2015/11/26", 35, "TY"],
            ["2015/11/27", 42, "TY"],
            ["2015/11/28", 42, "TY"],
            ["2015/11/08", 21, "SS"],
            ["2015/11/09", 25, "SS"],
            ["2015/11/10", 27, "SS"],
            ["2015/11/11", 23, "SS"],
            ["2015/11/12", 24, "SS"],
            ["2015/11/13", 21, "SS"],
            ["2015/11/14", 35, "SS"],
            ["2015/11/15", 39, "SS"],
            ["2015/11/16", 40, "SS"],
            ["2015/11/17", 36, "SS"],
            ["2015/11/18", 33, "SS"],
            ["2015/11/19", 43, "SS"],
            ["2015/11/20", 40, "SS"],
            ["2015/11/21", 34, "SS"],
            ["2015/11/22", 28, "SS"],
            ["2015/11/23", 26, "SS"],
            ["2015/11/24", 37, "SS"],
            ["2015/11/25", 41, "SS"],
            ["2015/11/26", 46, "SS"],
            ["2015/11/27", 47, "SS"],
            ["2015/11/28", 41, "SS"],
            ["2015/11/08", 10, "QG"],
            ["2015/11/09", 15, "QG"],
            ["2015/11/10", 35, "QG"],
            ["2015/11/11", 38, "QG"],
            ["2015/11/12", 22, "QG"],
            ["2015/11/13", 16, "QG"],
            ["2015/11/14", 7, "QG"],
            ["2015/11/15", 2, "QG"],
            ["2015/11/16", 17, "QG"],
            ["2015/11/17", 33, "QG"],
            ["2015/11/18", 40, "QG"],
            ["2015/11/19", 32, "QG"],
            ["2015/11/20", 26, "QG"],
            ["2015/11/21", 35, "QG"],
            ["2015/11/22", 40, "QG"],
            ["2015/11/23", 32, "QG"],
            ["2015/11/24", 26, "QG"],
            ["2015/11/25", 22, "QG"],
            ["2015/11/26", 16, "QG"],
            ["2015/11/27", 22, "QG"],
            ["2015/11/28", 10, "QG"],
            ["2015/11/08", 10, "SY"],
            ["2015/11/09", 15, "SY"],
            ["2015/11/10", 35, "SY"],
            ["2015/11/11", 38, "SY"],
            ["2015/11/12", 22, "SY"],
            ["2015/11/13", 16, "SY"],
            ["2015/11/14", 7, "SY"],
            ["2015/11/15", 2, "SY"],
            ["2015/11/16", 17, "SY"],
            ["2015/11/17", 33, "SY"],
            ["2015/11/18", 40, "SY"],
            ["2015/11/19", 32, "SY"],
            ["2015/11/20", 26, "SY"],
            ["2015/11/21", 35, "SY"],
            ["2015/11/22", 4, "SY"],
            ["2015/11/23", 32, "SY"],
            ["2015/11/24", 26, "SY"],
            ["2015/11/25", 22, "SY"],
            ["2015/11/26", 16, "SY"],
            ["2015/11/27", 22, "SY"],
            ["2015/11/28", 10, "SY"],
            ["2015/11/08", 10, "DD"],
            ["2015/11/09", 15, "DD"],
            ["2015/11/10", 35, "DD"],
            ["2015/11/11", 38, "DD"],
            ["2015/11/12", 22, "DD"],
            ["2015/11/13", 16, "DD"],
            ["2015/11/14", 7, "DD"],
            ["2015/11/15", 2, "DD"],
            ["2015/11/16", 17, "DD"],
            ["2015/11/17", 33, "DD"],
            ["2015/11/18", 4, "DD"],
            ["2015/11/19", 32, "DD"],
            ["2015/11/20", 26, "DD"],
            ["2015/11/21", 35, "DD"],
            ["2015/11/22", 40, "DD"],
            ["2015/11/23", 32, "DD"],
            ["2015/11/24", 26, "DD"],
            ["2015/11/25", 22, "DD"],
            ["2015/11/26", 16, "DD"],
            ["2015/11/27", 22, "DD"],
            ["2015/11/28", 10, "DD"],
          ],
        },
      ],
    },
  },
}

export let liveChartInterval = null;

