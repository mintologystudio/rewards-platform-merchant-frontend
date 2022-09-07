import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import Routes from '../../utils/constants/routes'
import { StringSchema } from 'yup'

interface ICampaignForm {
  campaignName: string
  startDate: Date
  endDate: Date
  rewardDesc: string
  rewardCode: string
  nftCollaboration: any
}

interface ICampaignFormError {
  campaignName: string
  startDate: string
  endDate: string
  rewardDesc: string
  rewardCode: string
  nftCollaboration: string
}

const mockNFTSearchResultList = [
  {
    image: 'azuki',
    name: 'Azuki',
    supply: 10000,
    owners: 5000,
  },
  {
    image: 'clonex',
    name: 'CloneX',
    supply: 10000,
    owners: 5000,
  },
  {
    image: 'cryptopunks',
    name: 'CryptoPunks',
    supply: 10000,
    owners: 5000,
  },
  {
    image: 'moonbirds',
    name: 'MoonBirds',
    supply: 10000,
    owners: 5000,
  },
  // {
  //   image: 'azuki',
  //   name: 'Azuki2',
  //   supply: 10000,
  //   owners: 5000,
  // },
  // {
  //   image: 'clonex',
  //   name: 'CloneX2',
  //   supply: 10000,
  //   owners: 5000,
  // },
  // {
  //   image: 'cryptopunks',
  //   name: 'CryptoPunks2',
  //   supply: 10000,
  //   owners: 5000,
  // },
  // {
  //   image: 'moonbirds',
  //   name: 'MoonBirds2',
  //   supply: 10000,
  //   owners: 5000,
  // },
]

const CampaignForm = ({
  data,
  isEdit = false,
}: {
  data: any
  isEdit?: boolean
}) => {
  const router = useRouter()
  const [campaignDetails, setCampaignDetails] = useState<ICampaignForm>({
    campaignName: '',
    startDate: new Date(),
    endDate: new Date(),
    rewardDesc: '',
    rewardCode: '',
    nftCollaboration: null,
  })
  const [campaignDetailsError, setCampaignDetailsError] =
    useState<ICampaignFormError>({
      campaignName: '',
      startDate: '',
      endDate: '',
      rewardDesc: '',
      rewardCode: '',
      nftCollaboration: '',
    })

  const [tnc, setTnc] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')
  const [searchResult, setSearchResult] = useState<any[]>([])
  const [error, setError] = useState<string>('')

  const handleChangeCampaignDetails = (e: any) => {
    setCampaignDetails({ ...campaignDetails, [e.target.name]: e.target.value })
  }

  const handleChange = (_keyword: string) => {
    setQuery(_keyword)
    if (_keyword.length <= 2) return setSearchResult([])

    setTimeout(() => handleSearch(), 500)
  }

  const handleSearch = () => {
    if (query.length <= 2) return setSearchResult([])

    // TODO: Searching of NFT collections to be perform via API
    setSearchResult(mockNFTSearchResultList)
  }

  const handleCreation = (e: any) => {
    setError('')
    e.preventDefault()
    console.log('Creating campaign:', campaignDetails)

    let _campaignNameError = ''
    let _startDateError = ''
    let _endDateError = ''
    let _rewardDescError = ''
    let _rewardCodeError = ''
    let _nftCollabError = ''

    if (!tnc) setError('Please agree to our terms and conditions.')
    if (!campaignDetails.campaignName)
      _campaignNameError = 'Please key in a campaign name.'

    if (!campaignDetails.startDate)
      _startDateError = 'Please key in a start date.'

    if (new Date(campaignDetails.startDate).getTime() > Date.now())
      _startDateError = 'Start date must be in the future.'

    if (!campaignDetails.endDate) _endDateError = 'Please key in a end date.'

    if (
      new Date(campaignDetails.startDate).getTime() ===
      new Date(campaignDetails.endDate).getTime()
    )
      _endDateError = 'Start date and end date cannot be the same.'

    if (new Date(campaignDetails.endDate).getTime() > Date.now())
      _endDateError = 'End date must be in the future.'

    if (!campaignDetails.rewardDesc)
      _rewardDescError = 'Please provide description for the reward.'

    if (!campaignDetails.rewardCode)
      _rewardCodeError = 'Please provide the discount code for the reward.'

    if (!campaignDetails.nftCollaboration)
      _nftCollabError = 'Please select one NFT collection.'

    if (
      error ||
      _campaignNameError ||
      _startDateError ||
      _endDateError ||
      _rewardDescError ||
      _rewardCodeError ||
      _nftCollabError
    )
      return setCampaignDetailsError({
        campaignName: _campaignNameError,
        startDate: _startDateError,
        endDate: _endDateError,
        rewardDesc: _rewardDescError,
        rewardCode: _rewardCodeError,
        nftCollaboration: _nftCollabError,
      })

    console.log('Passed all the checks. Continue creation')
  }

  useEffect(() => {
    if (isEdit) {
      if (data) {
        setCampaignDetails(data)
      } else {
        // TODO: Add react-toast to say there is no data provided
        router.push(Routes.HOME)
      }
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h2>{isEdit ? 'Edit' : 'Create'} Campaign</h2>
        <form className={styles.content} onSubmit={handleCreation}>
          <div className={styles.content_section}>
            <div className={styles.content_field}>
              <label>CAMPAIGN NAME</label>
              <input
                type="text"
                name="campaignName"
                value={campaignDetails.campaignName}
                onChange={(e) => handleChangeCampaignDetails(e)}
                className={
                  campaignDetailsError.campaignName &&
                  styles.content_field_errorHighlight
                }
              />
              {campaignDetailsError.campaignName && (
                <span>{campaignDetailsError.campaignName}</span>
              )}
            </div>

            <div className={styles.content_field}>
              <label>START DATE OF CAMPAIGN</label>
              <input
                type="date"
                name="startDate"
                value={campaignDetails.startDate.toString()}
                onChange={(e) => handleChangeCampaignDetails(e)}
                className={
                  campaignDetailsError.startDate &&
                  styles.content_field_errorHighlight
                }
              />
              {campaignDetailsError.startDate && (
                <span>{campaignDetailsError.startDate}</span>
              )}
            </div>

            <div className={styles.content_field}>
              <label>END DATE OF CAMPAIGN</label>
              <input
                type="date"
                name="endDate"
                value={campaignDetails.endDate.toString()}
                onChange={(e) => handleChangeCampaignDetails(e)}
                className={
                  campaignDetailsError.endDate &&
                  styles.content_field_errorHighlight
                }
              />
              {campaignDetailsError.endDate && (
                <span>{campaignDetailsError.endDate}</span>
              )}
            </div>

            <div className={styles.content_field}>
              <label>REWARD DESCRIPTION</label>
              <textarea
                rows={3}
                name="rewardDesc"
                value={campaignDetails.rewardDesc.toString()}
                onChange={(e) => handleChangeCampaignDetails(e)}
                className={
                  campaignDetailsError.rewardDesc &&
                  styles.content_field_errorHighlight
                }
              />
              {campaignDetailsError.rewardDesc && (
                <span>{campaignDetailsError.rewardDesc}</span>
              )}
            </div>

            <div className={styles.content_field}>
              <label>REWARD CODE</label>
              <input
                type="text"
                name="rewardCode"
                value={campaignDetails.rewardCode.toString()}
                onChange={(e) => handleChangeCampaignDetails(e)}
                className={
                  campaignDetailsError.rewardCode &&
                  styles.content_field_errorHighlight
                }
              />
              {campaignDetailsError.rewardCode && (
                <span>{campaignDetailsError.rewardCode}</span>
              )}
            </div>

            <div className={styles.content_checkBox}>
              <input
                type="checkbox"
                checked={tnc}
                onChange={() => setTnc(!tnc)}
              />
              <label>
                By clicking on Submit, I agree to the terms and conditions set
                out by Mintology
              </label>
            </div>

            <button type="submit">Submit</button>

            <p className={styles.content_error}>{error}</p>
          </div>

          <div className={styles.divider} />

          <div className={styles.content_section}>
            <div className={`${styles.content_field} ${styles.no_margin}`}>
              <label>SELECT PARTICIPATING NFT COLLECTIONS</label>
              <div className={styles.searchResult_selection}>
                {campaignDetailsError.nftCollaboration && (
                  <span>{campaignDetailsError.nftCollaboration}</span>
                )}
                {campaignDetails.nftCollaboration ? (
                  <div
                    className={styles.searchResult_tabs}
                    onClick={() =>
                      setCampaignDetails({
                        ...campaignDetails,
                        nftCollaboration: null,
                      })
                    }
                  >
                    <div className={styles.searchResult_tabs_image}>
                      <Image
                        src={`/assets/nfts/${
                          campaignDetails.nftCollaboration.image || 'default'
                        }.png`}
                        alt={`SearchResult_${campaignDetails.nftCollaboration.name}_Image`}
                        layout="fill"
                      />
                    </div>
                    <div>
                      <p>{campaignDetails.nftCollaboration.name}</p>
                    </div>
                    <div className={styles.searchResult_tabs_data}>
                      <p>
                        <span>Supply</span>
                      </p>
                      <p>{campaignDetails.nftCollaboration.supply}</p>
                    </div>
                    <div className={styles.searchResult_tabs_data}>
                      <p>
                        <span>Owners</span>
                      </p>
                      <p>{campaignDetails.nftCollaboration.owners}</p>
                    </div>
                  </div>
                ) : (
                  <div className={styles.searchResult_selection_text}>
                    Please select an NFT collection for the campaign
                  </div>
                )}
              </div>

              <input
                type="text"
                name="query"
                value={query}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Search by nft collection name"
                className={
                  campaignDetailsError.nftCollaboration &&
                  styles.content_field_errorHighlight
                }
              />

              <ul className={styles.searchResult}>
                {searchResult.map((data) => (
                  <li
                    key={`SearchResult_${data.name}`}
                    className={styles.searchResult_tabs}
                    onClick={() =>
                      setCampaignDetails({
                        ...campaignDetails,
                        nftCollaboration: data,
                      })
                    }
                  >
                    <div className={styles.searchResult_tabs_image}>
                      <Image
                        src={`/assets/nfts/${data.image || 'default'}.png`}
                        alt={`SearchResult_${data.name}_Image`}
                        layout="fill"
                      />
                    </div>
                    <div>
                      <p>{data.name}</p>
                    </div>
                    <div className={styles.searchResult_tabs_data}>
                      <p>
                        <span>Supply</span>
                      </p>
                      <p>{data.supply}</p>
                    </div>
                    <div className={styles.searchResult_tabs_data}>
                      <p>
                        <span>Owners</span>
                      </p>
                      <p>{data.owners}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CampaignForm
