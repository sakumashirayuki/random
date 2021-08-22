type msgType = 'info' | 'success' | 'error' | 'warning';
interface baseMessageItem {
  title: string;
  type: msgType;
  key: string;
  duration: number;
  onClose?: () => void;
}

interface baseMsgContainer {}

interface MessageApi {
  info: (msg: string | baseMessageItem) => void;
  success: (msg: string | baseMessageItem) => void;
  warning: (msg: string | baseMessageItem) => void;
  error: (msg: string | baseMessageItem) => void;
}

export { msgType, baseMessageItem, baseMsgContainer, MessageApi };
