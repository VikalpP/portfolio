import { Spacer, Stack, Text } from '../../../../components'

export function STS() {
  return (
    <Stack fillHorizontal>
      <Text fontSize={18}>SingleToSaddle</Text>

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
