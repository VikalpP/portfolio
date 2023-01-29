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
      <Text fontSize={18}>
        SingleToSaddle ({ios} | {android})
      </Text>

      <Spacer size='small' />
      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        An online dating app.
      </Text>

      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        <ul className='pl3'>
          <li>
            Lead a team of 3 people while mentoring them for Code quality, with rapid development
            respecting the project deadline.
          </li>
          <li>Tech Stack: Typescript, React Native, Node.js, MongoDB.</li>
        </ul>
      </Text>
    </Stack>
  )
}
