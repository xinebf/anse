import StreamableText from '@/components/StreamableText'
import MessageItemBase from './MessageItemBase'
import type { MessageInstance } from '@/types/message'

interface Props {
  conversationId: string
  message: MessageInstance
  handleStreaming?: () => void
}

export default (props: Props) => {
  return (
    <MessageItemBase
      avatarClass="bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300"
    >
      <StreamableText
        text={props.message.content}
        streamInfo={props.message.stream
          ? () => ({
              conversationId: props.conversationId,
              messageId: props.message.id || '',
              handleStreaming: props.handleStreaming,
            })
          : undefined}
        showRawCode={false}
      />
    </MessageItemBase>
  )
}
