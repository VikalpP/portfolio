import React from 'react'
import { Spacer, Stack, Text } from '../../../../components'

export function LiveShow() {
  return (
    <Stack fillHorizontal>
      <Text fontSize={16}>Highlighter (Live Show)</Text>

      <Spacer size='small' />
      <Text thin fontSize={12} lineHeight={1.5}>
        An online platform for creators to host their live events/shows and allow people to create
        &amp; share video highlights from it.
      </Text>

      <Text thin fontSize={12} lineHeight={1.5}>
        <ul className='pl3'>
          <li>Developed the POC to introduce interactive live events over a weekend.</li>
          <li>
            Built on-demand video clipping service, to create small video highlight clips from a
            LIVE or recorded event video.
          </li>
          <li>
            Built on-demand video conversion to download HLS video into MP4, MKV, AVI, which allowed
            users to download highlights and share on other platforms.
          </li>
          <li>Improved the caching & streaming video highlights.</li>
          <li>Added support of live streaming in YouTube.</li>
          <li>
            Built a feature around Twitter to share video highlights directly from Highlighter.
          </li>
          <li>
            Built a live video transcriptor that has an added capability to create video highlights
            from selected transcript text.
          </li>
        </ul>
      </Text>
    </Stack>
  )
}
