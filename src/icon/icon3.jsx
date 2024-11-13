import "./style/styleicon.css";

export function IconNext(props) {
  return (
    <svg
      class="icon1"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em"
      {...props}
    >
      <path d="M15.146 12.354l-5.792 5.792a.5.5 0 01-.854-.353V6.207a.5.5 0 01.854-.353l5.792 5.792a.5.5 0 010 .708z" />
    </svg>
  );
}

export function IconBack(props) {
  return (
    <svg
      class="icon1"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em"
      {...props}
    >
      <path d="M8.854 11.646l5.792-5.792a.5.5 0 01.854.353v11.586a.5.5 0 01-.854.353l-5.792-5.792a.5.5 0 010-.708z" />
    </svg>
  );
}

export function IconTrash(props) {
  return (
    <svg
      class="icon1"
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M432 144l-28.67 275.74A32 32 0 01371.55 448H140.46a32 32 0 01-31.78-28.26L80 144"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M48 64 H464 A16 16 0 0 1 480 80 V128 A16 16 0 0 1 464 144 H48 A16 16 0 0 1 32 128 V80 A16 16 0 0 1 48 64 z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M312 240L200 352M312 352L200 240"
      />
    </svg>
  );
}

export function IconLeft(props) {
  return (
    <svg
      class="icon1"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
      />
    </svg>
  );
}

export function IconRight(props) {
  return (
    <svg
      class="icon1"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  );
}

export function IconGift(props) {
  return (
    <svg
      class="icon-white"
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M190.5 68.8l34.8 59.2H152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-41.6c6.1-12 9.6-25.6 9.6-40 0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152c-48.6 0-88 39.4-88 88zm336 0c0 22.1-17.9 40-40 40h-73.3l34.8-59.2c7.6-12.9 21.4-20.8 36.3-20.8h2.2c22.1 0 40 17.9 40 40zM32 288v176c0 26.5 21.5 48 48 48h144V288H32zm256 224h144c26.5 0 48-21.5 48-48V288H288v224z" />
    </svg>
  );
}
