import SelectDropdown from "react-native-select-dropdown";
import { FontAwesome5 } from '@expo/vector-icons';
import * as S from './styles'
import Theme from "@/styles/theme";
import { Color } from "@/entity/Task/dto";
import { ColorNames } from "@/styles/colors";

type InputColorProps = {
  label: string
  required?: boolean
  onChange?: (e: Color) => void
  initialValue?: Color
}

export const colorOptions: Color[] = [
  {
    label: 'Branco',
    color: 'neutral'
  },
  {
    label: 'Azul',
    color: 'blue'
  },
  {
    label: 'Verde',
    color: 'green'
  },
  {
    label: 'Amarelo',
    color: 'yellow'
  },
  {
    label: 'Vermelho',
    color: 'red'
  },
  {
    label: 'Laranja',
    color: 'orange'
  },
  {
    label: 'Indigo',
    color: 'indigo'
  },
  {
    label: 'Roxo',
    color: 'purple'
  },
  {
    label: 'Fuchsia',
    color: 'fuchsia'
  },
  {
    label: 'Pink',
    color: 'pink'
  },
  {
    label: 'Rose',
    color: 'rose'
  },
]



function InputColor(props: InputColorProps){
  const {label, onChange, required, initialValue} = props  

 return (
  <S.Container>
    <S.Label>
      {label}
      {required && <S.Required>*</S.Required>}
    </S.Label>
    <S.InputWrapper>
      
    <SelectDropdown
      defaultValue={initialValue}
      data={colorOptions}
      onSelect={(selectedItem, index) => {        
        if (onChange) {
          onChange(selectedItem)
        }
      }}
      renderButton={(selectedItem:Color, isOpened) => (
        <>
          <S.Item isSelected>
            <S.ColorPreview 
              color={selectedItem ? selectedItem.color: 'neutral'}
            />
            <S.ItemLabel>{selectedItem ? selectedItem.label: 'Selecione uma cor'}</S.ItemLabel>
            {/* <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} /> */}
            <S.ItemIcon>
              {isOpened?(
                <FontAwesome5 name="angle-up" size={24} color={Theme.colors.neutral['400']} />
              ):(
                <FontAwesome5 name="angle-down" size={24} color={Theme.colors.neutral['400']} />
              )}
            </S.ItemIcon>
          </S.Item>
        </>
        )}
      renderItem={(item, index, isSelected) => {
        return (
          <>
            <S.Item isSelected={isSelected}>
              <S.ColorPreview color={item.color}/>
              <S.ItemLabel>{item.label}</S.ItemLabel>
            </S.Item>
          </>
        );
      }}
      showsVerticalScrollIndicator={false}
      // dropdownStyle={}
    />

    </S.InputWrapper>
    
  </S.Container>
 )
}
export default InputColor