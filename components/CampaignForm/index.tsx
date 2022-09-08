import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import Routes from '../../utils/constants/routes'
import { MockNFTSearchResultList } from '../../utils/MOCK_DATA'
import { ICampaignDetails } from '../CampaignTable'
import { getReadableDate } from '../../utils'

interface ICampaignForm {
  campaignName: string
  startDate: number
  endDate: number
  rewardDesc: string
  rewardCode: string
  nftCollaboration: any
  quantity: number
}

interface ICampaignFormError {
  campaignName: string
  startDate: string
  endDate: string
  rewardDesc: string
  rewardCode: string
  nftCollaboration: string
  quantity: string
}

const CampaignForm = ({
  data,
  isEdit = false,
}: {
  data: ICampaignDetails | null
  isEdit?: boolean
}) => {
  const router = useRouter()
  const [campaignDetails, setCampaignDetails] = useState<ICampaignForm>({
    campaignName: '',
    startDate: 0,
    endDate: 0,
    rewardDesc: '',
    rewardCode: '',
    nftCollaboration: null,
    quantity: 0,
  })
  const [campaignDetailsError, setCampaignDetailsError] =
    useState<ICampaignFormError>({
      campaignName: '',
      startDate: '',
      endDate: '',
      rewardDesc: '',
      rewardCode: '',
      nftCollaboration: '',
      quantity: '',
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
    setSearchResult(MockNFTSearchResultList)
  }

  const handleSubmit = (e: any) => {
    setError('')
    e.preventDefault()

    let _campaignNameError = ''
    let _startDateError = ''
    let _endDateError = ''
    let _rewardDescError = ''
    let _rewardCodeError = ''
    let _nftCollabError = ''
    let _quantityError = ''

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

    if (campaignDetails.quantity <= 0)
      _quantityError = 'At least have one voucher claimable.'

    if (
      error ||
      _campaignNameError ||
      _startDateError ||
      _endDateError ||
      _rewardDescError ||
      _rewardCodeError ||
      _nftCollabError ||
      _quantityError
    )
      return setCampaignDetailsError({
        campaignName: _campaignNameError,
        startDate: _startDateError,
        endDate: _endDateError,
        rewardDesc: _rewardDescError,
        rewardCode: _rewardCodeError,
        nftCollaboration: _nftCollabError,
        quantity: _quantityError,
      })

    console.log('Passed all the checks. Continue creation / update')

    if (isEdit) {
      console.log('Saving campaign:', campaignDetails)
    } else {
      console.log('Creating campaign:', campaignDetails)
    }
  }

  useEffect(() => {
    if (isEdit) {
      if (data) {
        setCampaignDetails({
          campaignName: data.campaignName,
          startDate: data.campaignStartDate,
          endDate: data.campaignEndDate,
          rewardDesc: data.rewardDesc,
          rewardCode: data.rewardCode,
          nftCollaboration: data.nftCollaboration,
          quantity: data.total,
        })
      } else {
        // TODO: Add react-toast to say there is no data provided
        router.push(Routes.HOME)
      }
    }
  }, [isEdit, data])

  const processTimestampToStringForDateInput = (timestamp: number) => {
    const [day, month, year] = getReadableDate(timestamp)
    return `${year}-${month}-${day}`
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h2>{isEdit ? 'Edit' : 'Create'} Campaign</h2>
        <form className={styles.content} onSubmit={handleSubmit}>
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
                value={processTimestampToStringForDateInput(
                  campaignDetails.startDate
                )}
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
                value={processTimestampToStringForDateInput(
                  campaignDetails.endDate
                )}
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
                value={campaignDetails.rewardDesc}
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

            <div className={styles.content_subfield}>
              <div className={styles.content_field}>
                <label>REWARD CODE</label>
                <input
                  type="text"
                  name="rewardCode"
                  value={campaignDetails.rewardCode}
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

              <div className={`${styles.content_field} ${styles.no_margin}`}>
                <label>QUANTITY</label>
                <input
                  type="number"
                  name="quantity"
                  value={campaignDetails.quantity}
                  onChange={(e) => handleChangeCampaignDetails(e)}
                  className={
                    campaignDetailsError.quantity &&
                    styles.content_field_errorHighlight
                  }
                />
                {campaignDetailsError.quantity && (
                  <span>{campaignDetailsError.quantity}</span>
                )}
              </div>
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

            <button type="submit">{isEdit ? 'Save' : 'Submit'}</button>

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
