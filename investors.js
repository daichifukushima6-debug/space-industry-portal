(() => {
  "use strict";

  window.INVESTORS = [
    {
      id: "lockheed-martin-ventures", name: "Lockheed Martin Ventures", short: "LMV",
      type: "corporate", typeLabel: "事業会社・CVC", region: "米国", stage: "Early–Growth",
      focus: ["デュアルユース", "宇宙インフラ", "自律システム"],
      portfolio: ["ABL Space Systems", "Terran Orbital", "Orbit Fab"],
      overview: "Lockheed Martinの戦略領域と接続する先端技術企業へ投資するCVC。",
      url: "https://www.lockheedmartin.com/en-us/who-we-are/lockheed-martin-ventures.html"
    },
    {
      id: "airbus-ventures", name: "Airbus Ventures", short: "AV",
      type: "corporate", typeLabel: "事業会社・CVC", region: "米国・欧州・日本", stage: "Seed–Growth",
      focus: ["Deep Tech", "宇宙輸送", "地球観測"],
      portfolio: ["ispace", "ICEYE", "Impulse Space"],
      overview: "航空宇宙の長期的な技術変化を見据え、世界のアーリーステージ企業へ投資。",
      url: "https://airbusventures.vc/portfolio/"
    },
    {
      id: "boeing-horizonx", name: "Boeing HorizonX Ventures", short: "BX",
      type: "corporate", typeLabel: "事業会社・CVC", region: "米国・グローバル", stage: "Early–Growth",
      focus: ["衛星通信", "推進", "航空宇宙DX"],
      portfolio: ["ALL.SPACE", "Accion Systems", "BridgeSat"],
      overview: "Boeingの事業領域に近い航空宇宙技術と、新しいモビリティ技術を支援。",
      url: "https://www.boeing.com/company/key-orgs/innovation/"
    },
    {
      id: "rtx-ventures", name: "RTX Ventures", short: "RTX",
      type: "corporate", typeLabel: "事業会社・CVC", region: "米国", stage: "Early–Growth",
      focus: ["センシング", "セキュア通信", "推進・電力"],
      portfolio: ["CesiumAstro", "SpiderOak", "Hermeus"],
      overview: "航空宇宙・防衛の次世代技術を対象に、事業連携を重視した投資を実施。",
      url: "https://www.rtx.com/who-we-are/ventures"
    },
    {
      id: "kddi-open-innovation-fund", name: "KDDI Open Innovation Fund", short: "KDDI",
      type: "corporate", typeLabel: "事業会社・CVC", region: "日本・グローバル", stage: "Seed–Growth",
      focus: ["衛星通信", "月面ビジネス", "データ利活用"],
      portfolio: ["ispace", "ソラコム", "通信・宇宙関連企業"],
      overview: "通信と新規事業の接点を軸に、スタートアップとの事業共創を推進。",
      url: "https://www.kddi.com/open-innovation-program/"
    },
    {
      id: "sky-perfect-jsat", name: "スカパーJSAT", short: "JSAT",
      type: "corporate", typeLabel: "事業会社・CVC", region: "日本", stage: "Strategic",
      focus: ["衛星通信", "光通信", "軌道上サービス"],
      portfolio: ["Warpspace", "Orbital Lasers", "宇宙データ関連企業"],
      overview: "衛星運用とメディア事業の基盤を活用し、通信・光技術・宇宙利用へ戦略投資。",
      url: "https://www.skyperfectjsat.space/"
    },
    {
      id: "toyota", name: "トヨタ自動車", short: "TOYOTA",
      type: "corporate", typeLabel: "事業会社・CVC", region: "日本", stage: "Strategic",
      focus: ["ロケット量産", "月面モビリティ", "製造技術"],
      portfolio: ["インターステラテクノロジズ", "月面モビリティ関連"],
      overview: "自動車生産で培った量産技術とモビリティの知見を、宇宙輸送・月面活動へ展開。",
      url: "https://global.toyota/jp/newsroom/corporate/"
    },
    {
      id: "seraphim-space", name: "Seraphim Space", short: "SS",
      type: "vc", typeLabel: "ベンチャーキャピタル", region: "英国・グローバル", stage: "Seed–Growth",
      focus: ["SpaceTech全般", "気候・安全保障", "宇宙インフラ"],
      portfolio: ["ICEYE", "D-Orbit", "LeoLabs", "HawkEye 360"],
      overview: "宇宙特化ファンド、アクセラレーター、上場投資会社を通じて幅広い成長段階を支援。",
      url: "https://seraphim.vc/portfolio/"
    },
    {
      id: "space-capital", name: "Space Capital", short: "SC",
      type: "vc", typeLabel: "ベンチャーキャピタル", region: "米国・グローバル", stage: "Early–Growth",
      focus: ["宇宙インフラ", "配信基盤", "宇宙データ活用"],
      portfolio: ["SpaceX", "Planet", "Impulse Space", "Muon Space"],
      overview: "宇宙経済をInfrastructure・Distribution・Applicationsの技術層で捉える専門投資家。",
      url: "https://www.spacecapital.com/portfolio"
    },
    {
      id: "type-one-ventures", name: "Type One Ventures", short: "T1",
      type: "vc", typeLabel: "ベンチャーキャピタル", region: "米国・グローバル", stage: "Pre-seed–Series A",
      focus: ["宇宙インフラ", "Deep Tech", "文明規模の技術"],
      portfolio: ["SpaceX", "Varda Space Industries", "Gravitics"],
      overview: "宇宙・製造・エネルギーなど、長期的に大きな産業をつくるDeep Techへ投資。",
      url: "https://typeoneventures.com/"
    },
    {
      id: "starburst-ventures", name: "Starburst Ventures", short: "SB",
      type: "vc", typeLabel: "ベンチャーキャピタル", region: "米国・欧州・アジア", stage: "Early Stage",
      focus: ["航空宇宙", "防衛", "デュアルユース"],
      portfolio: ["Momentus", "Morpheus Space", "Orbital Sidekick"],
      overview: "航空宇宙・防衛アクセラレーターのネットワークを生かし、技術検証と事業開発を支援。",
      url: "https://starburst.aero/portfolio/"
    },
    {
      id: "sparx-space-frontier", name: "SPARX 宇宙フロンティアファンド", short: "SFF",
      type: "vc", typeLabel: "ベンチャーキャピタル", region: "日本・グローバル", stage: "Early–Growth",
      focus: ["衛星インフラ", "データ利活用", "軌道上サービス"],
      portfolio: ["アストロスケール", "ispace", "ArkEdge Space", "Pale Blue"],
      overview: "日本の宇宙産業エコシステム形成を掲げ、アクセスから深宇宙まで幅広く投資。",
      url: "https://space.sparx.co.jp/portfolio/"
    },
    {
      id: "incubate-fund", name: "インキュベイトファンド", short: "IF",
      type: "vc", typeLabel: "ベンチャーキャピタル", region: "日本・アジア", stage: "Pre-seed–Early",
      focus: ["フロンティアテック", "宇宙輸送", "ロボティクス"],
      portfolio: ["将来宇宙輸送システム", "SUiCTE", "Deep Tech企業"],
      overview: "創業前後の起業家支援に強みを持ち、宇宙を含むフロンティアテックへ投資。",
      url: "https://incubatefund.com/portfolio_cat/frontier-tech/"
    },
    {
      id: "ae-industrial-partners", name: "AE Industrial Partners", short: "AEI",
      type: "pe", typeLabel: "PE・グロース", region: "米国", stage: "Growth–Buyout",
      focus: ["航空宇宙・防衛", "宇宙製造", "産業統合"],
      portfolio: ["Firefly Aerospace", "Redwire", "York Space Systems"],
      overview: "航空宇宙・防衛・政府サービスに特化し、成長投資と企業統合を手掛ける。",
      url: "https://www.aeroequity.com/portfolio"
    },
    {
      id: "advent-international", name: "Advent International", short: "ADVENT",
      type: "pe", typeLabel: "PE・グロース", region: "グローバル", stage: "Buyout",
      focus: ["衛星製造", "地球観測", "宇宙データ"],
      portfolio: ["Maxar Technologies"],
      overview: "大規模な企業価値向上投資を行うグローバルPE。宇宙ではMaxarの非公開化を主導。",
      url: "https://www.adventinternational.com/investments/"
    },
    {
      id: "kkr", name: "KKR", short: "KKR",
      type: "pe", typeLabel: "PE・グロース", region: "グローバル", stage: "Growth–Buyout",
      focus: ["衛星システム", "欧州宇宙産業", "産業成長"],
      portfolio: ["OHB SE"],
      overview: "成長投資からバイアウトまで幅広く展開し、宇宙・防衛を含む産業技術へ投資。",
      url: "https://www.kkr.com/investments"
    },
    {
      id: "tpg", name: "TPG", short: "TPG",
      type: "pe", typeLabel: "PE・グロース", region: "グローバル", stage: "Growth",
      focus: ["宇宙ステーション", "商業宇宙", "インパクト"],
      portfolio: ["Voyager Space"],
      overview: "グロース、インパクト、PE戦略を通じて、商業宇宙インフラの拡大を支援。",
      url: "https://www.tpg.com/portfolio"
    },
    {
      id: "antarctica-capital", name: "Antarctica Capital", short: "AC",
      type: "pe", typeLabel: "PE・グロース", region: "米国", stage: "Growth–Buyout",
      focus: ["地球観測", "データ解析", "インフラ"],
      portfolio: ["EarthDaily Analytics"],
      overview: "インフラ、デジタル、宇宙データ関連資産へ長期的な成長資本を提供。",
      url: "https://antarcticacapital.com/"
    }
  ];
})();
