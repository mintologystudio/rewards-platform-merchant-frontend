/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { renderSvgSocialIcon } from '../../utils'
import styles from './index.module.scss'

interface IMerchantDetails {
  name: string
  description: string
  walletAddress: string
  socials: any[]
}

const MockAdidasCompanyDetails: IMerchantDetails = {
  name: 'Adidas',
  description:
    'Eget turpis tortor in platea in mauris felis sit. At et, integer feugiat habitant eleifend leo. Felis augue orci duis quis purus enim. Enim, vel ut in in nec proin libero sed. Molestie aenean egestas id duis. Interdum sed cursus pulvinar risus laoreet vulputate porta sed purus. Nulla praesent dignissim nunc eget gravida morbi. Tristique erat purus in.',
  walletAddress: '0x',
  socials: [
    {
      name: 'Twitter',
      type: 'twitter',
      url: 'https://www.twitter.com/adidas',
    },
    { name: 'Website', type: 'website', url: 'https://www.adidas.com' },
    {
      name: 'Facebook',
      type: 'facebook',
      url: 'https://www.facebook.com/adidas',
    },
    {
      name: 'Instagram',
      type: 'instagram',
      url: 'https://www.instagram.com/adidas',
    },
  ],
}

const MerchantBanner = ({ company }: { company: string }) => {
  const [merchantDetails, setMerchantDetails] = useState<IMerchantDetails>()

  useEffect(() => {
    // TODO: Fetch merchant details with api
    setMerchantDetails(MockAdidasCompanyDetails)
  }, [company])

  return (
    <div className={styles.container} key={`MerchantBanner_${company}`}>
      <div
        className={styles.background}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%), url(assets/campaign/${company}.png)`,
          opacity: 0.6,
        }}
      />
      <div className={styles.content}>
        <div className={styles.content_logo}>
          <Image
            src={`/assets/companies/${company || 'default'}.png`}
            alt={`${company}_logo`}
            layout="fill"
          />
        </div>
        <div className={styles.content_details}>
          <div className={styles.content_header}>
            <h2>{merchantDetails?.name}</h2>
            <ul>
              {merchantDetails?.socials.map((social) => (
                <li key={`Merchant_${merchantDetails.name}_${social.name}`}>
                  <a href={social.url} target="_blank" rel="noreferrer">
                    {renderSvgSocialIcon(social.type)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p>{merchantDetails?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default MerchantBanner
