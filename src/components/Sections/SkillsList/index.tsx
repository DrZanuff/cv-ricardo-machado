import { Skill } from './Skill'
import * as S from './styles'
import { skills } from './data'

interface SkillsListProps {
  language: 'ptBR' | 'enUS'
}

export function SkillsList({ language }: SkillsListProps) {
  return (
    <S.SkillsListContainer>
      <h3>{language === 'ptBR' ? 'CONHECIMENTOS' : 'SKILLS'}</h3>
      <S.List>
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} image={skill.image} />
        ))}
      </S.List>
    </S.SkillsListContainer>
  )
}
