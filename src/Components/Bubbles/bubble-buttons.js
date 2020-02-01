import styled from 'styled-components'
import { ReactComponent as StackButton } from '../../Assets/stack-button.svg'
import { ReactComponent as StackDesc } from '../../Assets/stack-desc.svg'
import { ReactComponent as InterestsButton } from '../../Assets/interests-button.svg'
import { ReactComponent as ProfilesButton } from '../../Assets/profiles-button.svg'
import { ReactComponent as ExperienceButton } from '../../Assets/experience-button.svg'

// import { ReactComponent as ProfilesSvg } from '../../assets/profiles-btn.svg'
// import { ReactComponent as ExperienceSvg } from '../../assets/experience-btn.svg'
// import { ReactComponent as InterestsSvg } from '../../assets/interests-btn.svg'

const Stack = styled(StackButton)`
margin: 10vw;
user-select: none;
`
const StackText = styled(StackDesc)`
margin: 5vw;
use-select: none;
`
const Interests = styled(InterestsButton)`
margin: 10vw;
user-select: none;
`
const Profiles = styled(ProfilesButton)`
margin: 10vw;
user-select: none;
`
const Experience = styled(ExperienceButton)`
margin: 10vw;
user-select: none;
`

export { Stack, StackText, Interests, Profiles, Experience  }
