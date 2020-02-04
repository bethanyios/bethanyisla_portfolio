import styled from 'styled-components'

import { ReactComponent as StackF } from '../../Assets/Cards/StackFront.svg'
import { ReactComponent as StackB } from '../../Assets/Cards/StackBack.svg'
import { ReactComponent as ProfF } from '../../Assets/Cards/ProfileFront.svg'
import { ReactComponent as ProfB } from '../../Assets/Cards/ProfileBack.svg'

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

export { StackFront, StackBack, ProfileFront, ProfileBack };
