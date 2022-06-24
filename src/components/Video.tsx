import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css'

export function Video() {
  return (
    <div className="flex-1">

      {/* Video usando a biblioteca vime */}
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId="SO4-izct7Mc" />
            <DefaultUi />
          </Player>
        </div>
      </div>

      {/* Info vídeo e professor */}
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aula 01 - Abertura do Ignite Lab
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 boder-blue-500"
                src="http://github.com/gabriel-dev0105.png"
                alt=""
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">Gabriel de Oliveira</strong>
                <span className="text-gray-200 text-sm block">Dev FrontEnd</span>
              </div>
            </div>
          </div>

          {/* link acesso a comunidade e desafio*/}
          <div className="flex flex-col gap-4">
            <a href="" className="p-4 text-sm bg-green-500 flex items-center justify-center rounded font-bold uppercase gap-2 hover:bg-green-700 transition-colors">
              <DiscordLogo size={24} />
              comunidade do discord
            </a>
            <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center justify-center rounded font-bold uppercase gap-2 hover:bg-blue-500 hover:text-gray-900 transition-colors" >
              <Lightning size={24} />
              acesse o desafio
            </a>
          </div>
        </div>

        {/* Box de interação (material complementar e wallpaper) Dev by G4 (me) */}
        {/* <div className="flex gap-8 mt-20 items-center justify-center">

          <a href="" className="flex h-[134px] w-[502px] rounded overflow-hidden bg-gray-700">

            <div className="flex items-center justify-center min-w-[85px] bg-green-700">
              <FileArrowDown size={40} />
            </div>
            <div className="flex ml-6 flex-col justify-center">
              <strong className="font-bold text-2xl block">
                Material complementar
              </strong>
              <span className="text-gray-200 text-sm block">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </span>
            </div>

          </a>

        </div> */}

        {/* Box de interação (material complementar e wallpaper) Dev by Diego Fernandes */}

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-color">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">Acesse o material complementar para acelerar o seu desenvolvimento</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-color">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>


      </div>
    </div>
  )
}