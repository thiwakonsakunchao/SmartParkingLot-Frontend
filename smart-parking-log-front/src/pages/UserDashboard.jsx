import CountCar from "../components/CountCar"
import CameraCCTV from "../components/CameraCCTV"
import CameraPlate from "../components/CameraPlate"

function UserDashboard(){
    
    return(
        <>
           <div className="grid grid-cols-2 h-full">
                <div className="left-side flex justify-center items-center ">
                    <CountCar />
                </div>
                <div className="right-side grid grid-cols-1">
                     <div className="grid" style={{ gridTemplateRows: "2fr 1fr" }}>
                        <CameraCCTV />
                        <CameraPlate />
                     </div>
                </div>
           </div>
        </>

    )
}

export default UserDashboard
