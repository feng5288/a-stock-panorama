const LEGACY_P0_BATCH_A_WORKBENCH_V1 = {
  "generated_at": "2026-06-27 16:52:51",
  "purpose": "P0第一批10家公司V2补证据工作台，用于生成深度报告前检查主营、财务、合作对象和行情强度缺口。",
  "source": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\legacy_p0_update_batches_v1.json",
  "business_data_note": "主营/产品字段来自 AkShare stock_zyjs_ths 的同花顺公开资料口径；后续可替换为年报/公告解析源。",
  "financial_data_note": "财务字段来自 BaoStock 免费季度财务接口；空值代表接口未取到，不解释为零。",
  "partner_data_note": "没有明确公开证据的客户/供应商/合作对象不写具体公司名。",
  "market_strength_note": "行情强度来自 BaoStock 日线后复权价格，计算5/10/20/60日涨跌、5日对20日量能比，并在第一批同节点公司内排序。单样本节点只做个股强度观察，不直接认定板块龙头。",
  "data_errors": {},
  "summary": {
    "total": 10,
    "business_ready": 10,
    "financial_ready": 10,
    "market_ready": 10,
    "ready_to_rewrite": 4,
    "partner_confirmed": 4,
    "partner_pending": 6,
    "market_pending": 0
  },
  "rows": [
    {
      "execution_order": 1,
      "code": "002484",
      "name": "江海股份",
      "mapped_node_id": "passive_components",
      "mapped_node_name": "电子元器件/被动元器件",
      "mapping_reason": "公司名纠偏：铝电解/薄膜/超级电容",
      "old_path": "🔥 AI算力产业链 / 光通信/CPO光互连 / 光纤光缆",
      "market_cap_yi": 919.0,
      "queue_score": 140,
      "business_evidence": {
        "business_summary": "电容器及其材料、配件的研发、生产、销售和服务。",
        "product_types": [
          "铝电解电容",
          "薄膜电容",
          "超级电容",
          "电极箔"
        ],
        "product_names": [
          "铝电解电容",
          "薄膜电容",
          "超级电容",
          "电极箔"
        ],
        "business_scope": "生产加工电容器及其材料、配件、电容器设备、仪器、仪表及其配件；销售自产产品并提供相关的售后服务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:13:48",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.65,
        "net_profit_yoy_pct": 0.07,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.26,
        "net_margin_pct": 0.12,
        "debt_to_assets_pct": 0.26,
        "cfo_to_np": 1.21,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:13:48",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 109.0,
        "trading_days": 114,
        "ret_5d_pct": 0.87,
        "ret_10d_pct": 31.64,
        "ret_20d_pct": 47.16,
        "ret_60d_pct": 293.18,
        "volume_ratio_5d_vs_20d": 0.9,
        "latest_amount": 6470861323.67,
        "strength_score": 100,
        "strength_label": "强势",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:21:23",
        "status": "强势"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "有强证据入口，待全文确认",
        "note": "发现 13 条公告/互动问答候选线索，但尚未解析全文确认具体合作对象，暂不写入公司名。",
        "candidate_count": 13,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "强势",
        "market_role": "本组补涨观察",
        "concept_note": "被动元器件纠偏样本",
        "peer_rank": 2,
        "peer_count": 3,
        "peer_top_score": 100
      },
      "remaining_gaps": [
        "明确披露的上下游合作对象"
      ],
      "workflow_status": "核心证据与行情已补，待合作对象后重写",
      "replace_rule": "旧报告继续低权重保留；只有主营证据、财务前置字段、合作对象口径和行情强度字段完成后，才生成并挂载V2深度报告。",
      "old_report_path": "reports/江海股份.html",
      "v2_draft_href": ""
    },
    {
      "execution_order": 2,
      "code": "000636",
      "name": "风华高科",
      "mapped_node_id": "passive_components",
      "mapped_node_name": "电子元器件/被动元器件",
      "mapping_reason": "公司名纠偏：MLCC/被动元器件",
      "old_path": "🔥 AI算力产业链 / 光通信/CPO光互连 / 光纤光缆",
      "market_cap_yi": 863.0,
      "queue_score": 140,
      "business_evidence": {
        "business_summary": "研制、生产、销售电子元器件及电子材料等。",
        "product_types": [
          "电容",
          "电阻",
          "电感",
          "超级电容",
          "滤波器",
          "电子材料",
          "结构件"
        ],
        "product_names": [
          "MLCC",
          "瓷介电容",
          "铝电解电容",
          "厚膜电阻",
          "薄膜电阻",
          "合金电阻",
          "压敏电阻",
          "热敏电阻",
          "叠层电感",
          "功率电感",
          "绕线电感",
          "超级电容器",
          "陶瓷滤波器",
          "陶瓷谐振器",
          "电子材料",
          "结构件",
          "陶瓷熔断器",
          "陶瓷基板"
        ],
        "business_scope": "研究、开发、生产、销售各类型高科技新型电子元器件、集成电路、电子材料、电子专用设备仪器及计算机网络设备。高新技术转让、咨询服务。经营本企业自产机电产品。成套设备及相关技术的出口和生产、科研所需原辅材料、机械设备、仪器仪表、备品备件、零配件及技术的进口（按粤外经贸进字［1999］381号文经营）。经营国内贸易（法律、行政法规、国务院决定禁止的，不得经营；法律、行政法规、国务院决定未规定许可的，自主选择经营项目开展经营活动）。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:13:48",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.89,
        "net_profit_yoy_pct": 0.37,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.17,
        "net_margin_pct": 0.06,
        "debt_to_assets_pct": 0.23,
        "cfo_to_np": -2.44,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:13:48",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 78.5,
        "trading_days": 114,
        "ret_5d_pct": 5.23,
        "ret_10d_pct": 22.08,
        "ret_20d_pct": 61.39,
        "ret_60d_pct": 300.31,
        "volume_ratio_5d_vs_20d": 0.82,
        "latest_amount": 11187004535.9,
        "strength_score": 100,
        "strength_label": "强势",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:21:23",
        "status": "强势"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "有强证据入口，待全文确认",
        "note": "发现 16 条公告/互动问答候选线索，但尚未解析全文确认具体合作对象，暂不写入公司名。",
        "candidate_count": 16,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "强势",
        "market_role": "本组阶段领涨",
        "concept_note": "被动元器件纠偏样本",
        "peer_rank": 1,
        "peer_count": 3,
        "peer_top_score": 100
      },
      "remaining_gaps": [
        "明确披露的上下游合作对象"
      ],
      "workflow_status": "核心证据与行情已补，待合作对象后重写",
      "replace_rule": "旧报告继续低权重保留；只有主营证据、财务前置字段、合作对象口径和行情强度字段完成后，才生成并挂载V2深度报告。",
      "old_report_path": "reports/风华高科.html",
      "v2_draft_href": ""
    },
    {
      "execution_order": 3,
      "code": "603989",
      "name": "艾华集团",
      "mapped_node_id": "passive_components",
      "mapped_node_name": "电子元器件/被动元器件",
      "mapping_reason": "公司名纠偏：铝电解电容",
      "old_path": "📱 消费电子与终端 / 手机产业链 / 精密功能件/散热",
      "market_cap_yi": 131.8,
      "queue_score": 108,
      "business_evidence": {
        "business_summary": "铝电解电容器、薄膜电容器、电极箔及金属化膜（薄膜用）的生产与销售。",
        "product_types": [
          "照明类产品",
          "工控类产品",
          "新能源",
          "消费电源",
          "电子类产品",
          "化成箔"
        ],
        "product_names": [
          "照明类产品",
          "工控类产品",
          "新能源",
          "消费电源",
          "电子类产品",
          "化成箔"
        ],
        "business_scope": "一般项目：电容器及其配套设备制造；电容器及其配套设备销售；电子元器件与机电组件设备制造；电子元器件与机电组件设备销售；电子元器件制造；电子专用材料研发；电子专用材料制造；电子专用材料销售；以自有资金从事投资活动。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:13:48",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.69,
        "net_profit_yoy_pct": -0.01,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.23,
        "net_margin_pct": 0.07,
        "debt_to_assets_pct": 0.36,
        "cfo_to_np": 0.08,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:13:48",
        "status": "已补净利润/同比",
        "improvement": "盈利但同比未改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 56.0,
        "trading_days": 114,
        "ret_5d_pct": 34.94,
        "ret_10d_pct": 83.07,
        "ret_20d_pct": 45.76,
        "ret_60d_pct": 235.73,
        "volume_ratio_5d_vs_20d": 0.95,
        "latest_amount": 2116731747.53,
        "strength_score": 100,
        "strength_label": "强势",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:21:23",
        "status": "强势"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "有强证据入口，待全文确认",
        "note": "发现 10 条公告/互动问答候选线索，但尚未解析全文确认具体合作对象，暂不写入公司名。",
        "candidate_count": 10,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "强势",
        "market_role": "本组补涨观察",
        "concept_note": "被动元器件纠偏样本",
        "peer_rank": 3,
        "peer_count": 3,
        "peer_top_score": 100
      },
      "remaining_gaps": [
        "明确披露的上下游合作对象"
      ],
      "workflow_status": "核心证据与行情已补，待合作对象后重写",
      "replace_rule": "旧报告继续低权重保留；只有主营证据、财务前置字段、合作对象口径和行情强度字段完成后，才生成并挂载V2深度报告。",
      "old_report_path": "reports/艾华集团.html",
      "v2_draft_href": ""
    },
    {
      "execution_order": 4,
      "code": "600522",
      "name": "中天科技",
      "mapped_node_id": "comm_optical_infra",
      "mapped_node_name": "光通信基础设施",
      "mapping_reason": "公司名纠偏：光通信/线缆基础设施",
      "old_path": "⚡ 电力电网 / 电网设备 / 电气设备",
      "market_cap_yi": 1930.0,
      "queue_score": 112,
      "business_evidence": {
        "business_summary": "通信、电力、海洋、新能源等领域产品的生产与销售，及海洋工程施工等经营活动。",
        "product_types": [
          "光通信及网络",
          "电网建设",
          "海洋系列",
          "新能源",
          "铜产品",
          "汽车零部件"
        ],
        "product_names": [
          "光通信及网络",
          "电网建设",
          "海洋系列",
          "新能源",
          "铜产品",
          "汽车零部件"
        ],
        "business_scope": "光纤预制棒、光纤、光缆、电线、电缆、导线、铝包钢绞线、双绞合金属材料网面、合成材料网面、金属编织网、铁路用贯通地线、舰船电缆、舰船光缆、水密电缆、消、测磁电缆、不锈钢管、金具、绝缘子、避雷器、有源器件、无源器件及其他光电子器件、高低压成套开关电器设备、变压器、天线、通信设备、输配电及控制设备、光纤复合架空地线、光纤复合相线、光纤复合绝缘电缆、陆用光电缆、海底光电缆、海洋管道、射频电缆、漏泄电缆、铁路信号缆、高温同轴缆、高温线缆、太阳能电池组件、太阳能光伏背板、光伏接线盒、连接器、支架、充电设备用连接装置、储能系统、混合动力及电动汽车电池系统、锂电池、钠硫电池、钒电池、交流不间断电源、一体化电源、应急电源、充放电设备、逆变设备、通信设备用直流远供电源设备、电缆附件、风机发电设备及相关材料和附件、塑料制品、高纯石英玻璃、高纯纳米颗粒、水下基础信息网络设备、海底观测接驳设备、海工装备、海缆接头盒及附件、环境监测设备、水利水务设备、水密连接器及组件、舰载连接器及组件及其相关制品的研发、生产、销售及相关设计、安装、技术服务；铜合金、铝合金、镁合金铸造、板、管、型材加工技术的开发；泡沫铝及其合金材料相关制品的研发、生产、销售及相关设计、安装、技术服务；光缆、电线、电缆监测管理系统、输电线路监测管理系统、变电站监控系统、温度测量设备、网络工程的设计、安装、施工、技术服务；光伏发电系统、分布式电源、微电网的设计、运行维护的管理服务；送变电工程设计；电力通信工程设计及相关技术开发、咨询服务；输变电、配电、通信、光伏发电、分布式电源、海洋观测及环境监测工程总承包；自营和代理各类商品及技术的进出口业务；实业投资；通信及网络信息产品的开发；计算机领域内的技术开发、技术转让、技术咨询、技术服务；软硬件的开发、销售；承包与企业实力、规模、业绩相适应的国外工程项目并对外派遣实施上述境外工程所需的劳务人员。一般项目：制冷、空调设备制造；制冷、空调设备销售；超导材料销售；电容器及其配套设备制造；电容器及其配套设备销售；石墨及碳素制品制造；石墨及碳素制品销售；水环境污染防治服务；大气环境污染防治服务；环境保护专用设备制造；环境保护专用设备销售；（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:13:48",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 9.47,
        "net_profit_yoy_pct": 0.46,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.16,
        "net_margin_pct": 0.07,
        "debt_to_assets_pct": 0.39,
        "cfo_to_np": -2.06,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:13:48",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 61.29,
        "trading_days": 114,
        "ret_5d_pct": 8.38,
        "ret_10d_pct": 24.4,
        "ret_20d_pct": 51.26,
        "ret_60d_pct": 126.58,
        "volume_ratio_5d_vs_20d": 0.97,
        "latest_amount": 24899112997.84,
        "strength_score": 100,
        "strength_label": "强势",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:21:23",
        "status": "强势"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [
          "华为",
          "阿里",
          "腾讯",
          "中国移动",
          "中国电信",
          "国家电网",
          "南方电网",
          "中国联通"
        ],
        "status": "公告/年报全文强证据",
        "note": "华为；阿里；腾讯；中国移动；中国电信；国家电网；南方电网；中国联通。来源为公告/年报PDF正文自动解析，已命中客户/供应商/合作/订单等上下文；V2草稿可引用，正式替换前保留证据链接。",
        "candidate_count": 9,
        "fulltext_strong_items": [
          {
            "title": "江苏中天科技股份有限公司2025年年度报告",
            "date": "2026-04-25",
            "partners": [
              "华为",
              "阿里",
              "腾讯",
              "中国移动",
              "中国电信",
              "国家电网",
              "南方电网"
            ],
            "file_url": "http://static.cninfo.com.cn/finalpage/2026-04-25/1225177318.PDF",
            "status": "全文强线索，待人工二次确认"
          },
          {
            "title": "江苏中天科技股份有限公司2025年年度报告摘要",
            "date": "2026-04-25",
            "partners": [
              "华为",
              "阿里",
              "腾讯",
              "中国移动",
              "中国电信",
              "国家电网",
              "南方电网"
            ],
            "file_url": "http://static.cninfo.com.cn/finalpage/2026-04-25/1225177315.PDF",
            "status": "全文强线索，待人工二次确认"
          },
          {
            "title": "江苏中天科技股份有限公司2025年半年度报告",
            "date": "2025-08-26",
            "partners": [
              "华为",
              "阿里",
              "中国移动",
              "中国电信",
              "南方电网"
            ],
            "file_url": "http://static.cninfo.com.cn/finalpage/2025-08-26/1224564534.PDF",
            "status": "全文强线索，待人工二次确认"
          },
          {
            "title": "江苏中天科技股份有限公司2024年年度报告摘要",
            "date": "2025-04-25",
            "partners": [
              "中国移动",
              "中国电信",
              "中国联通",
              "国家电网"
            ],
            "file_url": "http://static.cninfo.com.cn/finalpage/2025-04-25/1223276680.PDF",
            "status": "全文强线索，待人工二次确认"
          },
          {
            "title": "江苏中天科技股份有限公司2024年年度报告",
            "date": "2025-04-25",
            "partners": [
              "中国移动",
              "中国电信",
              "中国联通",
              "国家电网",
              "南方电网"
            ],
            "file_url": "http://static.cninfo.com.cn/finalpage/2025-04-25/1223276666.PDF",
            "status": "全文强线索，待人工二次确认"
          }
        ],
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_announcement_fulltext_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "强势",
        "market_role": "个股阶段强势，待扩容同概念样本确认是否板块龙头",
        "concept_note": "光通信基础设施纠偏样本",
        "peer_rank": 1,
        "peer_count": 1,
        "peer_top_score": 100
      },
      "remaining_gaps": [
        "待生成V2深度报告"
      ],
      "workflow_status": "可进入V2证据版草稿",
      "replace_rule": "旧报告继续低权重保留；只有主营证据、财务前置字段、合作对象口径和行情强度字段完成后，才生成并挂载V2深度报告。",
      "old_report_path": "reports/中天科技.html",
      "v2_draft_href": "v2_reports_batch_a_evidence/600522_中天科技_V2证据版草稿.html"
    },
    {
      "execution_order": 5,
      "code": "600900",
      "name": "长江电力",
      "mapped_node_id": "power_hydro",
      "mapped_node_name": "水电",
      "mapping_reason": "公司名纠偏：水电运营",
      "old_path": "⚡ 电力电网 / 发电运营 / 火电/热电",
      "market_cap_yi": 6523.0,
      "queue_score": 100,
      "business_evidence": {
        "business_summary": "水力发电业务。",
        "product_types": [
          "大型水电运营"
        ],
        "product_names": [
          "大型水电运营"
        ],
        "business_scope": "电力生产、经营和投资；电力生产技术咨询；水电工程检修维护。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:13:48",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 68.83,
        "net_profit_yoy_pct": 0.31,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.56,
        "net_margin_pct": 0.38,
        "debt_to_assets_pct": 0.57,
        "cfo_to_np": 1.7,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:13:48",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 26.65,
        "trading_days": 114,
        "ret_5d_pct": -0.04,
        "ret_10d_pct": -4.45,
        "ret_20d_pct": -2.09,
        "ret_60d_pct": -2.2,
        "volume_ratio_5d_vs_20d": 1.04,
        "latest_amount": 3395741670.88,
        "strength_score": 47,
        "strength_label": "中性",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:21:23",
        "status": "中性"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [
          "国家电网",
          "南方电网"
        ],
        "status": "公告/年报全文强证据",
        "note": "国家电网；南方电网。来源为公告/年报PDF正文自动解析，已命中客户/供应商/合作/订单等上下文；V2草稿可引用，正式替换前保留证据链接。",
        "candidate_count": 6,
        "fulltext_strong_items": [
          {
            "title": "长江电力2025年年度报告",
            "date": "2026-04-30 00:00:00",
            "partners": [
              "国家电网",
              "南方电网"
            ],
            "file_url": "http://static.cninfo.com.cn/finalpage/2026-04-30/1225262036.PDF",
            "status": "全文强线索，待人工二次确认"
          },
          {
            "title": "长江电力2024年年度报告",
            "date": "2025-04-30 00:00:00",
            "partners": [
              "国家电网",
              "南方电网"
            ],
            "file_url": "http://static.cninfo.com.cn/finalpage/2025-04-30/1223421172.PDF",
            "status": "全文强线索，待人工二次确认"
          }
        ],
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_announcement_fulltext_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "中性",
        "market_role": "弱于本组领涨股",
        "concept_note": "水电运营核心公司",
        "peer_rank": 1,
        "peer_count": 2,
        "peer_top_score": 47
      },
      "remaining_gaps": [
        "待生成V2深度报告"
      ],
      "workflow_status": "可进入V2证据版草稿",
      "replace_rule": "旧报告继续低权重保留；只有主营证据、财务前置字段、合作对象口径和行情强度字段完成后，才生成并挂载V2深度报告。",
      "old_report_path": "reports/长江电力.html",
      "v2_draft_href": "v2_reports_batch_a_evidence/600900_长江电力_V2证据版草稿.html"
    },
    {
      "execution_order": 6,
      "code": "600025",
      "name": "华能水电",
      "mapped_node_id": "power_hydro",
      "mapped_node_name": "水电",
      "mapping_reason": "公司名纠偏：水电运营",
      "old_path": "⚡ 电力电网 / 发电运营 / 火电/热电",
      "market_cap_yi": 1733.0,
      "queue_score": 100,
      "business_evidence": {
        "business_summary": "水力和新能源发电项目的开发、建设、运营与管理。",
        "product_types": [
          "水力发电",
          "风力发电",
          "太阳能光伏发电",
          "其他"
        ],
        "product_names": [
          "水力发电",
          "风力发电",
          "太阳能光伏发电",
          "其他"
        ],
        "business_scope": "国内外电力等能源资源的开发、建设、生产、经营和产品销售；电力等能源工程的投资、咨询、检修、维护及管理服务；对相关延伸产业的投资、开发、建设、生产、经营和产品销售；物质采购、销售及进出口业务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:13:48",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 17.71,
        "net_profit_yoy_pct": 0.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.52,
        "net_margin_pct": 0.31,
        "debt_to_assets_pct": 0.6,
        "cfo_to_np": 2.12,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:13:48",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 9.01,
        "trading_days": 114,
        "ret_5d_pct": -3.12,
        "ret_10d_pct": -7.11,
        "ret_20d_pct": -6.34,
        "ret_60d_pct": -11.32,
        "volume_ratio_5d_vs_20d": 0.92,
        "latest_amount": 279767645.05,
        "strength_score": 39,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:21:23",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [
          "南方电网"
        ],
        "status": "公告/年报全文强证据",
        "note": "南方电网。来源为公告/年报PDF正文自动解析，已命中客户/供应商/合作/订单等上下文；V2草稿可引用，正式替换前保留证据链接。",
        "candidate_count": 7,
        "fulltext_strong_items": [
          {
            "title": "2025年年度报告",
            "date": "2026-04-29",
            "partners": [
              "南方电网"
            ],
            "file_url": "http://static.cninfo.com.cn/finalpage/2026-04-29/1225231661.PDF",
            "status": "全文强线索，待人工二次确认"
          }
        ],
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_announcement_fulltext_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "偏弱",
        "market_role": "弱于本组领涨股",
        "concept_note": "水电运营核心公司",
        "peer_rank": 2,
        "peer_count": 2,
        "peer_top_score": 47
      },
      "remaining_gaps": [
        "待生成V2深度报告"
      ],
      "workflow_status": "可进入V2证据版草稿",
      "replace_rule": "旧报告继续低权重保留；只有主营证据、财务前置字段、合作对象口径和行情强度字段完成后，才生成并挂载V2深度报告。",
      "old_report_path": "reports/华能水电.html",
      "v2_draft_href": "v2_reports_batch_a_evidence/600025_华能水电_V2证据版草稿.html"
    },
    {
      "execution_order": 7,
      "code": "600547",
      "name": "山东黄金",
      "mapped_node_id": "resources_precious_metal",
      "mapped_node_name": "黄金 / 贵金属",
      "mapping_reason": "公司名纠偏：黄金",
      "old_path": "💎 有色金属与新材料 / 稀有金属 / 有色采选",
      "market_cap_yi": 1241.0,
      "queue_score": 100,
      "business_evidence": {
        "business_summary": "黄金开采、选冶；黄金矿山专用设备、建筑装饰材料（不含国家法律法规限制产品）的生产、销售。",
        "product_types": [
          "自产金",
          "外购金",
          "成品金（小金条）"
        ],
        "product_names": [
          "标准金锭",
          "投资金条",
          "合质金",
          "银锭"
        ],
        "business_scope": "黄金地质探矿、开采、选冶，贵金属、有色金属制品、黄金珠宝饰品提纯、加工、生产、销售，黄金矿山专用设备及物资、建筑材料的生产、销售等，主要生产标准金锭和各种规格的投资金条和银锭等产品。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:13:48",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 24.39,
        "net_profit_yoy_pct": 0.41,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.18,
        "net_margin_pct": 0.08,
        "debt_to_assets_pct": 0.63,
        "cfo_to_np": 2.5,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:13:48",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 23.0,
        "trading_days": 114,
        "ret_5d_pct": -14.53,
        "ret_10d_pct": -14.66,
        "ret_20d_pct": -20.58,
        "ret_60d_pct": -40.38,
        "volume_ratio_5d_vs_20d": 1.39,
        "latest_amount": 1388374250.18,
        "strength_score": 14,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:21:23",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "有强证据入口，待全文确认",
        "note": "发现 6 条公告/互动问答候选线索，但尚未解析全文确认具体合作对象，暂不写入公司名。",
        "candidate_count": 6,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "偏弱",
        "market_role": "弱于本组领涨股",
        "concept_note": "黄金/贵金属核心公司",
        "peer_rank": 2,
        "peer_count": 2,
        "peer_top_score": 15
      },
      "remaining_gaps": [
        "明确披露的上下游合作对象"
      ],
      "workflow_status": "核心证据与行情已补，待合作对象后重写",
      "replace_rule": "旧报告继续低权重保留；只有主营证据、财务前置字段、合作对象口径和行情强度字段完成后，才生成并挂载V2深度报告。",
      "old_report_path": "reports/山东黄金.html",
      "v2_draft_href": ""
    },
    {
      "execution_order": 8,
      "code": "600489",
      "name": "中金黄金",
      "mapped_node_id": "resources_precious_metal",
      "mapped_node_name": "黄金 / 贵金属",
      "mapping_reason": "公司名纠偏：黄金",
      "old_path": "💎 有色金属与新材料 / 稀有金属 / 有色采选",
      "market_cap_yi": 1063.0,
      "queue_score": 100,
      "business_evidence": {
        "business_summary": "黄金、其他有色金属矿的采选、冶炼和销售。",
        "product_types": [
          "金",
          "铜"
        ],
        "product_names": [
          "金精矿",
          "合质金",
          "标准金",
          "铜",
          "钼",
          "白银",
          "硫酸"
        ],
        "business_scope": "黄金、有色金属的地质勘查、采癣冶炼的投资与管理；黄金生产的副产品加工、销售；黄金生产所需原材料、燃料、设备的仓储、销售；黄金生产技术的研究开发、咨询服务；高纯度黄金制品的生产、加工、批发；进出口业务；商品展销。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:13:48",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 28.66,
        "net_profit_yoy_pct": 1.29,
        "revenue_yoy_pct": "",
        "roe_pct": 0.08,
        "gross_margin_pct": 0.2,
        "net_margin_pct": 0.13,
        "debt_to_assets_pct": 0.43,
        "cfo_to_np": -0.76,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:13:48",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 18.3,
        "trading_days": 114,
        "ret_5d_pct": -16.51,
        "ret_10d_pct": -11.34,
        "ret_20d_pct": -18.27,
        "ret_60d_pct": -28.35,
        "volume_ratio_5d_vs_20d": 1.39,
        "latest_amount": 1548892277.63,
        "strength_score": 15,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:21:23",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "有强证据入口，待全文确认",
        "note": "发现 7 条公告/互动问答候选线索，但尚未解析全文确认具体合作对象，暂不写入公司名。",
        "candidate_count": 7,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "偏弱",
        "market_role": "弱于本组领涨股",
        "concept_note": "黄金/贵金属核心公司",
        "peer_rank": 1,
        "peer_count": 2,
        "peer_top_score": 15
      },
      "remaining_gaps": [
        "明确披露的上下游合作对象"
      ],
      "workflow_status": "核心证据与行情已补，待合作对象后重写",
      "replace_rule": "旧报告继续低权重保留；只有主营证据、财务前置字段、合作对象口径和行情强度字段完成后，才生成并挂载V2深度报告。",
      "old_report_path": "reports/中金黄金.html",
      "v2_draft_href": ""
    },
    {
      "execution_order": 9,
      "code": "603799",
      "name": "华友钴业",
      "mapped_node_id": "strategic_minor_metals",
      "mapped_node_name": "稀有小金属 / 战略金属",
      "mapping_reason": "稀有小金属/战略金属关键词",
      "old_path": "💎 有色金属与新材料 / 工业金属 / 铜",
      "market_cap_yi": 988.0,
      "queue_score": 94,
      "business_evidence": {
        "business_summary": "锂电材料、能源金属、能源材料产品的研发、制造与销售。",
        "product_types": [
          "三元正极材料",
          "钴酸锂材料"
        ],
        "product_names": [
          "钴产品",
          "铜产品",
          "镍产品",
          "锂产品",
          "三元前驱体",
          "正极材料",
          "镍中间品"
        ],
        "business_scope": "研发、生产、销售：钴、镍、铜氧化物，钴、镍、铜盐类，钴、镍、铜金属及制品，钴粉，镍粉，铜粉，氢氧化钴，钴酸锂，氯化铵；金属矿产品和粗制品进口及进口佣金代理，生产设备进口及进口佣金代理。（上述涉及配额、许可证及专项规定管理的商品按国家有关规定办理），对外承包工程业务（范围详见《中华人民共和国对外承包工程资格证书》）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:13:48",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-17",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 31.52,
        "net_profit_yoy_pct": 0.99,
        "revenue_yoy_pct": "",
        "roe_pct": 0.05,
        "gross_margin_pct": 0.21,
        "net_margin_pct": 0.12,
        "debt_to_assets_pct": 0.64,
        "cfo_to_np": 0.37,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:13:48",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 46.79,
        "trading_days": 114,
        "ret_5d_pct": -10.19,
        "ret_10d_pct": -1.56,
        "ret_20d_pct": -16.3,
        "ret_60d_pct": -21.21,
        "volume_ratio_5d_vs_20d": 1.33,
        "latest_amount": 3333908564.84,
        "strength_score": 23,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:21:23",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [
          "华为",
          "苹果",
          "小米",
          "特斯拉",
          "宁德时代",
          "三星"
        ],
        "status": "公告/年报全文强证据",
        "note": "华为；苹果；小米；特斯拉；宁德时代；三星。来源为公告/年报PDF正文自动解析，已命中客户/供应商/合作/订单等上下文；V2草稿可引用，正式替换前保留证据链接。",
        "candidate_count": 9,
        "fulltext_strong_items": [
          {
            "title": "华友钴业2025年年度报告",
            "date": "2026-04-08 00:00:00",
            "partners": [
              "华为",
              "苹果",
              "小米",
              "特斯拉"
            ],
            "file_url": "http://static.cninfo.com.cn/finalpage/2026-04-08/1225083106.PDF",
            "status": "全文强线索，待人工二次确认"
          },
          {
            "title": "华友钴业2025年年度报告摘要",
            "date": "2026-04-08 00:00:00",
            "partners": [
              "特斯拉"
            ],
            "file_url": "http://static.cninfo.com.cn/finalpage/2026-04-08/1225083091.PDF",
            "status": "全文强线索，待人工二次确认"
          },
          {
            "title": "华友钴业2025年半年度报告",
            "date": "2025-08-18 00:00:00",
            "partners": [
              "宁德时代",
              "特斯拉"
            ],
            "file_url": "http://static.cninfo.com.cn/finalpage/2025-08-18/1224501101.PDF",
            "status": "全文强线索，待人工二次确认"
          },
          {
            "title": "华友钴业2024年年度报告",
            "date": "2025-04-19 00:00:00",
            "partners": [
              "三星",
              "特斯拉"
            ],
            "file_url": "http://static.cninfo.com.cn/finalpage/2025-04-19/1223152968.PDF",
            "status": "全文强线索，待人工二次确认"
          },
          {
            "title": "华友钴业2024年年度报告摘要",
            "date": "2025-04-19 00:00:00",
            "partners": [
              "特斯拉"
            ],
            "file_url": "http://static.cninfo.com.cn/finalpage/2025-04-19/1223152952.PDF",
            "status": "全文强线索，待人工二次确认"
          }
        ],
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_announcement_fulltext_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "偏弱",
        "market_role": "弱于本组领涨股",
        "concept_note": "第一批P0纠偏样本",
        "peer_rank": 1,
        "peer_count": 2,
        "peer_top_score": 23
      },
      "remaining_gaps": [
        "待生成V2深度报告"
      ],
      "workflow_status": "可进入V2证据版草稿",
      "replace_rule": "旧报告继续低权重保留；只有主营证据、财务前置字段、合作对象口径和行情强度字段完成后，才生成并挂载V2深度报告。",
      "old_report_path": "reports/华友钴业.html",
      "v2_draft_href": "v2_reports_batch_a_evidence/603799_华友钴业_V2证据版草稿.html"
    },
    {
      "execution_order": 10,
      "code": "000426",
      "name": "兴业银锡",
      "mapped_node_id": "strategic_minor_metals",
      "mapped_node_name": "稀有小金属 / 战略金属",
      "mapping_reason": "稀有小金属/战略金属关键词",
      "old_path": "💎 有色金属与新材料 / 工业金属 / 铜",
      "market_cap_yi": 703.0,
      "queue_score": 94,
      "business_evidence": {
        "business_summary": "有色金属及贵金属勘探、开采及选矿。",
        "product_types": [
          "有色金属",
          "贵金属"
        ],
        "product_names": [
          "银",
          "锡",
          "锌",
          "铅",
          "铁",
          "铜",
          "锑",
          "金"
        ],
        "business_scope": "许可经营项目：无一般经营项目：矿产品和化工产品销售(需前置审批许可的项目除外);金属及金属矿批发;矿山机械配件、轴承五金、机电、汽车配件销售。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:13:48",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 13.77,
        "net_profit_yoy_pct": 2.57,
        "revenue_yoy_pct": "",
        "roe_pct": 0.13,
        "gross_margin_pct": 0.69,
        "net_margin_pct": 0.65,
        "debt_to_assets_pct": 0.41,
        "cfo_to_np": 0.88,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:13:48",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 33.01,
        "trading_days": 114,
        "ret_5d_pct": -16.58,
        "ret_10d_pct": -8.43,
        "ret_20d_pct": -16.62,
        "ret_60d_pct": -17.64,
        "volume_ratio_5d_vs_20d": 1.33,
        "latest_amount": 2661553546.33,
        "strength_score": 17,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:21:23",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "有强证据入口，待全文确认",
        "note": "发现 14 条公告/互动问答候选线索，但尚未解析全文确认具体合作对象，暂不写入公司名。",
        "candidate_count": 14,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "偏弱",
        "market_role": "弱于本组领涨股",
        "concept_note": "第一批P0纠偏样本",
        "peer_rank": 2,
        "peer_count": 2,
        "peer_top_score": 23
      },
      "remaining_gaps": [
        "明确披露的上下游合作对象"
      ],
      "workflow_status": "核心证据与行情已补，待合作对象后重写",
      "replace_rule": "旧报告继续低权重保留；只有主营证据、财务前置字段、合作对象口径和行情强度字段完成后，才生成并挂载V2深度报告。",
      "old_report_path": "reports/兴业银锡.html",
      "v2_draft_href": ""
    }
  ]
};
