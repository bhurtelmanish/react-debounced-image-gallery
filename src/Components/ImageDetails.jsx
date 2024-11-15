import '../index.css'
import { FaArrowLeft } from "react-icons/fa6";


const ImageDetails = () => {
  return (
    <div className="dark:bg-[var(--darkBackground)] dark:text-[var(--lightColor)] h-screen px-4">
        <FaArrowLeft className='text-2xl' />
      Image Details on this page
    </div>
  )
}

export default ImageDetails
