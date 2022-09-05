import type { NextPage } from 'next'
import Meta from '../components/Meta'
import styles from '../styles/Home.module.scss'
import Navigation from '../components/Navigation'
import { Web3Context } from '../context/web3Context'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Routes from '../utils/constants/routes'
import MerchantBanner from '../components/MerchantBanner'
import CampaignTable from '../components/CampaignTable'

const Home: NextPage = () => {
  const router = useRouter()
  const { appState: Web3State } = useContext(Web3Context)

  useEffect(() => {
    if (!Web3State.address_to_bind) {
      router.push(Routes.LOGIN)
    }
  }, [])

  return (
    <div className={styles.container}>
      <Meta />
      <Navigation />

      <main className={styles.main}>
        <MerchantBanner company={'adidas'} />
        <CampaignTable company={'adidas'} />
      </main>
    </div>
  )
}

export default Home
