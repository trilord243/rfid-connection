
import { fetchToken } from "@/rfidAPI/fetchToken"


export const Main = () => {
    return (
        <div className="flex justify-center  bg-white ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://media.istockphoto.com/id/1133970015/es/vector/vector-rfid-con-icono-de-l%C3%ADnea-de-ondas-de-radio.jpg?s=612x612&w=0&k=20&c=HieHB0nKep4ymyaf7gX8YKBWbpm0eO3J_AM_WZCPOUw=" className="max-w-sm rounded-lg " />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Ver estado de conexion con el equipo RFID</p>
                    <button className="btn btn-primary" >Oprime!</button>
                </div>
            </div>
        </div>
    )
}

