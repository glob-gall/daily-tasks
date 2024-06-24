export type CardColors = 'red' | 'green' | 'yellow' | 'white'

export type TaskDto = {
  id:string
  title: string
  description?: string
  checked: boolean
  emoji?: any
  time?: string
  color: CardColors
}