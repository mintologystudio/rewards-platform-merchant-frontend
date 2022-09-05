/* eslint-disable @next/next/no-img-element */
import styles from './index.module.scss'

const Pagination = ({
  currentPageNumber,
  setCurrentPageNumber,
  finalPage,
}: {
  currentPageNumber: number
  setCurrentPageNumber: (e: number) => void
  finalPage: number
}) => {
  return (
    <div className={styles.container}>
      {currentPageNumber > 1 && (
        <button
          type="button"
          aria-label="previous-page"
          onClick={() => setCurrentPageNumber(currentPageNumber - 1)}
          className={styles.container_hoverLeft}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      <p>{currentPageNumber}</p>

      {currentPageNumber < finalPage && (
        <button
          type="button"
          aria-label="next-page"
          onClick={() => setCurrentPageNumber(currentPageNumber + 1)}
          className={styles.container_hoverRight}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  )
}

export default Pagination
