import * as S from "./styles";
import { ReactNode } from "react";
import { TouchableWithoutFeedback } from "react-native";

export type ModalProps = {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
};

function Modal(props: ModalProps) {
  const { open, onClose, children } = props;

  return (
    <S.CalendarModal
      transparent
      statusBarTranslucent
      animationType="fade"
      visible={open}
      onRequestClose={onClose}
    >
      <S.CalendarContainer>
        <TouchableWithoutFeedback onPress={onClose}>
          <S.CloseModal />
        </TouchableWithoutFeedback>
        {children}
        <TouchableWithoutFeedback onPress={onClose}>
          <S.CloseModal />
        </TouchableWithoutFeedback>
      </S.CalendarContainer>
    </S.CalendarModal>
  );
}

export default Modal;
