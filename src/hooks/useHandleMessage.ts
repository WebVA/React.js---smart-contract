/** @format */

import { useAppDispatch } from '../store/hooks'
import { updateSupportChatHistory } from '../store/chat'

const useHandleMessage = () => {
  const dispatch = useAppDispatch()

  const parseMessage = (message: any) => {
    if (message.Code === 2) {
      handleSendMessagCode(message)
    } else if (message.Code === 3) {
      handleReceiveMessageCode(message)
    }
  }

  const handleSendMessagCode = (message: any) => {
    const Data = {
      UserId: message.Data.UserID,
      Message: message.Data.Msg,
      Type: 'Support',
      CreatedAt: message.Data.CreatedAt,
    }
    dispatch(updateSupportChatHistory(Data))
  }

  const handleReceiveMessageCode = (message: any) => {
    const Data = {
      UserId: message.Data.UserID,
      Message: message.Data.Msg,
      Type: 'Client',
      CreatedAt: message.Data.CreatedAt,
    }
    dispatch(updateSupportChatHistory(Data))
  }

  return { onParseMessage: parseMessage }
}

export default useHandleMessage
