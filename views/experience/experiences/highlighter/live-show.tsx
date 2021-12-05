import React from 'react'
import { ExternalLink, Spacer, Stack, Text } from '../../../../components'

export function LiveShow() {
  return (
    <Stack fillHorizontal>
      <Text fontSize={16}>Highlighter (Live Show)</Text>

      <Spacer size='small' />
      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        An online platform for creators to host their live events/shows and allow people to create
        &amp; share video highlights from it.
      </Text>

      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        <ul className='pl3'>
          <li>
            Led a team of 4 developers to develop &amp; deploy a sub-product (
            <ExternalLink url='clipper.highlighter.app'>Clipper</ExternalLink>) within a week,
            supporting features like video transcription, clipping.
          </li>
          <li>Developed the POC to introduce interactive live events over a weekend.</li>
          <li>
            Built a service for content creators to create video highlight clips from a LIVE event
            video concurrently, using{' '}
            <ExternalLink url='http://www.ffmpeg.org'>FFmpeg</ExternalLink>.
          </li>
          <li>
            Built on-demand video conversion to download HLS video into MP4, MKV, AVI with a latency
            of 2 seconds, which allowed users to download highlights and share on other social
            platforms.
          </li>
          <li>
            Improved video clipping performance by caching &amp; streaming video highlights using
            MUX.
          </li>
          <li>Scheduled and live stream on the Host’s YouTube channel using YouTube Data API.</li>
          <li>
            Built a service to convert video clips to Twitter supported formats and share them on
            the go.
          </li>
          <li>
            Built a live video transcriptor UI component that enables video highlighting by
            selecting video transcripts.
          </li>
        </ul>
      </Text>
    </Stack>
  )
}
