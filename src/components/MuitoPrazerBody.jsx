import Image from "next/image"

export default props => {
    function setFocus() {
        const target = document.querySelector('#contato')
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="MuitoPrazerBody">
            <div className="Text">
                Nasci em Guarapari-ES em 6 de Novembro de 1991, e aos 6 anos de idade vim com meus pais para o interior
                do estado do Rio de Janeiro na cidade de São Francisco de Itabapoana, onde moro até hoje.<br></br>
                Sou casado com Elaine e tenho dois filhos: Allana e Benício.<br></br>
                Trabalho com desenvolvimento de soluções tecnológicas desde 2020, ajudando a pessoas e empresas a alcançarem
                ganhos significativos através da tecnologia.
                Durante este tempo, tenho buscado a excelência dia após dia, gerando
                qualidade e resultados cada vez mais satisfatórios a cada projeto realizado.<br></br>
                Sou especialista em Python e Javascript, linguagens de programação versáteis, com aplicabilidade em diversos
                ambientes e soluções, desde aplicações web, mobile e desktop a processos de automação e ciência de dados.<br></br>
                Se você precisa de um profissional completo, com experiência em desenvolvimento de soluções tecnológicas de alta performance,
                me chame nos contatos. Terei prazer em te ajudar!
                <button onClick={() => setFocus()}>Escrever mensagem</button>
            </div>
            <div className="Photo">
                <Image alt="" src="/media/Familia.png" width={1000} height={1000} />
            </div>
        </div>
    )
}