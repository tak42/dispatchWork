import type { NextPage } from 'next'
import Head from 'next/head'
import { useMemo, useState } from 'react'
import { switchReport } from '../components/switchReport'
import { Card, Container, Description, Footer, Logo, Main, Title, Works } from './indexStyle'

const Home: NextPage = () => {
  const [mode, setMode] = useState('kintai')
  const Report = useMemo(() => {
    return switchReport(mode)
  }, [mode])

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Title>派遣業務</Title>
      <Description>報告事項を選択して各種報告をしてください。</Description>
      <Main>
        <Works>
          <Card onClick={() => setMode('kintai')}>勤怠入力</Card>

          <Card onClick={() => setMode('week')}>週報</Card>

          <Card onClick={() => setMode('mounth')}>月次報告</Card>

          <Card onClick={() => setMode('eigyo')}>営業報告</Card>

          <Card onClick={() => setMode('satei')}>査定報告</Card>

          <Card onClick={() => setMode('leader')}>周知（役職者）</Card>
        </Works>
        <Report />
      </Main>

      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Logo>
            <img src="vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </Logo>
        </a>
      </Footer>
    </Container>
  )
}

export default Home
