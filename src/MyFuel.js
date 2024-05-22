import React from "react";
import { useSnapshot } from "valtio";
import { state } from "./proxy/store";

export default function MyFuel() {
  let snap = useSnapshot(state);
  return (
    <svg
      className="absolute z-30 left-1/2 lg:left-0 lg:bottom-[30%] bottom-1/2 w-[45%] lg:w-[60%] h-1/2 -translate-x-1/2 lg:translate-x-0"
      width="706"
      height="371"
      viewBox="0 0 706 371"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.4922 316.805C23.8256 316.805 22.159 316.221 20.8068 315.184C18.9201 313.692 17.7881 311.326 17.7881 308.862V187.029C17.7881 183.463 20.115 180.318 23.4483 179.378L63.604 168.031C64.2644 167.836 64.9562 167.739 65.6479 167.739C68.3523 167.739 70.8993 169.23 72.2829 171.63L99.5461 218.995L128.319 152.729C129.262 150.557 131.086 148.936 133.318 148.32L213.221 125.756C213.881 125.561 214.573 125.464 215.265 125.464C217.592 125.464 219.762 126.534 221.24 128.382L235.484 146.31L251.333 117.424C252.339 115.608 254.037 114.214 256.018 113.663L297.18 102.025C297.841 101.83 298.532 101.733 299.224 101.733C301.583 101.733 303.878 102.9 305.325 104.813C307.243 107.374 307.463 110.843 305.922 113.631L262.339 191.859V244.087C262.339 247.654 260.012 250.798 256.679 251.738L220.799 261.886C220.139 262.08 219.447 262.178 218.755 262.178C217.089 262.178 215.422 261.594 214.07 260.557C212.183 259.065 211.051 256.699 211.051 254.235V202.785L183.285 168.647V266.457C183.285 270.023 180.958 273.168 177.625 274.108L144.041 283.607C143.381 283.802 142.689 283.899 141.997 283.899C140.331 283.899 138.664 283.315 137.312 282.278C135.425 280.786 134.293 278.42 134.293 275.956V245.157L115.457 288.697C114.514 290.869 112.69 292.49 110.458 293.138L94.672 297.612C94.0117 297.807 93.3199 297.904 92.6281 297.904C89.9238 297.904 87.3767 296.413 85.9931 293.981L66.78 260.395V299.428C66.78 302.994 64.453 306.139 61.1198 307.079L27.5362 316.578C26.8758 316.772 26.184 316.87 25.4922 316.87V316.805ZM323.626 232.578C321.959 232.578 320.293 231.995 318.94 230.957C317.054 229.466 315.922 227.1 315.922 224.636V102.803C315.922 99.2365 318.249 96.0918 321.582 95.1516L400.07 72.9766C400.541 72.8469 401.044 72.7497 401.547 72.7172C401.988 72.4903 402.459 72.2958 402.931 72.1661L438.81 62.0188C439.471 61.8242 440.162 61.727 440.854 61.727C442.521 61.727 444.187 62.3105 445.54 63.348C447.426 64.8393 448.558 67.2059 448.558 69.6698V131.948C448.558 142.549 450.822 145.856 451.797 146.796C452.646 147.607 453.998 147.996 455.948 147.996C457.74 147.996 459.91 147.639 462.363 146.958C468.715 145.175 473.086 142.29 475.79 138.108C478.652 133.699 480.098 127.15 480.098 118.688V56.4102C480.098 52.844 482.425 49.6993 485.758 48.7591L521.637 38.6118C522.235 38.4497 522.864 38.3524 523.493 38.32C524.027 37.9958 524.625 37.7689 525.222 37.5744L617.2 11.6062C617.86 11.4117 618.552 11.3145 619.244 11.3145C619.307 11.3145 619.37 11.3145 619.432 11.3145C620.061 10.893 620.753 10.5688 621.508 10.3743L657.324 0.291777C657.985 0.0972589 658.676 0 659.368 0C661.035 0 662.701 0.583553 664.053 1.62098C665.94 3.11229 667.072 5.47892 667.072 7.94281V84.8422L693.895 77.256C694.555 77.0615 695.247 76.9642 695.939 76.9642C697.606 76.9642 699.272 77.5478 700.624 78.5852C702.511 80.0765 703.643 82.4431 703.643 84.907V119.434C703.643 123 701.316 126.145 697.983 127.085L625.533 147.542C624.873 147.736 624.181 147.834 623.489 147.834C623.426 147.834 623.363 147.834 623.3 147.834C622.671 148.255 621.98 148.547 621.225 148.774L529.247 174.742C528.587 174.936 527.895 175.034 527.203 175.034C525.537 175.034 523.87 174.45 522.518 173.413C520.631 171.921 519.499 169.555 519.499 167.091V159.407C518.178 161.677 516.732 163.849 515.191 165.924C504.468 180.318 488.179 190.692 466.702 196.755C457.489 199.348 449.061 200.678 441.672 200.678C431.043 200.678 422.113 197.954 415.163 192.605C407.522 186.737 402.271 177.854 399.535 166.215L367.241 175.325V214.488C367.241 218.054 364.914 221.199 361.58 222.139L325.701 232.287C325.041 232.481 324.349 232.578 323.657 232.578H323.626Z"
        fill="#AEB0B3"
      ></path>
      <path
        d="M25.4923 313.271C24.549 313.271 23.6371 312.947 22.8824 312.363C21.8132 311.52 21.1843 310.223 21.1843 308.862V187.029C21.1843 185.051 22.4736 183.301 24.3289 182.782L64.5161 171.435C64.8934 171.338 65.2707 171.273 65.6481 171.273C67.126 171.273 68.5411 172.083 69.3272 173.445L99.9864 226.678L131.463 154.188C131.998 152.988 133.004 152.08 134.23 151.724L214.133 129.16C214.51 129.063 214.888 128.998 215.265 128.998C216.523 128.998 217.749 129.581 218.567 130.619L235.988 152.534L254.289 119.142C254.855 118.105 255.798 117.359 256.899 117.067L298.061 105.429C298.438 105.331 298.816 105.267 299.193 105.267C300.482 105.267 301.771 105.882 302.589 106.985C303.658 108.411 303.784 110.324 302.903 111.88L258.848 190.952V244.12C258.848 246.097 257.559 247.848 255.704 248.367L219.825 258.514C219.447 258.611 219.07 258.676 218.693 258.676C217.749 258.676 216.837 258.352 216.083 257.768C215.014 256.926 214.385 255.629 214.385 254.267V201.52L179.763 158.953V266.489C179.763 268.467 178.474 270.218 176.619 270.736L143.035 280.235C142.658 280.333 142.28 280.397 141.903 280.397C140.96 280.397 140.048 280.073 139.293 279.49C138.224 278.647 137.595 277.35 137.595 275.988V228.591L112.219 287.27C111.684 288.47 110.678 289.378 109.451 289.734L93.6659 294.176C93.2886 294.273 92.9112 294.338 92.5339 294.338C91.0559 294.338 89.6409 293.527 88.8548 292.166L63.2582 247.427V299.395C63.2582 301.373 61.969 303.124 60.1137 303.642L26.53 313.141C26.1527 313.238 25.7754 313.303 25.398 313.303L25.4923 313.271ZM323.626 229.045C322.683 229.045 321.771 228.721 321.016 228.137C319.947 227.294 319.318 225.997 319.318 224.636V102.803C319.318 100.825 320.607 99.0744 322.462 98.5557L400.95 76.3806C401.327 76.2834 401.705 76.2185 402.082 76.2185C402.208 76.2185 402.334 76.2185 402.46 76.2185C402.868 75.9268 403.309 75.6998 403.812 75.5377L439.691 65.3904C440.068 65.2931 440.445 65.2283 440.823 65.2283C441.766 65.2283 442.678 65.5525 443.433 66.136C444.502 66.9789 445.131 68.2757 445.131 69.6373V131.915C445.131 142.906 447.489 147.444 449.439 149.357C450.948 150.816 453.055 151.529 455.917 151.529C458.023 151.529 460.476 151.14 463.243 150.362C470.413 148.352 475.444 144.981 478.589 140.085C481.828 135.093 483.463 127.895 483.463 118.688V56.4101C483.463 54.4325 484.752 52.6819 486.607 52.1632L522.486 42.0158C522.864 41.9186 523.241 41.8537 523.619 41.8537C523.87 41.8537 524.122 41.8537 524.405 41.9186C524.876 41.4971 525.442 41.1729 526.103 40.9784L618.08 15.0103C618.458 14.913 618.835 14.8482 619.212 14.8482C619.621 14.8482 619.999 14.913 620.407 15.0103C620.942 14.4267 621.602 14.0053 622.388 13.7783L658.268 3.63097C658.645 3.53371 659.022 3.46887 659.4 3.46887C660.343 3.46887 661.255 3.79307 662.01 4.37662C663.079 5.21953 663.708 6.51632 663.708 7.87794V89.4133L694.87 80.5952C695.247 80.4979 695.625 80.4331 696.002 80.4331C696.945 80.4331 697.857 80.7573 698.612 81.3408C699.681 82.1837 700.31 83.4805 700.31 84.8422V119.369C700.31 121.347 699.021 123.097 697.166 123.616L624.715 144.073C624.338 144.17 623.961 144.235 623.583 144.235C623.175 144.235 622.797 144.17 622.388 144.073C621.854 144.656 621.193 145.078 620.407 145.305L528.43 171.273C528.052 171.37 527.675 171.435 527.298 171.435C526.354 171.435 525.442 171.111 524.688 170.527C523.618 169.684 522.99 168.388 522.99 167.026V143.651C520.443 151.043 516.952 157.754 512.518 163.719C502.267 177.465 486.576 187.418 465.853 193.286C456.923 195.815 448.81 197.079 441.735 197.079C431.861 197.079 423.622 194.615 417.27 189.72C409.503 183.754 404.441 174.385 402.176 161.742L363.876 172.57V214.423C363.876 216.401 362.587 218.152 360.731 218.67L324.852 228.818C324.475 228.915 324.098 228.98 323.72 228.98L323.626 229.045ZM363.782 133.31L400.699 122.87V118.396L363.782 128.836V133.31ZM567.359 120.147L618.049 105.818C618.426 105.72 618.804 105.656 619.181 105.656V99.6255L567.359 114.279V120.147ZM567.359 75.7971L617.609 61.5973C617.986 61.5 618.363 61.4352 618.741 61.4352C618.898 61.4352 619.055 61.4352 619.181 61.4352V54.9188L567.359 69.5725V75.7647V75.7971Z"
        fill="#23211F"
      ></path>
      <path
        d="M141.997 275.924V207.745L108.413 285.39L92.6278 289.864L59.0441 231.184V299.363L25.4604 308.862V187.029L65.6476 175.682L100.521 236.242L135.393 156.003L175.581 144.656V266.489L141.997 275.988V275.924ZM254.634 189.752V244.12L218.755 254.267V199.9L174.134 145.046L215.296 133.407L236.679 160.315L258.062 121.314L299.224 109.676L254.603 189.752H254.634ZM359.505 125.432V139.08L401.83 127.117V157.3L359.505 169.263V214.488L323.625 224.636V102.803L402.113 80.6277V113.404L359.505 125.432ZM509.059 161.093C499.342 174.126 484.563 183.463 464.658 189.071C444.564 194.745 429.596 193.805 419.754 186.218C409.912 178.632 404.975 164.789 404.975 144.656V79.7848L440.854 69.6374V131.948C440.854 142.063 442.741 148.968 446.514 152.599C450.287 156.263 456.231 156.911 464.375 154.642C472.488 152.34 478.431 148.32 482.173 142.549C485.915 136.779 487.77 128.836 487.77 118.721V56.4102L523.65 46.2629V111.135C523.65 131.397 518.807 148.028 509.09 161.061L509.059 161.093ZM619.181 110.065V141.123L527.203 167.091V45.2903L619.181 19.3222V50.3802L563.082 66.2334V81.6003L618.74 65.8768V95.2165L563.082 110.94V125.95L619.181 110.097V110.065ZM623.489 139.923V18.0902L659.368 7.94287V95.2489L695.939 84.9071V119.434L623.489 139.891V139.923Z"
        fill="white"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M139.702 356C139.136 356 138.601 355.806 138.161 355.449C137.532 354.963 137.155 354.152 137.155 353.342V275.826C137.155 274.627 137.909 273.589 139.041 273.265L575.723 146.958C575.943 146.893 576.195 146.861 576.415 146.861C576.981 146.861 577.516 147.055 577.956 147.412C578.585 147.898 578.962 148.709 578.962 149.519V227.035C578.962 228.234 578.207 229.272 577.075 229.596L140.393 355.903C140.173 355.968 139.922 356 139.702 356Z"
        fill="#AEB0B3"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M139.702 275.826L576.384 149.519V227.035L139.702 353.342V275.826Z"
        style={{ fill: snap.SelectedColor, transition: "fill ease-in 0.5s" }}
      ></path>
      <path
        d="M188.096 306.56V314.827L159.575 322.9V290.48L188.096 282.407V290.674L170.707 295.602V299.687L187.971 294.792V302.605L170.707 307.5V311.488L188.096 306.56ZM216.9 306.69L202.624 292.068V310.71L191.681 313.79V281.37L203.819 277.934L218.473 293.073V273.784L229.416 270.671V303.091L216.9 306.625V306.69ZM262.15 285.617V293.884L233.629 301.956V269.537L262.15 261.464V269.731L244.761 274.659V278.744L262.024 273.849V281.662L244.761 286.557V290.545L262.15 285.617ZM296.866 267.624C296.268 269.213 295.357 270.607 294.099 271.871C292.841 273.135 291.269 274.205 289.413 275.048L300.325 283.088L286.741 286.914L276.867 279.036V289.702L265.735 292.847V260.427L284.948 254.98C287.873 254.137 290.388 254.008 292.432 254.527C294.508 255.078 295.954 256.212 296.866 257.931C297.463 259.065 297.746 260.589 297.746 262.404C297.746 263.312 297.684 264.22 297.526 265.128C297.369 266.035 297.149 266.846 296.866 267.559V267.624ZM286.363 264.674C286.049 264.025 285.483 263.636 284.697 263.442C283.91 263.28 282.967 263.345 281.867 263.636L276.835 265.063V272.649L281.867 271.223C283.03 270.898 283.973 270.477 284.728 269.958C285.483 269.44 286.017 268.759 286.363 267.948C286.552 267.462 286.615 266.846 286.615 266.133C286.615 265.517 286.52 265.03 286.363 264.706V264.674ZM319.821 258.968L341.487 252.841V253.489C341.487 255.467 341.361 257.185 341.078 258.611C340.827 260.038 340.355 261.562 339.757 263.183C338.311 266.911 335.921 270.056 332.651 272.649C329.349 275.243 325.387 277.188 320.733 278.517C317.588 279.392 314.695 279.879 312.023 279.911C309.381 279.911 307.054 279.49 305.136 278.582C303.186 277.674 301.771 276.248 300.828 274.335C299.885 272.39 299.413 270.023 299.413 267.203C299.413 264.544 299.948 261.886 301.017 259.227C302.495 255.467 304.947 252.29 308.375 249.728C311.803 247.167 315.922 245.19 320.733 243.828C324.066 242.888 327.116 242.466 329.884 242.531C332.651 242.596 335.009 243.277 336.896 244.509C337.902 245.157 338.846 246.065 339.663 247.2C340.512 248.334 341.047 249.501 341.298 250.636L329.003 254.105C328.657 253.424 328.217 252.938 327.682 252.549C326.299 251.641 324.066 251.641 321.047 252.484C318.878 253.1 317.022 254.008 315.513 255.207C313.972 256.407 312.903 257.833 312.243 259.487C311.991 260.2 311.771 260.881 311.677 261.497C311.551 262.113 311.488 262.858 311.488 263.766C311.488 265.322 311.74 266.619 312.211 267.592C312.872 268.921 313.972 269.731 315.513 270.12C317.054 270.477 318.878 270.38 320.953 269.764C322.966 269.18 324.758 268.402 326.267 267.397C327.808 266.392 328.814 265.225 329.349 263.831C329.412 263.636 329.475 263.474 329.538 263.377L319.884 266.1V259.033L319.821 258.968ZM361.989 251.155V265.614L350.858 268.759V254.3L337.022 240.262L349.789 236.663L356.424 243.569L363.058 232.903L375.825 229.304L361.989 251.187V251.155ZM422.553 239.387C419.849 246.227 413.906 250.928 404.755 253.521L385.636 258.936V226.516L404.755 221.102C409.315 219.805 413.12 219.513 416.107 220.162C419.094 220.843 421.264 222.528 422.553 225.252C423.434 227.1 423.874 229.336 423.874 231.898C423.874 234.621 423.434 237.117 422.553 239.387ZM411.17 231.671C410.604 230.633 409.755 230.017 408.623 229.79C407.491 229.563 405.95 229.725 404.032 230.277L396.768 232.319V246.875L404.032 244.833C405.95 244.282 407.522 243.536 408.686 242.596C409.849 241.656 410.698 240.521 411.233 239.16C411.673 238.057 411.893 236.761 411.893 235.302C411.893 233.843 411.642 232.643 411.17 231.703V231.671ZM457.678 222.107C457.08 223.695 456.168 225.089 454.91 226.354C453.653 227.618 452.08 228.688 450.225 229.531L461.137 237.571L447.552 241.397L437.678 233.519V244.185L426.547 247.329V214.91L445.76 209.463C448.684 208.62 451.2 208.491 453.244 209.009C455.319 209.56 456.766 210.695 457.678 212.413C458.275 213.548 458.558 215.072 458.558 216.887C458.558 217.795 458.495 218.703 458.338 219.611C458.181 220.518 457.961 221.329 457.678 222.042V222.107ZM447.175 219.157C446.86 218.508 446.294 218.119 445.508 217.925C444.722 217.763 443.779 217.827 442.678 218.119L437.647 219.546V227.132L442.678 225.705C443.842 225.381 444.785 224.96 445.54 224.441C446.294 223.922 446.829 223.242 447.175 222.431C447.364 221.945 447.458 221.329 447.458 220.616C447.458 220 447.364 219.513 447.175 219.189V219.157ZM462.646 237.15V204.73L473.778 201.585V234.005L462.646 237.15ZM503.242 225.673L488.966 211.052V229.693L478.023 232.805V200.386L490.161 196.949L504.814 212.089V192.8L515.757 189.687V222.107L503.242 225.641V225.673ZM558.46 210.047L544.121 214.099L531.071 204.114V217.795L519.939 220.94V188.52L531.071 185.375V197.046L542.863 182.036L556.919 178.049L541.071 197.5L558.429 210.047H558.46Z"
        fill="white"
      ></path>
    </svg>
  );
}