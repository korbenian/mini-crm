import { useState } from 'react'
import { useChatLogic } from '../components/useChatLogic'
import styles from './ChatWithAI.module.scss'
import ChatInput from '../components/ChatInput'
import Sidebar from '../components/Sidebar'
export default function ChatWithAI () {
  const {
    input,
    setInput,
    messages,
    loading,
    error,
    handleSend,
    clearChat
  } = useChatLogic()

  const [showSidebar, setShowSidebar] = useState(false)

  return (
  <div className={styles.chat}>
    <aside className={styles.sidebar}>
      <Sidebar />
    </aside>

    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <button
            className={styles.menuBtn}
            onClick={() => setShowSidebar(p => !p)}
          >
            ☰
          </button>
          <strong>Chat with AI</strong>
        </header>

        <div className={styles.messagesWrapper}>
          <section className={styles.messages}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`${styles.message} ${
                  msg.role === 'user'
                    ? styles.user
                    : styles.assistant
                }`}
              >
                {msg.content}
              </div>
            ))}

            {loading && <div className={styles.status}>AI thinks…</div>}
            {error && <div className={styles.error}>{error}</div>}
            {!loading && messages.length === 0 && (
              <div className={styles.empty}>
                Write the first question 👇
              </div>
            )}
          </section>
        </div>

        <ChatInput
          input={input}
          setInput={setInput}
          onSend={handleSend}
          placeholder="Ask me something.…"
        />
      </main>
    </div>
  </div>
)
}
