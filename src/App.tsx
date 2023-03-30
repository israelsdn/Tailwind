import React from 'react';



function App() {
  return (
    <div className=''>
      <header className='flex justify-center bg-purple-500 h-12 items-center text-white'>
        Aproveite os últimos dias de promoção
      </header>
      
      <body className='bg-[#030007] h-screen flex flex-col items-center'>
        
        <div className='container justify-between text-white flex items-center pt-7'>
          <p className=' text-2xl'>
            <p className='text-purple-500 inline'>e</p>Front
          </p>
          <button className=' border rounded-sm border-purple-500 p-2'>GARANTIR EBOOK</button>
        </div>

        
        <div className='container flex mt-32'>

          <div className='text-white w-2/3 flex flex-col space-y-7'>
            <p className='bg-[#130B1D] w-fit rounded-lg px-8 py-1'>Junte-se a +2.500 membros</p>
            <p className='text-6xl font-semibold'>
              Comece a estudar <br/> <p className='inline text-purple-500'>frontend</p> do zero com <br/> uma linguagem simples
            </p>
            <p className='text-gray-400 text-2xl'>Trabalhe de casa, usando as tecnologias <br /> mais requisitadas do mundo frontend.</p>
          </div>

          <div className='bg-white w-1/3 rounded-md flex-box'>
            <p className=' ml-6 mt-7'>
              <p className='inline bg-black text-white text-2xl rounded-lg px-5 py-2'>70%off</p> <p className='inline text-2xl ml-4 font-semibold'>Por tempo limitado</p>
              <p className='font-semibold text-gray-800 mt-12 text-2xl'>de <p className='line-through inline'>R$ 100,00</p> por <p className='text-6xl mt-4 text-black'>R$ 25,00</p></p>
            </p>
            
            <div className='flex justify-center mt-20'>
              <button className="flex justify-center bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-36 border border-purple-700 rounded">GARANTIR EBOOK</button>
            </div>

            <p className='justify-center flex mt-5 mb-7 font-semibold'>Cartão de Crédito, Boleto à vista, Paypal e Pix</p>
            

          </div>

        </div>


      </body>

    </div>
  );
}

export default App;
