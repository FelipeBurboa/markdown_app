import { ActionButtonsRow, Content, RootLayout, Sidebar } from '@/components'

const App = () => {
  return (
    <>
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1 px-1" />
        </Sidebar>
        <Content className="border-l bg-gray-950/50 birder-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
