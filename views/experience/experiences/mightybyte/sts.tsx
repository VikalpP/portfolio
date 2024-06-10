import { ExternalLink, Spacer, Stack, Text } from '../../../../components'

const ios = (
  <ExternalLink url='https://apps.apple.com/in/app/singletosaddled/id1636840118'>iOS</ExternalLink>
)
const android = (
  <ExternalLink url='https://play.google.com/store/apps/details?id=com.singletosaddled'>
    Android
  </ExternalLink>
)

export function STS() {
  return (
    <Stack fillHorizontal>
      <Text fontSize={18}>SingleToSaddled</Text>

      <Spacer size='small' />
      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        an iOS dating app for cowboys and cowgirls, achieving 40% MAU growth and a 25% increase in
        premium memberships in the first 3 months.
      </Text>

      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        <ul className='pl3'>
          <li>
            Developed a comprehensive matching algorithm based on gender preferences, distance, and
            age range; increasing successful matches by 45%.
          </li>
          <li>Tech Stack: Typescript, React Native, Node.js, MongoDB.</li>
        </ul>
      </Text>
    </Stack>
  )
}
