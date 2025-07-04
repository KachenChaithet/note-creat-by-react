import { useState } from "react"


const Addnote = () => {
    const [statusAdd, setstatusAdd] = useState(false)

    const [textTitle, setTextTitle] = useState('')
    const [textcontent, setContent] = useState('')

    const [notes, setNotes] = useState([])

    // เข้าหน้าADD
    const handleADD = () => {
        setstatusAdd(true)
    }

    const handleOnchangeTextTitle = (e) => {
        
        setTextTitle(e.target.value)
    }
    const handleOnchangeContent = (e) => {
        setContent(e.target.value)
    }

    const handleSave = () => {
        if (textTitle.trim() === "" && textcontent.trim() === "") return


        const newNotes = { title: textTitle, content: textcontent }
        setNotes([...notes, newNotes])
        console.log(notes);


        setTextTitle('')
        setContent('')
        setstatusAdd(false)
    }
    const handleLeave = () => {
        setstatusAdd(false)
    }

    const handleDelete = (index) => {
        const newnotes =  [...notes]
        newnotes.splice(index,1)
        setNotes(newnotes)
    }

    return (
        <>
            {/* เพิ่มหน้าnote */}
            {statusAdd === true ? (
                <div className="p-4 h-80">
                    <input
                        onChange={handleOnchangeTextTitle}
                        type="text"
                        placeholder="Enter Title"
                        className="text-4xl  outline-0 mb-6 w-full h-16 px-4 rounded-xl"
                        required
                    />
                    <textarea
                        onChange={handleOnchangeContent}
                        placeholder="content"
                        className="text-2xl  outline-0 w-full h-full px-4 py-2 rounded-xl"
                        required
                    />
                    <div className="text-center flex justify-around">
                        <button
                            className="mt-2 text-xl  bg-[#006992] p-2 rounded-full text-white font\
                         cursor-pointer"
                            onClick={handleLeave}

                        >back</button>
                        <button
                            className="mt-2 text-xl  bg-[#006992] p-2 rounded-full text-white font\
                         cursor-pointer"
                            onClick={handleSave}

                        >save</button>
                    </div>

                </div>

            )
                : (
                    <div className="flex justify-between mx-2">
                        <button onClick={handleADD} className="text-4xl font-bold text-[#6A687A] cursor-pointer">ADD NOTE</button >
                    </div >
                )}



            {/* แสดงnote */}
            {notes.length >= 1 && <ul className="rounded-2xl mt-150 bg-[#F9E9EC]">
                {notes.map((item, index) => (

                    <li key={index} className="mb-2  p-4 bg-[#3E4E50]  text-[#F9E9EC] rounded-2xl shadow-2xs border-4 border-[#73956F] flex justify-between items-center pr-8">
                        <div className="">
                            <div className="text-4xl mb-4 underline break-words w-[300px]" >
                                {item.title}
                            </div>
                            <div className="text-sm break-words w-[300px] ">
                                {item.content}
                            </div>
                        </div>
                        <div className="">
                            <button 
                            className="bg-[#FF5964] p-2 rounded-full cursor-pointer border-2 border-[#2F4858] hover:bg-[#880D1E] "
                            onClick={() => handleDelete(index)}

                            >DELETE</button>
                        </div>


                    </li>


                ))}
            </ul>}



        </>


    )
}
export default Addnote