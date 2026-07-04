const LEGACY_P0_BATCH_B_WORKBENCH_V1 = {
  "generated_at": "2026-06-27 17:09:52",
  "purpose": "P0第二批10家公司分类纠偏工作台；先固化旧分类冲突与真实主营证据，不替换旧报告。",
  "source": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\legacy_p0_update_batches_v1.json",
  "summary": {
    "total": 10,
    "business_ready": 10,
    "financial_ready": 10,
    "market_ready": 10,
    "electronic_materials": 5,
    "strategic_metals": 4
  },
  "data_errors": {},
  "rows": [
    {
      "execution_order": 11,
      "code": "600497",
      "name": "驰宏锌锗",
      "mapped_node_id": "strategic_minor_metals",
      "mapped_node_name": "稀有小金属 / 战略金属",
      "mapping_reason": "稀有小金属/战略金属关键词",
      "old_path": "💎 有色金属与新材料 / 工业金属 / 铜",
      "market_cap_yi": 518.0,
      "queue_score": 94,
      "business_evidence": {
        "business_summary": "锌、铅、锗系列产品的采选、冶炼、深加工、销售与贸易业务。",
        "product_types": [
          "锌产品",
          "铅产品",
          "硫酸",
          "银产品",
          "硫精矿",
          "锌精矿"
        ],
        "product_names": [
          "锌产品",
          "铅产品",
          "硫酸",
          "银产品",
          "硫精矿",
          "锌精矿"
        ],
        "business_scope": "铅锌锗系列产品的探矿、选矿、采矿、冶炼及产品深加工；硫酸、硫酸锌、硫酸铵；伴生有价金属的提炼、销售及技术服务；废旧物资回收及利用、矿山及其井下建设工程的设计与施工；阴阳极板生产、销售；有色金属、黑色金属、矿产品化验分析技术服务；资产租赁；物流及道路货物运输；车辆修理；境外期货套期保值业务；进出口业务和国内贸易。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:59:52",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 6.62,
        "net_profit_yoy_pct": 0.34,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.21,
        "net_margin_pct": 0.1,
        "debt_to_assets_pct": 0.28,
        "cfo_to_np": 1.33,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 12.54,
        "trading_days": 114,
        "ret_5d_pct": 21.98,
        "ret_10d_pct": 48.58,
        "ret_20d_pct": 25.65,
        "ret_60d_pct": 58.84,
        "volume_ratio_5d_vs_20d": 2.3,
        "latest_amount": 5607285090.39,
        "strength_score": 100,
        "strength_label": "强势",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "强势"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "有强证据入口，待全文确认",
        "note": "发现 9 条公告/互动问答候选线索，但尚未解析全文确认具体合作对象，暂不写入公司名。",
        "candidate_count": 9,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "强势",
        "market_role": "本组补涨观察",
        "concept_note": "第一批P0纠偏样本",
        "peer_rank": 2,
        "peer_count": 4,
        "peer_top_score": 100
      },
      "remaining_gaps": [
        "明确披露的上下游合作对象",
        "V2报告暂缓，等待分类纠偏复核"
      ],
      "workflow_status": "分类纠偏底稿已完成",
      "replace_rule": "批次B仅做分类纠偏和证据底稿；旧报告继续保留为低权重入口，不在本步替换正式报告。",
      "old_report_path": "reports/驰宏锌锗.html",
      "correction_note": "旧分类为“💎 有色金属与新材料 / 工业金属 / 铜”，当前纠偏为“稀有小金属 / 战略金属”。纠偏依据：稀有小金属/战略金属关键词。本批次先固化分类和证据，不直接生成正式长报告。"
    },
    {
      "execution_order": 12,
      "code": "600301",
      "name": "华锡有色",
      "mapped_node_id": "strategic_minor_metals",
      "mapped_node_name": "稀有小金属 / 战略金属",
      "mapping_reason": "稀有小金属/战略金属关键词",
      "old_path": "💎 有色金属与新材料 / 工业金属 / 铜",
      "market_cap_yi": 415.0,
      "queue_score": 94,
      "business_evidence": {
        "business_summary": "有色金属勘探、开采、选矿以及工程监理等业务。",
        "product_types": [
          "锡锭",
          "锌锭",
          "锑锭",
          "铟锭",
          "铅锑精矿",
          "锌精矿",
          "有色金属深加工产品",
          "监理业务"
        ],
        "product_names": [
          "锡锭",
          "锌锭",
          "锑锭",
          "铟锭",
          "铅锑精矿",
          "锌精矿",
          "有色金属深加工产品",
          "监理业务"
        ],
        "business_scope": "许可项目：矿产资源勘查；第二、三类监控化学品和第四类监控化学品中含磷、硫、氟的特定有机化学品生产；建设工程设计；自来水生产与供应；检验检测服务；道路危险货物运输；非煤矿山矿产资源开采；特种设备安装改造修理；输电、供电、受电电力设施的安装、维修和试验；建设工程监理；公路工程监理；测绘服务；水运工程建设监理；建设工程质量检测；水运工程监理；建设工程施工（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：工程造价咨询业务；货物进出口；以自有资金从事投资活动；选矿；常用有色金属冶炼；贵金属冶炼；有色金属压延加工；有色金属合金制造；有色金属合金销售；金属材料销售；污水处理及其再生利用；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；普通机械设备安装服务；通用设备修理；电气设备修理；专用设备修理；矿山机械制造；矿山机械销售；通用零部件制造；化工产品销售（不含许可类化工产品）；建筑材料销售；计量技术服务；住房租赁；非居住房地产租赁；日用百货销售；金属矿石销售；非金属矿及制品销售；机械设备销售；公路水运工程试验检测服务；工程管理服务；机械零件、零部件加工（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:59:52",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-22",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.69,
        "net_profit_yoy_pct": 0.19,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.42,
        "net_margin_pct": 0.23,
        "debt_to_assets_pct": 0.31,
        "cfo_to_np": 0.74,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 59.24,
        "trading_days": 114,
        "ret_5d_pct": -9.71,
        "ret_10d_pct": 1.2,
        "ret_20d_pct": 6.79,
        "ret_60d_pct": 21.51,
        "volume_ratio_5d_vs_20d": 1.07,
        "latest_amount": 1235412722.56,
        "strength_score": 52,
        "strength_label": "中性",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "中性"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "有强证据入口，待全文确认",
        "note": "发现 10 条公告/互动问答候选线索，但尚未解析全文确认具体合作对象，暂不写入公司名。",
        "candidate_count": 10,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "中性",
        "market_role": "弱于本组领涨股",
        "concept_note": "第一批P0纠偏样本",
        "peer_rank": 3,
        "peer_count": 4,
        "peer_top_score": 100
      },
      "remaining_gaps": [
        "明确披露的上下游合作对象",
        "V2报告暂缓，等待分类纠偏复核"
      ],
      "workflow_status": "分类纠偏底稿已完成",
      "replace_rule": "批次B仅做分类纠偏和证据底稿；旧报告继续保留为低权重入口，不在本步替换正式报告。",
      "old_report_path": "reports/华锡有色.html",
      "correction_note": "旧分类为“💎 有色金属与新材料 / 工业金属 / 铜”，当前纠偏为“稀有小金属 / 战略金属”。纠偏依据：稀有小金属/战略金属关键词。本批次先固化分类和证据，不直接生成正式长报告。"
    },
    {
      "execution_order": 13,
      "code": "001332",
      "name": "锡装股份",
      "mapped_node_id": "strategic_minor_metals",
      "mapped_node_name": "稀有小金属 / 战略金属",
      "mapping_reason": "稀有小金属/战略金属关键词",
      "old_path": "💎 有色金属与新材料 / 工业金属 / 铜",
      "market_cap_yi": 72.0,
      "queue_score": 82,
      "business_evidence": {
        "business_summary": "金属压力容器的研发、设计、制造、销售及相关技术服务。",
        "product_types": [
          "换热容器",
          "分离容器",
          "反应容器",
          "储存容器"
        ],
        "product_names": [
          "换热压力容器",
          "反应压力容器",
          "储存压力容器",
          "分离压力容器"
        ],
        "business_scope": "A1和A2级压力容器，高效传热换热器及换热管，炼油化工生产专用设备，船用海水淡化装置，海洋工程专用设备，核电站专用设备的设计，制造，销售和维修；高效节能工业装备的技术开发，技术咨询，技术转让及技术服务；金属材料，五金产品，化工原料(不含危险化学品)的销售；自营和代理各类商品及技术的进出口业务(国家限定企业经营或禁止进出口的商品和技术除外)；道路普通货物运输。(依法须经批准的项目，经相关部门批准后方可开展经营活动)。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:59:52",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-27",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.91,
        "net_profit_yoy_pct": 0.97,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.44,
        "net_margin_pct": 0.26,
        "debt_to_assets_pct": 0.26,
        "cfo_to_np": -0.7,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 40.19,
        "trading_days": 114,
        "ret_5d_pct": -13.61,
        "ret_10d_pct": -12.8,
        "ret_20d_pct": -11.36,
        "ret_60d_pct": 4.27,
        "volume_ratio_5d_vs_20d": 0.78,
        "latest_amount": 117142007.2,
        "strength_score": 23,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [
          "三星"
        ],
        "status": "公告/年报全文强证据",
        "note": "三星。来源为公告/年报PDF正文自动解析，已命中客户/供应商/合作/订单等上下文；V2草稿可引用，正式替换前保留证据链接。",
        "candidate_count": 15,
        "fulltext_strong_items": [
          {
            "title": "2024年年度报告",
            "date": "2025-04-09",
            "partners": [
              "三星"
            ],
            "file_url": "http://static.cninfo.com.cn/finalpage/2025-04-09/1223029492.PDF",
            "status": "全文强线索，待人工二次确认"
          },
          {
            "title": "2024年年度报告摘要",
            "date": "2025-04-09",
            "partners": [
              "三星"
            ],
            "file_url": "http://static.cninfo.com.cn/finalpage/2025-04-09/1223029481.PDF",
            "status": "全文强线索，待人工二次确认"
          }
        ],
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_announcement_fulltext_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "偏弱",
        "market_role": "弱于本组领涨股",
        "concept_note": "第一批P0纠偏样本",
        "peer_rank": 4,
        "peer_count": 4,
        "peer_top_score": 100
      },
      "remaining_gaps": [
        "V2报告暂缓，等待分类纠偏复核"
      ],
      "workflow_status": "分类纠偏底稿已完成",
      "replace_rule": "批次B仅做分类纠偏和证据底稿；旧报告继续保留为低权重入口，不在本步替换正式报告。",
      "old_report_path": "reports/锡装股份.html",
      "correction_note": "旧分类为“💎 有色金属与新材料 / 工业金属 / 铜”，当前纠偏为“稀有小金属 / 战略金属”。纠偏依据：稀有小金属/战略金属关键词。本批次先固化分类和证据，不直接生成正式长报告。"
    },
    {
      "execution_order": 14,
      "code": "600888",
      "name": "新疆众和",
      "mapped_node_id": "advanced_electronic_material",
      "mapped_node_name": "电子材料",
      "mapping_reason": "电容上游电子材料关键词",
      "old_path": "💎 有色金属与新材料 / 工业金属 / 铝",
      "market_cap_yi": null,
      "queue_score": 56,
      "business_evidence": {
        "business_summary": "铝电子新材料和铝及合金制品的研发、生产和销售。",
        "product_types": [
          "电子铝箔",
          "电极箔",
          "高纯铝"
        ],
        "product_names": [
          "高纯铝",
          "电子铝箔",
          "电极箔",
          "铝制品及合金产品"
        ],
        "business_scope": "发电；经营道路运输业务；对外承包工程业务经营；高纯铝、电子铝箔、腐蚀箔、化成箔电子元器件原料、铝及铝制品、铝合金、炭素的生产、销售；经营本企业自产产品及相关技术的出口业务；金属门窗工程专业承包叁级；经营本企业生产、科研所需的原辅材料、机械设备、仪器仪表、零配件及相关技术的进口业务；经营本企业的进料加工和“三来一补”业务；本企业生产废旧物资的销售；非标准机加工件、钢结构件、机电产品的制造、安装、销售；金属支架的制造、安装及电器设备安装；线路铁塔的制造、销售；金属幕墙建筑；冶金工程施工；炉窑施工；钢结构工程施工；防腐保温工程施工；设备维修；焊剂销售；电解及相关行业配套的设备、配件、材料的销售及提供劳务、技术服务；材料加工；矿产品、农产品、燃料油脂、机械设备、电子器具、建筑材料的销售。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:59:52",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-21",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.64,
        "net_profit_yoy_pct": 0.2,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.21,
        "net_margin_pct": 0.15,
        "debt_to_assets_pct": 0.4,
        "cfo_to_np": 0.2,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 16.12,
        "trading_days": 114,
        "ret_5d_pct": 22.68,
        "ret_10d_pct": 46.41,
        "ret_20d_pct": 35.36,
        "ret_60d_pct": 98.42,
        "volume_ratio_5d_vs_20d": 1.14,
        "latest_amount": 3165447396.9,
        "strength_score": 100,
        "strength_label": "强势",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "强势"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "有强证据入口，待全文确认",
        "note": "发现 8 条公告/互动问答候选线索，但尚未解析全文确认具体合作对象，暂不写入公司名。",
        "candidate_count": 8,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "强势",
        "market_role": "本组阶段领涨",
        "concept_note": "第一批P0纠偏样本",
        "peer_rank": 1,
        "peer_count": 5,
        "peer_top_score": 100
      },
      "remaining_gaps": [
        "明确披露的上下游合作对象",
        "V2报告暂缓，等待分类纠偏复核"
      ],
      "workflow_status": "分类纠偏底稿已完成",
      "replace_rule": "批次B仅做分类纠偏和证据底稿；旧报告继续保留为低权重入口，不在本步替换正式报告。",
      "old_report_path": "reports/新疆众和.html",
      "correction_note": "旧分类为“💎 有色金属与新材料 / 工业金属 / 铝”，当前纠偏为“电子材料”。纠偏依据：电容上游电子材料关键词。本批次先固化分类和证据，不直接生成正式长报告。"
    },
    {
      "execution_order": 15,
      "code": "600961",
      "name": "株冶集团",
      "mapped_node_id": "strategic_minor_metals",
      "mapped_node_name": "稀有小金属 / 战略金属",
      "mapping_reason": "稀有小金属/战略金属关键词",
      "old_path": "💎 有色金属与新材料 / 工业金属 / 铅锌",
      "market_cap_yi": null,
      "queue_score": 56,
      "business_evidence": {
        "business_summary": "集铅锌等有色金属的采选、冶炼、销售。",
        "product_types": [
          "锌锭",
          "热镀锌合金",
          "铸造锌合金",
          "铅锭",
          "铅基合金",
          "黄金",
          "白银",
          "硫酸",
          "冰铜",
          "锑白粉",
          "粗汞",
          "铜精矿",
          "金硫精矿",
          "铋锭",
          "碲锭",
          "镉锭",
          "铟锭"
        ],
        "product_names": [
          "锌锭",
          "热镀锌合金",
          "铸造锌合金",
          "铅锭",
          "铅基合金",
          "黄金",
          "白银",
          "硫酸",
          "冰铜",
          "锑白粉",
          "粗汞",
          "铜精矿",
          "金硫精矿",
          "铋锭",
          "碲锭",
          "镉锭",
          "铟锭"
        ],
        "business_scope": "常用有色金属冶炼；有色金属压延加工；有色金属合金销售；第三类非药品类易制毒化学品生产；新材料技术研发；工艺美术品及礼仪用品制造（象牙及其制品除外）；工艺美术品及收藏品批发（象牙及其制品除外）；电池制造；电池销售；储能技术服务；新能源汽车废旧动力蓄电池回收及梯次利用（不含危险废物经营）；企业管理；企业管理咨询；以自有资金从事投资活动（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:59:52",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-17",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 11.46,
        "net_profit_yoy_pct": 3.13,
        "revenue_yoy_pct": "",
        "roe_pct": 0.22,
        "gross_margin_pct": 0.24,
        "net_margin_pct": 0.16,
        "debt_to_assets_pct": 0.41,
        "cfo_to_np": 1.32,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 34.29,
        "trading_days": 114,
        "ret_5d_pct": 18.98,
        "ret_10d_pct": 48.44,
        "ret_20d_pct": 30.38,
        "ret_60d_pct": 99.36,
        "volume_ratio_5d_vs_20d": 2.03,
        "latest_amount": 3362166939.03,
        "strength_score": 100,
        "strength_label": "强势",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "强势"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "有强证据入口，待全文确认",
        "note": "发现 9 条公告/互动问答候选线索，但尚未解析全文确认具体合作对象，暂不写入公司名。",
        "candidate_count": 9,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "强势",
        "market_role": "本组阶段领涨",
        "concept_note": "第一批P0纠偏样本",
        "peer_rank": 1,
        "peer_count": 4,
        "peer_top_score": 100
      },
      "remaining_gaps": [
        "明确披露的上下游合作对象",
        "V2报告暂缓，等待分类纠偏复核"
      ],
      "workflow_status": "分类纠偏底稿已完成",
      "replace_rule": "批次B仅做分类纠偏和证据底稿；旧报告继续保留为低权重入口，不在本步替换正式报告。",
      "old_report_path": "reports/株冶集团.html",
      "correction_note": "旧分类为“💎 有色金属与新材料 / 工业金属 / 铅锌”，当前纠偏为“稀有小金属 / 战略金属”。纠偏依据：稀有小金属/战略金属关键词。本批次先固化分类和证据，不直接生成正式长报告。"
    },
    {
      "execution_order": 16,
      "code": "002384",
      "name": "东山精密",
      "mapped_node_id": "advanced_electronic_material",
      "mapped_node_name": "电子材料",
      "mapping_reason": "电子材料关键词",
      "old_path": "🔥 AI算力产业链 / 电子元器件 / 通信/电子元器件",
      "market_cap_yi": 5000.0,
      "queue_score": 78,
      "business_evidence": {
        "business_summary": "电子电路、光模块（含光芯片）、精密组件、光电显示模组的全球设计、生产和销售。",
        "product_types": [
          "软板",
          "硬板",
          "软硬结合板",
          "光芯片",
          "数据中心光模块",
          "电信光模块",
          "汽车零部件",
          "水冷板",
          "通信设备组件",
          "触控面板",
          "LCD及OLED模组"
        ],
        "product_names": [
          "软板",
          "硬板",
          "软硬结合板",
          "光芯片",
          "数据中心光模块",
          "电信光模块",
          "汽车零部件",
          "水冷板",
          "通信设备组件",
          "触控面板",
          "LCD及OLED模组"
        ],
        "business_scope": "一般项目：锻件及粉末冶金制品制造；锻件及粉末冶金制品销售；金属表面处理及热处理加工；通信设备制造；通信设备销售；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；电子元器件零售；显示器件销售；货物进出口；技术进出口；仪器仪表制造；仪器仪表销售；机械零件、零部件加工；通用设备制造（不含特种设备制造）；机械设备租赁；汽车零部件及配件制造；汽车零配件零售；电池零配件生产；电池零配件销售；新能源汽车电附件销售；电子元器件批发；电子元器件制造；电子元器件与机电组件设备销售；特种陶瓷制品制造；特种陶瓷制品销售；移动通信设备制造；移动通信设备销售；显示器件制造；企业管理咨询；智能车载设备制造；智能车载设备销售；电力电子元器件制造；电力电子元器件销售；有色金属合金销售；信息技术咨询服务（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:59:52",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 11.24,
        "net_profit_yoy_pct": 1.43,
        "revenue_yoy_pct": "",
        "roe_pct": 0.05,
        "gross_margin_pct": 0.19,
        "net_margin_pct": 0.09,
        "debt_to_assets_pct": 0.64,
        "cfo_to_np": 1.0,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 260.32,
        "trading_days": 114,
        "ret_5d_pct": -4.64,
        "ret_10d_pct": 23.38,
        "ret_20d_pct": 18.87,
        "ret_60d_pct": 153.6,
        "volume_ratio_5d_vs_20d": 0.85,
        "latest_amount": 18183305454.33,
        "strength_score": 73,
        "strength_label": "偏强",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "偏强"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "有强证据入口，待全文确认",
        "note": "发现 16 条公告/互动问答候选线索，但尚未解析全文确认具体合作对象，暂不写入公司名。",
        "candidate_count": 16,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "偏强",
        "market_role": "弱于本组领涨股",
        "concept_note": "第一批P0纠偏样本",
        "peer_rank": 3,
        "peer_count": 5,
        "peer_top_score": 100
      },
      "remaining_gaps": [
        "明确披露的上下游合作对象",
        "V2报告暂缓，等待分类纠偏复核"
      ],
      "workflow_status": "分类纠偏底稿已完成",
      "replace_rule": "批次B仅做分类纠偏和证据底稿；旧报告继续保留为低权重入口，不在本步替换正式报告。",
      "old_report_path": "reports/东山精密.html",
      "correction_note": "旧分类为“🔥 AI算力产业链 / 电子元器件 / 通信/电子元器件”，当前纠偏为“电子材料”。纠偏依据：电子材料关键词。本批次先固化分类和证据，不直接生成正式长报告。"
    },
    {
      "execution_order": 17,
      "code": "600183",
      "name": "生益科技",
      "mapped_node_id": "advanced_electronic_material",
      "mapped_node_name": "电子材料",
      "mapping_reason": "电子材料关键词",
      "old_path": "🔥 AI算力产业链 / 电子元器件 / 通信/电子元器件",
      "market_cap_yi": 4466.0,
      "queue_score": 78,
      "business_evidence": {
        "business_summary": "设计、生产和销售覆铜板和粘结片、印制线路板。",
        "product_types": [
          "覆铜板",
          "粘结片",
          "印制线路板",
          "房地产",
          "废弃资源综合利用"
        ],
        "product_names": [
          "覆铜板",
          "粘结片",
          "印制线路板",
          "房地产",
          "废弃资源综合利用"
        ],
        "business_scope": "设计、生产和销售覆铜板和粘结片、陶瓷电子元件、液晶产品、电子级玻璃布、环氧树脂、铜箔、电子用挠性材料、显示材料、封装材料、绝缘材料；自有房屋出租；从事非配额许可证管理、非专营商品的收购出口业务；提供产品服务、技术服务、咨询服务、加工服务和佣金代理(拍卖除外)。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:59:52",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 13.32,
        "net_profit_yoy_pct": 1.05,
        "revenue_yoy_pct": "",
        "roe_pct": 0.07,
        "gross_margin_pct": 0.28,
        "net_margin_pct": 0.16,
        "debt_to_assets_pct": 0.44,
        "cfo_to_np": 0.43,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 178.5,
        "trading_days": 114,
        "ret_5d_pct": -2.92,
        "ret_10d_pct": 19.21,
        "ret_20d_pct": 32.33,
        "ret_60d_pct": 227.85,
        "volume_ratio_5d_vs_20d": 0.93,
        "latest_amount": 12697757489.59,
        "strength_score": 93,
        "strength_label": "强势",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "强势"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "有强证据入口，待全文确认",
        "note": "发现 7 条公告/互动问答候选线索，但尚未解析全文确认具体合作对象，暂不写入公司名。",
        "candidate_count": 7,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "强势",
        "market_role": "弱于本组领涨股",
        "concept_note": "第一批P0纠偏样本",
        "peer_rank": 2,
        "peer_count": 5,
        "peer_top_score": 100
      },
      "remaining_gaps": [
        "明确披露的上下游合作对象",
        "V2报告暂缓，等待分类纠偏复核"
      ],
      "workflow_status": "分类纠偏底稿已完成",
      "replace_rule": "批次B仅做分类纠偏和证据底稿；旧报告继续保留为低权重入口，不在本步替换正式报告。",
      "old_report_path": "reports/生益科技.html",
      "correction_note": "旧分类为“🔥 AI算力产业链 / 电子元器件 / 通信/电子元器件”，当前纠偏为“电子材料”。纠偏依据：电子材料关键词。本批次先固化分类和证据，不直接生成正式长报告。"
    },
    {
      "execution_order": 18,
      "code": "002916",
      "name": "深南电路",
      "mapped_node_id": "advanced_electronic_material",
      "mapped_node_name": "电子材料",
      "mapping_reason": "电子材料关键词",
      "old_path": "🔥 AI算力产业链 / 电子元器件 / 通信/电子元器件",
      "market_cap_yi": 3091.0,
      "queue_score": 78,
      "business_evidence": {
        "business_summary": "印制电路板、封装基板及电子装联产品的研发、生产及销售。",
        "product_types": [
          "印制电路板产品",
          "封装基板产品",
          "电子装联"
        ],
        "product_names": [
          "印制电路板产品",
          "封装基板产品",
          "电子装联"
        ],
        "business_scope": "一般经营项目是：电镀、鉴证咨询、不动产租赁服务、经营进出口业务、技术研发及信息技术咨询、物业管理。计算机软硬件及外围设备制造；计算机软硬件及辅助设备批发；计算机软硬件及辅助设备零售。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动），许可经营项目是：印刷电路板、封装基板产品、模块模组封装产品、电子装联产品、电子元器件、网络通讯科技产品、通信设备的研制、生产、加工、服务、销售；工业自动化设备、电信终端设备、信息技术类设备、LED产品、电路开关及保护或连接用电器装置、低压电器、安防产品的设计、生产、加工、销售；普通货运（道路运输经营许可证有效期内经营）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:59:52",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 8.51,
        "net_profit_yoy_pct": 0.73,
        "revenue_yoy_pct": "",
        "roe_pct": 0.05,
        "gross_margin_pct": 0.29,
        "net_margin_pct": 0.13,
        "debt_to_assets_pct": 0.47,
        "cfo_to_np": 0.29,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 433.5,
        "trading_days": 114,
        "ret_5d_pct": -4.47,
        "ret_10d_pct": 15.24,
        "ret_20d_pct": 9.5,
        "ret_60d_pct": 87.03,
        "volume_ratio_5d_vs_20d": 0.92,
        "latest_amount": 4866998385.24,
        "strength_score": 60,
        "strength_label": "偏强",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "偏强"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "有强证据入口，待全文确认",
        "note": "发现 14 条公告/互动问答候选线索，但尚未解析全文确认具体合作对象，暂不写入公司名。",
        "candidate_count": 14,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "偏强",
        "market_role": "弱于本组领涨股",
        "concept_note": "第一批P0纠偏样本",
        "peer_rank": 4,
        "peer_count": 5,
        "peer_top_score": 100
      },
      "remaining_gaps": [
        "明确披露的上下游合作对象",
        "V2报告暂缓，等待分类纠偏复核"
      ],
      "workflow_status": "分类纠偏底稿已完成",
      "replace_rule": "批次B仅做分类纠偏和证据底稿；旧报告继续保留为低权重入口，不在本步替换正式报告。",
      "old_report_path": "reports/深南电路.html",
      "correction_note": "旧分类为“🔥 AI算力产业链 / 电子元器件 / 通信/电子元器件”，当前纠偏为“电子材料”。纠偏依据：电子材料关键词。本批次先固化分类和证据，不直接生成正式长报告。"
    },
    {
      "execution_order": 19,
      "code": "000338",
      "name": "潍柴动力",
      "mapped_node_id": "battery_storage",
      "mapped_node_name": "动力电池/储能",
      "mapping_reason": "动力电池/储能关键词",
      "old_path": "🚗 新能源智能汽车 / 动力电池 / 固态/半固态电池",
      "market_cap_yi": 2606.0,
      "queue_score": 78,
      "business_evidence": {
        "business_summary": "动力系统、商用车、农业装备及智慧物流业务。",
        "product_types": [
          "全系列全领域发动机",
          "新能源动力系统及零部件",
          "变速箱",
          "车桥",
          "液压产品",
          "重型汽车",
          "叉车",
          "供应链解决方案",
          "农业装备",
          "汽车电子及零部件"
        ],
        "product_names": [
          "全系列全领域发动机",
          "新能源动力系统及零部件",
          "变速箱",
          "车桥",
          "液压产品",
          "重型汽车",
          "叉车",
          "供应链解决方案",
          "农业装备",
          "汽车电子及零部件"
        ],
        "business_scope": "一般项目：机械设备研发；机械设备销售；通用设备制造(不含特种设备制造)；通用设备修理；汽车零部件研发；汽车零部件及配件制造；汽车零配件批发；汽车零配件零售；专用设备修理；机械零件、零部件销售；数据处理和存储支持服务；软件开发；网络与信息安全软件开发；人工智能理论与算法软件开发；软件销售；集成电路设计；集成电路制造；集成电路销售；智能车载设备制造；智能车载设备销售；信息技术咨询服务；地理遥感信息服务；液压动力机械及元件制造；液压动力机械及元件销售；液气密元件及系统制造；液气密元件及系统销售；新兴能源技术研发；工程和技术研究和试验发展；电机及其控制系统研发；电动机制造；电池制造；电池销售；电力电子元器件制造；电力电子元器件销售；新能源汽车电附件销售；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；润滑油加工、制造(不含危险化学品)；润滑油销售；专用化学产品制造(不含危险化学品)；专用化学产品销售(不含危险化学品)；石油制品销售(不含危险化学品)；成品油批发(不含危险化学品)；非居住房地产租赁；金属材料销售；企业管理咨询(除依法须经批准的项目外，凭营业执照依法自主开展经营活动)许可项目：技术进出口；货物进出口(依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准)。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:59:52",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 39.83,
        "net_profit_yoy_pct": 0.14,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.21,
        "net_margin_pct": 0.06,
        "debt_to_assets_pct": 0.64,
        "cfo_to_np": -0.68,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 27.95,
        "trading_days": 114,
        "ret_5d_pct": -7.11,
        "ret_10d_pct": 1.38,
        "ret_20d_pct": -20.84,
        "ret_60d_pct": 18.94,
        "volume_ratio_5d_vs_20d": 0.87,
        "latest_amount": 3419172214.26,
        "strength_score": 15,
        "strength_label": "偏弱",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "偏弱"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "有强证据入口，待全文确认",
        "note": "发现 11 条公告/互动问答候选线索，但尚未解析全文确认具体合作对象，暂不写入公司名。",
        "candidate_count": 11,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "偏弱",
        "market_role": "单样本节点，待扩容同概念样本确认板块角色",
        "concept_note": "第一批P0纠偏样本",
        "peer_rank": 1,
        "peer_count": 1,
        "peer_top_score": 15
      },
      "remaining_gaps": [
        "明确披露的上下游合作对象",
        "V2报告暂缓，等待分类纠偏复核"
      ],
      "workflow_status": "分类纠偏底稿已完成",
      "replace_rule": "批次B仅做分类纠偏和证据底稿；旧报告继续保留为低权重入口，不在本步替换正式报告。",
      "old_report_path": "reports/潍柴动力.html",
      "correction_note": "旧分类为“🚗 新能源智能汽车 / 动力电池 / 固态/半固态电池”，当前纠偏为“动力电池/储能”。纠偏依据：动力电池/储能关键词。本批次先固化分类和证据，不直接生成正式长报告。"
    },
    {
      "execution_order": 20,
      "code": "002281",
      "name": "光迅科技",
      "mapped_node_id": "advanced_electronic_material",
      "mapped_node_name": "电子材料",
      "mapping_reason": "电子材料关键词",
      "old_path": "🔥 AI算力产业链 / 电子元器件 / 通信/电子元器件",
      "market_cap_yi": 2203.0,
      "queue_score": 78,
      "business_evidence": {
        "business_summary": "光电子器件、模块和子系统的研发、生产及销售。",
        "product_types": [
          "传输类产品",
          "接入类产品",
          "数据通信类产品"
        ],
        "product_names": [
          "传输类产品",
          "接入类产品",
          "数据通信类产品"
        ],
        "business_scope": "信息科技领域光、电器件技术及产品的研制、生产、销售和相关技术服务；信息系统的工程设计、施工、系统集成；信息咨询服务；计算机软、硬件研制、开发、系统集成；网络及数据通信产品的开发、生产、销售；软件开发与技术服务；安全技术防范产品的生产、销售；货物进出口、技术进出口、代理进出口。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 16:59:52",
        "confidence": "medium",
        "status": "已补主营与产品"
      },
      "financial_front_fields": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.32,
        "net_profit_yoy_pct": 0.6,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.27,
        "net_margin_pct": 0.08,
        "debt_to_assets_pct": 0.43,
        "cfo_to_np": 0.84,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "已补净利润/同比",
        "improvement": "净利润同比改善"
      },
      "market_strength": {
        "as_of": "2026-06-26",
        "latest_close": 240.34,
        "trading_days": 114,
        "ret_5d_pct": -9.71,
        "ret_10d_pct": 17.01,
        "ret_20d_pct": 11.84,
        "ret_60d_pct": 184.43,
        "volume_ratio_5d_vs_20d": 0.9,
        "latest_amount": 13527994223.16,
        "strength_score": 59,
        "strength_label": "中性",
        "data_source": "BaoStock query_history_k_data_plus daily adjusted close",
        "retrieved_at": "2026-06-27 16:59:52",
        "status": "中性"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "有强证据入口，待全文确认",
        "note": "发现 16 条公告/互动问答候选线索，但尚未解析全文确认具体合作对象，暂不写入公司名。",
        "candidate_count": 16,
        "source_file": "E:\\CODEX  zhuanyi\\网站规划工作区\\legacy_reports\\batch_a_workbench\\batch_a_partner_evidence_v1.json"
      },
      "concept_role": {
        "concept_strength_status": "中性",
        "market_role": "弱于本组领涨股",
        "concept_note": "第一批P0纠偏样本",
        "peer_rank": 5,
        "peer_count": 5,
        "peer_top_score": 100
      },
      "remaining_gaps": [
        "明确披露的上下游合作对象",
        "V2报告暂缓，等待分类纠偏复核"
      ],
      "workflow_status": "分类纠偏底稿已完成",
      "replace_rule": "批次B仅做分类纠偏和证据底稿；旧报告继续保留为低权重入口，不在本步替换正式报告。",
      "old_report_path": "reports/光迅科技.html",
      "correction_note": "旧分类为“🔥 AI算力产业链 / 电子元器件 / 通信/电子元器件”，当前纠偏为“电子材料”。纠偏依据：电子材料关键词。本批次先固化分类和证据，不直接生成正式长报告。"
    }
  ]
};
