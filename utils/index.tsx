export enum IconEnum {
  HOURGLASS,
  GIFT,
}

enum SocialEnum {
  TWITTER = 'twitter',
  DISCORD = 'discord',
  WEBSITE = 'website',
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
}

export const renderSvgSocialIcon = (type: SocialEnum) => {
  switch (type) {
    case SocialEnum.TWITTER:
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23.1429 5.09732C22.3232 5.45089 21.4312 5.70535 20.5125 5.80446C21.4664 5.23777 22.1807 4.34249 22.5214 3.2866C21.6263 3.81907 20.6458 4.19245 19.6232 4.39017C19.1958 3.93328 18.6789 3.5693 18.1047 3.32091C17.5305 3.07252 16.9113 2.94504 16.2857 2.94642C13.7545 2.94642 11.7187 4.99821 11.7187 7.51607C11.7187 7.86964 11.7616 8.22321 11.8312 8.56339C8.04107 8.36517 4.66071 6.55446 2.41339 3.78214C2.0039 4.48155 1.78932 5.27792 1.79196 6.08839C1.79196 7.6741 2.59821 9.07232 3.82768 9.89464C3.10313 9.8661 2.39556 9.66695 1.7625 9.31339V9.36964C1.7625 11.5902 3.33214 13.4304 5.4241 13.8536C5.03132 13.9556 4.62725 14.0078 4.22143 14.0089C3.9241 14.0089 3.64285 13.9795 3.35893 13.9393C3.9375 15.75 5.62232 17.0652 7.62857 17.108C6.05893 18.3375 4.09285 19.0607 1.95803 19.0607C1.575 19.0607 1.22143 19.0473 0.854462 19.0045C2.87946 20.3036 5.28214 21.0536 7.86964 21.0536C16.2696 21.0536 20.8661 14.0946 20.8661 8.05446C20.8661 7.85624 20.8661 7.65803 20.8527 7.45982C21.742 6.80892 22.5214 6.00267 23.1429 5.09732Z" />
        </svg>
      )

    case SocialEnum.DISCORD:
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30.8571 6.79643C29.7643 7.26786 28.575 7.60715 27.35 7.73929C28.6218 6.9837 29.5742 5.79 30.0286 4.38214C28.8351 5.09211 27.5277 5.58994 26.1643 5.85357C25.5944 5.24438 24.9053 4.75907 24.1396 4.42789C23.374 4.0967 22.5484 3.92673 21.7143 3.92857C18.3393 3.92857 15.625 6.66429 15.625 10.0214C15.625 10.4929 15.6821 10.9643 15.775 11.4179C10.7214 11.1536 6.21428 8.73929 3.21785 5.04286C2.67187 5.97541 2.38576 7.03724 2.38928 8.11786C2.38928 10.2321 3.46428 12.0964 5.10357 13.1929C4.13751 13.1548 3.19408 12.8893 2.35 12.4179V12.4929C2.35 15.4536 4.44285 17.9071 7.23214 18.4714C6.70842 18.6075 6.16966 18.6771 5.62857 18.6786C5.23214 18.6786 4.85714 18.6393 4.47857 18.5857C5.25 21 7.49643 22.7536 10.1714 22.8107C8.07857 24.45 5.45714 25.4143 2.61071 25.4143C2.1 25.4143 1.62857 25.3964 1.13928 25.3393C3.83928 27.0714 7.04285 28.0714 10.4929 28.0714C21.6929 28.0714 27.8214 18.7929 27.8214 10.7393C27.8214 10.475 27.8214 10.2107 27.8036 9.94643C28.9893 9.07857 30.0286 8.00357 30.8571 6.79643Z" />
        </svg>
      )
    case SocialEnum.WEBSITE:
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M13.6607 16.1089C13.6204 16.069 13.5661 16.0467 13.5094 16.0467C13.4527 16.0467 13.3983 16.069 13.358 16.1089L10.2455 19.2214C8.80446 20.6625 6.37232 20.8152 4.78125 19.2214C3.1875 17.6277 3.34018 15.1982 4.78125 13.7571L7.89375 10.6446C7.97678 10.5616 7.97678 10.425 7.89375 10.342L6.82768 9.27589C6.7874 9.23601 6.73301 9.21364 6.67634 9.21364C6.61966 9.21364 6.56527 9.23601 6.525 9.27589L3.4125 12.3884C1.14643 14.6545 1.14643 18.3214 3.4125 20.5848C5.67857 22.8482 9.34553 22.8509 11.6089 20.5848L14.7214 17.4723C14.8045 17.3893 14.8045 17.2527 14.7214 17.1696L13.6607 16.1089ZM20.5875 3.4125C18.3214 1.14643 14.6545 1.14643 12.3911 3.4125L9.27589 6.525C9.23601 6.56527 9.21364 6.61966 9.21364 6.67634C9.21364 6.73302 9.23601 6.7874 9.27589 6.82768L10.3393 7.89107C10.4223 7.97411 10.5589 7.97411 10.642 7.89107L13.7545 4.77857C15.1955 3.3375 17.6277 3.18482 19.2187 4.77857C20.8125 6.37232 20.6598 8.80178 19.2187 10.2429L16.1062 13.3554C16.0664 13.3956 16.044 13.45 16.044 13.5067C16.044 13.5634 16.0664 13.6178 16.1062 13.658L17.1723 14.7241C17.2554 14.8071 17.392 14.8071 17.475 14.7241L20.5875 11.6116C22.8509 9.34553 22.8509 5.67857 20.5875 3.4125V3.4125ZM14.6277 8.25803C14.5874 8.21815 14.533 8.19578 14.4763 8.19578C14.4197 8.19578 14.3653 8.21815 14.325 8.25803L8.25803 14.3223C8.21815 14.3626 8.19578 14.417 8.19578 14.4737C8.19578 14.5303 8.21815 14.5847 8.25803 14.625L9.31875 15.6857C9.40178 15.7687 9.53839 15.7687 9.62143 15.6857L15.6857 9.62143C15.7687 9.53839 15.7687 9.40178 15.6857 9.31875L14.6277 8.25803Z" />
          </g>
        </svg>
      )

    case SocialEnum.FACEBOOK:
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.8571 1.28572H2.14286C1.66875 1.28572 1.28571 1.66876 1.28571 2.14286V21.8572C1.28571 22.3313 1.66875 22.7143 2.14286 22.7143H21.8571C22.3313 22.7143 22.7143 22.3313 22.7143 21.8572V2.14286C22.7143 1.66876 22.3313 1.28572 21.8571 1.28572ZM19.3821 7.54019H17.6705C16.3286 7.54019 16.0688 8.17769 16.0688 9.11519V11.1804H19.2723L18.8545 14.4134H16.0688V22.7143H12.7286V14.4161H9.93482V11.1804H12.7286V8.79644C12.7286 6.02947 14.4188 4.52144 16.8884 4.52144C18.0723 4.52144 19.0875 4.60983 19.3848 4.65001V7.54019H19.3821Z" />
        </svg>
      )

    case SocialEnum.INSTAGRAM:
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 8.42946C10.0339 8.42946 8.42946 10.0339 8.42946 12C8.42946 13.9661 10.0339 15.5705 12 15.5705C13.9661 15.5705 15.5705 13.9661 15.5705 12C15.5705 10.0339 13.9661 8.42946 12 8.42946ZM22.7089 12C22.7089 10.5214 22.7223 9.05625 22.6393 7.58036C22.5563 5.86607 22.1652 4.34464 20.9116 3.09107C19.6554 1.83482 18.1366 1.44643 16.4223 1.36339C14.9438 1.28036 13.4786 1.29375 12.0027 1.29375C10.5241 1.29375 9.05893 1.28036 7.58304 1.36339C5.86875 1.44643 4.34732 1.8375 3.09375 3.09107C1.8375 4.34732 1.44911 5.86607 1.36607 7.58036C1.28304 9.05893 1.29643 10.5241 1.29643 12C1.29643 13.4759 1.28304 14.9438 1.36607 16.4196C1.44911 18.1339 1.84018 19.6554 3.09375 20.9089C4.35 22.1652 5.86875 22.5536 7.58304 22.6366C9.06161 22.7196 10.5268 22.7063 12.0027 22.7063C13.4812 22.7063 14.9464 22.7196 16.4223 22.6366C18.1366 22.5536 19.658 22.1625 20.9116 20.9089C22.1679 19.6527 22.5563 18.1339 22.6393 16.4196C22.725 14.9438 22.7089 13.4786 22.7089 12V12ZM12 17.4937C8.95982 17.4937 6.50625 15.0402 6.50625 12C6.50625 8.95982 8.95982 6.50625 12 6.50625C15.0402 6.50625 17.4938 8.95982 17.4938 12C17.4938 15.0402 15.0402 17.4937 12 17.4937ZM17.7188 7.56429C17.0089 7.56429 16.4357 6.99107 16.4357 6.28125C16.4357 5.57143 17.0089 4.99821 17.7188 4.99821C18.4286 4.99821 19.0018 5.57143 19.0018 6.28125C19.002 6.4498 18.969 6.61674 18.9046 6.7725C18.8401 6.92826 18.7456 7.06978 18.6265 7.18896C18.5073 7.30815 18.3658 7.40265 18.21 7.46705C18.0542 7.53146 17.8873 7.5645 17.7188 7.56429V7.56429Z" />
        </svg>
      )

    default:
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30.8571 6.79643C29.7643 7.26786 28.575 7.60715 27.35 7.73929C28.6218 6.9837 29.5742 5.79 30.0286 4.38214C28.8351 5.09211 27.5277 5.58994 26.1643 5.85357C25.5944 5.24438 24.9053 4.75907 24.1396 4.42789C23.374 4.0967 22.5484 3.92673 21.7143 3.92857C18.3393 3.92857 15.625 6.66429 15.625 10.0214C15.625 10.4929 15.6821 10.9643 15.775 11.4179C10.7214 11.1536 6.21428 8.73929 3.21785 5.04286C2.67187 5.97541 2.38576 7.03724 2.38928 8.11786C2.38928 10.2321 3.46428 12.0964 5.10357 13.1929C4.13751 13.1548 3.19408 12.8893 2.35 12.4179V12.4929C2.35 15.4536 4.44285 17.9071 7.23214 18.4714C6.70842 18.6075 6.16966 18.6771 5.62857 18.6786C5.23214 18.6786 4.85714 18.6393 4.47857 18.5857C5.25 21 7.49643 22.7536 10.1714 22.8107C8.07857 24.45 5.45714 25.4143 2.61071 25.4143C2.1 25.4143 1.62857 25.3964 1.13928 25.3393C3.83928 27.0714 7.04285 28.0714 10.4929 28.0714C21.6929 28.0714 27.8214 18.7929 27.8214 10.7393C27.8214 10.475 27.8214 10.2107 27.8036 9.94643C28.9893 9.07857 30.0286 8.00357 30.8571 6.79643Z" />
        </svg>
      )
  }
}

export const renderSvgIcon = (type: IconEnum) => {
  switch (type) {
    case IconEnum.HOURGLASS:
      return (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.027 5.92682L9.26274 2.31172C9.20449 2.25501 9.12487 2.22314 9.0419 2.22314C8.95892 2.22314 8.8793 2.25501 8.82105 2.31172L8.28681 2.83334L8.27613 2.8419V2.84178C8.21688 2.89778 8.18359 2.97423 8.18359 3.05401C8.18359 3.13379 8.21688 3.21013 8.27613 3.26625L8.50046 3.48098L8.92785 3.06163L8.97232 3.01729L9.04175 2.95082L12.3646 6.13827L12.2506 6.24742L11.8161 6.66164V6.66153C11.8133 6.66081 11.8102 6.66081 11.8073 6.66153L12.0299 6.87626C12.1521 6.99242 12.3492 6.99242 12.4715 6.87626L12.4821 6.86437L13.0271 6.34275C13.1484 6.22576 13.1484 6.03707 13.0271 5.92006L13.027 5.92682Z"
            fill="#919191"
          />
          <path
            d="M3.01077 8.61507C2.93376 8.61519 2.85948 8.58784 2.80247 8.53838C2.67441 8.42757 2.6641 8.23864 2.77924 8.11569C2.85402 8.03556 4.63296 6.17254 6.85508 6.90031C6.91831 6.92159 6.98414 6.9342 7.05096 6.93777C7.0501 6.8713 7.03693 6.80555 7.01184 6.74349C6.25502 4.61451 8.19593 2.90498 8.2779 2.83345C8.33914 2.78018 8.42 2.7526 8.5026 2.75676C8.5852 2.76092 8.6627 2.79647 8.71773 2.85568C8.83337 2.97814 8.8238 3.16706 8.69636 3.27837C8.6786 3.29371 6.97979 4.79883 7.60481 6.55439C7.72355 6.91347 7.68964 7.18455 7.50333 7.36742C7.31105 7.55147 7.02611 7.58393 6.65744 7.46967C4.81629 6.8646 3.25826 8.4992 3.24744 8.51633C3.18745 8.5809 3.10088 8.61704 3.01058 8.61514L3.01077 8.61507Z"
            fill="#919191"
          />
          <path
            d="M6.77513 12.2303C6.6867 12.2311 6.60211 12.195 6.54373 12.1313C6.42809 12.0089 6.43766 11.82 6.5651 11.7087C6.58286 11.6933 8.28167 10.1882 7.6584 8.43263C7.53965 8.07356 7.57294 7.80199 7.75814 7.61781C7.95042 7.43542 8.23536 7.40308 8.60403 7.51722C10.4452 8.1223 12.0051 6.49445 12.0194 6.47068C12.1349 6.34834 12.3323 6.33883 12.4601 6.4494C12.5879 6.56009 12.5979 6.7489 12.4824 6.87124C12.4076 6.95137 10.6286 8.81439 8.40651 8.08662C8.34365 8.06438 8.27757 8.05166 8.21062 8.04916C8.21149 8.11563 8.22478 8.18138 8.24975 8.24344C9.00657 10.3724 7.06566 12.082 6.98728 12.1535C6.92928 12.2035 6.85363 12.2309 6.77538 12.2302L6.77513 12.2303Z"
            fill="#919191"
          />
          <path
            d="M7.08682 11.8396C7.01466 11.8396 6.94535 11.812 6.89455 11.7629L3.25656 8.1953C3.15235 8.09412 3.15359 7.93123 3.25929 7.83148C3.36499 7.73161 3.53516 7.73279 3.6395 7.83397L7.27749 11.4135C7.35276 11.4869 7.37462 11.5964 7.33301 11.6913C7.2914 11.7862 7.19451 11.848 7.08695 11.848L7.08682 11.8396Z"
            fill="#919191"
          />
          <path
            d="M10.5484 14.1663L10.5821 14.2669H10.5823C10.6262 14.3925 10.5574 14.5287 10.4273 14.5738L10.3969 14.584H10.3971C10.3321 14.6043 10.2613 14.5991 10.2006 14.5693C10.1397 14.5395 10.0937 14.4878 10.0729 14.4255L10.0391 14.3249C9.99662 14.199 10.0637 14.0631 10.1922 14.0147H10.2029C10.2695 13.9874 10.345 13.9883 10.4107 14.0172C10.4766 14.0461 10.5266 14.1003 10.5484 14.1663L10.5484 14.1663Z"
            fill="#919191"
          />
          <path
            d="M13.6754 12.0378C13.8049 12.1471 13.8177 12.3361 13.7039 12.4605C13.0587 13.1608 12.282 13.739 11.4139 14.165C11.3471 14.1962 11.2696 14.1981 11.2013 14.1703C11.133 14.1424 11.0807 14.0877 11.0577 14.0202L11.024 13.918V13.9178C10.9878 13.8052 11.041 13.684 11.1504 13.6299C11.9401 13.2372 12.6471 12.7077 13.2355 12.0685C13.2895 12.0086 13.3663 11.9716 13.4488 11.9659C13.5313 11.9601 13.6129 11.986 13.6753 12.0378L13.6754 12.0378Z"
            fill="#919191"
          />
          <path
            d="M14.2289 3.79296C14.083 3.8486 13.9164 3.79617 13.8335 3.66847C13.7641 3.56622 13.6911 3.4673 13.6145 3.37016C12.6287 2.1139 11.2237 1.21799 9.63282 0.831098C8.04195 0.444324 6.36051 0.589735 4.86792 1.24332C3.37517 1.89691 2.16075 3.0193 1.42613 4.42437C0.691533 5.82938 0.480872 7.43272 0.829058 8.96813C1.17724 10.5035 2.06345 11.879 3.34045 12.866C4.61758 13.8531 6.20884 14.3925 7.85033 14.3948C8.30768 14.395 8.76379 14.3528 9.21255 14.2688C9.34273 14.2439 9.47128 14.3176 9.50991 14.4391L9.54556 14.5414C9.56842 14.6077 9.56072 14.6802 9.52432 14.7407C9.48793 14.8012 9.42644 14.8441 9.35502 14.8585C8.85955 14.9528 8.35549 15.0001 7.85035 15C6.05476 15.0033 4.31253 14.4162 2.91501 13.337C1.51766 12.2576 0.549795 10.7516 0.173817 9.07079C-0.202287 7.39017 0.0360692 5.6368 0.849012 4.10425C1.66208 2.57165 3.00033 1.35295 4.63963 0.651999C6.27909 -0.0490145 8.12022 -0.189546 9.85511 0.253689C11.5901 0.696833 13.1131 1.69711 14.1698 3.08678C14.2356 3.17203 14.2998 3.25728 14.362 3.35097V3.35109C14.413 3.42481 14.4275 3.51636 14.4018 3.60137C14.3761 3.68626 14.3127 3.75617 14.2285 3.79256L14.2289 3.79296Z"
            fill="#919191"
          />
          <path
            d="M12.8008 3.784L14.9074 5.05383L14.9999 2.66577L12.8008 3.784Z"
            fill="#919191"
          />
          <path
            d="M6.98722 12.1433L6.44059 12.675C6.38221 12.7316 6.30284 12.7635 6.21974 12.7637C6.13689 12.7631 6.05752 12.7313 5.99902 12.675L2.23448 9.05993C2.11325 8.94293 2.11325 8.75412 2.23448 8.63712L2.79008 8.10363C2.9123 7.98759 3.10955 7.98759 3.23178 8.10363L3.45611 8.32015L3.01094 8.73949L2.89157 8.85708L6.21953 12.0412L6.29071 11.9731L6.33343 11.9305L6.76967 11.5044L6.98704 11.7191C7.04591 11.7753 7.07895 11.8517 7.07895 11.9313C7.07895 12.0109 7.04591 12.0872 6.98704 12.1436L6.98722 12.1433Z"
            fill="#919191"
          />
        </svg>
      )
    case IconEnum.GIFT:
      return (
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1695 3.21894H12.2522L13.5987 2.43347C13.6884 2.36616 13.7783 2.27631 13.8006 2.16424C13.823 2.052 13.8006 1.93977 13.7333 1.85008L12.6563 0.189493C12.544 0.00995429 12.2972 -0.0573535 12.0953 0.0548779L10.1205 1.17687V0.795414C10.1205 0.570951 9.94097 0.369016 9.69411 0.369016H5.87937C5.65491 0.369016 5.45297 0.548555 5.45297 0.795414V1.17687L3.47822 0.0548779C3.2763 -0.0573535 3.02946 0.00995429 2.91722 0.189493L1.84015 1.85008C1.77284 1.93978 1.75046 2.07455 1.79523 2.16424C1.81761 2.27647 1.88492 2.36616 1.99715 2.43347L3.34362 3.21894H0.426398C0.201935 3.21894 0 3.39848 0 3.64534V7.07864C0 7.3031 0.179539 7.50504 0.426398 7.50504H0.875155V14.5736C0.875155 14.7981 1.05469 15 1.30155 15H14.2718C14.4963 15 14.6982 14.8205 14.6982 14.5736L14.6984 7.4826H15.1471C15.3716 7.4826 15.5735 7.30306 15.5735 7.0562V3.6229C15.5735 3.39859 15.394 3.21906 15.1695 3.21906L15.1695 3.21894ZM5.47544 14.1472H1.75037V7.48252H5.47544V14.1472ZM5.47544 6.65224H0.87526V4.04918H5.47544V6.65224ZM5.47544 3.21894H5.02668L2.80509 1.91743L3.43341 0.952593L5.29592 2.00727L5.47546 2.18681L5.47544 3.21894ZM6.32803 1.17687H9.31254V3.19638L6.32803 3.19654V1.17687ZM9.29018 14.1471H6.32803V7.48248H9.31254V14.1471H9.29018ZM9.29018 6.6522H6.32803V4.04914H9.31254V6.6522H9.29018ZM10.1428 2.18667L10.3223 2.00713L12.1848 0.952453L12.8131 1.91729L10.5915 3.2188H10.1428L10.1428 2.18667ZM13.8678 14.1471H10.1428V7.48248H13.8678V14.1471ZM14.743 6.6522H10.1428V4.04914H14.743V6.6522Z"
            fill="#919191"
          />
        </svg>
      )
    default:
      return
  }
}

export const getReadableTime = (time: number) => {
  if (time === Infinity) return ['-', '-', '-', '-']
  if (time < 0) return ['0', '00', '00', '00']

  // calculate time left
  const days = Math.floor(time / (1000 * 60 * 60 * 24))
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((time % (1000 * 60)) / 1000)

  let _days = String(days)
  let _hours = String(hours)
  let _minutes = String(minutes)
  let _seconds = String(seconds)

  if (_seconds.length < 2) {
    _seconds = '0'.concat(_seconds)
  }
  if (_minutes.length < 2) {
    _minutes = '0'.concat(_minutes)
  }
  if (_hours.length < 2) {
    _hours = '0'.concat(_hours)
  }

  return [_days, _hours, _minutes, _seconds]
}

export const getReadableDate = (time: number) => {
  if (time === Infinity) return ['-', '-', '-']
  if (time < 0) return ['01', '01', '1950']

  const _date = new Date(time)
  const _day = _date.getDate()
  const _month = _date.getMonth()
  const _year = _date.getFullYear()

  return [_day, _month + 1, _year]
}

export const getDisplayAddress = (
  address: string | null | undefined
): string => {
  if (!address) {
    return ''
  } else {
    return `${address.toString().slice(0, 3)}...${address.toString().slice(-4)}`
  }
}

export const upperCaseString = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
