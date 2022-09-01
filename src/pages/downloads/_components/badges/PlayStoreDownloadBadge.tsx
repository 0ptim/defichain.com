import { SVGProps } from "react";

export function PlayStoreDownloadBadge(
  props: SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg width={169} height={48} viewBox="0 0 169 48" {...props}>
      <defs>
        <linearGradient
          x1="61.3497773%"
          y1="4.9481245%"
          x2="25.8300678%"
          y2="71.9074222%"
          id="linearGradient-1"
        >
          <stop stopColor="#00A0FF" offset="0%" />
          <stop stopColor="#00A1FF" offset="1%" />
          <stop stopColor="#00BEFF" offset="26%" />
          <stop stopColor="#00D2FF" offset="51%" />
          <stop stopColor="#00DFFF" offset="76%" />
          <stop stopColor="#00E3FF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="107.684729%"
          y1="50%"
          x2="-130.640394%"
          y2="50%"
          id="linearGradient-2"
        >
          <stop stopColor="#FFE000" offset="0%" />
          <stop stopColor="#FFBD00" offset="41%" />
          <stop stopColor="#FFA500" offset="78%" />
          <stop stopColor="#FF9C00" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="86.219293%"
          y1="31.4424756%"
          x2="-50.1497903%"
          y2="133.594729%"
          id="linearGradient-3"
        >
          <stop stopColor="#FF3A44" offset="0%" />
          <stop stopColor="#C31162" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="-18.7537448%"
          y1="-10.1109359%"
          x2="42.1210306%"
          y2="35.5095868%"
          id="linearGradient-4"
        >
          <stop stopColor="#32A071" offset="0%" />
          <stop stopColor="#2DA771" offset="7%" />
          <stop stopColor="#15CF74" offset="48%" />
          <stop stopColor="#06E775" offset="80%" />
          <stop stopColor="#00F076" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="Assets"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="play-badge-android" fillRule="nonzero">
          <rect
            id="Background-Black"
            fill="#000"
            x="0"
            y="0"
            width="169"
            height="48"
            rx="5"
          />
          <path
            d="M85.0248112,25.8853588 C82.0991658,25.8984839 79.7373226,28.1677803 79.7464638,30.9568531 C79.7556582,33.745926 82.1323735,36.001067 85.0580478,35.9967188 C87.983722,35.992358 90.3530392,33.7301532 90.3530716,30.9410667 C90.3736272,29.5901503 89.8180389,28.2891513 88.8135601,27.3360539 C87.8090814,26.3829565 86.4417746,25.8594208 85.0248112,25.8853588 L85.0248112,25.8853588 Z M85.0248112,34.0101788 C83.7061321,34.0980949 82.4650912,33.4086251 81.8952648,32.2715352 C81.3254384,31.1344454 81.5426444,29.7808505 82.4429957,28.8581603 C83.3433469,27.93547 84.7438458,27.6312224 85.9746489,28.0909358 C87.2054521,28.5506492 88.0163972,29.6808861 88.019618,30.9410667 C88.060226,31.7293668 87.7651002,32.4998816 87.2012126,33.07776 C86.637325,33.6556385 85.8524911,33.9918788 85.0248112,34.0101788 L85.0248112,34.0101788 Z M73.4074567,25.8853588 C70.4801573,25.891925 68.1120489,28.1583418 68.1166314,30.9489786 C68.1212272,33.7396153 70.4967781,35.9989427 73.4240848,35.9967607 C76.3513914,35.9945755 78.7232306,33.7317069 78.7232387,30.9410667 C78.7437943,29.5901503 78.188206,28.2891513 77.1837273,27.3360539 C76.1792486,26.3829565 74.8119417,25.8594208 73.3949784,25.8853588 L73.4074567,25.8853588 Z M73.4074567,34.0101788 C72.0880893,34.1030528 70.8434299,33.4170209 70.2695877,32.2806468 C69.6957456,31.1442727 69.9095509,29.7889143 70.8086051,28.8636982 C71.7076593,27.9384821 73.1089214,27.6317758 74.3412797,28.0904714 C75.5736381,28.5491669 76.3861932,29.6798771 76.3897851,30.9410667 C76.4303932,31.7293668 76.1352674,32.4998816 75.5713797,33.07776 C75.0074921,33.6556385 74.2226583,33.9918788 73.3949784,34.0101788 L73.4074567,34.0101788 Z M59.5689539,27.4437064 L59.5689539,29.5849474 L64.9596061,29.5849474 C64.8750819,30.5934764 64.435321,31.545128 63.7117699,32.2852902 C62.6211897,33.3442822 61.1119572,33.9146057 59.5564756,33.8555336 C56.2485034,33.8555336 53.5668621,31.2990903 53.5668621,28.1455576 C53.5668621,24.9920249 56.2485034,22.4355816 59.5564756,22.4355816 C61.0760851,22.4119552 62.5434982,22.9638163 63.6368997,23.9701376 L65.2216516,22.4593731 C63.7303871,21.0198146 61.6911718,20.2173203 59.5689539,20.2348616 C56.5478936,20.1227784 53.7046151,21.5953488 52.1591208,24.0725092 C50.6136264,26.5496697 50.6136264,29.6343835 52.1591208,32.1115439 C53.7046151,34.5887043 56.5478936,36.0612747 59.5689539,35.9491915 C61.7299129,36.0422812 63.8274951,35.2398177 65.3214785,33.7484716 C66.6288062,32.3791736 67.326805,30.5791508 67.2681029,28.728451 C67.2721295,28.2775868 67.2303399,27.8274106 67.1433193,27.3842275 L59.5689539,27.4437064 Z M116.10841,29.1091161 C115.442164,27.2405384 113.635108,25.9579861 111.566286,25.8853496 C110.186633,25.8827872 108.867397,26.4247226 107.92183,27.382483 C106.976263,28.3402435 106.48871,29.6283945 106.574941,30.9410667 C106.544296,32.2844529 107.088007,33.5819643 108.081145,34.5354658 C109.074282,35.4889672 110.431452,36.0164726 111.84081,35.9967746 C113.613809,36.0058856 115.273162,35.1657894 116.25815,33.7603674 L114.448788,32.570789 C113.899423,33.4438707 112.908778,33.9770693 111.84081,33.9744915 C110.734717,34.0146815 109.715297,33.4061107 109.270268,32.4399354 L116.370455,29.6444263 L116.10841,29.1091161 Z M108.87096,30.7983173 C108.819863,30.0550262 109.084746,29.3234126 109.605894,28.7684103 C110.127041,28.2134079 110.860585,27.8817349 111.641156,27.848163 C112.463942,27.7964777 113.239717,28.2177442 113.612737,28.9187835 L108.87096,30.7983173 Z M103.105957,35.6993801 L105.439411,35.6993801 L105.439411,20.8296508 L103.105957,20.8296508 L103.105957,35.6993801 Z M99.2875784,27.0154582 L99.2002298,27.0154582 C98.488916,26.2573123 97.4720481,25.8245475 96.4050769,25.8258768 C93.5726721,25.9568187 91.3467698,28.1841946 91.3467698,30.8875357 C91.3467698,33.5908767 93.5726721,35.8182526 96.4050769,35.9491915 C97.4755068,35.9663497 98.4989658,35.5307797 99.2002298,34.7596132 L99.2751,34.7596132 L99.2751,35.485256 C99.2751,37.4242686 98.1894826,38.4592018 96.442512,38.4592018 C95.2524544,38.4326473 94.1973154,37.7228926 93.7721426,36.6629385 L91.7381697,37.4718518 C92.5214135,39.288113 94.3826225,40.4694207 96.442512,40.4577799 C99.1752731,40.4577799 101.433857,38.9231374 101.433857,35.1878614 L101.433857,26.1827533 L99.2875784,26.1827533 L99.2875784,27.0154582 Z M96.617209,34.0101788 C94.9487118,33.8699987 93.6690418,32.5378318 93.6690418,30.9410667 C93.6690418,29.3443016 94.9487118,28.0121347 96.617209,27.8719546 C97.4234604,27.911398 98.1788584,28.2594837 98.7121385,28.8372932 C99.2454186,29.4151028 99.5114064,30.1736898 99.4497971,30.9410667 C99.5185963,31.7119722 99.2534594,32.4761356 98.7160323,33.0558844 C98.1786053,33.6356333 97.4157124,33.9804558 96.6047307,34.0101788 L96.617209,34.0101788 Z M127.039454,20.8296508 L121.461627,20.8296508 L121.461627,35.6993801 L123.79508,35.6993801 L123.79508,30.0607787 L127.051933,30.0607787 C128.864644,30.1849277 130.59825,29.3333622 131.544305,27.8540788 C132.49036,26.3747953 132.49036,24.5156343 131.544305,23.0363508 C130.59825,21.5570673 128.864644,20.7055019 127.051933,20.8296508 L127.039454,20.8296508 Z M127.039454,27.9671208 L123.782602,27.9671208 L123.782602,22.8995171 L127.089368,22.8995171 C128.567618,22.8995171 129.765976,24.0419277 129.765976,25.4511627 C129.765976,26.8603976 128.567618,28.0028082 127.089368,28.0028082 L127.039454,27.9671208 Z M141.427005,25.8258798 C139.690906,25.7269533 138.058704,26.6194333 137.271711,28.0979745 L139.343119,28.9187835 C139.760402,28.1856085 140.592358,27.7563937 141.46444,27.8243714 C142.062812,27.7577487 142.664177,27.9230709 143.133456,28.2832039 C143.602736,28.643337 143.900589,29.1680893 143.960112,29.7395926 L143.960112,29.8942378 C143.210653,29.5159508 142.374852,29.3198203 141.526832,29.3232402 C139.293205,29.3232402 137.034622,30.5128185 137.034622,32.6659553 C137.079154,33.59348 137.515339,34.4643949 138.243939,35.0805583 C138.972539,35.6967216 139.931596,36.0057353 140.902914,35.9372957 C142.099875,36.0192376 143.248308,35.4718294 143.89772,34.5098017 L143.972591,34.5098017 L143.972591,35.6993801 L146.218696,35.6993801 L146.218696,29.9775082 C146.218696,27.3723317 144.147288,25.8615672 141.489397,25.8615672 L141.427005,25.8258798 Z M141.140003,33.9744915 C140.378823,33.9744915 139.318162,33.6057222 139.318162,32.7135384 C139.318162,31.5239601 140.640868,31.1313992 141.813834,31.1313992 C142.555101,31.1139623 143.287692,31.2865053 143.935156,31.6310221 C143.773805,32.962654 142.608111,33.9775136 141.202394,34.0101788 L141.140003,33.9744915 Z M154.404501,26.1827533 L151.734131,32.6302679 L151.659261,32.6302679 L148.889065,26.1827533 L146.393393,26.1827533 L150.548687,35.1997571 L148.177798,40.207882 L150.611079,40.207882 L157,26.1827533 L154.404501,26.1827533 Z M133.428375,35.6993801 L135.761829,35.6993801 L135.761829,20.8296508 L133.428375,20.8296508 L133.428375,35.6993801 Z"
            id="Google-Play"
            fill="#FFFFFF"
          />
          <path
            d="M58.6596701,11.8626419 C58.7029817,12.7725301 58.3612073,13.6599111 57.7140999,14.3177149 C56.9909905,15.0490851 55.9824252,15.4463436 54.9404272,15.4102224 C53.3422122,15.3980437 51.9072248,14.4542368 51.298963,13.0151915 C50.6907012,11.5761461 51.0277025,9.92230253 52.154147,8.8183514 C52.88606,8.09082239 53.894726,7.69087806 54.9404272,7.71356855 C55.4734233,7.71183948 56.0011502,7.81627446 56.4911624,8.02045267 C56.9473742,8.19961599 57.3535023,8.48146205 57.6762771,8.84290213 L57.0080741,9.49349647 C56.4979034,8.90265424 55.7320395,8.57982861 54.9404272,8.62194556 C54.1446976,8.61814495 53.3817233,8.93016482 52.8274384,9.48605655 C52.2731536,10.0419483 51.9754069,10.7937245 52.0028558,11.5680331 C51.985964,12.7381083 52.6937228,13.8031801 53.7968335,14.267703 C54.8999443,14.7322259 56.1817624,14.5049703 57.0458969,13.6916713 C57.4338448,13.2823328 57.6575964,12.7507662 57.6762771,12.1940768 L54.9404272,12.1940768 L54.9404272,11.3102505 L58.6092397,11.3102505 C58.6428681,11.492557 58.659745,11.6774185 58.6596701,11.8626419 L58.6596701,11.8626419 Z M64.4339522,8.79380067 L61.0298994,8.79380067 L61.0298994,11.12612 L64.1313698,11.12612 L64.1313698,12.0099463 L61.0298994,12.0099463 L61.0298994,14.3422656 L64.4339522,14.3422656 L64.4339522,15.2506426 L60.0212912,15.2506426 L60.0212912,7.88542366 L64.4339522,7.88542366 L64.4339522,8.79380067 Z M68.569246,15.2506426 L67.5984606,15.2506426 L67.5984606,8.79380067 L65.4803833,8.79380067 L65.4803833,7.88542366 L70.7377537,7.88542366 L70.7377537,8.79380067 L68.569246,8.79380067 L68.569246,15.2506426 Z M74.4443889,15.2506426 L74.4443889,7.88542366 L75.4151743,7.88542366 L75.4151743,15.2506426 L74.4443889,15.2506426 Z M79.7269745,15.2506426 L78.7561891,15.2506426 L78.7561891,8.79380067 L76.6381118,8.79380067 L76.6381118,7.88542366 L81.8324442,7.88542366 L81.8324442,8.79380067 L79.7269745,8.79380067 L79.7269745,15.2506426 Z M91.6789821,14.2931642 C90.144624,15.7787631 87.6659949,15.7787631 86.1316368,14.2931642 C84.6442787,12.7602582 84.6442787,10.3635328 86.1316368,8.83062676 C86.8653973,8.11097943 87.8638153,7.7062438 88.9053095,7.7062438 C89.9468036,7.7062438 90.9452216,8.11097943 91.6789821,8.83062676 C93.1726874,10.36107 93.1726874,12.762721 91.6789821,14.2931642 L91.6789821,14.2931642 Z M86.8502702,13.6793959 C87.9866236,14.7811898 89.8239953,14.7811898 90.9603487,13.6793959 C92.0763716,12.4815304 92.0763716,10.6545359 90.9603487,9.45667037 C89.8239953,8.35487649 87.9866236,8.35487649 86.8502702,9.45667037 C85.7342473,10.6545359 85.7342473,12.4815304 86.8502702,13.6793959 L86.8502702,13.6793959 Z M94.1626799,15.2506426 L94.1626799,7.88542366 L95.3477945,7.88542366 L99.0292146,13.6180191 L99.0292146,7.88542366 L100,7.88542366 L100,15.2506426 L98.9913918,15.2506426 L95.1460729,9.24798917 L95.1460729,15.2506426 L94.1626799,15.2506426 Z"
            id="GET-IT-ON"
            stroke="#FFFFFF"
            strokeWidth="0.2"
            fill="#FFFFFF"
          />
          <g id="Icon" transform="translate(12.202800, 7.870353)">
            <path
              d="M0.5828,0.496108633 C0.178640546,0.974287547 -0.0253534739,1.58643959 0.0124,2.20778394 L0.0124,29.2522538 C-0.0253534739,29.8735981 0.178640546,30.4857501 0.5828,30.9639291 L0.6696,31.0495128 L16.0332,15.9134126 L16.0332,15.5588513 L0.6696,0.410524868 L0.5828,0.496108633 Z"
              id="Shape"
              fill="url(#linearGradient-1)"
            />
            <path
              d="M21.1172,20.9628548 L16.0332,15.9134126 L16.0332,15.5588513 L21.1172,10.4971829 L21.2288,10.5583142 L27.3172,13.9694385 C29.0532,14.9353125 29.0532,16.5247252 27.3172,17.5028254 L21.2536,20.9017235 L21.1172,20.9628548 Z"
              id="Shape"
              fill="url(#linearGradient-2)"
            />
            <path
              d="M21.266,20.8894973 L16.0332,15.7300188 L0.5828,30.9639291 C1.31280998,31.596665 2.39621191,31.6274791 3.162,31.0372866 L21.2784,20.8894973"
              id="Shape"
              fill="url(#linearGradient-3)"
            />
            <path
              d="M21.266,10.5705404 L3.1496,0.42275112 C2.38381191,-0.167441383 1.30040998,-0.136627304 0.5704,0.496108633 L16.0332,15.7300188 L21.266,10.5705404 Z"
              id="Shape"
              fill="url(#linearGradient-4)"
            />
            <path
              d="M21.1172,20.779461 L3.1496,30.866119 C2.41432778,31.4081534 1.40487222,31.4081534 0.6696,30.866119 L0.5828,30.9517028 L0.6696,31.0372866 C1.40348877,31.5834079 2.41571123,31.5834079 3.1496,31.0372866 L21.266,20.8894973 L21.1172,20.779461 Z"
              id="Shape"
              fill="#000000"
              opacity="0.2"
            />
            <path
              d="M0.5828,30.7927615 C0.178640546,30.3145826 -0.0253534739,29.7024306 0.0124,29.0810862 L0.0124,29.26448 C-0.0253534739,29.8858244 0.178640546,30.4979764 0.5828,30.9761553 L0.6696,30.8905715 L0.5828,30.7927615 Z M27.3172,17.3194316 L21.1172,20.779461 L21.2288,20.8894973 L27.3172,17.4905992 C28.0203669,17.1649079 28.4933008,16.4934256 28.5572,15.7300188 C28.4158766,16.420604 27.9579154,17.0076115 27.3172,17.3194316 Z"
              id="Shape"
              fill="#000000"
              opacity="0.12"
            />
            <path
              d="M3.1496,0.59391865 L27.3172,14.1406061 C27.9579154,14.4524262 28.4158766,15.0394337 28.5572,15.7300188 C28.4933008,14.9666121 28.0203669,14.2951298 27.3172,13.9694385 L3.1496,0.42275112 C1.4136,-0.543122802 0,0.263809842 0,2.22001019 L0,2.40340397 C0.0372,0.434977372 1.426,-0.371955271 3.1496,0.59391865 L3.1496,0.59391865 Z"
              id="Shape"
              fill="#FFFFFF"
              opacity="0.25"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
