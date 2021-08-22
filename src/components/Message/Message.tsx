import React, { useEffect, useState, FC } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import MessageItem from './MessageItem';
import {
  baseMessageItem,
  baseMsgContainer,
  MessageApi,
  msgType,
} from './interface';

// 创建wrapper
let container = document.getElementById('random-msg-wrapper');
if (!container) {
  container = document.createElement('div');
  container.setAttribute('id', 'random-msg-wrapper');
  document.body.appendChild(container);
}

// 添加事件
let handleAdd: (params: baseMessageItem) => void;
// 类名前缀
const classPrefix = 'random-msgItem';
// 合并类名
const classes = classnames(`${classPrefix}-box`);
// messageContainer组件
export const MessageContainer: FC<baseMsgContainer> = () => {
  // 消息列表
  const [notices, setNotices] = useState<baseMessageItem[]>([]);
  // 存在时间(s)
  const timeout: number = 3 * 1000;
  // 最大数量
  const maxCount: number = 15;

  // 添加消息
  handleAdd = (params: baseMessageItem) => {
    setNotices((prevNotices: baseMessageItem[]) => [...prevNotices, params]);

    setTimeout(
      () => {
        handleHide(params as baseMessageItem);
      },
      params.duration ? params.duration : timeout,
    );
  };

  // 删除消息
  const handleHide = (params: baseMessageItem) => {
    const { key } = params;
    if (params.onClose) params.onClose();
    setNotices((prevNotices: baseMessageItem[]) =>
      prevNotices.filter(({ key: itemKey }) => key !== itemKey),
    );
  };

  // 变化监听，超出范围进行首条信息删除
  useEffect(() => {
    if (notices.length > maxCount) {
      const [firstNotice] = notices;
      handleHide(firstNotice);
    }
  }, [notices]);

  return (
    <div className={classes}>
      {notices.map(({ key, title, type, duration }) => (
        <MessageItem duration={duration} key={key} type={type} title={title} />
      ))}
    </div>
  );
};

// 将 wrapper 渲染到页面
ReactDOM.render(<MessageContainer />, container);

// 获取 uuid
let seed = 0;
function getUUId() {
  const id = seed;
  const now = Date.now();
  seed++;
  return `random_msg_${now}_${id}`;
}

// 用户输入字符串转为映射
function msgstrToObj(msg: string | baseMessageItem, type: msgType) {
  if (typeof msg === 'string') {
    return {
      title: msg,
      key: getUUId(),
      type,
      duration: 3000,
    };
  }
  msg.key = getUUId();
  return msg;
}

// 向外暴露的方法
const api: MessageApi = {
  info: (msg) => {
    handleAdd(msgstrToObj(msg, 'info'));
  },
  success: (msg) => {
    handleAdd(msgstrToObj(msg, 'success'));
  },
  warning: (msg) => {
    handleAdd(msgstrToObj(msg, 'warning'));
  },
  error: (msg) => {
    handleAdd(msgstrToObj(msg, 'error'));
  },
};

export default api;
