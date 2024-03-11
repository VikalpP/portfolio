import { ExperienceType } from './experience'
import {
  FreelancingExperience,
  HighlighterExperience,
  MightyByteExperience,
  MJInfotechExperience,
  OpenSourceExperience,
  RetainitExperience,
} from './experiences'

interface Props {
  selectedExperience: ExperienceType
}

export function ExperienceDetails({ selectedExperience }: Props) {
  if (selectedExperience === ExperienceType.Retainit) return <RetainitExperience />
  if (selectedExperience === ExperienceType.MightyByte) return <MightyByteExperience />
  if (selectedExperience === ExperienceType.Highlighter) return <HighlighterExperience />
  if (selectedExperience === ExperienceType.OpenSource) return <OpenSourceExperience />
  if (selectedExperience === ExperienceType.FreeLancing) return <FreelancingExperience />
  if (selectedExperience === ExperienceType.MJInfotech) return <MJInfotechExperience />

  return null
}
