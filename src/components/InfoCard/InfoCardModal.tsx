import Modal from '@/components/common/Modal.tsx';
import { ModalStateType } from '@/types/type.ts';

interface InfoCardModalProps {
  state: ModalStateType;
  onClose: () => void;
}

const InfoCardModal = ({ state, onClose }: InfoCardModalProps) => {
  return (
    <Modal
      state={state}
      onBackgroundClick={onClose}
    >
      <div className="w-96 p-4">
        <h1 className="text-lg font-bold">Info Card</h1>
        <p className="mt-2 text-sm">This is an info card.</p>
      </div>
    </Modal>
  );
};

export default InfoCardModal;
