import { Alert, Modal as ModalReact, ModalProps as ModalPropsReact } from 'react-native';

import Button from '../../components/button/Buttos';
import Text from '../../components/text/Text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';
import { ContainerModal, IconClose } from './modal.style';

interface ModalProps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}
const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {
  return (
    <ModalReact
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onCloseModal();
      }}
      {...props}
    >
      <ContainerModal>
        <Text types={textTypes.SUB_TITLE_SEMIBOLD} color={theme.colors.mainTheme.primary}>
          {title}
        </Text>
        <Text types={textTypes.PARAGRAPH_REGULAR} color={theme.colors.grayThemes.gray100}>
          {text}
        </Text>
        <IconClose onPress={onCloseModal} name="close-thick" color="red" size={24} />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          title="OK"
          onPress={onCloseModal}
          margin="50px 0 0 0"
        />
      </ContainerModal>
    </ModalReact>
  );
};

export default Modal;
