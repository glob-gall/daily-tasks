import SelectDropdown from "react-native-select-dropdown";

import * as S from './styles'
import { ColorNames } from "@/styles/colors";
import { View } from "react-native";

type InputColorProps = {
  label: string
  name?:string
}
type Color = {
  label:string
  color: ColorNames | 'white'
}

const colors: Color[] = [
  {
    label: 'Branco',
    color: 'white'
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
  const {label} = props
 return (
  <S.Container>
    <S.Label>{label}</S.Label>
    <S.InputWrapper>
      
    <SelectDropdown
      // defaultValue={colors[0]}
      data={colors}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      renderButton={(selectedItem:Color, isOpened) => (
        <>
          <S.Item isSelected>
            <S.ColorPreview 
              color={selectedItem ? selectedItem.color: 'white'}
            />
            <S.ItemLabel>{selectedItem ? selectedItem.label: 'Selecione uma cor'}</S.ItemLabel>
            {/* <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} /> */}
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