const SEED33_EVIDENCE_CARDS_V1 = {
  "generated_at": "2026-06-27 14:16:23",
  "source": "E:\\CODEX  zhuanyi\\网站规划工作区\\expansion_ops\\expansion_batch_dashboard_v1.json",
  "rules_version": "2026-06-26.alpha2",
  "sample_count": 33,
  "purpose": "后续种子池33家轻量证据卡：先补主营/产品和财务证据，不生成深度报告。",
  "business_data_note": "主营/产品字段来自 AkShare stock_zyjs_ths 对应的同花顺公开资料口径；后续可替换为年报/公告解析源。",
  "financial_data_note": "财务字段来自 BaoStock 免费季度财务接口；空值代表接口未取到，不解释为零。",
  "partner_data_note": "没有明确公开证据的客户/供应商/合作对象不写具体公司名。",
  "market_strength_note": "市场强度、市场角色、龙头/补涨关系字段已预留，暂不计算。",
  "data_errors": {},
  "rows": [
    {
      "code": "000400",
      "name": "许继电气",
      "bucket": "电力与公用事业",
      "subcategory": "电网设备 / 特高压",
      "priority": "P0",
      "source": "下一批80-120候选池",
      "reason": "电网设备代表样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "renewable_power",
      "rule_child_id": "power_grid_uhv",
      "evidence_level": "medium",
      "root_alias_hits": [
        "电力",
        "发电",
        "清洁能源"
      ],
      "child_alias_hits": [
        "配电网"
      ],
      "warnings": [],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "为国民经济和社会发展提供能源电力高端技术装备，为清洁能源生产、传输、配送以及高效使用提供全面的技术、产品和服务支撑。",
        "product_types": [
          "智能变配电系统",
          "直流输电系统",
          "智能电表",
          "智能中压供用电设备",
          "新能源及系统集成",
          "充换电设备",
          "其它制造服务"
        ],
        "product_names": [
          "智能变配电系统",
          "直流输电系统",
          "智能电表",
          "智能中压供用电设备",
          "新能源及系统集成",
          "充换电设备",
          "其它制造服务"
        ],
        "business_scope": "电网调度自动化设备、配电网自动化、变电站自动化、电站自动化、铁路供电自动化、电网安全稳定控制设备、电力管理信息系统、电力市场技术支持系统、继电保护及自动控制装置、继电器、电能计量设备、智能仪表、开关及开关柜、环网柜、电缆分支箱、电源设备、智能充换电设备及服务、新能源并网及发电设备、储能系统、直流输电换流阀及大功率电力电子设备、直流场设备、电力通信设备、变压器、电抗器、消弧线圈、互感器、箱式变电站、特殊作业机器人、无人机、消防设备、煤矿井下供电系统自动化设备及其他机电产品（不含汽车）；从事信息系统集成及服务，工程施工、安装、检修、试验及工程承包；电力技术服务；承办本企业自产的机电产品、成套设备及相关技术的出口业务，经营本企业生产、科研所需要原辅材料、机械设备、仪器仪表、零配件及相关技术的进口业务，低压电器生产经营；电子机械加工；电力设备租赁；房屋租赁；各种高空作业车、特种作业车及相关零部件的设计、制造、销售、租赁及相关服务；电力工程咨询；工程勘察；电力工程设计及工程承包；消防设施工程设计及专业承包。涉及许可经营项目，应取得相关部门许可后方可经营。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-11",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.27,
        "net_profit_yoy_pct": -0.47,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.19,
        "net_margin_pct": 0.05,
        "debt_to_assets_pct": 0.48,
        "cfo_to_np": -1.53,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-11",
        "net_profit_attr_yi": 1.27,
        "net_profit_yoy_pct": -0.47,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 57,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "电网设备 / 特高压",
          "智能变配电系统",
          "直流输电系统",
          "智能电表",
          "智能中压供用电设备",
          "新能源及系统集成",
          "充换电设备"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002236",
      "name": "大华股份",
      "bucket": "计算机 / 软件服务",
      "subcategory": "AI应用",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "视觉AI与安防修复样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "computer_software_it",
      "rule_child_id": "ai_application",
      "evidence_level": "medium",
      "root_alias_hits": [
        "计算机",
        "软件",
        "信息技术"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "智慧物联产品的研发、生产和销售，提供以视频为核心的智慧物联解决方案及运营服务。",
        "product_types": [
          "智慧物联产品及方案"
        ],
        "product_names": [
          "智慧物联解决方案",
          "数智化升级解决方案",
          "机器视觉与移动机器人",
          "热成像",
          "汽车电子",
          "智慧安检",
          "智慧消防"
        ],
        "business_scope": "计算机软件的开发、服务、销售，电子产品及通讯产品的设计、开发、生产、安装及销售，网络产品的开发、系统集成与销售，电子产品工程的设计、安装，信息技术咨询服务，经营进出口业务（范围详见《进出口企业资格证书》）。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-18",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 7.12,
        "net_profit_yoy_pct": 0.07,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.44,
        "net_margin_pct": 0.1,
        "debt_to_assets_pct": 0.25,
        "cfo_to_np": -1.13,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-18",
        "net_profit_attr_yi": 7.12,
        "net_profit_yoy_pct": 0.07,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 87,
        "fundamental_score": 84,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "计算机 / 软件服务",
          "AI应用",
          "智慧物联解决方案",
          "数智化升级解决方案",
          "机器视觉与移动机器人",
          "热成像",
          "汽车电子",
          "智慧安检"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002415",
      "name": "海康威视",
      "bucket": "计算机 / 软件服务",
      "subcategory": "AI应用",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "视觉AI与安防龙头样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "computer_software_it",
      "rule_child_id": "ai_application",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "以智能物联为战略定位，视频技术为核心打造从研发，制造到营销的完整价值链。",
        "product_types": [
          "主业建造工程",
          "机器人业务",
          "智能家居业务",
          "热成像业务",
          "汽车电子业务",
          "存储业务",
          "其他创新业务"
        ],
        "product_names": [
          "主业建造工程",
          "机器人业务",
          "智能家居业务",
          "热成像业务",
          "汽车电子业务",
          "存储业务",
          "其他创新业务"
        ],
        "business_scope": "电子产品（含防爆电气产品、通信设备及其辅助设备、多媒体设备、传输与显示设备）、消防产品、大数据与物联网软硬件产品、飞行器、机器人、智能装备与智能化系统、实时通讯系统、汽车零部件及配件、车用电气信号设备装置、服务器及配套软硬件产品的研发、生产；销售自产产品；提供技术服务，电子技术咨询服务，培训服务（不含办班培训），电子设备安装，电子工程及智能系统工程的设计、施工及维护。（国家禁止和限制的项目除外，涉及许可证的凭证经营）（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-18",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 32.62,
        "net_profit_yoy_pct": 0.36,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.49,
        "net_margin_pct": 0.16,
        "debt_to_assets_pct": 0.3,
        "cfo_to_np": -0.68,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-18",
        "net_profit_attr_yi": 32.62,
        "net_profit_yoy_pct": 0.36,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "计算机 / 软件服务",
          "AI应用",
          "主业建造工程",
          "机器人业务",
          "智能家居业务",
          "热成像业务",
          "汽车电子业务",
          "存储业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002074",
      "name": "国轩高科",
      "bucket": "新能源汽车",
      "subcategory": "动力电池 / 储能",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "动力电池二线龙头样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "new_energy_vehicle",
      "rule_child_id": "battery_storage",
      "evidence_level": "medium",
      "root_alias_hits": [
        "新能源汽车",
        "汽车",
        "汽车零部件"
      ],
      "child_alias_hits": [
        "动力电池",
        "储能",
        "电池系统"
      ],
      "warnings": [],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "新能源行业动力电池系统、储能电池系统以及输配电设备的研发、生产和销售。",
        "product_types": [
          "动力电池系统",
          "储能电池系统",
          "输配电产品"
        ],
        "product_names": [
          "动力电池系统",
          "储能电池系统",
          "输配电产品"
        ],
        "business_scope": "许可项目：建设工程施工（除核电站建设经营、民用机场建设）；建设工程设计（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：电池制造；电池销售；电池零配件销售；电池零配件生产；电子专用材料制造；电子专用材料研发；电子专用材料销售；电子元器件与机电组件设备制造；电力电子元器件制造；电力电子元器件销售；储能技术服务；合同能源管理；节能管理服务；新能源汽车废旧动力蓄电池回收及梯次利用（不含危险废物经营）；资源再生利用技术研发；再生资源销售；再生资源回收（除生产性废旧金属）；充电桩销售；电动汽车充电基础设施运营；集中式快速充电站；机动车充电销售；新能源汽车换电设施销售；新能源汽车电附件销售；智能输配电及控制设备销售；汽车零部件及配件制造；输配电及控制设备制造；配电开关控制设备制造；配电开关控制设备研发；机械电气设备制造；机械电气设备销售；电力行业高效节能技术研发；水上运输设备零配件销售；水上运输设备零配件制造；电力设施器材制造；变压器、整流器和电感器制造；电气设备修理；光伏设备及元器件制造；光伏设备及元器件销售；风力发电机组及零部件销售；风电场相关装备销售；新材料技术研发；技术进出口；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；工程和技术研究和试验发展；标准化服务；进出口代理；货物进出口；普通货物仓储服务（不含危险化学品等需许可审批的项目）；以自有资金从事投资活动；教育咨询服务（不含涉许可审批的教育培训活动）（除许可业务外，可自主依法经营法律法规非禁止或限制的项目）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.25,
        "net_profit_yoy_pct": -0.79,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.16,
        "net_margin_pct": 0.0,
        "debt_to_assets_pct": 0.72,
        "cfo_to_np": 6.19,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 0.25,
        "net_profit_yoy_pct": -0.79,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 53,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "新能源汽车",
          "动力电池 / 储能",
          "动力电池系统",
          "储能电池系统",
          "输配电产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300207",
      "name": "欣旺达",
      "bucket": "新能源汽车",
      "subcategory": "动力电池 / 储能",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "消费电池与动力电池样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "new_energy_vehicle",
      "rule_child_id": "battery_storage",
      "evidence_level": "medium",
      "root_alias_hits": [
        "汽车"
      ],
      "child_alias_hits": [
        "储能",
        "电芯"
      ],
      "warnings": [],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "锂离子电池、电动汽车电池模组、储能电池及储能系统、锂离子电池材料、高性能膜材料、自动化设备及产线、电子产品的研发、生产和销售。",
        "product_types": [
          "锂离子电池电芯及模组"
        ],
        "product_names": [
          "锂离子电池电芯及模组"
        ],
        "business_scope": "一般经营项目是：软件开发及销售；锂离子电池、蓄电池、蓄电池组的实验室检测、技术咨询服务；兴办实业（具体项目另行申报）；国内商业、物资供销业；货物及技术进出口；普通货运。（以上项目均不含法律、行政法规、国务院决定规定需前置审批及禁止项目），许可经营项目是：电池、充电器、仪器仪表、工业设备、自动化设备及产线的研发、制造、销售；电子产品的研发、制造、销售；储能电池及储能系统的研发、制造、销售；工业防护用品、劳动防护用品等研发、生产、销售；移动基站、通信设备、电子触控笔的研发、生产和销售；锂离子电池材料、高性能膜材料、电解液材料的研发、生产、销售；光伏发电设备租赁；供冷服务；供电业务；发电业务、输电业务、供（配）电业务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.61,
        "net_profit_yoy_pct": -0.7,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.18,
        "net_margin_pct": 0.01,
        "debt_to_assets_pct": 0.73,
        "cfo_to_np": 0.45,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "net_profit_attr_yi": 1.61,
        "net_profit_yoy_pct": -0.7,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 49,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "新能源汽车",
          "动力电池 / 储能",
          "锂离子电池电芯及模组"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "301308",
      "name": "江波龙",
      "bucket": "半导体",
      "subcategory": "存储芯片",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "存储品牌与模组样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "semiconductor",
      "rule_child_id": "storage_chip",
      "evidence_level": "medium",
      "root_alias_hits": [
        "芯片",
        "集成电路"
      ],
      "child_alias_hits": [
        "存储"
      ],
      "warnings": [],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "存储器和主控芯片的研发设计、封装测试、技术支持与销售。",
        "product_types": [
          "自研芯片",
          "嵌入式存储",
          "固态硬盘",
          "移动存储",
          "内存条"
        ],
        "product_names": [
          "自研芯片",
          "嵌入式存储",
          "固态硬盘",
          "移动存储",
          "内存条"
        ],
        "business_scope": "通信设备、计算机及外围设备、音视频播放器及其他电子器件的技术开发、咨询、转让及相关技术服务、技术检测；集成电路的设计与开发；软件技术的设计与开发；商务信息咨询；企业管理咨询；电子产品的技术开发与购销及其他国内贸易；经营进出口业务（以上法律、行政法规、国务院决定禁止的项目除外，限制的项目须取得许可后方可经营）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 39.79,
        "net_profit_yoy_pct": 26.44,
        "revenue_yoy_pct": "",
        "roe_pct": 0.39,
        "gross_margin_pct": 0.56,
        "net_margin_pct": 0.4,
        "debt_to_assets_pct": 0.66,
        "cfo_to_np": -0.72,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 39.79,
        "net_profit_yoy_pct": 26.44,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "存储芯片",
          "自研芯片",
          "嵌入式存储",
          "固态硬盘",
          "移动存储",
          "内存条"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688525",
      "name": "佰维存储",
      "bucket": "半导体",
      "subcategory": "存储芯片",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "存储模组与AI存储弹性样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "semiconductor",
      "rule_child_id": "storage_chip",
      "evidence_level": "medium",
      "root_alias_hits": [
        "半导体",
        "集成电路",
        "封测"
      ],
      "child_alias_hits": [
        "存储"
      ],
      "warnings": [],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "半导体存储器的研发设计、封装测试、生产和销售。",
        "product_types": [
          "智能移动及AI新兴端侧存储",
          "PC及企业级存储PC存储",
          "智能汽车及其它应用存储",
          "先进封测服务"
        ],
        "product_names": [
          "智能移动及AI新兴端侧存储",
          "PC及企业级存储PC存储",
          "智能汽车及其它应用存储",
          "先进封测服务"
        ],
        "business_scope": "一般经营项目是：经营进出口业务（法律、行政法规、国务院决定禁止的项目除外，限制的项目须取得许可后方可经营）。许可经营项目是：大规模集成电路、嵌入式存储、移动存储、其他数码电子产品的研发、测试、生产、销售。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-16",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 28.77,
        "net_profit_yoy_pct": 15.68,
        "revenue_yoy_pct": "",
        "roe_pct": 0.42,
        "gross_margin_pct": 0.53,
        "net_margin_pct": 0.42,
        "debt_to_assets_pct": 0.65,
        "cfo_to_np": -0.94,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-16",
        "net_profit_attr_yi": 28.77,
        "net_profit_yoy_pct": 15.68,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "存储芯片",
          "智能移动及AI新兴端侧存储",
          "PC及企业级存储PC存储",
          "智能汽车及其它应用存储",
          "先进封测服务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688037",
      "name": "芯源微",
      "bucket": "半导体",
      "subcategory": "半导体设备",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "涂胶显影与清洗设备样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "semiconductor",
      "rule_child_id": "semicap",
      "evidence_level": "medium",
      "root_alias_hits": [
        "半导体",
        "集成电路"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "半导体专用设备的研发、生产和销售。",
        "product_types": [
          "前道涂胶显影设备",
          "前道清洗设备",
          "后道先进封装设备",
          "化合物等小尺寸设备"
        ],
        "product_names": [
          "前道涂胶显影设备",
          "前道化学清洗设备",
          "前道物理清洗设备",
          "涂胶显影设备",
          "单片式湿法设备",
          "临时键合",
          "解键合设备",
          "化合物等小尺寸设备"
        ],
        "business_scope": "集成电路的生产设备和测试设备及其他电子设备的开发研制、生产与销售，承接相关设备安装工程、技术服务；自营和代理各类商品和技术的进出口业务(国家限定公司经营或禁止进出口的业务除外)。(依法须经批准的项目，经相关部门批准后方可开展经营活动。)",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.1,
        "net_profit_yoy_pct": -0.25,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.47,
        "net_margin_pct": 0.03,
        "debt_to_assets_pct": 0.54,
        "cfo_to_np": -33.64,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 0.1,
        "net_profit_yoy_pct": -0.25,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 43,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "半导体设备",
          "前道涂胶显影设备",
          "前道化学清洗设备",
          "前道物理清洗设备",
          "涂胶显影设备",
          "单片式湿法设备",
          "临时键合"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688082",
      "name": "盛美上海",
      "bucket": "半导体",
      "subcategory": "半导体设备",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "清洗设备平台样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "semiconductor",
      "rule_child_id": "semicap",
      "evidence_level": "medium",
      "root_alias_hits": [
        "半导体"
      ],
      "child_alias_hits": [
        "刻蚀",
        "光刻"
      ],
      "warnings": [],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "半导体专用设备的研发、生产和销售。",
        "product_types": [
          "前道半导体工艺设备",
          "后道晶圆级先进封装工艺设备",
          "硅材料衬底制造工艺设备"
        ],
        "product_names": [
          "清洗设备",
          "半导体电镀设备",
          "立式炉管系列设备",
          "涂胶显影Track设备",
          "等离子体增强化学气相沉积PECVD设备",
          "无应力铜互连平坦化设备",
          "新型化合物半导体刻蚀设备",
          "光刻胶固化设备",
          "后道先进封装工艺设备",
          "硅材料衬底制造工艺设备"
        ],
        "business_scope": "一般项目：半导体器件专用设备制造；电子专用设备制造；机械零件、零部件加工；半导体器件专用设备销售；电子专用设备销售；专用设备修理；专业设计服务；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；货物进出口；技术进出口。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.04,
        "net_profit_yoy_pct": -0.58,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.46,
        "net_margin_pct": 0.07,
        "debt_to_assets_pct": 0.29,
        "cfo_to_np": -1.38,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 1.04,
        "net_profit_yoy_pct": -0.58,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 57,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "半导体设备",
          "清洗设备",
          "半导体电镀设备",
          "立式炉管系列设备",
          "涂胶显影Track设备",
          "等离子体增强化学气相沉积PECVD设备",
          "无应力铜互连平坦化设备"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688120",
      "name": "华海清科",
      "bucket": "半导体",
      "subcategory": "半导体设备",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "CMP设备与国产替代样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "semiconductor",
      "rule_child_id": "semicap",
      "evidence_level": "medium",
      "root_alias_hits": [
        "半导体"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "半导体专用装备的研发、生产、销售及技术服务。",
        "product_types": [
          "半导体专用装备"
        ],
        "product_names": [
          "CMP装备",
          "减薄装备",
          "划切装备",
          "边缘抛光装备",
          "离子注入装备",
          "湿法装备",
          "晶圆再生",
          "关键耗材",
          "维保服务"
        ],
        "business_scope": "一般项目：半导体器件专用设备制造；半导体器件专用设备销售；电子专用设备制造；电子专用设备销售；专用设备修理；电子、机械设备维护（不含特种设备）；机械零件、零部件加工；机械零件、零部件销售；电子专用材料销售；电子专用材料制造；电子专用材料研发；非居住房地产租赁；住房租赁；机动车充电销售；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；货物进出口；技术进出口；企业管理咨询。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.47,
        "net_profit_yoy_pct": 0.06,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.42,
        "net_margin_pct": 0.21,
        "debt_to_assets_pct": 0.43,
        "cfo_to_np": 0.03,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 2.47,
        "net_profit_yoy_pct": 0.06,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 85,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "半导体设备",
          "CMP装备",
          "减薄装备",
          "划切装备",
          "边缘抛光装备",
          "离子注入装备",
          "湿法装备"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002179",
      "name": "中航光电",
      "bucket": "国防军工与航空航天",
      "subcategory": "军工主机",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "军工连接器样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "defense_aerospace",
      "rule_child_id": "defense_prime",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "中高端光、电、流体连接技术与产品的研究与开发。",
        "product_types": [
          "光",
          "电",
          "流体连接器",
          "光电子器件",
          "线缆组件",
          "集成化设备"
        ],
        "product_names": [
          "光",
          "电",
          "流体连接器",
          "光电子器件",
          "线缆组件",
          "集成化设备"
        ],
        "business_scope": "一般项目：电子元器件制造;机械电气设备制造;制冷、空调设备制造;汽车零部件及配件制造;工程和技术研究和试验发展;专用设备修理(除依法须经批准的项目外,凭营业执照依法自主开展经营活动)",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 4.28,
        "net_profit_yoy_pct": -0.38,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.28,
        "net_margin_pct": 0.09,
        "debt_to_assets_pct": 0.35,
        "cfo_to_np": -4.82,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": 4.28,
        "net_profit_yoy_pct": -0.38,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 57,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "国防军工与航空航天",
          "军工主机",
          "光",
          "电",
          "流体连接器",
          "光电子器件",
          "线缆组件",
          "集成化设备"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300699",
      "name": "光威复材",
      "bucket": "国防军工与航空航天",
      "subcategory": "航空装备 / 大飞机",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "碳纤维材料样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "defense_aerospace",
      "rule_child_id": "defense_aircraft",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "碳纤维、碳纤维织物、碳纤维预浸料、碳纤维复合材料制品及碳纤维核心生产装备的研发、生产与销售。",
        "product_types": [
          "碳纤维及织物",
          "碳梁",
          "预浸料"
        ],
        "product_names": [
          "高强型碳纤维",
          "高模型碳纤维",
          "高强中模型碳纤维",
          "高强高模型碳纤维",
          "机织物",
          "多轴向经编织物"
        ],
        "business_scope": "一般项目：新材料技术研发；高性能纤维及复合材料制造；高性能纤维及复合材料销售；石墨及碳素制品制造；石墨及碳素制品销售；模具制造；模具销售；机械设备研发；机械设备销售；专用设备制造（不含许可类专业设备制造）；机械零件、零部件加工；机械零件、零部件销售；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；技术进出口；货物进出口；劳务服务（不含劳务派遣）；非居住房地产租赁；仓储设备租赁服务；特种设备出租；机械设备租赁。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.2,
        "net_profit_yoy_pct": -0.22,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.38,
        "net_margin_pct": 0.19,
        "debt_to_assets_pct": 0.36,
        "cfo_to_np": -0.2,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "net_profit_attr_yi": 1.2,
        "net_profit_yoy_pct": -0.22,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 57,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "国防军工与航空航天",
          "航空装备 / 大飞机",
          "高强型碳纤维",
          "高模型碳纤维",
          "高强中模型碳纤维",
          "高强高模型碳纤维",
          "机织物",
          "多轴向经编织物"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600845",
      "name": "宝信软件",
      "bucket": "高端装备与工业",
      "subcategory": "工业软件 / 企业软件",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "工业软件与IDC样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "industrial_equipment",
      "rule_child_id": "industrial_software",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "软件开发及工程服务、服务外包、系统集成。",
        "product_types": [
          "软件开发及工程服务",
          "服务外包",
          "系统集成"
        ],
        "product_names": [
          "软件开发及工程服务",
          "服务外包",
          "系统集成"
        ],
        "business_scope": "计算机、自动化、网络通讯系统及软硬件产品的研究、设计、开发、制造、集成，及相应的外包、维修、咨询等服务；智能交通、智能建筑、机电一体化系统及产品的研究、设计、开发、制造、销售相关产品；公共安全防范工程及信息系统安全工程的设计、施工和维修。在线信息与数据检索、第一类增值电信业务中的因特网数据中心业务、第二类增值电信业务中的信息服务业务（不含固定网电话信息服务）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-22",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 3.85,
        "net_profit_yoy_pct": -0.14,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.31,
        "net_margin_pct": 0.15,
        "debt_to_assets_pct": 0.46,
        "cfo_to_np": 1.4,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-22",
        "net_profit_attr_yi": 3.85,
        "net_profit_yoy_pct": -0.14,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 67,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "高端装备与工业",
          "工业软件 / 企业软件",
          "软件开发及工程服务",
          "服务外包",
          "系统集成"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688599",
      "name": "天合光能",
      "bucket": "电力与公用事业",
      "subcategory": "光伏",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "光伏组件与储能样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "renewable_power",
      "rule_child_id": "renewable_pv",
      "evidence_level": "medium",
      "root_alias_hits": [
        "发电"
      ],
      "child_alias_hits": [
        "光伏",
        "组件",
        "电池片"
      ],
      "warnings": [],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "光伏产品、储能业务、系统解决方案及数字能源服务。",
        "product_types": [
          "光伏产品",
          "储能业务",
          "系统解决方案",
          "数字能源服务"
        ],
        "product_names": [
          "光伏产品",
          "储能业务",
          "系统解决方案",
          "数字能源服务"
        ],
        "business_scope": "太阳能光伏电站设备制造、太阳能光伏电站设备及系统装置安装；多晶铸锭、单晶硅棒、硅片、太阳能电池片、光伏组件的制造；太阳能、光能技术开发；销售自产产品；从事多晶硅、机械设备、太阳能光伏电站设备及系统集成装置、储能及光伏应用系统的进出口和批发业务（不涉及国营贸易管理商品，涉及配额、许可证管理商品的，按国家有关规定办理申请）；从事太阳能电站的建设和经营（取得相关资质后方可开展经营）；从事上述业务的相关咨询服务；太阳能发电；储能及光伏应用系统的技术研发、工程设计及技术服务；光伏产品的检测服务（凭实验室认可证书所列检测服务项目经营）。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -2.62,
        "net_profit_yoy_pct": 0.79,
        "revenue_yoy_pct": "",
        "roe_pct": -0.01,
        "gross_margin_pct": 0.07,
        "net_margin_pct": -0.02,
        "debt_to_assets_pct": 0.78,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": -2.62,
        "net_profit_yoy_pct": 0.79,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "光伏",
          "光伏产品",
          "储能业务",
          "系统解决方案",
          "数字能源服务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002472",
      "name": "双环传动",
      "bucket": "机器人 / 自动化",
      "subcategory": "减速器 / 丝杠",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "齿轮传动与机器人减速器样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "robotics",
      "rule_child_id": "robot_reducer_screw_formal",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [
        "减速器"
      ],
      "warnings": [
        "root_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "机械传动齿轮及其相关零部件的研发、设计与制造。",
        "product_types": [
          "乘用车齿轮",
          "电动工具齿轮",
          "工程机械齿轮",
          "摩托车齿轮",
          "商用车齿轮",
          "智能执行机构",
          "减速器"
        ],
        "product_names": [
          "乘用车齿轮",
          "电动工具齿轮",
          "工程机械齿轮",
          "摩托车齿轮",
          "商用车齿轮",
          "智能执行机构",
          "减速器"
        ],
        "business_scope": "一般项目：汽车零部件研发；机械设备研发；机电耦合系统研发；轴承、齿轮和传动部件制造；齿轮及齿轮减、变速箱制造；汽车零部件及配件制造；高铁设备、配件制造；轴承、齿轮和传动部件销售；齿轮及齿轮减、变速箱销售；轨道交通专用设备、关键系统及部件销售；风力发电机组及零部件销售；金属材料销售；金属矿石销售；有色金属合金销售；非居住房地产租赁；园区管理服务；餐饮管理；货物进出口；技术进出口（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。许可项目：餐饮服务；食品经营管理（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 3.0,
        "net_profit_yoy_pct": 0.03,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.28,
        "net_margin_pct": 0.14,
        "debt_to_assets_pct": 0.43,
        "cfo_to_np": 1.89,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "net_profit_attr_yi": 3.0,
        "net_profit_yoy_pct": 0.03,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "机器人 / 自动化",
          "减速器 / 丝杠",
          "乘用车齿轮",
          "电动工具齿轮",
          "工程机械齿轮",
          "摩托车齿轮",
          "商用车齿轮",
          "智能执行机构"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002896",
      "name": "中大力德",
      "bucket": "机器人 / 自动化",
      "subcategory": "减速器 / 丝杠",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "减速器与小型传动样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "robotics",
      "rule_child_id": "robot_reducer_screw_formal",
      "evidence_level": "medium",
      "root_alias_hits": [
        "机器人"
      ],
      "child_alias_hits": [
        "减速器",
        "谐波减速器"
      ],
      "warnings": [],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "机械传动与控制应用领域关键零部件的研发、制造、销售、服务。",
        "product_types": [
          "减速电机",
          "精密减速器",
          "智能执行单元"
        ],
        "product_names": [
          "微型永磁齿轮减速电机",
          "微型交流齿轮减速电机",
          "小型交流齿轮减速电机",
          "直角轴齿轮减速电机",
          "传动行星减速电机",
          "永磁同步减速电机",
          "行星减速器",
          "精密摆线针轮减速器",
          "谐波减速器",
          "伺服驱动",
          "永磁直流减速电机"
        ],
        "business_scope": "一般项目：电机制造；电动机制造；微特电机及组件制造；微特电机及组件销售；齿轮及齿轮减、变速箱制造；齿轮及齿轮减、变速箱销售；轴承、齿轮和传动部件制造；轴承、齿轮和传动部件销售；电机及其控制系统研发；工业机器人制造；工业机器人销售；汽车零部件及配件制造；汽车零配件批发；通用设备制造（不含特种设备制造）；专用设备制造（不含许可类专业设备制造）；机械设备研发；机械设备销售；机床功能部件及附件制造；机床功能部件及附件销售；轴承制造；轴承销售；模具制造；模具销售；五金产品制造；五金产品批发（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.11,
        "net_profit_yoy_pct": -0.36,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.24,
        "net_margin_pct": 0.05,
        "debt_to_assets_pct": 0.35,
        "cfo_to_np": -0.88,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 0.11,
        "net_profit_yoy_pct": -0.36,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 57,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "机器人 / 自动化",
          "减速器 / 丝杠",
          "微型永磁齿轮减速电机",
          "微型交流齿轮减速电机",
          "小型交流齿轮减速电机",
          "直角轴齿轮减速电机",
          "传动行星减速电机",
          "永磁同步减速电机"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002979",
      "name": "雷赛智能",
      "bucket": "机器人 / 自动化",
      "subcategory": "工业自动化 / 工业母机",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "运动控制样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "robotics",
      "rule_child_id": "robot_industrial_auto",
      "evidence_level": "medium",
      "root_alias_hits": [
        "自动化"
      ],
      "child_alias_hits": [
        "工业自动化"
      ],
      "warnings": [],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "聚焦智能装备运动控制核心部件的研发、生产、销售与服务，为国内外数万家智能装备制造企业提供稳定可靠、高附加值的运动控制核心部件及系统级解决方案。",
        "product_types": [
          "控制技术类产品",
          "步进系统类产品",
          "伺服系统类产品"
        ],
        "product_names": [
          "控制技术类产品",
          "步进系统类产品",
          "伺服系统类产品"
        ],
        "business_scope": "驱动器、电机、运动控制系统及组件、专用控制系统的技术开发、生产、销售；工业自动化装置和仪表、微电脑系统软硬件、计算机软件的技术开发和销售，其他国内贸易（不含专营、专控、专卖商品及限制项目）；经营进出口业务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.74,
        "net_profit_yoy_pct": 0.29,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.39,
        "net_margin_pct": 0.14,
        "debt_to_assets_pct": 0.4,
        "cfo_to_np": -0.65,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 0.74,
        "net_profit_yoy_pct": 0.29,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "机器人 / 自动化",
          "工业自动化 / 工业母机",
          "控制技术类产品",
          "步进系统类产品",
          "伺服系统类产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "603662",
      "name": "柯力传感",
      "bucket": "机器人 / 自动化",
      "subcategory": "传感器 / 电子皮肤",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "传感器与力控样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "robotics",
      "rule_child_id": "robot_sensor_formal",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "传感器与物联网系统集成业务。",
        "product_types": [
          "力学传感器及仪表系列",
          "其他物理量传感器系列-电流电压",
          "其他物理量传感器系列-温度",
          "其他物理量传感器系列-水质",
          "其他物理量传感器系列-振动",
          "其他物理量传感器系列-光电",
          "工业物联网及系统集成",
          "平台型产品系列"
        ],
        "product_names": [
          "力学传感器及仪表系列",
          "其他物理量传感器系列-电流电压",
          "其他物理量传感器系列-温度",
          "其他物理量传感器系列-水质",
          "其他物理量传感器系列-振动",
          "其他物理量传感器系列-光电",
          "工业物联网及系统集成",
          "平台型产品系列"
        ],
        "business_scope": "一般项目：技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；电子元器件制造；电子元器件批发；电子元器件零售；工业自动控制系统装置销售；仪器仪表制造；仪器仪表销售；计算机软硬件及外围设备制造；计算机软硬件及辅助设备批发；计算机软硬件及辅助设备零售；专用设备制造（不含许可类专业设备制造）；机械设备租赁；环境保护专用设备制造；家用电器制造；家用电器销售；电子产品销售；终端计量设备制造；终端计量设备销售；金属材料销售；五金产品批发；五金产品零售；建筑材料销售；物联网技术研发；互联网数据服务；市场营销策划；企业形象策划；企业管理咨询；物业管理；信息咨询服务（不含许可类信息咨询服务）；会议及展览服务（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。许可项目：道路货物运输（网络货运）；检验检测服务；货物进出口；技术进出口；进出口代理（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.55,
        "net_profit_yoy_pct": -0.46,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.46,
        "net_margin_pct": 0.15,
        "debt_to_assets_pct": 0.29,
        "cfo_to_np": 0.94,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 0.55,
        "net_profit_yoy_pct": -0.46,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 63,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "机器人 / 自动化",
          "传感器 / 电子皮肤",
          "力学传感器及仪表系列",
          "其他物理量传感器系列-电流电压",
          "其他物理量传感器系列-温度",
          "其他物理量传感器系列-水质",
          "其他物理量传感器系列-振动",
          "其他物理量传感器系列-光电"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688320",
      "name": "禾川科技",
      "bucket": "机器人 / 自动化",
      "subcategory": "工业自动化 / 工业母机",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "伺服与工业控制样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "robotics",
      "rule_child_id": "robot_industrial_auto",
      "evidence_level": "medium",
      "root_alias_hits": [
        "机器人",
        "自动化"
      ],
      "child_alias_hits": [
        "工业自动化"
      ],
      "warnings": [],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "工业自动化产品的研发、生产、销售及应用集成。",
        "product_types": [
          "伺服系统",
          "PLC及扩展",
          "其他工控产品",
          "机床"
        ],
        "product_names": [
          "伺服系统",
          "PLC及扩展",
          "其他工控产品",
          "机床"
        ],
        "business_scope": "一般项目：技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；工业自动控制系统装置制造；工业自动控制系统装置销售；工业控制计算机及系统制造；工业控制计算机及系统销售；智能机器人的研发；智能机器人销售；工业机器人制造；工业机器人销售；工业机器人安装、维修；电机制造；电机及其控制系统研发；软件开发；机械设备研发；机械设备销售；机械电气设备制造；机械电气设备销售；其他通用仪器制造；电力电子元器件制造；电力电子元器件销售；物联网技术研发；物联网设备制造；智能基础制造装备制造；智能基础制造装备销售；配电开关控制设备研发；配电开关控制设备制造；配电开关控制设备销售；机床功能部件及附件制造；机床功能部件及附件销售；智能控制系统集成；汽车零部件及配件制造；电动机制造；光伏设备及元器件制造；光伏设备及元器件销售；以自有资金从事投资活动；货物进出口；技术进出口(除依法须经批准的项目外，凭营业执照依法自主开展经营活动)。(依法须经批准的项目，经相关部门批准后方可开展经营活动)",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -0.09,
        "net_profit_yoy_pct": 0.79,
        "revenue_yoy_pct": "",
        "roe_pct": -0.0,
        "gross_margin_pct": 0.23,
        "net_margin_pct": -0.03,
        "debt_to_assets_pct": 0.41,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": -0.09,
        "net_profit_yoy_pct": 0.79,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "机器人 / 自动化",
          "工业自动化 / 工业母机",
          "伺服系统",
          "PLC及扩展",
          "其他工控产品",
          "机床"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600809",
      "name": "山西汾酒",
      "bucket": "消费白马",
      "subcategory": "白酒 / 高端消费",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "次高端白酒样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "consumer_bluechip",
      "rule_child_id": "consumer_liquor_premium",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "汾酒、竹叶青酒、杏花村酒的生产、销售。",
        "product_types": [
          "汾酒",
          "竹叶青酒",
          "杏花村酒"
        ],
        "product_names": [
          "汾酒",
          "竹叶青酒",
          "杏花村酒"
        ],
        "business_scope": "汾酒、竹叶青酒、杏花村酒及其系列酒的生产、销售；副产品酒糟、生产用原辅材料和包装材料的销售；酒类高新技术及产品研究、开发、生产、应用；投资办企业及相关咨询服务；道路普通货物运输。保健食品生产；包装装潢印刷品印刷；食品用塑料包装容器工具制品生产。保健食品（预包装）销售；食品进出口；塑料制品制造；金属包装容器及材料制造。（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 54.04,
        "net_profit_yoy_pct": -0.19,
        "revenue_yoy_pct": "",
        "roe_pct": 0.13,
        "gross_margin_pct": 0.75,
        "net_margin_pct": 0.36,
        "debt_to_assets_pct": 0.29,
        "cfo_to_np": 1.53,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 54.04,
        "net_profit_yoy_pct": -0.19,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 77,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "消费白马",
          "白酒 / 高端消费",
          "汾酒",
          "竹叶青酒",
          "杏花村酒"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600887",
      "name": "伊利股份",
      "bucket": "消费白马",
      "subcategory": "大众消费",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "乳制品龙头样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "consumer_bluechip",
      "rule_child_id": "consumer_mass",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "各类乳品及健康饮品的生产与销售。",
        "product_types": [
          "液体乳",
          "奶粉",
          "奶制品",
          "冷饮产品"
        ],
        "product_names": [
          "液态奶",
          "乳饮料",
          "奶粉",
          "酸奶",
          "冷冻饮品",
          "奶酪",
          "乳脂",
          "包装饮用水"
        ],
        "business_scope": "乳制品生产；婴幼儿配方食品生产；婴幼儿配方乳粉销售；食品经营；食品生产；饮料生产；特殊医学用途配方食品生产；特殊医学用途配方食品销售；牲畜饲养；家禽饲养；生鲜乳道路运输；餐饮服务；饲料生产；食品用纸包装、容器制品生产；动物饲养；国内货物运输代理；包装材料及制品销售；五金产品批发；化工产品生产（不含许可类化工产品）；化工产品销售（不含许可类化工产品）；农副产品销售；日用百货销售；食品进出口；货物进出口；通用设备修理；机械设备销售；玩具制造；玩具销售；畜禽收购；牲畜销售；互联网销售（除销售需要许可的商品）；工程管理服务；工程技术服务（规划管理、勘察、设计、监理除外）；劳务服务（不含劳务派遣）（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 54.39,
        "net_profit_yoy_pct": 0.11,
        "revenue_yoy_pct": "",
        "roe_pct": 0.09,
        "gross_margin_pct": 0.38,
        "net_margin_pct": 0.16,
        "debt_to_assets_pct": 0.59,
        "cfo_to_np": 0.69,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 54.39,
        "net_profit_yoy_pct": 0.11,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "消费白马",
          "大众消费",
          "液态奶",
          "乳饮料",
          "奶粉",
          "酸奶",
          "冷冻饮品",
          "奶酪"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "603288",
      "name": "海天味业",
      "bucket": "消费白马",
      "subcategory": "大众消费",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "调味品龙头修复样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "consumer_bluechip",
      "rule_child_id": "consumer_mass",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [
        "调味品"
      ],
      "warnings": [
        "root_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "调味品的生产与销售。",
        "product_types": [
          "酱油",
          "蚝油",
          "调味酱",
          "食醋",
          "料酒",
          "复合调味料"
        ],
        "product_names": [
          "酱油",
          "蚝油",
          "调味酱",
          "食醋",
          "料酒",
          "复合调味料"
        ],
        "business_scope": "生产经营调味品、豆制品、食品、饮料、包装材料；农副产品的加工；其他电信服务：货物、技术进出口（国家禁止或涉及行政审批的货物和技术进出口除外）：信息咨询服务；食品互联网销售；批发兼零售预包装食品。（依法须经批准的项目，经相关部门批准后方可开展经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 24.43,
        "net_profit_yoy_pct": 0.11,
        "revenue_yoy_pct": "",
        "roe_pct": 0.06,
        "gross_margin_pct": 0.42,
        "net_margin_pct": 0.27,
        "debt_to_assets_pct": 0.12,
        "cfo_to_np": -0.19,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 24.43,
        "net_profit_yoy_pct": 0.11,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "消费白马",
          "大众消费",
          "酱油",
          "蚝油",
          "调味酱",
          "食醋",
          "料酒",
          "复合调味料"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600019",
      "name": "宝钢股份",
      "bucket": "资源周期",
      "subcategory": "钢铁 / 建材",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "钢铁龙头与分红样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "resources",
      "rule_child_id": "steel_building_materials",
      "evidence_level": "medium",
      "root_alias_hits": [
        "资源",
        "煤炭",
        "钢铁",
        "有色",
        "金属"
      ],
      "child_alias_hits": [
        "钢铁"
      ],
      "warnings": [],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "钢铁与钢铁主业相关的加工配送、化工及信息科技等业务。",
        "product_types": [
          "冷轧碳钢板卷",
          "热轧碳钢板卷",
          "钢管产品",
          "长材产品",
          "厚板产品",
          "其他钢铁产品"
        ],
        "product_names": [
          "冷轧碳钢板卷",
          "热轧碳钢板卷",
          "钢管产品",
          "长材产品",
          "厚板产品",
          "其他钢铁产品"
        ],
        "business_scope": "许可项目：危险化学品生产；危险化学品经营；危险废物经营；发电业务、输电业务、供（配）电业务；港口经营；道路货物运输（不含危险货物）；道路危险货物运输；特种设备制造；机动车检验检测服务。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：钢、铁冶炼；钢压延加工；常用有色金属冶炼；有色金属压延加工；煤炭及制品销售；金属矿石销售；金属材料销售；高品质特种钢铁材料销售；特种设备销售；再生资源销售；销售代理；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；化工产品生产（不含许可类化工产品）；化工产品销售（不含许可类化工产品）；基础化学原料制造（不含危险化学品等许可类化学品的制造）；普通货物仓储服务（不含危险化学品等需许可审批的项目）；国内货物运输代理；国内集装箱货物运输代理；非居住房地产租赁；土地使用权租赁；机械设备租赁；运输设备租赁服务；船舶租赁；特种设备出租；绘图、计算及测量仪器制造；绘图、计算及测量仪器销售；企业管理咨询；环境保护监测；招投标代理服务；机动车修理和维护；货物进出口；技术进出口；进出口代理；金属废料和碎屑加工处理。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 25.17,
        "net_profit_yoy_pct": -0.09,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.07,
        "net_margin_pct": 0.03,
        "debt_to_assets_pct": 0.38,
        "cfo_to_np": 1.76,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 25.17,
        "net_profit_yoy_pct": -0.09,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 77,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "资源周期",
          "钢铁 / 建材",
          "冷轧碳钢板卷",
          "热轧碳钢板卷",
          "钢管产品",
          "长材产品",
          "厚板产品",
          "其他钢铁产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600028",
      "name": "中国石化",
      "bucket": "资源周期",
      "subcategory": "能源资源",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "炼化央企样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "resources",
      "rule_child_id": "resources_energy",
      "evidence_level": "medium",
      "root_alias_hits": [
        "油气"
      ],
      "child_alias_hits": [
        "油气",
        "能源"
      ],
      "warnings": [],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "石油及天然气和化工业务。",
        "product_types": [
          "原油",
          "天然气",
          "成品油",
          "化工产品"
        ],
        "product_names": [
          "原油",
          "天然气",
          "汽油",
          "柴油",
          "煤油",
          "基础化工原料",
          "合纤单体及聚合物",
          "合成树脂",
          "合成纤维",
          "合成橡胶",
          "化肥"
        ],
        "business_scope": "非煤矿山（石油、天然气等）、危险化学品（乙烯、丙烯、丁二烯、石脑油等）、重油、橡胶及其他石油化工原料和产品的生产、储存、管道运输、陆路运输、水路运输、销售；石油炼制；汽油、煤油、柴油的批发业务及零售（限分支机构经营）业务；天然气化工、煤化工的生产、储存、运输、销售;润滑油、燃料油、溶剂油、沥青的销售；化肥生产；加气站经营，压缩天然气(CNG)、液化天然气（LNG）、液化石油气（LPG）、城市燃气销售；加电站经营；石油石化机器、设备的制造、监造、安装；石油石化原辅材料、设备及零部件的采购、销售；技术及信息、替代能源产品的研究、开发、应用、咨询服务；电力、蒸汽、水务和工业气体的生产销售；农、林、牧产品批发；日用百货便利店经营；针织服装及家庭用品批发与零售；文化、体育用品及器材专门批发与零售；食品、饮料、烟草制品的销售；医药及医疗器材批发与零售；汽车、摩托车及零配件专门零售；汽车、摩托车修理与维护、技术培训；机械设备、五金产品、电子产品、家用电器批发与零售；家具及室内装饰材料专门零售；货摊、无店铺及其他零售业；综合零售；住宿餐饮业；居民服务；运输代理业务；仓储业；自有房地产经营活动；机械设备租赁；媒体、广告，佣金代理；保险经纪与代理服务；金融信托与管理服务；电子商务；自营和代理各类商品和技术的进出口（国家限定公司经营或禁止进出口的商品和技术除外）；承包境外机电、石化行业工程和境内国际招标工程；上述境外工程所需的设备材料出口；对外派遣实施上述境外工程所需的劳务人员。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 196.14,
        "net_profit_yoy_pct": 0.28,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.2,
        "net_margin_pct": 0.03,
        "debt_to_assets_pct": 0.56,
        "cfo_to_np": -0.28,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 196.14,
        "net_profit_yoy_pct": 0.28,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "资源周期",
          "能源资源",
          "原油",
          "天然气",
          "汽油",
          "柴油",
          "煤油",
          "基础化工原料"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600111",
      "name": "北方稀土",
      "bucket": "资源周期",
      "subcategory": "金属矿产",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "稀土资源样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "resources",
      "rule_child_id": "resources_metal_mining",
      "evidence_level": "medium",
      "root_alias_hits": [
        "煤炭",
        "稀土",
        "金属"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "稀土精矿，稀土深加工产品，稀土新材料生产与销售，稀土高科技应用产品的开发、生产和销售；稀土技术转让等。",
        "product_types": [
          "稀土原料产品",
          "稀土新材料产品",
          "稀土终端应用产品"
        ],
        "product_names": [
          "稀土盐类",
          "稀土氧化物",
          "稀土金属",
          "稀土磁性材料",
          "抛光材料",
          "储氢材料",
          "催化材料",
          "稀土合金",
          "稀土永磁高效节能电机",
          "固态储氢瓶",
          "氢能两轮车"
        ],
        "business_scope": "（国家法律、法规规定应经审批未获审批前不得生产经营）稀土精矿，稀土深加工产品、稀土新材料及稀土应用产品；铌精矿及其深加工产品；冶金产品、煤炭及其深加工产品、化工产品、光电产品经营；设备、备件的制造、采购与销售；进口本企业所需产品；出口产品；技术的开发应用、推广转让，技术、信息服务；分析检测；建筑安装、修理；自有房地产经营活动、机械设备租赁；农贸、改良剂、水溶肥料、生物肥料、有机肥料等各种肥料的生产与销售。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 10.47,
        "net_profit_yoy_pct": 1.13,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.13,
        "net_margin_pct": 0.09,
        "debt_to_assets_pct": 0.37,
        "cfo_to_np": -0.26,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 10.47,
        "net_profit_yoy_pct": 1.13,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 87,
        "fundamental_score": 88,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "资源周期",
          "金属矿产",
          "稀土盐类",
          "稀土氧化物",
          "稀土金属",
          "稀土磁性材料",
          "抛光材料",
          "储氢材料"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601225",
      "name": "陕西煤业",
      "bucket": "资源周期",
      "subcategory": "能源资源",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "煤炭龙头样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "resources",
      "rule_child_id": "resources_energy",
      "evidence_level": "medium",
      "root_alias_hits": [
        "煤炭"
      ],
      "child_alias_hits": [
        "煤炭",
        "能源"
      ],
      "warnings": [],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "煤炭、电力的生产和销售以及生产服务等业务。",
        "product_types": [
          "原选煤",
          "洗煤",
          "贸易煤",
          "电力",
          "运输"
        ],
        "product_names": [
          "原选煤",
          "洗煤",
          "贸易煤",
          "电力",
          "运输"
        ],
        "business_scope": "煤炭开采、经营、销售、加工和综合利用（限分支机构凭许可证在有效期内经营）；煤炭铁路运输（限自营铁路）；新能源项目的投资、开发、经营和管理（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 70.0,
        "net_profit_yoy_pct": -0.12,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.31,
        "net_margin_pct": 0.18,
        "debt_to_assets_pct": 0.4,
        "cfo_to_np": 1.38,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": 70.0,
        "net_profit_yoy_pct": -0.12,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 77,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "资源周期",
          "能源资源",
          "原选煤",
          "洗煤",
          "贸易煤",
          "电力",
          "运输"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601600",
      "name": "中国铝业",
      "bucket": "资源周期",
      "subcategory": "金属矿产",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "铝周期央企样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "resources",
      "rule_child_id": "resources_metal_mining",
      "evidence_level": "medium",
      "root_alias_hits": [
        "资源",
        "煤炭"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "铝土矿、煤炭等资源的勘探开采，氧化铝、原铝、铝合金及炭素产品的生产、销售、技术研发，国际贸易，物流产业，火力及新能源发电等。",
        "product_types": [
          "氧化铝",
          "铝产品",
          "煤炭",
          "电力"
        ],
        "product_names": [
          "氧化铝",
          "铝产品",
          "煤炭",
          "电力"
        ],
        "business_scope": "铝土矿、煤炭等资源的勘探开采，氧化铝、原铝、铝合金及炭素产品的生产、销售、技术研发，国际贸易，物流产业，火力及新能源发电等。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 100.59,
        "net_profit_yoy_pct": 0.56,
        "revenue_yoy_pct": "",
        "roe_pct": 0.07,
        "gross_margin_pct": 0.26,
        "net_margin_pct": 0.17,
        "debt_to_assets_pct": 0.43,
        "cfo_to_np": 1.08,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "net_profit_attr_yi": 100.59,
        "net_profit_yoy_pct": 0.56,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "资源周期",
          "金属矿产",
          "氧化铝",
          "铝产品",
          "煤炭",
          "电力"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601336",
      "name": "新华保险",
      "bucket": "金融",
      "subcategory": "保险 / 综合金融",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "寿险弹性样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "finance",
      "rule_child_id": "finance_insurance_fintech",
      "evidence_level": "medium",
      "root_alias_hits": [
        "保险"
      ],
      "child_alias_hits": [
        "保险"
      ],
      "warnings": [],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "保险业务、公司资产管理业务。",
        "product_types": [
          "保险业务",
          "公司资产管理业务"
        ],
        "product_names": [
          "保险业务",
          "公司资产管理业务"
        ],
        "business_scope": "人民币、外币的人身保险（包括各类人寿保险、健康保险、意外伤害保险）；为境内外的保险机构代理保险、检验、理赔；保险咨询；依照有关法规从事资金运用。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 65.02,
        "net_profit_yoy_pct": 0.11,
        "revenue_yoy_pct": "",
        "roe_pct": 0.06,
        "gross_margin_pct": "",
        "net_margin_pct": 0.29,
        "debt_to_assets_pct": 0.93,
        "cfo_to_np": 5.58,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 65.02,
        "net_profit_yoy_pct": 0.11,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "金融",
          "保险 / 综合金融",
          "保险业务",
          "公司资产管理业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601601",
      "name": "中国太保",
      "bucket": "金融",
      "subcategory": "保险 / 综合金融",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "保险龙头对比样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "finance",
      "rule_child_id": "finance_insurance_fintech",
      "evidence_level": "medium",
      "root_alias_hits": [
        "金融",
        "保险"
      ],
      "child_alias_hits": [
        "保险"
      ],
      "warnings": [],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "各类风险保障、财富规划以及资产管理等产品和服务。",
        "product_types": [
          "人身保险产品和服务",
          "财产保险产品和服务",
          "健康险产品及健康管理服务",
          "保险资金运用以及第三方资产管理业务",
          "养老金融服务及相关资产管理业务",
          "私募基金管理业务及相关咨询服务",
          "公募基金管理业务",
          "市场化科技赋能支持和服务"
        ],
        "product_names": [
          "人身保险产品和服务",
          "财产保险产品和服务",
          "健康险产品及健康管理服务",
          "保险资金运用以及第三方资产管理业务",
          "养老金融服务及相关资产管理业务",
          "私募基金管理业务及相关咨询服务",
          "公募基金管理业务",
          "市场化科技赋能支持和服务"
        ],
        "business_scope": "控股投资保险企业；监督管理控股投资保险企业的各类国内、国际再保险业务；监督管理控股投资保险企业的资金运用业务；经批准参加国际保险活动。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 103.67,
        "net_profit_yoy_pct": 0.04,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": "",
        "net_margin_pct": 0.11,
        "debt_to_assets_pct": 0.89,
        "cfo_to_np": 5.91,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 103.67,
        "net_profit_yoy_pct": 0.04,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "金融",
          "保险 / 综合金融",
          "人身保险产品和服务",
          "财产保险产品和服务",
          "健康险产品及健康管理服务",
          "保险资金运用以及第三方资产管理业务",
          "养老金融服务及相关资产管理业务",
          "私募基金管理业务及相关咨询服务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601988",
      "name": "中国银行",
      "bucket": "金融",
      "subcategory": "银行",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "大行高股息样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "finance",
      "rule_child_id": "finance_bank",
      "evidence_level": "medium",
      "root_alias_hits": [
        "金融",
        "银行",
        "证券",
        "保险"
      ],
      "child_alias_hits": [
        "银行"
      ],
      "warnings": [],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "从事银行业及有关的金融服务，包括商业银行、投资银行、直接投资、证券、保险、基金、飞机租赁、资产管理、金融科技、金融租赁等。",
        "product_types": [
          "商业银行业务",
          "投资银行业务",
          "保险业务",
          "直接投资",
          "投资管理业务",
          "基金管理业务",
          "飞机租赁"
        ],
        "product_names": [
          "商业银行业务",
          "投资银行业务",
          "保险业务",
          "直接投资",
          "投资管理业务",
          "基金管理业务",
          "飞机租赁"
        ],
        "business_scope": "吸收人民币存款；发放短期、中期和长期贷款；办理结算；办理票据贴现；发行金融债券；代理发行、代理兑付、承销政府债券；买卖政府债券；从事同业拆借；提供信用证服务及担保；代理收付款项；提供保管箱服务；外汇存款；外汇贷款；外汇汇款；外币兑换；国际结算；同业外汇拆借；外汇票据的承兑和贴现；外汇借款；外汇担保；结汇、售汇；发行和代理发行股票以外的外币有价证券；买卖和代理买卖股票以外的外币有价证券；自营外汇买卖；代客外汇买卖；外汇信用卡的发行和代理国外信用卡的发行及付款；资信调查、咨询、见证业务；组织或参加银团贷款；国际贵金属买卖；海外分支机构经营当地法律许可的一切银行业务；在港澳地区的分行依据当地法令可发行或参与代理发行当地货币；经中国银行业监督管理委员会等监管部门批准的其他业务；保险兼业代理（有效期至2021年8月21日）。（企业依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 609.59,
        "net_profit_yoy_pct": 0.04,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": "",
        "net_margin_pct": 0.34,
        "debt_to_assets_pct": 0.92,
        "cfo_to_np": 3.22,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 609.59,
        "net_profit_yoy_pct": 0.04,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "金融",
          "银行",
          "商业银行业务",
          "投资银行业务",
          "保险业务",
          "直接投资",
          "投资管理业务",
          "基金管理业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002709",
      "name": "天赐材料",
      "bucket": "有色金属与新材料",
      "subcategory": "新能源材料",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "电解液材料样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "advanced_materials",
      "rule_child_id": "advanced_new_energy_material",
      "evidence_level": "medium",
      "root_alias_hits": [
        "新材料"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "精细化工新材料的研发、生产和销售。",
        "product_types": [
          "锂离子电池材料",
          "日化材料及特种化学品"
        ],
        "product_names": [
          "锂离子电池材料",
          "日化材料及特种化学品"
        ],
        "business_scope": "基础化学原料制造(不含危险化学品等许可类化学品的制造)；合成材料制造(不含危险化学品)；专用化学产品制造(不含危险化学品)；电池制造；日用化学产品制造；电池零配件生产；生态环境材料制造；橡胶制品制造；专用设备制造(不含许可类专业设备制造)；化妆品批发；化妆品零售；水资源管理；新材料技术推广服务；工程和技术研究和试验发展；企业总部管理；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；信息技术咨询服务；非食用植物油加工；染料制造；石墨及碳素制品制造；污水处理及其再生利用；技术进出口；货物进出口；普通货物仓储服务(不含危险化学品等需许可审批的项目)；化妆品生产；进出口代理；道路货物运输(不含危险货物)",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 16.47,
        "net_profit_yoy_pct": 10.06,
        "revenue_yoy_pct": "",
        "roe_pct": 0.09,
        "gross_margin_pct": 0.39,
        "net_margin_pct": 0.25,
        "debt_to_assets_pct": 0.36,
        "cfo_to_np": -0.01,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 16.47,
        "net_profit_yoy_pct": 10.06,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 92,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "有色金属与新材料",
          "新能源材料",
          "锂离子电池材料",
          "日化材料及特种化学品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002812",
      "name": "恩捷股份",
      "bucket": "有色金属与新材料",
      "subcategory": "新能源材料",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "隔膜材料样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "advanced_materials",
      "rule_child_id": "advanced_new_energy_material",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [
        "新能源材料"
      ],
      "warnings": [
        "root_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "锂离子电池隔膜产品的研发以及无菌包装业务。",
        "product_types": [
          "锂电池隔离膜",
          "BOPP薄膜",
          "无菌包装"
        ],
        "product_names": [
          "锂电池隔离膜",
          "BOPP薄膜",
          "无菌包装"
        ],
        "business_scope": "包装装潢及其他印刷品印刷；商品商标印制（含烟草、药品商标），商标设计；包装盒生产、加工、销售；彩色印刷；纸制品（不含造纸）、塑料制品及其他配套产品的生产、加工、销售；生产、加工、销售印刷用原料、辅料；生产、加工、销售塑料薄膜、改性塑料；生产、加工、销售镭射转移纸、金银卡纸、液体包装纸、电化铝、高档包装纸；生产、加工、销售防伪标识、防伪材料；包装机械、包装机械零配件的设计、制造、加工、销售；生产、加工、销售新能源材料以及相应新技术、新产品开发；货物进出口（国家限制和禁止的项目除外）。（以上项目不涉及外商投资准入特别管理措施）（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.95,
        "net_profit_yoy_pct": 9.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.28,
        "net_margin_pct": 0.08,
        "debt_to_assets_pct": 0.44,
        "cfo_to_np": 0.7,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 2.95,
        "net_profit_yoy_pct": 9.02,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 93,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "有色金属与新材料",
          "新能源材料",
          "锂电池隔离膜",
          "BOPP薄膜",
          "无菌包装"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "603659",
      "name": "璞泰来",
      "bucket": "有色金属与新材料",
      "subcategory": "新能源材料",
      "priority": "P2",
      "source": "第三批扩容候选池",
      "reason": "负极与隔膜设备样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "advanced_materials",
      "rule_child_id": "advanced_new_energy_material",
      "evidence_level": "medium",
      "root_alias_hits": [
        "新材料"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "mapping_note": "seed33_target_node_override_applied",
      "business_evidence": {
        "business_summary": "提供新能源电池关键材料及自动化装备与服务的综合解决方案。",
        "product_types": [
          "锂电池材料及设备"
        ],
        "product_names": [
          "新能源电池材料与服务",
          "新能源自动化装备与服务",
          "产业投资贸易管理及其他"
        ],
        "business_scope": "一般项目：电池零配件销售；石墨及碳素制品销售；电子专用材料销售；新型膜材料销售；新材料技术研发；机械电气设备销售；电气设备销售；软件销售；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；合成材料销售；货物进出口。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 14:11:01",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 7.72,
        "net_profit_yoy_pct": 0.44,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.3,
        "net_margin_pct": 0.18,
        "debt_to_assets_pct": 0.55,
        "cfo_to_np": 1.23,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 7.72,
        "net_profit_yoy_pct": 0.44,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "有色金属与新材料",
          "新能源材料",
          "新能源电池材料与服务",
          "新能源自动化装备与服务",
          "产业投资贸易管理及其他"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "后续种子池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    }
  ]
};
