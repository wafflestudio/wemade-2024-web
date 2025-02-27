export type ModalStateType = 'open' | 'closed' | 'closing';

export type ModalStateHookType = [ModalStateType, () => void, () => void];
