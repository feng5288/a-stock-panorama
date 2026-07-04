const P0_EVIDENCE_CARDS_V1 = {
  "generated_at": "2026-06-27 11:16:59",
  "source": "E:\\CODEX  zhuanyi\\网站规划工作区\\classification\\p0_classification_preview_v1.json",
  "rules_version": "2026-06-26.alpha2",
  "sample_count": 80,
  "purpose": "P0 80家结构化证据卡扩容试跑，用于验证从旧报告候选到V2证据底座的自动化覆盖率。",
  "business_data_note": "主营/产品字段来自 AkShare stock_zyjs_ths 对应的同花顺公开资料口径；后续可替换为年报/公告解析源。",
  "financial_data_note": "财务字段来自 BaoStock 免费季度财务接口；空值代表接口未取到，不解释为零。",
  "partner_data_note": "没有明确公开证据的客户/供应商/合作对象不写具体公司名。",
  "market_strength_note": "市场强度、市场角色、龙头/补涨关系字段已预留，暂不计算。",
  "data_errors": {},
  "rows": [
    {
      "code": "002065",
      "name": "东华软件",
      "bucket": "计算机 / 软件服务",
      "subcategory": "行业软件 / 应用软件",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\东华软件.docx",
      "rule_root_id": "computer_software_it",
      "rule_child_id": "software_application",
      "root_alias_hits": [
        "软件",
        "信息技术"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "综合性行业应用软件开发、系统集成及信息技术服务。",
        "product_types": [
          "计算机信息系统集成",
          "信息技术服务",
          "应用软件开发",
          "网络产品",
          "运维管理"
        ],
        "product_names": [
          "计算机信息系统集成",
          "信息技术服务",
          "应用软件开发",
          "网络产品",
          "运维管理"
        ],
        "business_scope": "技术开发、技术咨询、技术服务、技术推广、技术转让；计算机系统服务；数据处理；基础软件服务、应用软件服务、公共软件服务；销售计算机软、硬件及外围设备、通讯设备、医疗器械II类；承接工业控制与自动化系统工程、计算机通讯工程、智能楼宇及数据中心计算机系统工程；货物进出口、技术进出口、代理进出口；经营电信业务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.68,
        "net_profit_yoy_pct": 0.12,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.19,
        "net_margin_pct": 0.02,
        "debt_to_assets_pct": 0.46,
        "cfo_to_np": 1.76,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 0.68,
        "net_profit_yoy_pct": 0.12,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "计算机 / 软件服务",
          "行业软件 / 应用软件",
          "计算机信息系统集成",
          "信息技术服务",
          "应用软件开发",
          "网络产品",
          "运维管理"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600588",
      "name": "用友网络",
      "bucket": "计算机 / 软件服务",
      "subcategory": "行业软件 / 应用软件",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\用友网络.docx",
      "rule_root_id": "computer_software_it",
      "rule_child_id": "software_application",
      "root_alias_hits": [
        "软件",
        "信息技术"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "以AI、大数据、云计算为核心技术的企业数智化软件与智能服务的研发创新、销售与服务。",
        "product_types": [
          "云与软件业务"
        ],
        "product_names": [
          "用友BIP产品"
        ],
        "business_scope": "电子计算机软件、硬件及外部设备的技术开发、技术咨询、技术转让、技术服务、技术培训；计算机系统集成；销售打印纸和计算机耗材；物业管理；企业管理咨询；数据库服务；销售电子计算机软硬件及外部设备；设计、制作、代理、发布广告；自营和代理各类商品和技术的进出口，但国家限定公司经营或禁止进出口的商品和技术除外；出租办公用房；零售图书；互联网数据中心业务(机房所在地为北京、南昌)、互联网接入服务业务(北京、南昌)、信息服务业务(不含互联网信息服务)(全国)(增值电信业务经营许可证有效期至2025年6月18日)；互联网信息服务。(市场主体依法自主选择经营项目，开展经营活动；互联网信息服务、互联网数据中心业务(机房所在地为北京、南昌)、互联网接入服务业务(北京、南昌)、信息服务业务(不含互联网信息服务)(全国)以及依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事国家和本市产业政策禁止和限制类项目的经营活动。)(公司经营范围以市场监督管理机关核准的经营范围为准。)",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -7.44,
        "net_profit_yoy_pct": 0.02,
        "revenue_yoy_pct": "",
        "roe_pct": -0.1,
        "gross_margin_pct": 0.45,
        "net_margin_pct": -0.51,
        "debt_to_assets_pct": 0.6,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": -7.44,
        "net_profit_yoy_pct": 0.02,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 87,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "计算机 / 软件服务",
          "行业软件 / 应用软件",
          "用友BIP产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 87,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600570",
      "name": "恒生电子",
      "bucket": "计算机 / 软件服务",
      "subcategory": "金融IT / 行业软件",
      "priority": "P0",
      "original_evidence_level": "review",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\恒生电子.docx",
      "rule_root_id": "computer_software_it",
      "rule_child_id": "software_application",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found",
        "child_alias_not_found"
      ],
      "business_evidence": {
        "business_summary": "证券、金融、交通等行业计算机软件产品和系统集成的开发及销售，计算机及配件的销售等。",
        "product_types": [
          "财富科技服务",
          "资管科技服务",
          "运营与机构科技服务",
          "风险与平台科技服务",
          "数据服务业务",
          "创新业务",
          "企金保险核心",
          "金融基础设施科技服务"
        ],
        "product_names": [
          "财富科技服务",
          "资管科技服务",
          "运营与机构科技服务",
          "风险与平台科技服务",
          "数据服务业务",
          "创新业务",
          "企金保险核心",
          "金融基础设施科技服务"
        ],
        "business_scope": "计算机软件的技术开发、咨询、服务、成果转让；计算机系统集成；自动化控制工程设计、承包、安装；计算机及配件的销售；电子设备、通讯设备、计算机硬件及外部设备的生产、销售，自有房屋的租赁，经营进出口业务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.65,
        "net_profit_yoy_pct": 3.43,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.68,
        "net_margin_pct": 0.18,
        "debt_to_assets_pct": 0.28,
        "cfo_to_np": -7.02,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 1.65,
        "net_profit_yoy_pct": 3.43,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 83,
        "fundamental_score": 83,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "计算机 / 软件服务",
          "金融IT / 行业软件",
          "财富科技服务",
          "资管科技服务",
          "运营与机构科技服务",
          "风险与平台科技服务",
          "数据服务业务",
          "创新业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 83,
        "fundamental_score": 83,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "000977",
      "name": "浪潮信息",
      "bucket": "计算机 / 软件服务",
      "subcategory": "IT基础设施 / 云计算",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\浪潮信息.docx",
      "rule_root_id": "computer_software_it",
      "rule_child_id": "it_infrastructure",
      "root_alias_hits": [
        "计算机"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "为客户提供云计算、大数据、人工智能等各类创新IT产品和解决方案。",
        "product_types": [
          "服务器产品",
          "存储类",
          "交换类等产品"
        ],
        "product_names": [
          "服务器产品",
          "存储类",
          "交换类等产品"
        ],
        "business_scope": "计算机软硬件及外围设备制造与销售；互联网设备制造与销售；软件开发与销售；通信设备制造与销售；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；计算机及通讯设备租赁；计算机及办公设备维修；非居住房地产租赁；信息系统集成服务；云计算设备制造与销售；信息技术咨询服务；网络技术服务；智能控制系统集成；信息安全设备制造与销售；网络与信息安全软件开发。许可项目：进出口代理；技术进出口；货物进出口。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 6.05,
        "net_profit_yoy_pct": 0.31,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.07,
        "net_margin_pct": 0.02,
        "debt_to_assets_pct": 0.73,
        "cfo_to_np": -12.85,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 6.05,
        "net_profit_yoy_pct": 0.31,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 84,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "计算机 / 软件服务",
          "IT基础设施 / 云计算",
          "服务器产品",
          "存储类",
          "交换类等产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 84,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600271",
      "name": "航天信息",
      "bucket": "计算机 / 软件服务",
      "subcategory": "信创 / 电子政务",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\航天信息.docx",
      "rule_root_id": "computer_software_it",
      "rule_child_id": "software_application",
      "root_alias_hits": [
        "软件",
        "信息技术"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "数字财税业务、智慧业务和网信业务。",
        "product_types": [
          "数字财税业务产品",
          "智慧业务产品",
          "网信业务产品"
        ],
        "product_names": [
          "数字财税业务产品",
          "智慧业务产品",
          "网信业务产品"
        ],
        "business_scope": "计算机软件的技术开发与销售、电子及通信设备、计算机及外部设备、智能机电产品、财税专用设备的研制、生产、销售；信息安全技术、信息技术、网络及终端技术、多媒体技术、工业自动化控制技术、环保技术、生物工程技术的开发、转让、咨询、培训；智能卡及电子标签的研制、生产、销售。电子产品专业设备的研制、生产、销售、技术服务；物联网及传感网相关技术研发、生产、销售及服务；有线及无线通讯终端产品和个人数字终端产品的研发、生产和销售；农业机械设备研发、销售和服务。提供的服务主要有：技术咨询和技术服务、企业管理咨询、计算机数据库服务。销售或转让的产品主要有：计算机软件、打印纸、生产、信息安全技术、信息技术、网络及终端技术、多媒体技术、工业自动化控制技术、环保技术、生物工程技术。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -3.72,
        "net_profit_yoy_pct": 0.17,
        "revenue_yoy_pct": "",
        "roe_pct": -0.02,
        "gross_margin_pct": 0.13,
        "net_margin_pct": -0.39,
        "debt_to_assets_pct": 0.19,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": -3.72,
        "net_profit_yoy_pct": 0.17,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 87,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "计算机 / 软件服务",
          "信创 / 电子政务",
          "数字财税业务产品",
          "智慧业务产品",
          "网信业务产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 87,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002279",
      "name": "久其软件",
      "bucket": "计算机 / 软件服务",
      "subcategory": "行业软件 / 应用软件",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\久其软件.docx",
      "rule_root_id": "computer_software_it",
      "rule_child_id": "software_application",
      "root_alias_hits": [
        "软件",
        "信息技术"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "在数字政府、数字企业、数字传播等领域为用户提供自主可控的解决方案与产品。",
        "product_types": [
          "数据智能",
          "智慧资产",
          "数智财务与财会监督",
          "智慧营销",
          "智慧法院"
        ],
        "product_names": [
          "数据智能",
          "智慧资产",
          "数智财务与财会监督",
          "智慧营销",
          "智慧法院"
        ],
        "business_scope": "一般项目：软件开发；人工智能应用软件开发；软件销售；信息系统集成服务；信息系统运行维护服务；数据处理服务；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；信息技术咨询服务；信息咨询服务（不含许可类信息咨询服务）；计算机软硬件及辅助设备零售；计算机系统服务；电子产品销售；办公设备耗材销售；计算机及通讯设备租赁；教育咨询服务（不含涉许可审批的教育培训活动）；票据信息咨询服务；标准化服务；互联网数据服务；企业管理咨询；货物进出口；技术进出口；进出口代理。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）许可项目：互联网信息服务；第一类增值电信业务。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）（不得从事国家和本市产业政策禁止和限制类项目的经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -0.94,
        "net_profit_yoy_pct": 0.26,
        "revenue_yoy_pct": "",
        "roe_pct": -0.06,
        "gross_margin_pct": 0.34,
        "net_margin_pct": -0.37,
        "debt_to_assets_pct": 0.35,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": -0.94,
        "net_profit_yoy_pct": 0.26,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "计算机 / 软件服务",
          "行业软件 / 应用软件",
          "数据智能",
          "智慧资产",
          "数智财务与财会监督",
          "智慧营销",
          "智慧法院"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "603039",
      "name": "泛微网络",
      "bucket": "计算机 / 软件服务",
      "subcategory": "行业软件 / 应用软件",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\泛微网络.docx",
      "rule_root_id": "computer_software_it",
      "rule_child_id": "software_application",
      "root_alias_hits": [
        "软件",
        "信息技术"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "协同管理和移动办公软件产品的研发、销售及相关技术服务。",
        "product_types": [
          "软件产品",
          "技术服务",
          "第三方产品"
        ],
        "product_names": [
          "e-cology",
          "e-office",
          "OA-eteams",
          "聚才林人事管理软件",
          "采知连知识管理软件",
          "京桥通采购管理软件",
          "今承达合同管理软件",
          "齐业成费控管理软件",
          "千里聆信息采集软件",
          "文书定档案管理软件",
          "九川汇营销管理软件",
          "事井然项目管理软件",
          "睦客邻客服管理软件"
        ],
        "business_scope": "许可项目：第二类增值电信业务。(依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准)一般项目：技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；信息系统集成服务；软件开发；信息咨询服务(不含许可类信息咨询服务);电子产品销售；通讯设备销售；货物进出口；技术进出口；承接档案服务外包；数据处理服务；数据处理和存储支持服务。(除依法须经批准的项目外，凭营业执照依法自主开展经营活动)",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.62,
        "net_profit_yoy_pct": 1.38,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.94,
        "net_margin_pct": 0.19,
        "debt_to_assets_pct": 0.38,
        "cfo_to_np": -1.97,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 0.62,
        "net_profit_yoy_pct": 1.38,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 83,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "计算机 / 软件服务",
          "行业软件 / 应用软件",
          "e-cology",
          "e-office",
          "OA-eteams",
          "聚才林人事管理软件",
          "采知连知识管理软件",
          "京桥通采购管理软件"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 83,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002153",
      "name": "石基信息",
      "bucket": "计算机 / 软件服务",
      "subcategory": "IT服务 / 酒店信息化",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\石基信息.docx",
      "rule_root_id": "computer_software_it",
      "rule_child_id": "software_application",
      "root_alias_hits": [
        "软件",
        "信息技术"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "酒店、餐饮、零售、休闲娱乐等大消费行业信息管理系统软件的开发与销售、系统集成、技术支持与服务业务。",
        "product_types": [
          "酒店信息管理系统业务",
          "社会餐饮信息管理系统业务",
          "支付系统业务",
          "零售信息管理系统业务",
          "旅游休闲系统业务",
          "第三方硬件配套业务",
          "自有智能商用设备"
        ],
        "product_names": [
          "酒店信息管理系统业务",
          "社会餐饮信息管理系统业务",
          "支付系统业务",
          "零售信息管理系统业务",
          "旅游休闲系统业务",
          "第三方硬件配套业务",
          "自有智能商用设备"
        ],
        "business_scope": "技术开发、技术咨询、技术转让、技术服务、技术培训；销售开发后的产品、计算机及外围设备；提供信息源服务；网络技术服务；电子商务（未取得专项审批的项目除外）；安装计算机；货物进出口、技术进出口、代理进出口。（企业依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.26,
        "net_profit_yoy_pct": 0.12,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.49,
        "net_margin_pct": 0.04,
        "debt_to_assets_pct": 0.17,
        "cfo_to_np": -6.86,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 0.26,
        "net_profit_yoy_pct": 0.12,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 65,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "计算机 / 软件服务",
          "IT服务 / 酒店信息化",
          "酒店信息管理系统业务",
          "社会餐饮信息管理系统业务",
          "支付系统业务",
          "零售信息管理系统业务",
          "旅游休闲系统业务",
          "第三方硬件配套业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 86,
        "fundamental_score": 65,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002232",
      "name": "启明信息",
      "bucket": "计算机 / 软件服务",
      "subcategory": "汽车IT / 车联网",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\启明信息.docx",
      "rule_root_id": "computer_software_it",
      "rule_child_id": "software_application",
      "root_alias_hits": [
        "软件",
        "信息技术"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "数智化转型服务、发展AI及数据产品、未来产业科技布局、全方位发展信创工程、智慧服务解决方案。",
        "product_types": [
          "集成服务",
          "汽车电子及服务",
          "管理软件及服务",
          "其他业务"
        ],
        "product_names": [
          "集成服务",
          "汽车电子及服务",
          "管理软件及服务",
          "其他业务"
        ],
        "business_scope": "软件开发；计算机软硬件及辅助设备零售；计算机软硬件及辅助设备批发；信息技术咨询服务；信息系统集成服务；数据处理和存储支持服务；第一类增值电信业务（后置许可）；第二类增值电信业务（后置许可）；电动汽车充电基础设施运营；智能车载设备制造；电工机械专用设备制造；会议及展览服务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.0,
        "net_profit_yoy_pct": 1.0,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.13,
        "net_margin_pct": 0.0,
        "debt_to_assets_pct": 0.25,
        "cfo_to_np": -2584.59,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": 0.0,
        "net_profit_yoy_pct": 1.0,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 39,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "计算机 / 软件服务",
          "汽车IT / 车联网",
          "集成服务",
          "汽车电子及服务",
          "管理软件及服务",
          "其他业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 39,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "603881",
      "name": "数据港",
      "bucket": "计算机 / 软件服务",
      "subcategory": "IDC / 数据中心",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\数据港.docx",
      "rule_root_id": "computer_software_it",
      "rule_child_id": "it_infrastructure",
      "root_alias_hits": [
        "软件",
        "信息技术"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "数据中心服务器托管服务。",
        "product_types": [
          "IDC业务",
          "IDC解决方案业务",
          "云服务销售业务"
        ],
        "product_names": [
          "IDC业务",
          "IDC解决方案业务",
          "云服务销售业务"
        ],
        "business_scope": "一般项目：互联网数据服务；信息系统运行维护服务；大数据服务；工业互联网数据服务；互联网安全服务；信息技术咨询服务；网络与信息安全软件开发；软件开发；物联网技术服务；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；计算机软硬件及辅助设备批发；互联网设备销售；云计算设备销售；计算机软硬件及外围设备制造；网络设备销售；信息系统集成服务；互联网销售（除销售需要许可的商品）；5G通信技术服务；计算机软硬件及辅助设备零售；普通机械设备安装服务；网络设备制造；网络技术服务；物业管理。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）许可项目：互联网信息服务；建筑智能化工程施工；第一类增值电信业务；建设工程监理。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.45,
        "net_profit_yoy_pct": 0.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.32,
        "net_margin_pct": 0.12,
        "debt_to_assets_pct": 0.54,
        "cfo_to_np": 6.31,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": 0.45,
        "net_profit_yoy_pct": 0.02,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "计算机 / 软件服务",
          "IDC / 数据中心",
          "IDC业务",
          "IDC解决方案业务",
          "云服务销售业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 96,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "601929",
      "name": "吉视传媒",
      "bucket": "传媒互联网",
      "subcategory": "广电 / 内容平台",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\吉视传媒.docx",
      "rule_root_id": "media_internet",
      "rule_child_id": "game_content",
      "root_alias_hits": [
        "传媒"
      ],
      "child_alias_hits": [
        "内容"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "提供智慧广电业务、数据服务业务。",
        "product_types": [
          "面向公众客户的智慧广电业务",
          "面向政企客户的数据服务业务",
          "面向未来垂直领域的数字化创新服务业务"
        ],
        "product_names": [
          "移动通讯业务（广电5G）",
          "宽带互联网业务",
          "直播电视业务（广播电视）",
          "视频点播业务",
          "IPTV视频业务",
          "IPTV增值业务",
          "数智家庭业务",
          "域外广播电视节目落地传输业务",
          "数字电视工程配套业务",
          "算力租赁与大数据应用服务业务",
          "专网服务业务",
          "社会信息化应用服务业务",
          "集团通讯及物联网业务",
          "数据要素服务业务",
          "大模型部署服务",
          "数智化产品销售业务",
          "服务保障模式"
        ],
        "business_scope": "有线电视业务；广播电视节目传输服务业务；专业频道、付费频道、多媒体数据广播、视音频点播服务业务；电子政务、电子商务、电视购物、远程教育、远程医疗方面的信息及其网络传输服务业务；网络广告、网上通讯、数据传输、专用通道出租服务业务；广播电视网络、计算机网络、通信网络及其线路的设计、安装和经营服务业务；广播电视、通信天馈线系统安装、调试；电子社区工程、水电气热收费方面的信息网络服务；卫星及网络系统的技术开发、咨询、应用和服务；吉林省因特网接入服务业务、信息服务业务（移动网短消息信息服务、因特网信息服务业务；网络广告有偿商业信息、网络商城）；广播电视、通信及信息设备器材销售、软件开发（涉及专项审批的项目须凭有关审批许可经营）；制作、发行广播电视节目；家用电器、电子产品专门零售；计算机及通讯设备、办公自动化设备、电子产品、电气设备、教学仪器销售及维护；网络工程设计，计算机网络系统集成；通信信息咨询服务、通信网络系统集成、通信管道建设；综合布线工程、安防监控工程、建筑智能化工程设计及施工；信息系统集成服务；计算机网络工程、器材及维护、电视电话会议系统施工、器材及维护；云平台服务、云存储服务、云基础设施服务、云软件服务；信息传输、软件和信息技术服务业、电信、广播电视和卫星传输服务；计算机、通信和其他电子设备制造业；预包装食品兼散装食品、农副产品销售；智能农业管理服务；境内旅游；基础电信业务；增值电信业务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -1.0,
        "net_profit_yoy_pct": 0.03,
        "revenue_yoy_pct": "",
        "roe_pct": -0.02,
        "gross_margin_pct": 0.11,
        "net_margin_pct": -0.19,
        "debt_to_assets_pct": 0.62,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": -1.0,
        "net_profit_yoy_pct": 0.03,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "传媒互联网",
          "广电 / 内容平台",
          "移动通讯业务（广电5G）",
          "宽带互联网业务",
          "直播电视业务（广播电视）",
          "视频点播业务",
          "IPTV视频业务",
          "IPTV增值业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002607",
      "name": "中公教育",
      "bucket": "传媒互联网",
      "subcategory": "教育 / 人力服务",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\中公教育.docx",
      "rule_root_id": "media_internet",
      "rule_child_id": "education_human_service",
      "root_alias_hits": [
        "教育"
      ],
      "child_alias_hits": [
        "教育"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "为大学生、大学毕业生及各类职业专才等知识型就业人群提供个性化和专业化的就业服务。",
        "product_types": [
          "公务员序列",
          "事业单位序列",
          "教师序列",
          "综合序列"
        ],
        "product_names": [
          "公务员序列",
          "事业单位序列",
          "教师序列",
          "综合序列"
        ],
        "business_scope": "教育科技领域内的技术开发、技术服务、技术推广、技术转让、技术咨询，教育培训（仅限分支机构开展此业务）；承办展览展示服务；组织文化艺术交流活动（不含演出）；会议服务；企业管理咨询。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.47,
        "net_profit_yoy_pct": 0.18,
        "revenue_yoy_pct": "",
        "roe_pct": 0.06,
        "gross_margin_pct": 0.62,
        "net_margin_pct": 0.08,
        "debt_to_assets_pct": 0.86,
        "cfo_to_np": 3.22,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 0.47,
        "net_profit_yoy_pct": 0.18,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "传媒互联网",
          "教育 / 人力服务",
          "公务员序列",
          "事业单位序列",
          "教师序列",
          "综合序列"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "605098",
      "name": "行动教育",
      "bucket": "传媒互联网",
      "subcategory": "教育 / 人力服务",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\行动教育.docx",
      "rule_root_id": "media_internet",
      "rule_child_id": "education_human_service",
      "root_alias_hits": [
        "教育"
      ],
      "child_alias_hits": [
        "教育"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "企业管理培训、管理咨询服务以及相关图书音像制品销售。",
        "product_types": [
          "管理培训",
          "管理咨询",
          "图书销售"
        ],
        "product_names": [
          "管理培训",
          "管理咨询",
          "图书销售"
        ],
        "business_scope": "在教育管理领域的技术开发、技术咨询、技术转让、技术服务，教育信息咨询（除出国留学咨询及中介服务）、企业管理咨询、投资咨询（咨询类项目除经纪），企业形象策划、市场信息咨询与调查、会务服务、礼仪服务、系统内职工培训；会务资料、工艺礼品（除金银）、文化办公用品、日用百货的销售。【依法须经批准的项目，经相关部门批准后方可开展经营活动】",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.4,
        "net_profit_yoy_pct": 0.38,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.77,
        "net_margin_pct": 0.23,
        "debt_to_assets_pct": 0.57,
        "cfo_to_np": 1.36,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 0.4,
        "net_profit_yoy_pct": 0.38,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "传媒互联网",
          "教育 / 人力服务",
          "管理培训",
          "管理咨询",
          "图书销售"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "000002",
      "name": "万科A",
      "bucket": "地产 / 建筑建材",
      "subcategory": "房地产开发",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\万科A.docx",
      "rule_root_id": "real_estate_construction",
      "rule_child_id": "real_estate_developer",
      "root_alias_hits": [
        "地产",
        "房地产"
      ],
      "child_alias_hits": [
        "房地产"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "房地产开发和物业服务。",
        "product_types": [
          "商品住宅"
        ],
        "product_names": [
          "商品住宅"
        ],
        "business_scope": "兴办实业(具体项目另行申报)；国内商业；物资供销业(不含专营、专控、专卖商品)；进出口业务(按深经发审证字第113号外贸企业审定证书规定办理)；房地产开发。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -60.92,
        "net_profit_yoy_pct": 0.05,
        "revenue_yoy_pct": "",
        "roe_pct": -0.05,
        "gross_margin_pct": 0.09,
        "net_margin_pct": -0.21,
        "debt_to_assets_pct": 0.77,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": -60.92,
        "net_profit_yoy_pct": 0.05,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "地产 / 建筑建材",
          "房地产开发",
          "商品住宅"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600170",
      "name": "上海建工",
      "bucket": "地产 / 建筑建材",
      "subcategory": "建筑工程 / 基建",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\上海建工.docx",
      "rule_root_id": "real_estate_construction",
      "rule_child_id": "construction_engineering",
      "root_alias_hits": [
        "建筑"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "建筑施工业务、设计咨询业务、建材工业业务、房产开发业务和城市建设投资业务。",
        "product_types": [
          "房屋建设",
          "基建工程",
          "专业工程",
          "建筑装饰",
          "园林绿化",
          "设计咨询",
          "商品混凝土及混凝土构件",
          "其他建筑工业",
          "石料",
          "房地产开发",
          "城市建设投资",
          "成套设备及其他商品进出口",
          "黄金销售业务",
          "光伏新能源"
        ],
        "product_names": [
          "房屋建设",
          "基建工程",
          "专业工程",
          "建筑装饰",
          "园林绿化",
          "设计咨询",
          "商品混凝土及混凝土构件",
          "其他建筑工业",
          "石料",
          "房地产开发",
          "城市建设投资",
          "成套设备及其他商品进出口",
          "黄金销售业务",
          "光伏新能源"
        ],
        "business_scope": "境内外各类建设工程的承包、设计、施工、咨询及配套设备、材料、构件的生产、经营、销售，从事各类货物及技术的进出口业务，建筑技术开发与转让，机械设备租赁，房地产开发经营及咨询，城市基础设施的投资建设，实业投资，国内贸易（除专项规定）；对外派遣各类劳务人员（不含海员）。【依法须经批准的项目，经相关部门批准后方可开展经营活动】",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -1.38,
        "net_profit_yoy_pct": 1.01,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.08,
        "net_margin_pct": -0.0,
        "debt_to_assets_pct": 0.85,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": -1.38,
        "net_profit_yoy_pct": 1.01,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 45,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "地产 / 建筑建材",
          "建筑工程 / 基建",
          "房屋建设",
          "基建工程",
          "专业工程",
          "建筑装饰",
          "园林绿化",
          "设计咨询"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 45,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "601789",
      "name": "宁波建工",
      "bucket": "地产 / 建筑建材",
      "subcategory": "建筑工程 / 基建",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\宁波建工.docx",
      "rule_root_id": "real_estate_construction",
      "rule_child_id": "construction_engineering",
      "root_alias_hits": [
        "建筑"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "房屋建筑工程勘察、设计、施工、安装，市政道路桥梁、园林绿化，建筑装修装饰、建筑幕墙的设计、施工及预拌商品混凝土、水泥预制构件、钢结构、装配式建筑等的生产、销售。",
        "product_types": [
          "房屋建筑",
          "市政与公用设施",
          "安装",
          "建筑装饰工程",
          "销售建筑材料",
          "设计",
          "桩基"
        ],
        "product_names": [
          "房屋建筑",
          "市政与公用设施",
          "安装",
          "建筑装饰工程",
          "销售建筑材料",
          "设计",
          "桩基"
        ],
        "business_scope": "许可经营项目：承包境外房屋建筑、机电安装和境内国际招标工程；上述境外工程所需的设备、材料出口；对外派遣实施上述工程所需的劳务人员；普通货物道路运输（限分支机构经营）。实业投资；工程总承包；房屋和土木工程建筑业；建筑安装业；建筑装饰业；其他建筑业；建筑智能化工程施工；工程管理服务及勘察、设计；建筑工程技术开发、咨询；机械设备及建筑周转材料租赁；钢结构件制作安装；建材及结构测试；物业服务；建材、机械设备的批发、零售；装卸搬运服务；自营和代理货物和技术的进出口，但国家限定经营或禁止进出口的货物和技术除外。以下限分支机构经营：建筑构件、机械设备及配件的制造、加工；锅炉的安装、改造、维修。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.89,
        "net_profit_yoy_pct": 0.77,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.07,
        "net_margin_pct": 0.04,
        "debt_to_assets_pct": 0.83,
        "cfo_to_np": -8.55,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 1.89,
        "net_profit_yoy_pct": 0.77,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "地产 / 建筑建材",
          "建筑工程 / 基建",
          "房屋建筑",
          "市政与公用设施",
          "安装",
          "建筑装饰工程",
          "销售建筑材料",
          "设计"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600502",
      "name": "安徽建工",
      "bucket": "地产 / 建筑建材",
      "subcategory": "建筑工程 / 基建",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\安徽建工.docx",
      "rule_root_id": "real_estate_construction",
      "rule_child_id": "construction_engineering",
      "root_alias_hits": [
        "建筑"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "高速公路投资建设运营，工程施工，智能制造，房地产+康养，建材商贸物流，新兴产业（新能源、新材料、低空科技），工程设计、检测及现代服务业等。",
        "product_types": [
          "投资与工程施工业务",
          "智能制造业务",
          "商品房销售与社会服务业务",
          "建材",
          "商贸物流业务",
          "设计检测咨询业务",
          "新兴产业业务"
        ],
        "product_names": [
          "投资与工程施工业务",
          "智能制造业务",
          "商品房销售与社会服务业务",
          "建材",
          "商贸物流业务",
          "设计检测咨询业务",
          "新兴产业业务"
        ],
        "business_scope": "建筑工程施工、水利水电工程施工、公路工程施工、市政公用工程施工、港口与航道工程施工、机电工程施工；公路路基工程、公路路面工程、桥梁工程、隧道工程、城市园林绿化工程、河湖整治工程、钢结构工程、建筑装修装饰工程、建筑幕墙工程、消防设施工程、建筑机电安装工程、起重设备安装工程；基础设施及环保项目投资、运营；水利水电资源开发；房地产开发；对外工程承包、货物或技术的进出口业务（国家禁止或涉及行政审批的货物和技术进出口除外）；金属结构加工、制作、安装；工程勘察、规划、设计、咨询，建筑工程和交通工程的研发、咨询、检测、监理。（依法需经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 4.64,
        "net_profit_yoy_pct": 0.07,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.11,
        "net_margin_pct": 0.03,
        "debt_to_assets_pct": 0.85,
        "cfo_to_np": -6.24,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": 4.64,
        "net_profit_yoy_pct": 0.07,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "地产 / 建筑建材",
          "建筑工程 / 基建",
          "投资与工程施工业务",
          "智能制造业务",
          "商品房销售与社会服务业务",
          "建材",
          "商贸物流业务",
          "设计检测咨询业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600449",
      "name": "宁夏建材",
      "bucket": "地产 / 建筑建材",
      "subcategory": "建材 / 水泥玻璃",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\宁夏建材.docx",
      "rule_root_id": "real_estate_construction",
      "rule_child_id": "building_materials",
      "root_alias_hits": [
        "建材"
      ],
      "child_alias_hits": [
        "建材"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "基础建材业务和数字物流业务。",
        "product_types": [
          "水泥及熟料",
          "商品混凝土",
          "骨料",
          "运输服务收入",
          "增值服务收入",
          "数据中心业务"
        ],
        "product_names": [
          "水泥及熟料",
          "商品混凝土",
          "骨料",
          "运输服务收入",
          "增值服务收入",
          "数据中心业务"
        ],
        "business_scope": "水泥、水泥制品、水泥熟料、商品混凝土及相关产品的研究开发、生产、销售、技术服务和管理服务；建材产品进出口业务及相关技术的进出口业务（国家限定公司经营和禁止进出口的商品除外）；粉煤灰、矿渣、混凝土骨料的生产与销售；经营石灰石、水泥、混凝土生产所用的工业废渣、石灰岩、砂岩、硅岩、石膏的开采、加工及销售；水泥及商品混凝土设备制造、安装、维修；房屋租赁、物业管理、设备租赁、自有土地使用权租赁、与经营相关的咨询、服务；派遣实施服务所需的劳务人员。水泥石灰岩开采（按许可证核准的范围和期限经营）。(依法须经批准的项目，经相关部门批准后方可开展经营活动)。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -0.06,
        "net_profit_yoy_pct": 0.46,
        "revenue_yoy_pct": "",
        "roe_pct": -0.0,
        "gross_margin_pct": 0.07,
        "net_margin_pct": -0.01,
        "debt_to_assets_pct": 0.17,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": -0.06,
        "net_profit_yoy_pct": 0.46,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "地产 / 建筑建材",
          "建材 / 水泥玻璃",
          "水泥及熟料",
          "商品混凝土",
          "骨料",
          "运输服务收入",
          "增值服务收入",
          "数据中心业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "001322",
      "name": "箭牌家居",
      "bucket": "地产 / 建筑建材",
      "subcategory": "建材 / 家居材料",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\箭牌家居.docx",
      "rule_root_id": "real_estate_construction",
      "rule_child_id": "building_materials",
      "root_alias_hits": [
        "家居"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "集研发、生产、销售与服务于一体，为消费者提供一站式智慧家居解决方案。",
        "product_types": [
          "卫生陶瓷",
          "龙头五金",
          "浴室家具",
          "浴缸浴房",
          "瓷砖"
        ],
        "product_names": [
          "卫生陶瓷",
          "龙头五金",
          "浴室家具",
          "浴缸浴房",
          "瓷砖"
        ],
        "business_scope": "一般项目：家具制造；家具销售；家具零配件生产；家具零配件销售；家具安装和维修服务；家居用品制造；家居用品销售；智能家庭消费设备制造；智能家庭消费设备销售；卫生洁具研发；卫生洁具制造；卫生洁具销售；卫生陶瓷制品制造；卫生陶瓷制品销售；五金产品研发；五金产品制造；五金产品批发；五金产品零售；金属制日用品制造；阀门和旋塞研发；普通阀门和旋塞制造（不含特种设备制造）；阀门和旋塞销售；建筑装饰、水暖管道零件及其他建筑用金属制品制造；建筑陶瓷制品加工制造；建筑陶瓷制品销售；建筑用金属配件制造；建筑用金属配件销售；建筑材料销售；建筑装饰材料销售；非电力家用器具制造；非电力家用器具销售；厨具卫具及日用杂品批发；厨具卫具及日用杂品零售；制镜及类似品加工；玻璃制造；技术玻璃制品制造；技术玻璃制品销售；塑料制品制造；塑料制品销售；家用电器研发；家用电器制造；家用电器销售；家用电器零配件销售；家用电器安装服务；日用家电零售；日用电器修理；电子产品销售；照明器具制造；照明器具销售；半导体照明器件制造；半导体照明器件销售；灯具销售；风机、风扇制造；风机、风扇销售；专业设计服务；货物进出口；技术进出口；第二类医疗器械销售。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）许可项目：第二类医疗器械生产。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -0.65,
        "net_profit_yoy_pct": 0.12,
        "revenue_yoy_pct": "",
        "roe_pct": -0.01,
        "gross_margin_pct": 0.3,
        "net_margin_pct": -0.07,
        "debt_to_assets_pct": 0.47,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": -0.65,
        "net_profit_yoy_pct": 0.12,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "地产 / 建筑建材",
          "建材 / 家居材料",
          "卫生陶瓷",
          "龙头五金",
          "浴室家具",
          "浴缸浴房",
          "瓷砖"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 96,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600463",
      "name": "空港股份",
      "bucket": "地产 / 建筑建材",
      "subcategory": "园区 / 物业运营",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\空港股份.docx",
      "rule_root_id": "real_estate_construction",
      "rule_child_id": "property_management",
      "root_alias_hits": [
        "建筑"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "建筑施工、房屋出租、供暖服务、物业管理、提供劳务等业务。",
        "product_types": [
          "建筑施工",
          "租赁",
          "供热",
          "物业管理及其他"
        ],
        "product_names": [
          "建筑施工",
          "租赁",
          "供热",
          "物业管理及其他"
        ],
        "business_scope": "一般项目：技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；园区管理服务；非居住房地产租赁；物业管理；停车场服务；土地整治服务。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）（不得从事国家和本市产业政策禁止和限制类项目的经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.04,
        "net_profit_yoy_pct": 0.72,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.2,
        "net_margin_pct": 0.01,
        "debt_to_assets_pct": 0.68,
        "cfo_to_np": -13.62,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 0.04,
        "net_profit_yoy_pct": 0.72,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "地产 / 建筑建材",
          "园区 / 物业运营",
          "建筑施工",
          "租赁",
          "供热",
          "物业管理及其他"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600009",
      "name": "上海机场",
      "bucket": "交运物流",
      "subcategory": "机场",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\上海机场.docx",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "root_alias_hits": [
        "航空",
        "供应链",
        "机场"
      ],
      "child_alias_hits": [
        "供应链"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "航空运输地面服务及其他相关业务。",
        "product_types": [
          "航空",
          "相关服务"
        ],
        "product_names": [
          "航空",
          "相关服务"
        ],
        "business_scope": "民用机场运营，公共航空运输，通用航空服务，保税仓库经营，道路旅客运输站经营，道路旅客运输经营，国营贸易管理货物的进出口，互联网上网服务，住宿服务，城市公共交通，海关监管货物仓储服务（不含危险化学品、危险货物），出口监管仓库经营，第一类增值电信业务，第二类增值电信业务，餐饮服务，食品互联网销售。航空运营支持服务，航空运输货物打包服务，航空国际货物运输代理，航空商务服务，非居住房地产租赁，柜台、摊位出租，国内贸易代理，广告设计、代理，广告制作，广告发布，停车场服务，报关业务，国内货物运输代理，旅客票务代理，租赁服务（不含许可类租赁服务），住房租赁，工程和技术研究和试验发展，会议及展览服务，普通货物仓储服务（不含危险化学品等需许可审批的项目），供应链管理服务，装卸搬运，仓储设备租赁服务，信息咨询服务（不含许可类信息咨询服务），物业管理，企业总部管理，专业保洁、清洗、消毒服务，餐厨垃圾处理，环境卫生管理（不含环境质量监测，污染源检查，城市生活垃圾、建筑垃圾、餐厨垃圾的处置服务），特种作业人员安全技术培训，安全咨询服务，人力资源服务（不含职业中介活动、劳务派遣服务），技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广，电动汽车充电基础设施运营，健身休闲活动，互联网销售，人工智能公共服务平台技术咨询服务，外卖递送服务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 6.42,
        "net_profit_yoy_pct": 0.11,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.25,
        "net_margin_pct": 0.2,
        "debt_to_assets_pct": 0.37,
        "cfo_to_np": 1.03,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 6.42,
        "net_profit_yoy_pct": 0.11,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "机场",
          "航空",
          "相关服务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "601156",
      "name": "东航物流",
      "bucket": "交运物流",
      "subcategory": "航空物流",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\东航物流.docx",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "root_alias_hits": [
        "物流",
        "航空",
        "供应链"
      ],
      "child_alias_hits": [
        "物流",
        "供应链"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "航空速运、地面综合服务和综合物流的方案提供。",
        "product_types": [
          "航空速运",
          "地面综合服务",
          "综合物流解决方案"
        ],
        "product_names": [
          "航空速运",
          "地面综合服务",
          "综合物流解决方案"
        ],
        "business_scope": "仓储，海上、航空、陆上国际货物运输代理，货物装卸，物业管理，停车场，会务服务，为国内企业提供劳务派遣服务，日用百货、办公用品的销售，商务咨询（除经纪）、机票代理、货物及技术的进出口业务、电子商务（不得从事增值电信、金融业务），普通货运。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 6.58,
        "net_profit_yoy_pct": 0.06,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.15,
        "net_margin_pct": 0.1,
        "debt_to_assets_pct": 0.33,
        "cfo_to_np": 2.36,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 6.58,
        "net_profit_yoy_pct": 0.06,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "航空物流",
          "航空速运",
          "地面综合服务",
          "综合物流解决方案"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "000582",
      "name": "北部湾港",
      "bucket": "交运物流",
      "subcategory": "港口",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\北部湾港.docx",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "root_alias_hits": [
        "供应链"
      ],
      "child_alias_hits": [
        "供应链"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "集装箱和散杂货的港口装卸、堆存及港口增值服务、港口配套服务。",
        "product_types": [
          "装卸堆存",
          "拖轮业务",
          "理货业务",
          "代理业务"
        ],
        "product_names": [
          "装卸堆存",
          "拖轮业务",
          "理货业务",
          "代理业务"
        ],
        "business_scope": "许可项目：港口经营；国内船舶管理业务；道路货物运输（不含危险货物）（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：港口货物装卸搬运活动；装卸搬运；普通货物仓储服务（不含危险化学品等需许可审批的项目）；电子、机械设备维护（不含特种设备）；机械设备租赁；船舶拖带服务；国际船舶管理业务；非居住房地产租赁；住房租赁；以自有资金从事投资活动；港口理货；化肥销售；水上运输设备零配件销售；五金产品零售；供应链管理服务；工程管理服务；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.66,
        "net_profit_yoy_pct": 0.17,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.3,
        "net_margin_pct": 0.15,
        "debt_to_assets_pct": 0.43,
        "cfo_to_np": 2.83,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 2.66,
        "net_profit_yoy_pct": 0.17,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "港口",
          "装卸堆存",
          "拖轮业务",
          "理货业务",
          "代理业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002040",
      "name": "南京港",
      "bucket": "交运物流",
      "subcategory": "港口",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\南京港.docx",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "root_alias_hits": [
        "供应链"
      ],
      "child_alias_hits": [
        "供应链"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "提供原油、成品油、液体化工产品及普通货物的装卸、仓储服务；在港区内从事集装箱的堆存、门到门运输、相关配件销售；集装箱的拆装、拼箱、修理、清洗；电子数据交换服务及信息咨询服务；为船舶提供码头、在港区内提供物流服务。",
        "product_types": [
          "化工产品装卸及服务收入",
          "集装箱装卸及服务收入",
          "租赁",
          "转供动力燃料以及提供劳务收入"
        ],
        "product_names": [
          "化工产品装卸及服务收入",
          "集装箱装卸及服务收入",
          "租赁",
          "转供动力燃料以及提供劳务收入"
        ],
        "business_scope": "港口的经营（按《港口经营许可证》所列范围经营），原油、成品油、液体化工产品的装卸，植物油及其他货物的装卸、仓储服务，场地租赁，自营和代理各类商品及技术的进出口业务。（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.64,
        "net_profit_yoy_pct": 0.28,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.46,
        "net_margin_pct": 0.23,
        "debt_to_assets_pct": 0.24,
        "cfo_to_np": 0.55,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "net_profit_attr_yi": 0.64,
        "net_profit_yoy_pct": 0.28,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 85,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "港口",
          "化工产品装卸及服务收入",
          "集装箱装卸及服务收入",
          "租赁",
          "转供动力燃料以及提供劳务收入"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 85,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "000905",
      "name": "厦门港务",
      "bucket": "交运物流",
      "subcategory": "港口",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\厦门港务.docx",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "root_alias_hits": [
        "港务",
        "供应链"
      ],
      "child_alias_hits": [
        "供应链"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "散杂货码头装卸与堆存业务、临港综合物流服务和港口贸易三大业务板块。",
        "product_types": [
          "码头装卸与堆存",
          "港口配套服务",
          "综合供应链业务"
        ],
        "product_names": [
          "码头装卸与堆存",
          "港口配套服务",
          "综合供应链业务"
        ],
        "business_scope": "许可项目：港口经营；代理记账。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：技术进出口；货物进出口；装卸搬运；供应链管理服务；国内货物运输代理；运输货物打包服务；打捞服务；普通货物仓储服务（不含危险化学品等需许可审批的项目）；粮油仓储服务；国内贸易代理；销售代理；贸易经纪；寄卖服务；金属材料销售；金属矿石销售；高性能有色金属及合金材料销售；煤炭及制品销售；化工产品销售（不含许可类化工产品）；建筑材料销售；水泥制品销售；非金属矿及制品销售；机械设备销售；电子产品销售；电气设备销售；五金产品批发；服装服饰批发；针纺织品及原料销售；日用品批发；文具用品批发；体育用品及器材批发；工艺美术品及收藏品批发（象牙及其制品除外）；农副产品销售；非居住房地产租赁；住房租赁；企业管理；财务咨询；信息技术咨询服务；软件开发；数据处理和存储支持服务；承接档案服务外包。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.34,
        "net_profit_yoy_pct": -0.0,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.08,
        "net_margin_pct": 0.04,
        "debt_to_assets_pct": 0.46,
        "cfo_to_np": 0.17,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 2.34,
        "net_profit_yoy_pct": -0.0,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 63,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "港口",
          "码头装卸与堆存",
          "港口配套服务",
          "综合供应链业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 96,
        "fundamental_score": 63,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "601000",
      "name": "唐山港",
      "bucket": "交运物流",
      "subcategory": "港口",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\唐山港.docx",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "root_alias_hits": [
        "供应链"
      ],
      "child_alias_hits": [
        "供应链"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "港口综合运输业务。",
        "product_types": [
          "港口装卸堆存",
          "运输物流",
          "保税仓储",
          "港口综合服务"
        ],
        "product_names": [
          "港口装卸堆存",
          "运输物流",
          "保税仓储",
          "港口综合服务"
        ],
        "business_scope": "许可项目：港口经营（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：港口货物装卸搬运活动；普通货物仓储服务（不含危险化学品等需许可审批的项目）；国内货物运输代理；国际货物运输代理；货物进出口；技术进出口；建筑材料销售；机械设备租赁；非居住房地产租赁；矿物洗选加工；电动汽车充电基础设施运营；企业管理；劳务服务（不含劳务派遣）；人力资源服务（不含职业中介活动、劳务派遣服务）；社会经济咨询服务；信息咨询服务（不含许可类信息咨询服务）；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 5.23,
        "net_profit_yoy_pct": 0.23,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.48,
        "net_margin_pct": 0.34,
        "debt_to_assets_pct": 0.08,
        "cfo_to_np": 1.01,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 5.23,
        "net_profit_yoy_pct": 0.23,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "港口",
          "港口装卸堆存",
          "运输物流",
          "保税仓储",
          "港口综合服务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600717",
      "name": "天津港",
      "bucket": "交运物流",
      "subcategory": "港口",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\天津港.docx",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "root_alias_hits": [
        "供应链"
      ],
      "child_alias_hits": [
        "供应链"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "装卸、销售、物流和港口综合配套服务等。",
        "product_types": [
          "装卸业务",
          "销售业务",
          "港口物流业务",
          "港口服务及其他业务"
        ],
        "product_names": [
          "装卸业务",
          "销售业务",
          "港口物流业务",
          "港口服务及其他业务"
        ],
        "business_scope": "许可项目：港口经营；道路货物运输(不含危险货物)(依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准)。一般项目：普通货物仓储服务(不含危险化学品等需许可审批的项目)；道路货物运输站经营；港口货物装卸搬运活动；装卸搬运；国内货物运输代理；国内集装箱货物运输代理；国际货物运输代理；劳务服务(不含劳务派遣)；船舶港口服务一般事项；信息咨询服务(不含许可类信息咨询服务)；非居住房地产租赁；信息系统集成服务；信息技术咨询服务；信息系统运行维护服务；软件开发；软件销售；计算机软硬件及辅助设备批发；计算机软硬件及辅助设备零售(除依法须经批准的项目外，凭营业执照依法自主开展经营活动)(不得投资《外商投资准入负面清单》中禁止外商投资的领域)",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 5.2,
        "net_profit_yoy_pct": 0.28,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.39,
        "net_margin_pct": 0.2,
        "debt_to_assets_pct": 0.24,
        "cfo_to_np": 0.73,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 5.2,
        "net_profit_yoy_pct": 0.28,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "港口",
          "装卸业务",
          "销售业务",
          "港口物流业务",
          "港口服务及其他业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "601018",
      "name": "宁波港",
      "bucket": "交运物流",
      "subcategory": "港口",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\宁波港.docx",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "root_alias_hits": [
        "供应链"
      ],
      "child_alias_hits": [
        "供应链"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "集装箱、铁矿石、原油、煤炭、液化油品、粮食、矿建材料及其他货种的港口装卸及相关业务，同时从事综合物流、贸易销售等其他业务。",
        "product_types": [
          "集装箱装卸及相关业务",
          "铁矿石装卸及相关业务",
          "原油装卸及相关业务",
          "其他货物装卸及相关业务",
          "综合物流及其他业务",
          "贸易销售业务"
        ],
        "product_names": [
          "集装箱装卸及相关业务",
          "铁矿石装卸及相关业务",
          "原油装卸及相关业务",
          "其他货物装卸及相关业务",
          "综合物流及其他业务",
          "贸易销售业务"
        ],
        "business_scope": "码头开发经营、管理；港口货物的装卸、堆存、仓储、包装、灌装；集装箱拆拼箱、清洗、修理、制造、租赁；在港区内从事货物驳运，国际货运代理；铁路货物运输代理，铁路工程承建，铁路设备维修；港口拖轮经营；自有场地、船舶、设备、设施及自有房屋租赁；港口信息、技术咨询服务；环境监测；口岸物流信息服务；港口起重、运输、装卸机械的制造、安装、维修；水电、管道的安装、维修；船舶港口服务业务经营；蒸汽供应；危险化学品储存（限分支机构持证经营，限危险化学品生产储存批准证书和危险货物港口作业认可批准品种）；危险货物港口作业（限分支机构持证经营）；生活饮用水制水、供水（在卫生许可证有效期限内经营）；非生活饮用水供应；港区供水、供电；港口旅客运输服务经营；国内陆路货运代理、小件行李寄存；货物车船联托运、装卸搬运服务；自营和代理各类货物和技术的进出口，但国家限制或禁止进出口的货物和技术除外；劳务服务；物业管理；工程项目管理；工程招标及代理；工程造价咨询；工程技术咨询；工程预算审计；港务工程技术的开发、研究、咨询服务；（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 13.12,
        "net_profit_yoy_pct": -0.0,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.28,
        "net_margin_pct": 0.16,
        "debt_to_assets_pct": 0.24,
        "cfo_to_np": -0.88,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 13.12,
        "net_profit_yoy_pct": -0.0,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 62,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "港口",
          "集装箱装卸及相关业务",
          "铁矿石装卸及相关业务",
          "原油装卸及相关业务",
          "其他货物装卸及相关业务",
          "综合物流及其他业务",
          "贸易销售业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 62,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "000089",
      "name": "深圳机场",
      "bucket": "交运物流",
      "subcategory": "机场",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\深圳机场.docx",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "root_alias_hits": [
        "航空",
        "供应链",
        "机场"
      ],
      "child_alias_hits": [
        "供应链"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "航空服务业务及其延伸出的非航空业务。",
        "product_types": [
          "航空及相关服务"
        ],
        "product_names": [
          "航空及相关服务"
        ],
        "business_scope": "投资兴办实业（具体项目另行申报）；国内商业、物资供销业（不含专营、专控、专卖商品）；航空客货地面运输及过港保障与服务；机场航空及辅助设备投资业务；进出口业务（凭批准证书经营）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.63,
        "net_profit_yoy_pct": 0.59,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.24,
        "net_margin_pct": 0.2,
        "debt_to_assets_pct": 0.52,
        "cfo_to_np": 3.27,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "net_profit_attr_yi": 2.63,
        "net_profit_yoy_pct": 0.59,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "机场",
          "航空及相关服务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600548",
      "name": "深高速",
      "bucket": "交运物流",
      "subcategory": "高速公路",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\深高速.docx",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "root_alias_hits": [
        "供应链"
      ],
      "child_alias_hits": [
        "供应链"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "收费公路及大环保业务的投资、建设及经营管理。",
        "product_types": [
          "收费公路",
          "固废资源化处理",
          "清洁能源发电",
          "其他相关业务"
        ],
        "product_names": [
          "收费公路",
          "固废资源化处理",
          "清洁能源发电",
          "其他相关业务"
        ],
        "business_scope": "一般经营项目是：公路和道路的投资、建设管理、经营管理；进出口业务（凭资格证书经营）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 5.55,
        "net_profit_yoy_pct": 0.07,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.39,
        "net_margin_pct": 0.32,
        "debt_to_assets_pct": 0.54,
        "cfo_to_np": 1.85,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 5.55,
        "net_profit_yoy_pct": 0.07,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "高速公路",
          "收费公路",
          "固废资源化处理",
          "清洁能源发电",
          "其他相关业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 86,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600377",
      "name": "宁沪高速",
      "bucket": "交运物流",
      "subcategory": "高速公路",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\宁沪高速.docx",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "root_alias_hits": [
        "供应链"
      ],
      "child_alias_hits": [
        "供应链"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "江苏省境内收费路桥的投资、建设、经营及管理，并开发高速公路沿线的服务区配套经营业务。",
        "product_types": [
          "收费公路",
          "配套服务",
          "地产业务",
          "电力销售",
          "清障业务",
          "其他业务"
        ],
        "product_names": [
          "沪宁高速",
          "广靖高速及锡澄高速",
          "宁常高速及镇溧高速",
          "锡宜高速及无锡环太湖公路",
          "镇丹高速",
          "常宜高速",
          "宜长高速",
          "五峰山大桥",
          "宁扬长江大桥",
          "配套服务",
          "地产业务",
          "电力销售",
          "清障业务",
          "其他业务"
        ],
        "business_scope": "石油制品零售，汽车维修，住宿、餐饮、食品销售，书报刊零售、出租（以上均限批准的分支机构经营）。高速公路建设和维护管理，按章对通过车辆收费；物资储存；技术咨询；百货、纺织品、日用杂品、五金、交电、化工产品（危险化学品除外）、汽车零配件、摩托车零配件的销售；设备租赁，房屋租赁、场地租赁。（依法须经批准的项目，经相关部门批准后方可开展经营活动）一般项目：机动车充电销售；电动汽车充电基础设施运营；集中式快速充电站；新能源汽车换电设施销售（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 14.19,
        "net_profit_yoy_pct": 0.13,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.37,
        "net_margin_pct": 0.31,
        "debt_to_assets_pct": 0.43,
        "cfo_to_np": 1.21,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 14.19,
        "net_profit_yoy_pct": 0.13,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "高速公路",
          "沪宁高速",
          "广靖高速及锡澄高速",
          "宁常高速及镇溧高速",
          "锡宜高速及无锡环太湖公路",
          "镇丹高速",
          "常宜高速"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "601333",
      "name": "广深铁路",
      "bucket": "交运物流",
      "subcategory": "铁路",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\广深铁路.docx",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "root_alias_hits": [
        "铁路",
        "供应链",
        "铁路运输"
      ],
      "child_alias_hits": [
        "供应链"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "铁路客货运输服务。",
        "product_types": [
          "客运业务",
          "货运业务",
          "提供运输服务业务"
        ],
        "product_names": [
          "客运业务",
          "货运业务",
          "提供运输服务业务"
        ],
        "business_scope": "铁路客货运输服务；铁路设施技术服务；经营国内商业、物资供销业(不含专营、专控、专卖商品)；兴办各类实业(具体项目另报)。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 5.8,
        "net_profit_yoy_pct": 0.24,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.12,
        "net_margin_pct": 0.08,
        "debt_to_assets_pct": 0.22,
        "cfo_to_np": -0.06,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 5.8,
        "net_profit_yoy_pct": 0.24,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 84,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "铁路",
          "客运业务",
          "货运业务",
          "提供运输服务业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 84,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002928",
      "name": "华夏航空",
      "bucket": "交运物流",
      "subcategory": "航空",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\华夏航空.docx",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "root_alias_hits": [
        "航空",
        "供应链"
      ],
      "child_alias_hits": [
        "供应链"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "国内、国际的航空客货运输业务。",
        "product_types": [
          "客运",
          "货运"
        ],
        "product_names": [
          "客运",
          "货运"
        ],
        "business_scope": "法律、法规、国务院决定规定禁止的不得经营；法律、法规、国务院决定规定应当许可（审批）的，经审批机关批准后凭许可（审批）文件经营；法律、法规、国务院决定规定无需许可（审批）的，市场主体自主选择经营。国内（含港澳台），国际航空客货运输业务；与航空运输有关的服务业务；地面延伸服务（接送机、快速安检通道、休息室）；食品销售（涉及许可经营项目，应取得相关部门许可后方可经营）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-27",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.34,
        "net_profit_yoy_pct": 0.64,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": -0.0,
        "net_margin_pct": 0.07,
        "debt_to_assets_pct": 0.84,
        "cfo_to_np": 5.15,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-27",
        "net_profit_attr_yi": 1.34,
        "net_profit_yoy_pct": 0.64,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "航空",
          "客运",
          "货运"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600029",
      "name": "南方航空",
      "bucket": "交运物流",
      "subcategory": "航空",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\南方航空.docx",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "root_alias_hits": [
        "航空",
        "供应链"
      ],
      "child_alias_hits": [
        "供应链"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "提供国内、地区和国际定期及不定期航空客、货、邮、行李运输服务。",
        "product_types": [
          "运输",
          "酒店及旅游",
          "航空配餐"
        ],
        "product_names": [
          "客运及客运相关服务",
          "货运及邮运",
          "酒店及旅游",
          "航空配餐"
        ],
        "business_scope": "提供国内、地区和国际定期及不定期航空客、货、邮、行李运输服务；提供航空器维修服务；经营国内外航空公司的代理业务；提供航空配餐服务（仅限分支机构经营）；航空地面延伸业务；民用航空器机型培训（限分支机构凭许可证经营）；资产租赁；工程管理与技术咨询；航材销售；旅游代理服务；商品零售批发；健康体检服务；互联网销售（除销售需要许可的商品）；保险兼业代理业务；国内贸易代理；专业设计服务；第一类增值电信业务；第二类增值电信业务；广告制作；广告发布；广告设计、代理；互联网数据服务；互联网信息服务；信息系统集成服务；物联网技术服务；社会经济咨询服务；信息技术咨询服务；信息咨询服务（不含许可类信息咨询服务）。（依法须经批准的项目，经相关部门批准后方可开展经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 21.51,
        "net_profit_yoy_pct": 2.98,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.11,
        "net_margin_pct": 0.05,
        "debt_to_assets_pct": 0.84,
        "cfo_to_np": 2.26,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 21.51,
        "net_profit_yoy_pct": 2.98,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "航空",
          "客运及客运相关服务",
          "货运及邮运",
          "酒店及旅游",
          "航空配餐"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "601021",
      "name": "春秋航空",
      "bucket": "交运物流",
      "subcategory": "航空",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\春秋航空.docx",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "root_alias_hits": [
        "航空",
        "供应链"
      ],
      "child_alias_hits": [
        "供应链"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "国内、国际及港澳台航空客货运输业务及与航空运输业务相关的服务。",
        "product_types": [
          "航空客运",
          "航空货运"
        ],
        "product_names": [
          "航空客运",
          "航空货运"
        ],
        "business_scope": "国内航空客货运输业务；内地至香港，澳门特别行政区和周边国家的航空客货运输业务；航空公司间的代理业务；与航空运输业务相关的服务业务；市际包车客运；市县际定线旅游客运；从事货物及技术的进出口业务；代理货物运输保险，健康保险，人寿保险，意外伤害保险，责任保险；预包装食品(不含熟食卤味，冷冻冷藏),工艺礼品，家用电器，日用百货，五金交电，纺织品，电子产品，化工原料(除危险品),金属材料，仪器仪表，机械设备，汽车零配件的批发零售，自有设备租赁业务，职工食堂，航空配餐(限分支经营)。【依法须经批准的项目，经相关部门批准后方可开展经营活动】",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 9.83,
        "net_profit_yoy_pct": 0.45,
        "revenue_yoy_pct": "",
        "roe_pct": 0.05,
        "gross_margin_pct": 0.2,
        "net_margin_pct": 0.16,
        "debt_to_assets_pct": 0.62,
        "cfo_to_np": 1.67,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 9.83,
        "net_profit_yoy_pct": 0.45,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "航空",
          "航空客运",
          "航空货运"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "603885",
      "name": "吉祥航空",
      "bucket": "交运物流",
      "subcategory": "航空",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\吉祥航空.docx",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "root_alias_hits": [
        "航空",
        "供应链"
      ],
      "child_alias_hits": [
        "供应链"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "航空客货运输业务。",
        "product_types": [
          "航空客运",
          "航空货运"
        ],
        "product_names": [
          "航空客运",
          "航空货运"
        ],
        "business_scope": "国内（含港澳台）航空客货运输业务、国际航空客货运输业务，航空配餐，飞机零配件的制造，日用百货，五金交电，纺织品，电子产品，家用电器，文化用品，工艺美术品，化工原料（除危险品），金属材料，仪器仪表，机械设备，汽车配件的销售，从事货物及技术的进出口业务【依法须经批准的项目，经相关部门批准后方可开展经营活动】",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 4.4,
        "net_profit_yoy_pct": 0.28,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.16,
        "net_margin_pct": 0.07,
        "debt_to_assets_pct": 0.8,
        "cfo_to_np": 4.68,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 4.4,
        "net_profit_yoy_pct": 0.28,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "航空",
          "航空客运",
          "航空货运"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002041",
      "name": "登海种业",
      "bucket": "农业养殖",
      "subcategory": "种业 / 种植",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\登海种业.docx",
      "rule_root_id": "agriculture_food",
      "rule_child_id": "seed_planting",
      "root_alias_hits": [
        "种业"
      ],
      "child_alias_hits": [
        "种业"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "农作物新品种选育、许可证规定经营范围内的农作物种子生产、分装、销售。",
        "product_types": [
          "玉米种（苗）",
          "小麦种（苗）",
          "蔬菜种（苗）",
          "水稻种（苗）"
        ],
        "product_names": [
          "玉米种（苗）",
          "小麦种（苗）",
          "蔬菜种（苗）",
          "水稻种（苗）"
        ],
        "business_scope": "一般项目：非主要农作物种子生产；农业科学研究和试验发展；工程和技术研究和试验发展；农作物栽培服务；智能农业管理；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；与农业生产经营有关的技术、信息、设施建设运营等服务；农业专业及辅助性活动：花卉种植：初级农产品收购：粮食收购。许可项目：主要农作物种子生产；转基因农作物种子生产；农作物种子经营；农作物种子进出口。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.37,
        "net_profit_yoy_pct": 0.37,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.32,
        "net_margin_pct": 0.14,
        "debt_to_assets_pct": 0.16,
        "cfo_to_np": -0.64,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 0.37,
        "net_profit_yoy_pct": 0.37,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "农业养殖",
          "种业 / 种植",
          "玉米种（苗）",
          "小麦种（苗）",
          "蔬菜种（苗）",
          "水稻种（苗）"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "001313",
      "name": "粤海饲料",
      "bucket": "农业养殖",
      "subcategory": "饲料 / 水产饲料",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\粤海饲料.docx",
      "rule_root_id": "agriculture_food",
      "rule_child_id": "pig_poultry_aquaculture",
      "root_alias_hits": [
        "饲料"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "水产饲料的研发、生产与销售。",
        "product_types": [
          "饲料销售",
          "动保产品销售"
        ],
        "product_names": [
          "饲料销售",
          "动保产品销售"
        ],
        "business_scope": "一般项目：畜牧渔业饲料销售；饲料原料销售；饲料添加剂销售；肥料销售；货物进出口；渔业机械销售；土地使用权租赁；水产品批发；农业专业及辅助性活动。技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；非居住房地产租赁。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）许可项目：饲料生产；兽药经营；水产养殖。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）特此公告。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-27",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.12,
        "net_profit_yoy_pct": 1.46,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.11,
        "net_margin_pct": 0.01,
        "debt_to_assets_pct": 0.51,
        "cfo_to_np": -11.75,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-27",
        "net_profit_attr_yi": 0.12,
        "net_profit_yoy_pct": 1.46,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 69,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "农业养殖",
          "饲料 / 水产饲料",
          "饲料销售",
          "动保产品销售"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 69,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "601827",
      "name": "三峰环境",
      "bucket": "环保 / 水务固废",
      "subcategory": "固废 / 垃圾焚烧",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\三峰环境.docx",
      "rule_root_id": "environmental_utilities",
      "rule_child_id": "solid_waste_recycling",
      "root_alias_hits": [
        "环境",
        "环境治理"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "垃圾焚烧发电等固废项目投资、EPC总承包、设备制造和运营管理服务。",
        "product_types": [
          "工程建造",
          "项目运营"
        ],
        "product_names": [
          "工程建造",
          "项目运营"
        ],
        "business_scope": "发电业务、输电业务、供（配）电业务；供暖服务；建设工程施工。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：固体废物治理；农村生活垃圾经营性服务；资源再生利用技术研发；生物质能技术服务；货物进出口；技术进出口；热力生产和供应；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；合同能源管理；新兴能源技术研发；余热发电关键技术研发；余热余压余气利用技术研发；光伏发电设备租赁；光伏设备及元器件销售；光伏设备及元器件制造；气体、液体分离及纯净设备销售；管道运输设备销售；以BOT等方式建设及运营垃圾焚烧发电工厂；从事环境卫生、环境保护技术咨询服务，环境污染治理及环保技术开发（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 4.63,
        "net_profit_yoy_pct": 0.05,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.48,
        "net_margin_pct": 0.3,
        "debt_to_assets_pct": 0.47,
        "cfo_to_np": 0.97,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 4.63,
        "net_profit_yoy_pct": 0.05,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 85,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "环保 / 水务固废",
          "固废 / 垃圾焚烧",
          "工程建造",
          "项目运营"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 96,
        "fundamental_score": 85,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "601200",
      "name": "上海环境",
      "bucket": "环保 / 水务固废",
      "subcategory": "环保综合",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\上海环境.docx",
      "rule_root_id": "environmental_utilities",
      "rule_child_id": "environmental_engineering",
      "root_alias_hits": [
        "环境",
        "环境治理"
      ],
      "child_alias_hits": [
        "环境治理"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "固体废弃物处置、城市污水处理等环境市政项目投资、建设与运营。",
        "product_types": [
          "环保项目建造及运营",
          "设计",
          "工程承包及生态修复"
        ],
        "product_names": [
          "环保项目建造及运营",
          "设计",
          "工程承包及生态修复"
        ],
        "business_scope": "许可项目：城市生活垃圾经营性服务；危险废物经营；自来水生产与供应；建设工程设计；货物进出口；技术进出口；各类工程建设活动（除核电站工程建设活动）；一般项目：固体废弃物处置、污水处理等环保项目和其他市政基础设施项目的投资；农村生活垃圾经营性服务；固体废物治理；资源循环利用服务技术咨询；环境保护专用设备制造；工程和技术研究和试验发展；资源再生利用技术研发；土壤污染治理与修复服务；污水处理及其再生利用；工程管理服务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.88,
        "net_profit_yoy_pct": 0.0,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.31,
        "net_margin_pct": 0.15,
        "debt_to_assets_pct": 0.55,
        "cfo_to_np": 0.05,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 1.88,
        "net_profit_yoy_pct": 0.0,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 87,
        "fundamental_score": 63,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "环保 / 水务固废",
          "环保综合",
          "环保项目建造及运营",
          "设计",
          "工程承包及生态修复"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 87,
        "fundamental_score": 63,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600874",
      "name": "创业环保",
      "bucket": "环保 / 水务固废",
      "subcategory": "水务 / 污水处理",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\创业环保.docx",
      "rule_root_id": "environmental_utilities",
      "rule_child_id": "water_treatment",
      "root_alias_hits": [
        "环保"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "污水处理、再生水利用、污泥资源化、固废处置、资源循环、新能源供冷供热、光伏储能等业务。",
        "product_types": [
          "污水处理及水厂设施建设业务",
          "再生水处理及再生水配套工程业务",
          "道路收费",
          "自来水供水及水厂设施建设业务",
          "供冷供热及相关设施建设业务",
          "科研成果转化",
          "危废处置业务"
        ],
        "product_names": [
          "污水处理及水厂设施建设业务",
          "再生水处理及再生水配套工程业务",
          "道路收费",
          "自来水供水及水厂设施建设业务",
          "供冷供热及相关设施建设业务",
          "科研成果转化",
          "危废处置业务"
        ],
        "business_scope": "污水与自来水以及其他水处理设施的投资、建设、设计、管理、经营、技术咨询、配套服务；市政基础设施的设计、建设、管理、施工和经营管理；天津市中环线东南半环城市道路特许经营、技术咨询及配套服务；环保科技及环保产品设备的开发经营；自有房屋出租等。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.9,
        "net_profit_yoy_pct": 0.08,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.39,
        "net_margin_pct": 0.25,
        "debt_to_assets_pct": 0.55,
        "cfo_to_np": -0.43,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "net_profit_attr_yi": 2.9,
        "net_profit_yoy_pct": 0.08,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "环保 / 水务固废",
          "水务 / 污水处理",
          "污水处理及水厂设施建设业务",
          "再生水处理及再生水配套工程业务",
          "道路收费",
          "自来水供水及水厂设施建设业务",
          "供冷供热及相关设施建设业务",
          "科研成果转化"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "000885",
      "name": "城发环境",
      "bucket": "环保 / 水务固废",
      "subcategory": "环保综合",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\城发环境.docx",
      "rule_root_id": "environmental_utilities",
      "rule_child_id": "environmental_engineering",
      "root_alias_hits": [
        "环境",
        "环境治理"
      ],
      "child_alias_hits": [
        "环境治理"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "固体废弃物处理业务、危险废物、医疗废物处置业务和有机垃圾处置业务。",
        "product_types": [
          "固体废弃物处理",
          "环保方案集成服务",
          "水处理",
          "环境卫生服务",
          "高速公路业务",
          "其他"
        ],
        "product_names": [
          "固体废弃物处理",
          "环保方案集成服务",
          "水处理",
          "环境卫生服务",
          "高速公路业务",
          "其他"
        ],
        "business_scope": "环境及公用事业项目的投资、建设、运营及管理；城市给排水、污水综合处理、中水利用、污泥处理；热力生产和供应；垃圾发电；水污染治理、大气环境治理、土壤治理、固体废弃物治理、餐厨垃圾处理、资源综合利用、生态工程和生态修复领域的技术研究与科技开发、设备制造与销售、工程设计与总承包建设、项目管理、工程咨询、技术服务；高速公路及市政基础设施投资、建设、运营；生态工程和生态修复；苗木种植；园林设计；园林绿化工程和园林维护；国内贸易。（依法须经批注的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 3.43,
        "net_profit_yoy_pct": 0.15,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.42,
        "net_margin_pct": 0.21,
        "debt_to_assets_pct": 0.67,
        "cfo_to_np": 0.92,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 3.43,
        "net_profit_yoy_pct": 0.15,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 85,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "环保 / 水务固废",
          "环保综合",
          "固体废弃物处理",
          "环保方案集成服务",
          "水处理",
          "环境卫生服务",
          "高速公路业务",
          "其他"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 85,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002034",
      "name": "旺能环境",
      "bucket": "环保 / 水务固废",
      "subcategory": "固废 / 垃圾焚烧",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\旺能环境.docx",
      "rule_root_id": "environmental_utilities",
      "rule_child_id": "solid_waste_recycling",
      "root_alias_hits": [
        "环境"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "城市生活垃圾焚烧发电、餐厨、污泥等垃圾处理业务。",
        "product_types": [
          "生活垃圾项目运行",
          "餐厨垃圾项目运行",
          "橡胶再生"
        ],
        "product_names": [
          "电力产品",
          "蒸汽产品",
          "废弃油脂",
          "再生橡胶"
        ],
        "business_scope": "环保设备的研发、设计、制造、销售及安装服务，环境治理技术开发、咨询及服务，环境治理设施的运营服务，实业投资，资产管理，投资管理，投资管理咨询，生活垃圾、固体废弃物处置及回收利用相关配套设施的设计、开发、运营管理及技术咨询服务。（未经金融等监管部门批准，不得从事向公众融资存款、融资担保、代客理财等金融服务）（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.04,
        "net_profit_yoy_pct": 0.0,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.44,
        "net_margin_pct": 0.24,
        "debt_to_assets_pct": 0.46,
        "cfo_to_np": 1.25,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 2.04,
        "net_profit_yoy_pct": 0.0,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 67,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "环保 / 水务固废",
          "固废 / 垃圾焚烧",
          "电力产品",
          "蒸汽产品",
          "废弃油脂",
          "再生橡胶"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 96,
        "fundamental_score": 67,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600323",
      "name": "瀚蓝环境",
      "bucket": "环保 / 水务固废",
      "subcategory": "水务 / 固废",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\瀚蓝环境.docx",
      "rule_root_id": "environmental_utilities",
      "rule_child_id": "water_treatment",
      "root_alias_hits": [
        "环境",
        "环境治理"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "固废处理业务、能源业务、供水业务以及排水业务。",
        "product_types": [
          "固废处理业务",
          "能源业务",
          "供水业务",
          "排水业务"
        ],
        "product_names": [
          "固废处理业务",
          "能源业务",
          "供水业务",
          "排水业务"
        ],
        "business_scope": "许可项目：自来水生产与供应；餐厨垃圾处理；危险废物经营；燃气经营；城市生活垃圾经营性服务；建设工程设计；建设工程施工；发电业务、输电业务、供（配）电业务；道路危险货物运输建设工程勘察；供电业务。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：固体废物治理；污水处理及其再生利用；生活垃圾处理装备制造；生活垃圾处理装备销售；工程技术服务（规划管理、勘察、设计、监理除外）；热力生产和供应；太阳能发电技术服务；新兴能源技术研发；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；节能管理服务；碳减排、碳转化、碳捕捉、碳封存技术研发；环保咨询服务；温室气体排放控制技术研发；资源再生利用技术研发；资源循环利用服务技术咨询；环境保护专用设备制造；环境保护专用设备销售；工业工程设计服务；住宅水电安装维护服务；工程管理服务；以自有资金从事投资活动；水环境污染防治服务；污泥处理装备制造；物业管理；供应链管理服务；企业总部管理。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 7.13,
        "net_profit_yoy_pct": 0.38,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.38,
        "net_margin_pct": 0.2,
        "debt_to_assets_pct": 0.69,
        "cfo_to_np": 0.68,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 7.13,
        "net_profit_yoy_pct": 0.38,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "环保 / 水务固废",
          "水务 / 固废",
          "固废处理业务",
          "能源业务",
          "供水业务",
          "排水业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "000967",
      "name": "盈峰环境",
      "bucket": "环保 / 水务固废",
      "subcategory": "环卫装备 / 环境服务",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\盈峰环境.docx",
      "rule_root_id": "environmental_utilities",
      "rule_child_id": "environmental_engineering",
      "root_alias_hits": [
        "环境"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "环保装备的研发、销售、维修及运营服务，环卫运营服务，环境治理设施的运营服务，环境工程、环保工程、市政工程，通风机、风冷、水冷、空调设备的销售。",
        "product_types": [
          "智能装备",
          "智慧服务",
          "智云计算"
        ],
        "product_names": [
          "智能装备",
          "智慧服务",
          "智云计算"
        ],
        "business_scope": "环卫设备、特殊作业机器人、新能源汽车、环境监测设备、环境保护专用设备、汽车充电设备及零部件的研发、制造、销售、技术咨询、维修及运营服务，设备租赁，城市垃圾、固体废弃物处置及回收利用相关配套设施的设计、运营管理、技术开发、技术服务，环境工程、市政工程、园林工程、电力工程、水利水务工程、水污染治理工程、大气污染治理工程、土壤修复工程的设计、施工、运营管理、技术开发、技术服务，城市生活垃圾经营性清扫、收集、运输、处理服务（凭许可证经营），环保技术、物联网技术、互联网技术开发、技术咨询、技术服务，软件的研发、销售，通风机、风冷、水冷、空调设备的销售，从事进出口业务，投资咨询。（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.2,
        "net_profit_yoy_pct": 0.19,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.22,
        "net_margin_pct": 0.06,
        "debt_to_assets_pct": 0.54,
        "cfo_to_np": -5.6,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 2.2,
        "net_profit_yoy_pct": 0.19,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "环保 / 水务固废",
          "环卫装备 / 环境服务",
          "智能装备",
          "智慧服务",
          "智云计算"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600388",
      "name": "龙净环保",
      "bucket": "环保 / 水务固废",
      "subcategory": "大气治理",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\龙净环保.docx",
      "rule_root_id": "environmental_utilities",
      "rule_child_id": "environmental_engineering",
      "root_alias_hits": [
        "环保"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "大气污染治理、绿电及储能以及电动矿卡三大业务。",
        "product_types": [
          "大气污染治理设备",
          "绿电业务",
          "储能业务"
        ],
        "product_names": [
          "除尘器及配套设备及安装",
          "脱硫",
          "脱硝工程项目",
          "水处理环保设备",
          "危废处置收入",
          "垃圾焚烧收入",
          "脱硝催化剂",
          "土壤修复",
          "水污染治理",
          "VOCS项目",
          "环保设备运营项目",
          "绿电业务",
          "储能业务"
        ],
        "business_scope": "一般项目：环境保护专用设备制造；大气污染治理；水污染治理；固体废物治理；土壤污染治理与修复服务；工程管理服务；节能管理服务；资源循环利用服务技术咨询；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；环保咨询服务；生态恢复及生态保护服务；环境保护监测；生态资源监测；物料搬运装备制造；物料搬运装备销售；智能物料搬运装备销售；装卸搬运；普通货物仓储服务（不含危险化学品等需许可审批的项目）；输配电及控制设备制造；专用设备制造（不含许可类专业设备制造）；市政设施管理；环境卫生管理（不含环境质量监测，污染源检查，城市生活垃圾、建筑垃圾、餐厨垃圾的处置服务）；土地整治服务；污水处理及其再生利用；水资源专用机械设备制造；生态环境材料制造；生态环境材料销售；专用化学产品制造（不含危险化学品）；专用化学产品销售（不含危险化学品）；新型膜材料制造；新型膜材料销售；生物化工产品技术研发；储能技术服务；新材料技术研发；新材料技术推广服务；电池零配件生产；电池零配件销售；电子专用材料制造；电子专用材料销售；电子专用材料研发；电池制造；电池销售；太阳能发电技术服务；风力发电技术服务；新兴能源技术研发；以自有资金从事投资活动；互联网数据服务；物联网技术服务；信息系统集成服务；软件开发；货物进出口；技术进出口；气体、液体分离及纯净设备制造；家用电器制造；家用电器销售；五金产品批发。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）许可项目：发电业务、输电业务、供（配）电业务；城市生活垃圾经营性服务；城市建筑垃圾处置（清运）；餐厨垃圾处理；建设工程施工；建设工程设计；检验检测服务。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-22",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.45,
        "net_profit_yoy_pct": 0.32,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.26,
        "net_margin_pct": 0.1,
        "debt_to_assets_pct": 0.6,
        "cfo_to_np": -0.98,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-22",
        "net_profit_attr_yi": 2.45,
        "net_profit_yoy_pct": 0.32,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "环保 / 水务固废",
          "大气治理",
          "除尘器及配套设备及安装",
          "脱硫",
          "脱硝工程项目",
          "水处理环保设备",
          "危废处置收入",
          "垃圾焚烧收入"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002340",
      "name": "格林美",
      "bucket": "环保 / 水务固废",
      "subcategory": "固废 / 再生资源",
      "priority": "P0",
      "original_evidence_level": "review",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\格林美.docx",
      "rule_root_id": "environmental_utilities",
      "rule_child_id": "solid_waste_recycling",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found",
        "child_alias_not_found"
      ],
      "business_evidence": {
        "business_summary": "关键金属资源循环利用、动力锂电池循环利用与新能源电池材料制造。",
        "product_types": [
          "关键金属的提取与回收",
          "动力锂电池循环利用",
          "新能源电池材料",
          "贸易"
        ],
        "product_names": [
          "镍资源",
          "钴回收业务",
          "钨资源回收利用业务",
          "动力电池综合利用",
          "报废汽车综合利用",
          "三元前驱体",
          "四氧化三钴",
          "正极材料",
          "贸易"
        ],
        "business_scope": "二次资源循环利用技术的研究、开发;生态环境材料、新能源材料、超细粉体材料、光机电精密分析仪器、循环技术的研究、开发及高新技术咨询与服务;投资兴办实业(具体项目另行申报):国内贸易(不含专营、专控、专卖商品);经营进出口业务(法律、行政法规、国务院决定禁止的项目除外,限制的项目须取得许可证后方可经营);普通货运(不含危险物品,凭《道路运输经营许可证》经营);超细镍粉、超细钴粉的生产、销售及废旧电池的收集与暂存(由分支机构经营)。塑木型材及铜合金制品的生产、销售及废线路板处理(由分支机构经营);废旧金属、电池厂废料、报废电子产品、废旧家电、报废机电设备及其零部件、废造纸原料、废轻化工原料、废玻璃回收、处置与销售(以上经营项目由分支机构经营);废旧车用动力蓄电池的收集、贮存、处置(以上经营项目由分支机构经营)。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 6.48,
        "net_profit_yoy_pct": 0.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.17,
        "net_margin_pct": 0.06,
        "debt_to_assets_pct": 0.65,
        "cfo_to_np": 0.39,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 6.48,
        "net_profit_yoy_pct": 0.02,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "环保 / 水务固废",
          "固废 / 再生资源",
          "镍资源",
          "钴回收业务",
          "钨资源回收利用业务",
          "动力电池综合利用",
          "报废汽车综合利用",
          "三元前驱体"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002078",
      "name": "太阳纸业",
      "bucket": "纺服轻工",
      "subcategory": "造纸 / 印刷",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\太阳纸业.docx",
      "rule_root_id": "textile_light_industry",
      "rule_child_id": "paper_printing",
      "root_alias_hits": [
        "造纸",
        "纸制品"
      ],
      "child_alias_hits": [
        "造纸",
        "纸制品"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "机制纸、纸制品、木浆、纸板的生产和销售。",
        "product_types": [
          "双胶纸",
          "铜版纸",
          "牛皮箱板纸",
          "淋膜原纸",
          "生活用纸",
          "瓦楞原纸",
          "溶解浆",
          "化机浆",
          "化学浆"
        ],
        "product_names": [
          "双胶纸",
          "铜版纸",
          "牛皮箱板纸",
          "淋膜原纸",
          "生活用纸",
          "瓦楞原纸",
          "溶解浆",
          "化机浆",
          "化学浆"
        ],
        "business_scope": "机制纸、纸板制造；纸制品制造、加工；造纸用农产品的收购；建筑材料、五金交电、化工产品（不含化学危险品）销售；货物进出口；9.8万t/a杨木化学机械浆生产销售；热电的生产（不含电力供应，国家法律法规禁止的项目除外）；房地产开发；食品添加剂木糖醇、木糖及相关产品的研发、生产销售。（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 9.1,
        "net_profit_yoy_pct": 0.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.15,
        "net_margin_pct": 0.09,
        "debt_to_assets_pct": 0.48,
        "cfo_to_np": 0.9,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 9.1,
        "net_profit_yoy_pct": 0.02,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "纺服轻工",
          "造纸 / 印刷",
          "双胶纸",
          "铜版纸",
          "牛皮箱板纸",
          "淋膜原纸",
          "生活用纸",
          "瓦楞原纸"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600966",
      "name": "博汇纸业",
      "bucket": "纺服轻工",
      "subcategory": "造纸 / 印刷",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\博汇纸业.docx",
      "rule_root_id": "textile_light_industry",
      "rule_child_id": "paper_printing",
      "root_alias_hits": [
        "造纸",
        "纸制品"
      ],
      "child_alias_hits": [
        "造纸",
        "纸制品"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "浆纸产品的研发、生产与销售。",
        "product_types": [
          "白纸板",
          "文化纸",
          "箱板纸",
          "石膏护面纸"
        ],
        "product_names": [
          "白纸板",
          "文化纸",
          "箱板纸",
          "石膏护面纸"
        ],
        "business_scope": "许可项目：食品用纸包装、容器制品生产；污水处理及其再生利用；危险废物经营。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：纸制造；纸浆制造；纸制品制造；纸和纸板容器制造；货物进出口；专用设备修理；通用设备修理；机械零件、零部件加工；纸制品销售；纸浆销售；包装材料及制品销售；软木制品销售；木材销售；木制容器销售；专用化学产品销售（不含危险化学品）；化工产品销售（不含许可类化工产品）；林业产品销售；机械设备销售；住房租赁。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.55,
        "net_profit_yoy_pct": 0.04,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.09,
        "net_margin_pct": 0.01,
        "debt_to_assets_pct": 0.7,
        "cfo_to_np": 15.41,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "net_profit_attr_yi": 0.55,
        "net_profit_yoy_pct": 0.04,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "纺服轻工",
          "造纸 / 印刷",
          "白纸板",
          "文化纸",
          "箱板纸",
          "石膏护面纸"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002067",
      "name": "景兴纸业",
      "bucket": "纺服轻工",
      "subcategory": "造纸 / 印刷",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\景兴纸业.docx",
      "rule_root_id": "textile_light_industry",
      "rule_child_id": "paper_printing",
      "root_alias_hits": [
        "造纸",
        "纸制品"
      ],
      "child_alias_hits": [
        "造纸",
        "纸制品"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "工业包装原纸、纸箱纸板、各类生活用纸以及再生浆板的生产和销售。",
        "product_types": [
          "牛皮箱板纸",
          "瓦楞原纸",
          "白面牛卡纸",
          "纸箱纸板",
          "各类生活用纸",
          "再生浆板"
        ],
        "product_names": [
          "牛皮箱板纸",
          "瓦楞原纸",
          "白面牛卡纸",
          "纸箱纸板",
          "各类生活用纸",
          "再生浆板"
        ],
        "business_scope": "纸制造；纸制品制造；纸制品销售；纸浆制造；纸浆销售；再生资源回收（除生产性废旧金属）；再生资源加工；货物进出口；产业用纺织制成品销售（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.22,
        "net_profit_yoy_pct": 1.91,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.06,
        "net_margin_pct": 0.02,
        "debt_to_assets_pct": 0.26,
        "cfo_to_np": 6.73,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 0.22,
        "net_profit_yoy_pct": 1.91,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "纺服轻工",
          "造纸 / 印刷",
          "牛皮箱板纸",
          "瓦楞原纸",
          "白面牛卡纸",
          "纸箱纸板",
          "各类生活用纸",
          "再生浆板"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002969",
      "name": "嘉美包装",
      "bucket": "纺服轻工",
      "subcategory": "包装",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\嘉美包装.docx",
      "rule_root_id": "textile_light_industry",
      "rule_child_id": "home_light_industry",
      "root_alias_hits": [
        "包装"
      ],
      "child_alias_hits": [
        "包装"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "食品饮料包装容器的研发、设计、生产和销售及提供饮料灌装服务。",
        "product_types": [
          "三片罐",
          "二片罐",
          "无菌纸包装"
        ],
        "product_names": [
          "三片罐",
          "二片罐",
          "无菌纸包装"
        ],
        "business_scope": "许可项目：包装装潢印刷品印刷；饮料生产；食品销售（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）。一般项目：金属包装容器及材料制造；金属包装容器及材料销售；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广（除许可业务外，可自主依法经营法律法规非禁止或限制的项目）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-27",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.67,
        "net_profit_yoy_pct": 4.32,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.17,
        "net_margin_pct": 0.08,
        "debt_to_assets_pct": 0.26,
        "cfo_to_np": 1.22,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-27",
        "net_profit_attr_yi": 0.67,
        "net_profit_yoy_pct": 4.32,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 93,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "纺服轻工",
          "包装",
          "三片罐",
          "二片罐",
          "无菌纸包装"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 93,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002831",
      "name": "裕同科技",
      "bucket": "纺服轻工",
      "subcategory": "包装",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\裕同科技.docx",
      "rule_root_id": "textile_light_industry",
      "rule_child_id": "home_light_industry",
      "root_alias_hits": [
        "造纸",
        "纸制品"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "纸质精品包装、包装配套产品、环保纸塑产品及其他产品的研发、生产和销售。",
        "product_types": [
          "纸制品包装"
        ],
        "product_names": [
          "纸质包装",
          "植物纤维环保包装",
          "可降解新材料制品",
          "软包装",
          "功能材料模切",
          "文化创意印刷产品",
          "标签",
          "炫光膜",
          "消费电子零部件及其他新材料"
        ],
        "business_scope": "一般经营项目：销售纸箱、彩盒、包装盒、布袋、产业用纺织制成品、PU包装成品、塑胶制品（不含国家限制项目）；出版物、包装装潢印刷品、其他印刷品印刷；精密模切件、不干胶贴纸、丝印铭板、胶带、保护膜、标签的研发、设计和销售。从事广告业务（法律、行政法规规定应进行广告经营审批登记的，应另行办理审批登记后方可经营）；包装设计、平面设计、品牌设计、结构设计（不含限制项目）；自有房屋租赁；机械设备租赁（不配备操作人员的机械设备租赁，不包括金融租赁活动）；广告喷绘业务；会务服务；创意服务；舞台设计、布置；文化活动策划；展示展览策划；国内贸易（不含专营、专卖、专控商品）；经营进出口业务（法律、行政法规、国务院决定禁止的项目除外，限制的项目须取得许可后方可经营）；包装服务；包装材料及制品销售；木制容器销售；木制容器制造；金属包装容器及材料制造；金属包装容器及材料销售。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。许可经营项目：生产纸箱、彩盒、包装盒、布袋、产业用纺织制成品、PU包装成品、塑胶制品（不含国家限制项目）；出版物、包装装潢印刷品、其他印刷品印刷；精密模切件、不干胶贴纸、丝印铭板、胶带、保护膜、标签的生产。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.48,
        "net_profit_yoy_pct": 0.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.25,
        "net_margin_pct": 0.07,
        "debt_to_assets_pct": 0.43,
        "cfo_to_np": 2.65,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 2.48,
        "net_profit_yoy_pct": 0.02,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "纺服轻工",
          "包装",
          "纸质包装",
          "植物纤维环保包装",
          "可降解新材料制品",
          "软包装",
          "功能材料模切",
          "文化创意印刷产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "601888",
      "name": "中国中免",
      "bucket": "商贸零售 / 社服",
      "subcategory": "免税 / 旅游零售",
      "priority": "P0",
      "original_evidence_level": "review",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\中国中免.docx",
      "rule_root_id": "commercial_retail_social_service",
      "rule_child_id": "retail_ecommerce",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found",
        "child_alias_not_found"
      ],
      "business_evidence": {
        "business_summary": "以免税为主的旅游零售业务及以免税业务为核心的商业综合体投资开发业务。",
        "product_types": [
          "免税商品销售",
          "有税商品销售"
        ],
        "product_names": [
          "免税商品销售",
          "有税商品销售"
        ],
        "business_scope": "旅游商品相关项目的投资与管理；旅游服务配套设施的开发、改造与经营；旅游产业研究与咨询服务等。（市场主体依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事国家和本市产业政策禁止和限制类项目的经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 23.7,
        "net_profit_yoy_pct": 0.21,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.34,
        "net_margin_pct": 0.14,
        "debt_to_assets_pct": 0.26,
        "cfo_to_np": 1.64,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 23.7,
        "net_profit_yoy_pct": 0.21,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "商贸零售 / 社服",
          "免税 / 旅游零售",
          "免税商品销售",
          "有税商品销售"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600415",
      "name": "小商品城",
      "bucket": "商贸零售 / 社服",
      "subcategory": "商品市场 / 零售",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\小商品城.docx",
      "rule_root_id": "commercial_retail_social_service",
      "rule_child_id": "retail_ecommerce",
      "root_alias_hits": [
        "小商品"
      ],
      "child_alias_hits": [
        "小商品",
        "小商品城"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "市场开发经营及配套服务，提供网上交易平台和服务，网上交易市场开发经营等。",
        "product_types": [
          "商品展示交易",
          "市场配套服务生态",
          "贸易履约服务"
        ],
        "product_names": [
          "市场经营",
          "自营贸易",
          "会展业务",
          "酒店业务",
          "线上服务平台",
          "品牌出海服务",
          "仓储物流",
          "支付",
          "征信",
          "保理等业务"
        ],
        "business_scope": "实业投资开发,市场开发经营,投资管理,市场配套服务,金属材料、建筑装饰材料、百货、针纺织品、五金交电化工、办公设备通信设备(不含无线)、机电设备的销售,信息咨询服务。自营和代理内销商品范围内商品的进出口业务。经营进料加工和“三来一补”业务,经营对销贸易和转口贸易,含下属分支机构的经营范围。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 9.93,
        "net_profit_yoy_pct": 0.23,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.34,
        "net_margin_pct": 0.22,
        "debt_to_assets_pct": 0.46,
        "cfo_to_np": 0.06,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 9.93,
        "net_profit_yoy_pct": 0.23,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "商贸零售 / 社服",
          "商品市场 / 零售",
          "市场经营",
          "自营贸易",
          "会展业务",
          "酒店业务",
          "线上服务平台",
          "品牌出海服务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600754",
      "name": "锦江酒店",
      "bucket": "商贸零售 / 社服",
      "subcategory": "酒店",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\锦江酒店.docx",
      "rule_root_id": "commercial_retail_social_service",
      "rule_child_id": "tourism_hotel",
      "root_alias_hits": [
        "酒店"
      ],
      "child_alias_hits": [
        "酒店"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "全服务型酒店营运及管理业务、有限服务型酒店营运及管理业务和食品及餐饮业务。",
        "product_types": [
          "全服务型酒店",
          "有限服务型酒店",
          "食品及餐饮业务"
        ],
        "product_names": [
          "综合性酒店",
          "有限服务型酒店",
          "餐厅投资",
          "餐厅经营管理"
        ],
        "business_scope": "宾馆、餐饮、食品生产及连锁经营、旅游、摄影、出租汽车、国内贸易、物业管理、商务咨询、技术培训、工程设计、票务代理、会务服务、电子产品销售、受托房屋租赁、收费停车尝烟酒零售（限分支机构经营）。【依法须经批准的项目，经相关部门批准后方可开展经营活动】",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.51,
        "net_profit_yoy_pct": 2.8,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.33,
        "net_margin_pct": 0.05,
        "debt_to_assets_pct": 0.65,
        "cfo_to_np": 6.42,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 1.51,
        "net_profit_yoy_pct": 2.8,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 93,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "商贸零售 / 社服",
          "酒店",
          "综合性酒店",
          "有限服务型酒店",
          "餐厅投资",
          "餐厅经营管理"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 93,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600578",
      "name": "京能电力",
      "bucket": "电力与公用事业",
      "subcategory": "火电 / 煤电",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\京能电力.docx",
      "rule_root_id": "renewable_power",
      "rule_child_id": "power_thermal",
      "root_alias_hits": [
        "电力"
      ],
      "child_alias_hits": [
        "热力"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "生产、销售电力热力产品、电力设备运行，发电设备检测、修理、脱硫石膏销售。",
        "product_types": [
          "售电",
          "售热"
        ],
        "product_names": [
          "电力",
          "热力"
        ],
        "business_scope": "生产电力,热力产品；电力供应；普通货运,货物专用运输(罐式)；发电,输电,供电业务；专业承包；施工总承包；劳务分包；销售热力产品；电力设备运行；发电设备检测,修理；销售脱硫石膏；固体废物治理；合同能源管理；技术开发,技术咨询,技术转让,技术服务,技术推广；建设工程项目管理。(市场主体依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事国家和本市产业政策禁止和限制类项目的经营活动。)",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 13.56,
        "net_profit_yoy_pct": 0.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.19,
        "net_margin_pct": 0.13,
        "debt_to_assets_pct": 0.63,
        "cfo_to_np": 2.02,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": 13.56,
        "net_profit_yoy_pct": 0.02,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "火电 / 煤电",
          "电力",
          "热力"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600726",
      "name": "华电能源",
      "bucket": "电力与公用事业",
      "subcategory": "火电 / 煤电",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\华电能源.docx",
      "rule_root_id": "renewable_power",
      "rule_child_id": "power_thermal",
      "root_alias_hits": [
        "电力"
      ],
      "child_alias_hits": [
        "热力"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "生产和销售煤炭，以及向本公司发电资产所在的区域销售电力、热力产品。",
        "product_types": [
          "煤炭",
          "电力",
          "热力"
        ],
        "product_names": [
          "煤炭",
          "电力",
          "热力"
        ],
        "business_scope": "建设、经营、维修电厂；生产销售电力、热力，电力行业的技术服务、技术咨询；电力仪器、仪表及零部件的生产销售；煤炭销售；粉煤灰、石膏、硫酸铵、石灰石及其制品的加工与销售；新型建筑材料的生产、加工与销售；自有房产、土地及设备租赁；开发、生产、销售保温管道；大气污染治理，固体废物污染治理；工程和技术研究与试验发展；施工总承包服务；道路货物运输、装卸；风力、生物质能、光伏发电项目的开发、建设和经营管理，风力、生物质能、光伏发电的技术服务、技术咨询。（涉及专项管理规定及许可经营的，取得许可后方可从事经营）（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 8.83,
        "net_profit_yoy_pct": 0.26,
        "revenue_yoy_pct": "",
        "roe_pct": 0.13,
        "gross_margin_pct": 0.28,
        "net_margin_pct": 0.18,
        "debt_to_assets_pct": 0.78,
        "cfo_to_np": 0.51,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 8.83,
        "net_profit_yoy_pct": 0.26,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "火电 / 煤电",
          "煤炭",
          "电力",
          "热力"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600744",
      "name": "华银电力",
      "bucket": "电力与公用事业",
      "subcategory": "火电 / 煤电",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\华银电力.docx",
      "rule_root_id": "renewable_power",
      "rule_child_id": "power_thermal",
      "root_alias_hits": [
        "电力"
      ],
      "child_alias_hits": [
        "热力"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "火力发电业务，同时经营水电、风电、太阳能业务以及电力销售业务。",
        "product_types": [
          "电力"
        ],
        "product_names": [
          "电力"
        ],
        "business_scope": "电力生产。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.5,
        "net_profit_yoy_pct": 0.83,
        "revenue_yoy_pct": "",
        "roe_pct": 0.08,
        "gross_margin_pct": 0.15,
        "net_margin_pct": 0.07,
        "debt_to_assets_pct": 0.93,
        "cfo_to_np": 8.06,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 1.5,
        "net_profit_yoy_pct": 0.83,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "火电 / 煤电",
          "电力"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "000767",
      "name": "晋控电力",
      "bucket": "电力与公用事业",
      "subcategory": "火电 / 煤电",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\晋控电力.docx",
      "rule_root_id": "renewable_power",
      "rule_child_id": "power_thermal",
      "root_alias_hits": [
        "电力"
      ],
      "child_alias_hits": [
        "热力"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "电力商品、热力商品生产和销售。燃料、材料、电力高新技术、电力物资的开发销售。",
        "product_types": [
          "火电电力",
          "风电电力",
          "光伏电力",
          "水电电力",
          "热力",
          "燃煤",
          "检修服务"
        ],
        "product_names": [
          "火电电力",
          "风电电力",
          "光伏电力",
          "水电电力",
          "热力",
          "燃煤",
          "检修服务"
        ],
        "business_scope": "电力商品、热力商品生产和销售；燃料、材料、电力高新技术、电力物资的开发销售。发电设备检修；电力工程安装、设计、施工（除土建）；工矿机电产品加工、修理；室内外装潢；采暖设备维修；设备清扫；电子信息咨询及技术服务。电力系统设备及相关工程的设计、调试、实验及相关技术开发、技术咨询、技术服务；环境监测（以上仅限分支机构使用）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.56,
        "net_profit_yoy_pct": 0.04,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.11,
        "net_margin_pct": 0.01,
        "debt_to_assets_pct": 0.81,
        "cfo_to_np": 2.77,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 0.56,
        "net_profit_yoy_pct": 0.04,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "火电 / 煤电",
          "火电电力",
          "风电电力",
          "光伏电力",
          "水电电力",
          "热力",
          "燃煤"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600236",
      "name": "桂冠电力",
      "bucket": "电力与公用事业",
      "subcategory": "水电",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\桂冠电力.docx",
      "rule_root_id": "renewable_power",
      "rule_child_id": "power_hydro",
      "root_alias_hits": [
        "电力"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "投资建设、经营以电力生产、销售为主业的电力能源项目。",
        "product_types": [
          "水力发电",
          "火力发电",
          "风力发电",
          "光伏发电",
          "售电业务"
        ],
        "product_names": [
          "水力发电",
          "火力发电",
          "风力发电",
          "光伏发电",
          "售电业务"
        ],
        "business_scope": "开发建设和管理水电站、火电厂和输变电工程，独资、联营开办与本公司主营有关的项目，电力金融方面的经济技术咨询，兴办宾馆、饮食、娱乐业，日用百货、通用机械、电子产品、电子器材的销售。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 9.79,
        "net_profit_yoy_pct": 0.58,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.56,
        "net_margin_pct": 0.37,
        "debt_to_assets_pct": 0.54,
        "cfo_to_np": 1.89,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 9.79,
        "net_profit_yoy_pct": 0.58,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "水电",
          "水力发电",
          "火力发电",
          "风力发电",
          "光伏发电",
          "售电业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "000027",
      "name": "深圳能源",
      "bucket": "电力与公用事业",
      "subcategory": "综合电力",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\深圳能源.docx",
      "rule_root_id": "renewable_power",
      "rule_child_id": "power_thermal",
      "root_alias_hits": [
        "电力"
      ],
      "child_alias_hits": [
        "热力"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "各种常规能源和新能源的开发、生产、购销，以及城市固体废物处理、废水处理和城市燃气供应等。",
        "product_types": [
          "低碳电力",
          "生态环保",
          "天然气",
          "数智服务"
        ],
        "product_names": [
          "低碳电力",
          "生态环保",
          "天然气",
          "数智服务"
        ],
        "business_scope": "一般经营项目是：各种常规能源和新能源的开发、生产、购销；投资和经营能提高能源使用效益的高科技产业；投资和经营与能源相关的原材料的开发和运输、港口、码头和仓储工业等；经营和进出口本公司能源项目所需的成套设备、配套设备、机具和交通工具等；投资和经营与能源相配套的地产、房产业和租赁等产业；各种能源工程项目的设计、施工、管理和经营，以及与能源工程相关的人员培训、咨询及其他相关服务业务；环保技术开发、转让和服务；物业管理、自有物业租赁；在合法取得土地使用权范围内从事房地产开发经营；从事信息系统运营维护，系统集成，软件开发的信息技术服务；计算机软硬件、电子产品、耗材、办公设备的销售与租赁；能提高社会经济效益的其他业务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 16.38,
        "net_profit_yoy_pct": -0.08,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.27,
        "net_margin_pct": 0.16,
        "debt_to_assets_pct": 0.61,
        "cfo_to_np": 0.74,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 16.38,
        "net_profit_yoy_pct": -0.08,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 68,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "综合电力",
          "低碳电力",
          "生态环保",
          "天然气",
          "数智服务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 85,
        "fundamental_score": 68,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "000883",
      "name": "湖北能源",
      "bucket": "电力与公用事业",
      "subcategory": "综合电力",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\湖北能源.docx",
      "rule_root_id": "renewable_power",
      "rule_child_id": "power_thermal",
      "root_alias_hits": [
        "电力"
      ],
      "child_alias_hits": [
        "热力"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "能源投资、开发与管理。",
        "product_types": [
          "电力",
          "天然气业务",
          "煤炭贸易及中转仓储",
          "热力供应"
        ],
        "product_names": [
          "电力",
          "天然气业务",
          "煤炭贸易及中转仓储",
          "热力供应"
        ],
        "business_scope": "能源投资、开发与管理；国家政策允许范围内的其他经营业务（法律、行政法规或国务院决定需许可经营的除外）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 6.06,
        "net_profit_yoy_pct": 0.42,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.26,
        "net_margin_pct": 0.14,
        "debt_to_assets_pct": 0.55,
        "cfo_to_np": 1.79,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 6.06,
        "net_profit_yoy_pct": 0.42,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "综合电力",
          "电力",
          "天然气业务",
          "煤炭贸易及中转仓储",
          "热力供应"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "000791",
      "name": "甘肃能源",
      "bucket": "电力与公用事业",
      "subcategory": "综合电力",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\甘肃能源.docx",
      "rule_root_id": "renewable_power",
      "rule_child_id": "power_thermal",
      "root_alias_hits": [
        "电力"
      ],
      "child_alias_hits": [
        "热力"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "火力发电、水力发电、风力发电和光伏发电，未经营售电业务。",
        "product_types": [
          "电力"
        ],
        "product_names": [
          "电力"
        ],
        "business_scope": "许可项目:水力发电：发电业务、输电业务、供（配）电业务（依法须经批准的项目,经相关部门批准后方可开展经营活动）一般项目：信息咨询服务(不含许可类信息咨询服务)；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；新兴能源技术研发；风力发电技术服务；太阳能发电技术服务；工程管理服务；热力生产和供应；以自有资金从事投资活动；煤炭及制品销售；再生资源销售；石灰和石膏销售（除许可业务外，可自主依法经营法律法规非禁止或限制的项目）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 7.68,
        "net_profit_yoy_pct": 0.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.43,
        "net_margin_pct": 0.32,
        "debt_to_assets_pct": 0.51,
        "cfo_to_np": 1.86,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 7.68,
        "net_profit_yoy_pct": 0.02,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "综合电力",
          "电力"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "000539",
      "name": "粤电力A",
      "bucket": "电力与公用事业",
      "subcategory": "火电 / 绿电运营",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\粤电力A.docx",
      "rule_root_id": "renewable_power",
      "rule_child_id": "power_thermal",
      "root_alias_hits": [
        "电力"
      ],
      "child_alias_hits": [
        "热力"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "电力项目的投资、建设和经营管理，电力的生产和销售业务。",
        "product_types": [
          "火力发电"
        ],
        "product_names": [
          "火力发电"
        ],
        "business_scope": "电力项目的投资、建设和经营管理，电力的生产和销售，电力行业技术咨询和服务。（依法须经批准的项目，经相关部门批准后方可开展经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -1.8,
        "net_profit_yoy_pct": 0.6,
        "revenue_yoy_pct": "",
        "roe_pct": -0.01,
        "gross_margin_pct": 0.07,
        "net_margin_pct": -0.02,
        "debt_to_assets_pct": 0.77,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": -1.8,
        "net_profit_yoy_pct": 0.6,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "火电 / 绿电运营",
          "火力发电"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "000690",
      "name": "宝新能源",
      "bucket": "电力与公用事业",
      "subcategory": "新能源发电",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\宝新能源.docx",
      "rule_root_id": "renewable_power",
      "rule_child_id": "power_thermal",
      "root_alias_hits": [
        "电力"
      ],
      "child_alias_hits": [
        "热力"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "能源电力业务。",
        "product_types": [
          "电力",
          "原材料",
          "发电副产品"
        ],
        "product_names": [
          "电力",
          "原材料",
          "发电副产品"
        ],
        "business_scope": "洁净煤燃烧技术发电和可再生能源发电，新能源电力生产、销售、开发（凭资质证书经营），新能源电力生产技术咨询、服务。房屋建筑、公路、桥梁、市政等基础设施工程的设计、承揽与施工（凭资质证书经营），新能源产业投资，对外直接股权投资、创业投资、受托投资、受托管理投资、投资咨询、财务咨询；企业信用信息采集、整理、咨询服务；企业信誉评估服务、企业资质服务；租赁业。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 3.1,
        "net_profit_yoy_pct": 0.03,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.23,
        "net_margin_pct": 0.15,
        "debt_to_assets_pct": 0.4,
        "cfo_to_np": 2.56,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 3.1,
        "net_profit_yoy_pct": 0.03,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "新能源发电",
          "电力",
          "原材料",
          "发电副产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 86,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "603328",
      "name": "依顿电子",
      "bucket": "AI算力",
      "subcategory": "PCB / 高速PCB",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\依顿电子.docx",
      "rule_root_id": "ai_compute",
      "rule_child_id": "pcb_high_speed",
      "root_alias_hits": [
        "AI",
        "PCB",
        "印制电路板",
        "电路板",
        "AI服务器",
        "数据中心"
      ],
      "child_alias_hits": [
        "PCB",
        "HDI",
        "覆铜板",
        "印制电路板",
        "电路板",
        "服务器PCB",
        "高多层板",
        "AI服务器PCB"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "高精度、高密度双层及多层印制线路板（PCB）研发、制造与销售。",
        "product_types": [
          "线路板"
        ],
        "product_names": [
          "多层板",
          "厚铜板",
          "高频高速板",
          "金属基电路板",
          "HDI板"
        ],
        "business_scope": "生产线路板、HDI（即高密度互连积层板)印刷线路板、液晶显示器及其附件、覆铜板，电路板表面元件贴片、封装；进出口贸易。（以上项目不涉及外商投资准入特别管理措施）（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.38,
        "net_profit_yoy_pct": -0.68,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.18,
        "net_margin_pct": 0.04,
        "debt_to_assets_pct": 0.37,
        "cfo_to_np": 4.49,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 0.38,
        "net_profit_yoy_pct": -0.68,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 67,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "AI算力",
          "PCB / 高速PCB",
          "多层板",
          "厚铜板",
          "高频高速板",
          "金属基电路板",
          "HDI板"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 96,
        "fundamental_score": 67,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "001389",
      "name": "广合科技",
      "bucket": "AI算力",
      "subcategory": "PCB / 高速PCB",
      "priority": "P0",
      "original_evidence_level": "review",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\广合科技.docx",
      "rule_root_id": "ai_compute",
      "rule_child_id": "pcb_high_speed",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found",
        "child_alias_not_found"
      ],
      "business_evidence": {
        "business_summary": "多高层印制电路板的研发、生产与销售。",
        "product_types": [
          "印制电路板"
        ],
        "product_names": [
          "印制电路板"
        ],
        "business_scope": "电力电子技术服务;智能机器系统技术服务;无人机系统技术服务;信息系统安全服务;电子元件及组件制造;印制电路板制造;货物进出口（专营专控商品除外）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 3.93,
        "net_profit_yoy_pct": 0.63,
        "revenue_yoy_pct": "",
        "roe_pct": 0.07,
        "gross_margin_pct": 0.37,
        "net_margin_pct": 0.21,
        "debt_to_assets_pct": 0.37,
        "cfo_to_np": 0.82,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 3.93,
        "net_profit_yoy_pct": 0.63,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 85,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "AI算力",
          "PCB / 高速PCB",
          "印制电路板"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 85,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "601208",
      "name": "东材科技",
      "bucket": "半导体",
      "subcategory": "半导体材料",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\东材科技.docx",
      "rule_root_id": "semiconductor",
      "rule_child_id": "semimaterial",
      "root_alias_hits": [
        "国产替代"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "化工新材料的研发、生产和销售业务。",
        "product_types": [
          "电工绝缘材料",
          "新能源材料",
          "光学膜材料",
          "电子材料",
          "环保阻燃材料"
        ],
        "product_names": [
          "电工绝缘材料",
          "新能源材料",
          "光学膜材料",
          "电子材料",
          "环保阻燃材料"
        ],
        "business_scope": "绝缘材料、高分子材料、精细化工材料的生产、销售，危险化学品（含丙酮、甲苯、醋酸酐、甲基乙基酮、有毒品、易燃液体、腐蚀品、氧化剂和有机过氧化物、易燃固体、自燃和遇湿易燃物品）、非药品类易制毒化学品（含醋酸酐、丙酮、甲苯、乙醚、硫酸、盐酸、三氯甲烷）的销售。科技信息咨询、技术服务，出口本企业自产的绝缘材料及其生产设备和原辅料，进口本企业生产、科研所需的原辅材料、机械设备、仪器仪表及零配件。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.84,
        "net_profit_yoy_pct": 1.03,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.17,
        "net_margin_pct": 0.13,
        "debt_to_assets_pct": 0.45,
        "cfo_to_np": -0.08,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 1.84,
        "net_profit_yoy_pct": 1.03,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 83,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "半导体材料",
          "电工绝缘材料",
          "新能源材料",
          "光学膜材料",
          "电子材料",
          "环保阻燃材料"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 83,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002409",
      "name": "雅克科技",
      "bucket": "半导体",
      "subcategory": "半导体材料",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\雅克科技.docx",
      "rule_root_id": "semiconductor",
      "rule_child_id": "semimaterial",
      "root_alias_hits": [
        "国产替代"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "电子材料、LNG保温绝热板材、阻燃剂的研发、生产与销售。",
        "product_types": [
          "电子材料",
          "LNG保温复合材料",
          "阻燃剂"
        ],
        "product_names": [
          "电子材料",
          "LNG保温复合材料",
          "阻燃剂"
        ],
        "business_scope": "许可项目：危险化学品生产（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准）一般项目：新材料技术研发；专用化学产品制造（不含危险化学品）；专用化学产品销售（不含危险化学品）；纸和纸板容器制造；塑料包装箱及容器制造；玻璃纤维增强塑料制品制造；玻璃纤维增强塑料制品销售；塑料制品制造；塑料制品销售；工程和技术研究和试验发展；自然科学研究和试验发展；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；货物进出口；技术进出口（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.99,
        "net_profit_yoy_pct": 0.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.31,
        "net_margin_pct": 0.15,
        "debt_to_assets_pct": 0.36,
        "cfo_to_np": -0.14,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 2.99,
        "net_profit_yoy_pct": 0.02,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "半导体材料",
          "电子材料",
          "LNG保温复合材料",
          "阻燃剂"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600563",
      "name": "法拉电子",
      "bucket": "半导体",
      "subcategory": "模拟 / 功率 / MCU",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\法拉电子.docx",
      "rule_root_id": "semiconductor",
      "rule_child_id": "analog_power",
      "root_alias_hits": [
        "国产替代"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "薄膜电容器的研发、生产和销售。",
        "product_types": [
          "薄膜电容",
          "电子变压器"
        ],
        "product_names": [
          "薄膜电容",
          "电子变压器"
        ],
        "business_scope": "薄膜电容器及其金属化镀膜材料的制造；研究、开发各类型的高新科技电子基础元器件及相关配套件；高新技术转让；批发机械电子设备、日用百货、纺织品、五金交电化工（化学危险品除外）、建筑材料、工艺美术品（不含金银首饰）；自产产品的出口及生产所需物资的进口；加工贸易业务等。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.68,
        "net_profit_yoy_pct": 0.01,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.32,
        "net_margin_pct": 0.21,
        "debt_to_assets_pct": 0.28,
        "cfo_to_np": 0.01,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 2.68,
        "net_profit_yoy_pct": 0.01,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 85,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "模拟 / 功率 / MCU",
          "薄膜电容",
          "电子变压器"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 85,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "603005",
      "name": "晶方科技",
      "bucket": "半导体",
      "subcategory": "封测 / 设备零部件",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\晶方科技.docx",
      "rule_root_id": "semiconductor",
      "rule_child_id": "semicap",
      "root_alias_hits": [
        "国产替代"
      ],
      "child_alias_hits": [
        "半导体设备"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "传感器领域的封装测试业务。",
        "product_types": [
          "晶圆级封装产品",
          "Fan-out等芯片级封装产品",
          "光学器件"
        ],
        "product_names": [
          "晶圆级封装产品",
          "Fan-out等芯片级封装产品",
          "光学器件"
        ],
        "business_scope": "研发、生产、制造、封装和测试集成电路产品，销售本公司所生产的产品并提供相关的服务。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.66,
        "net_profit_yoy_pct": 0.0,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.47,
        "net_margin_pct": 0.2,
        "debt_to_assets_pct": 0.13,
        "cfo_to_np": 1.53,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 0.66,
        "net_profit_yoy_pct": 0.0,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 67,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "封测 / 设备零部件",
          "晶圆级封装产品",
          "Fan-out等芯片级封装产品",
          "光学器件"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 86,
        "fundamental_score": 67,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "000550",
      "name": "江铃汽车",
      "bucket": "新能源汽车",
      "subcategory": "整车 / 商用车",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\江铃汽车.docx",
      "rule_root_id": "new_energy_vehicle",
      "rule_child_id": "whole_vehicle",
      "root_alias_hits": [
        "汽车"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "生产和销售商用车、乘用车SUV以及相关的零部件。",
        "product_types": [
          "商用车",
          "乘用车"
        ],
        "product_names": [
          "JMC品牌轻卡",
          "皮卡",
          "轻客",
          "福特品牌轻客",
          "MPV",
          "乘用车SUV"
        ],
        "business_scope": "生产及销售汽车、专用(改装)车、发动机、底盘等汽车总成及其他零部件，并提供相关售后服务；作为福特汽车(中国)有限公司的福特(FORD)E系列进口汽车品牌经销商，从事上述品牌汽车的零售、批发；进出口汽车及零部件；二手车经销；提供与汽车生产和销售有关的企业管理、咨询服务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 3.38,
        "net_profit_yoy_pct": 0.11,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.12,
        "net_margin_pct": 0.04,
        "debt_to_assets_pct": 0.6,
        "cfo_to_np": -5.88,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": 3.38,
        "net_profit_yoy_pct": 0.11,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "新能源汽车",
          "整车 / 商用车",
          "JMC品牌轻卡",
          "皮卡",
          "轻客",
          "福特品牌轻客",
          "MPV",
          "乘用车SUV"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 96,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600166",
      "name": "福田汽车",
      "bucket": "新能源汽车",
      "subcategory": "整车 / 商用车",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\福田汽车.docx",
      "rule_root_id": "new_energy_vehicle",
      "rule_child_id": "whole_vehicle",
      "root_alias_hits": [
        "汽车"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "车辆与移动装备、零部件、数字科技和商业生态。",
        "product_types": [
          "整车"
        ],
        "product_names": [
          "整车"
        ],
        "business_scope": "销售汽车、模具、冲压件、发动机、机械电器设备、计算机、软件及辅助设备、钢材、通讯设备；制造汽车（不含小轿车）、模具、冲压件、发动机、机械电器设备、智能车载设备；环境机械及清洁设备的制造（限外埠地区经营）；生产新能源汽车电池包及模组、电池管理系统、整车控制器、电机控制器、远程信息处理器、电机、电驱动桥、三合一电驱动总成、多合一电驱动总成等新能源汽车零部件产品（限在外埠从事生产经营活动）；数据处理；软件开发；计算机系统集成服务；仓储服务；技术开发、技术转让、技术咨询、技术培训、技术服务；经营本企业和成员企业自产产品及技术出口业务；本企业和成员企业生产所需的原辅材料、仪器仪表、机械设备、零配件及技术的进口业务（国家限定公司经营和国家禁止进出口的商品除外）；经营进料加工和“三来一补”业务；营销策划、营销咨询、产品推广服务；工程和技术研究与试验发展；产品设计；机动车维修（限色漆使用水性漆且喷漆和喷枪清洗环节密闭并配套废气收集处理装置）；技术检测；销售医疗器械Ⅲ类、6821医用电子仪器设备、6854手术室、急救室、诊疗室设备及器具、6845体外循环及血液处理设备；互联网信息服务业务；普通货物运输。（市场主体依法自主选择经营项目，开展经营活动；销售医疗器械Ⅲ类、6821医用电子仪器设备、6854手术室、急救室、诊疗室设备及器具、6845体外循环及血液处理设备、互联网信息服务业务、普通货物运输以及依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事国家和本市产业政策禁止和限制类项目的经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 4.79,
        "net_profit_yoy_pct": 0.15,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.11,
        "net_margin_pct": 0.03,
        "debt_to_assets_pct": 0.72,
        "cfo_to_np": 2.49,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 4.79,
        "net_profit_yoy_pct": 0.15,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "新能源汽车",
          "整车 / 商用车",
          "整车"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600699",
      "name": "均胜电子",
      "bucket": "新能源汽车",
      "subcategory": "汽车零部件",
      "priority": "P0",
      "original_evidence_level": "review",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\均胜电子.docx",
      "rule_root_id": "new_energy_vehicle",
      "rule_child_id": "vehicle_parts",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found",
        "child_alias_not_found"
      ],
      "business_evidence": {
        "business_summary": "提供汽车电子和汽车安全解决方案。",
        "product_types": [
          "汽车安全系统",
          "汽车电子系统"
        ],
        "product_names": [
          "汽车安全系统"
        ],
        "business_scope": "电子产品、电子元件、汽车电子装置（车身电子控制系统）、光电机一体化产品、数字电视机、数字摄录机、数字录放机、数字放声设备、汽车配件、汽车关键零部件（发动机进气增压器）、汽车内外饰件、橡塑金属制品、汽车后视镜的设计、制造、加工；模具设计、制造、加工；销售自产产品；制造业项目投资；从事货物及技术的进出口业务（不含国家禁止或限制进口的货物或技术）（以上经营范围法律、法规禁止及应经审批而未获批准的项目除外）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 4.63,
        "net_profit_yoy_pct": 0.18,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.18,
        "net_margin_pct": 0.03,
        "debt_to_assets_pct": 0.65,
        "cfo_to_np": 1.98,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 4.63,
        "net_profit_yoy_pct": 0.18,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "新能源汽车",
          "汽车零部件",
          "汽车安全系统"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 96,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002590",
      "name": "万安科技",
      "bucket": "新能源汽车",
      "subcategory": "汽车零部件",
      "priority": "P0",
      "original_evidence_level": "medium",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\万安科技.docx",
      "rule_root_id": "new_energy_vehicle",
      "rule_child_id": "vehicle_parts",
      "root_alias_hits": [
        "汽车"
      ],
      "child_alias_hits": [],
      "warnings": [],
      "business_evidence": {
        "business_summary": "汽车底盘控制系统的研发、生产和销售。",
        "product_types": [
          "液压制动系统",
          "副车架",
          "转向系统"
        ],
        "product_names": [
          "气压盘式制动器",
          "组合踏板",
          "变速操纵器",
          "气阀类产品",
          "制动气室",
          "离合器助力器",
          "自动调整臂",
          "气压ABS",
          "EBS",
          "AEBS",
          "ESC",
          "EPB",
          "ECAS",
          "XEPS"
        ],
        "business_scope": "汽车（摩托车）零部件、轨道车辆制动系统部件、农机配件、塑料制品、铸造及压铸产品的研发、设计、制造、销售及服务，经营进出口业务，道路货物运输（凭许可证经营）。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.34,
        "net_profit_yoy_pct": 0.01,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.16,
        "net_margin_pct": 0.04,
        "debt_to_assets_pct": 0.49,
        "cfo_to_np": 5.16,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 0.34,
        "net_profit_yoy_pct": 0.01,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "新能源汽车",
          "汽车零部件",
          "气压盘式制动器",
          "组合踏板",
          "变速操纵器",
          "气阀类产品",
          "制动气室",
          "离合器助力器"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600072",
      "name": "中船科技",
      "bucket": "高端装备与工业",
      "subcategory": "轨交 / 船舶 / 海工装备",
      "priority": "P0",
      "original_evidence_level": "review",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\中船科技.docx",
      "rule_root_id": "industrial_equipment",
      "rule_child_id": "rail_transit_equipment",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found",
        "child_alias_not_found"
      ],
      "business_evidence": {
        "business_summary": "风电主机装备及关键配套制造研发、风光资源开发、风光电站工程设计总包与服务为一体的风电新能源业务和建筑工程总承包、设计咨询勘察等业务。",
        "product_types": [
          "风力发电机组及配件",
          "发电",
          "工程总承包",
          "工程设计",
          "勘察",
          "咨询",
          "监理"
        ],
        "product_names": [
          "风力发电机组及配件",
          "发电",
          "工程总承包",
          "工程设计",
          "勘察",
          "咨询",
          "监理"
        ],
        "business_scope": "发电业务、输电业务、供（配）电业务；风力发电机组及零配件销售；发电机及发电机组制造；风电场相关装备销售；风电场相关系统研发；风力发电技术服务；太阳能发电技术服务；新能源原动设备制造；新能源原动设备销售；建设工程设计、建设工程勘察、建设工程施工、建设工程监理、工程管理服务；船用配套设备制造；海洋工程设计和模块设计制造服务；投资管理；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；货物进出口、技术进出口。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -2.11,
        "net_profit_yoy_pct": 0.36,
        "revenue_yoy_pct": "",
        "roe_pct": -0.03,
        "gross_margin_pct": 0.04,
        "net_margin_pct": -0.11,
        "debt_to_assets_pct": 0.81,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": -2.11,
        "net_profit_yoy_pct": 0.36,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "高端装备与工业",
          "轨交 / 船舶 / 海工装备",
          "风力发电机组及配件",
          "发电",
          "工程总承包",
          "工程设计",
          "勘察",
          "咨询"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 93,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002250",
      "name": "联化科技",
      "bucket": "化工材料",
      "subcategory": "农化 / 化肥农药",
      "priority": "P0",
      "original_evidence_level": "review",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\联化科技.docx",
      "rule_root_id": "chemical_materials",
      "rule_child_id": "fertilizer_pesticide",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found",
        "child_alias_not_found"
      ],
      "business_evidence": {
        "business_summary": "植物保护原药及中间体的生产、销售以及为国际植保企业提供定制生产、研发及技术服务；原料药、中间体的生产、销售以及为国际制药企业提供定制生产、研发及技术服务；精细化学品、功能化学品的生产、销售以及定制生产、研发及技术服务；为工业冷链、精细化工、新能源、石油化工等行业公司提供工业换热节能设备及压力容器的产品及服务。",
        "product_types": [
          "植保（除草剂及中间体）",
          "植保（杀虫剂及中间体）",
          "植保（杀菌剂及中间体）",
          "医药中间体",
          "功能化学品"
        ],
        "product_names": [
          "植保（除草剂及中间体）",
          "植保（杀虫剂及中间体）",
          "植保（杀菌剂及中间体）",
          "医药中间体",
          "功能化学品"
        ],
        "business_scope": "一般项目：技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；货物进出口；技术进出口；基础化学原料制造（不含危险化学品等许可类化学品的制造）；专用化学产品制造（不含危险化学品）；专用化学产品销售（不含危险化学品）；化工产品生产（不含许可类化工产品）；化工产品销售（不含许可类化工产品）；生物化工产品技术研发；电子专用材料制造；电子专用材料销售；电子专用材料研发(除依法须经批准的项目外，凭营业执照依法自主开展经营活动)。许可项目：危险化学品生产；新化学物质生产；房地产开发经营(依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准)。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.41,
        "net_profit_yoy_pct": 1.05,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.3,
        "net_margin_pct": 0.07,
        "debt_to_assets_pct": 0.48,
        "cfo_to_np": -0.45,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 1.41,
        "net_profit_yoy_pct": 1.05,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 83,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "化工材料",
          "农化 / 化肥农药",
          "植保（除草剂及中间体）",
          "植保（杀虫剂及中间体）",
          "植保（杀菌剂及中间体）",
          "医药中间体",
          "功能化学品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 94,
        "fundamental_score": 83,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "002326",
      "name": "永太科技",
      "bucket": "化工材料",
      "subcategory": "氟化工 / 电子化学品",
      "priority": "P0",
      "original_evidence_level": "review",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\永太科技.docx",
      "rule_root_id": "chemical_materials",
      "rule_child_id": "chemical_new_material",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found",
        "child_alias_not_found"
      ],
      "business_evidence": {
        "business_summary": "含氟医药、农药、新能源材料、含氟芳香类中间体的研发、生产。",
        "product_types": [
          "中间体产品",
          "医药类产品",
          "植保类产品",
          "锂电材料类产品"
        ],
        "product_names": [
          "中间体产品",
          "医药类产品",
          "植保类产品",
          "锂电材料类产品"
        ],
        "business_scope": "农药（不含危险化学品）的销售（凭许可证经营）。有机中间体（不含危险化学品和易制毒化学品）、机械设备制造和销售，生物技术、农药技术、化学品技术开发、技术咨询、技术服务，仪器仪表、化工产品（不含危险化学品和易制毒化学品）、矿产品（除专控）、石油制品（不含成品油及危险化学品）、电子产品原料及产品的销售，从事进出口业务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.22,
        "net_profit_yoy_pct": 8.9,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.24,
        "net_margin_pct": 0.07,
        "debt_to_assets_pct": 0.75,
        "cfo_to_np": 0.89,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 1.22,
        "net_profit_yoy_pct": 8.9,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 84,
        "fundamental_score": 93,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "化工材料",
          "氟化工 / 电子化学品",
          "中间体产品",
          "医药类产品",
          "植保类产品",
          "锂电材料类产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 84,
        "fundamental_score": 93,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "000708",
      "name": "中信特钢",
      "bucket": "资源周期",
      "subcategory": "钢铁 / 建材",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\中信特钢.docx",
      "rule_root_id": "resources",
      "rule_child_id": "steel_building_materials",
      "root_alias_hits": [
        "周期",
        "特钢",
        "有色",
        "金属"
      ],
      "child_alias_hits": [
        "特钢",
        "钢材"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "特殊钢棒材、特殊钢线材、特种板材、无缝钢管、特冶锻材、延伸加工产品六大板块。",
        "product_types": [
          "特殊钢棒材",
          "特殊钢线材",
          "特种钢板",
          "特种无缝钢管"
        ],
        "product_names": [
          "特殊钢棒材",
          "特殊钢线材",
          "特种板材",
          "无缝钢管",
          "特冶锻材",
          "延伸加工产品"
        ],
        "business_scope": "钢铁冶炼、钢材轧制、金属改制、压延加工、钢铁材料检测；钢坯、钢锭、钢材、金属制品制造；港口码头经营和建设；机械及仪表电器制造和修理；煤气工业气体制造和供应（限在厂区内制造和供应）；生产、加工、销售黑色、有色金属材料、高温合金材料、铁矿石和相应的工业辅料及承接来料加工业务；黑色、有色金属材料、钢结构件及其辅助材料的研究开发及技术服务；钢结构件的加工、制造、安装；仓储（不含危险品）；氧气、氮气、氩气、液氧、液氮化工产品生产销售（限在厂区内销售）；货物或技术进出口（国家限定公司经营或禁止进出口的商品和技术除外）；在中国境内设立科研开发中心，从事新材料、节能技术领域内的技术服务、技术转让、技术咨询；新材料器件、构件的研发与新材料开发有关的工艺设计、规划；批发和代理特种钢材及所需原材料的销售和采购。（涉及许可经营项目，应取得相关部门许可后方可经营）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 15.22,
        "net_profit_yoy_pct": 0.09,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.14,
        "net_margin_pct": 0.06,
        "debt_to_assets_pct": 0.57,
        "cfo_to_np": 0.1,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 15.22,
        "net_profit_yoy_pct": 0.09,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "资源周期",
          "钢铁 / 建材",
          "特殊钢棒材",
          "特殊钢线材",
          "特种板材",
          "无缝钢管",
          "特冶锻材",
          "延伸加工产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 95,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    },
    {
      "code": "600392",
      "name": "盛和资源",
      "bucket": "资源周期",
      "subcategory": "有色 / 稀土资源",
      "priority": "P0",
      "original_evidence_level": "high",
      "old_report_path": "H:\\QCLAW任务文件\\个股公司分析\\盛和资源.docx",
      "rule_root_id": "resources",
      "rule_child_id": "resources_energy",
      "root_alias_hits": [
        "资源",
        "有色",
        "金属"
      ],
      "child_alias_hits": [
        "能源"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "稀土矿采选、冶炼分离、金属加工、稀土废料回收以及锆钛矿选矿业务。",
        "product_types": [
          "稀土产品",
          "锆钛及其他"
        ],
        "product_names": [
          "稀土精矿",
          "稀土氧化物",
          "稀土盐",
          "稀土金属",
          "稀土抛光材料",
          "独居石",
          "锆英砂",
          "钛精矿",
          "金红石"
        ],
        "business_scope": "各类实业投资；稀有稀土、锆、钛等金属系列产品的销售、综合应用及深加工；技术服务和咨询；稀土、锆、钛新材料加工与销售；化工材料（不含危险化学品）销售；自营和代理各类商品和技术进出口业务（国家限定公司经营和国家禁止进出口的商品及技术除外）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 10:28:40",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 3.33,
        "net_profit_yoy_pct": 0.94,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.13,
        "net_margin_pct": 0.1,
        "debt_to_assets_pct": 0.36,
        "cfo_to_np": -1.79,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 3.33,
        "net_profit_yoy_pct": 0.94,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 87,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "资源周期",
          "有色 / 稀土资源",
          "稀土精矿",
          "稀土氧化物",
          "稀土盐",
          "稀土金属",
          "稀土抛光材料",
          "独居石"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "概念标签强度复核"
        ],
        "static_tag_basis": "P0候选池分类 + 旧报告关键词命中 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      },
      "scoring_v2": {
        "theme_purity_score": 87,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "score_status": "静态证据草评分完成；动态市场强度待接行情数据。"
      }
    }
  ]
};
