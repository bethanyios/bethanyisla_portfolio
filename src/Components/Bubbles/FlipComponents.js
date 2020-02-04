import styled from 'styled-components'

import { ReactComponent as StackF } from '../../Assets/Cards/StackFront.svg'
import { ReactComponent as StackB } from '../../Assets/Cards/StackBack.svg'
import { ReactComponent as ProfF } from '../../Assets/Cards/ProfileFront.svg'
import { ReactComponent as ProfB } from '../../Assets/Cards/ProfileBack.svg'
import { ReactComponent as ExpF } from '../../Assets/Cards/ExperienceFront.svg'
import { ReactComponent as ExpB } from '../../Assets/Cards/ExperienceBack.svg'
import { ReactComponent as InterestF } from '../../Assets/Cards/InterestsFront.svg'
import { ReactComponent as InterestB } from '../../Assets/Cards/InterestsBack.svg'

const StackFront = styled(StackF)`
cursor: pointer;
`
const StackBack = styled(StackB)`
cursor: pointer;
`
const ProfileFront = styled(ProfF)`
cursor: pointer;
`
const ProfileBack = styled(ProfB)`
cursor: pointer;
`
const ExperienceFront = styled(ExpF)`
cursor: pointer;
`
const ExperienceBack = styled(ExpB)`
cursor: pointer;
`
const InterestFront = styled(InterestF)`
cursor: pointer;
`
const InterestBack = styled(InterestB)`
cursor: pointer;
`

export { StackFront, StackBack, ProfileFront, ProfileBack, ExperienceFront, ExperienceBack, InterestFront, InterestBack};
