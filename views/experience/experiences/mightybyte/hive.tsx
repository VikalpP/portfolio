import { ExternalLink, Spacer, Stack, Text } from '../../../../components'

const web = <ExternalLink url='https://play.numberhive.org'>web</ExternalLink>
const ios = (
  <ExternalLink url='https://apps.apple.com/in/app/number-hive/id1636921061'>iOS</ExternalLink>
)
const android = (
  <ExternalLink url='https://play.google.com/store/apps/details?id=com.numberhive'>
    Android
  </ExternalLink>
)

export function Hive() {
  return (
    <Stack fillHorizontal>
      <Text fontSize={18}>
        Hive ({web} | {ios} | {android})
      </Text>

      <Spacer size='small' />
      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        An online multiplayer kids&apos; game app that will help kids practice more with numbers
        operation in a fun way.
      </Text>

      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        <ul className='pl3'>
          <li>
            Introduced GraphQL to the team, showcasing its benefits by optimizing data queries by
            30%; this initiative led to its adoption as the standard backend stack.
          </li>
          <li>
            Reduced multiplayer session lag by 38% using custom resolvers in subscription events,
            led to a 30% increase in active user sessions and engagement.
          </li>
          <li>Tech Stack: Typescript, React Native, Node.js, MongoDB, GraphQL.</li>
        </ul>
      </Text>
    </Stack>
  )
}
