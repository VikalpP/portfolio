import React from 'react'
import { COLOR, Spacer, Stack, Text } from '../../../../components'
import { Hive } from './hive'
import { IPermit } from './iPermit'
import { STS } from './sts'

export function MightyByteExperience() {
  return (
    <Stack fillHorizontal>
      <Stack opacity={0.6}>
        <Text fontSize={12} thin italic>
          JAN 2022 - OCT 2022
        </Text>
      </Stack>

      <Text fontSize={30} color={COLOR.ACCENT} lineHeight={1.6}>
        MightyByte
      </Text>
      <Text thin fontSize={18}>
        Full Stack Developer (Remote)
      </Text>

      <Spacer size='small' />
      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        MightyByte is a client-based company solving problems across public and private sectors.
      </Text>

      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        <ul className='pl3'>
          <li>
            Engineered innovative solutions for diverse client needs, increasing project completion
            rates by 40% and reducing client operational costs by 20%.
          </li>
          <li>Helped in 5+ technical interviews.</li>
        </ul>
      </Text>

      <Spacer />
      <IPermit />

      <Spacer />
      <STS />

      <Spacer />
      <Hive />
    </Stack>
  )
}
