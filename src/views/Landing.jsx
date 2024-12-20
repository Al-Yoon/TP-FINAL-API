import React from "react";
import { ReactTyped } from "react-typed";
import Logo from "../components/Assets/Easy_2.png";
import Chats from "../components/Assets/chat.svg";
import Historial from "../components/Assets/historial.svg";
import Tickets from "../components/Assets/tickets.svg";
import { Link } from "react-router-dom";


const Landing = () => {
    return (
        <div className="text-white bg-black">
            <div className="mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center p-5">
                <p className="text-[#38bdf8] mx-auto font-bold md:text-3xl sm:text-2xl text-xl pt-2">Bienvenido a Easy Pays</p>
                <h1 className="md:text-1xl sm:text-6xl text-4xl font-bold md:py-6">Gestión Inteligente</h1>
                <div className="md:text-2xl sm:text-1xl text-xl">
                    <h1>Maneja tus gastos de manera sencilla</h1>
                    <ReactTyped
                        className="pl-2 pt-1 font-bold md:text-1xl sm:texl-4xl text-xl"
                        strings={["ORGANIZA", "CONTROLA", "GESTIONA","DIVIDE"]}
                        TypedSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <Link to="/login"><button className="bg-[#38bdf8] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black  hover:bg-white duration-500">Registrarse</button></Link>
                <Link to="/login"><p className="w-[180px] font-medium mx-auto hover:text-[#38bdf8]">Ya tienes una cuenta?</p></Link>
            </div>

            <div className="w-full bg-white text-black py-16 ">
                <div className="max-w[1240px] mx-auto grid md:grid-cols-2">
                    <img className="w-[500px] mx-auto" src={Logo} alt="/"></img>
                    <div className="flex flex-col pl-4 justify-center">
                        <p className="text-[#38bdf8] md:text-1xl sm:text-3xl text-2xl font-bold">Sobre nosotros</p>
                        <h1 className="md:text-1xl sm:text-6xl text-4xl font-bold md:py-3"> Una solución a la altura de tus manos</h1>
                        <p className="text-gray-700 md:text-2xl sm:text-1xl text-xl my-2">Controla, Analiza y Comparte tus Gastos con Facilidad</p>
                        <p className="md:text-1xl sm:text-1xl text-xl">
                            Te brindamos soluciones integrales para que puedas calcular, gestionar y analizar tus gastos de manera eficiente.
                            Nuestra plataforma te permite no solo visualizar y desglosar tus compras,
                            sino también compartir fácilmente la información con otras personas,
                            facilitando la división de los gastos en grupo de manera justa y precisa.
                        </p>
                        <Link to="/nosotros"><button className="bg-[#38bdf8] w-[200px] rounded-md font-bold my-6 mx:auto md:mx-0 py-3 text-black  hover:bg-[#ebe5e5] duration-500">Conocer más</button></Link>
                    </div>
                </div>
            </div>

            <div className='w-full py-16 text-white px-4'>
                <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                    <div className='lg:col-span-2 my-4'>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-1'>
                            ¿Cansado de perder tiempo con cálculos?
                        </h1>
                        <p className="md:text-1xl sm:text-1xl text-xl font-bold">En EasyPays eso lo hacemos por vos</p>
                    </div>
                </div>
            </div>

            <div id="services" className="w-full py-[10rem] bg-white text-black">
                <p className="max-w-[1250px] md:text-2xl sm:text-1xl text-xl pl-4">Qué te ofrecemos</p>
                <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">Soluciones a tus Problemas de Gastos</h1>
                <div className="max-w-auto mx-auto grid md:grid-cols-3 gap-8 pl-5 pr-5">

                    <div className="shadow-2xl flex flex-col p-4 md:my-0 my-8 py-8 rounded-lg items-center">
                        <img className='w-28 mx-auto mt-auto' src={Chats} alt="/" />
                        <h2 className='font-bold text-center justify-center text-2xl py-4'>Gestiona y Asigna</h2>
                        <div className='text-center font-medium'>
                            <p className='py-2 my-2 text-xl'>
                                Gestiona proyectos para calcular tus gastos, tanto individuales como en grupo.</p>
                        </div>
                    </div>

                    <div className='shadow-2xl flex flex-col p-4 md:my-0 my-8 py-8 rounded-lg items-center'>
                        <img className='w-28 mx-auto mt-auto bg-transparent' src={Historial} alt="/" />
                        <h2 className='font-bold text-center justify-center text-2xl py-4'>Carga tus Tickets</h2>
                        <div className='text-center font-medium'>
                            <p className='py-2 my-2 text-xl'>
                                Ahora puedes subir tus tickets de compra, para obtener el cálculo gastado de los mismos.</p>
                        </div>
                    </div>

                    <div className='shadow-2xl flex flex-col p-4 md:my-0 my-8 py-8 rounded-lg items-center'>
                        <img className='w-28 mx-auto mt-auto bg-transparent' src={Tickets} alt="/" />
                        <h2 className='font-bold text-center justify-center text-2xl py-4'>Historial y Reportes</h2>
                        <div className='text-center font-medium'>
                            <p className="py-2 my-2 text-xl">
                                Visualiza un historial de tus tickets con sus respectivos gastos y genera reportes detallados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;