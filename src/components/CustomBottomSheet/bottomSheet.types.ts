export type ModalRef = {
  close: () => void;
};

export type ModalRefObj = {
  current: ModalRef | null;
};

export let modalRefObj: ModalRefObj[] = [];

export function addNewModalReference(newRef: ModalRef): void {
  modalRefObj?.push({
    current: newRef,
  });
}

export function retrieveModalReference(): ModalRef | null {
  const reversePriority = [...modalRefObj].reverse();
  const activeRef = reversePriority?.find(ref => ref?.current !== null);
  if (!activeRef) {
    return null;
  }
  return activeRef?.current;
}

export function removeModalReference(oldRef: ModalRef | null): void {
  modalRefObj = modalRefObj?.filter(r => r?.current !== oldRef);
}
