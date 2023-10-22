import { useState } from "react";

const MaintenancePage = () => {
  const handleClose = () => {
    window.location.href = "https://twitter.com/NFTaula";
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-50">
      <div className="bg-gray-800 p-8 rounded-lg max-w-md text-center">
        <svg
          className="w-56 mx-auto"
          viewBox="0 0 125 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.56 26H12.456L5.592 15.608V26H1.488V9.152H5.592L12.456 19.592V9.152H16.56V26ZM29.7349 9.152V12.44H22.8709V15.992H28.0069V19.184H22.8709V26H18.7669V9.152H29.7349ZM43.2439 9.152V12.44H38.7799V26H34.6759V12.44H30.2119V9.152H43.2439ZM43.7196 19.28C43.7196 17.904 43.9756 16.696 44.4876 15.656C45.0156 14.616 45.7276 13.816 46.6236 13.256C47.5196 12.696 48.5196 12.416 49.6236 12.416C50.5676 12.416 51.3916 12.608 52.0956 12.992C52.8156 13.376 53.3676 13.88 53.7516 14.504V12.608H57.8556V26H53.7516V24.104C53.3516 24.728 52.7916 25.232 52.0716 25.616C51.3676 26 50.5436 26.192 49.5996 26.192C48.5116 26.192 47.5196 25.912 46.6236 25.352C45.7276 24.776 45.0156 23.968 44.4876 22.928C43.9756 21.872 43.7196 20.656 43.7196 19.28ZM53.7516 19.304C53.7516 18.28 53.4636 17.472 52.8876 16.88C52.3276 16.288 51.6396 15.992 50.8236 15.992C50.0076 15.992 49.3116 16.288 48.7356 16.88C48.1756 17.456 47.8956 18.256 47.8956 19.28C47.8956 20.304 48.1756 21.12 48.7356 21.728C49.3116 22.32 50.0076 22.616 50.8236 22.616C51.6396 22.616 52.3276 22.32 52.8876 21.728C53.4636 21.136 53.7516 20.328 53.7516 19.304ZM73.2806 12.608V26H69.1766V24.176C68.7606 24.768 68.1926 25.248 67.4726 25.616C66.7686 25.968 65.9846 26.144 65.1206 26.144C64.0966 26.144 63.1926 25.92 62.4086 25.472C61.6246 25.008 61.0166 24.344 60.5846 23.48C60.1526 22.616 59.9366 21.6 59.9366 20.432V12.608H64.0166V19.88C64.0166 20.776 64.2486 21.472 64.7126 21.968C65.1766 22.464 65.8006 22.712 66.5846 22.712C67.3846 22.712 68.0166 22.464 68.4806 21.968C68.9446 21.472 69.1766 20.776 69.1766 19.88V12.608H73.2806ZM79.5645 8.24V26H75.4605V8.24H79.5645ZM80.9546 19.28C80.9546 17.904 81.2106 16.696 81.7226 15.656C82.2506 14.616 82.9626 13.816 83.8586 13.256C84.7546 12.696 85.7546 12.416 86.8586 12.416C87.8026 12.416 88.6266 12.608 89.3306 12.992C90.0506 13.376 90.6026 13.88 90.9866 14.504V12.608H95.0906V26H90.9866V24.104C90.5866 24.728 90.0266 25.232 89.3066 25.616C88.6026 26 87.7786 26.192 86.8346 26.192C85.7466 26.192 84.7546 25.912 83.8586 25.352C82.9626 24.776 82.2506 23.968 81.7226 22.928C81.2106 21.872 80.9546 20.656 80.9546 19.28ZM90.9866 19.304C90.9866 18.28 90.6986 17.472 90.1226 16.88C89.5626 16.288 88.8746 15.992 88.0586 15.992C87.2426 15.992 86.5466 16.288 85.9706 16.88C85.4106 17.456 85.1306 18.256 85.1306 19.28C85.1306 20.304 85.4106 21.12 85.9706 21.728C86.5466 22.32 87.2426 22.616 88.0586 22.616C88.8746 22.616 89.5626 22.32 90.1226 21.728C90.6986 21.136 90.9866 20.328 90.9866 19.304Z"
            fill="#6366F1"
          />
          <path
            d="M100.408 26.192C99.688 26.192 99.096 25.984 98.632 25.568C98.184 25.136 97.96 24.608 97.96 23.984C97.96 23.344 98.184 22.808 98.632 22.376C99.096 21.944 99.688 21.728 100.408 21.728C101.112 21.728 101.688 21.944 102.136 22.376C102.6 22.808 102.832 23.344 102.832 23.984C102.832 24.608 102.6 25.136 102.136 25.568C101.688 25.984 101.112 26.192 100.408 26.192ZM106.557 11.216C105.837 11.216 105.245 11.008 104.781 10.592C104.333 10.16 104.109 9.632 104.109 9.008C104.109 8.368 104.333 7.84 104.781 7.424C105.245 6.992 105.837 6.776 106.557 6.776C107.261 6.776 107.837 6.992 108.285 7.424C108.749 7.84 108.981 8.368 108.981 9.008C108.981 9.632 108.749 10.16 108.285 10.592C107.837 11.008 107.261 11.216 106.557 11.216ZM108.597 12.608V26H104.493V12.608H108.597ZM116.9 26.192C115.588 26.192 114.404 25.912 113.348 25.352C112.308 24.792 111.484 23.992 110.876 22.952C110.284 21.912 109.988 20.696 109.988 19.304C109.988 17.928 110.292 16.72 110.9 15.68C111.508 14.624 112.34 13.816 113.396 13.256C114.452 12.696 115.636 12.416 116.948 12.416C118.26 12.416 119.444 12.696 120.5 13.256C121.556 13.816 122.388 14.624 122.996 15.68C123.604 16.72 123.908 17.928 123.908 19.304C123.908 20.68 123.596 21.896 122.972 22.952C122.364 23.992 121.524 24.792 120.452 25.352C119.396 25.912 118.212 26.192 116.9 26.192ZM116.9 22.64C117.684 22.64 118.348 22.352 118.892 21.776C119.452 21.2 119.732 20.376 119.732 19.304C119.732 18.232 119.46 17.408 118.916 16.832C118.388 16.256 117.732 15.968 116.948 15.968C116.148 15.968 115.484 16.256 114.956 16.832C114.428 17.392 114.164 18.216 114.164 19.304C114.164 20.376 114.42 21.2 114.932 21.776C115.46 22.352 116.116 22.64 116.9 22.64Z"
            fill="#6366F1"
          />
          <path
            d="M32.6829 40.07C32.4762 40.07 32.3029 40 32.1629 39.86C32.0229 39.72 31.9529 39.5467 31.9529 39.34C31.9529 39.1333 32.0229 38.96 32.1629 38.82C32.3029 38.68 32.4762 38.61 32.6829 38.61C32.8829 38.61 33.0529 38.68 33.1929 38.82C33.3329 38.96 33.4029 39.1333 33.4029 39.34C33.4029 39.5467 33.3329 39.72 33.1929 39.86C33.0529 40 32.8829 40.07 32.6829 40.07ZM36.315 40.09C35.8817 40.09 35.4917 40.0133 35.145 39.86C34.805 39.7 34.535 39.4867 34.335 39.22C34.135 38.9467 34.0283 38.6433 34.015 38.31H35.195C35.215 38.5433 35.325 38.74 35.525 38.9C35.7317 39.0533 35.9883 39.13 36.295 39.13C36.615 39.13 36.8617 39.07 37.035 38.95C37.215 38.8233 37.305 38.6633 37.305 38.47C37.305 38.2633 37.205 38.11 37.005 38.01C36.8117 37.91 36.5017 37.8 36.075 37.68C35.6617 37.5667 35.325 37.4567 35.065 37.35C34.805 37.2433 34.5783 37.08 34.385 36.86C34.1983 36.64 34.105 36.35 34.105 35.99C34.105 35.6967 34.1917 35.43 34.365 35.19C34.5383 34.9433 34.785 34.75 35.105 34.61C35.4317 34.47 35.805 34.4 36.225 34.4C36.8517 34.4 37.355 34.56 37.735 34.88C38.1217 35.1933 38.3283 35.6233 38.355 36.17H37.215C37.195 35.9233 37.095 35.7267 36.915 35.58C36.735 35.4333 36.4917 35.36 36.185 35.36C35.885 35.36 35.655 35.4167 35.495 35.53C35.335 35.6433 35.255 35.7933 35.255 35.98C35.255 36.1267 35.3083 36.25 35.415 36.35C35.5217 36.45 35.6517 36.53 35.805 36.59C35.9583 36.6433 36.185 36.7133 36.485 36.8C36.885 36.9067 37.2117 37.0167 37.465 37.13C37.725 37.2367 37.9483 37.3967 38.135 37.61C38.3217 37.8233 38.4183 38.1067 38.425 38.46C38.425 38.7733 38.3383 39.0533 38.165 39.3C37.9917 39.5467 37.745 39.74 37.425 39.88C37.1117 40.02 36.7417 40.09 36.315 40.09ZM42.1868 34.4C42.6068 34.4 42.9801 34.49 43.3068 34.67C43.6401 34.85 43.9001 35.1167 44.0868 35.47C44.2801 35.8233 44.3768 36.25 44.3768 36.75V40H43.2468V36.92C43.2468 36.4267 43.1235 36.05 42.8768 35.79C42.6301 35.5233 42.2935 35.39 41.8668 35.39C41.4401 35.39 41.1001 35.5233 40.8468 35.79C40.6001 36.05 40.4768 36.4267 40.4768 36.92V40H39.3368V32.6H40.4768V35.13C40.6701 34.8967 40.9135 34.7167 41.2068 34.59C41.5068 34.4633 41.8335 34.4 42.1868 34.4ZM47.9009 40.09C47.3809 40.09 46.9109 39.9733 46.4909 39.74C46.0709 39.5 45.7409 39.1667 45.5009 38.74C45.2609 38.3067 45.1409 37.8067 45.1409 37.24C45.1409 36.68 45.2643 36.1833 45.5109 35.75C45.7576 35.3167 46.0943 34.9833 46.5209 34.75C46.9476 34.5167 47.4243 34.4 47.9509 34.4C48.4776 34.4 48.9543 34.5167 49.3809 34.75C49.8076 34.9833 50.1443 35.3167 50.3909 35.75C50.6376 36.1833 50.7609 36.68 50.7609 37.24C50.7609 37.8 50.6343 38.2967 50.3809 38.73C50.1276 39.1633 49.7809 39.5 49.3409 39.74C48.9076 39.9733 48.4276 40.09 47.9009 40.09ZM47.9009 39.1C48.1943 39.1 48.4676 39.03 48.7209 38.89C48.9809 38.75 49.1909 38.54 49.3509 38.26C49.5109 37.98 49.5909 37.64 49.5909 37.24C49.5909 36.84 49.5143 36.5033 49.3609 36.23C49.2076 35.95 49.0043 35.74 48.7509 35.6C48.4976 35.46 48.2243 35.39 47.9309 35.39C47.6376 35.39 47.3643 35.46 47.1109 35.6C46.8643 35.74 46.6676 35.95 46.5209 36.23C46.3743 36.5033 46.3009 36.84 46.3009 37.24C46.3009 37.8333 46.4509 38.2933 46.7509 38.62C47.0576 38.94 47.4409 39.1 47.9009 39.1ZM58.9679 34.49L57.2579 40H56.0579L54.9479 35.93L53.8379 40H52.6379L50.9179 34.49H52.0779L53.2279 38.92L54.3979 34.49H55.5879L56.7079 38.9L57.8479 34.49H58.9679ZM61.3975 37.22C61.3975 36.6667 61.5108 36.1767 61.7375 35.75C61.9708 35.3233 62.2842 34.9933 62.6775 34.76C63.0775 34.52 63.5175 34.4 63.9975 34.4C64.4308 34.4 64.8075 34.4867 65.1275 34.66C65.4542 34.8267 65.7142 35.0367 65.9075 35.29V34.49H67.0575V40H65.9075V39.18C65.7142 39.44 65.4508 39.6567 65.1175 39.83C64.7842 40.0033 64.4042 40.09 63.9775 40.09C63.5042 40.09 63.0708 39.97 62.6775 39.73C62.2842 39.4833 61.9708 39.1433 61.7375 38.71C61.5108 38.27 61.3975 37.7733 61.3975 37.22ZM65.9075 37.24C65.9075 36.86 65.8275 36.53 65.6675 36.25C65.5142 35.97 65.3108 35.7567 65.0575 35.61C64.8042 35.4633 64.5308 35.39 64.2375 35.39C63.9442 35.39 63.6708 35.4633 63.4175 35.61C63.1642 35.75 62.9575 35.96 62.7975 36.24C62.6442 36.5133 62.5675 36.84 62.5675 37.22C62.5675 37.6 62.6442 37.9333 62.7975 38.22C62.9575 38.5067 63.1642 38.7267 63.4175 38.88C63.6775 39.0267 63.9508 39.1 64.2375 39.1C64.5308 39.1 64.8042 39.0267 65.0575 38.88C65.3108 38.7333 65.5142 38.52 65.6675 38.24C65.8275 37.9533 65.9075 37.62 65.9075 37.24ZM71.0148 34.4C71.4482 34.4 71.8348 34.49 72.1748 34.67C72.5215 34.85 72.7915 35.1167 72.9848 35.47C73.1782 35.8233 73.2748 36.25 73.2748 36.75V40H72.1448V36.92C72.1448 36.4267 72.0215 36.05 71.7748 35.79C71.5282 35.5233 71.1915 35.39 70.7648 35.39C70.3382 35.39 69.9982 35.5233 69.7448 35.79C69.4982 36.05 69.3748 36.4267 69.3748 36.92V40H68.2348V34.49H69.3748V35.12C69.5615 34.8933 69.7982 34.7167 70.0848 34.59C70.3782 34.4633 70.6882 34.4 71.0148 34.4ZM74.029 37.22C74.029 36.6667 74.1423 36.1767 74.369 35.75C74.6023 35.3233 74.9157 34.9933 75.309 34.76C75.709 34.52 76.1523 34.4 76.639 34.4C76.999 34.4 77.3523 34.48 77.699 34.64C78.0523 34.7933 78.3323 35 78.539 35.26V32.6H79.689V40H78.539V39.17C78.3523 39.4367 78.0923 39.6567 77.759 39.83C77.4323 40.0033 77.0557 40.09 76.629 40.09C76.149 40.09 75.709 39.97 75.309 39.73C74.9157 39.4833 74.6023 39.1433 74.369 38.71C74.1423 38.27 74.029 37.7733 74.029 37.22ZM78.539 37.24C78.539 36.86 78.459 36.53 78.299 36.25C78.1457 35.97 77.9423 35.7567 77.689 35.61C77.4357 35.4633 77.1623 35.39 76.869 35.39C76.5757 35.39 76.3023 35.4633 76.049 35.61C75.7957 35.75 75.589 35.96 75.429 36.24C75.2757 36.5133 75.199 36.84 75.199 37.22C75.199 37.6 75.2757 37.9333 75.429 38.22C75.589 38.5067 75.7957 38.7267 76.049 38.88C76.309 39.0267 76.5823 39.1 76.869 39.1C77.1623 39.1 77.4357 39.0267 77.689 38.88C77.9423 38.7333 78.1457 38.52 78.299 38.24C78.459 37.9533 78.539 37.62 78.539 37.24ZM85.454 35.42H84.434V40H83.284V35.42H82.634V34.49H83.284V34.1C83.284 33.4667 83.4507 33.0067 83.784 32.72C84.124 32.4267 84.654 32.28 85.374 32.28V33.23C85.0273 33.23 84.784 33.2967 84.644 33.43C84.504 33.5567 84.434 33.78 84.434 34.1V34.49H85.454V35.42ZM86.7243 33.76C86.5176 33.76 86.3443 33.69 86.2043 33.55C86.0643 33.41 85.9943 33.2367 85.9943 33.03C85.9943 32.8233 86.0643 32.65 86.2043 32.51C86.3443 32.37 86.5176 32.3 86.7243 32.3C86.9243 32.3 87.0943 32.37 87.2343 32.51C87.3743 32.65 87.4443 32.8233 87.4443 33.03C87.4443 33.2367 87.3743 33.41 87.2343 33.55C87.0943 33.69 86.9243 33.76 86.7243 33.76ZM87.2843 34.49V40H86.1443V34.49H87.2843ZM91.241 34.4C91.6743 34.4 92.061 34.49 92.401 34.67C92.7477 34.85 93.0177 35.1167 93.211 35.47C93.4043 35.8233 93.501 36.25 93.501 36.75V40H92.371V36.92C92.371 36.4267 92.2477 36.05 92.001 35.79C91.7543 35.5233 91.4177 35.39 90.991 35.39C90.5643 35.39 90.2243 35.5233 89.971 35.79C89.7243 36.05 89.601 36.4267 89.601 36.92V40H88.461V34.49H89.601V35.12C89.7877 34.8933 90.0243 34.7167 90.311 34.59C90.6043 34.4633 90.9143 34.4 91.241 34.4ZM94.2552 37.22C94.2552 36.6667 94.3685 36.1767 94.5952 35.75C94.8285 35.3233 95.1418 34.9933 95.5352 34.76C95.9352 34.52 96.3785 34.4 96.8652 34.4C97.2252 34.4 97.5785 34.48 97.9252 34.64C98.2785 34.7933 98.5585 35 98.7652 35.26V32.6H99.9152V40H98.7652V39.17C98.5785 39.4367 98.3185 39.6567 97.9852 39.83C97.6585 40.0033 97.2818 40.09 96.8552 40.09C96.3752 40.09 95.9352 39.97 95.5352 39.73C95.1418 39.4833 94.8285 39.1433 94.5952 38.71C94.3685 38.27 94.2552 37.7733 94.2552 37.22ZM98.7652 37.24C98.7652 36.86 98.6852 36.53 98.5252 36.25C98.3718 35.97 98.1685 35.7567 97.9152 35.61C97.6618 35.4633 97.3885 35.39 97.0952 35.39C96.8018 35.39 96.5285 35.4633 96.2752 35.61C96.0218 35.75 95.8152 35.96 95.6552 36.24C95.5018 36.5133 95.4252 36.84 95.4252 37.22C95.4252 37.6 95.5018 37.9333 95.6552 38.22C95.8152 38.5067 96.0218 38.7267 96.2752 38.88C96.5352 39.0267 96.8085 39.1 97.0952 39.1C97.3885 39.1 97.6618 39.0267 97.9152 38.88C98.1685 38.7333 98.3718 38.52 98.5252 38.24C98.6852 37.9533 98.7652 37.62 98.7652 37.24ZM109.08 40H107.94L104.51 34.81V40H103.37V33.04H104.51L107.94 38.22V33.04H109.08V40ZM114.347 33.05V33.98H111.397V36.03H113.697V36.96H111.397V40H110.257V33.05H114.347ZM119.574 33.05V33.98H117.724V40H116.584V33.98H114.724V33.05H119.574ZM122.408 40.09C121.975 40.09 121.585 40.0133 121.238 39.86C120.898 39.7 120.628 39.4867 120.428 39.22C120.228 38.9467 120.122 38.6433 120.108 38.31H121.288C121.308 38.5433 121.418 38.74 121.618 38.9C121.825 39.0533 122.082 39.13 122.388 39.13C122.708 39.13 122.955 39.07 123.128 38.95C123.308 38.8233 123.398 38.6633 123.398 38.47C123.398 38.2633 123.298 38.11 123.098 38.01C122.905 37.91 122.595 37.8 122.168 37.68C121.755 37.5667 121.418 37.4567 121.158 37.35C120.898 37.2433 120.672 37.08 120.478 36.86C120.292 36.64 120.198 36.35 120.198 35.99C120.198 35.6967 120.285 35.43 120.458 35.19C120.632 34.9433 120.878 34.75 121.198 34.61C121.525 34.47 121.898 34.4 122.318 34.4C122.945 34.4 123.448 34.56 123.828 34.88C124.215 35.1933 124.422 35.6233 124.448 36.17H123.308C123.288 35.9233 123.188 35.7267 123.008 35.58C122.828 35.4333 122.585 35.36 122.278 35.36C121.978 35.36 121.748 35.4167 121.588 35.53C121.428 35.6433 121.348 35.7933 121.348 35.98C121.348 36.1267 121.402 36.25 121.508 36.35C121.615 36.45 121.745 36.53 121.898 36.59C122.052 36.6433 122.278 36.7133 122.578 36.8C122.978 36.9067 123.305 37.0167 123.558 37.13C123.818 37.2367 124.042 37.3967 124.228 37.61C124.415 37.8233 124.512 38.1067 124.518 38.46C124.518 38.7733 124.432 39.0533 124.258 39.3C124.085 39.5467 123.838 39.74 123.518 39.88C123.205 40.02 122.835 40.09 122.408 40.09Z"
            fill="#6366F1"
          />
        </svg>
        <h1 className="text-aulaBlack text-3xl font-bold my-4">
          Maintenance in Progress
        </h1>
        <p className="text-gray-200 text-lg mb-4">
          We are currently performing some essential maintenance to ensure a
          smoother experience for all our users.
        </p>
        <p className="text-gray-200 text-lg mb-4">
          Please check back in 24 hours. Your patience and support are highly
          appreciated.
        </p>
        <button
          className="bg-indigo-500 text-white py-2 px-6 rounded-md font-semibold"
          onClick={handleClose}
        >
          Got it, see you soon!
        </button>
      </div>
    </div>
  );
};

export default MaintenancePage;
