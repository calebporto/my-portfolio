import Head from 'next/head';
import DivStack from "@/components/DivStack";
import ImagemBg from "@/components/ImagemBg";
import MenuBt from "@/components/MenuBt";
import MuitoPrazerBody from "@/components/MuitoPrazerBody";
import PageTitle from "@/components/PageTitle";
import PortfolioItem from "@/components/PortfolioItem";
import SelfName from "@/components/SelfName";
import Stack from "@/components/Stack";
import Body from "@/layout/Body";
import Container from "@/layout/Container";
import Menu from "@/layout/Menu";
import ContactBox from '@/components/ContactBox';
import Contato from '@/components/Contato';
import Footer from '@/layout/Footer';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>Caléb Porto</title>
        <meta charset="UTF-8"></meta>
        <meta name="description" content="Soluções em tecnologia você encontra aqui!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='caleb porto, caléb porto, caleb rangel porto, caléb rangel porto, calebporto.com,
         www.calebporto.com, calebporto.com.br, www.calebporto.com.br, são francisco de itabapoana, desenvolvedor, programador, criação de erp' />
        <meta property="og:title" content="Caléb Porto" />
        <meta property="og:description" content="Soluções em tecnologia você encontra aqui!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/media/Caleb.png" />
        <meta property="og:url" content="https://www.calebporto.com" />
      </Head>
      <Body bgColor='black'>
        <Container>
          <Menu>
            <MenuBt label="Muito Prazer!" link="#muitoPrazer"></MenuBt>
            <MenuBt label="Portfolio" link="#portfolio"></MenuBt>
            <MenuBt label="Contato" link="#contato"></MenuBt>
          </Menu>
          <ImagemBg link="/media/Caleb2.png" ></ImagemBg>
          <SelfName 
          selfName="Caléb Rangel Porto"
          description="Desenvolvedor Full Stack"
          ></SelfName>
          <DivStack>
            <Stack stackImg="/media/python.png"></Stack>
            <Stack stackImg="/media/javascript.png"></Stack>
            <Stack stackImg="/media/flask.png"></Stack>
            <Stack stackImg="/media/fastapi.svg"></Stack>
            <Stack stackImg="/media/react.png"></Stack>
            <Stack stackImg="/media/nextjs.png"></Stack>
            <Stack stackImg="/media/redux.png"></Stack>
            <Stack stackImg="/media/html.png"></Stack>
            <Stack stackImg="/media/css.png"></Stack>
            <Stack stackImg="/media/mysql.png"></Stack>
            <Stack stackImg="/media/postgres.png"></Stack>
            <Stack stackImg="/media/redis.png"></Stack>
          </DivStack>
        </Container>
      </Body>
      <Body bgColor='white' id="muitoPrazer">
        <Container>
          <PageTitle text="Muito prazer, me chamo Caléb Porto!" color="black"></PageTitle>
          <MuitoPrazerBody></MuitoPrazerBody>
        </Container>
      </Body>
      <Body bgColor='black' id="portfolio">
        <Container>
          <PageTitle text="Portfólio" color="white"></PageTitle>
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <PortfolioItem 
            title="ERP - M Souza Comunicação"
            description="Sistema de Gestão de Mídia OOH (ERP) para a agência multinacional M Souza Comunicação, com 
            gerenciamento de pontos OOH e geolocalização no Google Maps, geração de Books em PDF, apresentações 
            em Power Point e planilhas Excel, cadastro de equipe e fornecedores, entre outros."
            >
                <div style={{height: '100%', width: 'auto', position:'relative'}}>
                  <iframe src="https://player.vimeo.com/video/822826473?h=d49974a3fd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} title="ERP - M Souza Comunica&amp;ccedil;&amp;atilde;o"></iframe>
                </div>
                <Script src="https://player.vimeo.com/api/player.js"></Script>
            </PortfolioItem>
            <PortfolioItem 
              title="Plataforma IBVG"
              description="Sistema de gerenciamento financeiro e de membros para a Igreja Batista Village Guaxindiba, 
              com Painel Administrativo, Painel do Membro e Landing Pages."
            >
                <div style={{height: '100%', width: 'auto', position:'relative'}}>
                  <iframe src="https://player.vimeo.com/video/784053724?h=37a68589d5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} title="Plataforma IBVG.mp4"></iframe>
                </div>
                <Script src="https://player.vimeo.com/api/player.js"></Script>
            </PortfolioItem>
          </div>
        </Container>
      </Body>
      <Body bg='linear-gradient(0deg, rgb(8, 174, 234) 0%, rgb(42, 245, 152) 100%)' id="contato">
        <Container>
          <PageTitle text="Contato" borderColor="black"></PageTitle>
          <ContactBox></ContactBox>
          <Contato></Contato>
        </Container>
      </Body>
      <Footer></Footer>
    </>
  )
}

