const NEXT_ROUND_EVIDENCE_CARDS_V1 = {
  "generated_at": "2026-06-27 12:25:23",
  "source": "E:\\CODEX  zhuanyi\\网站规划工作区\\expansion_ops\\expansion_batch_dashboard_v1.json",
  "rules_version": "2026-06-26.alpha2",
  "sample_count": 44,
  "purpose": "下一轮44家轻量证据卡：先补主营/产品和财务证据，不生成深度报告。",
  "business_data_note": "主营/产品字段来自 AkShare stock_zyjs_ths 对应的同花顺公开资料口径；后续可替换为年报/公告解析源。",
  "financial_data_note": "财务字段来自 BaoStock 免费季度财务接口；空值代表接口未取到，不解释为零。",
  "partner_data_note": "没有明确公开证据的客户/供应商/合作对象不写具体公司名。",
  "market_strength_note": "市场强度、市场角色、龙头/补涨关系字段已预留，暂不计算。",
  "data_errors": {},
  "rows": [
    {
      "code": "002352",
      "name": "顺丰控股",
      "bucket": "交运物流",
      "subcategory": "快递 / 物流",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "快递物流代表公司",
      "old_report_status": "需新增报告",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "express_logistics",
      "evidence_level": "medium",
      "root_alias_hits": [
        "物流",
        "航空",
        "铁路",
        "供应链"
      ],
      "child_alias_hits": [
        "快递",
        "物流",
        "供应链",
        "供应链管理",
        "物流服务"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "综合性快递物流服务。",
        "product_types": [
          "时效快递",
          "经济快递",
          "快运",
          "冷运及医药",
          "同城即时配送",
          "国际快递",
          "国际货运及代理",
          "供应链"
        ],
        "product_names": [
          "时效快递",
          "经济快递",
          "快运",
          "冷运及医药",
          "同城即时配送",
          "国际快递",
          "国际货运及代理",
          "供应链"
        ],
        "business_scope": "资产管理、资本管理、投资管理（不得从事信托、金融资产管理、证券资产管理等业务）；汽车租赁（不含带驾驶人员的汽车出租）；企业总部管理；代理报关、代理报检；投资兴办实业；国内贸易；市场营销策划、投资咨询及其他信息咨询（不含人才中介服务、证券及限制项目）；从事网络技术、信息技术、电子产品技术的开发、技术服务、技术咨询、技术转让、网络信息、电子商务服务平台、商业管理、商业投资、投资管理咨询、投资管理、企业管理咨询等；第二类增值电信业务中的呼叫中心业务和信息业务、道路普通货物运输业务；承办空运、陆运进出口货物及过境货物的国际运输代理业务，揽货、订舱、托运、仓储、包装；一、二类（国际、国内）航空运输销售代理业务；普通货运，配载，物流服务；科技信息咨询、项目投资咨询、物流信息咨询；数据处理；通讯设备的研发、销售及相关技术服务（依法须经批准的项目，经相关部门批准后方可开展经营活动）、无人机及零配件的研发；供应链管理及相关配套服务、经营进出口业务；产业园开发建设和经营；物业管理；自有物业租赁；网络营销推广；电商培训；信息技术外包、信息服务外包；数据挖掘、数据分析与数据服务；通用软件、行业应用软件、嵌入式软件的开发与应用；经营网上贸易、网上咨询、网上拍卖、网上广告；网络商务服务，数据库服务；电子政务系统开发与应用服务；通信行业增值业务服务；国际货运代理、国内及国际快递（邮政企业专营业务除外）、货物专用运输（集装箱）、大型物件运输、经济技术咨询、技术信息咨询、以特许经营方式从事商业活动；国内（含港澳台）、国际航空货邮运输业务及相关服务业务，货物及技术进出口；货物快运代办服务；国际货物运输代理（不含海运代理）、装卸、搬运；国际、国内货运代理；金融支付系统软硬件的技术开发；互联网支付、银行卡收单、供应链管理；非证券股权投资活动及相关咨询服务；融资租赁业务；租赁业务；向国内外购买租赁财产；租赁财产的残值处理及维修；租赁咨询；兼营与主营业务有关的商业保理业务；货物接取送达配送；货运装备器具租赁；集装箱场站经营、集装箱租赁服务；铁路货物运输；船舶货运；企业、个人的产品营销方案设计与策划及相关商务代理服务；无船承运；国际海上货运代理；金融信息咨询、接受金融机构委托从事金融外包服务、房屋建筑工程；药品、医疗器械、食品的仓储、运输；人力资源服务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 26.51,
        "net_profit_yoy_pct": 0.13,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.14,
        "net_margin_pct": 0.04,
        "debt_to_assets_pct": 0.48,
        "cfo_to_np": 1.27,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 26.51,
        "net_profit_yoy_pct": 0.13,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "快递 / 物流",
          "时效快递",
          "经济快递",
          "快运",
          "冷运及医药",
          "同城即时配送",
          "国际快递"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601919",
      "name": "中远海控",
      "bucket": "交运物流",
      "subcategory": "航运 / 港口",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "集运航运代表公司",
      "old_report_status": "需新增报告",
      "rule_root_id": "transportation_logistics",
      "rule_child_id": "shipping_port",
      "evidence_level": "medium",
      "root_alias_hits": [
        "航运",
        "航空"
      ],
      "child_alias_hits": [
        "航运",
        "码头"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "集装箱航运业务和码头业务。",
        "product_types": [
          "集装箱航运业务",
          "码头业务"
        ],
        "product_names": [
          "集装箱航运业务",
          "码头业务"
        ],
        "business_scope": "许可项目：国际船舶运输公司的投资管理；提供与国际船舶运输配套的服务；实业项目投资管理；码头投资管理；从事海上、航空、陆路国际货运代理业务；船舶与集装箱生产、销售、租赁、维修；仓储、装卸；运输方案设计；信息服务（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 68.82,
        "net_profit_yoy_pct": -0.5,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.17,
        "net_margin_pct": 0.13,
        "debt_to_assets_pct": 0.41,
        "cfo_to_np": 1.62,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 68.82,
        "net_profit_yoy_pct": -0.5,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 77,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "交运物流",
          "航运 / 港口",
          "集装箱航运业务",
          "码头业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002027",
      "name": "分众传媒",
      "bucket": "传媒互联网",
      "subcategory": "广告营销",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "广告营销代表公司",
      "old_report_status": "需新增报告",
      "rule_root_id": "media_internet",
      "rule_child_id": "advertising_marketing",
      "evidence_level": "medium",
      "root_alias_hits": [
        "广告"
      ],
      "child_alias_hits": [
        "广告"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "生活圈媒体中户外广告的开发和运营。",
        "product_types": [
          "楼宇媒体",
          "影院媒体"
        ],
        "product_names": [
          "楼宇媒体",
          "影院媒体"
        ],
        "business_scope": "一般项目：信息技术咨询服务；软件开发；计算机系统服务；信息系统集成服务；网络技术服务。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 17.84,
        "net_profit_yoy_pct": 0.58,
        "revenue_yoy_pct": "",
        "roe_pct": 0.12,
        "gross_margin_pct": 0.69,
        "net_margin_pct": 0.61,
        "debt_to_assets_pct": 0.25,
        "cfo_to_np": 1.2,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 17.84,
        "net_profit_yoy_pct": 0.58,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "传媒互联网",
          "广告营销",
          "楼宇媒体",
          "影院媒体"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002555",
      "name": "三七互娱",
      "bucket": "传媒互联网",
      "subcategory": "游戏 / 内容",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "游戏行业代表公司",
      "old_report_status": "需新增报告",
      "rule_root_id": "media_internet",
      "rule_child_id": "game_content",
      "evidence_level": "medium",
      "root_alias_hits": [
        "游戏",
        "广告"
      ],
      "child_alias_hits": [
        "游戏"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "网络游戏的研发及运营。",
        "product_types": [
          "移动游戏",
          "网页游戏",
          "其他"
        ],
        "product_names": [
          "移动游戏",
          "网页游戏",
          "其他"
        ],
        "business_scope": "网络及计算机领域内的技术开发、技术转让、技术咨询、技术服务（涉及前置许可的除外），计算机系统集成，网络工程，图文设计制作，计算机、软件及辅助设备（除计算机信息系统安全专用产品）的销售，动漫的设计和制作，广告的设计、制作和发布，组织境内文化艺术交流活动，实业投资。（以上范围涉及前置许可的除外）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 8.71,
        "net_profit_yoy_pct": 0.59,
        "revenue_yoy_pct": "",
        "roe_pct": 0.06,
        "gross_margin_pct": 0.78,
        "net_margin_pct": 0.23,
        "debt_to_assets_pct": 0.35,
        "cfo_to_np": 0.42,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 8.71,
        "net_profit_yoy_pct": 0.59,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 90,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "传媒互联网",
          "游戏 / 内容",
          "移动游戏",
          "网页游戏",
          "其他"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002624",
      "name": "完美世界",
      "bucket": "传媒互联网",
      "subcategory": "游戏 / 内容",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "游戏和影视内容代表公司",
      "old_report_status": "需新增报告",
      "rule_root_id": "media_internet",
      "rule_child_id": "game_content",
      "evidence_level": "medium",
      "root_alias_hits": [
        "游戏",
        "广告",
        "教育"
      ],
      "child_alias_hits": [
        "游戏",
        "影视"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "网络游戏的研发、发行及运营业务，同时布局电视剧、短剧制作等影视业务。",
        "product_types": [
          "PC端网络游戏",
          "移动网络游戏",
          "主机游戏",
          "电视剧及短剧",
          "游戏相关其他业务",
          "影视相关其他业务"
        ],
        "product_names": [
          "PC端网络游戏",
          "移动网络游戏",
          "主机游戏",
          "电视剧及短剧",
          "游戏相关其他业务",
          "影视相关其他业务"
        ],
        "business_scope": "广播电视节目制作经营（范围详见《广播电视节目制作经营许可证》）。动漫、平面设计、制作，网站开发，网页设计，设计、制作、代理、发布国内各类广告，软件开发、销售，文化艺术活动、体育赛事、企业营销的策划，休闲观光旅游项目开发，会展服务，企业管理咨询，教育咨询，投资管理，投资咨询，资产管理，服装、玩具、鞋帽、箱包、眼镜、首饰、文化用品、电子产品、日用百货、针纺织品、工艺品、通讯设备、花草、观赏性植物、计算机及辅助设备的销售，从事进出口业务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.02,
        "net_profit_yoy_pct": -0.66,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.67,
        "net_margin_pct": 0.09,
        "debt_to_assets_pct": 0.3,
        "cfo_to_np": -1.47,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 1.02,
        "net_profit_yoy_pct": -0.66,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 57,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "传媒互联网",
          "游戏 / 内容",
          "PC端网络游戏",
          "移动网络游戏",
          "主机游戏",
          "电视剧及短剧",
          "游戏相关其他业务",
          "影视相关其他业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300251",
      "name": "光线传媒",
      "bucket": "传媒互联网",
      "subcategory": "游戏 / 内容",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "影视内容样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "media_internet",
      "rule_child_id": "game_content",
      "evidence_level": "medium",
      "root_alias_hits": [
        "游戏",
        "广告",
        "互联网"
      ],
      "child_alias_hits": [
        "游戏",
        "影视",
        "内容",
        "版权"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "影视项目的投资、制作、发行。",
        "product_types": [
          "影视业务",
          "动漫业务",
          "内容关联业务",
          "产业投资"
        ],
        "product_names": [
          "电影",
          "电视剧（网剧）",
          "动画影视",
          "动漫题材的真人影视",
          "IP运营",
          "艺人经纪",
          "音乐",
          "文学",
          "游戏",
          "实景娱乐",
          "产业投资"
        ],
        "business_scope": "许可项目：广播电视节目制作经营；电视剧制作；电视剧发行；电影发行；演出经纪；餐饮服务；网络文化经营；互联网信息服务；第一类增值电信业务；第二类增值电信业务。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：电影摄制服务；摄像及视频制作服务；文艺创作；组织文化艺术交流活动；文化娱乐经纪人服务；会议及展览服务（出国办展须经相关部门审批）；广告设计、代理；广告制作；广告发布；玩具、动漫及游艺用品销售；市场营销策划；版权代理；知识产权服务（专利代理服务除外）；租赁服务（不含许可类租赁服务）；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；信息咨询服务（不含许可类信息咨询服务）；平面设计；包装服务；企业管理咨询；企业形象策划；专业设计服务；技术进出口；软件开发；票务代理服务；游乐园服务；工艺美术品及礼仪用品销售（象牙及其制品除外）；玩具销售；木制玩具销售；游艺用品及室内游艺器材销售；游艺及娱乐用品销售；文具用品零售；服装服饰零售；办公用品销售；电子产品销售；照相机及器材销售；自动售货机销售；非居住房地产租赁；计算机软硬件及辅助设备零售；日用杂品销售；办公设备销售；互联网销售（除销售需要许可的商品）；食品销售（仅销售预包装食品）；食品互联网销售（仅销售预包装食品）。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）（不得从事国家和本市产业政策禁止和限制类项目的经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-22",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.24,
        "net_profit_yoy_pct": -0.99,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.44,
        "net_margin_pct": 0.13,
        "debt_to_assets_pct": 0.09,
        "cfo_to_np": -0.9,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-22",
        "net_profit_attr_yi": 0.24,
        "net_profit_yoy_pct": -0.99,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 43,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "传媒互联网",
          "游戏 / 内容",
          "电影",
          "电视剧（网剧）",
          "动画影视",
          "动漫题材的真人影视",
          "IP运营",
          "艺人经纪"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300413",
      "name": "芒果超媒",
      "bucket": "传媒互联网",
      "subcategory": "游戏 / 内容",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "长视频和内容平台样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "media_internet",
      "rule_child_id": "game_content",
      "evidence_level": "medium",
      "root_alias_hits": [
        "广告",
        "互联网",
        "培训"
      ],
      "child_alias_hits": [
        "内容"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "芒果TV互联网视频、新媒体互动娱乐内容制作和内容电商。",
        "product_types": [
          "芒果TV互联网视频业务",
          "新媒体互动娱乐内容制作",
          "内容电商"
        ],
        "product_names": [
          "芒果TV互联网视频业务",
          "新媒体互动娱乐内容制作",
          "内容电商"
        ],
        "business_scope": "广播电视节目制作;文化娱乐经纪;演出经纪;电子产品及配件的技术咨询服务;智能技术咨询、服务;计算机硬件开发;计算机网络系统工程服务;计算机技术转让;计算机网络平台的开发及建设;计算机技术咨询;计算机技术开发、技术服务;信息网络传播视听节目业务;电子产品及配件、智能产品的销售;电子产品、智能化技术的研发;日用化学品、日用百货、文体用品、玩具、五金工具、家用电器、服装鞋帽、家具、通讯器材、首饰珠宝零售;旅游产品开发、销售,旅游信息咨询、服务;广告设计及户外广告发布、代理电视、报纸广告;活动策划、展览、培训;预包装食品、酒类销售;中药、保健食品、医疗器械、音像制品、书报刊零售;第二类增值电信业务中的信息服务业务(不含固定网电话信息服务业务和移动网信息服务);保险兼业代理;自营和代理各类商品及技术的进出口,但国家限定公司经营或禁止进出口的商品和技术除外;化肥零售;销售不再分装的包装种子;林木种子、农作物种子的销售。(依法须经批准的项目,经相关部门批准后方可开展经营活动)",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.99,
        "net_profit_yoy_pct": -0.47,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.23,
        "net_margin_pct": 0.06,
        "debt_to_assets_pct": 0.29,
        "cfo_to_np": -1.96,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": 1.99,
        "net_profit_yoy_pct": -0.47,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 57,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "传媒互联网",
          "游戏 / 内容",
          "芒果TV互联网视频业务",
          "新媒体互动娱乐内容制作",
          "内容电商"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "000876",
      "name": "新希望",
      "bucket": "农业养殖",
      "subcategory": "猪禽水产养殖",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "饲料和养殖综合样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "agriculture_food",
      "rule_child_id": "pig_poultry_aquaculture",
      "evidence_level": "medium",
      "root_alias_hits": [
        "养殖",
        "饲料"
      ],
      "child_alias_hits": [
        "生猪",
        "养殖"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "饲料、生猪养殖与屠宰。",
        "product_types": [
          "饲料",
          "猪产业"
        ],
        "product_names": [
          "预混料",
          "浓缩料",
          "配合料",
          "生猪养殖",
          "屠宰"
        ],
        "business_scope": "配合饲料、浓缩饲料、精料补充料的生产、加工（限分支机构经营）（以上项目及期限以许可证为准）。（以下范围不含前置许可项目，后置许可项目凭许可证或审批文件经营）谷物及其他作物的种植；牲畜的饲养；猪的饲养；家禽的饲养；商品批发与零售；进出口业；项目投资与管理（不得从事非法集资、吸收公众资金等金融活动）；科技交流和推广服务业。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -8.85,
        "net_profit_yoy_pct": -3.02,
        "revenue_yoy_pct": "",
        "roe_pct": -0.04,
        "gross_margin_pct": 0.05,
        "net_margin_pct": -0.03,
        "debt_to_assets_pct": 0.71,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": -8.85,
        "net_profit_yoy_pct": -3.02,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 20,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "农业养殖",
          "猪禽水产养殖",
          "预混料",
          "浓缩料",
          "配合料",
          "生猪养殖",
          "屠宰"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "000998",
      "name": "隆平高科",
      "bucket": "农业养殖",
      "subcategory": "种业 / 种植",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "种业代表样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "agriculture_food",
      "rule_child_id": "seed_planting",
      "evidence_level": "medium",
      "root_alias_hits": [
        "农业"
      ],
      "child_alias_hits": [
        "粮食",
        "玉米"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "构建起以水稻、玉米、小麦等主粮作物，黄瓜、辣椒、谷子、食葵等专精特新作物为主业，棉花、油料作物为拓展，种粮一体、农民培训、农业援外等农业服务为配套，覆盖“研、育、繁、推、服、管”全业务链条的产业体系。",
        "product_types": [
          "杂交水稻",
          "玉米",
          "小麦"
        ],
        "product_names": [
          "水稻种子",
          "玉米种子",
          "蔬菜瓜果种子",
          "向日葵种子",
          "杂谷种子",
          "农化",
          "棉花",
          "油菜"
        ],
        "business_scope": "许可项目：农作物种子经营；主要农作物种子生产；转基因农作物种子生产；农药生产；农药批发；农药零售；肥料生产；食品生产；食品销售；粮食加工食品生产（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）。一般项目：非主要农作物种子生产；农副产品销售；初级农产品收购；生物农药技术研发；化肥销售；肥料销售；食品销售（仅销售预包装食品）；粮食收购；食用农产品初加工；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；农业科学研究和试验发展；智能农业管理；农业专业及辅助性活动；与农业生产经营有关的技术、信息、设施建设运营等服务；货物进出口；技术进出口；以自有资金从事投资活动；土地整治服务；软件开发；信息系统集成服务（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -1.94,
        "net_profit_yoy_pct": -61.46,
        "revenue_yoy_pct": "",
        "roe_pct": -0.02,
        "gross_margin_pct": 0.35,
        "net_margin_pct": -0.21,
        "debt_to_assets_pct": 0.58,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": -1.94,
        "net_profit_yoy_pct": -61.46,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 20,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "农业养殖",
          "种业 / 种植",
          "水稻种子",
          "玉米种子",
          "蔬菜瓜果种子",
          "向日葵种子",
          "杂谷种子",
          "农化"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002311",
      "name": "海大集团",
      "bucket": "农业养殖",
      "subcategory": "猪禽水产养殖",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "饲料龙头样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "agriculture_food",
      "rule_child_id": "pig_poultry_aquaculture",
      "evidence_level": "medium",
      "root_alias_hits": [
        "养殖",
        "饲料"
      ],
      "child_alias_hits": [
        "水产",
        "养殖"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "围绕动物养殖提供整体解决方案进行产业链业务布局。",
        "product_types": [
          "饲料",
          "动保产品",
          "农产品",
          "贸易业务"
        ],
        "product_names": [
          "饲料",
          "动保产品",
          "农产品",
          "贸易业务"
        ],
        "business_scope": "饲料、添加剂的生产（以上项目由分支机构凭许可证经营）和技术开发、技术服务；畜禽、水产品的养殖、加工和技术开发、技术服务；以上产品及饲料原料、农副产品的批发、佣金代理（拍卖除外）及进出口业务（涉及配额许可证管理、专项规定管理的商品按照国家有关规定办理）；粮食收购。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 9.45,
        "net_profit_yoy_pct": -0.31,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.1,
        "net_margin_pct": 0.03,
        "debt_to_assets_pct": 0.49,
        "cfo_to_np": 0.03,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 9.45,
        "net_profit_yoy_pct": -0.31,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 68,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "农业养殖",
          "猪禽水产养殖",
          "饲料",
          "动保产品",
          "农产品",
          "贸易业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002714",
      "name": "牧原股份",
      "bucket": "农业养殖",
      "subcategory": "猪禽水产养殖",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "生猪养殖代表公司",
      "old_report_status": "需新增报告",
      "rule_root_id": "agriculture_food",
      "rule_child_id": "pig_poultry_aquaculture",
      "evidence_level": "medium",
      "root_alias_hits": [
        "养殖",
        "饲料"
      ],
      "child_alias_hits": [
        "生猪",
        "养殖"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "生猪的养殖销售、生猪屠宰。",
        "product_types": [
          "商品猪",
          "仔猪",
          "种猪",
          "白条",
          "分割品",
          "副产品"
        ],
        "product_names": [
          "商品猪",
          "仔猪",
          "种猪",
          "白条",
          "分割品",
          "副产品"
        ],
        "business_scope": "许可项目：牲畜饲养；种畜禽生产；种畜禽经营；供港澳活畜禽经营；饲料生产；牲畜屠宰；食品生产；食品销售；动物无害化处理（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：粮食收购；谷物销售；饲料原料销售；饲料添加剂销售；畜牧渔业饲料销售；牲畜销售；畜禽粪污处理利用；货物进出口；技术进出口；进出口代理；再生资源加工；再生资源销售（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-22",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -12.22,
        "net_profit_yoy_pct": -1.27,
        "revenue_yoy_pct": "",
        "roe_pct": -0.01,
        "gross_margin_pct": 0.05,
        "net_margin_pct": -0.04,
        "debt_to_assets_pct": 0.51,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-22",
        "net_profit_attr_yi": -12.22,
        "net_profit_yoy_pct": -1.27,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 20,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "农业养殖",
          "猪禽水产养殖",
          "商品猪",
          "仔猪",
          "种猪",
          "白条",
          "分割品",
          "副产品"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300498",
      "name": "温氏股份",
      "bucket": "农业养殖",
      "subcategory": "猪禽水产养殖",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "养殖综合样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "agriculture_food",
      "rule_child_id": "pig_poultry_aquaculture",
      "evidence_level": "medium",
      "root_alias_hits": [
        "农业",
        "养殖",
        "饲料"
      ],
      "child_alias_hits": [
        "养殖"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "肉鸡和肉猪的养殖及其销售；兼营肉鸭、蛋鸡、鸽子等养殖及其产品的销售。",
        "product_types": [
          "肉鸡",
          "肉猪",
          "仔猪",
          "白羽鸡苗",
          "肉鸭",
          "鸡蛋",
          "农牧设备",
          "兽药"
        ],
        "product_names": [
          "肉鸡",
          "肉猪",
          "仔猪",
          "白羽鸡苗",
          "肉鸭",
          "鸡蛋",
          "农牧设备",
          "兽药"
        ],
        "business_scope": "一般项目：牲畜销售；畜牧渔业饲料销售；饲料原料销售；智能农业管理；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；货物进出口；技术进出口。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）许可项目：食品生产；食品销售；种畜禽生产；种畜禽经营；家禽饲养；活禽销售；家禽屠宰；牲畜饲养；牲畜屠宰；饲料生产。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-22",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -10.88,
        "net_profit_yoy_pct": -1.53,
        "revenue_yoy_pct": "",
        "roe_pct": -0.03,
        "gross_margin_pct": 0.03,
        "net_margin_pct": -0.04,
        "debt_to_assets_pct": 0.53,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-22",
        "net_profit_attr_yi": -10.88,
        "net_profit_yoy_pct": -1.53,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 20,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "农业养殖",
          "猪禽水产养殖",
          "肉鸡",
          "肉猪",
          "仔猪",
          "白羽鸡苗",
          "肉鸭",
          "鸡蛋"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600598",
      "name": "北大荒",
      "bucket": "农业养殖",
      "subcategory": "种业 / 种植",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "种植和土地资源样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "agriculture_food",
      "rule_child_id": "seed_planting",
      "evidence_level": "medium",
      "root_alias_hits": [
        "农业",
        "养殖"
      ],
      "child_alias_hits": [
        "粮食",
        "种植"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "耕地发包经营；谷物、豆类、油料等作物的种植及销售；农业技术开发、技术咨询、技术服务及技术转让；信息处理和储存支持服务；房地产开发经营；肥料制造及销售（仅限分支机构经营）；牲畜饲养等。",
        "product_types": [
          "土地承包",
          "农产品销售"
        ],
        "product_names": [
          "土地承包",
          "农产品销售"
        ],
        "business_scope": "谷物、豆类、油料、薯类、蔬菜、食用菌、园艺作物、水果、中药材（不含麻醉类）、草的种植及销售；烟草的种植；农副产品初加工；农业技术开发、技术咨询、技术服务、技术转让；信息处理和存储服务；仓储服务（不含危险化学品）；房地产开发经营；机械设备租赁；货物进出口、技术进出口；水源及供水设施工程、市政工程、水利工程、机电设备工程（不含电力设施）、金属门窗工程、建筑幕墙工程、钢结构工程设计、施工。食品生产经营；粮食收购。以下仅限分支机构使用：肥料制造及销售；牲畜饲养；家禽饲养；牲畜屠宰；家禽屠宰；水产养殖；农药经营（需与食品分开经营）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 5.79,
        "net_profit_yoy_pct": 0.08,
        "revenue_yoy_pct": "",
        "roe_pct": 0.07,
        "gross_margin_pct": 0.64,
        "net_margin_pct": 0.55,
        "debt_to_assets_pct": 0.45,
        "cfo_to_np": 9.63,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 5.79,
        "net_profit_yoy_pct": 0.08,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "农业养殖",
          "种业 / 种植",
          "土地承包",
          "农产品销售"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300144",
      "name": "宋城演艺",
      "bucket": "商贸零售 / 社服",
      "subcategory": "旅游 / 酒店",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "旅游演艺样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "commercial_retail_social_service",
      "rule_child_id": "tourism_hotel",
      "evidence_level": "medium",
      "root_alias_hits": [
        "零售",
        "旅游",
        "餐饮"
      ],
      "child_alias_hits": [
        "旅游",
        "景区",
        "旅游服务"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "现场演艺业务和旅游服务业务。",
        "product_types": [
          "杭州宋城旅游区",
          "丽江千古情景区",
          "电子商务手续费"
        ],
        "product_names": [
          "杭州宋城旅游区",
          "丽江千古情景区",
          "电子商务手续费"
        ],
        "business_scope": "歌舞表演、杂技表演、戏曲表演、音乐表演、综合文艺表演（凭《营业性演出许可证》经营），经营演出及经纪业务（凭《营业性演出许可证》经营），餐饮服务（范围详见《餐饮服务许可证》），停车服务。旅游服务，主题公园开发经营，文化活动策划、组织，文化传播策划，动漫设计，会展组织，休闲产业投资开发，实业投资，旅游电子商务，设计、制作、代理、发布国内各类广告，影视项目的投资管理，旅游用品及工艺美术品（不含金饰品）、百货、土特产品（不含食品）的销售，出版物批发、零售（凭许可证经营）；含下属分支机构的经营范围。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.18,
        "net_profit_yoy_pct": -0.15,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.65,
        "net_margin_pct": 0.41,
        "debt_to_assets_pct": 0.13,
        "cfo_to_np": 0.86,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-24",
        "net_profit_attr_yi": 2.18,
        "net_profit_yoy_pct": -0.15,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 63,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "商贸零售 / 社服",
          "旅游 / 酒店",
          "杭州宋城旅游区",
          "丽江千古情景区",
          "电子商务手续费"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600258",
      "name": "首旅酒店",
      "bucket": "商贸零售 / 社服",
      "subcategory": "旅游 / 酒店",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "酒店补充样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "commercial_retail_social_service",
      "rule_child_id": "tourism_hotel",
      "evidence_level": "medium",
      "root_alias_hits": [
        "零售",
        "旅游",
        "酒店",
        "餐饮"
      ],
      "child_alias_hits": [
        "旅游",
        "酒店",
        "景区",
        "旅游服务"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "中高端及经济型酒店运营管理，并兼有景区经营业务。",
        "product_types": [
          "酒店运营",
          "酒店管理",
          "景区业务"
        ],
        "product_names": [
          "酒店运营",
          "酒店管理",
          "景区业务"
        ],
        "business_scope": "出租汽车客运;餐饮服务;项目投资及管理;旅游服务;饭店经营及管理;旅游产品开发、销售;承办展览展示活动;设计、制作、代理、发布国内及外商来华广告;信息咨询;技术开发、技术咨询、技术服务;出租商业用房;物业管理;健身服务;棋;牌;台球;保龄球;旅游接洽;代客订购车票、文艺票;出租自行车、三轮车;复印;旅游信息咨询;国内航线除香港、澳门、台湾地区航线外的航空客运销售代理业务;销售百货、工艺美术品、日用品、服装鞋帽、针纺织品、字画、装饰材料、五金交电、建筑材料、汽车配件;机动车公共停车场服务;美术装饰;仓储;为举办展览提供服务;会议服务;保洁服务;家居装饰;以下项目限分支机构经营住宿;酒吧;洗衣服务;销售食品、书刊、二类普通诊察器械、医用橡胶制品、零售卷烟、雪茄烟;零售、出租音像制品;零售图书、期刊、电子出版物。(市场主体依法自主选择经营项目,开展经营活动;依法须经批准的项目,经相关部门批准后依批准的内容开展经营活动;不得从事国家和本市产业政策禁止和限制类项目的经营活动。)",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.93,
        "net_profit_yoy_pct": 0.19,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.38,
        "net_margin_pct": 0.11,
        "debt_to_assets_pct": 0.5,
        "cfo_to_np": 3.4,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 1.93,
        "net_profit_yoy_pct": 0.19,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "商贸零售 / 社服",
          "旅游 / 酒店",
          "酒店运营",
          "酒店管理",
          "景区业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600600",
      "name": "青岛啤酒",
      "bucket": "消费白马",
      "subcategory": "大众消费",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "消费白马交叉样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "consumer_bluechip",
      "rule_child_id": "consumer_mass",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "node_override_applied",
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "business_evidence": {
        "business_summary": "啤酒生产及销售。",
        "product_types": [
          "啤酒"
        ],
        "product_names": [
          "啤酒"
        ],
        "business_scope": "生产碳酸饮料(汽水);生产啤酒(熟啤酒、生啤酒、鲜啤酒、特种啤酒)(全国工业产品生产许可证，全国工业产品生产许可证1有效期限以许可证为准)。(依法须经批准的项目，经相关部门批准后方可开展经营活动)。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 18.33,
        "net_profit_yoy_pct": 0.05,
        "revenue_yoy_pct": "",
        "roe_pct": 0.06,
        "gross_margin_pct": 0.43,
        "net_margin_pct": 0.18,
        "debt_to_assets_pct": 0.38,
        "cfo_to_np": 1.64,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 18.33,
        "net_profit_yoy_pct": 0.05,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "消费白马",
          "大众消费",
          "啤酒"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600859",
      "name": "王府井",
      "bucket": "商贸零售 / 社服",
      "subcategory": "零售 / 电商",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "百货和免税补充样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "commercial_retail_social_service",
      "rule_child_id": "retail_ecommerce",
      "evidence_level": "medium",
      "root_alias_hits": [
        "零售",
        "免税",
        "餐饮"
      ],
      "child_alias_hits": [
        "零售",
        "百货",
        "免税"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "商品零售和商业物业出租业务。",
        "product_types": [
          "商品零售",
          "租赁"
        ],
        "product_names": [
          "商品零售",
          "租赁"
        ],
        "business_scope": "一般项目：未经加工的坚果、干果销售【分支机构经营】；食品销售（仅销售预包装食品）【分支机构经营】；食用农产品零售【分支机构经营】；保健食品（预包装）销售【分支机构经营】；第一类医疗器械销售【分支机构经营】；第二类医疗器械销售【分支机构经营】；安防设备销售【分支机构经营】；汽车零配件零售【分支机构经营】；服饰制造【分支机构经营】；洗染服务【分支机构经营】；日用百货销售；通讯设备销售；针纺织品销售；电线、电缆经营；五金产品零售；化工产品销售（不含许可类化工产品）；工艺美术品及礼仪用品销售（象牙及其制品除外）；珠宝首饰零售；仪器仪表销售；计算机软硬件及辅助设备零售；办公用品销售；家具销售；建筑材料销售；建筑装饰材料销售；日用品销售；礼品花卉销售；商业、饮食、服务专用设备销售；制冷、空调设备销售；金属材料销售；机械设备销售；家用电器销售；专业设计服务；摄影扩印服务；普通货物仓储服务（不含危险化学品等需许可审批的项目）；电子产品销售；日用产品修理；广告发布；广告设计、代理；广告制作；机械设备租赁；非居住房地产租赁；社会经济咨询服务；企业管理咨询；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；货物进出口；技术进出口；进出口代理；工艺美术品及收藏品批发（象牙及其制品除外）。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）许可项目：食品销售【分支机构经营】；烟草制品零售【分支机构经营】；药品零售【分支机构经营】；第三类医疗器械经营【分支机构经营】；出版物零售【分支机构经营】；生活美容服务【分支机构经营】；餐饮服务【分支机构经营】；保险代理业务【分支机构经营】；住宅室内装饰装修；免税商品销售；广播电视节目制作经营；道路货物运输（不含危险货物）【分支机构经营】。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）（不得从事国家和本市产业政策禁止和限制类项目的经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.66,
        "net_profit_yoy_pct": -0.07,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.37,
        "net_margin_pct": 0.02,
        "debt_to_assets_pct": 0.49,
        "cfo_to_np": 7.76,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 0.66,
        "net_profit_yoy_pct": -0.07,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 53,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "商贸零售 / 社服",
          "零售 / 电商",
          "商品零售",
          "租赁"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601933",
      "name": "永辉超市",
      "bucket": "商贸零售 / 社服",
      "subcategory": "零售 / 电商",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "超市零售样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "commercial_retail_social_service",
      "rule_child_id": "retail_ecommerce",
      "evidence_level": "medium",
      "root_alias_hits": [
        "零售",
        "餐饮"
      ],
      "child_alias_hits": [
        "零售",
        "百货"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "通过线下门店端+线上出售精选商品。",
        "product_types": [
          "生鲜及加工",
          "食品用品（含服装）",
          "租赁及其他"
        ],
        "product_names": [
          "生鲜及加工",
          "食品用品（含服装）",
          "租赁及其他"
        ],
        "business_scope": "农副产品、水产品、粮油及制品、食品饮料、酒及其他副食品、日用百货、家用电器及电子产品、通讯器材、针纺织品、服装、文化体育用品及器材、音像制品、出版物及电子出版物、珠宝、金银饰品、汽车摩托车零配件、汽车装潢、消防器材、工艺品（文物、象牙及其制品除外）、五金交电、仪器仪表、五金家具及室内装修材料、花卉、玩具等的零售和批发，以及提供相关的配套服务；零售和批发预包装食品、散装食品、保健食品、乳制品（含婴幼儿配方乳粉）；零售和批发医疗器械；西药销售（不含兽药，不含互联网药品交易服务）；中药销售（不含兽药，不含互联网药品交易服务）；互联网药品交易服务；零售香烟（限分支机构在行业许可的期限和范围内开展经营活动）；组织部分自营商品的加工及农副产品收购；餐饮服务；出租部分商场设施或分租部分商场的场地予分租户从事合法经营（以上全部项目另设分支机构经营）；物业管理、仓储服务、广告服务；信息咨询（保险、证券、期货、金融等行业咨询除外）；以特许经营方式从事商业活动；自营商品的进口，采购国内产品的出口（以上商品进出口不涉及国营贸易、进出口配额许可证、出口配额招标、出口许可证等专项管理的商品）；网上贸易代理；互联网零售；信息服务业务；互联网接入服务业务；互联网数据中心业务；在线数据处理与交易处理业务；专业停车场服务；普通货物道路运输；冷藏车道路运输；集装箱道路运输；大型货物道路运输；其他道路货物运输。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-17",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.85,
        "net_profit_yoy_pct": 0.94,
        "revenue_yoy_pct": "",
        "roe_pct": 0.14,
        "gross_margin_pct": 0.23,
        "net_margin_pct": 0.02,
        "debt_to_assets_pct": 0.93,
        "cfo_to_np": 1.68,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-17",
        "net_profit_attr_yi": 2.85,
        "net_profit_yoy_pct": 0.94,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "商贸零售 / 社服",
          "零售 / 电商",
          "生鲜及加工",
          "食品用品（含服装）",
          "租赁及其他"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "603711",
      "name": "香飘飘",
      "bucket": "商贸零售 / 社服",
      "subcategory": "大众消费",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "消费品样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "commercial_retail_social_service",
      "rule_child_id": "consumer_mass",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "business_evidence": {
        "business_summary": "饮料相关产品的研发、生产和销售。",
        "product_types": [
          "经典系列",
          "好料系列",
          "其他系列",
          "果汁茶",
          "冻柠茶",
          "液体奶茶"
        ],
        "product_names": [
          "“香飘飘”经典系列",
          "好料系列",
          "“Meco”杯装果茶",
          "“兰芳园”港式茶饮",
          "“香飘飘”即饮牛乳茶"
        ],
        "business_scope": "许可项目：食品生产：食品销售；食品经营管理：保健食品生产(依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准)。一般项目：自动售货机销售：纸制品销售：塑料制品销售：人力资源服务(不含职业中介活动、劳务派遣服务)：货物进出口：技术进出口：技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；机械设备租赁；普通机械设备安装服务：住房租赁：非居住房地产租赁：劳务服务(不含劳务派遣)：保健食品(预包装)销售(除依法须经批准的项目外，凭营业执照依法自主开展经营活动)。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.93,
        "net_profit_yoy_pct": 5.97,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.41,
        "net_margin_pct": 0.11,
        "debt_to_assets_pct": 0.32,
        "cfo_to_np": 0.14,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 0.93,
        "net_profit_yoy_pct": 5.97,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 93,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "商贸零售 / 社服",
          "大众消费",
          "“香飘飘”经典系列",
          "好料系列",
          "“Meco”杯装果茶",
          "“兰芳园”港式茶饮",
          "“香飘飘”即饮牛乳茶"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "001979",
      "name": "招商蛇口",
      "bucket": "地产 / 建筑建材",
      "subcategory": "房地产开发",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "地产开发和园区代表公司",
      "old_report_status": "需新增报告",
      "rule_root_id": "real_estate_construction",
      "rule_child_id": "real_estate_developer",
      "evidence_level": "medium",
      "root_alias_hits": [
        "地产",
        "房地产",
        "建筑",
        "建筑工程",
        "园区",
        "物业运营"
      ],
      "child_alias_hits": [
        "房地产开发",
        "房地产",
        "地产开发"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "住宅为主的可售型商品房的开发与销售。",
        "product_types": [
          "开发业务",
          "资产运营",
          "物业服务"
        ],
        "product_names": [
          "可售型商品房",
          "代建业务",
          "集中商业",
          "产业办公",
          "公寓酒店等持有物业运营与资产管理以及会展和邮轮业务",
          "基础物业管理",
          "平台增值服务",
          "专业增值服务"
        ],
        "business_scope": "城区、园区、社区的投资、开发建设和运营；交通运输、工业制造、金融保险、对外贸易、旅游、酒店和其他各类企业的投资和管理；邮轮母港及配套设施的建设和运营；房地产开发经营；水陆建筑工程；所属企业产品的销售和所需设备、原材料、零配件的供应和销售；举办体育比赛；物业管理；水上运输、码头、仓储服务；科研技术服务；提供与上述业务有关的技术、经营咨询和技术、信息服务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 2.06,
        "net_profit_yoy_pct": -0.91,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.1,
        "net_margin_pct": 0.01,
        "debt_to_assets_pct": 0.67,
        "cfo_to_np": -18.32,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 2.06,
        "net_profit_yoy_pct": -0.91,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 43,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "地产 / 建筑建材",
          "房地产开发",
          "可售型商品房",
          "代建业务",
          "集中商业",
          "产业办公",
          "公寓酒店等持有物业运营与资产管理以及会展和邮轮业务",
          "基础物业管理"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600048",
      "name": "保利发展",
      "bucket": "地产 / 建筑建材",
      "subcategory": "房地产开发",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "央企地产代表公司",
      "old_report_status": "需新增报告",
      "rule_root_id": "real_estate_construction",
      "rule_child_id": "real_estate_developer",
      "evidence_level": "medium",
      "root_alias_hits": [
        "地产",
        "房地产",
        "建筑",
        "建筑工程"
      ],
      "child_alias_hits": [
        "房地产开发",
        "房地产",
        "地产开发"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "房地产开发与销售、物业服务、全域化管理、销售代理、商业管理、不动产金融等。",
        "product_types": [
          "房地产开发"
        ],
        "product_names": [
          "房地产开发"
        ],
        "business_scope": "房地产开发经营；物业管理；房屋租赁；建筑物拆除（不含爆破作业）；房屋建筑工程设计服务；铁路、道路、隧道和桥梁工程建筑；建筑工程后期装饰、装修和清理；土石方工程服务；建筑物空调设备、通风设备系统安装服务；酒店管理；商品批发贸易（许可审批类商品除外）；商品零售贸易（许可审批类商品除外）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 11.91,
        "net_profit_yoy_pct": -0.57,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.13,
        "net_margin_pct": 0.03,
        "debt_to_assets_pct": 0.72,
        "cfo_to_np": 7.28,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 11.91,
        "net_profit_yoy_pct": -0.57,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 95,
        "fundamental_score": 58,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "地产 / 建筑建材",
          "房地产开发"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600585",
      "name": "海螺水泥",
      "bucket": "地产 / 建筑建材",
      "subcategory": "建材 / 水泥玻璃",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "水泥行业龙头样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "real_estate_construction",
      "rule_child_id": "building_materials",
      "evidence_level": "medium",
      "root_alias_hits": [
        "水泥"
      ],
      "child_alias_hits": [
        "水泥"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "水泥、商品熟料、骨料及混凝土的生产、销售。",
        "product_types": [
          "水泥",
          "商品熟料",
          "骨料",
          "混凝土"
        ],
        "product_names": [
          "水泥",
          "商品熟料",
          "骨料",
          "混凝土"
        ],
        "business_scope": "水泥及辅料、水泥制品生产、销售、出口、进口，机械设备、仪器仪表、零配件及企业生产、科研所需的原辅材料生产、销售、出口、进口，电子设备生产、销售、出口、进口，技术服务，煤炭批发、零售；承包国外工程项目、对外派遣实施工程所需的劳务人员，水泥用石灰岩、水泥配料用砂岩露天开采。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 14.42,
        "net_profit_yoy_pct": -0.19,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.21,
        "net_margin_pct": 0.08,
        "debt_to_assets_pct": 0.19,
        "cfo_to_np": 0.23,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 14.42,
        "net_profit_yoy_pct": -0.19,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 68,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "地产 / 建筑建材",
          "建材 / 水泥玻璃",
          "水泥",
          "商品熟料",
          "骨料",
          "混凝土"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601668",
      "name": "中国建筑",
      "bucket": "地产 / 建筑建材",
      "subcategory": "建筑工程 / 基建",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "建筑央企核心样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "real_estate_construction",
      "rule_child_id": "construction_engineering",
      "evidence_level": "medium",
      "root_alias_hits": [
        "地产",
        "房地产",
        "建筑",
        "建筑工程"
      ],
      "child_alias_hits": [
        "建筑工程",
        "基础设施建设"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "房地产开发、融投资建造、城镇综合建设等领域。",
        "product_types": [
          "房屋建筑工程",
          "基础设施建设与投资",
          "房地产开发与投资",
          "勘察设计"
        ],
        "product_names": [
          "房屋建筑工程",
          "基础设施建设与投资",
          "房地产开发与投资",
          "勘察设计"
        ],
        "business_scope": "一般经营项目：承担国内外公用、民用房屋建筑工程的施工、安装、咨询；基础设施项目的投资与承建；国内外房地产投资与开发；建筑与基础设施建设的勘察与设计；装饰工程、园林工程的设计与施工；实业投资；承包境内外资工程；进出口业务；建筑材料及其他非金属矿物制品、建筑用金属制品、工具、建筑工程机械和钻探机械的生产与销售。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 163.6,
        "net_profit_yoy_pct": -0.08,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.08,
        "net_margin_pct": 0.03,
        "debt_to_assets_pct": 0.77,
        "cfo_to_np": -4.71,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 163.6,
        "net_profit_yoy_pct": -0.08,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 67,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "地产 / 建筑建材",
          "建筑工程 / 基建",
          "房屋建筑工程",
          "基础设施建设与投资",
          "房地产开发与投资",
          "勘察设计"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300070",
      "name": "碧水源",
      "bucket": "环保 / 水务固废",
      "subcategory": "水务 / 污水处理",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "膜法水处理样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "environmental_utilities",
      "rule_child_id": "water_treatment",
      "evidence_level": "medium",
      "root_alias_hits": [
        "环保",
        "环境",
        "环境治理",
        "水务",
        "污水处理",
        "资源化"
      ],
      "child_alias_hits": [
        "水务",
        "污水处理"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "环境保护及水处理业务。",
        "product_types": [
          "环保整体解决方案",
          "运营服务",
          "光科技整体解决方案",
          "市政与给排水"
        ],
        "product_names": [
          "环保整体解决方案",
          "运营服务",
          "光科技整体解决方案",
          "市政与给排水"
        ],
        "business_scope": "污水处理技术、污水资源化技术、水资源管理技术、水处理技术、固体废弃物处理技术、大气环境治理技术、生态工程技术、生态修复技术开发、技术推广、技术转让、技术咨询、技术服务、技术培训；施工总承包，专业承包；环境污染处理工程设计；建设工程项目管理；生产膜、膜组件、膜设备、水处理设备、海水淡化设备、给排水设备及配套产品（仅限外埠生产）；委托生产膜、膜组件、膜设备、给排水设备及配套产品；销售环境污染处理专用设备及材料、膜、膜组件、膜设备、给排水设备及配套产品；水务领域投资及投资管理；货物进出口、技术进出口、代理进出口。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.85,
        "net_profit_yoy_pct": 0.01,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.24,
        "net_margin_pct": 0.07,
        "debt_to_assets_pct": 0.63,
        "cfo_to_np": -3.59,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 0.85,
        "net_profit_yoy_pct": 0.01,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 65,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "环保 / 水务固废",
          "水务 / 污水处理",
          "环保整体解决方案",
          "运营服务",
          "光科技整体解决方案",
          "市政与给排水"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "003816",
      "name": "中国广核",
      "bucket": "电力与公用事业",
      "subcategory": "核电",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "核电运营代表公司",
      "old_report_status": "需新增报告",
      "rule_root_id": "renewable_power",
      "rule_child_id": "power_nuclear",
      "evidence_level": "medium",
      "root_alias_hits": [
        "电力",
        "发电"
      ],
      "child_alias_hits": [
        "核电",
        "核能"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "建设、运营及管理核电站，销售该等核电站所发电力，组织开发核电站的设计及科研工作。",
        "product_types": [
          "电力"
        ],
        "product_names": [
          "电力"
        ],
        "business_scope": "以核能为主的电力生产、热力生产和供应，相关专业技术服务，核废物处置，组织实施核电站工程项目的建设及管理；组织核电站运行、维修及相关业务；组织开发核电站的设计及科研工作；从事相关投资及进出口业务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 40.65,
        "net_profit_yoy_pct": -0.09,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.39,
        "net_margin_pct": 0.25,
        "debt_to_assets_pct": 0.66,
        "cfo_to_np": 0.86,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 40.65,
        "net_profit_yoy_pct": -0.09,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 73,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "核电",
          "电力"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601985",
      "name": "中国核电",
      "bucket": "电力与公用事业",
      "subcategory": "核电",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "核电运营代表公司",
      "old_report_status": "需新增报告",
      "rule_root_id": "renewable_power",
      "rule_child_id": "power_nuclear",
      "evidence_level": "medium",
      "root_alias_hits": [
        "电力",
        "发电",
        "清洁能源"
      ],
      "child_alias_hits": [
        "核电",
        "核能"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "电力（包括核能发电与风、光发电）销售业务、核电相关技术服务与咨询业务。",
        "product_types": [
          "电力"
        ],
        "product_names": [
          "电力"
        ],
        "business_scope": "发电、输电、供电业务；通用设备修理；智能输配电及控制设备销售；输配电及控制设备制造；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；清洁能源项目投资、开发；输配电项目投资、投资管理。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 41.39,
        "net_profit_yoy_pct": -0.34,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": 0.4,
        "net_margin_pct": 0.22,
        "debt_to_assets_pct": 0.69,
        "cfo_to_np": 1.96,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 41.39,
        "net_profit_yoy_pct": -0.34,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 77,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "核电",
          "电力"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002563",
      "name": "森马服饰",
      "bucket": "纺服轻工",
      "subcategory": "服装 / 纺织",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "休闲服饰样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "textile_light_industry",
      "rule_child_id": "apparel_textile",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [
        "服装",
        "纺织"
      ],
      "warnings": [
        "root_alias_not_found_in_business_source"
      ],
      "business_evidence": {
        "business_summary": "休闲服饰、儿童服饰的生产、制造和销售。",
        "product_types": [
          "休闲服饰",
          "儿童服饰",
          "其他"
        ],
        "product_names": [
          "休闲服饰",
          "儿童服饰",
          "其他"
        ],
        "business_scope": "一般项目：服装服饰零售；服装服饰批发；鞋帽零售；鞋帽批发；针纺织品销售；针纺织品及原料销售；箱包销售；玩具、动漫及游艺用品销售；母婴用品销售；眼镜销售（不含隐形眼镜）；日用品销售；工艺美术品及收藏品零售（象牙及其制品除外）；工艺美术品及收藏品批发（象牙及其制品除外）；文具用品零售；文具用品批发；厨具卫具及日用杂品批发；卫生用品和一次性使用医疗用品销售；塑料制品销售；橡胶制品销售；服装制造；服饰制造；皮革制品制造；羽毛（绒）及制品制造；鞋制造；箱包制造；专业设计服务；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；灯具销售；日用百货销售；家用视听设备销售；化妆品零售；化妆品批发；劳动保护用品生产；劳动保护用品销售；特种劳动防护用品生产；特种劳动防护用品销售；非居住房地产租赁；普通货物仓储服务（不含危险化学品等需许可审批的项目）；会议及展览服务；图文设计制作；物业管理；货物进出口；个人卫生用品销售；日用口罩（非医用）销售；图书出租；期刊出租；社会经济咨询服务；个人商务服务；知识产权服务（专利代理服务除外）（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。许可项目：住宅室内装饰装修；出版物零售；（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 3.1,
        "net_profit_yoy_pct": 0.45,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.48,
        "net_margin_pct": 0.09,
        "debt_to_assets_pct": 0.35,
        "cfo_to_np": 1.08,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 3.1,
        "net_profit_yoy_pct": 0.45,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 89,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "纺服轻工",
          "服装 / 纺织",
          "休闲服饰",
          "儿童服饰",
          "其他"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600398",
      "name": "海澜之家",
      "bucket": "纺服轻工",
      "subcategory": "服装 / 纺织",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "服装零售代表样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "textile_light_industry",
      "rule_child_id": "apparel_textile",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [
        "服装",
        "纺织"
      ],
      "warnings": [
        "root_alias_not_found_in_business_source"
      ],
      "business_evidence": {
        "business_summary": "自主品牌运营、国际品牌授权及代理、团购定制以及城市奥莱等业务。",
        "product_types": [
          "服装"
        ],
        "product_names": [
          "裤子",
          "T恤衫",
          "羽绒服",
          "茄克衫",
          "衬衫",
          "西服",
          "鞋子",
          "针织衫",
          "其他"
        ],
        "business_scope": "毛纺新技术、新产品、新材料、通讯产品的研发、销售，环保高新技术产品的开发及投资，精纺呢绒、毛纱、服装（包含执法服、制服）、针织品、衬衫、领带、袜子、纺织原料、服饰、皮革、毛皮、羽毛及其制品、鞋子、服装辅料、防静电工作服、阻燃工作服、防酸工作服的制造、加工、销售，安全帽、塑料橡胶帽的销售，自营和代理各类商品及技术的进出口业务；自有房屋的租赁服务；物业管理（凭有效资质证书经营）；服装设计。（依法须经批准的项目，经相关部门批准后方可开展经营活动）一般项目：互联网销售（除销售需要许可的商品）；品牌管理；企业管理咨询；专业设计服务；信息系统运行维护服务；信息系统集成服务；软件开发；信息技术咨询服务；互联网数据服务；数据处理和存储支持服务；软件销售；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；会议及展览服务；以自有资金从事投资活动；股权投资；日用百货销售；户外用品销售；办公用品销售；文具用品零售；母婴用品销售；家用电器销售；体育用品及器材零售；化妆品零售；五金产品零售；第一类医疗器械销售；服饰研发；服装、服饰检验、整理服务；大数据服务；计算机系统服务；企业管理；供应链管理服务（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 9.19,
        "net_profit_yoy_pct": 0.02,
        "revenue_yoy_pct": "",
        "roe_pct": 0.05,
        "gross_margin_pct": 0.45,
        "net_margin_pct": 0.14,
        "debt_to_assets_pct": 0.42,
        "cfo_to_np": 1.72,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 9.19,
        "net_profit_yoy_pct": 0.02,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 94,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "纺服轻工",
          "服装 / 纺织",
          "裤子",
          "T恤衫",
          "羽绒服",
          "茄克衫",
          "衬衫",
          "西服"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "603816",
      "name": "顾家家居",
      "bucket": "纺服轻工",
      "subcategory": "家居 / 轻工制造",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "软体家居样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "textile_light_industry",
      "rule_child_id": "home_light_industry",
      "evidence_level": "medium",
      "root_alias_hits": [
        "家居"
      ],
      "child_alias_hits": [
        "家居"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "客厅、餐厅、卧室、整家定制等全场景家居产品的研究、设计、开发、生产、销售与服务。",
        "product_types": [
          "沙发",
          "卧室产品",
          "集成产品",
          "定制家具",
          "信息技术服务"
        ],
        "product_names": [
          "沙发",
          "卧室产品",
          "集成产品",
          "定制家具",
          "信息技术服务"
        ],
        "business_scope": "许可项目：货物进出口；艺术品进出口；技术进出口；第二类增值电信业务（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准）。一般项目：家具制造；家具销售；家具零配件生产；家具零配件销售；家具安装和维修服务；门窗销售；采购代理服务；信息咨询服务（不含许可类信息咨询服务）；家用电器研发；家用电器制造；家用电器销售；家用电器零配件销售；家用电器安装服务；日用电器修理；家居用品制造；日用品销售；日用百货销售；日用品批发；日用产品修理；搪瓷制品销售；制镜及类似品加工；建筑用金属配件销售；五金产品零售；互联网销售（除销售需要许可的商品）（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 5.04,
        "net_profit_yoy_pct": -0.04,
        "revenue_yoy_pct": "",
        "roe_pct": 0.05,
        "gross_margin_pct": 0.34,
        "net_margin_pct": 0.1,
        "debt_to_assets_pct": 0.4,
        "cfo_to_np": 0.2,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 5.04,
        "net_profit_yoy_pct": -0.04,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 68,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "纺服轻工",
          "家居 / 轻工制造",
          "沙发",
          "卧室产品",
          "集成产品",
          "定制家具",
          "信息技术服务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "603833",
      "name": "欧派家居",
      "bucket": "纺服轻工",
      "subcategory": "家居 / 轻工制造",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "定制家居样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "textile_light_industry",
      "rule_child_id": "home_light_industry",
      "evidence_level": "medium",
      "root_alias_hits": [
        "家居",
        "纸制品"
      ],
      "child_alias_hits": [
        "家居"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "全屋家居产品的个性化设计、研发、生产、销售、安装与室内装饰服务。",
        "product_types": [
          "橱柜",
          "衣柜及配套家具产品",
          "卫浴",
          "木门"
        ],
        "product_names": [
          "整体厨房",
          "全屋定制",
          "卫浴",
          "定制木门",
          "金属门窗",
          "软装",
          "智能家居"
        ],
        "business_scope": "家具制造；家具零配件生产；家具零配件销售；家具销售；家具安装和维修服务；地板制造；地板销售；门窗制造加工；门窗销售；金属门窗工程施工；楼梯制造；楼梯销售；家居用品销售；家居用品制造；水资源专用机械设备制造；气体、液体分离及纯净设备制造；气体、液体分离及纯净设备销售；建筑装饰、水暖管道零件及其他建筑用金属制品制造；建筑装饰材料销售；木材加工；人造板制造；机械电气设备制造；家用电器制造；家用电器安装服务；家用电器销售；家用电器研发；家用电器零配件销售；家用纺织制成品制造；纸制品制造；纸制品销售；非电力家用器具制造；非电力家用器具销售；搪瓷制品制造；搪瓷制品销售；商业、饮食、服务专用设备制造；金属制日用品制造；卫生陶瓷制品制造；卫生陶瓷制品销售；卫生洁具制造；卫生洁具研发；卫生洁具销售；厨具卫具及日用杂品批发；厨具卫具及日用杂品研发；厨具卫具及日用杂品零售；日用玻璃制品制造；日用玻璃制品销售；电热食品加工设备销售；日用品销售；灯具销售；互联网销售（除销售需要许可的商品）；日用百货销售；软件销售；软件开发；建筑用石加工；日用电器修理；住宅水电安装维护服务；普通货物仓储服务（不含危险化学品等需许可审批的项目）；装卸搬运；国内货物运输代理；专业设计服务；工业设计服务；咨询策划服务；商业综合体管理服务；会议及展览服务；供应链管理服务；物联网技术研发；土地使用权租赁；住房租赁；非居住房地产租赁；以自有资金从事投资活动；建筑陶瓷制品销售；照明器具制造；照明器具销售；配电开关控制设备制造；配电开关控制设备销售；智能家庭消费设备制造；智能家庭消费设备销售；五金产品批发；五金产品零售；音响设备销售；电子产品销售；数字视频监控系统销售；物联网设备销售；集成电路芯片及产品销售；电热食品加工设备生产；货物进出口；技术进出口；燃气燃烧器具安装、维修；房屋建筑和市政基础设施项目工程总承包；住宅室内装饰装修；建筑智能化工程施工；建筑劳务分包；建筑物拆除作业（爆破作业除外）；施工专业作业；第二类增值电信业务（依法须经批准的项目，经相关部门批准后方可开展经营活动。）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.56,
        "net_profit_yoy_pct": -0.5,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.35,
        "net_margin_pct": 0.06,
        "debt_to_assets_pct": 0.43,
        "cfo_to_np": -2.33,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 1.56,
        "net_profit_yoy_pct": -0.5,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 57,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "纺服轻工",
          "家居 / 轻工制造",
          "整体厨房",
          "全屋定制",
          "卫浴",
          "定制木门",
          "金属门窗",
          "软装"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300454",
      "name": "深信服",
      "bucket": "计算机 / 软件服务",
      "subcategory": "网络安全 / 信创",
      "priority": "P1",
      "source": "下一批80-120候选池",
      "reason": "补齐网络安全头部样本",
      "old_report_status": "需新增报告",
      "rule_root_id": "computer_software_it",
      "rule_child_id": "cybersecurity_xinchuang",
      "evidence_level": "medium",
      "root_alias_hits": [
        "计算机",
        "IT",
        "网络安全",
        "信息系统"
      ],
      "child_alias_hits": [
        "网络安全"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "向企业级用户提供企业级网络安全、云计算、AI、基础网络与物联网领域相关的产品、服务和解决方案。",
        "product_types": [
          "网络安全业务",
          "云计算及IT基础设施业务",
          "基础网络和物联网业务"
        ],
        "product_names": [
          "下一代防火墙AF",
          "零信任",
          "NDR",
          "MSS",
          "XDR",
          "全网行为管理AC",
          "VPN",
          "应用交付AD超融合（HCI）",
          "桌面云（VDI）",
          "EDS",
          "混合云",
          "VCC",
          "信锐网科产品"
        ],
        "business_scope": "一般经营项目是：非居住房地产租赁（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。许可经营项目是：计算机软硬件的研发、生产、销售及相关技术服务；网络产品的研发、生产、销售及相关技术服务；计算机信息系统集成以及相关技术咨询（以上均不含专营、专控、专卖商品及限制项目）；货物及技术的出口（不含分销）；第一类增值电信业务；第二类增值电信业务。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -0.65,
        "net_profit_yoy_pct": 0.74,
        "revenue_yoy_pct": "",
        "roe_pct": -0.01,
        "gross_margin_pct": 0.6,
        "net_margin_pct": -0.04,
        "debt_to_assets_pct": 0.29,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": -0.65,
        "net_profit_yoy_pct": 0.74,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "计算机 / 软件服务",
          "网络安全 / 信创",
          "下一代防火墙AF",
          "零信任",
          "NDR",
          "MSS",
          "XDR",
          "全网行为管理AC"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "000938",
      "name": "紫光股份",
      "bucket": "AI算力",
      "subcategory": "AI服务器链",
      "priority": "P1",
      "source": "第三批扩容候选池",
      "reason": "ICT设备与云网基础设施样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "ai_compute",
      "rule_child_id": "ai_server",
      "evidence_level": "medium",
      "root_alias_hits": [
        "AI",
        "人工智能"
      ],
      "child_alias_hits": [
        "服务器"
      ],
      "warnings": [
        "node_override_applied"
      ],
      "business_evidence": {
        "business_summary": "提供全栈智能化的信息通信（ICT）基础设施、云与智能平台，以及数字化转型及智能化升级解决方案。",
        "product_types": [
          "网络设备",
          "服务器",
          "存储产品",
          "云与智能",
          "主动安全",
          "智能终端"
        ],
        "product_names": [
          "交换机",
          "路由器",
          "WLAN",
          "SDN",
          "PON",
          "智能管理",
          "运维服务",
          "通用计算服务器",
          "人工智能计算服务器",
          "关键业务计算服务器",
          "边缘计算服务器",
          "企业级智能全闪存存储",
          "企业级智能混合闪存存储",
          "分布式存储",
          "数据备份与保护",
          "存储网络设备",
          "云操作系统",
          "虚拟化平台",
          "超融合产品",
          "大数据平台",
          "数据库",
          "边界安全",
          "应用安全",
          "数据安全",
          "密码安全",
          "工控安全",
          "终端安全",
          "安全管理",
          "安全检测与审计",
          "云安全",
          "商用笔记本电脑",
          "商用台式机",
          "智慧云屏",
          "AI工作站"
        ],
        "business_scope": "一般项目：技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；计算机软硬件及辅助设备零售；计算机软硬件及辅助设备批发；计算机软硬件及外围设备制造；电子产品销售；电子元器件零售；电子元器件批发；通信设备销售；通信设备制造；广播影视设备销售；玩具销售；仪器仪表销售；文具用品零售；文具用品批发；办公设备销售；办公用品销售；文化、办公用设备制造；计算机系统服务；计算机及办公设备维修；数据处理服务；软件开发；软件销售；软件外包服务；企业管理；以自有资金从事投资活动；非居住房地产租赁；物业管理；专业设计服务；会议及展览服务；货物进出口；进出口代理。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 9.61,
        "net_profit_yoy_pct": 1.26,
        "revenue_yoy_pct": "",
        "roe_pct": 0.05,
        "gross_margin_pct": 0.13,
        "net_margin_pct": 0.03,
        "debt_to_assets_pct": 0.82,
        "cfo_to_np": -3.22,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": 9.61,
        "net_profit_yoy_pct": 1.26,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 93,
        "fundamental_score": 88,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "AI算力",
          "AI服务器链",
          "交换机",
          "路由器",
          "WLAN",
          "SDN",
          "PON",
          "智能管理"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "603019",
      "name": "中科曙光",
      "bucket": "AI算力",
      "subcategory": "AI服务器链",
      "priority": "P1",
      "source": "第三批扩容候选池",
      "reason": "国产算力整机与高性能计算样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "ai_compute",
      "rule_child_id": "ai_server",
      "evidence_level": "medium",
      "root_alias_hits": [
        "数据中心"
      ],
      "child_alias_hits": [],
      "warnings": [
        "node_override_applied",
        "child_alias_not_found_in_business_source"
      ],
      "business_evidence": {
        "business_summary": "高端计算机、存储、安全、数据中心产品的研发及制造，同时大力发展数字基础设施建设、智能计算等业务。",
        "product_types": [
          "高端计算机",
          "存储产品",
          "网络安全产品",
          "云计算服务",
          "数据中心",
          "计算服务"
        ],
        "product_names": [
          "高端计算机",
          "存储产品",
          "网络安全产品",
          "云计算服务",
          "数据中心",
          "计算服务"
        ],
        "business_scope": "电子信息、软件技术开发、咨询、服务、转让、培训；计算机及外围设备、软件制造、批发兼零售；计算机系统集成；物业管理；货物及技术进出口；设备出租、场地出租；计算机及外围设备维修、租赁；建筑安装业；通信设备研发、生产、批发兼零售。（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 1.92,
        "net_profit_yoy_pct": 0.22,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.27,
        "net_margin_pct": 0.06,
        "debt_to_assets_pct": 0.41,
        "cfo_to_np": -7.24,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": 1.92,
        "net_profit_yoy_pct": 0.22,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 79,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "AI算力",
          "AI服务器链",
          "高端计算机",
          "存储产品",
          "网络安全产品",
          "云计算服务",
          "数据中心",
          "计算服务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "300014",
      "name": "亿纬锂能",
      "bucket": "新能源汽车",
      "subcategory": "动力电池 / 储能",
      "priority": "P1",
      "source": "第三批扩容候选池",
      "reason": "动力储能电池样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "new_energy_vehicle",
      "rule_child_id": "battery_storage",
      "evidence_level": "medium",
      "root_alias_hits": [
        "新能源车"
      ],
      "child_alias_hits": [
        "动力电池",
        "锂电池",
        "储能",
        "电池系统"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "消费电池（包括锂原电池、小型锂离子电池、圆柱电池）、动力电池（包括新能源车电池及其电池系统）和储能电池的研发、生产和销售。",
        "product_types": [
          "消费电池",
          "动力电池",
          "储能电池"
        ],
        "product_names": [
          "锂原电池",
          "小型锂离子电池",
          "圆柱电池",
          "软包三元电池",
          "方形三元电池",
          "大圆柱电池",
          "大方形电池",
          "方形磷酸铁锂电池",
          "圆柱铁锂电池"
        ],
        "business_scope": "一般项目：电池制造；电池销售；新材料技术研发；新兴能源技术研发；合成材料制造（不含危险化学品）；合成材料销售；金属材料制造；金属材料销售；新型金属功能材料销售；高性能有色金属及合金材料销售；智能仪器仪表制造；智能仪器仪表销售；配电开关控制设备研发；电子元器件与机电组件设备制造；电子元器件与机电组件设备销售；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；货物进出口；住房租赁；非居住房地产租赁；土地使用权租赁；金属切削加工服务；机械设备租赁；物业管理；合同能源管理；专用设备修理；电气设备修理。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 14.43,
        "net_profit_yoy_pct": 0.31,
        "revenue_yoy_pct": "",
        "roe_pct": 0.03,
        "gross_margin_pct": 0.14,
        "net_margin_pct": 0.07,
        "debt_to_assets_pct": 0.65,
        "cfo_to_np": -0.25,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-25",
        "net_profit_attr_yi": 14.43,
        "net_profit_yoy_pct": 0.31,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 84,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "新能源汽车",
          "动力电池 / 储能",
          "锂原电池",
          "小型锂离子电池",
          "圆柱电池",
          "软包三元电池",
          "方形三元电池",
          "大圆柱电池"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688008",
      "name": "澜起科技",
      "bucket": "半导体",
      "subcategory": "半导体设备",
      "priority": "P1",
      "source": "第三批扩容候选池",
      "reason": "内存接口芯片与AI服务器链样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "semiconductor",
      "rule_child_id": "semicap",
      "evidence_level": "medium",
      "root_alias_hits": [
        "芯片",
        "集成电路"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "business_evidence": {
        "business_summary": "为云计算及AI基础设施提供创新、可靠及高能效的互连解决方案。",
        "product_types": [
          "集成电路产品"
        ],
        "product_names": [
          "互连类芯片"
        ],
        "business_scope": "集成电路、线宽0.25微米及以下大规模集成电路、软件产品、新型电子元器件(片式元器件、敏感元器件及传感器、频率控制与选择元件、混合集成电路、电力电子器件、光电子器件)的设计、开发、批发、进出口、佣金代理(拍卖除外)并提供相关的配套服务。(不涉及国营贸易管理商品,涉及配额、许可管理的,按国家有关规定办理申请)【依法须经批准的项目,经相关部门批准后方可开展经营活动】",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 8.3,
        "net_profit_yoy_pct": 0.61,
        "revenue_yoy_pct": "",
        "roe_pct": 0.05,
        "gross_margin_pct": 0.7,
        "net_margin_pct": 0.57,
        "debt_to_assets_pct": 0.04,
        "cfo_to_np": 0.76,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 8.3,
        "net_profit_yoy_pct": 0.61,
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
          "互连类芯片"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688347",
      "name": "华虹公司",
      "bucket": "半导体",
      "subcategory": "半导体设备",
      "priority": "P1",
      "source": "第三批扩容候选池",
      "reason": "特色工艺晶圆制造样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "semiconductor",
      "rule_child_id": "semicap",
      "evidence_level": "medium",
      "root_alias_hits": [
        "集成电路"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "business_evidence": {
        "business_summary": "集成电路有关的设计、开发、制造、测试、封装，销售集成电路产品及相关技术支持，销售自产产品。",
        "product_types": [
          "晶圆"
        ],
        "product_names": [
          "晶圆"
        ],
        "business_scope": "--",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-05-15",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -1.27,
        "net_profit_yoy_pct": 5.13,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.18,
        "net_margin_pct": -0.03,
        "debt_to_assets_pct": 0.38,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-05-15",
        "net_profit_attr_yi": -1.27,
        "net_profit_yoy_pct": 5.13,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 49,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "半导体设备",
          "晶圆"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688981",
      "name": "中芯国际",
      "bucket": "半导体",
      "subcategory": "半导体设备",
      "priority": "P1",
      "source": "第三批扩容候选池",
      "reason": "晶圆制造核心样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "semiconductor",
      "rule_child_id": "semicap",
      "evidence_level": "medium",
      "root_alias_hits": [
        "半导体",
        "芯片",
        "集成电路"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "business_evidence": {
        "business_summary": "基于多种技术节点和技术平台的集成电路晶圆代工业务，并提供设计服务与IP支持、光掩模制造等配套服务。",
        "product_types": [
          "集成电路晶圆代工",
          "设计服务与IP支持",
          "光掩模制造"
        ],
        "product_names": [
          "集成电路晶圆代工",
          "设计服务与IP支持",
          "光掩模制造"
        ],
        "business_scope": "半导体（硅片及各类化合物半导体）集成电路芯片制造及测试，与集成电路有关的开发、设计服务、技术服务、光掩膜制造、测试销售自产产品，以及其他服务。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-05-15",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 15.94,
        "net_profit_yoy_pct": 0.0,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.21,
        "net_margin_pct": 0.09,
        "debt_to_assets_pct": 0.35,
        "cfo_to_np": 3.22,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-05-15",
        "net_profit_attr_yi": 15.94,
        "net_profit_yoy_pct": 0.0,
        "improvement": "盈利但同比未改善"
      },
      "classification_evidence": {
        "theme_purity_score": 87,
        "fundamental_score": 72,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "半导体",
          "半导体设备",
          "集成电路晶圆代工",
          "设计服务与IP支持",
          "光掩模制造"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "600438",
      "name": "通威股份",
      "bucket": "电力与公用事业",
      "subcategory": "绿电运营",
      "priority": "P1",
      "source": "第三批扩容候选池",
      "reason": "硅料与电池片周期样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "renewable_power",
      "rule_child_id": "renewable_operator",
      "evidence_level": "medium",
      "root_alias_hits": [
        "电力",
        "发电"
      ],
      "child_alias_hits": [],
      "warnings": [
        "child_alias_not_found_in_business_source"
      ],
      "business_evidence": {
        "business_summary": "生产、销售工业硅、太阳能高纯晶硅及化工产品、硅棒、硅片、太阳能电池、组件等；太阳能发电及相关业务；生产、销售饲料等；水产养殖、种苗培育、食品加工等。",
        "product_types": [
          "饲料",
          "食品及相关业务",
          "太阳能电池",
          "组件及相关业务",
          "高纯晶硅",
          "化工及相关业务",
          "光伏电力及相关业务"
        ],
        "product_names": [
          "饲料",
          "食品及相关业务",
          "太阳能电池",
          "组件及相关业务",
          "高纯晶硅",
          "化工及相关业务",
          "光伏电力及相关业务"
        ],
        "business_scope": "（以下范围不含前置许可项目，后置许可项目凭许可证或审批文件经营）饲料加工；水产品加工；屠宰及肉类加工；食品制造业；兽用药品制造；农林牧渔专用机械制造；化学原料和化学制品制造业；光伏设备及元器件制造；电池制造；燃气、太阳能及类似能源家用器具制造；计算机制造；非金属矿物制品业；（以上经营项目仅限分支机构经营）渔业、畜牧业；畜牧服务业、渔业服务业；兽药经营；太阳能发电；电力供应；电气安装；工程设计；科技推广和应用服务业；废弃资源综合利用业；环境治理业；商品批发和零售；租赁业和商务服务业；进出口业；互联网信息服务。(依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -32.14,
        "net_profit_yoy_pct": 0.06,
        "revenue_yoy_pct": "",
        "roe_pct": -0.06,
        "gross_margin_pct": -0.04,
        "net_margin_pct": -0.27,
        "debt_to_assets_pct": 0.74,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": -32.14,
        "net_profit_yoy_pct": 0.06,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "绿电运营",
          "饲料",
          "食品及相关业务",
          "太阳能电池",
          "组件及相关业务",
          "高纯晶硅",
          "化工及相关业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601012",
      "name": "隆基绿能",
      "bucket": "电力与公用事业",
      "subcategory": "绿电运营",
      "priority": "P1",
      "source": "第三批扩容候选池",
      "reason": "光伏硅片组件龙头样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "renewable_power",
      "rule_child_id": "renewable_operator",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "business_evidence": {
        "business_summary": "单晶硅棒和硅片、电池和组件的研发、生产和销售，以及光伏电站的开发运营。",
        "product_types": [
          "组件及电池",
          "硅片及硅棒",
          "电站业务"
        ],
        "product_names": [
          "组件及电池",
          "硅片及硅棒",
          "电站业务"
        ],
        "business_scope": "半导体材料、太阳能电池、电子元器件、半导体设备的开发、制造、销售；商品进出口业务；光伏电站工程设计施工、光伏电站系统运行维护；LED照明灯具、节能产品的销售、维修及技术服务；合同能源管理。（以上经营范围涉及许可经营项目的，凭许可证明文件或批准证书在有效期内经营，未经许可不得经营）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -19.87,
        "net_profit_yoy_pct": -0.34,
        "revenue_yoy_pct": "",
        "roe_pct": -0.04,
        "gross_margin_pct": -0.01,
        "net_margin_pct": -0.18,
        "debt_to_assets_pct": 0.66,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-29",
        "net_profit_attr_yi": -19.87,
        "net_profit_yoy_pct": -0.34,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 20,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "绿电运营",
          "组件及电池",
          "硅片及硅棒",
          "电站业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688223",
      "name": "晶科能源",
      "bucket": "电力与公用事业",
      "subcategory": "绿电运营",
      "priority": "P1",
      "source": "第三批扩容候选池",
      "reason": "光伏组件全球化样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "renewable_power",
      "rule_child_id": "renewable_operator",
      "evidence_level": "medium",
      "root_alias_hits": [],
      "child_alias_hits": [],
      "warnings": [
        "root_alias_not_found_in_business_source",
        "child_alias_not_found_in_business_source"
      ],
      "business_evidence": {
        "business_summary": "光伏组件、硅片及光伏电池片的研发、生产和销售以及光伏技术的应用和产业化。",
        "product_types": [
          "硅片及光伏电池片",
          "光伏组件"
        ],
        "product_names": [
          "硅片及光伏电池片",
          "光伏组件"
        ],
        "business_scope": "单晶硅棒、单晶硅片、多晶铸锭、多晶硅片；高效太阳能电池、组件和光伏应用系统的研发、加工、制造、安装和销售；太阳能原料及相关配套产品的生产和销售；上述应用系统用电子产品、太阳能建筑装饰材料、太阳能照明设备的设计、鉴证咨询、集成、制造、销售；从事货物及技术进出口业务。(依法须经批准的项目，经相关部门审批后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": -13.88,
        "net_profit_yoy_pct": 0.03,
        "revenue_yoy_pct": "",
        "roe_pct": -0.05,
        "gross_margin_pct": 0.06,
        "net_margin_pct": -0.11,
        "debt_to_assets_pct": 0.76,
        "cfo_to_np": "",
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": -13.88,
        "net_profit_yoy_pct": 0.03,
        "improvement": "仍为亏损，需结合同比和现金流判断是否改善"
      },
      "classification_evidence": {
        "theme_purity_score": 72,
        "fundamental_score": 41,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "电力与公用事业",
          "绿电运营",
          "硅片及光伏电池片",
          "光伏组件"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "002747",
      "name": "埃斯顿",
      "bucket": "机器人 / 自动化",
      "subcategory": "工业自动化 / 工业母机",
      "priority": "P1",
      "source": "第三批扩容候选池",
      "reason": "工业机器人本体样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "robotics",
      "rule_child_id": "robot_industrial_auto",
      "evidence_level": "medium",
      "root_alias_hits": [
        "机器人",
        "自动化"
      ],
      "child_alias_hits": [],
      "warnings": [
        "node_override_applied",
        "child_alias_not_found_in_business_source"
      ],
      "business_evidence": {
        "business_summary": "自动化核心部件及运动控制系统和工业机器人及智能制造系统业务。",
        "product_types": [
          "自动化核心部件及运动控制系统",
          "工业机器人及智能制造系统"
        ],
        "product_names": [
          "自动化核心部件及运动控制系统",
          "工业机器人及智能制造系统"
        ],
        "business_scope": "生产、开发、服务各类机电一体化产品、自动控制、运动控制、驱动装置、计算机应用软件、伺服液压控制及系统集成；销售自产产品。（依法须经批准的项目，经相关部门批准后方可开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.97,
        "net_profit_yoy_pct": 6.75,
        "revenue_yoy_pct": "",
        "roe_pct": 0.04,
        "gross_margin_pct": 0.3,
        "net_margin_pct": 0.08,
        "debt_to_assets_pct": 0.69,
        "cfo_to_np": -1.52,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 0.97,
        "net_profit_yoy_pct": 6.75,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 86,
        "fundamental_score": 87,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "机器人 / 自动化",
          "工业自动化 / 工业母机",
          "自动化核心部件及运动控制系统",
          "工业机器人及智能制造系统"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "603728",
      "name": "鸣志电器",
      "bucket": "机器人 / 自动化",
      "subcategory": "执行器",
      "priority": "P1",
      "source": "第三批扩容候选池",
      "reason": "空心杯电机与运动控制样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "robotics",
      "rule_child_id": "robot_actuator_formal",
      "evidence_level": "medium",
      "root_alias_hits": [
        "自动化"
      ],
      "child_alias_hits": [],
      "warnings": [
        "node_override_applied",
        "child_alias_not_found_in_business_source"
      ],
      "business_evidence": {
        "business_summary": "运动控制领域和智能电源领域核心技术及系统级解决方案的研发和经营。",
        "product_types": [
          "控制电机及其驱动系统",
          "电源与照明系统控制类",
          "设备状态管理系统",
          "贸易代理业务"
        ],
        "product_names": [
          "控制电机（执行层）",
          "驱动与控制系统（控制层）",
          "机电一体化模组（应用层）",
          "LED智能照明控制与驱动系统",
          "电源控制系统",
          "设备状态管理系统"
        ],
        "business_scope": "一般项目：电机制造；电机及其控制系统研发；微特电机及组件制造；微特电机及组件销售；机械电气设备制造；机械电气设备销售；工业自动控制系统装置制造；工业自动控制系统装置销售；变压器、整流器和电感器制造；软件开发；软件销售；信息化、自动化和智能化技术应用领域内的技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；电子元器件批发；电力电子元器件销售；货物进出口；采购代理服务；非居住房地产租赁；技术进出口。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.14,
        "net_profit_yoy_pct": 0.92,
        "revenue_yoy_pct": "",
        "roe_pct": 0.0,
        "gross_margin_pct": 0.37,
        "net_margin_pct": 0.02,
        "debt_to_assets_pct": 0.35,
        "cfo_to_np": -1.06,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-28",
        "net_profit_attr_yi": 0.14,
        "net_profit_yoy_pct": 0.92,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 85,
        "fundamental_score": 65,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "机器人 / 自动化",
          "执行器",
          "控制电机（执行层）",
          "驱动与控制系统（控制层）",
          "机电一体化模组（应用层）",
          "LED智能照明控制与驱动系统",
          "电源控制系统",
          "设备状态管理系统"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "688017",
      "name": "绿的谐波",
      "bucket": "机器人 / 自动化",
      "subcategory": "减速器 / 丝杠",
      "priority": "P1",
      "source": "第三批扩容候选池",
      "reason": "谐波减速器样本",
      "old_report_status": "无旧报告",
      "rule_root_id": "robotics",
      "rule_child_id": "robot_reducer_screw_formal",
      "evidence_level": "medium",
      "root_alias_hits": [
        "自动化"
      ],
      "child_alias_hits": [
        "减速器",
        "丝杠",
        "谐波减速器",
        "滚柱丝杠"
      ],
      "warnings": [
        "node_override_applied"
      ],
      "business_evidence": {
        "business_summary": "精密传动装置研发、设计、生产和销售。",
        "product_types": [
          "谐波减速器",
          "行星滚柱丝杠及精密零部件",
          "机电一体化产品",
          "智能自动化装备"
        ],
        "product_names": [
          "谐波减速器",
          "行星滚柱丝杠及精密零部件",
          "机电一体化产品",
          "智能自动化装备"
        ],
        "business_scope": "谐波传动设备的研发、设计及技术开发；研发、生产、加工及销售：精密谐波减速机、精密仪器、机械设备、传感器、机械配件、流体控制阀、汽车配件（接头）、自动化设备及配件、石油钻探设备配件；自营和代理各类商品及技术进出口业务。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 0.33,
        "net_profit_yoy_pct": 0.61,
        "revenue_yoy_pct": "",
        "roe_pct": 0.01,
        "gross_margin_pct": 0.34,
        "net_margin_pct": 0.24,
        "debt_to_assets_pct": 0.09,
        "cfo_to_np": 0.16,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-23",
        "net_profit_attr_yi": 0.33,
        "net_profit_yoy_pct": 0.61,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 96,
        "fundamental_score": 85,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "机器人 / 自动化",
          "减速器 / 丝杠",
          "谐波减速器",
          "行星滚柱丝杠及精密零部件",
          "机电一体化产品",
          "智能自动化装备"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    },
    {
      "code": "601288",
      "name": "农业银行",
      "bucket": "金融",
      "subcategory": "保险 / 综合金融",
      "priority": "P1",
      "source": "第三批扩容候选池",
      "reason": "大行高股息样本",
      "old_report_status": "有旧报告",
      "rule_root_id": "finance",
      "rule_child_id": "finance_insurance_fintech",
      "evidence_level": "medium",
      "root_alias_hits": [
        "金融",
        "银行",
        "证券",
        "保险"
      ],
      "child_alias_hits": [
        "保险",
        "金融科技"
      ],
      "warnings": [],
      "business_evidence": {
        "business_summary": "提供银行及相关金融服务。",
        "product_types": [
          "公司金融业务",
          "个人金融业务",
          "资金业务",
          "资产管理业务",
          "普惠金融业务",
          "绿色金融业务",
          "网络金融业务",
          "跨境金融服务",
          "消费者权益保护",
          "综合化经营",
          "金融科技",
          "人力资源管理和机构管理",
          "网络渠道"
        ],
        "product_names": [
          "公司金融业务",
          "个人金融业务",
          "资金业务",
          "资产管理业务",
          "普惠金融业务",
          "绿色金融业务",
          "网络金融业务",
          "跨境金融服务",
          "消费者权益保护",
          "综合化经营",
          "金融科技",
          "人力资源管理和机构管理",
          "网络渠道"
        ],
        "business_scope": "吸收公众存款；发放短期、中期、长期贷款；办理国内外结算；办理票据承兑与贴现；发行金融债券；代理发行、代理兑付、承销政府债券；买卖政府债券、金融债券；从事同业拆借；买卖、代理买卖外汇；结汇、售汇；从事银行卡业务；提供信用证服务及担保；代理收付款项；提供保管箱服务；代理资金清算；各类汇兑业务；代理政策性银行、外国政府和国际金融机构贷款业务；贷款承诺；组织或参加银团贷款；外汇存款；外汇贷款；外汇汇款；外汇借款；发行、代理发行、买卖或代理买卖股票以外的外币有价证券；外汇票据承兑和贴现；自营、代客外汇买卖；外币兑换；外汇担保；资信调查、咨询、见证业务；企业、个人财务顾问服务；证券公司客户交易结算资金存管业务；证券投资基金托管业务；企业年金托管业务；产业投资基金托管业务；合格境外机构投资者境内证券投资托管业务；代理开放式基金业务；电话银行、手机银行、网上银行业务；金融衍生产品交易业务；经国务院银行业监督管理机构等监管部门批准的其他业务；保险兼业代理业务。（企业依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动）。",
        "source_type": "AkShare stock_zyjs_ths / 同花顺公开资料口径",
        "source_note": "主营业务、产品类型、产品名称、经营范围；后续批量年报解析后可替换为公告源。",
        "retrieved_at": "2026-06-27 12:17:59",
        "confidence": "medium"
      },
      "latest_financial": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "total_revenue_yi": "",
        "net_profit_attr_yi": 755.8,
        "net_profit_yoy_pct": 0.05,
        "revenue_yoy_pct": "",
        "roe_pct": 0.02,
        "gross_margin_pct": "",
        "net_margin_pct": 0.37,
        "debt_to_assets_pct": 0.94,
        "cfo_to_np": 15.68,
        "data_source": "BaoStock query_profit_data/query_growth_data/query_balance_data/query_cash_flow_data"
      },
      "financial_front": {
        "period": "2026-03-31",
        "ann_date": "2026-04-30",
        "net_profit_attr_yi": 755.8,
        "net_profit_yoy_pct": 0.05,
        "improvement": "净利润同比改善"
      },
      "classification_evidence": {
        "theme_purity_score": 94,
        "fundamental_score": 95,
        "market_strength_score": null,
        "market_role": null,
        "confirmed_tags": [
          "金融",
          "保险 / 综合金融",
          "公司金融业务",
          "个人金融业务",
          "资金业务",
          "资产管理业务",
          "普惠金融业务",
          "绿色金融业务"
        ],
        "evidence_status": "已补主营/产品和财务证据，公告源与合作对象待确认",
        "remaining_gaps": [
          "收入结构占比",
          "客户/供应商或合作对象",
          "年报/公告原文来源",
          "市场强度/龙头补涨字段"
        ],
        "static_tag_basis": "下一轮候选池分类 + AkShare主营/产品口径 + 分类规则别名重算主题纯度 + BaoStock财务字段；不生成深度报告，市场强度字段预留。"
      },
      "partner_evidence": {
        "confirmed_upstream_downstream_partners": [],
        "status": "无已确认公开证据",
        "note": "本轮公开资料接口未取得明确客户、供应商或合作对象名称；不写具体公司名，待年报/公告/互动易等来源确认后再补。"
      }
    }
  ]
};
