import React from 'react'
import c from 'classnames'
import { NotVoted as Props } from '@terra-money/use-station'
import validators from '../../validators'
import Card from '../../components/Card'
import Icon from '../../components/Icon'
import Flex from '../../components/Flex'
import s from './NotVoted.module.scss'

const NotVoted = ({ title, list, button }: Props) => (
  <Card className={s.card}>
    <Flex className={c('text-danger', s.desc)}>
      <Icon name="how_to_vote" size={24} />
      <p>{title}:</p>
    </Flex>

    <ul className={s.list}>
      {list.map(({ operatorAddress, moniker }) => {
        const email = validators[operatorAddress]
        return (
          <li className={s.item} key={operatorAddress}>
            <strong>{moniker}</strong>

            {email && (
              <a
                href={'mailto:' + email}
                className={c('btn-outline-sky', s.button)}
              >
                {button}
              </a>
            )}
          </li>
        )
      })}
    </ul>
  </Card>
)

export default NotVoted
