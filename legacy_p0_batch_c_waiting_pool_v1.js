const LEGACY_P0_BATCH_C_WAITING_POOL_V1 = {
  "generated_at": "2026-06-27 17:13:55",
  "purpose": "P0第三批财报后更新等待池；当前不重写报告，等待新财报后统一更新。",
  "source": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\legacy_p0_update_batches_v1.json",
  "summary": {
    "total": 12,
    "business_ready": 12,
    "financial_ready": 12,
    "market_ready": 12,
    "electronic_materials": 4,
    "power_grid": 6
  },
  "data_errors": {},
  "rows": [
    {
      "execution_order": 21,
      "code": "600188",
      "name": "兖矿能源",
      "mapped_node_id": "power_thermal",
      "mapped_node_name": "火电 / 煤电",
      "mapping_reason": "火电关键词",
      "old_path": "⚡ 电力电网 / 火电 / 煤电",
      "market_cap_yi": 1945.0,
      "queue_score": 78,
      "business_evidence": {
        "business_summary": "煤炭开采及销售、煤化工产品的生产及销售、物流运输业务以及设备制造和电力业务等。",
        "product_types": [
          "动力煤",
          "喷吹煤",
          "焦煤"
        ],
        "product_names": [
          "动力煤",
          "喷吹煤",
          "焦煤"
        ],
        "business_scope": "许可项目：煤炭开采；公共铁路运输；道路货物运输（不含危险货物）；港口经营；特种设备安装改造修理；房地产开发经营；餐饮服务；住宿服务；污水处理及其再生利用；热力生产和供应；检验检测服务；安全生产检验检测；建设工程施工；第一类增值电信业务；第二类增值电信业务。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：货物进出口；工程造价咨询业务；以自有资金从事投资活动；企业管理；社会经济咨询服务；市场调查（不含涉外调查）；矿山机械制造；矿山机械销售；机械设备租赁；通用设备修理；普通机械设备安装服务；金属材料销售；机械电气设备销售；建筑材料销售；木材销售；专用化学产品制造（不含危险化学品）；专用化学产品销售（不含危险化学品）；日用化学产品制造；煤炭及制品销售；涂料制造（不含危险化学品）；涂料销售（不含危险化学品）；润滑油销售；石油制品销售（不含危险化学品）；化工产品销售（不含许可类化工产品）；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；非居住房地产租赁；金属矿石销售；普通货物仓储服务（不含危险化学品等需许可审批的项目）；园林绿化工程施工；游览景区管理；特种作业人员安全技术培训；计量技术服务；企业形象策划；针纺织品销售；塑料制品销售；仪器仪表销售；水泥制品销售；耐火材料生产；耐火材料销售；劳动保护用品销售；办公用品销售；文具用品零售；铁路运输辅助活动；防火封堵材料生产；防火封堵材料销售；电子专用设备制造；电子专用设备销售；软件开发；网络技术服务；网络设备销售；互联网数据服务；广播电视传输设备销售；通讯设备销售；机动车修理和维护；物业管理；人力资源服务（不含职业中介活动、劳务派遣服务）；信息系统集成服务；信息系统运行服务；工业自动控制系统装置销售；数字视频监控系统销售；互联网设备销售。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 17:12:30",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 52.44,
        "net_profit_yoy_pct": 0.42,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.26,
        "net_margin_pct": 0.15,
        "debt_to_assets_pct": 0.62,
        "cfo_to_np": 1.18,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 17.98,
        "trading_days": 114,
        "ret_5d_pct": -7.22,
        "ret_10d_pct": -22.16,
        "ret_20d_pct": -16.37,
        "ret_60d_pct": -11.82,
        "volume_ratio_5d_vs_20d": 0.74,
        "latest_amount": 708182508.03,
        "strength_score": 18,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮没有从公告、年报、互动问答等强证据源确认具体上下游公司；不写入推测对象。",
        "candidate_count": 0,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "已预留，等待同组行情排序",
        "market_role": "等待行情强度计算后判定",
        "concept_note": "第一批P0纠偏样本"
      },
      "remaining_gaps": [
        "等待新财报",
        "合作对象证据待后续批量解析",
        "V2报告暂缓"
      ],
      "workflow_status": "等待新财报后统一更新",
      "replace_rule": "批次C只建立等待池；旧报告低权重保留，不生成V2草稿，不替换正式入口。",
      "old_report_path": "reports/兖矿能源.html",
      "waiting_reason": "当前最新字段期为 2026-03-31。本批次先进入财报后更新池，等新季报/半年报集中披露后再统一重算净利润、同比、改善状态和V2深度报告。"
    },
    {
      "execution_order": 22,
      "code": "000988",
      "name": "华工科技",
      "mapped_node_id": "advanced_electronic_material",
      "mapped_node_name": "电子材料",
      "mapping_reason": "电子材料关键词",
      "old_path": "🔥 AI算力产业链 / 电子元器件 / 通信/电子元器件",
      "market_cap_yi": 1785.0,
      "queue_score": 78,
      "business_evidence": {
        "business_summary": "激光设备的生产与销售、激光防伪标识的生产与销售、敏感电子元器件的生产与销售、光通信电子元器件的生产与销售、计算机软件与信息系统集成等技术及产品的开发、研制、销售等业务。",
        "product_types": [
          "激光加工装备及智能制造产线",
          "激光全息膜类系列产品",
          "光电器件系列产品",
          "敏感元器件"
        ],
        "product_names": [
          "超高速光模块",
          "铜连接模块",
          "智能车载光",
          "卫星通讯光模块"
        ],
        "business_scope": "提供激光智能装备、激光自动化产线、激光全息综合防伪产品、传感器、汽车电子产品、光通信产品的研发、生产及销售；提供产品信息追溯系统的解决方案；提供医疗装备的研发、生产、销售及服务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 17:12:30",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-27",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 6.44,
        "net_profit_yoy_pct": 0.56,
        "revenue_yoy_pct": "",
        "roe_pct": 0.06,
        "gross_margin_pct": 0.2,
        "net_margin_pct": 0.15,
        "debt_to_assets_pct": 0.49,
        "cfo_to_np": -1.75,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 160.94,
        "trading_days": 114,
        "ret_5d_pct": -9.36,
        "ret_10d_pct": 7.11,
        "ret_20d_pct": -2.67,
        "ret_60d_pct": 47.22,
        "volume_ratio_5d_vs_20d": 0.85,
        "latest_amount": 11014260997.05,
        "strength_score": 39,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮没有从公告、年报、互动问答等强证据源确认具体上下游公司；不写入推测对象。",
        "candidate_count": 0,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "已预留，等待同组行情排序",
        "market_role": "等待行情强度计算后判定",
        "concept_note": "第一批P0纠偏样本"
      },
      "remaining_gaps": [
        "等待新财报",
        "合作对象证据待后续批量解析",
        "V2报告暂缓"
      ],
      "workflow_status": "等待新财报后统一更新",
      "replace_rule": "批次C只建立等待池；旧报告低权重保留，不生成V2草稿，不替换正式入口。",
      "old_report_path": "reports/华工科技.html",
      "waiting_reason": "当前最新字段期为 2026-03-31。本批次先进入财报后更新池，等新季报/半年报集中披露后再统一重算净利润、同比、改善状态和V2深度报告。"
    },
    {
      "execution_order": 23,
      "code": "001309",
      "name": "德明利",
      "mapped_node_id": "advanced_electronic_material",
      "mapped_node_name": "电子材料",
      "mapping_reason": "电子材料关键词",
      "old_path": "🔥 AI算力产业链 / 电子元器件 / 通信/电子元器件",
      "market_cap_yi": 1615.0,
      "queue_score": 78,
      "business_evidence": {
        "business_summary": "提供专业存储控制芯片及解决方案。",
        "product_types": [
          "固态硬盘",
          "嵌入式存储",
          "内存条",
          "移动存储"
        ],
        "product_names": [
          "固态硬盘",
          "嵌入式存储",
          "内存条",
          "存储卡模组",
          "存储盘模组"
        ],
        "business_scope": "一般经营项目：计算机系统集成、计算机网络技术、计算机网络软件、计算机应用软件的研发、技术咨询；电脑软件、软件产品、计算机软硬件、电子产品、集成电路软硬件的研发、批发、技术咨询、技术服务、佣金代理（不含拍卖）、进出口及相关配套业务（不涉及国营贸易管理商品，涉及配额、许可证管理及其它专项规定管理的商品，按国家有关规定办理申请）；转让自行研发的技术成果；从事货物及技术进出口（不含分销、国家专营专控商品）；从事上述产品的售后服务。以上经营范围不含国家规定实施准入特别管理措施的项目，涉及备案许可资质的需取得相关证件后方可经营。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）许可经营项目：计算机系统集成、计算机软硬件、集成电路和模块、电子设备、存储产品等电子产品的封装、测试、生产和销售。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 17:12:30",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 33.46,
        "net_profit_yoy_pct": 49.43,
        "revenue_yoy_pct": "",
        "roe_pct": 0.68,
        "gross_margin_pct": 0.57,
        "net_margin_pct": 0.44,
        "debt_to_assets_pct": 0.64,
        "cfo_to_np": -0.07,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 951.0,
        "trading_days": 114,
        "ret_5d_pct": 33.57,
        "ret_10d_pct": 50.39,
        "ret_20d_pct": 44.67,
        "ret_60d_pct": 149.29,
        "volume_ratio_5d_vs_20d": 1.41,
        "latest_amount": 19976189343.81,
        "strength_score": 100,
        "strength_label": "强势",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "强势"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮没有从公告、年报、互动问答等强证据源确认具体上下游公司；不写入推测对象。",
        "candidate_count": 0,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "已预留，等待同组行情排序",
        "market_role": "等待行情强度计算后判定",
        "concept_note": "第一批P0纠偏样本"
      },
      "remaining_gaps": [
        "等待新财报",
        "合作对象证据待后续批量解析",
        "V2报告暂缓"
      ],
      "workflow_status": "等待新财报后统一更新",
      "replace_rule": "批次C只建立等待池；旧报告低权重保留，不生成V2草稿，不替换正式入口。",
      "old_report_path": "reports/德明利.html",
      "waiting_reason": "当前最新字段期为 2026-03-31。本批次先进入财报后更新池，等新季报/半年报集中披露后再统一重算净利润、同比、改善状态和V2深度报告。"
    },
    {
      "execution_order": 24,
      "code": "302132",
      "name": "中航成飞",
      "mapped_node_id": "advanced_electronic_material",
      "mapped_node_name": "电子材料",
      "mapping_reason": "电子材料关键词",
      "old_path": "🔥 AI算力产业链 / 电子元器件 / 通信/电子元器件",
      "market_cap_yi": 1585.0,
      "queue_score": 78,
      "business_evidence": {
        "business_summary": "航空产品研发、制造、销售、维修与服务保障。",
        "product_types": [
          "航空产品"
        ],
        "product_names": [
          "航空防务装备",
          "民用航空产品",
          "智能测控产品"
        ],
        "business_scope": "一般项目：机械设备研发；机械设备销售；机械电气设备制造；机械电气设备销售；机械零件、零部件加工；机械零件、零部件销售；试验机制造；试验机销售；衡器制造；衡器销售；电子元器件制造；电子元器件零售；电子元器件批发；仪器仪表制造；仪器仪表销售；智能仪器仪表制造；智能仪器仪表销售；其他通用仪器制造；航空运输设备销售；通用设备制造（不含特种设备制造）；电子专用设备制造；专用设备制造（不含许可类专业设备制造）；电气设备销售；工业自动控制系统装置制造；工业自动控制系统装置销售；物料搬运装备制造；物料搬运装备销售；智能物料搬运装备销售；智能基础制造装备制造；智能无人飞行器制造；智能无人飞行器销售；工业机器人制造；工业机器人销售；智能机器人的研发；智能机器人销售；软件开发；软件销售；人工智能应用软件开发；信息系统集成服务；人工智能行业应用系统集成服务；物联网设备制造；物联网设备销售；物联网技术研发；物联网技术服务；物联网应用服务；智能车载设备制造；智能车载设备销售；智能仓储装备销售；轴承制造；轴承销售；普通阀门和旋塞制造（不含特种设备制造）；泵及真空设备制造；泵及真空设备销售；新材料技术研发；合成材料制造（不含危险化学品）；货物进出口；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；企业总部管理；企业管理咨询；企业管理（除依法须经批准的项目外，凭营业执照依法自主开展经营活动。）许可项目：民用航空器（发动机、螺旋桨）生产；民用航空器零部件设计和生产；民用航空器维修。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 17:12:30",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.81,
        "net_profit_yoy_pct": 0.23,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.1,
        "net_margin_pct": 0.03,
        "debt_to_assets_pct": 0.8,
        "cfo_to_np": 12.78,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 57.08,
        "trading_days": 114,
        "ret_5d_pct": -3.79,
        "ret_10d_pct": -0.27,
        "ret_20d_pct": -7.63,
        "ret_60d_pct": -15.79,
        "volume_ratio_5d_vs_20d": 0.9,
        "latest_amount": 440255484.74,
        "strength_score": 36,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮没有从公告、年报、互动问答等强证据源确认具体上下游公司；不写入推测对象。",
        "candidate_count": 0,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "已预留，等待同组行情排序",
        "market_role": "等待行情强度计算后判定",
        "concept_note": "第一批P0纠偏样本"
      },
      "remaining_gaps": [
        "等待新财报",
        "合作对象证据待后续批量解析",
        "V2报告暂缓"
      ],
      "workflow_status": "等待新财报后统一更新",
      "replace_rule": "批次C只建立等待池；旧报告低权重保留，不生成V2草稿，不替换正式入口。",
      "old_report_path": "reports/中航成飞.html",
      "waiting_reason": "当前最新字段期为 2026-03-31。本批次先进入财报后更新池，等新季报/半年报集中披露后再统一重算净利润、同比、改善状态和V2深度报告。"
    },
    {
      "execution_order": 25,
      "code": "001280",
      "name": "中国铀业",
      "mapped_node_id": "strategic_minor_metals",
      "mapped_node_name": "稀有小金属 / 战略金属",
      "mapping_reason": "稀有小金属/战略金属关键词",
      "old_path": "💎 有色金属与新材料 / 稀有金属 / 有色采选",
      "market_cap_yi": 1523.0,
      "queue_score": 78,
      "business_evidence": {
        "business_summary": "天然铀资源的采冶、销售及贸易，以及独居石、铀钼、钽铌等放射性共伴生矿产资源综合利用及产品销售。",
        "product_types": [
          "天然铀",
          "氯化稀土",
          "四钼酸铵",
          "五氧化二钽",
          "五氧化二铌"
        ],
        "product_names": [
          "天然铀",
          "氯化稀土",
          "四钼酸铵",
          "五氧化二钽",
          "五氧化二铌"
        ],
        "business_scope": "国外铀资源的勘探、勘察设计、工程建设的投资与管理；进出口业务；技术开发、技术服务、技术咨询；采选稀有稀土金属矿、铀矿、贵金属矿（仅限外埠经营）。（市场主体依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事国家和本市产业政策禁止和限制类项目的经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 17:12:30",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.36,
        "net_profit_yoy_pct": 0.53,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.18,
        "net_margin_pct": 0.07,
        "debt_to_assets_pct": 0.41,
        "cfo_to_np": 3.82,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 67.2,
        "trading_days": 114,
        "ret_5d_pct": -8.76,
        "ret_10d_pct": -4.04,
        "ret_20d_pct": -10.29,
        "ret_60d_pct": -15.05,
        "volume_ratio_5d_vs_20d": 0.86,
        "latest_amount": 505093095.01,
        "strength_score": 29,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮没有从公告、年报、互动问答等强证据源确认具体上下游公司；不写入推测对象。",
        "candidate_count": 0,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "已预留，等待同组行情排序",
        "market_role": "等待行情强度计算后判定",
        "concept_note": "第一批P0纠偏样本"
      },
      "remaining_gaps": [
        "等待新财报",
        "合作对象证据待后续批量解析",
        "V2报告暂缓"
      ],
      "workflow_status": "等待新财报后统一更新",
      "replace_rule": "批次C只建立等待池；旧报告低权重保留，不生成V2草稿，不替换正式入口。",
      "old_report_path": "reports/中国铀业.html",
      "waiting_reason": "当前最新字段期为 2026-03-31。本批次先进入财报后更新池，等新季报/半年报集中披露后再统一重算净利润、同比、改善状态和V2深度报告。"
    },
    {
      "execution_order": 26,
      "code": "601991",
      "name": "大唐发电",
      "mapped_node_id": "power_grid_uhv",
      "mapped_node_name": "电网设备 / 特高压",
      "mapping_reason": "电网/特高压关键词",
      "old_path": "⚡ 电力电网 / 电网设备 / 特高压/直流输电",
      "market_cap_yi": 1521.0,
      "queue_score": 78,
      "business_evidence": {
        "business_summary": "以火电为主的发电。",
        "product_types": [
          "电力销售",
          "热力销售"
        ],
        "product_names": [
          "电力销售",
          "热力销售"
        ],
        "business_scope": "建设、经营电厂；销售电力、热力；电力设备的检修调试；电力技术服务；煤炭生产、销售等。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 17:12:30",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 34.46,
        "net_profit_yoy_pct": 0.29,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.2,
        "net_margin_pct": 0.11,
        "debt_to_assets_pct": 0.69,
        "cfo_to_np": 2.49,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 7.32,
        "trading_days": 114,
        "ret_5d_pct": -10.95,
        "ret_10d_pct": -8.39,
        "ret_20d_pct": -8.5,
        "ret_60d_pct": 63.39,
        "volume_ratio_5d_vs_20d": 0.94,
        "latest_amount": 5256243172.72,
        "strength_score": 29,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮没有从公告、年报、互动问答等强证据源确认具体上下游公司；不写入推测对象。",
        "candidate_count": 0,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "已预留，等待同组行情排序",
        "market_role": "等待行情强度计算后判定",
        "concept_note": "第一批P0纠偏样本"
      },
      "remaining_gaps": [
        "等待新财报",
        "合作对象证据待后续批量解析",
        "V2报告暂缓"
      ],
      "workflow_status": "等待新财报后统一更新",
      "replace_rule": "批次C只建立等待池；旧报告低权重保留，不生成V2草稿，不替换正式入口。",
      "old_report_path": "reports/大唐发电.html",
      "waiting_reason": "当前最新字段期为 2026-03-31。本批次先进入财报后更新池，等新季报/半年报集中披露后再统一重算净利润、同比、改善状态和V2深度报告。"
    },
    {
      "execution_order": 27,
      "code": "002028",
      "name": "思源电气",
      "mapped_node_id": "power_grid_uhv",
      "mapped_node_name": "电网设备 / 特高压",
      "mapping_reason": "电网/特高压关键词",
      "old_path": "⚡ 电力电网 / 电网设备 / 电气设备",
      "market_cap_yi": 1488.0,
      "queue_score": 78,
      "business_evidence": {
        "business_summary": "输配电设备及其核心零部件的研发、设计、制造、销售及服务与工程总包。",
        "product_types": [
          "开关类业务",
          "变压器类业务",
          "保护及自动化类业务",
          "电力电子类业务",
          "EPC类业务",
          "储能系统及元件类业务"
        ],
        "product_names": [
          "1000kV及以下GIS和GIL",
          "800kV及以下SF6断路器和隔离开关",
          "500kV及以下直流断路器",
          "低压电器",
          "500kV及以下电流互感器",
          "1000kV及以下电压互感器",
          "±800kV及以下交直流套管",
          "750kV及以下变压器",
          "66kV及以下中性点接地成套装置",
          "1000kV及以下电力电容器成套装置",
          "1000kV及以下变电站继电保护设备和监控系统",
          "油色谱在线监测系统",
          "动态无功补偿系统",
          "高压有源滤波系统"
        ],
        "business_scope": "电力自动化保护设备，电气设备，电力监测设备，电力自动化实验设备，光电设备，仪器、仪表、软件的研究、开发、生产和销售，电力自动化和电力监测领域的“四技”服务，承包与其实力、规模、业绩相适应的国外工程项目，对外派遣实施上述境外工程所需的劳务人员，实业投资，企业管理服务，自有设备租赁，从事货物和技术的进出口业务。(依法须经批准的项目，经相关部门批准后方可开展经营活动)",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 17:12:30",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 5.72,
        "net_profit_yoy_pct": 0.23,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.29,
        "net_margin_pct": 0.13,
        "debt_to_assets_pct": 0.46,
        "cfo_to_np": -0.84,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 175.12,
        "trading_days": 114,
        "ret_5d_pct": -7.93,
        "ret_10d_pct": 1.81,
        "ret_20d_pct": -14.53,
        "ret_60d_pct": -15.9,
        "volume_ratio_5d_vs_20d": 1.02,
        "latest_amount": 2865635455.24,
        "strength_score": 23,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮没有从公告、年报、互动问答等强证据源确认具体上下游公司；不写入推测对象。",
        "candidate_count": 0,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "已预留，等待同组行情排序",
        "market_role": "等待行情强度计算后判定",
        "concept_note": "第一批P0纠偏样本"
      },
      "remaining_gaps": [
        "等待新财报",
        "合作对象证据待后续批量解析",
        "V2报告暂缓"
      ],
      "workflow_status": "等待新财报后统一更新",
      "replace_rule": "批次C只建立等待池；旧报告低权重保留，不生成V2草稿，不替换正式入口。",
      "old_report_path": "reports/思源电气.html",
      "waiting_reason": "当前最新字段期为 2026-03-31。本批次先进入财报后更新池，等新季报/半年报集中披露后再统一重算净利润、同比、改善状态和V2深度报告。"
    },
    {
      "execution_order": 28,
      "code": "605117",
      "name": "德业股份",
      "mapped_node_id": "power_grid_uhv",
      "mapped_node_name": "电网设备 / 特高压",
      "mapping_reason": "电网/特高压关键词",
      "old_path": "⚡ 电力电网 / 电网设备 / 电气设备",
      "market_cap_yi": 1314.0,
      "queue_score": 78,
      "business_evidence": {
        "business_summary": "新能源业务、环境电器业务。",
        "product_types": [
          "新能源业务",
          "环境电器业务"
        ],
        "product_names": [
          "储能逆变器",
          "组串式逆变器",
          "微型逆变器",
          "储能电池包",
          "蒸发器",
          "冷凝器",
          "家用除湿机",
          "无雾加湿器",
          "工业除湿机",
          "非标准除湿机",
          "太阳能空调"
        ],
        "business_scope": "热交换器、制冷设备、除湿设备、空气净化设备、水净化设备、新风系统设备、太阳能空调、逆变器、变频水泵、电子智能控制器的研发、制造、销售；自有房屋租赁；自营和代理各类货物和技术的进出口，但国家限定或禁止的技术和货物除外（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 17:12:30",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 11.87,
        "net_profit_yoy_pct": 0.68,
        "revenue_yoy_pct": "",
        "roe_pct": 0.11,
        "gross_margin_pct": 0.41,
        "net_margin_pct": 0.27,
        "debt_to_assets_pct": 0.47,
        "cfo_to_np": 1.54,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 96.49,
        "trading_days": 114,
        "ret_5d_pct": -6.5,
        "ret_10d_pct": -4.65,
        "ret_20d_pct": -20.79,
        "ret_60d_pct": 5.17,
        "volume_ratio_5d_vs_20d": 1.07,
        "latest_amount": 1529327433.68,
        "strength_score": 16,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮没有从公告、年报、互动问答等强证据源确认具体上下游公司；不写入推测对象。",
        "candidate_count": 0,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "已预留，等待同组行情排序",
        "market_role": "等待行情强度计算后判定",
        "concept_note": "第一批P0纠偏样本"
      },
      "remaining_gaps": [
        "等待新财报",
        "合作对象证据待后续批量解析",
        "V2报告暂缓"
      ],
      "workflow_status": "等待新财报后统一更新",
      "replace_rule": "批次C只建立等待池；旧报告低权重保留，不生成V2草稿，不替换正式入口。",
      "old_report_path": "reports/德业股份.html",
      "waiting_reason": "当前最新字段期为 2026-03-31。本批次先进入财报后更新池，等新季报/半年报集中披露后再统一重算净利润、同比、改善状态和V2深度报告。"
    },
    {
      "execution_order": 29,
      "code": "603296",
      "name": "华勤技术",
      "mapped_node_id": "advanced_electronic_material",
      "mapped_node_name": "电子材料",
      "mapping_reason": "电子材料关键词",
      "old_path": "🔥 AI算力产业链 / 电子元器件 / 通信/电子元器件",
      "market_cap_yi": 1219.0,
      "queue_score": 78,
      "business_evidence": {
        "business_summary": "智能硬件产品的研发设计、生产制造和运营服务。",
        "product_types": [
          "移动终端业务",
          "个人电脑业务",
          "数据中心业务",
          "AIoT业务",
          "汽车电子",
          "机器人",
          "软件"
        ],
        "product_names": [
          "智能手机",
          "平板电脑及智能穿戴产品",
          "个人电脑产品",
          "数据中心产品",
          "AIoT产品",
          "汽车电子产品",
          "机器人产品"
        ],
        "business_scope": "一般项目：从事计算机软件领域内的技术开发、技术转让、技术咨询、技术服务，通讯产品及相关软硬件的设计、销售；货物进出口；技术进出口。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 17:12:30",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 10.7,
        "net_profit_yoy_pct": 0.26,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.09,
        "net_margin_pct": 0.03,
        "debt_to_assets_pct": 0.74,
        "cfo_to_np": 0.54,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 69.25,
        "trading_days": 114,
        "ret_5d_pct": -13.87,
        "ret_10d_pct": -6.42,
        "ret_20d_pct": -7.5,
        "ret_60d_pct": 15.79,
        "volume_ratio_5d_vs_20d": 1.16,
        "latest_amount": 2310521495.3,
        "strength_score": 28,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮没有从公告、年报、互动问答等强证据源确认具体上下游公司；不写入推测对象。",
        "candidate_count": 0,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "已预留，等待同组行情排序",
        "market_role": "等待行情强度计算后判定",
        "concept_note": "第一批P0纠偏样本"
      },
      "remaining_gaps": [
        "等待新财报",
        "合作对象证据待后续批量解析",
        "V2报告暂缓"
      ],
      "workflow_status": "等待新财报后统一更新",
      "replace_rule": "批次C只建立等待池；旧报告低权重保留，不生成V2草稿，不替换正式入口。",
      "old_report_path": "reports/华勤技术.html",
      "waiting_reason": "当前最新字段期为 2026-03-31。本批次先进入财报后更新池，等新季报/半年报集中披露后再统一重算净利润、同比、改善状态和V2深度报告。"
    },
    {
      "execution_order": 30,
      "code": "600089",
      "name": "特变电工",
      "mapped_node_id": "power_grid_uhv",
      "mapped_node_name": "电网设备 / 特高压",
      "mapping_reason": "电网/特高压关键词",
      "old_path": "⚡ 电力电网 / 电网设备 / 电气设备",
      "market_cap_yi": 1178.0,
      "queue_score": 78,
      "business_evidence": {
        "business_summary": "输变电业务、新能源业务、能源业务及新材料业务。",
        "product_types": [
          "变压器",
          "电抗器",
          "电线电缆",
          "多晶硅相关产品",
          "煤炭产品",
          "黄金产品",
          "铝电子新材料",
          "铝及合金制品",
          "电力产品",
          "输变电成套工程",
          "太阳能及风能系统工程"
        ],
        "product_names": [
          "变压器",
          "电抗器",
          "电线电缆",
          "多晶硅相关产品",
          "煤炭产品",
          "黄金产品",
          "铝电子新材料",
          "铝及合金制品",
          "电力产品",
          "输变电成套工程",
          "太阳能及风能系统工程"
        ],
        "business_scope": "变压器、电抗器、互感器、电线电缆及其他电气机械器材的制造、销售、检修、安装及回收；机械设备、电子产品的生产销售；五金交电的销售；硅及相关产品的制造、研发及相关技术咨询；矿产品的加工；新能源技术、建筑环保技术、水资源利用技术及相关工程项目的研发及咨询；太阳能系统组配件、环保设备的制造、安装及相关技术咨询；太阳能光伏离网和并网及风光互补系统、柴油机光互补系统及其他新能源系列工程的设计、建设、安装及维护；太阳能集中供热工程的设计、安装；太阳能光热产品的设计、制造；承包境外机电行业输变电、水电、火电站工程和国内、国际招标工程，上述境外工程所属的设备、材料出口，对外派遣实施上述境外工程所需的劳务人员；进口钢材经营；一般货物和技术的进出口；电力工程施工总承包特级资质、电力行业甲级资质，可承接电力各等级工程施工总承包、工程总承包和项目管理业务；可从事资质证书许可范围内相应的建设工程总承包业务以及项目管理和相关的技术与管理服务；房屋出租；水的生产和供应（限下属分支机构经营）；电力供应；热力生产和供应；货物运输代理服务及相关咨询；花草培育、销售。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 17:12:30",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 21.41,
        "net_profit_yoy_pct": 0.13,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.21,
        "net_margin_pct": 0.09,
        "debt_to_assets_pct": 0.57,
        "cfo_to_np": 0.25,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 22.45,
        "trading_days": 114,
        "ret_5d_pct": -3.73,
        "ret_10d_pct": -1.32,
        "ret_20d_pct": -13.35,
        "ret_60d_pct": -20.53,
        "volume_ratio_5d_vs_20d": 1.24,
        "latest_amount": 3089989507.07,
        "strength_score": 32,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮没有从公告、年报、互动问答等强证据源确认具体上下游公司；不写入推测对象。",
        "candidate_count": 0,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "已预留，等待同组行情排序",
        "market_role": "等待行情强度计算后判定",
        "concept_note": "第一批P0纠偏样本"
      },
      "remaining_gaps": [
        "等待新财报",
        "合作对象证据待后续批量解析",
        "V2报告暂缓"
      ],
      "workflow_status": "等待新财报后统一更新",
      "replace_rule": "批次C只建立等待池；旧报告低权重保留，不生成V2草稿，不替换正式入口。",
      "old_report_path": "reports/特变电工.html",
      "waiting_reason": "当前最新字段期为 2026-03-31。本批次先进入财报后更新池，等新季报/半年报集中披露后再统一重算净利润、同比、改善状态和V2深度报告。"
    },
    {
      "execution_order": 31,
      "code": "600886",
      "name": "国投电力",
      "mapped_node_id": "power_thermal",
      "mapped_node_name": "火电 / 煤电",
      "mapping_reason": "火电关键词",
      "old_path": "⚡ 电力电网 / 发电运营 / 火电/热电",
      "market_cap_yi": 1046.0,
      "queue_score": 78,
      "business_evidence": {
        "business_summary": "各类型能源电力项目的全生命周期投资、开发、建设与运营管理。",
        "product_types": [
          "电力"
        ],
        "product_names": [
          "电力"
        ],
        "business_scope": "投资建设、经营管理以电力生产为主的能源项目；开发及经营新能源项目、高新技术、环保产业；开发和经营电力配套产品及信息、咨询服务。（市场主体依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事国家和本市产业政策禁止和限制类项目的经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 17:12:30",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 38.82,
        "net_profit_yoy_pct": 0.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.45,
        "net_margin_pct": 0.31,
        "debt_to_assets_pct": 0.6,
        "cfo_to_np": 1.77,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 13.06,
        "trading_days": 114,
        "ret_5d_pct": -0.08,
        "ret_10d_pct": -5.16,
        "ret_20d_pct": -5.43,
        "ret_60d_pct": -10.79,
        "volume_ratio_5d_vs_20d": 0.88,
        "latest_amount": 452059681.53,
        "strength_score": 42,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮没有从公告、年报、互动问答等强证据源确认具体上下游公司；不写入推测对象。",
        "candidate_count": 0,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "已预留，等待同组行情排序",
        "market_role": "等待行情强度计算后判定",
        "concept_note": "第一批P0纠偏样本"
      },
      "remaining_gaps": [
        "等待新财报",
        "合作对象证据待后续批量解析",
        "V2报告暂缓"
      ],
      "workflow_status": "等待新财报后统一更新",
      "replace_rule": "批次C只建立等待池；旧报告低权重保留，不生成V2草稿，不替换正式入口。",
      "old_report_path": "reports/国投电力.html",
      "waiting_reason": "当前最新字段期为 2026-03-31。本批次先进入财报后更新池，等新季报/半年报集中披露后再统一重算净利润、同比、改善状态和V2深度报告。"
    },
    {
      "execution_order": 32,
      "code": "601869",
      "name": "长飞光纤",
      "mapped_node_id": "comm_optical_infra",
      "mapped_node_name": "光通信基础设施",
      "mapping_reason": "光通信基础设施关键词",
      "old_path": "🔥 AI算力产业链 / 光通信/CPO光互连 / 光纤光缆",
      "market_cap_yi": 3904.0,
      "queue_score": 66,
      "business_evidence": {
        "business_summary": "研究、开发、生产和销售光纤预制棒、光纤、光缆及相关产品。",
        "product_types": [
          "光传输产品",
          "光互联组件"
        ],
        "product_names": [
          "光纤预制棒",
          "光纤",
          "光缆及漏泄电缆",
          "射频电缆",
          "光器件",
          "光模块",
          "有源光缆",
          "无源预端接跳线",
          "数通高速铜缆"
        ],
        "business_scope": "研究、开发、生产和销售预制棒、光纤、光缆、通信线缆、特种线缆及器件、附件、组件和材料,专用设备以及通信产品的制造，提供上述产品的工程及技术服务。（国家有专项规定的项目，经审批后方可经营）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 17:12:30",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 5.85,
        "net_profit_yoy_pct": 2.26,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.42,
        "net_margin_pct": 0.16,
        "debt_to_assets_pct": 0.49,
        "cfo_to_np": 1.06,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 543.0,
        "trading_days": 114,
        "ret_5d_pct": 15.15,
        "ret_10d_pct": 22.71,
        "ret_20d_pct": 46.54,
        "ret_60d_pct": 97.99,
        "volume_ratio_5d_vs_20d": 1.04,
        "latest_amount": 8604797385.86,
        "strength_score": 100,
        "strength_label": "强势",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 17:12:30",
        "status": "强势"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮没有从公告、年报、互动问答等强证据源确认具体上下游公司；不写入推测对象。",
        "candidate_count": 0,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "已预留，等待同组行情排序",
        "market_role": "等待行情强度计算后判定龙头/补涨",
        "concept_note": "光通信基础设施纠偏样本"
      },
      "remaining_gaps": [
        "等待新财报",
        "合作对象证据待后续批量解析",
        "V2报告暂缓"
      ],
      "workflow_status": "等待新财报后统一更新",
      "replace_rule": "批次C只建立等待池；旧报告低权重保留，不生成V2草稿，不替换正式入口。",
      "old_report_path": "reports/长飞光纤.html",
      "waiting_reason": "当前最新字段期为 2026-03-31。本批次先进入财报后更新池，等新季报/半年报集中披露后再统一重算净利润、同比、改善状态和V2深度报告。"
    }
  ]
};
