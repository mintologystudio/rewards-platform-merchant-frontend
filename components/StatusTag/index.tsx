import styles from './index.module.scss'

enum Status {
  ONGOING = 'Ongoing',
  PAUSED = 'Paused',
  CANCELLED = 'Cancelled',
  ENDED = 'Ended',
  YETTOSTART = 'Yet to start',
}

const StatusToColorCode = {
  [Status.ONGOING]: '#0DA449',
  [Status.PAUSED]: '#E6AE01',
  [Status.CANCELLED]: '#EB0C1B',
  [Status.ENDED]: '#e300b8',
  [Status.YETTOSTART]: '#006EF5',
}

const StatusTag = ({ status }: { status: string }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: StatusToColorCode[status as Status] }}
    >
      {status}
    </div>
  )
}

export default StatusTag
