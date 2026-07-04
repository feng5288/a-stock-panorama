const EXISTING_86_EVIDENCE_CARDS_V1 = {
  "generated_at": "2026-06-27 12:59:58",
  "source": "E:\\CODEX  zhuanyi\\网站规划工作区\\classification_quality\\existing_86_evidence_card_queue_v1.csv",
  "rules_version": "2026-06-26.alpha2",
  "sample_count": 86,
  "purpose": "原样本86家轻量证据卡：统一原89家分类样本与P0/NEXT44的主营、产品、财务和评分口径。",
  "business_data_note": "主营/产品字段来自 AkShare stock_zyjs_ths 对应的同花顺公开资料口径；后续可替换为年报/公告解析源。",
  "financial_data_note": "财务字段来自 BaoStock 免费季度财务接口；空值代表接口未取到，不解释为零。",
  "partner_data_note": "没有明确公开证据的客户/供应商/合作对象不写具体公司名。",
  "market_strength_note": "市场强度、市场角色、龙头/补涨关系字段已预留，暂不计算。",
  "data_errors": {},
  "rows": [
    {
      "code": "002851",
      "name": "麦格米特",
      "bucket": "AI算力",
      "subcategory": "AI服务器链",
      "priority": "P0",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "ai_compute",
      "rule_child_id": "ai_server",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "cross_root_overload；missing_evidence_card",
      "business_evidence": {
        "business_summary": "电能的变换、自动化控制和应用。",
        "product_types": [
          "电源产品",
          "新能源及轨道交通部件",
          "智能家电电控产品",
          "工业自动化",
          "智能装备",
          "精密连接"
        ],
        "product_names": [
          "网络电源产品",
          "医疗设备电源",
          "电力设备电源",
          "工业导轨电源",
          "光伏",
          "储能",
          "充电桩核心部件",
          "LED显示电源",
          "显示设备相关电源",
          "OA电源",
          "新能源汽车电力电子集成模块",
          "电机驱动器",
          "车载充电机",
          "DCDC模块",
          "车载压缩机",
          "轨道交通车辆空调电气部件",
          "热管理系统核心部件",
          "液压悬架系统及部件",
          "分布式电驱",
          "各类变频家电功率控制器",
          "空气源热泵控制器",
          "智能卫浴整机及部件",
          "伺服及变频驱动器",
          "可编程逻辑控制器",
          "液压伺服泵",
          "直线电机",
          "编码器",
          "数字化焊机",
          "工业微波设备",
          "智能采油设备",
          "异形电磁线",
          "同轴线",
          "超微细扁线",
          "FFC",
          "FPC"
        ],
        "business_scope": "研究、开发、设计、生产和销售（生产由分支机构经营）电力电子产品、电气产品、机电一体化设备、家用电器及其零部件，包括家用电器电源、工业与通信电源、节能灯及高频镇流器、便携式设备电源、医疗设备电源、电机及变频驱动器和可编程逻辑控制器、触摸屏、工业自动化软件、智能型电力电子模块，并为经营上述产品及业务提供必要的工程服务、技术咨询服务、售后维修服务、电池采购并配套销售服务；经营上述各项产品及系统的采购、零售（不设店铺）、批发、进出口。（法律、行政法规、国务院决定禁止的项目除外，限制的项目须取得许可后方可经营）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.28,
        "net_profit_yoy_pct": 0.07,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.22,
        "net_margin_pct": 0.05,
        "debt_to_assets_pct": 0.43,
        "cfo_to_np": 0.19,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 1.28,
        "net_profit_yoy_pct": 0.07,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 85,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "AI算力",
          "AI服务器链",
          "网络电源产品",
          "医疗设备电源",
          "电力设备电源",
          "工业导轨电源",
          "光伏",
          "储能"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600584",
      "name": "长电科技",
      "bucket": "半导体",
      "subcategory": "封装测试/先进封装",
      "priority": "P0",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "semiconductor",
      "rule_child_id": "advanced_packaging",
      "evidence_level": "medium",
      "root_alias_hits": [
        "半导体",
        "芯片",
        "封测"
      ],
      "child_alias_hits": [
        "先进封装",
        "封测",
        "封装",
        "测试"
      ],
      "warnings": [],
      "current_issues": "excessive_mounts；cross_root_overload；missing_evidence_card",
      "business_evidence": {
        "business_summary": "提供全方位、一站式芯片成品制造解决方案，包括微系统集成、设计仿真、晶圆中测、芯片及器件封装、成品测试、产品认证以及全球直运等服务。",
        "product_types": [
          "芯片封测"
        ],
        "product_names": [
          "先进封装",
          "传统封装"
        ],
        "business_scope": "研制、开发、生产、销售半导体、电子原件、专用电子电气装置，销售本企业自产机电产品及成套设备，自营和代理各类商品及技术的进出口业务，开展本企业进料加工和“三来一补”业务；道路普通货物运输。（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.79,
        "net_profit_yoy_pct": 0.43,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.15,
        "net_margin_pct": 0.03,
        "debt_to_assets_pct": 0.43,
        "cfo_to_np": 6.38,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 2.79,
        "net_profit_yoy_pct": 0.43,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "封装测试/先进封装",
          "先进封装",
          "传统封装"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002050",
      "name": "三花智控",
      "bucket": "机器人/自动化",
      "subcategory": "执行器",
      "priority": "P0",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "robotics",
      "rule_child_id": "robot_actuator_formal",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "cross_root_overload；missing_evidence_card",
      "business_evidence": {
        "business_summary": "制冷空调电器与汽车的零件部件组件的研发、生产与销售。",
        "product_types": [
          "制冷空调电器零部件",
          "汽车零部件"
        ],
        "product_names": [
          "阀",
          "换热器",
          "泵",
          "控制器",
          "传感器"
        ],
        "business_scope": "一般项目：普通阀门和旋塞制造（不含特种设备制造）；家用电器研发；制冷、空调设备制造；家用电器制造；通用零部件制造；泵及真空设备制造；电机制造；风机、风扇制造；货物进出口；技术进出口（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。许可项目：特种设备制造；检验检测服务（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 9.51,
        "net_profit_yoy_pct": 0.03,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.28,
        "net_margin_pct": 0.12,
        "debt_to_assets_pct": 0.33,
        "cfo_to_np": 1.16,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 9.51,
        "net_profit_yoy_pct": 0.03,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "机器人/自动化",
          "执行器",
          "阀",
          "换热器",
          "泵",
          "控制器",
          "传感器"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600309",
      "name": "万华化学",
      "bucket": "化工材料",
      "subcategory": "新材料化工",
      "priority": "P0",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "chemical_materials",
      "rule_child_id": "chemical_new_material",
      "evidence_level": "medium",
      "root_alias_hits": [
        "化工",
        "石化"
      ],
      "child_alias_hits": [
        "聚氨酯"
      ],
      "warnings": [],
      "current_issues": "cross_root_overload；missing_evidence_card",
      "business_evidence": {
        "business_summary": "聚氨酯、石化、精细化学品及新材料产品的研发、生产和销售。",
        "product_types": [
          "聚氨酯系列",
          "石化系列",
          "精细化学品及新材料系列"
        ],
        "product_names": [
          "聚氨酯系列",
          "石化系列",
          "精细化学品及新材料系列"
        ],
        "business_scope": "安全生产许可证范围内危险化学品的生产；食品添加剂的研发、生产和销售；许可证范围内铁路专用线经营；丙烷、正丁烷的带有存储设施的经营、仓储经营（以上经营项目有效期限以许可证为准）；聚氨酯及助剂、异氰酸酯及衍生产品的开发、技术服务及相关技术人员培训；批准范围内的自营进出口业务；化工产品（仅限化工园区内经营）（不含危险化学品）的研发、生产、销售及技术服务咨询。（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-21",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 43.62,
        "net_profit_yoy_pct": 0.21,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.15,
        "net_margin_pct": 0.08,
        "debt_to_assets_pct": 0.64,
        "cfo_to_np": 1.57,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-21",
        "net_profit_attr_yi": 43.62,
        "net_profit_yoy_pct": 0.21,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "化工材料",
          "新材料化工",
          "聚氨酯系列",
          "石化系列",
          "精细化学品及新材料系列"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002534",
      "name": "西子洁能",
      "bucket": "电力与公用事业",
      "subcategory": "绿电运营",
      "priority": "P0",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "renewable_power",
      "rule_child_id": "renewable_operator",
      "evidence_level": "medium",
      "root_alias_hits": [
        "发电"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "cross_root_overload；missing_evidence_card",
      "business_evidence": {
        "business_summary": "余热锅炉、清洁环保能源发电装备等产品的咨询、研发、生产、销售、安装及工程总承包业务，为客户提供节能环保设备和能源利用整体解决方案。",
        "product_types": [
          "余热锅炉",
          "清洁环保能源装备",
          "解决方案",
          "备件及服务"
        ],
        "product_names": [
          "燃机余热锅炉",
          "干熄焦余热锅炉",
          "烧结机余热锅炉",
          "水泥窑余热锅炉",
          "热水锅炉",
          "电站锅炉",
          "电站辅机",
          "垃圾焚烧锅炉",
          "生物质锅炉",
          "天然气锅炉（L型及D型）",
          "废水废气废物锅炉",
          "熔盐吸热器",
          "熔盐换热器",
          "熔盐储罐",
          "低氮燃烧",
          "SCR\\SNCR设备",
          "核电设备",
          "导热油换热器",
          "石化化工换热器",
          "海水淡化装置",
          "气化炉",
          "过热器",
          "省煤器",
          "技术服务",
          "项目改造工程",
          "维修维保"
        ],
        "business_scope": "一般项目：新能源原动设备制造；新能源原动设备销售；光伏设备及元器件制造；光伏设备及元器件销售；太阳能热发电产品销售；核电设备成套及工程技术研发；新兴能源技术研发；通用设备制造（不含特种设备制造）；环境保护专用设备制造；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；环境保护专用设备销售；金属结构制造；金属结构销售；货物进出口；特种设备销售；对外承包工程(除依法须经批准的项目外，凭营业执照依法自主开展经营活动)。许可项目：特种设备设计；特种设备制造；特种设备安装改造修理；民用核安全设备制造；民用核安全设备安装；民用核安全设备设计；建设工程设计(依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准)。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.72,
        "net_profit_yoy_pct": 0.12,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.23,
        "net_margin_pct": 0.07,
        "debt_to_assets_pct": 0.57,
        "cfo_to_np": 0.88,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 0.72,
        "net_profit_yoy_pct": 0.12,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 85,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "绿电运营",
          "燃机余热锅炉",
          "干熄焦余热锅炉",
          "烧结机余热锅炉",
          "水泥窑余热锅炉",
          "热水锅炉",
          "电站锅炉"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601689",
      "name": "拓普集团",
      "bucket": "新能源汽车",
      "subcategory": "汽车零部件",
      "priority": "P0",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "new_energy_vehicle",
      "rule_child_id": "auto_parts",
      "evidence_level": "medium",
      "root_alias_hits": [
        "汽车",
        "汽车电子",
        "汽车零部件",
        "智能座舱"
      ],
      "child_alias_hits": [
        "汽车零部件",
        "汽车电子",
        "热管理",
        "智能座舱"
      ],
      "warnings": [],
      "current_issues": "cross_root_overload；missing_evidence_card",
      "business_evidence": {
        "business_summary": "汽车零部件的研发、生产及销售。",
        "product_types": [
          "减震系统",
          "内饰功能件",
          "底盘系统",
          "汽车电子",
          "热管理系统",
          "电驱系统"
        ],
        "product_names": [
          "汽车NVH减震系统",
          "内外饰系统",
          "轻量化车身",
          "智能座舱部件",
          "热管理系统",
          "底盘系统",
          "空气悬架系统",
          "智能驾驶系统"
        ],
        "business_scope": "一般项目：汽车零部件研发；汽车零部件及配件制造；汽车零配件批发；合成纤维制造；合成纤维销售；产业用纺织制成品生产；产业用纺织制成品销售；模具制造；模具销售；专用设备制造（不含许可类专业设备制造）；机械设备销售（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。许可项目：货物进出口（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 5.53,
        "net_profit_yoy_pct": -0.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.19,
        "net_margin_pct": 0.08,
        "debt_to_assets_pct": 0.41,
        "cfo_to_np": 0.99,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 5.53,
        "net_profit_yoy_pct": -0.02,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 68,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "新能源汽车",
          "汽车零部件",
          "汽车NVH减震系统",
          "内外饰系统",
          "轻量化车身",
          "智能座舱部件",
          "热管理系统",
          "底盘系统"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "000100",
      "name": "TCL科技",
      "bucket": "消费电子",
      "subcategory": "面板 / 显示",
      "priority": "P0",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "consumer_electronics",
      "rule_child_id": "consumer_display",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [
        "显示"
      ],
      "warnings": [
        "root_alias_not_found_in_business_source"
      ],
      "current_issues": "cross_root_overload；missing_evidence_card",
      "business_evidence": {
        "business_summary": "半导体显示业务、新能源光伏和半导体材料业务。",
        "product_types": [
          "半导体显示器件",
          "新能源光伏及半导体材料",
          "电子产品分销"
        ],
        "product_names": [
          "半导体显示器件",
          "新能源光伏及半导体材料",
          "电子产品分销"
        ],
        "business_scope": "研究、开发、生产、销售：半导体、电子产品及通讯设备、新型光电、液晶显示器件，货物或技术进出口（国家禁止或涉及行政审批的货物和技术进出口除外），创业投资业务及创业投资咨询，为创业企业提供创业管理服务，参与发起创业投资机构与投资管理顾问机构，不动产租赁，提供信息系统服务，提供会务服务，提供电子计算机技术服务和电子产品技术开发服务，软件产品的开发及销售，专利转让，代理报关服务，提供顾问服务，支付结算。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 6.08,
        "net_profit_yoy_pct": 0.54,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.12,
        "net_margin_pct": 0.01,
        "debt_to_assets_pct": 0.65,
        "cfo_to_np": 18.74,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 6.08,
        "net_profit_yoy_pct": 0.54,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "消费电子",
          "面板 / 显示",
          "半导体显示器件",
          "新能源光伏及半导体材料",
          "电子产品分销"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002475",
      "name": "立讯精密",
      "bucket": "消费电子",
      "subcategory": "终端制造 / 精密件",
      "priority": "P0",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "consumer_electronics",
      "rule_child_id": "consumer_terminal_manufacturing",
      "evidence_level": "medium",
      "root_alias_hits": [
        "消费电子"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "cross_root_overload；missing_evidence_card",
      "business_evidence": {
        "business_summary": "消费电子、通信及数据中心、汽车、医疗等领域相关零组件、模组及系统集成业务。",
        "product_types": [
          "消费电子",
          "汽车电子",
          "通讯及数据中心"
        ],
        "product_names": [
          "消费电子",
          "汽车电子",
          "通讯及数据中心"
        ],
        "business_scope": "生产经营连接线、连接器、电脑周边设备、塑胶五金制品。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 39.68,
        "net_profit_yoy_pct": 0.2,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.12,
        "net_margin_pct": 0.05,
        "debt_to_assets_pct": 0.67,
        "cfo_to_np": -1.78,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 39.68,
        "net_profit_yoy_pct": 0.2,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "消费电子",
          "终端制造 / 精密件",
          "汽车电子",
          "通讯及数据中心"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002460",
      "name": "赣锋锂业",
      "bucket": "资源周期",
      "subcategory": "金属矿产",
      "priority": "P0",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "resources",
      "rule_child_id": "resources_metal_mining",
      "evidence_level": "medium",
      "root_alias_hits": [
        "资源",
        "有色",
        "金属"
      ],
      "child_alias_hits": [
        "锂资源",
        "有色"
      ],
      "warnings": [],
      "current_issues": "cross_root_overload；missing_evidence_card",
      "business_evidence": {
        "business_summary": "锂资源开发、锂盐深加工及金属锂冶炼、锂电池制造及退役锂电池综合回收利用。",
        "product_types": [
          "锂系列产品",
          "锂电池系列产品"
        ],
        "product_names": [
          "锂系列产品",
          "锂电池系列产品"
        ],
        "business_scope": "许可项目：危险化学品经营，危险化学品生产。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证为准）一般项目：货物进出口，基础化学原料制造（不含危险化学品等许可类化学品的制造），化学产品销售（不含许可类化工产品），常用有色金属冶炼，有色金属合金制造，有色金属合金销售，电池制造，资源再生利用技术研发，新材料技术推广服务，工程和技术研究和试验发展，以自有资金从事投资活动（除许可业务外，可自主依法经营法律法规非禁止或限制的项目）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 19.22,
        "net_profit_yoy_pct": 6.16,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.3,
        "net_margin_pct": 0.21,
        "debt_to_assets_pct": 0.55,
        "cfo_to_np": 0.41,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 19.22,
        "net_profit_yoy_pct": 6.16,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "资源周期",
          "金属矿产",
          "锂系列产品",
          "锂电池系列产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002466",
      "name": "天齐锂业",
      "bucket": "资源周期",
      "subcategory": "金属矿产",
      "priority": "P0",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "resources",
      "rule_child_id": "resources_metal_mining",
      "evidence_level": "medium",
      "root_alias_hits": [
        "资源",
        "煤炭",
        "金属"
      ],
      "child_alias_hits": [
        "矿产"
      ],
      "warnings": [],
      "current_issues": "cross_root_overload；missing_evidence_card",
      "business_evidence": {
        "business_summary": "硬岩型锂矿资源的开发、锂精矿生产销售以及锂化工产品的生产销售，为清洁能源的转型发展提供可持续、高质量的锂解决方案。",
        "product_types": [
          "锂精矿产品",
          "锂化工产品"
        ],
        "product_names": [
          "化学级锂精矿",
          "技术级锂精矿",
          "碳酸锂",
          "氢氧化锂",
          "金属锂",
          "氯化锂"
        ],
        "business_scope": "主营：制造、销售：电池级碳酸锂、工业级碳酸锂及其锂系列产品、其他化工产品(国家有专项规定除外)；兼营：经营本企业生产、科研所需的原辅材料，机械设备，仪器仪表零配件及相关技术的进出口业务；经营本企业自产的电池级碳酸锂、工业级碳酸锂及其锂系列产品的出口业务；矿石(不含煤炭、稀贵金属)及锂系列产品的加工业务。(依法须经批准的项目，经相关部门批准后方可开展经营活动)。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 28.41,
        "net_profit_yoy_pct": 16.99,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.63,
        "net_margin_pct": 0.55,
        "debt_to_assets_pct": 0.28,
        "cfo_to_np": 0.09,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 28.41,
        "net_profit_yoy_pct": 16.99,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "资源周期",
          "金属矿产",
          "化学级锂精矿",
          "技术级锂精矿",
          "碳酸锂",
          "氢氧化锂",
          "金属锂",
          "氯化锂"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601618",
      "name": "中国中冶",
      "bucket": "高端装备与工业",
      "subcategory": "工程机械 / 矿山装备",
      "priority": "P0",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "industrial_equipment",
      "rule_child_id": "industrial_machinery",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "cross_root_overload；missing_evidence_card",
      "business_evidence": {
        "business_summary": "工程承包、资源开发、装备制造及房地产开发业务。",
        "product_types": [
          "工程承包业务",
          "特色业务"
        ],
        "product_names": [
          "工程承包业务",
          "特色业务"
        ],
        "business_scope": "国内外各类工程咨询、勘察、设计、总承包；工程技术咨询服务；工程设备的租赁；与工程建筑相关的新材料、新工艺、新产品的技术开发、技术服务、技术交流和技术转让；冶金工业所需设备的开发、生产、销售；建筑及机电设备安装工程规划、勘察、设计、监理和服务和相关研究；金属矿产品的投资、加工利用、销售；房地产开发、经营；招标代理；进出口业务；机电产品、小轿车、建筑材料、仪器仪表、五金交电的销售（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 19.74,
        "net_profit_yoy_pct": 0.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.09,
        "net_margin_pct": 0.02,
        "debt_to_assets_pct": 0.77,
        "cfo_to_np": -12.7,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 19.74,
        "net_profit_yoy_pct": 0.02,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 84,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "高端装备与工业",
          "工程机械 / 矿山装备",
          "工程承包业务",
          "特色业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688122",
      "name": "西部超导",
      "bucket": "国防军工与航空航天",
      "subcategory": "航空装备 / 大飞机",
      "priority": "P0",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "defense_aerospace",
      "rule_child_id": "defense_aircraft",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "cross_root_overload；missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "高端钛合金材料、超导产品和高性能高温合金材料的研发、生产和销售。",
        "product_types": [
          "高端钛合金材料",
          "超导产品",
          "高性能高温合金材料"
        ],
        "product_names": [
          "高端钛合金材料",
          "超导产品",
          "高性能高温合金材料"
        ],
        "business_scope": "低温超导材料、高温超导材料、钛及钛合金材料、高温合金材料、铪材料、机电设备（小轿车除外）及部件的生产、开发、销售和技术咨询；自有房屋租赁；货物及技术的进出口业务（国家禁止或限制进出口的货物、技术除外）。（上述经营范围中涉及许可项目的，凭许可证明文件、证件在有效期内经营，未经许可不得经营）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.69,
        "net_profit_yoy_pct": -0.74,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.26,
        "net_margin_pct": 0.06,
        "debt_to_assets_pct": 0.48,
        "cfo_to_np": -4.48,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 0.69,
        "net_profit_yoy_pct": -0.74,
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
          "高端钛合金材料",
          "超导产品",
          "高性能高温合金材料"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600456",
      "name": "宝钛股份",
      "bucket": "有色金属与新材料",
      "subcategory": "新能源材料",
      "priority": "P0",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "advanced_materials",
      "rule_child_id": "advanced_new_energy_material",
      "evidence_level": "medium",
      "root_alias_hits": [
        "有色金属",
        "新材料"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "cross_root_overload；missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "钛及钛合金的生产、加工和销售。",
        "product_types": [
          "钛产品",
          "其他产品"
        ],
        "product_names": [
          "海绵钛",
          "钛锭",
          "板材",
          "管材",
          "棒材",
          "带",
          "箔材",
          "线",
          "丝材",
          "环材",
          "饼材",
          "精密铸件"
        ],
        "business_scope": "一般项目：钢压延加工；有色金属合金制造；有色金属压延加工；金属丝绳及其制品制造；金属表面处理及热处理加工；有色金属铸造；锻件及粉末冶金制品制造；烘炉、熔炉及电炉制造；通用零部件制造；机械零件、零部件加工；通用设备制造（不含特种设备制造）；冶金专用设备制造；模具制造；专用设备制造（不含许可类专业设备制造）；机械电气设备制造；工业自动控制系统装置制造；液气密元件及系统制造；通用设备修理；专用设备修理；电气设备修理；对外承包工程；新型金属功能材料销售；高性能有色金属及合金材料销售；金属基复合材料和陶瓷基复合材料销售；模具销售；金属丝绳及其制品销售；烘炉、熔炉及电炉销售；工业自动控制系统装置销售；锻件及粉末冶金制品销售；电子元器件与机电组件设备销售；机械电气设备销售；建筑用钢筋产品销售；有色金属合金销售；冶金专用设备销售；货物进出口；技术进出口；普通货物仓储服务（不含危险化学品等需许可审批的项目）；土地使用权租赁；非居住房地产租赁；机械设备租赁；运输设备租赁服务；办公设备租赁服务；仓储设备租赁服务；认证咨询；工程和技术研究和试验发展；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；新材料技术推广服务；3D打印基础材料销售（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。许可项目：建筑用钢筋产品生产；建设工程施工；道路货物运输（不含危险货物）；检验检测服务（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.76,
        "net_profit_yoy_pct": -0.27,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.2,
        "net_margin_pct": 0.05,
        "debt_to_assets_pct": 0.49,
        "cfo_to_np": -1.24,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 0.76,
        "net_profit_yoy_pct": -0.27,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 57,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "有色金属与新材料",
          "新能源材料",
          "海绵钛",
          "钛锭",
          "板材",
          "管材",
          "棒材",
          "带"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002138",
      "name": "顺络电子",
      "bucket": "半导体",
      "subcategory": "磁性器件 / 被动元器件",
      "priority": "P0",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "semiconductor",
      "rule_child_id": "passive_components",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [
        "磁性器件",
        "电子元器件",
        "被动元器件"
      ],
      "warnings": [
        "source_override_applied",
        "root_alias_not_found_in_business_source"
      ],
      "current_issues": "cross_root_overload；missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "研发、设计、生产、销售新型精密电子元器件；提供技术解决方案和技术转让、咨询服务，销售自产产品。",
        "product_types": [
          "片式电子元件",
          "其他"
        ],
        "product_names": [
          "磁性器件",
          "微波器件",
          "传感及敏感器件",
          "精密陶瓷"
        ],
        "business_scope": "研发、设计、生产、销售新型电子元器件；提供技术方案设计和技术转让、咨询服务；销售自产产品。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.98,
        "net_profit_yoy_pct": -0.24,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.33,
        "net_margin_pct": 0.12,
        "debt_to_assets_pct": 0.48,
        "cfo_to_np": 0.47,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 1.98,
        "net_profit_yoy_pct": -0.24,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 88,
        "fundamental_score": 63,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "磁性器件 / 被动元器件",
          "磁性器件",
          "微波器件",
          "传感及敏感器件",
          "精密陶瓷"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300124",
      "name": "汇川技术",
      "bucket": "机器人/自动化",
      "subcategory": "工业自动化 / 工业母机",
      "priority": "P0",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
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
      "current_issues": "cross_root_overload；missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "通用自动化、新能源汽车、智慧电梯、轨道交通。",
        "product_types": [
          "通用自动化",
          "智慧电梯",
          "新能源汽车",
          "轨道交通",
          "其他"
        ],
        "product_names": [
          "PLC",
          "HMI",
          "CNC",
          "运动控制卡",
          "低压变频器",
          "中高压变频器",
          "通用伺服系统",
          "专用伺服系统",
          "工业机器人",
          "电机",
          "丝杠",
          "直线导轨",
          "气动产品",
          "传感器",
          "工业视觉",
          "电梯一体化/变频器",
          "人机界面",
          "门系统",
          "线束线缆",
          "井道电气",
          "电机控制器",
          "高性能电机",
          "电驱总成",
          "DC/DC",
          "OBC",
          "电源总成",
          "牵引变流器",
          "辅助变流器",
          "高压箱",
          "牵引电机",
          "数字化平台",
          "工业互联网",
          "储能"
        ],
        "business_scope": "工业自动化产品、新能源产品、新能源汽车、自动化装备、机械电子设备、物联网产品、机电产品和各种软件的研发、设计、系统集成、销售和技术服务（以上不含限制项目）；房屋租赁；投资兴办实业（具体项目另行申报）；经营进出口业务（法律、行政法规、国务院决定禁止的项目除外，限制的项目须取得许可后方可经营）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 10.23,
        "net_profit_yoy_pct": -0.23,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.29,
        "net_margin_pct": 0.1,
        "debt_to_assets_pct": 0.46,
        "cfo_to_np": 0.09,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 10.23,
        "net_profit_yoy_pct": -0.23,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 68,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "机器人/自动化",
          "工业自动化 / 工业母机",
          "PLC",
          "HMI",
          "CNC",
          "运动控制卡",
          "低压变频器",
          "中高压变频器"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002463",
      "name": "沪电股份",
      "bucket": "AI算力",
      "subcategory": "AI服务器链",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "ai_compute",
      "rule_child_id": "ai_server",
      "evidence_level": "medium",
      "root_alias_hits": [
        "印制电路板",
        "电路板"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "印制电路板的生产、销售及相关售后服务。",
        "product_types": [
          "印制电路板",
          "房屋销售",
          "物业服务",
          "销售可回收边角料",
          "房屋出租"
        ],
        "product_names": [
          "印制电路板",
          "房屋销售",
          "物业服务",
          "销售可回收边角料",
          "房屋出租"
        ],
        "business_scope": "生产单、双面及多层电路板、高密度互连积层板（HDI）、电路板组装产品、电子设备使用的连接线和连接器等产品并销售自产产品，从事与本企业生产同类和相关产品的批发、进出口业务，公司产品售后维修及技术服务，普通货物道路运输，工业机器人制造，工业机器人销售；住房租赁。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 12.41,
        "net_profit_yoy_pct": 0.63,
        "revenue_yoy_pct": "",
        "roe_pct": 0.08,
        "gross_margin_pct": 0.36,
        "net_margin_pct": 0.2,
        "debt_to_assets_pct": 0.49,
        "cfo_to_np": 0.41,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 12.41,
        "net_profit_yoy_pct": 0.63,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "AI算力",
          "AI服务器链",
          "印制电路板",
          "房屋销售",
          "物业服务",
          "销售可回收边角料",
          "房屋出租"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300308",
      "name": "中际旭创",
      "bucket": "AI算力",
      "subcategory": "光模块/CPO",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "ai_compute",
      "rule_child_id": "optical_module",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "高端光通信收发模块的研发、生产及销售。",
        "product_types": [
          "光通信收发模块",
          "光组件",
          "汽车光电子"
        ],
        "product_names": [
          "光通信收发模块",
          "光组件",
          "汽车光电子"
        ],
        "business_scope": "一般项目：通信设备制造；光通信设备制造；光通信设备销售；电子元器件制造；电子元器件零售；光电子器件制造；光电子器件销售；集成电路芯片及产品制造；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；货物进出口；以自有资金从事投资活动；企业管理；非居住房地产租赁。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-17",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 63.17,
        "net_profit_yoy_pct": 2.62,
        "revenue_yoy_pct": "",
        "roe_pct": 0.18,
        "gross_margin_pct": 0.46,
        "net_margin_pct": 0.32,
        "debt_to_assets_pct": 0.33,
        "cfo_to_np": 0.53,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-17",
        "net_profit_attr_yi": 63.17,
        "net_profit_yoy_pct": 2.62,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "AI算力",
          "光模块/CPO",
          "光通信收发模块",
          "光组件",
          "汽车光电子"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300502",
      "name": "新易盛",
      "bucket": "AI算力",
      "subcategory": "光模块/CPO",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "ai_compute",
      "rule_child_id": "optical_module",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "全系列光通信应用的光模块的研发、生产和销售。",
        "product_types": [
          "光互联产品"
        ],
        "product_names": [
          "光互联产品"
        ],
        "business_scope": "一般项目：光通信设备制造；光通信设备销售；电子元器件制造；电子元器件批发；电子元器件零售；通讯设备销售；机械设备研发；电子产品销售；专用设备制造（不含许可类专业设备制造）；技术进出口；货物进出口；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）（涉及国家规定实施准入特别管理措施的除外）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 27.74,
        "net_profit_yoy_pct": 0.77,
        "revenue_yoy_pct": "",
        "roe_pct": 0.15,
        "gross_margin_pct": 0.49,
        "net_margin_pct": 0.33,
        "debt_to_assets_pct": 0.31,
        "cfo_to_np": 0.25,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "net_profit_attr_yi": 27.74,
        "net_profit_yoy_pct": 0.77,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "AI算力",
          "光模块/CPO",
          "光互联产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601138",
      "name": "工业富联",
      "bucket": "AI算力",
      "subcategory": "AI服务器链",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "ai_compute",
      "rule_child_id": "ai_server",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "设计、研发、制造和销售通信及移动网络设备、云计算、工业互联网及机器人等电子设备产品。",
        "product_types": [
          "3C电子产品"
        ],
        "product_names": [
          "3C电子产品"
        ],
        "business_scope": "工业互联网技术研发；通讯系统研发；企业管理服务；从事电子产品及其零配件的进出口及相关配套业务(不涉及国营贸易管理商品，涉及配额、许可证管理及其它专项规定管理的商品，按国家有关规定办理申请)。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 105.97,
        "net_profit_yoy_pct": 1.03,
        "revenue_yoy_pct": "",
        "roe_pct": 0.06,
        "gross_margin_pct": 0.07,
        "net_margin_pct": 0.04,
        "debt_to_assets_pct": 0.61,
        "cfo_to_np": 2.36,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 105.97,
        "net_profit_yoy_pct": 1.03,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "AI算力",
          "AI服务器链",
          "3C电子产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688041",
      "name": "海光信息",
      "bucket": "AI算力",
      "subcategory": "AI芯片/国产算力芯片",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "ai_compute",
      "rule_child_id": "ai_chip",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "研发、设计和销售应用于服务器、工作站等计算、存储设备中的高端处理器。",
        "product_types": [
          "海光通用处理器（CPU）",
          "海光协处理器（DCU）"
        ],
        "product_names": [
          "海光通用处理器（CPU）",
          "海光协处理器（DCU）"
        ],
        "business_scope": "集成电路、电子信息、软件技术开发、咨询、服务、转让;批发和零售业;计算机系统集成;物业管理;货物及技术进出口业务。(依法须经批准的项目,经相关部门批准后方可开展经营活动)",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-08",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 8.77,
        "net_profit_yoy_pct": 0.36,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.56,
        "net_margin_pct": 0.22,
        "debt_to_assets_pct": 0.0,
        "cfo_to_np": 0.08,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-08",
        "net_profit_attr_yi": 8.77,
        "net_profit_yoy_pct": 0.36,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "AI算力",
          "AI芯片/国产算力芯片",
          "海光通用处理器（CPU）",
          "海光协处理器（DCU）"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688256",
      "name": "寒武纪",
      "bucket": "AI算力",
      "subcategory": "AI芯片/国产算力芯片",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "ai_compute",
      "rule_child_id": "ai_chip",
      "evidence_level": "medium",
      "root_alias_hits": [
        "人工智能"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "应用于各类云服务器、边缘计算设备、终端设备中人工智能核心芯片的研发、设计和销售。",
        "product_types": [
          "云端智能芯片及板卡",
          "智能整机",
          "边缘计算",
          "IP授权和基础系统软件平台",
          "智能计算集群"
        ],
        "product_names": [
          "云端智能芯片及板卡",
          "智能整机",
          "边缘计算",
          "IP授权和基础系统软件平台",
          "智能计算集群"
        ],
        "business_scope": "技术开发、技术推广、技术转让、技术咨询、技术服务；技术进出口、货物进出口；计算机系统服务；软件开发；销售计算机软件及辅助设备。（市场主体依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事国家和本市产业政策禁止和限制类项目的经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 10.13,
        "net_profit_yoy_pct": 1.85,
        "revenue_yoy_pct": "",
        "roe_pct": 0.08,
        "gross_margin_pct": 0.54,
        "net_margin_pct": 0.35,
        "debt_to_assets_pct": 0.16,
        "cfo_to_np": 0.82,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 10.13,
        "net_profit_yoy_pct": 1.85,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "AI算力",
          "AI芯片/国产算力芯片",
          "云端智能芯片及板卡",
          "智能整机",
          "边缘计算",
          "IP授权和基础系统软件平台",
          "智能计算集群"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "605566",
      "name": "福莱蒽特",
      "bucket": "机器人/自动化",
      "subcategory": "传感器 / 电子皮肤",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "robotics",
      "rule_child_id": "robot_sensor_formal",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "分散染料及其滤饼的研发、生产及销售。",
        "product_types": [
          "分散染料",
          "滤饼"
        ],
        "product_names": [
          "高水洗",
          "高日晒牢度染料",
          "环保型染料",
          "常规型染料"
        ],
        "business_scope": "生产：染料及配套中间体、助剂、硫酸钠；化工产品技术开发、技术转让、技术咨询服务及销售（化学危险品凭许可证经营）；上述产品的原辅材料、机械设备、仪器仪表及零部件、包装制品的销售；本企业自产的各类染料及配套中间体、助剂、硫酸钠的出口及本企业生产、科研所需的原辅材料、机械设备、仪器仪表、零部件的进口；企业管理咨询；文化创意策划（国家限定企业经营或禁止进出口的商品和技术除外）（以公司登记机关核准的经营范围为准）（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.25,
        "net_profit_yoy_pct": 0.83,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.19,
        "net_margin_pct": 0.09,
        "debt_to_assets_pct": 0.19,
        "cfo_to_np": -0.88,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 0.25,
        "net_profit_yoy_pct": 0.83,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "机器人/自动化",
          "传感器 / 电子皮肤",
          "高水洗",
          "高日晒牢度染料",
          "环保型染料",
          "常规型染料"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "000301",
      "name": "东方盛虹",
      "bucket": "化工材料",
      "subcategory": "石化 / 煤化工",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "chemical_materials",
      "rule_child_id": "chemical_petro_coal",
      "evidence_level": "medium",
      "root_alias_hits": [
        "化工",
        "石化"
      ],
      "child_alias_hits": [
        "石化"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "石化及化工新材料、涤纶长丝的研发、生产和销售等。",
        "product_types": [
          "炼油产品",
          "其他石化及化工新材料",
          "涤纶丝",
          "其他化纤产品"
        ],
        "product_names": [
          "成品油",
          "乙烯",
          "丙烯",
          "丁二烯",
          "苯",
          "对二甲苯(PX)",
          "乙二醇",
          "PTA",
          "EVA",
          "POE",
          "超高分子量聚乙烯（UHMWPE）",
          "丙烯腈",
          "甲基丙烯酸甲酯",
          "环氧乙烷",
          "醋酸乙烯",
          "苯酚",
          "丙酮",
          "苯乙烯",
          "环氧丙烷",
          "聚醚多元醇",
          "硫磺",
          "POY",
          "FDY",
          "DTY"
        ],
        "business_scope": "一般项目：新材料技术研发；新材料技术推广服务；新兴能源技术研发；生物基材料技术研发；生物化工产品技术研发；资源再生利用技术研发；电子专用材料研发；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；工程和技术研究和试验发展；生物基材料制造；电子专用材料制造；高性能纤维及复合材料制造；合成纤维制造；热力生产和供应；生物基材料销售；石油制品销售（不含危险化学品）；化工产品销售（不含许可类化工产品）；成品油批发（不含危险化学品）；专用化学产品销售（不含危险化学品）；新型膜材料销售；合成材料销售；生态环境材料销售；电子专用材料销售；高性能纤维及复合材料销售；合成纤维销售；煤炭及制品销售；以自有资金从事投资活动；企业管理咨询；非居住房地产租赁；物业管理（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）限分支机构经营：发电业务、输电业务、供（配）电业务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 14.48,
        "net_profit_yoy_pct": 3.2,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.19,
        "net_margin_pct": 0.05,
        "debt_to_assets_pct": 0.81,
        "cfo_to_np": 2.44,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 14.48,
        "net_profit_yoy_pct": 3.2,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "化工材料",
          "石化 / 煤化工",
          "成品油",
          "乙烯",
          "丙烯",
          "丁二烯",
          "苯",
          "对二甲苯(PX)"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002493",
      "name": "荣盛石化",
      "bucket": "化工材料",
      "subcategory": "石化 / 煤化工",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "chemical_materials",
      "rule_child_id": "chemical_petro_coal",
      "evidence_level": "medium",
      "root_alias_hits": [
        "化工"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "各类油品、化工品、聚酯产品的研发、生产和销售。",
        "product_types": [
          "炼油产品",
          "化工产品",
          "PTA",
          "聚酯化纤薄膜",
          "贸易"
        ],
        "product_names": [
          "炼油产品",
          "化工产品",
          "PTA",
          "聚酯化纤薄膜",
          "贸易"
        ],
        "business_scope": "涤纶丝，化纤布的制造、加工，纸制品加工，轻纺原料及产品，五金，化工产品及原料（除化学危险品及易制毒化学品）的销售，实业投资，普通货物的仓储服务（不含危险品），道路货物运输（凭有效许可证经营），经营进出口业务。（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 50.12,
        "net_profit_yoy_pct": 3.78,
        "revenue_yoy_pct": "",
        "roe_pct": 0.06,
        "gross_margin_pct": 0.2,
        "net_margin_pct": 0.08,
        "debt_to_assets_pct": 0.75,
        "cfo_to_np": 1.7,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 50.12,
        "net_profit_yoy_pct": 3.78,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "化工材料",
          "石化 / 煤化工",
          "炼油产品",
          "化工产品",
          "PTA",
          "聚酯化纤薄膜",
          "贸易"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002648",
      "name": "卫星化学",
      "bucket": "化工材料",
      "subcategory": "新材料化工",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "chemical_materials",
      "rule_child_id": "chemical_new_material",
      "evidence_level": "medium",
      "root_alias_hits": [
        "化工"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "（聚）丙烯、丙烯酸及酯、乙二醇、环氧乙烷、环氧丙烷和聚乙烯等产品的研发、生产和销售。",
        "product_types": [
          "功能化学品",
          "高分子新材料",
          "新能源材料"
        ],
        "product_names": [
          "HDPE",
          "AA/AE",
          "EO",
          "EG",
          "SAP"
        ],
        "business_scope": "丙烯酸、丙烯酸甲酯、丙烯酸乙酯、丙烯酸正丁酯、丙烯酸异辛酯、丙烯酸及酯类重组分、织物涂层胶(以上产品凭有效的《嘉兴市危险化学品生产、储存批准证书》生产)、高吸水性树脂、喷水(汽)织机防水浆料、小雪胶片的生产，不带储存经营（票据贸易）危险化学品（范围详见《危险化学品经营许可证》），聚丙烯、对羟基苯甲醚、2-辛醇、化工机械设备、零配件、辅材料的批发及其进出口业务、分包装业务。以上商品不涉及国营贸易、进出口配额许可证、出口配额招标、出口许可证等专项管理的商品。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-14",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 21.17,
        "net_profit_yoy_pct": 0.35,
        "revenue_yoy_pct": "",
        "roe_pct": 0.06,
        "gross_margin_pct": 0.24,
        "net_margin_pct": 0.17,
        "debt_to_assets_pct": 0.52,
        "cfo_to_np": 1.04,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-14",
        "net_profit_attr_yi": 21.17,
        "net_profit_yoy_pct": 0.35,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "化工材料",
          "新材料化工",
          "HDPE",
          "AA/AE",
          "EO",
          "EG",
          "SAP"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600426",
      "name": "华鲁恒升",
      "bucket": "化工材料",
      "subcategory": "新材料化工",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "chemical_materials",
      "rule_child_id": "chemical_new_material",
      "evidence_level": "medium",
      "root_alias_hits": [
        "化工",
        "化肥"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "新能源新材料相关产品、化学肥料、有机胺、醋酸及衍生品等。",
        "product_types": [
          "新能源新材料相关产品",
          "有机胺",
          "化学肥料",
          "醋酸及衍生品",
          "其他产品"
        ],
        "product_names": [
          "新能源新材料相关产品",
          "有机胺",
          "化学肥料",
          "醋酸及衍生品",
          "其他产品"
        ],
        "business_scope": "一般项目：基础化学原料制造（不含危险化学品等许可类化学品的制造）；化工产品生产（不含许可类化工产品）；化工产品销售（不含许可类化工产品）；专用化学产品制造（不含危险化学品）；专用化学产品销售（不含危险化学品）；化肥销售；合成材料制造（不含危险化学品）；合成材料销售；再生资源销售；砖瓦制造；砖瓦销售；货物进出口；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；煤炭及制品销售。许可项目：危险化学品生产；危险化学品经营；肥料生产；发电业务、输电业务、供（配）电业务；供电业务；热力生产和供应。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 11.94,
        "net_profit_yoy_pct": 0.58,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.22,
        "net_margin_pct": 0.14,
        "debt_to_assets_pct": 0.29,
        "cfo_to_np": 0.75,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 11.94,
        "net_profit_yoy_pct": 0.58,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "化工材料",
          "新材料化工",
          "新能源新材料相关产品",
          "有机胺",
          "化学肥料",
          "醋酸及衍生品",
          "其他产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "000538",
      "name": "云南白药",
      "bucket": "医药医疗",
      "subcategory": "中药/品牌中药",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "tcm",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医疗"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "药品、健康品、中药资源的研发、生产及销售。",
        "product_types": [
          "工业产品（自制）",
          "批发零售"
        ],
        "product_names": [
          "工业产品（自制）",
          "批发零售"
        ],
        "business_scope": "化学原料药、化学药制剂、中成药、中药材、生物制品、医疗器械、保健食品、食品、饮料、特种劳保防护用品、非家用纺织成品、日化用品、化妆品、户外用品的研制、生产及销售；橡胶膏剂、贴膏剂、消毒产品、电子和数码产品的销售；信息技术、科技及经济技术咨询服务；货物进出口；物业经营管理（凭资质证开展经营活动）、药品的批发零售、物流配送等（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 20.31,
        "net_profit_yoy_pct": 0.05,
        "revenue_yoy_pct": "",
        "roe_pct": 0.05,
        "gross_margin_pct": 0.31,
        "net_margin_pct": 0.18,
        "debt_to_assets_pct": 0.25,
        "cfo_to_np": 0.41,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 20.31,
        "net_profit_yoy_pct": 0.05,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "中药/品牌中药",
          "工业产品（自制）",
          "批发零售"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "000963",
      "name": "华东医药",
      "bucket": "医药医疗",
      "subcategory": "创新药/生物药",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "innovative_drug",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医疗"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "药品的研发、生产和销售。",
        "product_types": [
          "商业",
          "制造业",
          "医美业务"
        ],
        "product_names": [
          "商业",
          "制造业",
          "医美业务"
        ],
        "business_scope": "许可项目：药品生产；药品批发；药品零售；中药饮片代煎服务；第二类增值电信业务；药品互联网信息服务；医疗器械互联网信息服务；道路货物运输（不含危险货物）；道路危险货物运输；道路货物运输（网络货运）；第三类医疗器械经营；药品进出口；危险化学品经营；食品互联网销售；食品销售；第三类医疗器械租赁(依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准)。一般项目：保健食品（预包装）销售；货物进出口；食品互联网销售（仅销售预包装食品）；食品销售（仅销售预包装食品）；国内货物运输代理；互联网销售（除销售需要许可的商品）；消毒剂销售（不含危险化学品）；第二类医疗器械销售；第一类医疗器械销售；玻璃纤维及制品销售；玻璃纤维增强塑料制品销售；技术玻璃制品销售；药物检测仪器销售；医学研究和试验发展；仪器仪表修理；专用化学产品销售（不含危险化学品）；化妆品批发；化妆品零售；化工产品销售（不含许可类化工产品）；眼镜销售（不含隐形眼镜）；普通货物仓储服务（不含危险化学品等需许可审批的项目）；健康咨询服务（不含诊疗服务）；护理机构服务（不含医疗服务）；日用化学产品销售；日用化学产品制造；家用电器销售；农副产品销售；日用百货销售；工艺美术品及收藏品零售（象牙及其制品除外）；工艺美术品及收藏品批发（象牙及其制品除外）；针纺织品及原料销售；食用农产品批发；食用农产品零售；食品添加剂销售；汽车销售；通信设备销售；电子元器件零售；电子元器件批发；第二类非药品类易制毒化学品经营；第三类非药品类易制毒化学品经营；特殊医学用途配方食品销售；中草药收购；地产中草药(不含中药饮片）购销；第一类医疗器械租赁；第二类医疗器械租赁(除依法须经批准的项目外，凭营业执照依法自主开展经营活动)。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 9.97,
        "net_profit_yoy_pct": 0.1,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.34,
        "net_margin_pct": 0.09,
        "debt_to_assets_pct": 0.35,
        "cfo_to_np": -0.85,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "net_profit_attr_yi": 9.97,
        "net_profit_yoy_pct": 0.1,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 84,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "创新药/生物药",
          "商业",
          "制造业",
          "医美业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002603",
      "name": "以岭药业",
      "bucket": "医药医疗",
      "subcategory": "中药/品牌中药",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "tcm",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医药",
        "医疗"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "专利创新中药的研发、生产和销售。",
        "product_types": [
          "心脑血管类",
          "呼吸系统类",
          "其他专利产品",
          "其他类"
        ],
        "product_names": [
          "通心络胶囊",
          "参松养心胶囊",
          "芪苈强心胶囊",
          "连花清瘟胶囊/颗粒",
          "连花清咳片",
          "芪防鼻通片",
          "津力达颗粒",
          "通络明目胶囊",
          "益肾养心安神片",
          "解郁除烦胶囊",
          "枣椹安神口服液",
          "养正消积胶囊",
          "参灵蓝胶囊",
          "八子补肾胶囊",
          "夏荔芪胶囊",
          "乳结泰胶囊",
          "妇血安片"
        ],
        "business_scope": "硬胶囊剂、片剂、颗粒剂、合剂、小容量注射剂的生产；保健食品的生产、销售（许可生产品种以食品生产许可品种明细表核准的为准）；饮料（固体饮料类、其他饮料类）的生产、销售(许可生产食品品种以食品生产许可证副页核准的为准)；方便食品的生产、销售（许可生产食品品种以食品生产许可证副页核准的为准）；中药提取物的生产；自营和代理各类商品和技术的进出口，但国家限定公司经营和禁止进出口的商品和技术除外；自有房屋租赁；农产品收购（不含粮食）；糖果制品的生产（许可生产食品品种以食品生产许可证副页核准的为准）；企业管理咨询服务；健康管理咨询服务（诊疗、医疗、心理咨询服务除外）；（以下限分支机构经营）；中成药、医药保健品、传统医疗器械、西药、生物制品、卫生辅料的研究、开发；技术咨询、服务、转让。（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 4.09,
        "net_profit_yoy_pct": 0.25,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.6,
        "net_margin_pct": 0.17,
        "debt_to_assets_pct": 0.2,
        "cfo_to_np": 1.49,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 4.09,
        "net_profit_yoy_pct": 0.25,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "中药/品牌中药",
          "通心络胶囊",
          "参松养心胶囊",
          "芪苈强心胶囊",
          "连花清瘟胶囊/颗粒",
          "连花清咳片",
          "芪防鼻通片"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002821",
      "name": "凯莱英",
      "bucket": "医药医疗",
      "subcategory": "CXO/CRO/CDMO",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "cxo",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医药"
      ],
      "child_alias_hits": [
        "CDMO"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "为国内外制药公司、生物技术公司提供药品全生命周期的一站式服务。",
        "product_types": [
          "小分子CDMO解决方案",
          "新兴业务"
        ],
        "product_names": [
          "小分子CDMO解决方案",
          "新兴业务"
        ],
        "business_scope": "开发、生产、销售高新医药原料及中间体和生物技术产品，制剂研发，相关设备、配件的进出口、批发零售业务（不设店铺）以及上述相关技术咨询服务和技术转让。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 3.01,
        "net_profit_yoy_pct": -0.07,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.43,
        "net_margin_pct": 0.17,
        "debt_to_assets_pct": 0.13,
        "cfo_to_np": 1.75,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 3.01,
        "net_profit_yoy_pct": -0.07,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 67,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "CXO/CRO/CDMO",
          "小分子CDMO解决方案",
          "新兴业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300015",
      "name": "爱尔眼科",
      "bucket": "医药医疗",
      "subcategory": "医疗服务",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "medical_service",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医疗"
      ],
      "child_alias_hits": [
        "眼科",
        "医院"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "各类眼科疾病诊疗、手术服务与医学验光配镜服务。",
        "product_types": [
          "屈光项目",
          "白内障项目",
          "眼前段项目",
          "眼后段项目",
          "视光服务项目"
        ],
        "product_names": [
          "屈光项目",
          "白内障项目",
          "眼前段项目",
          "眼后段项目",
          "视光服务项目"
        ],
        "business_scope": "眼科医院的投资和医院经营管理服务，（不得从事吸收存款、集资收款、受托贷款、发行票据、发放贷款等国家金融监管及财政信用业务）。眼科医疗技术的研究，远程医疗软件的研发、生产、销售；眼科、内科、麻醉科、检验科、影视像科、验光配镜、Ⅲ类医疗器械销售（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 13.15,
        "net_profit_yoy_pct": 0.12,
        "revenue_yoy_pct": "",
        "roe_pct": 0.05,
        "gross_margin_pct": 0.48,
        "net_margin_pct": 0.21,
        "debt_to_assets_pct": 0.33,
        "cfo_to_np": 1.3,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "net_profit_attr_yi": 13.15,
        "net_profit_yoy_pct": 0.12,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "医疗服务",
          "屈光项目",
          "白内障项目",
          "眼前段项目",
          "眼后段项目",
          "视光服务项目"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300759",
      "name": "康龙化成",
      "bucket": "医药医疗",
      "subcategory": "CXO/CRO/CDMO",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "cxo",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [
        "CDMO"
      ],
      "warnings": [
        "root_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "提供从药物发现到药物开发的全流程一体化药物研究、开发及生产服务。",
        "product_types": [
          "实验室服务",
          "CMC(小分子CDMO）服务",
          "临床研究服务",
          "大分子和细胞与基因治疗服务"
        ],
        "product_names": [
          "实验室服务",
          "CMC（小分子CDMO）服务",
          "临床研究服务",
          "大分子和细胞与基因治疗服务"
        ],
        "business_scope": "药用化合物、化学药、生物制品、生物技术的研究与开发；提供技术开发、技术转让、技术咨询、技术服务、技术培训；货物、技术进出口业务。（涉及配额许可证管理及专项规定管理的商品按照国家有关规定办理）。（市场主体依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事国家和本市产业政策禁止和限制类项目的经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 3.1,
        "net_profit_yoy_pct": 0.1,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.32,
        "net_margin_pct": 0.09,
        "debt_to_assets_pct": 0.4,
        "cfo_to_np": 1.95,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 3.1,
        "net_profit_yoy_pct": 0.1,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "CXO/CRO/CDMO",
          "实验室服务",
          "CMC（小分子CDMO）服务",
          "临床研究服务",
          "大分子和细胞与基因治疗服务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300760",
      "name": "迈瑞医疗",
      "bucket": "医药医疗",
      "subcategory": "医疗器械/IVD",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "medical_device",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医疗"
      ],
      "child_alias_hits": [
        "医疗器械",
        "体外诊断",
        "医学影像"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "医疗器械的研发、制造、营销及服务。",
        "product_types": [
          "体外诊断类产品",
          "生命信息与支持类产品",
          "医学影像类产品",
          "新兴业务类产品",
          "其他业务"
        ],
        "product_names": [
          "体外诊断类产品",
          "生命信息与支持类产品",
          "医学影像类产品",
          "新兴业务类产品",
          "其他业务"
        ],
        "business_scope": "一般经营项目是：生产经营医疗电子仪器及其配套试剂及产品的软件开发（不含国家限制项目）；自产产品售后服务，自有房屋租赁及从事货物和技术的进出口业务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 24.27,
        "net_profit_yoy_pct": -0.11,
        "revenue_yoy_pct": "",
        "roe_pct": 0.06,
        "gross_margin_pct": 0.62,
        "net_margin_pct": 0.29,
        "debt_to_assets_pct": 0.25,
        "cfo_to_np": 0.57,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 24.27,
        "net_profit_yoy_pct": -0.11,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 73,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "医疗器械/IVD",
          "体外诊断类产品",
          "生命信息与支持类产品",
          "医学影像类产品",
          "新兴业务类产品",
          "其他业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300832",
      "name": "新产业",
      "bucket": "医药医疗",
      "subcategory": "医疗器械/IVD",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "medical_device",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医疗"
      ],
      "child_alias_hits": [
        "医疗器械",
        "体外诊断"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "体外诊断领域产品的研发、生产、销售及客户服务。",
        "product_types": [
          "体外诊断试剂",
          "体外诊断仪器"
        ],
        "product_names": [
          "体外诊断试剂",
          "体外诊断仪器"
        ],
        "business_scope": "一般经营项目是：经营进出口业务三按深贸管准字第2002―452号《资格证书》的规定经营；软件的研发、生产三仅在电脑制作，不含生产线生产；生产销售与许可生产的医疗器械产品配套的非医疗器械；自有物业租赁；物业管理；软件和信息技术服务。技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；第一类医疗器械销售；专用化学产品制造三不含危险化学品；专用化学产品销售三不含危险化学品；信息咨询服务三不含许可类信息咨询服务；软件销售；仪器仪表制造；仪器仪表销售；电子产品销售；专用设备制造三不含许可类专业设备制造；专用设备修理；医疗设备租赁；普通货物仓储服务三不含危险化学品等需许可审批的项目；总质量4.5吨及以下普通货运车辆道路货物运输三除网络货运和危险货物；以自有资金从事投资活动；生物化工产品技术研发；工程和技术研究和试验发展；细胞技术研发和应用。三除依法须经批准的项目外，凭营业执照依法自主开展经营活动。许可经营项目是：第一类医疗器械生产；第二类医疗器械生产；第二类医疗器械销售；第三类医疗器械生产；第三类医疗器械经营；兽药生产；兽药经营。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 4.42,
        "net_profit_yoy_pct": 0.01,
        "revenue_yoy_pct": "",
        "roe_pct": 0.05,
        "gross_margin_pct": 0.73,
        "net_margin_pct": 0.39,
        "debt_to_assets_pct": 0.07,
        "cfo_to_np": 0.81,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 4.42,
        "net_profit_yoy_pct": 0.01,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 85,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "医疗器械/IVD",
          "体外诊断试剂",
          "体外诊断仪器"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600085",
      "name": "同仁堂",
      "bucket": "医药医疗",
      "subcategory": "中药/品牌中药",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "tcm",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医药",
        "医疗"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "中成药的生产与销售。",
        "product_types": [
          "中成药"
        ],
        "product_names": [
          "安宫牛黄丸",
          "同仁牛黄清心丸",
          "同仁大活络丸",
          "六味地黄丸",
          "金匮肾气丸"
        ],
        "business_scope": "制造、加工中成药制剂、化妆品；经营中成药、西药制剂、生化药品；普通货运；出租办公用房；出租商业用房；以下项目仅限分公司经营：销售定型包装食品（含乳冷食品）、保健食品、中药材、医疗器械、医疗保健用品；零售中药饮片、图书；制造酒剂、涂膜剂、软胶囊剂、硬胶囊剂、保健酒、营养液（不含医药作用的营养液）；鹿、乌鸡产品的加工；中医科、内科专业、外科专业、妇产科专业、儿科专业、皮肤科专业、老年病科专业诊疗；危险货物运输（3类）；技术咨询、技术服务、技术开发、技术转让、技术培训；药用动植物的饲养、种植；自营和代理各类商品及技术的进出口业务，但国家限定公司经营或禁止进出口的商品及技术除外；零售百货；中西药广告设计；劳务服务；以下项目仅限分公司经营：养殖梅花鹿、乌骨鸡、麝、马鹿；物业服务和供热服务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 6.17,
        "net_profit_yoy_pct": -0.19,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.42,
        "net_margin_pct": 0.13,
        "debt_to_assets_pct": 0.29,
        "cfo_to_np": 1.53,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 6.17,
        "net_profit_yoy_pct": -0.19,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 72,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "中药/品牌中药",
          "安宫牛黄丸",
          "同仁牛黄清心丸",
          "同仁大活络丸",
          "六味地黄丸",
          "金匮肾气丸"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600196",
      "name": "复星医药",
      "bucket": "医药医疗",
      "subcategory": "创新药/生物药",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "innovative_drug",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医药",
        "医疗"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "制药、医疗器械与医学诊断、医疗健康服务，并通过参股国药控股覆盖到医药商业领域。",
        "product_types": [
          "抗肿瘤及免疫调节核心产品",
          "抗感染核心产品",
          "代谢及消化系统核心产品",
          "心血管系统核心产品",
          "中枢神经系统核心产品",
          "原料药和中间体核心产品"
        ],
        "product_names": [
          "抗肿瘤及免疫调节核心产品",
          "抗感染核心产品",
          "代谢及消化系统核心产品",
          "心血管系统核心产品",
          "中枢神经系统核心产品",
          "原料药和中间体核心产品"
        ],
        "business_scope": "生物化学产品，试剂，生物四技服务，生产销售自身开发的产品，仪器仪表，电子产品，计算机，化工原料（除危险品），咨询服务；经营本企业自产产品及相关技术的出口业务，经营本企业生产、科研所需的原辅材料、机械设备、仪器仪表、零配件及相关技术的进口业务。【依法须经批准的项目，经相关部门批准后方可开展经营活动】",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 10.8,
        "net_profit_yoy_pct": 0.14,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.5,
        "net_margin_pct": 0.11,
        "debt_to_assets_pct": 0.48,
        "cfo_to_np": 1.06,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 10.8,
        "net_profit_yoy_pct": 0.14,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "创新药/生物药",
          "抗肿瘤及免疫调节核心产品",
          "抗感染核心产品",
          "代谢及消化系统核心产品",
          "心血管系统核心产品",
          "中枢神经系统核心产品",
          "原料药和中间体核心产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600276",
      "name": "恒瑞医药",
      "bucket": "医药医疗",
      "subcategory": "创新药/生物药",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "innovative_drug",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医疗"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "药品的研发、生产和销售。",
        "product_types": [
          "马来酸吡咯替尼片",
          "注射用卡瑞利珠单抗",
          "瑞维鲁胺片",
          "海曲泊帕乙醇酰胺片",
          "羟乙磺酸达尔西利片",
          "碘佛醇注射液"
        ],
        "product_names": [
          "马来酸吡咯替尼片",
          "注射用卡瑞利珠单抗",
          "瑞维鲁胺片",
          "海曲泊帕乙醇酰胺片",
          "羟乙磺酸达尔西利片",
          "碘佛醇注射液"
        ],
        "business_scope": "片剂（含抗肿瘤药）、口服溶液剂、混悬剂、无菌原料药（抗肿瘤药）、原料药（含抗肿瘤药）、精神药品、软胶囊剂（含抗肿瘤药）、冻干粉针剂（含抗肿瘤药）、粉针剂（抗肿瘤药、头孢菌素类）、吸入粉雾剂、口服混悬剂、口服乳剂、大容量注射剂（含多层共挤输液袋、含抗肿瘤药）、小容量注射剂（含抗肿瘤药、含非最终灭菌）、生物工程制品（聚乙二醇重组人粒细胞刺激因子注射液）、硬胶囊剂（含抗肿瘤药）、颗粒剂（抗肿瘤药）、粉雾剂、膜剂、凝胶剂、乳膏剂的制造；中药前处理及提取；医疗器械的研发、制造与销售；一般化工产品的销售；自营和代理各类商品及技术的进出口业务，但国家限定公司经营或禁止进出口的商品和技术除外。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 22.81,
        "net_profit_yoy_pct": 0.22,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.87,
        "net_margin_pct": 0.28,
        "debt_to_assets_pct": 0.1,
        "cfo_to_np": 0.34,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 22.81,
        "net_profit_yoy_pct": 0.22,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "创新药/生物药",
          "马来酸吡咯替尼片",
          "注射用卡瑞利珠单抗",
          "瑞维鲁胺片",
          "海曲泊帕乙醇酰胺片",
          "羟乙磺酸达尔西利片",
          "碘佛醇注射液"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600763",
      "name": "通策医疗",
      "bucket": "医药医疗",
      "subcategory": "医疗服务",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "medical_service",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医疗"
      ],
      "child_alias_hits": [
        "医疗服务"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "医疗器械、日用品、消毒用品的销售，投资管理，经营进出口业务，技术开发、技术咨询和技术服务，培训服务(不含办培训班)。",
        "product_types": [
          "医疗服务",
          "产品销售",
          "建设工程"
        ],
        "product_names": [
          "医疗服务",
          "产品销售",
          "建设工程"
        ],
        "business_scope": "医疗器械、日用品、消毒用品的销售，投资管理，经营进出口业务，技术开发、技术咨询及技术服务，培训服务（不含办班培训）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-18",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.21,
        "net_profit_yoy_pct": 0.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.44,
        "net_margin_pct": 0.29,
        "debt_to_assets_pct": 0.23,
        "cfo_to_np": 0.73,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-18",
        "net_profit_attr_yi": 2.21,
        "net_profit_yoy_pct": 0.02,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 85,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "医疗服务",
          "产品销售",
          "建设工程"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601607",
      "name": "上海医药",
      "bucket": "医药医疗",
      "subcategory": "医药商业/药房",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "pharma_distribution",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医药",
        "医疗"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "医药工业、医药商业。",
        "product_types": [
          "麝香保心丸",
          "多糖铁复合物胶囊",
          "胃复春胶囊",
          "双歧杆菌三联活菌制剂",
          "注射用乌司他丁"
        ],
        "product_names": [
          "麝香保心丸",
          "多糖铁复合物胶囊",
          "胃复春胶囊",
          "双歧杆菌三联活菌制剂",
          "注射用乌司他丁"
        ],
        "business_scope": "原料药和各种剂型（包括但不限于片剂、胶囊剂、气雾剂、免疫制剂、颗粒剂、软膏剂、丸剂、口服液、吸入剂、注射剂、搽剂、酊剂、栓剂）的医药产品（包括但不限于化学原料药、化学药制剂、中药材、中成药、中药饮片、生化药品、生物制品、麻醉药品、精神药品、医疗用毒性药品【与经营范围相适应】、疫苗）、保健品、医疗器械及相关产品的研发、制造和销售，医药装备制造、销售和工程安装、维修，仓储物流、海上、陆路、航空货运代理业务，实业投资、资产经营、提供国际经贸信息和咨询服务，自有房屋租赁，自营和代理各类药品及相关商品和技术的进出口业务。【依法须经批准的项目，经相关部门批准后方可开展经营活动】",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 18.5,
        "net_profit_yoy_pct": 0.06,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.11,
        "net_margin_pct": 0.02,
        "debt_to_assets_pct": 0.61,
        "cfo_to_np": -0.55,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 18.5,
        "net_profit_yoy_pct": 0.06,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 84,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "医药商业/药房",
          "麝香保心丸",
          "多糖铁复合物胶囊",
          "胃复春胶囊",
          "双歧杆菌三联活菌制剂",
          "注射用乌司他丁"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "603233",
      "name": "大参林",
      "bucket": "医药医疗",
      "subcategory": "医药商业/药房",
      "priority": "P1",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "pharma_distribution",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医疗"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "中西成药、参茸滋补药材及中药饮片、保健品、医疗器械及其他商品的连锁零售业务。",
        "product_types": [
          "中西成药",
          "中参药材",
          "非药品"
        ],
        "product_names": [
          "中西成药",
          "中参药材",
          "非药品"
        ],
        "business_scope": "批发：中药材（收购）、中药饮片、中成药、化学药制剂、抗生素原料药、抗生素制剂、生化药品、生物制品（除疫苗）；零售（连锁）：中药饮片，中成药，化学药制剂，抗生素制剂，生化药品，生物制品（除疫苗）；保健食品连锁经营；批发兼零售：预包装食品、乳制品（含婴幼儿配方乳粉）；普通货运；呼叫中心业务、信息服务业务（仅限互联网信息服务和移动网信息服务业务）；销售：医疗器械，眼镜，农副产品，化妆品，日用百货，消毒用品，个人护理用品，家居护理用品，文具用品，普通机械，五金、交电，计算机，家用电器，电子产品，健身器材，饰物；下列项目由分支机构经营：门诊部（所），验光配镜服务，零售处方药、非处方药；商贸信息咨询，商品推广宣传，营销策划；项目投资；货物进出口。（依法须经批准的项目，经相关部门批准后方可开展经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 5.44,
        "net_profit_yoy_pct": 0.11,
        "revenue_yoy_pct": "",
        "roe_pct": 0.07,
        "gross_margin_pct": 0.36,
        "net_margin_pct": 0.08,
        "debt_to_assets_pct": 0.66,
        "cfo_to_np": 1.78,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "net_profit_attr_yi": 5.44,
        "net_profit_yoy_pct": 0.11,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "医药商业/药房",
          "中西成药",
          "中参药材",
          "非药品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "603259",
      "name": "药明康德",
      "bucket": "医药医疗",
      "subcategory": "CXO/CRO/CDMO",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "cxo",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医药",
        "医疗"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "为全球医药及生命科学行业提供一体化、端到端的新药研发和生产服务。",
        "product_types": [
          "化学业务",
          "测试业务",
          "生物学业务",
          "其他业务"
        ],
        "product_names": [
          "化学业务",
          "测试业务",
          "生物学业务",
          "其他业务"
        ],
        "business_scope": "开发研究及报批新药；医药中间体和精细化工产品（不含危险化学品）的研发；医药科技、生物技术、组合化学、有机化学、医疗科技、检测技术、计算机科技的技术开发、技术转让、技术服务和技术咨询；一类医疗器械、药品的批发，机械设备及零配件的销售；自营和代理各类商品及技术的进出口业务（国家限定企业经营或禁止进出口的商品和技术除外）；企业管理咨询、医药信息咨询、健康咨询（不含诊疗活动、心理咨询）；房屋租赁；会议及展览服务；利用自有资金对外投资。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 46.71,
        "net_profit_yoy_pct": 0.27,
        "revenue_yoy_pct": "",
        "roe_pct": 0.06,
        "gross_margin_pct": 0.5,
        "net_margin_pct": 0.38,
        "debt_to_assets_pct": 0.21,
        "cfo_to_np": 0.77,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 46.71,
        "net_profit_yoy_pct": 0.27,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "CXO/CRO/CDMO",
          "化学业务",
          "测试业务",
          "生物学业务",
          "其他业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "603883",
      "name": "老百姓",
      "bucket": "医药医疗",
      "subcategory": "医药商业/药房",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "pharma_distribution",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医疗"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "药品及其他健康、美丽相关商品的销售。",
        "product_types": [
          "中西成药",
          "中药",
          "非药品"
        ],
        "product_names": [
          "中西成药",
          "中药",
          "非药品"
        ],
        "business_scope": "许可项目：药品零售；药品批发；食品销售；药品互联网信息服务；第三类医疗器械经营；烟草制品零售；酒类经营；餐饮服务；食品互联网销售；医疗器械互联网信息服务；第二类增值电信业务；检验检测服务；生活美容服务；国家重点保护水生野生动物及其制品经营利用；消毒器械销售；互联网直播技术服务；出版物零售；母婴保健技术服务；职业中介活动；足浴服务；兽药经营；药品进出口；道路货物运输（不含危险货物）。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：第一类医疗器械销售；第二类医疗器械销售；婴幼儿配方乳粉及其他婴幼儿配方食品销售；宠物食品及用品零售；农副产品销售；地产中草药（不含中药饮片）购销；食用农产品零售；金银制品销售；日用百货销售；卫生用品和一次性使用医疗用品销售；日用化学产品销售；消毒剂销售（不含危险化学品）；化妆品零售；鞋帽零售；珠宝首饰零售；美发饰品销售；眼镜销售（不含隐形眼镜）；康复辅具适配服务；互联网销售（除销售需要许可的商品）；单用途商业预付卡代理销售；销售代理；养生保健服务（非医疗）；远程健康管理服务；健康咨询服务（不含诊疗服务）；在保险公司授权范围内开展专属保险代理业务（凭授权经营）；信息咨询服务（不含许可类信息咨询服务）；信息技术咨询服务；企业管理咨询；广告制作；广告设计、代理；市场营销策划；市场调查（不含涉外调查）；票务代理服务；会议及展览服务；摄影扩印服务；诊所服务；货物进出口；技术进出口；进出口代理；居民日常生活服务；特殊医学用途配方食品销售；打字复印；普通货物仓储服务（不含危险化学品等需许可审批的项目）；广告发布；国内贸易代理；企业管理；食用农产品批发；食品添加剂销售；礼品花卉销售；低温仓储（不含危险化学品等需许可审批的项目）；母婴用品销售；中医养生保健服务（非医疗）；非居住房地产租赁；住房租赁；病人陪护服务；医护人员防护用品零售；食品用洗涤剂销售；衡器销售；电子产品销售；宠物食品及用品批发；国内货物运输代理；化妆品批发；针纺织品及原料销售；家政服务；以自有资金从事投资活动；组织文化艺术交流活动；包装服务；装卸搬运；医院管理；社会经济咨询服务；中医诊所服务（须在中医主管部门备案后方可从事经营活动）；日用杂品销售；成人情趣用品销售（不含药品、医疗器械）；母婴生活护理（不含医疗服务）；游乐园服务；商务代理代办服务；企业会员积分管理服务；外卖递送服务；初级农产品收购；鞋帽批发；玩具、动漫及游艺用品销售；工艺美术品及礼仪用品销售（象牙及其制品除外）；软件开发；软件销售；劳务服务（不含劳务派遣）；贸易经纪；中草药收购；供应链管理服务；柜台、摊位出租；办公设备销售；珠宝首饰批发；通讯设备销售；租赁服务（不含许可类租赁服务）；食品进出口；卫生用杀虫剂销售；保健食品（预包装）销售；食品销售（仅销售预包装食品）；食品互联网销售（仅销售预包装食品）；日用品销售；体育用品及器材零售；五金产品零售；文具用品零售；五金产品批发；体育用品及器材批发；服装服饰批发；化工产品销售（不含许可类化工产品）；机械设备销售；家用电器销售；服装服饰零售；专用设备修理。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 3.02,
        "net_profit_yoy_pct": 0.05,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.34,
        "net_margin_pct": 0.06,
        "debt_to_assets_pct": 0.63,
        "cfo_to_np": 2.84,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 3.02,
        "net_profit_yoy_pct": 0.05,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "医药商业/药房",
          "中西成药",
          "中药",
          "非药品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "603939",
      "name": "益丰药房",
      "bucket": "医药医疗",
      "subcategory": "医药商业/药房",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "pharma_distribution",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医疗"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "药品、保健品、医疗器械以及与健康相关的日用便利品等的连锁零售业务。",
        "product_types": [
          "中西成药",
          "中药",
          "非药品"
        ],
        "product_names": [
          "中西成药",
          "中药",
          "非药品"
        ],
        "business_scope": "许可项目：食品销售；药品零售；药品互联网信息服务；第三类医疗器械经营；医疗服务；医疗美容服务；出版物零售；酒类经营；道路货物运输（不含危险货物）；食品互联网销售；国家重点保护水生野生动物及其制品经营利用；医疗器械互联网信息服务；第二类增值电信业务；职业中介活动；母婴保健技术服务（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：特殊医学用途配方食品销售；母婴用品销售；地产中草药（不含中药饮片）购销；日用品销售；个人卫生用品销售；日用百货销售；化妆品零售；互联网销售（除销售需要许可的商品）；消毒剂销售（不含危险化学品）；卫生用杀虫剂销售；卫生用品和一次性使用医疗用品销售；会议及展览服务；健康咨询服务（不含诊疗服务）；养生保健服务（非医疗）；中医养生保健服务（非医疗）；病人陪护服务；新鲜水果零售；新鲜水果批发；宠物食品及用品零售；水产品批发；水产品零售；食用农产品零售；在保险公司授权范围内开展专属保险代理业务（凭授权经营）；远程健康管理服务；第二类医疗器械销售；医用口罩零售；第一类医疗器械销售；医护人员防护用品零售；食品销售（仅销售预包装食品）；食品互联网销售（仅销售预包装食品）；五金产品零售；家用电器销售；珠宝首饰零售；金银制品销售；钟表销售；文具用品零售；广告制作；广告设计、代理；广告发布；保健食品（预包装）销售；婴幼儿配方乳粉及其他婴幼儿配方食品销售；食品添加剂销售；服装服饰零售；食品用洗涤剂销售；体育用品及器材零售；针纺织品销售；农副产品销售；礼品花卉销售；通信设备销售；眼镜销售（不含隐形眼镜）；票务代理服务；普通货物仓储服务（不含危险化学品等需许可审批的项目）；低温仓储（不含危险化学品等需许可审批的项目）；信息咨询服务（不含许可类信息咨询服务）；货物进出口；技术进出口；企业管理咨询；居民日常生活服务；非居住房地产租赁；住房租赁；国内贸易代理；衡器销售；品牌管理；企业管理。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 5.46,
        "net_profit_yoy_pct": 0.11,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.4,
        "net_margin_pct": 0.09,
        "debt_to_assets_pct": 0.52,
        "cfo_to_np": 1.93,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 5.46,
        "net_profit_yoy_pct": 0.11,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "医药商业/药房",
          "中西成药",
          "中药",
          "非药品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688271",
      "name": "联影医疗",
      "bucket": "医药医疗",
      "subcategory": "医疗器械/IVD",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "medical_device",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医疗"
      ],
      "child_alias_hits": [
        "医疗器械",
        "医学影像"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "医学影像诊断设备及放射治疗设备的生产、销售以及维修服务、医疗影像设备领域内的技术开发、技术咨询、技术服务以及计算机软件技术开发等。",
        "product_types": [
          "医学影像诊断设备",
          "放射治疗设备",
          "提供维修服务",
          "软件"
        ],
        "product_names": [
          "医学影像诊断设备",
          "放射治疗设备",
          "提供维修服务",
          "软件"
        ],
        "business_scope": "一般项目：许可项目：医疗器械的生产（详见许可证），三类医疗器械的批发【6815注射穿刺器械（限一次性重点监管产品）；6830医用X射线设备；6866医用高分子材料及制品】，（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：医疗设备租赁；专业设计服务，电子元器件批发，金属材料销售，汽车零配件批发；汽车零配件零售，汽车新车销售，汽车旧车销售，货物进出口，技术进出口，机动车改装服务，机动车修理和维护，汽车租赁，医疗器械维修，从事医疗设备专业技术领域内的技术开发、技术转让、技术咨询、技术服务，机械设备及配件、机电设备及配件的销售。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 3.92,
        "net_profit_yoy_pct": 0.08,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.47,
        "net_margin_pct": 0.13,
        "debt_to_assets_pct": 0.34,
        "cfo_to_np": -2.44,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 3.92,
        "net_profit_yoy_pct": 0.08,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "医疗器械/IVD",
          "医学影像诊断设备",
          "放射治疗设备",
          "提供维修服务",
          "软件"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002156",
      "name": "通富微电",
      "bucket": "半导体",
      "subcategory": "封装测试/先进封装",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "semiconductor",
      "rule_child_id": "advanced_packaging",
      "evidence_level": "medium",
      "root_alias_hits": [
        "半导体",
        "集成电路"
      ],
      "child_alias_hits": [
        "封装测试",
        "封装",
        "测试"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "提供集成电路封装测试服务，为全球客户提供设计仿真和封装测试一站式服务。",
        "product_types": [
          "集成电路封装测试",
          "模具及材料销售"
        ],
        "product_names": [
          "集成电路封装测试",
          "模具及材料销售"
        ],
        "business_scope": "研究开发、生产、销售集成电路等半导体产品，提供相关的技术服务；自营和代理上述商品的进出口业务。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 3.5,
        "net_profit_yoy_pct": 2.25,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.13,
        "net_margin_pct": 0.05,
        "debt_to_assets_pct": 0.65,
        "cfo_to_np": 2.69,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 3.5,
        "net_profit_yoy_pct": 2.25,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 93,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "封装测试/先进封装",
          "集成电路封装测试",
          "模具及材料销售"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002185",
      "name": "华天科技",
      "bucket": "半导体",
      "subcategory": "封装测试/先进封装",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "semiconductor",
      "rule_child_id": "advanced_packaging",
      "evidence_level": "medium",
      "root_alias_hits": [
        "半导体",
        "集成电路"
      ],
      "child_alias_hits": [
        "封装测试",
        "2.5D",
        "封装",
        "测试"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "集成电路封装测试。",
        "product_types": [
          "集成电路封装产品"
        ],
        "product_names": [
          "DIP",
          "SOT",
          "SOP",
          "QFP",
          "QFN/DFN",
          "BGA/LGA",
          "FC",
          "MCM",
          "SiP",
          "WLP",
          "TSV",
          "Bumping",
          "MEMS",
          "FO",
          "PLP",
          "2.5D/3D"
        ],
        "business_scope": "半导体集成电路研发、生产、封装、测试、销售；LED及应用产品和MEMS研发、生产、销售；电子产业项目投资；经营本企业自产产品及技术的出口业务和本企业所需的机械设备、零配件、原辅材料及技术的进口业务；房屋租赁；水、电、气及供热、供冷等相关动力产品和服务（国家限制的除外）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.75,
        "net_profit_yoy_pct": 5.68,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.11,
        "net_margin_pct": 0.02,
        "debt_to_assets_pct": 0.52,
        "cfo_to_np": 6.45,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 0.75,
        "net_profit_yoy_pct": 5.68,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 83,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "封装测试/先进封装",
          "DIP",
          "SOT",
          "SOP",
          "QFP",
          "QFN/DFN",
          "BGA/LGA"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002371",
      "name": "北方华创",
      "bucket": "半导体",
      "subcategory": "半导体设备",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
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
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "半导体基础产品的研发、生产、销售和技术服务。",
        "product_types": [
          "电子工艺装备",
          "电子元器件"
        ],
        "product_names": [
          "半导体装备",
          "真空新能源装备",
          "电阻",
          "电容",
          "晶体器件",
          "模块电源",
          "微波组件"
        ],
        "business_scope": "组装生产集成电路设备、光伏设备、TFT设备、真空设备、锂离子电池设备、流量计、电子元器件；销售集成电路设备、光伏设备、TFT设备、真空设备、锂离子电池设备、流量计、电子元器件；技术咨询；技术开发；技术转让；经济贸易咨询；投资及投资管理；货物进出口；技术进出口；代理进出口。（市场主体依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事国家和本市产业政策禁止和限制类项目的经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 15.68,
        "net_profit_yoy_pct": 0.03,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.41,
        "net_margin_pct": 0.15,
        "debt_to_assets_pct": 0.5,
        "cfo_to_np": 0.48,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 15.68,
        "net_profit_yoy_pct": 0.03,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "半导体设备",
          "半导体装备",
          "真空新能源装备",
          "电阻",
          "电容",
          "晶体器件",
          "模块电源"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "603986",
      "name": "兆易创新",
      "bucket": "半导体",
      "subcategory": "模拟/功率/MCU",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "semiconductor",
      "rule_child_id": "analog_power",
      "evidence_level": "medium",
      "root_alias_hits": [
        "芯片"
      ],
      "child_alias_hits": [
        "模拟芯片"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "存储器、微控制器、传感器和模拟芯片的研发、技术支持和销售。",
        "product_types": [
          "存储芯片",
          "微控制器",
          "传感器",
          "模拟产品"
        ],
        "product_names": [
          "专用型存储器产品",
          "微控制器产品",
          "传感器产品",
          "模拟产品"
        ],
        "business_scope": "微电子产品、计算机软硬件、计算机系统集成、电信设备、手持移动终端的研发；委托加工生产、销售自行研发的产品；技术转让、技术服务；货物进出口、技术进出口、代理进出口。（市场主体依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事国家和本市产业政策禁止和限制类项目的经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 14.73,
        "net_profit_yoy_pct": 5.23,
        "revenue_yoy_pct": "",
        "roe_pct": 0.07,
        "gross_margin_pct": 0.57,
        "net_margin_pct": 0.35,
        "debt_to_assets_pct": 0.08,
        "cfo_to_np": 1.21,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 14.73,
        "net_profit_yoy_pct": 5.23,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "模拟/功率/MCU",
          "专用型存储器产品",
          "微控制器产品",
          "传感器产品",
          "模拟产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688012",
      "name": "中微公司",
      "bucket": "半导体",
      "subcategory": "半导体设备",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "semiconductor",
      "rule_child_id": "semicap",
      "evidence_level": "medium",
      "root_alias_hits": [
        "半导体",
        "集成电路"
      ],
      "child_alias_hits": [
        "半导体设备",
        "刻蚀"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "高端半导体设备及泛半导体设备的研发、生产和销售。",
        "product_types": [
          "刻蚀设备",
          "薄膜设备",
          "MOCVD设备"
        ],
        "product_names": [
          "刻蚀设备",
          "薄膜设备",
          "MOCVD设备"
        ],
        "business_scope": "研发、组装集成电路设备、泛半导体设备和其他微观加工设备及环保设备，包括配套设备和零配件，销售自产产品。提供技术咨询、技术服务。【不涉及国营贸易管理商品，涉及配额、许可证管理商品的，按照国家有关规定办理申请；依法须经批准的项目，经相关部门批准后方可开展经营活动】。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 9.18,
        "net_profit_yoy_pct": 1.97,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.4,
        "net_margin_pct": 0.32,
        "debt_to_assets_pct": 0.22,
        "cfo_to_np": -0.17,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 9.18,
        "net_profit_yoy_pct": 1.97,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 88,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "半导体设备",
          "刻蚀设备",
          "薄膜设备",
          "MOCVD设备"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688072",
      "name": "拓荆科技",
      "bucket": "半导体",
      "subcategory": "半导体设备",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
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
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "高端半导体专用设备的研发、生产、销售与技术服务。",
        "product_types": [
          "半导体专用设备"
        ],
        "product_names": [
          "PECVD系列产品",
          "ALD系列产品",
          "SACVD系列产品",
          "HDPCVD系列产品",
          "FlowableCVD系列产品",
          "三维集成领域系列产品"
        ],
        "business_scope": "一般项目：企业总部管理；企业管理；企业管理咨询；自有资金投资的资产管理服务；以自有资金从事投资活动；财务咨询；社会经济咨询服务；租赁服务（不含许可类租赁服务）；国内贸易代理；销售代理。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 5.62,
        "net_profit_yoy_pct": 4.88,
        "revenue_yoy_pct": "",
        "roe_pct": 0.08,
        "gross_margin_pct": 0.42,
        "net_margin_pct": 0.51,
        "debt_to_assets_pct": 0.61,
        "cfo_to_np": -0.92,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 5.62,
        "net_profit_yoy_pct": 4.88,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 88,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "半导体设备",
          "PECVD系列产品",
          "ALD系列产品",
          "SACVD系列产品",
          "HDPCVD系列产品",
          "FlowableCVD系列产品",
          "三维集成领域系列产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "000768",
      "name": "中航西飞",
      "bucket": "国防军工与航空航天",
      "subcategory": "航空装备 / 大飞机",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "defense_aerospace",
      "rule_child_id": "defense_aircraft",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "军用大中型飞机整机、军民用航空零部件产品的研发、制造、销售、维修与服务。",
        "product_types": [
          "航空产品"
        ],
        "product_names": [
          "军用飞机整机",
          "飞机零部件"
        ],
        "business_scope": "飞机、飞行器零部件、航材和地随设备的设计、试验、生产、维修、改装、销售、服务及相关业务；飞行机务保证及服务；飞机租赁及相关服务保障业务；技术装备的设计、制造、安装、调试及技术服务；航空及其它民用铝合金系列产品和装饰材料的开发、设计、研制、生产、销售以及相关的技术服务；进出口加工业务；动力设备和设施、机电设备、工矿备件、电气、管道、非标设备及特种设备的设计、制造、安装、销售、技术服务；碳材料、粉末冶金制品、橡胶件、塑料件、锻铸件的制造；城市暖通工程、天然气安装工程、电子工程的设计、运行、安装、维护、管理、技术服务；汽车零部件的制造、维修、销售及技术服务；客户培训及相关配套服务；员工培训（仅限本系统内部员工）。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.46,
        "net_profit_yoy_pct": -0.15,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.09,
        "net_margin_pct": 0.04,
        "debt_to_assets_pct": 0.71,
        "cfo_to_np": -5.23,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 2.46,
        "net_profit_yoy_pct": -0.15,
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
          "军用飞机整机",
          "飞机零部件"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300750",
      "name": "宁德时代",
      "bucket": "新能源汽车",
      "subcategory": "动力电池/储能",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "new_energy_vehicle",
      "rule_child_id": "battery_storage",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [
        "动力电池",
        "锂电池",
        "储能",
        "电池系统"
      ],
      "warnings": [
        "root_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "动力电池、储能电池的研发、生产、销售。",
        "product_types": [
          "动力电池系统",
          "储能电池系统",
          "电池材料及回收",
          "电池矿产资源"
        ],
        "product_names": [
          "动力电池系统",
          "储能电池系统",
          "电池材料",
          "回收及矿产资源"
        ],
        "business_scope": "锂离子电池、锂聚合物电池、燃料电池、动力电池、超大容量储能电池、超级电容器、电池管理系统及可充电电池包、风光电储能系统、相关设备仪器的开发、生产和销售及售后服务；对新能源行业的投资；锂电池及相关产品的技术服务、测试服务以及咨询服务。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-16",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 227.37,
        "net_profit_yoy_pct": 0.49,
        "revenue_yoy_pct": "",
        "roe_pct": 0.06,
        "gross_margin_pct": 0.25,
        "net_margin_pct": 0.18,
        "debt_to_assets_pct": 0.62,
        "cfo_to_np": 1.48,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-16",
        "net_profit_attr_yi": 227.37,
        "net_profit_yoy_pct": 0.49,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "新能源汽车",
          "动力电池/储能",
          "动力电池系统",
          "储能电池系统",
          "电池材料",
          "回收及矿产资源"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "000333",
      "name": "美的集团",
      "bucket": "消费电子",
      "subcategory": "智能家居 / 白电",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "consumer_electronics",
      "rule_child_id": "consumer_smart_home",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [
        "家电",
        "智能家居"
      ],
      "warnings": [
        "root_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "智能家居、工业技术、楼宇科技、机器人与自动化、新能源、健康医疗、智慧物流等业务。",
        "product_types": [
          "智能家居业务",
          "楼宇科技",
          "机器人与自动化",
          "工业技术",
          "其他业务"
        ],
        "product_names": [
          "智能家居业务",
          "楼宇科技",
          "机器人与自动化",
          "工业技术",
          "其他业务"
        ],
        "business_scope": "生产经营家用电器、电机及其零部件；从事家用电器、家电原材料及零配件的进出口、批发及加工业务(不设店铺，不涉及国营贸易管理商品，涉及配额、许可证管理商品的按国家规定办理)；信息技术服务；为企业提供投资顾问及管理服务；计算机软件、硬件开发；家电产品的安装、维修及售后服务；工业产品设计；酒店管理；广告代理；物业管理；企业所需的工程和技术研究、开发及其销售和推广。(经营范围涉及行政许可的项目需凭有效许可证或批准证明经营）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 128.6,
        "net_profit_yoy_pct": 0.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.06,
        "gross_margin_pct": 0.26,
        "net_margin_pct": 0.1,
        "debt_to_assets_pct": 0.6,
        "cfo_to_np": 1.13,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 128.6,
        "net_profit_yoy_pct": 0.02,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "消费电子",
          "智能家居 / 白电",
          "智能家居业务",
          "楼宇科技",
          "机器人与自动化",
          "工业技术",
          "其他业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "000651",
      "name": "格力电器",
      "bucket": "消费电子",
      "subcategory": "智能家居 / 白电",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "consumer_electronics",
      "rule_child_id": "consumer_smart_home",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [
        "空调"
      ],
      "warnings": [
        "root_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "消费电器及其配件的生产及销售。",
        "product_types": [
          "家用空调",
          "暖通设备",
          "冰箱",
          "洗衣机",
          "热水器",
          "厨房电器",
          "环境电器"
        ],
        "product_names": [
          "家用空调",
          "暖通设备",
          "冰箱",
          "洗衣机",
          "热水器",
          "厨房电器",
          "环境电器"
        ],
        "business_scope": "货物、技术的进出口（法律、行政法规禁止的项目除外；法律、行政法规限制的项目须取得许可后方可经营）；研发、制造、销售：泵、阀门、压缩机及类似机械，风机、包装设备等通用设备；电机、输配电及控制设备；电线、电缆、光缆及电工器材；家用制冷电器具，家用空气调节器及相关零部件；中央空调、制冷、空调设备、洁净空调、采暖设备、通风设备；热泵热水机、空调热水一体产品、燃气采暖热水炉设备、燃气供暖热水设备、热能节能设备、机电设备产品及相关零部件；新风及新风除霾设备；通讯终端设备及相关零部件；气体，液体分离及纯净设备及相关零部件；家用清洁卫生电器具、家用厨房电器具、家用通风电器具、其它家用电力器具及相关零部件；建筑机电设备安装工程、泳池水处理、中央热水工程；销售、安装及维护：中央空调、制冷、空调设备、洁净空调、采暖设备、通风设备；热泵热水机、空调热水一体产品、燃气采暖热水炉设备、燃气供暖热水设备、热能节能设备、新风及新风除霾设备。批发：机械设备、五金交电及电子产品；零售：家用电器及电子产品。电子商务：电子商务的规划和实施，提供电商平台网络开发和维护。经营电信业务及增值电信业务，信息传输、软件和信息技术服务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 60.99,
        "net_profit_yoy_pct": 0.03,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.27,
        "net_margin_pct": 0.14,
        "debt_to_assets_pct": 0.59,
        "cfo_to_np": 1.28,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 60.99,
        "net_profit_yoy_pct": 0.03,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "消费电子",
          "智能家居 / 白电",
          "家用空调",
          "暖通设备",
          "冰箱",
          "洗衣机",
          "热水器",
          "厨房电器"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600690",
      "name": "海尔智家",
      "bucket": "消费电子",
      "subcategory": "智能家居 / 白电",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "consumer_electronics",
      "rule_child_id": "consumer_smart_home",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [
        "家电",
        "空调"
      ],
      "warnings": [
        "root_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "家电的研发、生产及销售工作，涉及冰箱/冷柜、厨电、空调、洗衣设备、水家电及其他智能家庭业务，以及提供智能家庭全套化解决方案。",
        "product_types": [
          "空调",
          "电冰箱",
          "厨电",
          "水家电",
          "洗衣机"
        ],
        "product_names": [
          "空调",
          "电冰箱",
          "厨电",
          "水家电",
          "洗衣机"
        ],
        "business_scope": "电器、电子产品、机械产品、通讯设备及相关配件、工业自动化控制设备、计算机软硬件及辅助设备的研发与制造；家用电器及电子产品技术咨询服务；进出口业务（按外经贸部核准范围经营）；批发零售：国内商业（国家禁止商品除外）；从事数字科技、智能科技、软件科技；技术开发、技术咨询、技术转让、技术服务（包含工业互联网及家电产品等）；数据处理；应用软件开发及服务；先进控制与优化技术的开发与应用研究；矿泉水制造、饮食、旅游服务（限分支机构经营)；企业管理服务及咨询、信息技术服务。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 48.07,
        "net_profit_yoy_pct": -0.15,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.25,
        "net_margin_pct": 0.07,
        "debt_to_assets_pct": 0.55,
        "cfo_to_np": 0.34,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 48.07,
        "net_profit_yoy_pct": -0.15,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 73,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "消费电子",
          "智能家居 / 白电",
          "空调",
          "电冰箱",
          "厨电",
          "水家电",
          "洗衣机"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002241",
      "name": "歌尔股份",
      "bucket": "消费电子",
      "subcategory": "AI终端 / 消费电子",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "consumer_electronics",
      "rule_child_id": "consumer_ai_terminal",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [
        "智能硬件"
      ],
      "warnings": [
        "root_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "提供精密零组件和智能硬件整机的垂直整合产品解决方案，以及相关设计研发和生产制造服务。",
        "product_types": [
          "精密零组件业务",
          "智能声学整机业务",
          "智能硬件业务"
        ],
        "product_names": [
          "微型扬声器/受话器",
          "扬声器模组",
          "触觉器件（马达）",
          "无线充电器件",
          "天线",
          "MR光学器件及模组",
          "AR光学器件及模组",
          "微纳光学器件",
          "3D结构光模组",
          "ARHUD模组",
          "MEMS声学传感器",
          "其他MEMS传感器",
          "微系统模组",
          "精密结构件",
          "智能无线耳机",
          "智能音箱",
          "AI智能眼镜",
          "MR混合现实",
          "AR增强现实",
          "智能可穿戴",
          "智能游戏主机及配件",
          "智能家居"
        ],
        "business_scope": "开发、制造、销售：声学、光学、无线通信技术及相关产品，机器人与自动化装备，智能机电及信息产品，精密电子产品模具，精密五金件，半导体类、MEMS类产品，消费类电子产品，LED封装及相关应用产品；与以上产品相关的软件的开发、销售；与以上技术、产品相关的服务；货物进出口、技术进出口（不含无线电发射及卫星接收设备，国家法律法规禁止的项目除外）。（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 5.22,
        "net_profit_yoy_pct": 0.07,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.14,
        "net_margin_pct": 0.03,
        "debt_to_assets_pct": 0.59,
        "cfo_to_np": -1.12,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "net_profit_attr_yi": 5.22,
        "net_profit_yoy_pct": 0.07,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 84,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "消费电子",
          "AI终端 / 消费电子",
          "微型扬声器/受话器",
          "扬声器模组",
          "触觉器件（马达）",
          "无线充电器件",
          "天线",
          "MR光学器件及模组"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "000568",
      "name": "泸州老窖",
      "bucket": "消费白马",
      "subcategory": "白酒 / 高端消费",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "consumer_bluechip",
      "rule_child_id": "consumer_liquor_premium",
      "evidence_level": "medium",
      "root_alias_hits": [
        "白酒"
      ],
      "child_alias_hits": [
        "白酒"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "“国窖1573”、“泸州老窖”等系列白酒的研发、生产和销售。",
        "product_types": [
          "中高档酒类",
          "其他酒类"
        ],
        "product_names": [
          "中高档酒类",
          "其他酒类"
        ],
        "business_scope": "泸州老窖系列酒的生产、销售（凭许可证及其有效期经营）；进出口经营业务；技术推广服务；发酵制品生产及销售；销售：汽车配件、建材及化工原料（以上经营项目不含法律、法规和国务院决定的前置审批和许可项目）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 37.3,
        "net_profit_yoy_pct": -0.19,
        "revenue_yoy_pct": "",
        "roe_pct": 0.07,
        "gross_margin_pct": 0.86,
        "net_margin_pct": 0.46,
        "debt_to_assets_pct": 0.22,
        "cfo_to_np": 1.22,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 37.3,
        "net_profit_yoy_pct": -0.19,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 77,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "消费白马",
          "白酒 / 高端消费",
          "中高档酒类",
          "其他酒类"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "000858",
      "name": "五粮液",
      "bucket": "消费白马",
      "subcategory": "白酒 / 高端消费",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "consumer_bluechip",
      "rule_child_id": "consumer_liquor_premium",
      "evidence_level": "medium",
      "root_alias_hits": [
        "白酒"
      ],
      "child_alias_hits": [
        "白酒"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "白酒生产和销售。",
        "product_types": [
          "酒类产品",
          "非酒类产品"
        ],
        "product_names": [
          "五粮液酒"
        ],
        "business_scope": "主营：酒类产品及相关辅助产品（瓶盖、商标、标识及包装制品）的生产经营；兼营：饮料、药品、水果种植、农业种植、进出口业务、物业管理、投资管理(不得从事非法集资、吸收公众资金等金融活动)。(依法须经批准的项目，经相关部门批准后方可开展经营活动)。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 83.24,
        "net_profit_yoy_pct": 0.83,
        "revenue_yoy_pct": "",
        "roe_pct": 0.07,
        "gross_margin_pct": 0.81,
        "net_margin_pct": 0.36,
        "debt_to_assets_pct": 0.34,
        "cfo_to_np": -0.3,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 83.24,
        "net_profit_yoy_pct": 0.83,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "消费白马",
          "白酒 / 高端消费",
          "五粮液酒"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600519",
      "name": "贵州茅台",
      "bucket": "消费白马",
      "subcategory": "白酒 / 高端消费",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "consumer_bluechip",
      "rule_child_id": "consumer_liquor_premium",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "茅台酒及系列酒的生产与销售。",
        "product_types": [
          "茅台酒",
          "其他系列酒"
        ],
        "product_names": [
          "茅台酒",
          "其他系列酒"
        ],
        "business_scope": "茅台酒及系列酒的生产与销售；饮料、食品、包装材料的生产、销售；防伪技术开发、信息产业相关产品的研制、开发；酒店经营管理、住宿、餐饮、娱乐、洗浴及停车场管理服务；车辆运输（不含危险化学品）、维修保养；第二类增值电信业务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 281.54,
        "net_profit_yoy_pct": 0.01,
        "revenue_yoy_pct": "",
        "roe_pct": 0.11,
        "gross_margin_pct": 0.9,
        "net_margin_pct": 0.52,
        "debt_to_assets_pct": 0.12,
        "cfo_to_np": 0.96,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": 281.54,
        "net_profit_yoy_pct": 0.01,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "消费白马",
          "白酒 / 高端消费",
          "茅台酒",
          "其他系列酒"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600938",
      "name": "中国海油",
      "bucket": "资源周期",
      "subcategory": "能源资源",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "resources",
      "rule_child_id": "resources_energy",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "原油和天然气的勘探、开发、生产及销售。",
        "product_types": [
          "原油",
          "天然气"
        ],
        "product_names": [
          "原油",
          "天然气"
        ],
        "business_scope": "--",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 391.84,
        "net_profit_yoy_pct": 0.07,
        "revenue_yoy_pct": "",
        "roe_pct": 0.05,
        "gross_margin_pct": 0.51,
        "net_margin_pct": 0.34,
        "debt_to_assets_pct": 0.27,
        "cfo_to_np": 1.41,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 391.84,
        "net_profit_yoy_pct": 0.07,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "资源周期",
          "能源资源",
          "原油",
          "天然气"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601088",
      "name": "中国神华",
      "bucket": "资源周期",
      "subcategory": "能源资源",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "resources",
      "rule_child_id": "resources_energy",
      "evidence_level": "medium",
      "root_alias_hits": [
        "资源",
        "煤炭"
      ],
      "child_alias_hits": [
        "煤炭",
        "能源"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "煤炭、电力的生产和销售，铁路、港口和船舶运输，煤制烯烃等业务。",
        "product_types": [
          "煤炭",
          "电力"
        ],
        "product_names": [
          "煤炭",
          "电力"
        ],
        "business_scope": "煤炭开采；煤炭销售（不在北京地区开展实物煤的交易、储运活动）；矿物洗选加工；矿产资源勘查；采矿行业高效节能技术研发；矿山机械制造；矿山机械销售；发电业务、输电业务、供（配）电业务；风力发电技术服务；太阳能发电技术服务；新兴能源技术研发；合同能源管理；储能技术服务；节能管理服务；电力行业高效节能技术研发；余热余压余气利用技术研发；炼焦；化工产品生产（不含许可类化工产品）；化工产品销售（不含许可类化工产品）；专用化学产品制造（不含危险化学品）；专用化学产品销售（不含危险化学品）；新型催化材料及助剂销售；国内货物运输代理；公共铁路运输；铁路运输辅助活动；建设工程施工；电气设备修理；通用设备修理；机械设备销售；普通机械设备安装服务；电子和机械设备维护（不含特种设备）；船舶修理、船舶港口服务、船舶拖带服务；货物进出口；技术进出口；以自有资金从事投资活动；自有资金投资的资产管理服务；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；非居住房地产租赁；住房租赁；物业管理。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 133.12,
        "net_profit_yoy_pct": -0.11,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.33,
        "net_margin_pct": 0.19,
        "debt_to_assets_pct": 0.29,
        "cfo_to_np": 1.3,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": 133.12,
        "net_profit_yoy_pct": -0.11,
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
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601857",
      "name": "中国石油",
      "bucket": "资源周期",
      "subcategory": "能源资源",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
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
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "原油及天然气的勘探、开发、生产、输送和销售及新能源业务；原油及石油产品的炼制，基本及衍生化工产品、其他化工产品的生产和销售及新材料业务；炼油产品和非油品的销售以及贸易业务；天然气的输送及销售业务。",
        "product_types": [
          "油气和新能源",
          "炼油化工和新材料",
          "天然气销售"
        ],
        "product_names": [
          "油气和新能源",
          "炼油化工和新材料",
          "天然气销售"
        ],
        "business_scope": "石油天然气勘查、开采(有效期以许可证为准);原油的仓储、销售;成品油的销售;陆上采油(气)、海上采油(气)、钻井、物探、测井、录井、井下作业、油建、储运、海油工程、危险化学品的生产(有效期至2017年10月13日);预包装食品、乳制品(不含婴幼儿配方乳粉)销售(限取得经营许可证的分支机构经营,其经营内容和经营期限以许可证为准);烟的销售(仅限取得烟草专卖零售许可证的分支机构经营,其经营内容和经营期限以许可证为准);燃气经营(限取得燃气经营许可证的分支机构经营,经营项目及有效期以许可证为准);危险化学品经营(限取得危险化学品经营许可证的分支机构经营,经营项目及有效期以许可证为准);住宿、报纸期刊图书的零售、音像制品经营,水路运输,道路运输、运输代理、船舶代理、三类汽车维修(以上仅限取得经营许可证的分支机构经营,其经营内容和经营期限以许可证为准);石油天然气管道建设、运营;石油勘查、开采和石油化工及相关工程的技术开发、咨询、服务;进出口业务;炼油;石油化工、化工产品生产与销售;管道生产建设所需物资设备、器材、润滑油、汽车零配件、日用百货、农用物资的销售;房屋和机械设备的租赁;纺织服装、文体用品、五金家具建材、家用电器电子产品、充值卡、计生用品、劳保用品的零售;彩票代理销售、代理收取水电公用事业费、票务代理、车辆过秤服务,广告业务、汽车清洗服务。(企业依法自主选择经营项目,开展经营活动;依法须经批准的项目,经相关部门批准后依批准的内容开展经营活动;不得从事本市产业政策禁止和限制类项目的经营活动。)",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 534.77,
        "net_profit_yoy_pct": 0.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.23,
        "net_margin_pct": 0.07,
        "debt_to_assets_pct": 0.4,
        "cfo_to_np": 1.58,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 534.77,
        "net_profit_yoy_pct": 0.02,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "资源周期",
          "能源资源",
          "油气和新能源",
          "炼油化工和新材料",
          "天然气销售"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601899",
      "name": "紫金矿业",
      "bucket": "资源周期",
      "subcategory": "金属矿产",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "resources",
      "rule_child_id": "resources_metal_mining",
      "evidence_level": "medium",
      "root_alias_hits": [
        "资源",
        "矿业"
      ],
      "child_alias_hits": [
        "矿产"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "金、铜、锌铅、锂等矿产资源勘查与开发，清洁能源业务。",
        "product_types": [
          "矿山产金锭",
          "矿山产金精矿",
          "矿山产铜精矿",
          "矿山产电积铜",
          "矿山产电解铜",
          "矿山产锌",
          "矿山产银",
          "铁精矿",
          "冶炼加工及贸易金",
          "冶炼产铜",
          "冶炼产锌"
        ],
        "product_names": [
          "矿山产金锭",
          "矿山产金精矿",
          "矿山产铜精矿",
          "矿山产电积铜",
          "矿山产电解铜",
          "矿山产锌",
          "矿山产银",
          "铁精矿",
          "冶炼加工及贸易金",
          "冶炼产铜",
          "冶炼产锌"
        ],
        "business_scope": "矿产资源勘查；金矿采选；金冶炼；铜矿采选；铜冶炼；信息系统集成服务；信息技术咨询服务；珠宝首饰、工艺美术品、矿产品、机械设备、化工产品（不含危险化学品及易制毒化学品）的销售；水力发电；对采矿业、酒店业、建筑业的投资；对外贸易；普通货物道路运输活动；危险货物道路运输活动。铜矿金矿露天开采、铜矿地下开采；矿山工程技术、矿山机械、冶金专用设备研发；矿山机械、冶金专用设备制造；旅游饭店（限分支机构经营）。（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-22",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 251.66,
        "net_profit_yoy_pct": 0.98,
        "revenue_yoy_pct": "",
        "roe_pct": 0.1,
        "gross_margin_pct": 0.36,
        "net_margin_pct": 0.26,
        "debt_to_assets_pct": 0.51,
        "cfo_to_np": 1.11,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-22",
        "net_profit_attr_yi": 251.66,
        "net_profit_yoy_pct": 0.98,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "资源周期",
          "金属矿产",
          "矿山产金锭",
          "矿山产金精矿",
          "矿山产铜精矿",
          "矿山产电积铜",
          "矿山产电解铜",
          "矿山产锌"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "603993",
      "name": "洛阳钼业",
      "bucket": "资源周期",
      "subcategory": "金属矿产",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "resources",
      "rule_child_id": "resources_metal_mining",
      "evidence_level": "medium",
      "root_alias_hits": [
        "有色",
        "金属"
      ],
      "child_alias_hits": [
        "矿产",
        "有色"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "有色金属的采、选、冶等矿山采掘及加工业务和金属贸易业务。",
        "product_types": [
          "矿山采掘及加工",
          "矿产贸易"
        ],
        "product_names": [
          "矿山采掘及加工",
          "钼",
          "钨",
          "铜（不含NPM）",
          "钴",
          "铌",
          "磷",
          "铜金（NPM）",
          "矿产贸易",
          "矿物金属贸易",
          "精炼金属贸易"
        ],
        "business_scope": "钨钼系列产品的采癣冶炼、深加工；钼系列产品，化工产品（不含化学危险品、易燃易爆、易制毒品）的出口；生产所需原辅材料、机械设备、仪器仪表、零配件的进口（上述进出口项目凭资格证书经营）；住宿、饮食（限具有资格的分支机构经营）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 88.24,
        "net_profit_yoy_pct": 0.97,
        "revenue_yoy_pct": "",
        "roe_pct": 0.09,
        "gross_margin_pct": 0.23,
        "net_margin_pct": 0.13,
        "debt_to_assets_pct": 0.52,
        "cfo_to_np": 1.28,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": 88.24,
        "net_profit_yoy_pct": 0.97,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "资源周期",
          "金属矿产",
          "矿山采掘及加工",
          "钼",
          "钨",
          "铜（不含NPM）",
          "钴",
          "铌"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300059",
      "name": "东方财富",
      "bucket": "金融",
      "subcategory": "证券 / 财富管理",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "finance",
      "rule_child_id": "finance_broker_wealth",
      "evidence_level": "medium",
      "root_alias_hits": [
        "金融",
        "证券"
      ],
      "child_alias_hits": [
        "证券"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "证券业务、金融电子商务服务业务、金融数据服务业务。",
        "product_types": [
          "证券业务",
          "金融电子商务服务业务",
          "金融数据服务业务"
        ],
        "product_names": [
          "证券业务",
          "金融电子商务服务业务",
          "金融数据服务业务"
        ],
        "business_scope": "许可项目：第二类增值电信业务；互联网信息服务。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）；一般项目：技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；人工智能应用软件开发；人工智能理论与算法软件开发；大数据服务；数据处理服务；互联网数据服务；软件开发；信息技术咨询服务；软件销售；咨询策划服务；非居住房地产租赁；广告设计、代理；广告制作；广告发布。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 37.38,
        "net_profit_yoy_pct": 0.38,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.74,
        "net_margin_pct": 0.74,
        "debt_to_assets_pct": 0.78,
        "cfo_to_np": 8.14,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": 37.38,
        "net_profit_yoy_pct": 0.38,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "金融",
          "证券 / 财富管理",
          "证券业务",
          "金融电子商务服务业务",
          "金融数据服务业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600030",
      "name": "中信证券",
      "bucket": "金融",
      "subcategory": "证券 / 财富管理",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "finance",
      "rule_child_id": "finance_broker_wealth",
      "evidence_level": "medium",
      "root_alias_hits": [
        "金融",
        "银行",
        "证券",
        "保险"
      ],
      "child_alias_hits": [
        "证券",
        "财富管理"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "投资银行、财富管理、资产管理、金融市场等相关金融服务。",
        "product_types": [
          "经纪业务",
          "资产管理",
          "证券投资",
          "证券承销"
        ],
        "product_names": [
          "经纪业务",
          "资产管理",
          "证券投资",
          "证券承销"
        ],
        "business_scope": "证券经纪（限山东盛河南盛浙江省天台县、浙江省苍南县以外区域）；证券投资咨询；与证券交易、证券投资活动有关的财务顾问；证券承销与保荐；证券自营；证券资产管理（全国社会保障基金境内委托投资管理、基本养老保险基金证券投资管理、企业年金基金投资管理和职业年金基金投资管理）；融资融券；证券投资基金代销；为期货公司提供中间介绍业务；代销金融产品；股票期权做市；上市证券做市交易。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 104.59,
        "net_profit_yoy_pct": 0.55,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": "",
        "net_margin_pct": 0.45,
        "debt_to_assets_pct": 0.85,
        "cfo_to_np": 7.19,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": 104.59,
        "net_profit_yoy_pct": 0.55,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "金融",
          "证券 / 财富管理",
          "经纪业务",
          "资产管理",
          "证券投资",
          "证券承销"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600036",
      "name": "招商银行",
      "bucket": "金融",
      "subcategory": "银行",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
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
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "向客户提供各种批发及零售银行产品和服务，亦自营及代客进行资金业务。",
        "product_types": [
          "零售金融业务",
          "批发金融业务",
          "其他业务"
        ],
        "product_names": [
          "零售金融业务",
          "批发金融业务",
          "其他业务"
        ],
        "business_scope": "吸收公众存款；发放短期、中期和长期贷款；办理结算；办理票据贴现；发行金融债券；代理发行、代理兑付、承销政府债券；买卖政府债券；同业拆借；提供信用证服务及担保；代理收付款项及代理保险业务；提供保管箱服务。外汇存款；外汇贷款；外汇汇款；外汇兑换；国际结算；结汇、售汇；同业外汇拆借；外汇票据的承兑和贴现；外汇借款；外汇担保；发行和代理发行股票以外的外币有价证券；买卖和代理买卖股票以外的外币有价证券；自营和代客外汇买卖；资信调查、咨询、见证业务；离岸金融业务。经人民银行批准的其他业务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 380.48,
        "net_profit_yoy_pct": 0.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": "",
        "net_margin_pct": 0.44,
        "debt_to_assets_pct": 0.9,
        "cfo_to_np": 3.31,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 380.48,
        "net_profit_yoy_pct": 0.02,
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
          "零售金融业务",
          "批发金融业务",
          "其他业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601318",
      "name": "中国平安",
      "bucket": "金融",
      "subcategory": "保险 / 综合金融",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "finance",
      "rule_child_id": "finance_insurance_fintech",
      "evidence_level": "medium",
      "root_alias_hits": [
        "金融",
        "银行",
        "保险"
      ],
      "child_alias_hits": [
        "保险"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "提供多元化的金融产品及服务。",
        "product_types": [
          "寿险及健康险业务",
          "财产保险业务",
          "银行业务",
          "资产管理业务",
          "金融赋能业务"
        ],
        "product_names": [
          "寿险及健康险业务",
          "财产保险业务",
          "银行业务",
          "资产管理业务",
          "金融赋能业务"
        ],
        "business_scope": "投资金融、保险企业；监督管理控股投资企业的各种国内、国际业务；开展资金运用业务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 332.63,
        "net_profit_yoy_pct": -0.07,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": "",
        "net_margin_pct": 0.15,
        "debt_to_assets_pct": 0.9,
        "cfo_to_np": 3.94,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 332.63,
        "net_profit_yoy_pct": -0.07,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 77,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "金融",
          "保险 / 综合金融",
          "寿险及健康险业务",
          "财产保险业务",
          "银行业务",
          "资产管理业务",
          "金融赋能业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601398",
      "name": "工商银行",
      "bucket": "金融",
      "subcategory": "高股息金融",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "finance",
      "rule_child_id": "finance_high_dividend",
      "evidence_level": "medium",
      "root_alias_hits": [
        "金融",
        "银行",
        "证券",
        "保险"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "从事公司和个人金融业务、资金业务、投资银行业务，并提供资产管理、信托、金融租赁及其他金融服务。",
        "product_types": [
          "银行业"
        ],
        "product_names": [
          "公司金融业务",
          "个人金融业务",
          "资金业务"
        ],
        "business_scope": "办理人民币存款、贷款；同业拆借业务；国内外结算；办理票据承兑、贴现、转贴现；各类汇兑业务；代理资金清算；提供信用证服务及担保；代理销售业务；代理发行、代理承销、代理兑付政府债券；代收代付业务；代理证券资金清算业务（银证转账）；保险兼业代理业务（有效期至2018年08月27日）；代理政策性银行、外国政府和国际金融机构贷款业务；保管箱服务；发行金融债券；买卖政府债券、金融债券；证券投资基金、企业年金托管业务；企业年金受托管理服务、年金账户管理服务；开放式基金的注册登记、认购、申购和赎回业务；资信调查、咨询、见证业务；贷款承诺；企业、个人财务顾问服务；组织或参加银团贷款；外汇存款；外汇贷款；外币兑换；出口托收及进口代收；外汇票据承兑和贴现；外汇借款；外汇担保；发行、代理发行、买卖或代理买卖股票以外的外币有价证券；自营、代客外汇买卖；外汇金融衍生业务；银行卡业务；电话银行、网上银行、手机银行业务；办理结汇、售汇业务；经国务院银行业监督管理机构批准的其他业务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 880.13,
        "net_profit_yoy_pct": 0.03,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": "",
        "net_margin_pct": 0.38,
        "debt_to_assets_pct": 0.92,
        "cfo_to_np": 16.09,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 880.13,
        "net_profit_yoy_pct": 0.03,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 88,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "金融",
          "高股息金融",
          "公司金融业务",
          "个人金融业务",
          "资金业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601939",
      "name": "建设银行",
      "bucket": "金融",
      "subcategory": "高股息金融",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "finance",
      "rule_child_id": "finance_high_dividend",
      "evidence_level": "medium",
      "root_alias_hits": [
        "金融",
        "银行",
        "保险"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "银行业及有关的金融服务。",
        "product_types": [
          "公司金融业务",
          "个人金融业务",
          "资金资管业务",
          "其他业务"
        ],
        "product_names": [
          "公司金融业务",
          "个人金融业务",
          "资金资管业务",
          "其他业务"
        ],
        "business_scope": "吸收公众存款；发放短期、中期、长期贷款；办理国内外结算；办理票据承兑与贴现；发行金融债券；代理发行、代理兑付、承销政府债券；买卖政府债券、金融债券；从事同业拆借；买卖、代理买卖外汇；从事银行卡业务；提供信用证服务及担保；代理收付款项及代理保险业务；提供保管箱服务；经中国银行业监督管理机构等监管部门批准的其他业务。企业依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 868.21,
        "net_profit_yoy_pct": 0.04,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": "",
        "net_margin_pct": 0.41,
        "debt_to_assets_pct": 0.92,
        "cfo_to_np": 6.85,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 868.21,
        "net_profit_yoy_pct": 0.04,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 87,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "金融",
          "高股息金融",
          "公司金融业务",
          "个人金融业务",
          "资金资管业务",
          "其他业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688111",
      "name": "金山办公",
      "bucket": "高端装备与工业",
      "subcategory": "工业软件 / 企业软件",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "industrial_equipment",
      "rule_child_id": "industrial_software",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [
        "办公软件"
      ],
      "warnings": [
        "root_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card",
      "business_evidence": {
        "business_summary": "办公软件产品及服务的设计研发及销售推广。",
        "product_types": [
          "WPS个人业务",
          "WPS365业务",
          "WPS软件业务",
          "其他"
        ],
        "product_names": [
          "WPS个人业务",
          "WPS365业务",
          "WPS软件业务",
          "其他"
        ],
        "business_scope": "开发办公软件；销售自行研发的软件产品；计算机系统集成；技术服务、技术咨询；批发计算机软、硬件及辅助设备、通信产品；货物进出口、技术进出口；（不涉及国营贸易管理商品；涉及配额许可证管理商品的按照国家有关规定办理申请手续）；设计、制作、代理、发布广告；出版物批发。（市场主体依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事国家和本市产业政策禁止和限制类项目的经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 21.95,
        "net_profit_yoy_pct": 4.45,
        "revenue_yoy_pct": "",
        "roe_pct": 0.16,
        "gross_margin_pct": 0.87,
        "net_margin_pct": 1.36,
        "debt_to_assets_pct": 0.25,
        "cfo_to_np": 0.03,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "net_profit_attr_yi": 21.95,
        "net_profit_yoy_pct": 4.45,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "高端装备与工业",
          "工业软件 / 企业软件",
          "WPS个人业务",
          "WPS365业务",
          "WPS软件业务",
          "其他"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "000661",
      "name": "长春高新",
      "bucket": "医药医疗",
      "subcategory": "创新药/生物药",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "innovative_drug",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医药"
      ],
      "child_alias_hits": [
        "疫苗"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "生物制药及中成药的研发、生产和销售。",
        "product_types": [
          "生物制剂",
          "化学药品",
          "疫苗",
          "中成药"
        ],
        "product_names": [
          "注射用人生长激素",
          "重组人生长激素注射液",
          "注射用重组人促卵泡激素",
          "重组人促卵泡激素注射液",
          "醋酸曲普瑞林注射液",
          "伏欣奇拜单抗",
          "屋尘螨变应原制剂",
          "醋酸甲地孕酮口服混悬液",
          "口腔凝胶",
          "水痘减毒活疫苗",
          "带状疱疹减毒活疫苗",
          "冻干鼻喷流感减毒活疫苗",
          "鼻喷流感减毒活疫苗",
          "银花泌炎灵片",
          "清胃止痛微丸",
          "血栓心脉宁片",
          "疏清颗粒"
        ],
        "business_scope": "高新技术产品的开发、生产、销售及服务基础设施的开发建设；新药开发、技术转让、咨询服务；物业管理；高新成果转让及中介服务；商业供销业（国家有专项限制经营的商品除外）；餐饮、娱乐、旅馆（办时需许可）；培训；集中供热；产业投资（医药产业）（以上各项仅限分公司、子公司持证经营）。绿化景观工程设计、施工及维护、企业营销策划、广告策划、社会经济信息咨询、房地产中介服务、房屋销售代理（仅限分支机构持证经营）；企业管理咨询（以上各项国家法律法规禁止的不得经营；应经专项审批的项目未获得批准之前不得经营）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-22",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.71,
        "net_profit_yoy_pct": -0.42,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.78,
        "net_margin_pct": 0.1,
        "debt_to_assets_pct": 0.18,
        "cfo_to_np": 4.06,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-22",
        "net_profit_attr_yi": 2.71,
        "net_profit_yoy_pct": -0.42,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 67,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "创新药/生物药",
          "注射用人生长激素",
          "重组人生长激素注射液",
          "注射用重组人促卵泡激素",
          "重组人促卵泡激素注射液",
          "醋酸曲普瑞林注射液",
          "伏欣奇拜单抗"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002223",
      "name": "鱼跃医疗",
      "bucket": "医药医疗",
      "subcategory": "医疗器械/IVD",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "medical_device",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医疗"
      ],
      "child_alias_hits": [
        "医疗器械"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "研发、制造和销售医疗器械产品及提供相关解决方案。",
        "product_types": [
          "呼吸治疗解决方案",
          "血糖管理及POCT解决方案",
          "家用健康检测解决方案",
          "临床器械及康复解决方案",
          "急救解决方案"
        ],
        "product_names": [
          "呼吸治疗解决方案",
          "血糖管理及POCT解决方案",
          "家用健康检测解决方案",
          "临床器械及康复解决方案",
          "急救解决方案"
        ],
        "business_scope": "医疗器械（按许可证所核范围经营）；保健用品的制造与销售；金属材料的销售；经营本企业自产产品的出口业务和本企业所需的机械设备、零配件、原辅材料的进口业务（国家限定公司经营或禁止进出口的商品及技术除外）；机动医疗车改装（凭相关资质开展经营活动）；汽车的销售。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 4.29,
        "net_profit_yoy_pct": -0.31,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.5,
        "net_margin_pct": 0.18,
        "debt_to_assets_pct": 0.19,
        "cfo_to_np": 1.39,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": 4.29,
        "net_profit_yoy_pct": -0.31,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 67,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "医疗器械/IVD",
          "呼吸治疗解决方案",
          "血糖管理及POCT解决方案",
          "家用健康检测解决方案",
          "临床器械及康复解决方案",
          "急救解决方案"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300122",
      "name": "智飞生物",
      "bucket": "医药医疗",
      "subcategory": "创新药/生物药",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "innovative_drug",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [
        "疫苗"
      ],
      "warnings": [
        "root_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "疫苗、生物制品研发、生产、销售、推广、配送及进出口。",
        "product_types": [
          "盟威克",
          "盟纳康",
          "喜菲贝",
          "盟纳克",
          "智克威得",
          "宜卡",
          "微卡",
          "优威克",
          "四价流感病毒裂解疫苗",
          "佳达修",
          "佳达修9",
          "乐儿德",
          "纽莫法",
          "维康特",
          "欣安立适"
        ],
        "product_names": [
          "盟威克",
          "盟纳康",
          "喜菲贝",
          "盟纳克",
          "智克威得",
          "宜卡",
          "微卡",
          "优威克",
          "四价流感病毒裂解疫苗",
          "佳达修",
          "佳达修9",
          "乐儿德",
          "纽莫法",
          "维康特",
          "欣安立适"
        ],
        "business_scope": "批发生物制品；境外疫苗代理进口及销售；生物技术研究开发、技术咨询服务；货物及技术进出口；仓储服务（不含危险品）；生物制品市场推广宣传服务；普通货运、货物专用运输（冷藏保鲜）；国内货物运输代理。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -3.94,
        "net_profit_yoy_pct": -0.19,
        "revenue_yoy_pct": "",
        "roe_pct": -0.02,
        "gross_margin_pct": 0.29,
        "net_margin_pct": -0.18,
        "debt_to_assets_pct": 0.46,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": -3.94,
        "net_profit_yoy_pct": -0.19,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 20,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "创新药/生物药",
          "盟威克",
          "盟纳康",
          "喜菲贝",
          "盟纳克",
          "智克威得",
          "宜卡"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300347",
      "name": "泰格医药",
      "bucket": "医药医疗",
      "subcategory": "CXO/CRO/CDMO",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "cxo",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医药",
        "医疗"
      ],
      "child_alias_hits": [
        "CRO"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "为新药研发提供临床试验全过程专业服务的合同研究组织（CRO），为全球医药和医疗器械创新企业提供全面而综合的临床研究解决方案。",
        "product_types": [
          "临床试验技术服务",
          "临床试验相关及实验室服务"
        ],
        "product_names": [
          "临床运营",
          "临床药理",
          "注册与法规事务",
          "科学事务",
          "医学翻译",
          "药物警戒",
          "真实世界研究",
          "第三方稽查",
          "培训等服务",
          "数据管理及统计分析",
          "临床试验现场管理",
          "受试者招募",
          "医学影像",
          "实验室"
        ],
        "business_scope": "一般项目：技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；医学研究和试验发展（除人体干细胞、基因诊断与治疗技术开发和应用）；数据处理和存储支持服务；数据处理服务；翻译服务；业务培训（不含教育培训、职业技能培训等需取得许可的培训）；人力资源服务（不含职业中介活动、劳务派遣服务）；软件开发；软件销售；计算机系统服务；会议及展览服务；非居住房地产租赁；租赁服务（不含许可类租赁服务）；创业空间服务；园区管理服务；物业管理；市场营销策划；企业管理咨询（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。许可项目：职业中介活动（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 3.3,
        "net_profit_yoy_pct": -0.7,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.27,
        "net_margin_pct": 0.18,
        "debt_to_assets_pct": 0.15,
        "cfo_to_np": 0.96,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 3.3,
        "net_profit_yoy_pct": -0.7,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 49,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "CXO/CRO/CDMO",
          "临床运营",
          "临床药理",
          "注册与法规事务",
          "科学事务",
          "医学翻译",
          "药物警戒"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300896",
      "name": "爱美客",
      "bucket": "医药医疗",
      "subcategory": "医疗服务",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "medical_service",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医药",
        "医疗"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "生物医用材料及生物医药的研发、生产和销售。",
        "product_types": [
          "注射用类透明质酸钠系列产品",
          "注射类聚乳酸系列产品",
          "聚对二氧环己酮面部埋植线"
        ],
        "product_names": [
          "注射用类透明质酸钠系列产品",
          "注射类聚乳酸系列产品",
          "聚对二氧环己酮面部埋植线"
        ],
        "business_scope": "药品、生物制品、医疗器械、化妆品的技术开发、转让；新型药用辅料的开发、生产；货物进出口、技术进出口、代理进出口；企业管理咨询(不含中介服务)；销售(含网上销售)医疗器械、化妆品；批发、零售(含网上销售)食品；批发(含网上销售)药品；生产医疗器械III类：III-6846-1植入器材；生产化妆品。(该公司2018年10月17日前为内资企业，于2018年10月17日变更为外商投资企业；市场主体依法自主选择经营项目，开展经营活动；批发、零售(含网上销售)食品、批发(含网上销售)药品、生产化妆品以及依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事国家和本市产业政策禁止和限制类项目的经营活动。)。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 3.01,
        "net_profit_yoy_pct": -0.33,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.92,
        "net_margin_pct": 0.47,
        "debt_to_assets_pct": 0.07,
        "cfo_to_np": 0.84,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 3.01,
        "net_profit_yoy_pct": -0.33,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 63,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "医疗服务",
          "注射用类透明质酸钠系列产品",
          "注射类聚乳酸系列产品",
          "聚对二氧环己酮面部埋植线"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600436",
      "name": "片仔癀",
      "bucket": "医药医疗",
      "subcategory": "中药/品牌中药",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "tcm",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医药",
        "医疗"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "医药制造业、医药流通业及化妆品业等。",
        "product_types": [
          "肝病用药",
          "心脑血管用药"
        ],
        "product_names": [
          "肝病用药",
          "心脑血管用药"
        ],
        "business_scope": "许可项目：药品生产；药品委托生产；食品生产；保健食品生产；饮料生产；茶叶制品生产；动物饲养；药品进出口；药品批发；药品零售；药品互联网信息服务；医疗器械互联网信息服务；第三类医疗器械生产；第三类医疗器械经营。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）。一般项目：食品进出口；货物进出口；进出口代理；食品销售（仅销售预包装食品）；食用农产品初加工；中草药种植；医学研究和试验发展；家用电器销售；文具用品批发；工艺美术品及收藏品批发（象牙及其制品除外）；第二类医疗器械销售；日用百货销售；日用品销售；箱包销售；包装材料及制品销售；化妆品批发；卫生用品和一次性使用医疗用品销售；日用化学产品销售；家居用品销售。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 7.4,
        "net_profit_yoy_pct": -0.26,
        "revenue_yoy_pct": "",
        "roe_pct": 0.05,
        "gross_margin_pct": 0.42,
        "net_margin_pct": 0.27,
        "debt_to_assets_pct": 0.14,
        "cfo_to_np": 1.74,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 7.4,
        "net_profit_yoy_pct": -0.26,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 72,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "中药/品牌中药",
          "肝病用药",
          "心脑血管用药"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "603392",
      "name": "万泰生物",
      "bucket": "医药医疗",
      "subcategory": "创新药/生物药",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "innovative_drug",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医疗"
      ],
      "child_alias_hits": [
        "疫苗"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "体外诊断试剂、体外诊断仪器与疫苗的研发、生产及销售。",
        "product_types": [
          "体外诊断试剂",
          "体外诊断仪器",
          "疫苗"
        ],
        "product_names": [
          "体外诊断试剂",
          "体外诊断仪器",
          "双价人乳头瘤病毒疫苗（大肠埃希菌）",
          "重组戊型肝炎疫苗（大肠埃希菌）",
          "九价人乳头瘤病毒疫苗（大肠埃菌）"
        ],
        "business_scope": "许可项目：药品生产；药品批发；药品零售；第二类医疗器械生产；第三类医疗器械生产；第三类医疗器械经营；第三类医疗器械租赁；药品进出口。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：第一类医疗器械生产；第一类医疗器械销售；第一类医疗器械租赁；第二类医疗器械销售；第二类医疗器械租赁；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；货物进出口；技术进出口；非居住房地产租赁；专用设备修理。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）（不得从事国家和本市产业政策禁止和限制类项目的经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -0.45,
        "net_profit_yoy_pct": 0.19,
        "revenue_yoy_pct": "",
        "roe_pct": -0.0,
        "gross_margin_pct": 0.7,
        "net_margin_pct": -0.09,
        "debt_to_assets_pct": 0.13,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": -0.45,
        "net_profit_yoy_pct": 0.19,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "创新药/生物药",
          "体外诊断试剂",
          "体外诊断仪器",
          "双价人乳头瘤病毒疫苗（大肠埃希菌）",
          "重组戊型肝炎疫苗（大肠埃希菌）",
          "九价人乳头瘤病毒疫苗（大肠埃菌）"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688114",
      "name": "华大智造",
      "bucket": "医药医疗",
      "subcategory": "医疗器械/IVD",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "healthcare",
      "rule_child_id": "medical_device",
      "evidence_level": "medium",
      "root_alias_hits": [
        "医疗"
      ],
      "child_alias_hits": [
        "医疗器械"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "以基因测序仪为核心的生命科学工具创新研发和销售。",
        "product_types": [
          "全读长测序业务板块",
          "智能自动化业务板块",
          "多组学业务板块"
        ],
        "product_names": [
          "高通量基因测序仪",
          "纳米孔基因测序仪及配套设备",
          "测序配套试剂",
          "建库试剂",
          "AI智能化产品",
          "通用自动化产品",
          "通用计算与存储产品",
          "智惠实验室整体解决方案",
          "细胞组学技术平台",
          "时空组学",
          "蛋白组学",
          "影像组学",
          "超低温自动化生物样本存储平台",
          "新双十"
        ],
        "business_scope": "医疗仪器、医疗器械（基因测序仪及配套设备、测序试剂、酶试剂和软件）、机械设备（测序仪配套设备）、仪器仪表（基因测序仪）、生化试剂（测序试剂）、生物试剂（酶试剂）、耗材及生物工程相关产品（危险化学品限许可证规定范围）、配套软件、系统集成的研发、制造、批发、佣金代理（不含拍卖）、进出口及相关配套业务（不涉及国营贸易管理商品，涉及配额、许可证管理及其它专项规定管理的商品，按国家有关规定办理申请）；技术开发、推广服务；技术咨询、交流服务；技术转让服务（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -1.05,
        "net_profit_yoy_pct": 0.38,
        "revenue_yoy_pct": "",
        "roe_pct": -0.01,
        "gross_margin_pct": 0.59,
        "net_margin_pct": -0.18,
        "debt_to_assets_pct": 0.29,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": -1.05,
        "net_profit_yoy_pct": 0.38,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "医药医疗",
          "医疗器械/IVD",
          "高通量基因测序仪",
          "纳米孔基因测序仪及配套设备",
          "测序配套试剂",
          "建库试剂",
          "AI智能化产品",
          "通用自动化产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "603501",
      "name": "韦尔股份",
      "bucket": "半导体",
      "subcategory": "模拟/功率/MCU",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "semiconductor",
      "rule_child_id": "analog_power",
      "evidence_level": "medium",
      "root_alias_hits": [
        "芯片",
        "集成电路"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "芯片设计业务。",
        "product_types": [
          "图像传感器解决方案",
          "显示解决方案",
          "模拟解决方案"
        ],
        "product_names": [
          "图像传感器解决方案",
          "显示解决方案",
          "模拟解决方案"
        ],
        "business_scope": "集成电路、计算机软硬件的设计、开发、销售，商务信息咨询，从事货物及技术的进出口业务，自有房屋租赁。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 4.94,
        "net_profit_yoy_pct": -0.42,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.29,
        "net_margin_pct": 0.08,
        "debt_to_assets_pct": 0.33,
        "cfo_to_np": 1.49,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 4.94,
        "net_profit_yoy_pct": -0.42,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 67,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "模拟/功率/MCU",
          "图像传感器解决方案",
          "显示解决方案",
          "模拟解决方案"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688126",
      "name": "沪硅产业",
      "bucket": "半导体",
      "subcategory": "半导体材料",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "semiconductor",
      "rule_child_id": "semimaterial",
      "evidence_level": "medium",
      "root_alias_hits": [
        "半导体",
        "集成电路",
        "半导体材料"
      ],
      "child_alias_hits": [
        "半导体材料",
        "硅片"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "半导体硅片及其他高端半导体材料的研发、生产与销售。",
        "product_types": [
          "300mm半导体硅片",
          "200mm及以下尺寸半导体硅片",
          "受托加工服务"
        ],
        "product_names": [
          "300mm半导体硅片",
          "200mm及以下尺寸半导体硅片",
          "受托加工服务"
        ],
        "business_scope": "研究、开发、生产、加工高端硅基集成电路材料、相关技术及相关产品，销售自产产品以及提供相关的技术咨询和售后服务(依法须经批准的项目，经相关部门批准后方可开展经营活动)。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -5.28,
        "net_profit_yoy_pct": -1.32,
        "revenue_yoy_pct": "",
        "roe_pct": -0.03,
        "gross_margin_pct": -0.12,
        "net_margin_pct": -0.49,
        "debt_to_assets_pct": 0.42,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": -5.28,
        "net_profit_yoy_pct": -1.32,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 20,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "半导体材料",
          "300mm半导体硅片",
          "200mm及以下尺寸半导体硅片",
          "受托加工服务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600760",
      "name": "中航沈飞",
      "bucket": "国防军工与航空航天",
      "subcategory": "航空装备 / 大飞机",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "defense_aerospace",
      "rule_child_id": "defense_aircraft",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "航空产品制造。",
        "product_types": [
          "航空制造业"
        ],
        "product_names": [
          "航空防务装备",
          "民用航空产品"
        ],
        "business_scope": "以自有资金对外投资；航空产品研发、服务保障；机械、电子产品开发、制造（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.65,
        "net_profit_yoy_pct": -0.62,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.11,
        "net_margin_pct": 0.06,
        "debt_to_assets_pct": 0.65,
        "cfo_to_np": 38.22,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 1.65,
        "net_profit_yoy_pct": -0.62,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 67,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "国防军工与航空航天",
          "航空装备 / 大飞机",
          "航空防务装备",
          "民用航空产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600893",
      "name": "航发动力",
      "bucket": "国防军工与航空航天",
      "subcategory": "航空发动机",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "defense_aerospace",
      "rule_child_id": "defense_engine",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [
        "航空发动机",
        "发动机"
      ],
      "warnings": [
        "root_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "航空发动机及衍生产品业务、外贸出口转包业务、非航空产品及其他业务。",
        "product_types": [
          "航空发动机及衍生产品",
          "外贸出口转包",
          "非航空产品及其他"
        ],
        "product_names": [
          "航空发动机及燃气轮机整机",
          "部件",
          "零组件",
          "维修保障服务",
          "以及航空发动机",
          "燃气轮机",
          "石油钻探",
          "医疗器械零部件出口业务"
        ],
        "business_scope": "从事各类飞行器动力装置、第二动力装置、燃气轮机及零部件的设计、实验、研制、生产、装配、试车、维修、营销和售后服务业务；从事航空发动机技术衍生产品的研制、实验、开发、中试、生产、销售、服务业务；航空发动机及其零部件转包生产、进出口、“三来一补”加工业务；物流服务、对销贸易、转口贸易业务；烟气透平动力装置、航天发动机及其零部件制造、销售与维修；风力发电机及零部件的生产、销售、工程设计、安装、技术咨询与售后服务；太阳能发电设备的制造、系统集成、销售与维修；铝型材及门窗的制造、安装和销售；计测设备的检定、校准及测试、研制、调修、销售；计量标准研究开发与应用；计测技术培训及咨询服务；仪器、仪表、工具、普通设备、石化、电力、冶金机械成套设备、电器机械与器材、机械备件、电子产品的制造、销售与维修；金属材料、橡胶制品、本企业废旧物资的销售；幕墙的设计、安装、装饰装修；进出口业务；医疗机械制造、销售；市政公用工程的设计和施工；环保工程的设计和施工；机电设备的设计、制造、采购、销售、安装和维修；科技咨询及技术服务（以上范围均不含国家规定的前置许可、禁止项目；国家法律另有规定的，从其规定）；以下项目由分支机构经营：住宿、餐饮服务；成品油、氧气、氩气、丙烷（化工原料）销售；压力容器、锅炉的设计、制造、安装和维修。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.19,
        "net_profit_yoy_pct": -0.66,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.11,
        "net_margin_pct": 0.0,
        "debt_to_assets_pct": 0.59,
        "cfo_to_np": 175.35,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 0.19,
        "net_profit_yoy_pct": -0.66,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 53,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "国防军工与航空航天",
          "航空发动机",
          "航空发动机及燃气轮机整机",
          "部件",
          "零组件",
          "维修保障服务",
          "以及航空发动机",
          "燃气轮机"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300274",
      "name": "阳光电源",
      "bucket": "电力与公用事业",
      "subcategory": "光伏",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "renewable_power",
      "rule_child_id": "renewable_pv",
      "evidence_level": "medium",
      "root_alias_hits": [
        "电力",
        "发电",
        "水电",
        "新能源发电"
      ],
      "child_alias_hits": [
        "光伏",
        "光伏逆变器"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "光伏逆变器、储能系统、风电变流及传动产品、新能源汽车电控及电源系统、充电设备、氢能装备等新能源电源设备的研产销服和新能源投资开发，并布局AIDC电源业务，提供固态变压器SST及电源解决方案。",
        "product_types": [
          "光伏逆变器",
          "储能系统",
          "新能源投资开发",
          "风电变流及传动产品",
          "智慧运营",
          "新能源汽车电控及电源系统",
          "水面光伏系统",
          "充电设备",
          "氢能装备"
        ],
        "product_names": [
          "微型逆变器",
          "户用逆变器",
          "组串逆变器",
          "集中逆变器",
          "模块化逆变器",
          "PowerTitan3.0交流智储平台",
          "电力储能系统",
          "工商业储能系统",
          "模块化工商业储能系统",
          "户用电池",
          "集中式光伏电站",
          "风电场",
          "家庭光伏电站",
          "家庭能源电站",
          "工商业能源电站",
          "充电站",
          "双馈4.xMW-16MW风电变流器",
          "全功率5.xMW-30MW风电变流器",
          "风电变桨驱动器",
          "风电变桨系统",
          "传动变频器",
          "电网模拟电源",
          "智慧能源运营服务",
          "HEM系列乘用车混动双电控",
          "EB系列逆变砖",
          "四合一控制器",
          "车载电源",
          "EM37系列电驱桥",
          "水面光伏系统",
          "欧标480KW隔离风冷一体式超充",
          "欧标ChargeStack1000兆瓦级超充系统",
          "2880/1920/960/800kW分体超充",
          "PWM整流电源",
          "PWM直流变换电源",
          "碱性水电解制氢设备",
          "HyGrow2000+Nm3/h系列大型碱性水电解槽",
          "PEM电解水制氢设备",
          "HyBrain智慧氢能管理系统",
          "HyDoc电解槽数字化管理系统"
        ],
        "business_scope": "新能源发电设备、分布式电源、及其配套产品的研制、生产、销售、服务、系统集成及技术转让；新能源发电工程、制氢系统及新能源汽车充换电设施的设计、开发、投资、建设和经营；电力电子设备、电气传动及控制设备、不间断电源、储能电源、制氢设备、新能源汽车充换电设备及系统、电能质量控制装置的研制、生产及销售；货物或技术进出口（国家禁止或涉及行政审批的货物和技术进出口除外）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 22.46,
        "net_profit_yoy_pct": -0.4,
        "revenue_yoy_pct": "",
        "roe_pct": 0.05,
        "gross_margin_pct": 0.33,
        "net_margin_pct": 0.14,
        "debt_to_assets_pct": 0.58,
        "cfo_to_np": 0.54,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 22.46,
        "net_profit_yoy_pct": -0.4,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 73,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "光伏",
          "微型逆变器",
          "户用逆变器",
          "组串逆变器",
          "集中逆变器",
          "模块化逆变器",
          "PowerTitan3.0交流智储平台"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002594",
      "name": "比亚迪",
      "bucket": "新能源汽车",
      "subcategory": "动力电池/储能",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "new_energy_vehicle",
      "rule_child_id": "battery_storage",
      "evidence_level": "medium",
      "root_alias_hits": [
        "新能源汽车",
        "汽车",
        "汽车电子"
      ],
      "child_alias_hits": [
        "储能"
      ],
      "warnings": [],
      "current_issues": "missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "以新能源汽车为主的汽车业务、手机部件及组装业务，二次充电电池及光伏业务，同时利用自身的技术优势积极拓展城市轨道交通业务领域。",
        "product_types": [
          "手机部件",
          "组装及其他产品",
          "汽车",
          "汽车相关产品及其他产品"
        ],
        "product_names": [
          "手机部件",
          "组装及其他产品",
          "汽车",
          "汽车相关产品及其他产品"
        ],
        "business_scope": "锂离子电池以及其他电池、充电器、电子产品、仪器仪表、柔性线路板、五金制品、手机零配件、模具、塑胶制品及其相关附件的生产、销售；货物及技术进出口（不含进口分销）；道路普通货运；3D眼镜、GPS导航产品的研发、生产及销售；作为比亚迪汽车有限公司比亚迪品牌乘用车、电动车的总经销商，从事上述品牌的乘用车、电动车及其零部件的营销、批发和出口，提供售后服务；电池管理系统、换流柜、逆变柜/器、汇流箱、开关柜、储能机组的销售；汽车电子装置研发、销售；新能源汽车关键零部件研发以及上述零部件的关键零件、部件的研发、销售；轨道交通运输设备（含轨道交通车辆、工程机械、各类机电设备、电子设备及零部件、电子电气件、轨道交通信号系统、通信及综合监控系统与设备）的研发、设计、销售、租赁与售后服务（不涉及国营贸易管理商品，涉及配额、许可证管理及其他专项管理的商品，按国家有关规定办理申请）；轨道梁柱的研发、设计、销售；自有物业租赁；广告设计、制作、代理及发布；信息与技术咨询、技术服务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 40.11,
        "net_profit_yoy_pct": -0.55,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.19,
        "net_margin_pct": 0.03,
        "debt_to_assets_pct": 0.71,
        "cfo_to_np": 0.7,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 40.11,
        "net_profit_yoy_pct": -0.55,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 73,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "新能源汽车",
          "动力电池/储能",
          "手机部件",
          "组装及其他产品",
          "汽车",
          "汽车相关产品及其他产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002230",
      "name": "科大讯飞",
      "bucket": "高端装备与工业",
      "subcategory": "工业软件 / 企业软件",
      "priority": "P2",
      "source": "原样本86家待补证据卡队列",
      "reason": "原89家分类样本尚未跑统一轻量证据卡，需要统一主营/产品/财务评分口径。",
      "old_report_status": "原89家分类样本",
      "rule_root_id": "industrial_equipment",
      "rule_child_id": "industrial_software",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "current_issues": "missing_evidence_card；financial_weak",
      "business_evidence": {
        "business_summary": "语音技术相关的计算机软、硬件开发、生产和销售及技术服务。",
        "product_types": [
          "智慧教育",
          "智慧医疗",
          "开放平台",
          "智能硬件",
          "移动互联网产品及服务",
          "智慧城市",
          "运营商",
          "智慧汽车",
          "企业AI解决方案"
        ],
        "product_names": [
          "智慧教育",
          "智慧医疗",
          "开放平台",
          "智能硬件",
          "移动互联网产品及服务",
          "智慧城市",
          "运营商",
          "智慧汽车",
          "企业AI解决方案"
        ],
        "business_scope": "增值电信业务；专业技术人员培训；计算机软、硬件开发、生产和销售及技术服务；系统工程、信息服务；电子产品、计算机通讯设备研发、生产、销售；移动通信设备的研发、销售；二类、三类医疗器械研发、制造与销售；图书、电子出版物销售；进出口业务（国家限定和禁止经营的除外）；安全技术防范工程；商用房及住宅房租赁；物业管理；设计、制作、代理、发布广告。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:48:31",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -1.88,
        "net_profit_yoy_pct": 0.12,
        "revenue_yoy_pct": "",
        "roe_pct": -0.01,
        "gross_margin_pct": 0.39,
        "net_margin_pct": -0.04,
        "debt_to_assets_pct": 0.56,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": -1.88,
        "net_profit_yoy_pct": 0.12,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "高端装备与工业",
          "工业软件 / 企业软件",
          "智慧教育",
          "智慧医疗",
          "开放平台",
          "智能硬件",
          "移动互联网产品及服务",
          "智慧城市"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "原89家分类样本 + 当前210家分类树最佳叶子节点 + AkShare主营/产品口径 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    }
  ]
};
