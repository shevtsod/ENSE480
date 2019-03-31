import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts'

import * as S from './style'

const Graph = ({ className, data, height, width }) => {
  // DOM ref
  const graphRef = useRef(null)

  // echarts object
  let echart = null

  // Options for ECharts
  const option = {
    xAxis: {},
    yAxis: {},
    tooltip: {},
    series: [
      {
        name: 'Positive',
        type: 'scatter',
        tooltip: {
          formatter: '{a} <br />{c}'
        },
        data: data
          .filter(point => point.value === 1)
          .map(point => [point.x, point.y])
      },
      {
        name: 'Negative',
        type: 'scatter',
        tooltip: {
          formatter: '{a} <br />{c}'
        },
        data: data
          .filter(point => point.value === -1)
          .map(point => [point.x, point.y])
      }
    ]
  }

  // Initialize ECharts when data changes
  useEffect(() => {
    echart = echarts.init(graphRef.current)
    echart.setOption(option)
  }, [data])

  return (
    <S.Graph
      className={className}
      height={height}
      width={width}
      ref={graphRef}
    />
  )
}

Graph.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

Graph.defaultProps = {
  height: 400,
  width: 400
}

export default Graph
