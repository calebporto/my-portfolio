import Image from "next/image"

export default props => {
    return (
        <div className="MuitoPrazerBody">
            <div className="Text">
                Nasci em Guarapari-ES em 6 de Novembro de 1991, e aos 6 anos de idade vim com meus pais para o interior 
                do estado do Rio de Janeiro na cidade de São Francisco de Itabapoana, onde moro até hoje.<br></br>
                Sou casado com Elaine, tenho uma filha chamada Allana e minha esposa está grávida do nosso segundo filho,
                o nosso querido e esperado Benício.<br></br>
                Estudo desenvolvimento de software desde Novembro de 2021, tendo começado a desenvolver meus primeiros
                projetos profissionais em Junho de 2022. Desde então, tenho buscado a excelência dia após dia, gerando
                qualidade e resultados cada vez mais satisfatórios a cada projeto realizado.<br></br>
                Minha especialidade é a criação de sistemas de gestão para empresas (ERPs) e criação de sites profissionais
                para diversos segmentos, como e-commerces, sites institucionais e plataformas de cursos.
                Trabalho também com criação de Apps mobile Android e iOS e automações de tarefas em geral.
                Se você precisa de um sistema de gerenciamento para o seu negócio, um App ou um site para a sua loja, ou 
                quer dar corpo à sua idéia, eu posso te ajudar!
                Deixe aqui a sua mensagem, e entrarei em contato com você pra gente conversar. Será um prazer lhe atender!
                <button>Escrever mensagem</button>
            </div>
            <div className="Photo">
                <Image src="/media/Familia.png" width={1000} height={1000} />
            </div>
        </div>
    )
}