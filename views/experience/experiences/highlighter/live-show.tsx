import React from 'react'
import { ExternalLink, Spacer, Stack, Text } from '../../../../components'

export function LiveShow() {
  return (
    <Stack fillHorizontal>
      <Text fontSize={18}>Highlighter (Live Show)</Text>

      <Spacer size='small' />
      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        An online platform for creators to host their live events/shows, and audiences can create
        and share video highlights from it.
      </Text>

      <Text thin fontSize={14} lineHeight={1.5} wordSpacing={2}>
        <ul className='pl3'>
          <li>Developed the POC to introduce WebRTC-based interactive live events.</li>
          <li>
            Architected a real-time video processing service using{' '}
            <ExternalLink url='http://www.ffmpeg.org'>FFmpeg</ExternalLink>, empowering content
            creators to generate highlight clips from LIVE event videos in real-time, boosting
            engagement by 35% and reducing post-production time by 50%.
          </li>
          <li>
            Built on-demand video conversion to download{' '}
            <ExternalLink url='https://en.wikipedia.org/wiki/HTTP_Live_Streaming'>HLS</ExternalLink>{' '}
            video into MP4, MKV, AVI with a latency of 2 seconds, which allowed users to download
            highlights and share on other social platforms.
          </li>
          <li>
            Integrated <ExternalLink url='https://mux.com'>MUX</ExternalLink> to improve caching &
            streaming video highlights, achieving a 45% decrease in video load times and a 15% rise
            in user satisfaction scores.
          </li>
          <li>Live-streamed on the Host’s YouTube channel using YouTube Data API.</li>
          <li>Tech Stack: React Native, Apollo GraphQL, Express, GraphQL.</li>
        </ul>
      </Text>
    </Stack>
  )
}
