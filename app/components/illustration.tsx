const ILLUSTRATION_ARIA_LABEL =
  'Vercel and Next.js logos side-by-side, surrounded by multiple growing ellipses with orbiting circles on top.';

function NextLogo() {
  return (
    <>
      <mask
        id="a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={87}
        height={87}
      >
        <circle cx={43.5} cy={43.5} r={43.5} fill="#000" />
      </mask>
      <g mask="url(#a)">
        <circle
          cx={43.5}
          cy={43.5}
          r={41.8333}
          fill="#000"
          stroke="#fff"
          strokeWidth={3.33333}
        />
        <path
          d="M72.262 76.135L33.42 26.1H26.1v34.786h5.855v-27.35l35.711 46.14a43.672 43.672 0 004.596-3.541z"
          fill="url(#paint0_linear_152_20)"
        />
        <path
          fill="url(#paint1_linear_152_20)"
          d="M55.5834 26.1001H61.383399999999995V60.900099999999995H55.5834z"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_152_20"
          x1={52.6833}
          y1={56.3084}
          x2={69.8416}
          y2={77.5751}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_152_20"
          x1={58.4834}
          y1={26.1001}
          x2={58.3863}
          y2={51.6564}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
    </>
  );
}

export function Illustration() {
  return (
    <>
      <svg
        width="779"
        height="779"
        viewBox="0 0 779 779"
        fill="none"
        className="illustration"
        data-theme="light"
        aria-label={ILLUSTRATION_ARIA_LABEL}
        style={
          {
            '--circle-opacity': 0.1,
          } as React.CSSProperties
        }
      >
        <circle
          opacity="0.1"
          cx="389.214"
          cy="389"
          r="160.417"
          stroke="url(#paint0_linear_131_9)"
          strokeWidth="1.16501"
          data-index={2}
        />
        <circle
          opacity="0.1"
          cx="387.214"
          cy="389"
          r="103.417"
          data-index={1}
          stroke="url(#paint1_linear_131_9)"
          strokeWidth="1.16501"
        />
        <circle
          data-index={0}
          opacity="0.1"
          cx="387.214"
          cy="389"
          r="53.4175"
          stroke="url(#paint2_linear_131_9)"
          strokeWidth="1.16501"
        />
        <circle
          opacity="0.1"
          cx="389.089"
          cy="389.089"
          r="267.295"
          data-index={3}
          stroke="url(#paint3_linear_131_9)"
          strokeWidth="1.16501"
        />
        <circle
          opacity="0.1"
          cx="389.089"
          cy="389.089"
          r="388.507"
          data-index={4}
          stroke="url(#paint4_linear_131_9)"
          strokeWidth="1.16501"
        />
        <circle
          style={
            {
              '--circle-opacity': 1,
            } as React.CSSProperties
          }
          className="orbit"
          cx="145.622"
          cy="499.408"
          r="5.65757"
          transform="rotate(180 145.622 499.408)"
          fill="white"
          stroke="#2F77D1"
          strokeWidth="1.5"
          data-index={0}
        />
        <circle
          style={
            {
              '--circle-opacity': 1,
            } as React.CSSProperties
          }
          className="orbit"
          cx="152.622"
          cy="264.408"
          r="5.65757"
          transform="rotate(180 152.622 264.408)"
          fill="white"
          stroke="#2F77D1"
          strokeWidth="1.5"
          data-index={1}
        />
        <circle
          style={
            {
              '--circle-opacity': 1,
            } as React.CSSProperties
          }
          className="orbit"
          cx="319.622"
          cy="310.408"
          r="5.65757"
          transform="rotate(180 319.622 310.408)"
          fill="white"
          stroke="black"
          strokeWidth="1.5"
          data-index={2}
        />
        <circle
          style={
            {
              '--circle-opacity': 1,
            } as React.CSSProperties
          }
          className="orbit"
          cx="491.622"
          cy="264.408"
          r="5.65757"
          transform="rotate(180 491.622 264.408)"
          fill="white"
          stroke="#2F77D1"
          strokeWidth="1.5"
          data-index={3}
        />
        <circle
          style={
            {
              '--circle-opacity': 1,
            } as React.CSSProperties
          }
          className="orbit"
          cx="640.622"
          cy="482.408"
          r="5.82506"
          transform="rotate(180 640.622 482.408)"
          fill="white"
          stroke="black"
          strokeWidth="1.16501"
          data-index={4}
        />
        <path d="M305.589 429L259.401 349L213.214 429H305.589Z" fill="black" />
        <path
          d="M388.214 371.5V406.5"
          stroke="#999999"
          strokeWidth="3.5625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M370.714 389H405.714"
          stroke="#999999"
          strokeWidth="3.5625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <NextLogo />
        <defs>
          <linearGradient
            id="paint0_linear_131_9"
            x1="389.214"
            y1="228"
            x2="389.214"
            y2="550"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.463542" stopColor="#323232" />
            <stop offset="1" stopColor="#333333" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_131_9"
            x1="387.214"
            y1="285"
            x2="387.214"
            y2="493"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.463542" stopColor="#464646" />
            <stop offset="1" stopColor="#333333" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_131_9"
            x1="387.214"
            y1="335"
            x2="387.214"
            y2="443"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.463542" stopColor="#666666" />
            <stop offset="1" stopColor="#333333" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_131_9"
            x1="389.089"
            y1="121.211"
            x2="389.089"
            y2="656.967"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.09375" stopColor="#1E1E1E" stopOpacity="0" />
            <stop offset="0.463542" stopColor="#2E2E2E" />
            <stop offset="0.901042" stopColor="#333333" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_131_9"
            x1="389.089"
            y1="0"
            x2="389.089"
            y2="778.178"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.208333" stopColor="#171717" stopOpacity="0" />
            <stop offset="0.463542" stopColor="#151515" />
            <stop offset="0.786458" stopColor="#333333" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_131_9">
            <rect
              width="77"
              height="86.8488"
              fill="white"
              transform="translate(496 347)"
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        width="779"
        height="779"
        viewBox="0 0 779 779"
        fill="none"
        className="illustration"
        data-theme="dark"
        aria-label={ILLUSTRATION_ARIA_LABEL}
        style={
          {
            '--circle-opacity': 1,
          } as React.CSSProperties
        }
      >
        <circle
          data-index={2}
          cx="389.214"
          cy="389"
          r="160.417"
          stroke="url(#paint0_linear_12_112)"
          strokeWidth="1.16501"
        />
        <circle
          data-index={1}
          cx="387.214"
          cy="389"
          r="103.417"
          stroke="url(#paint1_linear_12_112)"
          strokeWidth="1.16501"
        />
        <circle
          data-index={0}
          cx="387.214"
          cy="389"
          r="53.4175"
          stroke="url(#paint2_linear_12_112)"
          strokeWidth="1.16501"
        />
        <circle
          data-index={3}
          cx="389.089"
          cy="389.089"
          r="267.295"
          stroke="url(#paint3_linear_12_112)"
          strokeWidth="1.16501"
        />
        <circle
          data-index={4}
          cx="389.089"
          cy="389.089"
          r="388.507"
          stroke="url(#paint4_linear_12_112)"
          strokeWidth="1.16501"
        />
        <g className="orbit" data-index={0} filter="url(#filter0_d_12_112)">
          <circle
            cx="145.622"
            cy="499.408"
            r="6.40757"
            transform="rotate(180 145.622 499.408)"
            fill="black"
          />
          <circle
            cx="145.622"
            cy="499.408"
            r="5.82506"
            transform="rotate(180 145.622 499.408)"
            stroke="#2F77D1"
            strokeWidth="1.16501"
          />
        </g>
        <g className="orbit" data-index={1} filter="url(#filter1_d_12_112)">
          <circle
            cx="152.622"
            cy="264.408"
            r="6.40757"
            transform="rotate(180 152.622 264.408)"
            fill="black"
          />
          <circle
            cx="152.622"
            cy="264.408"
            r="5.82506"
            transform="rotate(180 152.622 264.408)"
            stroke="#2F77D1"
            strokeWidth="1.16501"
          />
        </g>
        <g className="orbit" data-index={2} filter="url(#filter2_d_12_112)">
          <circle
            cx="319.622"
            cy="310.408"
            r="6.40757"
            transform="rotate(180 319.622 310.408)"
            fill="black"
          />
          <circle
            cx="319.622"
            cy="310.408"
            r="5.82506"
            transform="rotate(180 319.622 310.408)"
            stroke="white"
            strokeWidth="1.16501"
          />
        </g>
        <g className="orbit" data-index={3} filter="url(#filter3_d_12_112)">
          <circle
            cx="491.622"
            cy="264.408"
            r="6.40757"
            transform="rotate(180 491.622 264.408)"
            fill="black"
          />
          <circle
            cx="491.622"
            cy="264.408"
            r="5.82506"
            transform="rotate(180 491.622 264.408)"
            stroke="#2F77D1"
            strokeWidth="1.16501"
          />
        </g>
        <g className="orbit" data-index={4} filter="url(#filter4_d_12_112)">
          <circle
            cx="640.622"
            cy="482.408"
            r="6.40757"
            transform="rotate(180 640.622 482.408)"
            fill="black"
          />
          <circle
            cx="640.622"
            cy="482.408"
            r="5.82506"
            transform="rotate(180 640.622 482.408)"
            stroke="white"
            strokeWidth="1.16501"
          />
        </g>
        <path d="M305.589 429L259.401 349L213.214 429H305.589Z" fill="white" />
        <path
          d="M388.214 371.5V406.5"
          stroke="#999999"
          strokeWidth="3.5625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M370.714 389H405.714"
          stroke="#999999"
          strokeWidth="3.5625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <NextLogo />
        <defs>
          <filter
            id="filter0_d_12_112"
            x="104.264"
            y="469.7"
            width="82.7159"
            height="82.716"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="11.6501" />
            <feGaussianBlur stdDeviation="17.4752" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_12_112"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_12_112"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_12_112"
            x="111.264"
            y="234.7"
            width="82.7159"
            height="82.716"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="11.6501" />
            <feGaussianBlur stdDeviation="17.4752" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_12_112"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_12_112"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_12_112"
            x="278.264"
            y="280.7"
            width="82.7159"
            height="82.716"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="11.6501" />
            <feGaussianBlur stdDeviation="17.4752" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_12_112"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_12_112"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d_12_112"
            x="450.264"
            y="234.7"
            width="82.7159"
            height="82.716"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="11.6501" />
            <feGaussianBlur stdDeviation="17.4752" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_12_112"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_12_112"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_d_12_112"
            x="599.264"
            y="452.7"
            width="82.7159"
            height="82.716"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="11.6501" />
            <feGaussianBlur stdDeviation="17.4752" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_12_112"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_12_112"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_12_112"
            x1="389.214"
            y1="228"
            x2="389.214"
            y2="550"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.463542" stopColor="#323232" />
            <stop offset="1" stopColor="#333333" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_12_112"
            x1="387.214"
            y1="285"
            x2="387.214"
            y2="493"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.463542" stopColor="#464646" />
            <stop offset="1" stopColor="#333333" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_12_112"
            x1="387.214"
            y1="335"
            x2="387.214"
            y2="443"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.463542" stopColor="#666666" />
            <stop offset="1" stopColor="#333333" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_12_112"
            x1="389.089"
            y1="121.212"
            x2="389.089"
            y2="656.967"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.09375" stopColor="#1E1E1E" stopOpacity="0" />
            <stop offset="0.463542" stopColor="#2E2E2E" />
            <stop offset="0.901042" stopColor="#333333" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_12_112"
            x1="389.089"
            y1="0"
            x2="389.089"
            y2="778.178"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.208333" stopColor="#171717" stopOpacity="0" />
            <stop offset="0.463542" stopColor="#151515" />
            <stop offset="0.786458" stopColor="#333333" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
