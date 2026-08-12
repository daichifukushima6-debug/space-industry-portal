window.SPACE_PROJECT_REGIONS = [
  {
    id: "north-america",
    num: "01",
    label: "アメリカ（北米）",
    en: "NORTH AMERICA",
    icon: "🌎",
    color: "#4f9cff",
    summary: "有人月探査、商業宇宙ステーション、安全保障打上げ、LEO通信網を中心に大型案件が進行。",
    projects: [
      {
        title: "Artemis / Moon to Mars",
        agency: "NASA・国際パートナー",
        status: "進行中",
        horizon: "2026–",
        desc: "月への有人帰還と持続的な月面活動を段階的に実現し、将来の火星探査へつなげる中核プログラム。",
        tags: ["月探査", "有人宇宙", "月面インフラ"],
        source: "https://www.nasa.gov/news-release/nasa-adds-mission-to-artemis-lunar-program-updates-architecture/"
      },
      {
        title: "Commercial LEO Destinations",
        agency: "NASA・米国民間企業",
        status: "開発中",
        horizon: "2030移行目標",
        desc: "ISS退役後を見据え、Axiom Station、Orbital Reef、Starlabなど民間低軌道拠点を育成する計画。",
        tags: ["商業宇宙ステーション", "LEO", "微小重力利用"],
        source: "https://www.nasa.gov/humans-in-space/commercial-space/commercial-space-stations/"
      },
      {
        title: "National Security Space Launch Phase 3",
        agency: "U.S. Space Force",
        status: "調達・実行中",
        horizon: "FY2026–",
        desc: "測位、軍事通信、偵察など重要衛星の打上げを複数事業者へ割り当て、国家安全保障の宇宙輸送を確保。",
        tags: ["安全保障", "打上げ", "調達"],
        source: "https://www.ssc.spaceforce.mil/Newsroom/Article/4348694/space-systems-command-releases-national-security-space-launch-phase-3-lane-2-fy"
      },
      {
        title: "Telesat Lightspeed",
        agency: "Telesat・カナダ政府",
        status: "構築中",
        horizon: "2026–2027",
        desc: "カナダ主導の低軌道通信コンステレーション。遠隔地、航空、海運、防衛向けの低遅延通信を目指す。",
        tags: ["衛星通信", "LEOコンステレーション", "カナダ"],
        source: "https://ised-isde.canada.ca/site/ised/en/parliamentary-committee-briefing-materials/appearance-standing-committee-public-safety-and-national-security"
      }
    ]
  },
  {
    id: "china",
    num: "02",
    label: "中国",
    en: "CHINA",
    icon: "🌕",
    color: "#ff6f7f",
    summary: "月南極、火星サンプルリターン、低軌道通信網を並行して進める国家規模の探査・インフラ計画。",
    projects: [
      {
        title: "嫦娥7号（Chang’e-7）",
        agency: "CNSA",
        status: "打上げ準備",
        horizon: "2026頃",
        desc: "月南極域の表面環境、水氷、揮発性物質を探査し、将来の国際月面研究ステーションへ基礎データを提供。",
        tags: ["月南極", "水資源", "ロボット探査"],
        source: "https://www.cnsa.gov.cn/english/n6465652/n6465653/c10517200/content.html"
      },
      {
        title: "嫦娥8号・ILRS基礎モデル",
        agency: "CNSA・国際パートナー",
        status: "開発中",
        horizon: "2029頃",
        desc: "月面資源利用の実験を行い、嫦娥7号とともに国際月面研究ステーションの基礎モデル構築を目指す。",
        tags: ["ILRS", "月面資源", "国際協力"],
        source: "https://www.cnsa.gov.cn/english/n6465652/n6465653/c10670293/content.html"
      },
      {
        title: "天問3号（Tianwen-3）",
        agency: "CNSA",
        status: "開発中",
        horizon: "2028–2031",
        desc: "2機の長征5号で火星へ向かい、表面試料を採取して地球へ持ち帰ることを目指すサンプルリターン計画。",
        tags: ["火星", "サンプルリターン", "深宇宙"],
        source: "https://www.cnsa.gov.cn/english/n6465652/n6465653/c10743241/content.html"
      },
      {
        title: "Spacesail（千帆星座）",
        agency: "中国商業宇宙セクター",
        status: "配備中",
        horizon: "2026–",
        desc: "多数の低軌道衛星で広域通信サービスを提供する商業コンステレーション。衛星群の継続的な打上げが進む。",
        tags: ["衛星通信", "メガコンステレーション", "商業宇宙"],
        source: "https://english.www.gov.cn/news/202605/13/content_WS6a03d20cc6d00ca5f9a0ae9d.html"
      }
    ]
  },
  {
    id: "europe",
    num: "03",
    label: "ヨーロッパ",
    en: "EUROPE",
    icon: "🇪🇺",
    color: "#4ee5d5",
    summary: "自律的な宇宙アクセス、安全な通信、次世代測位、地球観測、月圏サービスを一体的に強化。",
    projects: [
      {
        title: "IRIS² Secure Connectivity",
        agency: "European Union",
        status: "構築中",
        horizon: "2029–",
        desc: "LEOとMEOを組み合わせた290機規模の安全な通信網。政府、防災、重要インフラ、商用ブロードバンドを支援。",
        tags: ["安全な通信", "マルチオービット", "デジタル主権"],
        source: "https://defence-industry-space.ec.europa.eu/eu-space/iris2-secure-connectivity_en"
      },
      {
        title: "Ariane 6 Evolution",
        agency: "ESA・Arianespace",
        status: "運用・高度化",
        horizon: "2026–",
        desc: "欧州の自律的宇宙アクセスを担う大型ロケット。4ブースター型やP160Cなど能力向上を継続。",
        tags: ["打上げ", "大型ロケット", "欧州自律性"],
        source: "https://www.esa.int/Enabling_Support/Space_Transportation/Ariane/Watch_live_bigger_booster_more_powerful_Ariane_6_launch"
      },
      {
        title: "Galileo Second Generation",
        agency: "EU・EUSPA・ESA",
        status: "製造・打上げ準備",
        horizon: "今後順次",
        desc: "衛星間リンク、次世代原子時計、強化された測位性能とレジリエンスを備える欧州測位システムの更新計画。",
        tags: ["衛星測位", "原子時計", "レジリエンス"],
        source: "https://www.euspa.europa.eu/pressroom/press-releases/euspa-signs-new-ariane-6-launch-contract-galileo-second-generation"
      },
      {
        title: "Moonlight LCNS",
        agency: "ESA・欧州産業界",
        status: "開発中",
        horizon: "2028–2030",
        desc: "月周回衛星5機で月南極を中心に通信・測位サービスを提供し、探査機の着陸や月面移動を支援。",
        tags: ["月通信", "月測位", "月圏経済"],
        source: "https://www.esa.int/Newsroom/Press_Releases/ESA_launches_Moonlight_to_establish_lunar_communications_and_navigation_infrastructure"
      },
      {
        title: "Copernicus Expansion Missions",
        agency: "EU・ESA",
        status: "開発中",
        horizon: "2026–",
        desc: "CO₂、極域氷、地表温度、植生などを高精度で観測する6つのSentinel拡張ミッション。",
        tags: ["地球観測", "気候", "Sentinel"],
        source: "https://www.esa.int/Applications/Observing_the_Earth/FutureEO/Preparing_for_tomorrow/Scientific_and_technical_mission_documents"
      }
    ]
  },
  {
    id: "japan",
    num: "04",
    label: "日本",
    en: "JAPAN",
    icon: "🇯🇵",
    color: "#ffb75e",
    summary: "深宇宙探査、独自測位、基幹ロケット、宇宙ステーション補給を軸に技術基盤を拡張。",
    projects: [
      {
        title: "MMX 火星衛星探査計画",
        agency: "JAXA・国際パートナー",
        status: "打上げ準備",
        horizon: "2026年度",
        desc: "火星衛星フォボスへ着陸し、10g以上の試料を採取して地球へ持ち帰る世界初の火星圏サンプルリターン。",
        tags: ["フォボス", "サンプルリターン", "H3"],
        source: "https://www.mmx.jaxa.jp/en/"
      },
      {
        title: "準天頂衛星システム 7機体制",
        agency: "内閣府・JAXA",
        status: "構築中",
        horizon: "2026",
        desc: "日本独自の高精度測位基盤「みちびき」を7機体制へ拡張し、安定した測位・時刻サービスを強化。",
        tags: ["QZSS", "高精度測位", "社会インフラ"],
        source: "https://qzss.go.jp/7satellite-constellation/"
      },
      {
        title: "H3ロケット運用・高度化",
        agency: "JAXA・MHI",
        status: "運用・改善中",
        horizon: "2026–",
        desc: "政府衛星、探査機、商業衛星の打上げを担う日本の基幹ロケット。複数形態の確立と信頼性向上を進める。",
        tags: ["基幹ロケット", "宇宙輸送", "商業打上げ"],
        source: "https://global.jaxa.jp/press/h3/"
      },
      {
        title: "HTV-X 次世代補給機",
        agency: "JAXA",
        status: "実証・運用",
        horizon: "2025–",
        desc: "ISSへの補給に加え、離脱後の軌道上技術実証や将来のGateway補給への発展を見据えた宇宙機。",
        tags: ["ISS補給", "軌道上実証", "Gateway"],
        source: "https://global.jaxa.jp/projects/iss_human/htv-x/index.html"
      },
      {
        title: "LUPEX 月極域探査",
        agency: "JAXA・ISRO",
        status: "開発中",
        horizon: "2026年度以降",
        desc: "月極域の水資源の量・分布・利用可能性を調べ、持続的な月面活動へ必要な探査技術を実証する日印共同計画。",
        tags: ["月極域", "水資源", "日印協力"],
        source: "https://global.jaxa.jp/projects/in_progress.html"
      }
    ]
  },
  {
    id: "india",
    num: "05",
    label: "インド",
    en: "INDIA",
    icon: "🇮🇳",
    color: "#9be15d",
    summary: "有人飛行、月面試料帰還、独自宇宙ステーション、再使用型大型輸送へ段階的に能力を拡張。",
    projects: [
      {
        title: "Gaganyaan",
        agency: "ISRO",
        status: "試験・準備中",
        horizon: "2026目標",
        desc: "最大3名を約400kmの低軌道へ送り、安全に帰還させるインド初の独自有人宇宙飛行プログラム。",
        tags: ["有人宇宙", "LEO", "クルーモジュール"],
        source: "https://www.isro.gov.in/ISRO_EN/Gaganyaan.html"
      },
      {
        title: "Chandrayaan-4",
        agency: "ISRO",
        status: "計画・開発中",
        horizon: "2027–2028",
        desc: "月面で2〜3kgの試料を採取し、月周回軌道でのドッキングと地球帰還を実証する月試料帰還計画。",
        tags: ["月探査", "サンプルリターン", "軌道上ドッキング"],
        source: "https://www.isro.gov.in/ISRO_Nationalsciencemeet_ch4.html"
      },
      {
        title: "Bharatiya Antariksh Station",
        agency: "ISRO",
        status: "構想・技術開発",
        horizon: "2035",
        desc: "継続的な低軌道滞在と微小重力研究を可能にするインド独自宇宙ステーション構想。Gaganyaan技術を発展。",
        tags: ["宇宙ステーション", "微小重力", "長期滞在"],
        source: "https://www.isro.gov.in/ISRO_EN/IndianMicrogravityExperiments_IMEx2026.html"
      },
      {
        title: "Next Generation Launch Vehicle",
        agency: "ISRO",
        status: "開発中",
        horizon: "2030年代",
        desc: "LOX・メタンエンジンと垂直着陸式の再使用第1段を採用し、LEOへ最大30トン級を目指す次世代輸送系。",
        tags: ["再使用ロケット", "LOXメタン", "大型輸送"],
        source: "https://www.isro.gov.in/media_isro/pdf/AnnualReport/Annual_Report_2025-26_EN_28042026.pdf"
      },
      {
        title: "Venus Orbiter Mission",
        agency: "ISRO",
        status: "承認・開発中",
        horizon: "計画中",
        desc: "金星の大気、表面、太陽風との相互作用を全球的に観測し、エアロブレーキングなどの技術も実証。",
        tags: ["金星", "惑星科学", "エアロブレーキング"],
        source: "https://www.isro.gov.in/ISRO_EN/UnionCabinetApprovesIndiasMission.html"
      }
    ]
  },
  {
    id: "other-countries",
    num: "06",
    label: "その他各国",
    en: "OTHER COUNTRIES",
    icon: "🛰️",
    color: "#b991ff",
    summary: "UAE、韓国、オーストラリア、ブラジルなどが深宇宙・測位・月面ロボット・地球観測へ参入。",
    projects: [
      {
        title: "Emirates Mission to the Asteroid Belt",
        agency: "UAE Space Agency",
        status: "組立・試験中",
        horizon: "2028打上げ",
        desc: "MBR Explorerが7つの小惑星を探査し、最終的にJustitiaへランダーを展開するUAEの深宇宙計画。",
        tags: ["UAE", "小惑星", "深宇宙"],
        source: "https://www.space.gov.ae/en/projects-and-initiatives/space-exploration/emirates-mission-to-the-asteroid-belt"
      },
      {
        title: "Korean Positioning System",
        agency: "KASA・韓国",
        status: "開発中",
        horizon: "段階整備",
        desc: "韓国と周辺地域へ独自の高精度な測位・航法・時刻情報を提供する地域衛星測位システム。",
        tags: ["韓国", "衛星測位", "PNT"],
        source: "https://www.kasa.go.kr/eng/sub02_02.do"
      },
      {
        title: "Roo-ver / Trailblazer",
        agency: "Australian Space Agency・NASA",
        status: "開発中",
        horizon: "2020年代後半",
        desc: "豪州製月面ローバーがレゴリスを採取し、NASAの酸素抽出技術実証を支援するMoon to Mars計画。",
        tags: ["オーストラリア", "月面ローバー", "資源利用"],
        source: "https://www.industry.gov.au/news/competition-to-name-australias-lunar-rover"
      },
      {
        title: "CBERS-6",
        agency: "ブラジル・中国",
        status: "共同開発中",
        horizon: "2028予定",
        desc: "雲、煙、夜間でも観測できる合成開口レーダーを搭載し、環境・災害監視を強化する地球観測衛星。",
        tags: ["ブラジル", "SAR", "地球観測"],
        source: "https://www.gov.br/aeb/pt-br/assuntos/noticias/decreto-legislativo-aprova-texto-do-protocolo-complementar-de-desenvolvimento-conjunto-do-cbers-6"
      }
    ]
  }
];
