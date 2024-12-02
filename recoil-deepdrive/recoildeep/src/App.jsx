import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { networkAtom, jobAtom, notificationAtom, messageAtom, totalNotificationSelector } from "./atoms"
import { Suspense } from "react"



function App() {
  return <RecoilRoot>
    <Suspense fallback={<loading />}>
    <MainApp />
    </Suspense>
    
  </RecoilRoot>
}


function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobAtomCount = useRecoilValue(jobAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const [messageAtomCount, setMessageAtomCount] = useRecoilState(messageAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  

  return (
    <>
      <button>Home </button>
      <button>My Network({networkNotificationCount >= 100?"99+":networkNotificationCount})</button>
      <button>Jobs({jobAtomCount})</button>
      <button>messages({messageAtomCount})</button>
      <button>Notifications({notificationAtomCount >= 100?"99+":notificationAtomCount})</button>

      <button onClick={()=>{
        setMessageAtomCount(c=>c+1); //
      }}>Me({totalNotificationCount})</button>
    </>
  )
}
export default App
