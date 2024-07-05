import { Task } from '@/entity/Task/dto'
import * as S from './styles'
import { useCallback } from 'react'
import useTaskStore from '@/store/task.store'
import {Check} from 'lucide-react-native'
import { useRouter } from 'expo-router'
type CardProps = {
  task: Task
  hasCheck?:boolean
}

function Card(props: CardProps) {
  const {hasCheck, task} = props
  const {
    name,time,description,emoji,color, checked, id
  } = task

  const {navigate} = useRouter();


  const { setChecked } = useTaskStore()

  const handleSetCheck = useCallback(()=>{
    setChecked(id)
  },[])
  const gotoEditTaskPage = useCallback(()=>{
    navigate({
      pathname: "/update-task/[id]",
      params: { id }
      })
  },[])

  return (
    <S.Container color={color}>
      <S.GotoDetails
        onPress={gotoEditTaskPage}
      >
        {/* <S.EmojiContainer> */}
          <S.Emoji>
            {emoji}
          </S.Emoji>
        {/* </S.EmojiContainer> */}

        <S.InfoContainer>
          <S.title check={checked}>
            {name}
          </S.title>
          {
            description && (
              <S.Description>
                {description}
              </S.Description>
            )
          }
        </S.InfoContainer>
      </S.GotoDetails>
      
      
      <S.Time color={color} check={checked}>
        {time}
      </S.Time>

      {hasCheck && (
        <S.CheckButton onPress={handleSetCheck}>
          { checked ? (
            <S.Checked color={color}>
              <Check size={24}
                color="#fff"
              />
            </S.Checked>
          ) : (
            <S.Unchecked color={color}>
            </S.Unchecked>

            
          )}
        </S.CheckButton>
      ) }
    </S.Container>
  )
}

export default Card