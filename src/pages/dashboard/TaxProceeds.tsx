import React from 'react'
import { div } from '../../api/math'
import { format } from '../../utils'
import Amount from '../../components/Amount'
import Flex from '../../components/Flex'
import ChartCard from './ChartCard'

interface Result {
  datetime: number
  tax: string
}

type Results = Result[]
const denom = 'ukrw'
const TaxProceeds = () => (
  <ChartCard
    title="Tax proceeds"
    url="/v1/dashboard/tax"
    renderHeader={(results: Results) => {
      const { tax } = results[results.length - 1]
      return (
        <Flex>
          <Amount denom={denom} fontSize={20} hideDecimal>
            {tax}
          </Amount>
        </Flex>
      )
    }}
    getChartProps={(results: Results) => ({
      type: 'line',
      data: results.map(({ datetime, tax }) => ({
        t: new Date(datetime),
        y: div(tax, 1e6)
      })),
      options: {
        tooltips: {
          callbacks: {
            title: ([{ value = '' }]) =>
              `${format.decimal(value, 0)} ${format.denom(denom)}`
          }
        }
      },
      lineStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0)'
      }
    })}
  />
)

export default TaxProceeds