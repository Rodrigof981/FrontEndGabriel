import Sidebar from "./Navbar"


interface IArea {
    titulo: string;
    children?: React.ReactNode;

}

export default function Areautil({titulo,children}:IArea){
    return(
         <div className="w-screen h-screen bg-personalizado flex">
            <Sidebar/>
            <div className="w-full h-full bg-white px-[4vw] p-[8vh] flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">{titulo}</h1>
                {children}

            </div>
         </div>
  )
}
