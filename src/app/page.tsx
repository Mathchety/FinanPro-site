import Image from "next/image";
import logo from "./content/logo-finanpro.png";
import tela from "./content/TelaHome.png";
import reactlogo from "./content/react-native-logo-square.png";

export default function Home() {
  return (
    <body>
      <div className="bg-blue-300">
        <div className="h-full ">
          <header className="flex px-56 h-20 py-2">
            <div className="flex bg-blue-700 w-full rounded-lg bg-opacity-60 h-auto  ">
              <div className=" w-1/4 flex  items-center px-5 py-1 gap-2">
                <Image src={logo} alt="FinanPro" className="h-full w-3/4" />
                <h1 className="text-green-500 font-bold text-2xl w-1/4 ">
                  FinanPro
                </h1>
              </div>
              <div className=" flex-1 flex justify-center items-center ">
                <nav className="flex space-x-8">
                  <a href="#sobre">Sobre</a>
                  <a href="#tecnologia">Tecnologia</a>
                  <a href="">Equipe</a>
                  <a href="">Contato</a>
                  <a href="">Atualizações</a>
                </nav>
              </div>
            </div>
          </header>
          <section
            id="sobre"
            className="h-screen  px-56 py-7 flex justify-center space-x-4"
          >
            <div className="flex-1 bg-white p-10 rounded-lg bg-opacity-45 h-4/6">
              <div className="space-y-5 ">
                <h1 className="text-black">
                  O FinanPro é um app destinado ao controle financeiro diário
                </h1>
                <p className="text-black">
                  No app FinanPro temos uma variedade de funcionalidades para te
                  ajudar a economizar e ter mais controle sobre seus ganhos e
                  gastos. Adicione sua receita e despesas, monitore sua balança
                  monetária mensal, calcule investimentos e monitore o câmbio do
                  dolar.
                </p>

                <h1 className="text-black font-bold">Baixe já</h1>

                <div className="flex space-x-4">
                  <button className="bg-green-500 p-2">Play Store</button>
                  <button className="bg-blue-500 p-2">App Store</button>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center bg-white rounded-lg bg-opacity-45 flex-col">
              <Image src={tela} alt="TelaHome" className="h-4/5 w-3/5" />
              <h1 className="font-bold text-2xl text-black">Tela inicial</h1>
            </div>
          </section>
          <section
            id="tecnologia"
            className="h-screen  px-56 py-5 flex justify-center space-x-4"
          >
            <div className="bg-white rounded-lg bg-opacity-45 w-full h-full flex flex-col items-center pt-1">
              <h1 className=" font-bold text-2xl text-black">Tecnologias</h1>
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 box-border">
                <div className="relative flex justify-center items-center flex-col">
                  <div
                    className="absolute inset-0 bg-cover bg-center flex justify-center items-center "
                    style={{
                      backgroundImage: `url(${reactlogo.src})`,
                      opacity: 0.2,
                      position: "absolute",
                    }}
                  ></div>
                  <h1 className="relative z-10 font-bold text-black text-xl">
                    React Native
                  </h1>
                  <ol className="relative z-10">
                    <ul className="text-black">
                      Desenvolvimento do app mobile
                    </ul>
                  </ol>
                </div>
                <div className="relative flex justify-center items-center flex-col">
                  <div
                    className="absolute inset-0 bg-cover bg-center flex justify-center items-center "
                    style={{
                      backgroundImage: `url(${reactlogo.src})`,
                      opacity: 0.2,
                      position: "absolute",
                    }}
                  ></div>
                  <h1 className="relative z-10 font-bold text-black text-xl">
                    React
                  </h1>
                  <ol className="relative z-10">
                    <ul className="text-black">Desenvolvimento web</ul>
                  </ol>
                </div>
                <div className="bg-orange-500  text-center flex justify-center items-center">
                  JavaScript
                </div>
                <div className="bg-blue-300  text-center flex justify-center items-center">
                  TypeScript
                </div>
                <div className="bg-blue-500  text-center flex justify-center items-center">
                  TailWind CSS
                </div>
                <div className="bg-gray-500  text-center flex justify-center items-center">
                  Expo
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </body>
  );
}

// npm run dev
