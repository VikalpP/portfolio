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
            Architected a reliable system handling 100K+ operations monthly as the lead backend
            engineer.
          </li>
          <li>
            Engineered an automated data-sync pipeline with{' '}
            <ExternalLink url='https://www.zoho.com/in/crm'>Zoho CRM</ExternalLink>, reducing data
            discrepancies by 95% and saving 40+ hours monthly on manual tasks.
          </li>
          <li>Tech Stack: Typescript, Node.js, MongoDB, ZOHO CRM.</li>
        </ul>
      </Text>
    </Stack>
  )
}
