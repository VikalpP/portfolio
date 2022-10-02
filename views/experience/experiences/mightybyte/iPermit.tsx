import { ExternalLink, Spacer, Stack, Text } from '../../../../components'

export function IPermit() {
  return (
    <Stack fillHorizontal>
      <Text fontSize={18}>
        iPermit (<ExternalLink url='https://ipermitpro.com'>web</ExternalLink>)
      </Text>

      <Spacer size='small' />
      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        Leading duct testing and permitting company in California.
      </Text>

      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        <ul className='pl3'>
          <li>
            Lead Backend engineer architected a reliable system for 300+ daily contractors,
            cross-syncing with other third-party CRM services like{' '}
            <ExternalLink url='https://www.zoho.com/in/crm'>Zoho CRM</ExternalLink>.
          </li>
          <li>Data syncing with Zoho CRM was a crucial part of the product.</li>
          <li>Tech Stack: Typescript, Node.js, MongoDB, ZOHO CRM.</li>
        </ul>
      </Text>
    </Stack>
  )
}
