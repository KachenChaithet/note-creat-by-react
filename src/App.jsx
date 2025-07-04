import './App.css'
import Addnote from './component/Addnote'


function App() {

  return (
    <>
        <div className='h-screen bg-[#AEA4BF]'>
          <div className="flex justify-center items-center h-screen">
            <div className="bg-[#CDCDCD] h-9/12 w-150 rounded-2xl shadow-2xl">
              <div className="p-17  ">
                  <Addnote />
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default App
