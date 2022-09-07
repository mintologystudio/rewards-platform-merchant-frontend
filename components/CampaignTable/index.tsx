/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getReadableDate, getReadableTime } from '../../utils'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import Routes from '../../utils/constants/routes'
import StatusTag, { Status } from '../StatusTag'
import Pagination from './Pagination'

import NeutralIcon from '../../public/assets/misc/filter/neutral.svg'
import AscIcon from '../../public/assets/misc/filter/asc.svg'
import DescIcon from '../../public/assets/misc/filter/desc.svg'
import InactiveMoreIcon from '../../public/assets/misc/filter/inactiveMore.svg'
import ActiveMoreIcon from '../../public/assets/misc/filter/activeMore.svg'

enum TypeOfFilter {
  CampaignNameAsc,
  CampaignNameDesc,
  TotalVoucherAsc,
  TotalVoucherDesc,
  ClaimedAsc,
  ClaimedDesc,
  CreationDateAsc,
  CreationDateDesc,
  DateStartedAsc,
  DateStartedDesc,
  DurationAsc,
  DurationDesc,
  StatusOngoing,
  StatusPaused,
  StatusCancelled,
  StatusEnded,
  StatusYetToStart,
}

enum HeaderType {
  CampaignName,
  Total,
  Claimed,
  CreationDate,
  DateStarted,
  Duration,
  Status,
}

export interface ICampaignDetails {
  merchantName: string
  merchantAddress: string
  merchantId: number
  campaignName: string
  campaignId: number
  status: string
  total: number
  claimed: number
  campaignStartDate: number
  campaignEndDate: number
  campaignCreationDate: number
  duration: number
}

export const MockAdiasCampaignData: ICampaignDetails[] = [
  {
    merchantName: 'Adidas',
    merchantAddress: '0x',
    merchantId: 1,
    campaignName: '9.9 Sales',
    campaignId: 1,
    status: 'Ongoing',
    total: 123,
    claimed: 10,
    campaignStartDate: 1641391099000,
    campaignEndDate: 1644069499000,
    campaignCreationDate: 1620914299000,
    duration: 123123,
  },
  {
    merchantName: 'Adidas',
    merchantAddress: '0x',
    merchantId: 1,
    campaignName: 'Black Friday',
    campaignId: 2,
    status: 'Yet to start',
    total: 123,
    claimed: 20,
    campaignStartDate: 1644069499000,
    campaignEndDate: 1646488699000,
    campaignCreationDate: 1626184699000,
    duration: 123123,
  },
  {
    merchantName: 'Adidas',
    merchantAddress: '0x',
    merchantId: 1,
    campaignName: 'Web3 Week',
    campaignId: 3,
    status: 'Cancelled',
    total: 123,
    claimed: 100,
    campaignStartDate: 1646488699000,
    campaignEndDate: 1662386299000,
    campaignCreationDate: 1631541499000,
    duration: 123123,
  },
  {
    merchantName: 'Adidas',
    merchantAddress: '0x',
    merchantId: 1,
    campaignName: 'Worldwide Shoe Day',
    campaignId: 4,
    status: 'Paused',
    total: 123,
    claimed: 34,
    campaignStartDate: 1662386299000,
    campaignEndDate: 1649167099000,
    campaignCreationDate: 1636811899000,
    duration: 123123,
  },
  {
    merchantName: 'Adidas',
    merchantAddress: '0x',
    merchantId: 1,
    campaignName: 'Valentines Special',
    campaignId: 5,
    status: 'Ongoing',
    total: 123,
    claimed: 87,
    campaignStartDate: 1649167099000,
    campaignEndDate: 1651759099000,
    campaignCreationDate: 1581602299000,
    duration: 123123,
  },
  {
    merchantName: 'Adidas',
    merchantAddress: '0x',
    merchantId: 1,
    campaignName: '12.12 Sales',
    campaignId: 6,
    status: 'Yet to start',
    total: 123,
    claimed: 25,
    campaignStartDate: 1651759099000,
    campaignEndDate: 1654437499000,
    campaignCreationDate: 1589378299000,
    duration: 123123,
  },
  {
    merchantName: 'Adidas',
    merchantAddress: '0x',
    merchantId: 1,
    campaignName: 'Kaiju x Adidas Collab',
    campaignId: 7,
    status: 'Cancelled',
    total: 123,
    claimed: 11,
    campaignStartDate: 1654437499000,
    campaignEndDate: 1657029499000,
    campaignCreationDate: 1597327099000,
    duration: 123123,
  },
  {
    merchantName: 'Adidas',
    merchantAddress: '0x',
    merchantId: 1,
    campaignName: 'Opening special',
    campaignId: 8,
    status: 'Paused',
    total: 123,
    claimed: 2,
    campaignStartDate: 1657029499000,
    campaignEndDate: 1659707899000,
    campaignCreationDate: 1607867899000,
    duration: 123123,
  },
]

const formatTimestampToDate = (timestamp: number) => {
  const [_day, _month, _year] = getReadableDate(timestamp)
  return `${_day}/${_month}/${_year}`
}

const getDaysFromTimestamp = (timestamp: number) => {
  const [_days] = getReadableTime(timestamp)
  return _days
}

const CampaignTable = ({ company }: { company: string }) => {
  const router = useRouter()
  const [query, setQuery] = useState<string>()
  const [allCampaignData, setAllCampaignData] = useState<ICampaignDetails[]>([])
  const [displayCampaignData, setDisplayCampaignData] = useState<
    ICampaignDetails[]
  >([])

  const maxNumberOfRowsPerPage = 5
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [maxPage, setMaxPage] = useState<number>(1)

  const [activeFilter, setActiveFilter] = useState<TypeOfFilter>(
    TypeOfFilter.CreationDateDesc
  )
  const [showStatusFilterOptions, setShowStatusFilterOptions] =
    useState<boolean>(false)

  useEffect(() => {
    // TODO: Fetch merchant campaigns with api
    setAllCampaignData(MockAdiasCampaignData)
  }, [company])

  useEffect(() => {
    // TODO: Auto filter campaigns based on query
    let _tempListOfCampaigns
    if (query) {
      _tempListOfCampaigns = allCampaignData.filter((campaign) =>
        campaign.campaignName.toLowerCase().includes(query)
      )
    } else {
      _tempListOfCampaigns = allCampaignData
    }

    _tempListOfCampaigns = applyFilter(_tempListOfCampaigns, activeFilter)

    if (_tempListOfCampaigns.length <= maxNumberOfRowsPerPage) {
      setDisplayCampaignData(_tempListOfCampaigns)
    } else {
      setDisplayCampaignData(
        _tempListOfCampaigns.slice(
          (currentPage - 1) * maxNumberOfRowsPerPage,
          currentPage * maxNumberOfRowsPerPage
        )
      )
    }

    const finalPage = Math.ceil(
      _tempListOfCampaigns.length / maxNumberOfRowsPerPage
    )
    setMaxPage(finalPage)
  }, [allCampaignData, query, currentPage, activeFilter])

  //#region Apply Filter to list of campaigns
  const applyFilter = (
    listOfCampaigns: ICampaignDetails[],
    activeFilter: TypeOfFilter
  ) => {
    switch (activeFilter) {
      case TypeOfFilter.CampaignNameAsc:
        return listOfCampaigns.sort((a, b) =>
          a.campaignName > b.campaignName
            ? 1
            : b.campaignName > a.campaignName
            ? -1
            : 0
        )
      case TypeOfFilter.CampaignNameDesc:
        return listOfCampaigns.sort((a, b) =>
          a.campaignName > b.campaignName
            ? -1
            : b.campaignName > a.campaignName
            ? 1
            : 0
        )
      case TypeOfFilter.ClaimedAsc:
        return listOfCampaigns.sort((a, b) =>
          a.claimed > b.claimed ? 1 : b.claimed > a.claimed ? -1 : 0
        )
      case TypeOfFilter.ClaimedDesc:
        return listOfCampaigns.sort((a, b) =>
          a.claimed > b.claimed ? -1 : b.claimed > a.claimed ? 1 : 0
        )
      case TypeOfFilter.TotalVoucherAsc:
        return listOfCampaigns.sort((a, b) =>
          a.total > b.total ? 1 : b.total > a.total ? -1 : 0
        )
      case TypeOfFilter.TotalVoucherDesc:
        return listOfCampaigns.sort((a, b) =>
          a.total > b.total ? -1 : b.total > a.total ? 1 : 0
        )
      case TypeOfFilter.DateStartedAsc:
        return listOfCampaigns.sort((a, b) =>
          a.campaignStartDate > b.campaignStartDate
            ? 1
            : b.campaignStartDate > a.campaignStartDate
            ? -1
            : 0
        )
      case TypeOfFilter.DateStartedDesc:
        return listOfCampaigns.sort((a, b) =>
          a.campaignStartDate > b.campaignStartDate
            ? -1
            : b.campaignStartDate > a.campaignStartDate
            ? 1
            : 0
        )
      case TypeOfFilter.CreationDateAsc:
        return listOfCampaigns.sort((a, b) =>
          a.campaignCreationDate > b.campaignCreationDate
            ? 1
            : b.campaignCreationDate > a.campaignCreationDate
            ? -1
            : 0
        )
      case TypeOfFilter.CreationDateDesc:
        return listOfCampaigns.sort((a, b) =>
          a.campaignCreationDate > b.campaignCreationDate
            ? -1
            : b.campaignCreationDate > a.campaignCreationDate
            ? 1
            : 0
        )
      case TypeOfFilter.DurationAsc:
        return listOfCampaigns.sort((a, b) =>
          a.duration > b.duration ? 1 : b.duration > a.duration ? -1 : 0
        )
      case TypeOfFilter.DurationDesc:
        return listOfCampaigns.sort((a, b) =>
          a.duration > b.duration ? -1 : b.duration > a.duration ? 1 : 0
        )
      case TypeOfFilter.StatusOngoing:
        return listOfCampaigns.filter(
          (campaign) => campaign.status == 'Ongoing'
        )
      case TypeOfFilter.StatusCancelled:
        return listOfCampaigns.filter(
          (campaign) => campaign.status == 'Cancelled'
        )
      case TypeOfFilter.StatusPaused:
        return listOfCampaigns.filter((campaign) => campaign.status == 'Paused')
      case TypeOfFilter.StatusYetToStart:
        return listOfCampaigns.filter(
          (campaign) => campaign.status == 'Yet to start'
        )
      case TypeOfFilter.StatusEnded:
        return listOfCampaigns.filter((campaign) => campaign.status == 'Ended')
      default:
        return listOfCampaigns
    }
  }
  //#endregion

  //#region Render Filtering Icons on header
  const renderFilterImage = (fieldName: HeaderType) => {
    switch (fieldName) {
      case HeaderType.CampaignName:
        if (activeFilter == TypeOfFilter.CampaignNameAsc) {
          return AscIcon
        } else if (activeFilter == TypeOfFilter.CampaignNameDesc) {
          return DescIcon
        } else {
          return NeutralIcon
        }
      case HeaderType.Total:
        if (activeFilter == TypeOfFilter.TotalVoucherAsc) {
          return AscIcon
        } else if (activeFilter == TypeOfFilter.TotalVoucherDesc) {
          return DescIcon
        } else {
          return NeutralIcon
        }
      case HeaderType.Claimed:
        if (activeFilter == TypeOfFilter.ClaimedAsc) {
          return AscIcon
        } else if (activeFilter == TypeOfFilter.ClaimedDesc) {
          return DescIcon
        } else {
          return NeutralIcon
        }
      case HeaderType.CreationDate:
        if (activeFilter == TypeOfFilter.CreationDateAsc) {
          return AscIcon
        } else if (activeFilter == TypeOfFilter.CreationDateDesc) {
          return DescIcon
        } else {
          return NeutralIcon
        }
      case HeaderType.DateStarted:
        if (activeFilter == TypeOfFilter.DateStartedAsc) {
          return AscIcon
        } else if (activeFilter == TypeOfFilter.DateStartedDesc) {
          return DescIcon
        } else {
          return NeutralIcon
        }
      case HeaderType.Duration:
        if (activeFilter == TypeOfFilter.DurationAsc) {
          return AscIcon
        } else if (activeFilter == TypeOfFilter.DurationDesc) {
          return DescIcon
        } else {
          return NeutralIcon
        }
      case HeaderType.Status:
        if (
          activeFilter == TypeOfFilter.StatusOngoing ||
          activeFilter == TypeOfFilter.StatusCancelled ||
          activeFilter == TypeOfFilter.StatusEnded ||
          activeFilter == TypeOfFilter.StatusPaused ||
          activeFilter == TypeOfFilter.StatusYetToStart
        ) {
          return ActiveMoreIcon
        } else {
          return InactiveMoreIcon
        }
      default:
        return NeutralIcon
    }
  }
  //#endregion

  //#region Handle Filter type update functions
  const handleCampaignNameFilter = () => {
    if (activeFilter == TypeOfFilter.CampaignNameAsc) {
      setActiveFilter(TypeOfFilter.CampaignNameDesc)
    } else {
      setActiveFilter(TypeOfFilter.CampaignNameAsc)
    }
  }

  const handleTotalFilter = () => {
    if (activeFilter == TypeOfFilter.TotalVoucherAsc) {
      setActiveFilter(TypeOfFilter.TotalVoucherDesc)
    } else {
      setActiveFilter(TypeOfFilter.TotalVoucherAsc)
    }
  }

  const handleClaimedFilter = () => {
    if (activeFilter == TypeOfFilter.ClaimedAsc) {
      setActiveFilter(TypeOfFilter.ClaimedDesc)
    } else {
      setActiveFilter(TypeOfFilter.ClaimedAsc)
    }
  }

  const handleCreationFilter = () => {
    if (activeFilter == TypeOfFilter.CreationDateAsc) {
      setActiveFilter(TypeOfFilter.CreationDateDesc)
    } else {
      setActiveFilter(TypeOfFilter.CreationDateAsc)
    }
  }

  const handleDateStartedFilter = () => {
    if (activeFilter == TypeOfFilter.DateStartedAsc) {
      setActiveFilter(TypeOfFilter.DateStartedDesc)
    } else {
      setActiveFilter(TypeOfFilter.DateStartedAsc)
    }
  }

  const handleDurationFilter = () => {
    if (activeFilter == TypeOfFilter.DurationAsc) {
      setActiveFilter(TypeOfFilter.DurationDesc)
    } else {
      setActiveFilter(TypeOfFilter.DurationAsc)
    }
  }

  const handleStatusFilter = (filter: TypeOfFilter) => {
    if (
      filter == TypeOfFilter.StatusOngoing ||
      filter == TypeOfFilter.StatusCancelled ||
      filter == TypeOfFilter.StatusEnded ||
      filter == TypeOfFilter.StatusPaused ||
      filter == TypeOfFilter.StatusYetToStart
    ) {
      setActiveFilter(filter)
      setShowStatusFilterOptions(false)
    }
  }
  //#endregion

  //#region Render type of actions available given status
  const renderActions = (campaignId: number, status: any) => {
    return (
      <>
        {status !== Status.CANCELLED && status !== Status.ENDED && (
          <button
            type="button"
            onClick={() =>
              router.push(`${Routes.EDIT_CAMPAIGN}&campaignId=${campaignId}`)
            }
          >
            Edit
          </button>
        )}

        {status == Status.ONGOING && (
          <button type="button" onClick={() => console.log('Pausing Campaign')}>
            Pause
          </button>
        )}

        {status == Status.PAUSED && (
          <button
            type="button"
            onClick={() => console.log('Resuming Campaign')}
          >
            Resume
          </button>
        )}

        {status == Status.ONGOING && (
          <button onClick={() => console.log('Stopping Campaign')}>Stop</button>
        )}

        {status == Status.YETTOSTART && (
          <button onClick={() => console.log('Cancelling Campaign')}>
            Cancel
          </button>
        )}
      </>
    )
  }
  //#endregion

  const renderStatusOptions = () => {
    return (
      <div className={styles.options}>
        <ul>
          <li onClick={() => handleStatusFilter(TypeOfFilter.StatusYetToStart)}>
            Yet to start
          </li>
          <li onClick={() => handleStatusFilter(TypeOfFilter.StatusOngoing)}>
            Ongoing
          </li>
          <li onClick={() => handleStatusFilter(TypeOfFilter.StatusPaused)}>
            Paused
          </li>
          <li onClick={() => handleStatusFilter(TypeOfFilter.StatusEnded)}>
            Ended
          </li>
          <li onClick={() => handleStatusFilter(TypeOfFilter.StatusCancelled)}>
            Cancelled
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className={styles.container} key={`CampaignTable_${company}`}>
      <div className={styles.content}>
        <div className={styles.content_actionable}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={'Search ...'}
          />
          <button
            type="button"
            onClick={() => router.push(Routes.CREATE_CAMPAIGN)}
          >
            Add Campaign
          </button>
        </div>

        <table className={styles.table}>
          <thead>
            <tr className={styles.table_header}>
              <th>
                <div className={styles.alignRow}>
                  <p>Campaign Name</p>
                  <button type="button" onClick={handleCampaignNameFilter}>
                    <Image
                      src={renderFilterImage(HeaderType.CampaignName)}
                      alt="CampaignName Filter Icon"
                    />
                  </button>
                </div>
              </th>
              <th>
                <div className={styles.alignRow}>
                  <p>Status</p>
                  <button
                    type="button"
                    onClick={() =>
                      setShowStatusFilterOptions(!showStatusFilterOptions)
                    }
                  >
                    <Image
                      src={renderFilterImage(HeaderType.Status)}
                      alt="CampaignName Filter Icon"
                    />
                  </button>
                  {showStatusFilterOptions && renderStatusOptions()}
                </div>
              </th>
              <th>
                <div className={styles.alignRow}>
                  <p>Total</p>
                  <button type="button" onClick={handleTotalFilter}>
                    <Image
                      src={renderFilterImage(HeaderType.Total)}
                      alt="CampaignName Filter Icon"
                    />
                  </button>
                </div>
              </th>
              <th>
                <div className={styles.alignRow}>
                  <p>Claimed</p>
                  <button type="button" onClick={handleClaimedFilter}>
                    <Image
                      src={renderFilterImage(HeaderType.Claimed)}
                      alt="CampaignName Filter Icon"
                    />
                  </button>
                </div>
              </th>
              <th>
                <div className={styles.alignRow}>
                  <p>Creation Date</p>
                  <button type="button" onClick={handleCreationFilter}>
                    <Image
                      src={renderFilterImage(HeaderType.CreationDate)}
                      alt="CampaignName Filter Icon"
                    />
                  </button>
                </div>
              </th>
              <th>
                <div className={styles.alignRow}>
                  <p>Date Started</p>
                  <button type="button" onClick={handleDateStartedFilter}>
                    <Image
                      src={renderFilterImage(HeaderType.DateStarted)}
                      alt="CampaignName Filter Icon"
                    />
                  </button>
                </div>
              </th>
              <th>
                <div className={styles.alignRow}>
                  <p>Duration</p>
                  <button type="button" onClick={handleDurationFilter}>
                    <Image
                      src={renderFilterImage(HeaderType.Duration)}
                      alt="CampaignName Filter Icon"
                    />
                  </button>
                </div>
              </th>
              <th>
                <p>Action</p>
              </th>
            </tr>
          </thead>

          <tbody>
            {displayCampaignData.length > 0 ? (
              <>
                {displayCampaignData.map((campaign) => (
                  <tr key={campaign.campaignId} className={styles.table_data}>
                    <td>{campaign.campaignName}</td>
                    <td className={styles.table_data_centerObject}>
                      <StatusTag status={campaign.status} />
                    </td>
                    <td>{campaign.total}</td>
                    <td>{campaign.claimed}</td>
                    <td>
                      {formatTimestampToDate(campaign.campaignCreationDate)}
                    </td>
                    <td>{formatTimestampToDate(campaign.campaignStartDate)}</td>
                    <td>{getDaysFromTimestamp(campaign.duration)} days left</td>
                    <td>
                      {renderActions(campaign.campaignId, campaign.status)}
                    </td>
                  </tr>
                ))}

                <tr className={styles.table_pagination}>
                  <td colSpan={8}>
                    <Pagination
                      currentPageNumber={currentPage}
                      setCurrentPageNumber={setCurrentPage}
                      finalPage={maxPage}
                    />
                  </td>
                </tr>
              </>
            ) : (
              <tr className={styles.table_none}>
                <td colSpan={8}>No campaigns found!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CampaignTable
