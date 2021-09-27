import { useQuery } from 'react-query'
import useLCD from '../../lib/api/useLCD'

export const useStakingPool = () => {
  const lcd = useLCD()
  return useQuery(['pool'], () => lcd.staking.pool())
}
