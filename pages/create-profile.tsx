import Meta from '../components/Meta'
import Navigation from '../components/Navigation'
import styles from '../styles/Profile.module.scss'
import Dropzone from 'react-dropzone'
import { useState } from 'react'
import Image from 'next/image'
import { renderSvgSocialIcon, SocialEnum } from '../utils'

const CreateProfile = () => {
  const [merchantName, setMerchantName] = useState<string>('')
  const [merchantDescription, setMerchantDescription] = useState<string>('')
  const [merchantSocials, setMerchantSocials] = useState<any>({
    twitter: '',
    instagram: '',
    website: '',
    discord: '',
    facebook: '',
  })
  const [profileImage, setProfileImage] = useState<any>()
  const [bannerImage, setBannerImage] = useState<any>()

  const displayImageFromFile = (file: File) => {
    const objectUrl = URL.createObjectURL(file)
    return <Image src={objectUrl} alt={`${file.name}`} layout="fill" />
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('lalala')
  }

  return (
    <div className={styles.container}>
      <Meta />
      <Navigation />

      <main className={styles.main}>
        <div className={styles.content}>
          <h2>Set up your profile</h2>

          <form onSubmit={handleSubmit}>
            <div id="ProfileCreation_CompanyName">
              <label>
                Your company <span>name</span>:
              </label>
              <input
                value={merchantName}
                onChange={(e) => setMerchantName(e.target.value)}
                placeholder="Please enter your company name"
              />
            </div>

            <div id="ProfileCreation_CompanyDescription">
              <label>
                Your company <span>description</span>:
              </label>
              <textarea
                rows={5}
                value={merchantDescription}
                onChange={(e) => setMerchantDescription(e.target.value)}
                placeholder="Tell me more about your company..."
              />
            </div>

            <div id="ProfileCreation_CompanyProfileImage">
              <label>
                Your company <span>profile image</span>:
              </label>
              {profileImage && (
                <div className={styles.content_preview_profileImage}>
                  {displayImageFromFile(profileImage)}
                </div>
              )}
              <Dropzone
                onDrop={(acceptedFiles) => {
                  setProfileImage(
                    acceptedFiles.map((file) =>
                      Object.assign(file, {
                        preview: URL.createObjectURL(file),
                      })
                    )[0]
                  )
                }}
                multiple={false}
              >
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps({ className: styles.content_dropzone })}
                    style={{ margin: 0 }}
                  >
                    <input {...getInputProps()} />
                    <span className={styles.content_dropzone_text}>
                      Drop image here, or click to select
                    </span>
                  </div>
                )}
              </Dropzone>
            </div>

            <div id="ProfileCreation_CompanyBannerImage">
              <label>
                Your company <span>banner image</span>:
              </label>
              <label className={styles.note}>
                (It is recommended to be 1000 pixels by 350 pixels)
              </label>
              {bannerImage && (
                <div className={styles.content_preview_bannerImage}>
                  {displayImageFromFile(bannerImage)}
                </div>
              )}
              <Dropzone
                onDrop={(acceptedFiles) => {
                  setBannerImage(
                    acceptedFiles.map((file) =>
                      Object.assign(file, {
                        preview: URL.createObjectURL(file),
                      })
                    )[0]
                  )
                }}
                multiple={false}
              >
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps({ className: styles.content_dropzone })}
                    style={{ margin: 0 }}
                  >
                    <input {...getInputProps()} />
                    <span className={styles.content_dropzone_text}>
                      Drop image here, or click to select
                    </span>
                  </div>
                )}
              </Dropzone>
            </div>

            <div id="ProfileCreation_CompanySocials">
              <label>
                Your <span>social medias</span>:
              </label>
              <div className={styles.content_social}>
                <div id="ProfileCreation_CompanySocials_Twitter">
                  <div className={styles.content_social_icon}>
                    {renderSvgSocialIcon(SocialEnum.TWITTER)}
                  </div>
                  <input
                    value={merchantSocials.twitter}
                    onChange={(e) =>
                      setMerchantSocials({
                        ...merchantSocials,
                        twitter: e.target.value,
                      })
                    }
                  />
                </div>
                <div id="ProfileCreation_CompanySocials_Instagram">
                  <div className={styles.content_social_icon}>
                    {renderSvgSocialIcon(SocialEnum.INSTAGRAM)}
                  </div>
                  <input
                    value={merchantSocials.instagram}
                    onChange={(e) =>
                      setMerchantSocials({
                        ...merchantSocials,
                        instagram: e.target.value,
                      })
                    }
                  />
                </div>
                <div id="ProfileCreation_CompanySocials_Website">
                  <div className={styles.content_social_icon}>
                    {renderSvgSocialIcon(SocialEnum.WEBSITE)}
                  </div>
                  <input
                    value={merchantSocials.website}
                    onChange={(e) =>
                      setMerchantSocials({
                        ...merchantSocials,
                        website: e.target.value,
                      })
                    }
                  />
                </div>
                <div id="ProfileCreation_CompanySocials_Facebook">
                  <div className={styles.content_social_icon}>
                    {renderSvgSocialIcon(SocialEnum.FACEBOOK)}
                  </div>
                  <input
                    value={merchantSocials.facebook}
                    onChange={(e) =>
                      setMerchantSocials({
                        ...merchantSocials,
                        facebook: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <button type="submit">Create</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default CreateProfile
