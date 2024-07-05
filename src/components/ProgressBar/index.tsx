import Theme from '@/styles/theme'
import * as S from './styles'
type ProgressBarProps = {
  progress:number
}

function ProgressBar(props:ProgressBarProps){
  const {progress} = props
  return (
    <S.Container>
      <S.ProgressBarContainer>
          <S.ProgressBar 
            progress={progress/100}
            width={null}
            borderColor="transparent"
            color={Theme.colors.green['500']}
            unfilledColor={Theme.colors.neutral['200']}
            height={8}
          />
        </S.ProgressBarContainer> 
      <S.Percent>
        {progress}%
      </S.Percent>
    </S.Container>
  )
}
export default ProgressBar