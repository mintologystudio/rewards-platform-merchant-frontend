import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CampaignForm from '../components/CampaignForm'
import {
  ICampaignDetails,
  MockAdiasCampaignData,
} from '../components/CampaignTable'
import Meta from '../components/Meta'
import Navigation from '../components/Navigation'
import styles from '../styles/Campaign.module.scss'
import Routes from '../utils/constants/routes'

enum Mode {
  CREATE = 'create',
  EDIT = 'edit',
}

const CampaignPage = () => {
  const router = useRouter()
  const [campaignId, setCampaignId] = useState<string>('')
  const [mode, setMode] = useState<Mode>(Mode.CREATE)
  const [campaignDetails, setCampaignDetails] = useState<ICampaignDetails>()

  useEffect(() => {
    if (router && router.query && router.query.mode) {
      const _campaignId = (router.query.campaignId as string) || ''
      const _mode = (router.query.mode as string as Mode) || Mode.CREATE
      setCampaignId(_campaignId)
      setMode(_mode)
    }
  }, [router])

  useEffect(() => {
    if (mode == Mode.EDIT) {
      if (!campaignId) return
      // TODO: Check whether does this campaignId exist
      // TODO: Check whether does this campaignId exist in current user's campaignList

      // TODO: If all validation checks out, update campaignData object and pass it to edit component

      const _campaign = MockAdiasCampaignData.filter(
        (campaign) => campaign.campaignId.toString() == campaignId
      )[0]
      if (_campaign) {
        // TODO: Additional check whether is the campaign matches the merchant

        setCampaignDetails(_campaign)
      } else {
        // TODO: Add react-toast to say no such campaign exist for the id
        router.push(Routes.HOME)
      }
    }
  }, [campaignId, mode])

  return (
    <div className={styles.container}>
      <Meta />
      <Navigation />

      <main className={styles.main}>
        {/* <CampaignForm data={campaignDetails} isEdit /> */}
        <CampaignForm data={null} />
      </main>
    </div>
  )
}

export default CampaignPage
