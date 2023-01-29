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
        An online multiplayer kids game app that will help kids practice more with numbers operation
        in a fun way.
      </Text>

      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        <ul className='pl3'>
          <li>
            Introduced the team to GraphQL and its benefits by implementing it for this project -
            which later became a company-wide backend stack for upcoming projects.
          </li>
          <li>Architected the codebase from frontend to backend which uses GraphQL.</li>
          <li>
            Improved latency in multiplayer sessions with custom resolvers in Subscription events.
          </li>
          <li>Tech Stack: Typescript, React Native, Node.js, MongoDB, GraphQL.</li>
        </ul>
      </Text>
    </Stack>
  )
}
