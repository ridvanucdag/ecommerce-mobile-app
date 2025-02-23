import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  ModalRef,
  addNewModalReference,
  removeModalReference,
  retrieveModalReference,
} from './bottomSheet.types';
import {styles} from './bottomSheet.styles';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  SNAP_POINT_TYPE,
} from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigatorParamList} from '@navigators/navigator.types';

const ModalDisplay = forwardRef<ModalRef, {}>((_, ref) => {
  const route = useRoute<RouteProp<StackNavigatorParamList, 'BottomSheet'>>();
  const navigation = useNavigation();
  const defaultSnapPositions = ['80%', '80%'];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const {modalProps} = route?.params;
  const snapPositions = Array.isArray(modalProps?.snapPoints)
    ? modalProps?.snapPoints
    : defaultSnapPositions;
  const bottomSheetRef = useRef<BottomSheetMethods>(null);

  const handleSheetChange = useCallback(
    (index: number, position: number, type: SNAP_POINT_TYPE) => {
      if (index === -1) {
        setCurrentIndex(-1);
      }
      if (modalProps?.onChange) {
        modalProps?.onChange(index, position, type);
      }
    },
    [modalProps],
  );

  const closeModal = useCallback((): void => {
    bottomSheetRef.current?.close();
    setCurrentIndex(-1);
  }, []);

  useImperativeHandle(ref, () => ({
    close: closeModal,
  }));

  const handleClose = useCallback(() => {
    setCurrentIndex(-1);
    navigation.goBack();
  }, [navigation]);

  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <BottomSheet
        ref={bottomSheetRef}
        {...modalProps}
        index={currentIndex}
        enablePanDownToClose
        enableContentPanningGesture
        snapPoints={snapPositions}
        backdropComponent={props => (
          <BottomSheetBackdrop {...props} style={styles.overlay} />
        )}
        onChange={handleSheetChange}
        onClose={handleClose}>
        <BottomSheetView style={styles.modalContent}>
          {modalProps?.children}
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
});

ModalDisplay.displayName = 'ModalDisplay';

export default function ModalLayer(): JSX.Element {
  const modalReference = useRef<ModalRef | null>(null);

  const setModalReference = useCallback((ref: ModalRef | null) => {
    if (ref) {
      modalReference.current = ref;
      addNewModalReference(ref);
    } else {
      removeModalReference(modalReference?.current);
    }
  }, []);

  return <ModalDisplay ref={setModalReference} />;
}

ModalLayer.close = (): void => {
  const activeModalRef = retrieveModalReference();
  if (activeModalRef) {
    activeModalRef?.close();
  }
};
