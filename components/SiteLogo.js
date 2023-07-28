import Link from "next/link";

export default function SiteLogo() {
  return (
    <Link href="https://www.nftaula.io/">
      <svg
        className="w-12 md:w-16"
        viewBox="0 0 918 970"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="738" cy="232" r="180" fill="url(#paint0_linear_9_12)" />
        <circle cx="578" cy="98" r="98" fill="url(#paint1_linear_9_12)" />
        <path
          d="M898 730C898 818.366 826.366 890 738 890C649.634 890 578 818.366 578 730C578 641.634 649.634 570 738 570C826.366 570 898 641.634 898 730Z"
          fill="url(#paint2_linear_9_12)"
        />
        <circle cx="240" cy="238" r="140" fill="url(#paint3_linear_9_12)" />
        <rect x="298" y="292" width="452" height="416" rx="32" fill="#6366F1" />
        <path
          d="M517.072 360C520.151 354.667 527.849 354.667 530.928 360L672.956 606C676.036 611.333 672.187 618 666.028 618H381.972C375.813 618 371.964 611.333 375.044 606L517.072 360Z"
          fill="white"
        />
        <circle cx="240" cy="730" r="240" fill="url(#paint4_linear_9_12)" />
        <defs>
          <linearGradient
            id="paint0_linear_9_12"
            x1="558"
            y1="412"
            x2="918"
            y2="52"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3730A3" />
            <stop offset="1" stop-color="#312E81" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_9_12"
            x1="578"
            y1="0"
            x2="578"
            y2="196"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#312E81" />
            <stop offset="1" stop-color="#4338CA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_9_12"
            x1="578"
            y1="570"
            x2="898"
            y2="890"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4338CA" />
            <stop offset="1" stop-color="#312E81" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_9_12"
            x1="380"
            y1="378"
            x2="100"
            y2="98"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4338CA" />
            <stop offset="1" stop-color="#312E81" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_9_12"
            x1="480"
            y1="490"
            x2="-4.29153e-05"
            y2="970"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#818CF8" />
            <stop offset="1" stop-color="#4338CA" />
          </linearGradient>
        </defs>
      </svg>
    </Link>
  );
}
