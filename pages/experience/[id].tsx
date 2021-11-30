import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { Stack } from '../../components'
import { ExperienceType } from '../../views'
import { ExperienceDetails } from '../../views/experience/experience-details'

interface Props {
  id: ExperienceType
}

export const getStaticPaths: GetStaticPaths = () => {
  const experiences = Object.keys(ExperienceType)
  const paths = experiences.map(exp => ({ params: { id: exp } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props, { id: ExperienceType }> = ({ params }) => {
  if (!params) return { notFound: true, redirect: '/' }
  return { props: { id: params.id } }
}

function Experience({ id }: Props) {
  return (
    <Stack fill padding='large'>
      <ExperienceDetails selectedExperience={id} />
    </Stack>
  )
}

export default Experience
