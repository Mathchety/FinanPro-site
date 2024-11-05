export default function Home() {
  return (
    <body>
      <div className="h-full bg-slate-600">
        <header className="flex px-56 h-20 py-2 ">
          <div className="bg-red-500 w-1/4 flex justify-center items-center">
            <img
              src="https://i.seadn.io/gae/RC64Qbc-vI5edW8LsHK-LZ0rvMTmCWBepr3uti5Uzq2n3eCiQnaXqpgfLz8WvNRLOyM6MKRX-HTdyB939AVoBm4Rc92HrkGVKZ8G?auto=format&dpr=1&w=1000"
              alt=""
              className="w-20 "
            />
            <h1 className="font-bold ">FinanPro</h1>
          </div>
          <div className="bg-yellow-300 flex-1 flex justify-center items-center">
            <nav className="flex space-x-8 bg-blue-400">
              <a href="#sobre">Sobre</a>
              <a href="#tecnologia">Tecnologia</a>
              <a href="">Equipe</a>
              <a href="">Contato</a>
              <a href="">Atualizações</a>
            </nav>
          </div>
        </header>
        <section
          id="sobre"
          className="h-screen bg-purple-500 px-56 py-5 flex justify-center space-x-4"
        >
          <div className="flex-1 bg-orange-400 p-10">
            <div className="space-y-5 ">
              <h1>
                O FinanPro é um app destinado ao controle financeiro diário
              </h1>
              <p>
                No app FinanPro temos uma variedade de funcionalidades para te
                ajudar a economizar e ter mais controle sobre seus ganhos e
                gastos. Adicione sua receita e despesas, monitore sua balança
                monetária mensal, calcule investimentos e monitore o câmbio do
                dolar.
              </p>

              <h1>Baixe já</h1>

              <div className="flex space-x-4">
                <button className="bg-green-500 p-2">Play Store</button>
                <button className="bg-blue-500 p-2">App Store</button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex bg-red-400 p-2 justify-center items-center">
            <img
              src="https://developer.android.com/static/codelabs/basic-android-kotlin-compose-training-change-app-icon/img/e7a9b86b35f7d6c3.png?hl=pt-br"
              alt=""
              className="h-5/6"
            />
          </div>
        </section>
        <section
          id="tecnologia"
          className="h-screen bg-green-500 px-56 py-5 flex justify-center space-x-4"
        >
          <div className="bg-purple-500 w-full h-full py-4 items-center flex flex-col space-y-2 ">
            <h1>Tecnologias</h1>
            <div className="bg-red-500 w-full h-full grid grid-cols-3 gap-2 p-2">
            <div className="bg-blue-700 p-4 text-center">ReactNative</div> 
            <div className="bg-blue-500 p-4 text-center">React</div> 
            <div className="bg-orange-500 p-4 text-center">JavaScript</div> 
            <div className="bg-blue-300 p-4 text-center">TypeScript</div> 
            <div className="bg-blue-500 p-4 text-center">TailWind CSS</div> 
            <div className="bg-gray-500 p-4 text-center">Expo</div>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}

// npm run dev
