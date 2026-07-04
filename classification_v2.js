/* Classification calibration data. Generated from v2_reports_index.js. */
var CLASSIFICATION_V2_INDEX = {
  "generated_at": "2026-06-26",
  "source_report_count": 89,
  "calibrated_count": 89,
  "stocks_by_code": {
    "300015": {
      "code": "300015",
      "name": "爱尔眼科",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医疗服务",
        "眼科"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗服务",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "medical_service",
          "node_name": "医疗服务",
          "path": [
            "医药医疗",
            "医疗服务"
          ]
        },
        {
          "name": "眼科",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "medical_service",
          "node_name": "医疗服务",
          "path": [
            "医药医疗",
            "医疗服务"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 13.15,
        "yoy_parent_net_income_pct": 12.46,
        "improvement_status": "改善"
      },
      "report_file": "爱尔眼科_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "300059": {
      "code": "300059",
      "name": "东方财富",
      "primary_industry": "金融",
      "secondary_tracks": [
        "互联网券商",
        "财富管理"
      ],
      "tags": [
        {
          "name": "金融",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        },
        {
          "name": "互联网券商",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "finance_broker_wealth",
          "node_name": "证券 / 财富管理",
          "path": [
            "金融",
            "证券 / 财富管理"
          ]
        },
        {
          "name": "财富管理",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "finance_broker_wealth",
          "node_name": "证券 / 财富管理",
          "path": [
            "金融",
            "证券 / 财富管理"
          ]
        },
        {
          "name": "证券",
          "role": "相关概念",
          "weight": 0.63,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        },
        {
          "name": "金融科技",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "finance_broker_wealth",
          "node_name": "证券 / 财富管理",
          "path": [
            "金融",
            "证券 / 财富管理"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 37.38,
        "yoy_parent_net_income_pct": 37.67,
        "improvement_status": "改善"
      },
      "report_file": "东方财富_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "300122": {
      "code": "300122",
      "name": "智飞生物",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "创新药",
        "生物药",
        "疫苗"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "创新药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "生物药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "疫苗",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "生物制药",
          "role": "相关概念",
          "weight": 0.69,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": -3.94,
        "yoy_parent_net_income_pct": -18.79,
        "improvement_status": "恶化"
      },
      "report_file": "智飞生物_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "300124": {
      "code": "300124",
      "name": "汇川技术",
      "primary_industry": "高端装备与工业",
      "secondary_tracks": [
        "工业自动化",
        "新能源车电控"
      ],
      "tags": [
        {
          "name": "高端装备与工业",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "industrial_equipment",
          "node_name": "高端装备与工业",
          "path": [
            "高端装备与工业"
          ]
        },
        {
          "name": "工业自动化",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "robot_industrial_auto",
          "node_name": "工业自动化 / 工业母机",
          "path": [
            "机器人/自动化",
            "工业自动化 / 工业母机"
          ]
        },
        {
          "name": "新能源车电控",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "industrial_precision_equipment",
          "node_name": "精密制造 / 高端设备",
          "path": [
            "高端装备与工业",
            "精密制造 / 高端设备"
          ]
        },
        {
          "name": "机器人",
          "role": "观察概念",
          "weight": 0.53,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "robotics",
          "node_name": "机器人/自动化",
          "path": [
            "机器人/自动化"
          ]
        },
        {
          "name": "工业母机",
          "role": "相关概念",
          "weight": 0.69,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "robot_industrial_auto",
          "node_name": "工业自动化 / 工业母机",
          "path": [
            "机器人/自动化",
            "工业自动化 / 工业母机"
          ]
        },
        {
          "name": "新能源车",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "new_energy_vehicle",
          "node_name": "新能源汽车",
          "path": [
            "新能源汽车"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 10.23,
        "yoy_parent_net_income_pct": -23.39,
        "improvement_status": "恶化"
      },
      "report_file": "汇川技术_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "300274": {
      "code": "300274",
      "name": "阳光电源",
      "primary_industry": "新能源产业链",
      "secondary_tracks": [
        "光伏逆变器",
        "储能系统"
      ],
      "tags": [
        {
          "name": "新能源产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "renewable_pv",
          "node_name": "光伏",
          "path": [
            "电力与公用事业",
            "光伏"
          ]
        },
        {
          "name": "光伏逆变器",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "renewable_pv",
          "node_name": "光伏",
          "path": [
            "电力与公用事业",
            "光伏"
          ]
        },
        {
          "name": "储能系统",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "光伏",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "renewable_pv",
          "node_name": "光伏",
          "path": [
            "电力与公用事业",
            "光伏"
          ]
        },
        {
          "name": "储能",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "新能源",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "renewable_pv",
          "node_name": "光伏",
          "path": [
            "电力与公用事业",
            "光伏"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 22.46,
        "yoy_parent_net_income_pct": -40.12,
        "improvement_status": "恶化"
      },
      "report_file": "阳光电源_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "300308": {
      "code": "300308",
      "name": "中际旭创",
      "primary_industry": "AI算力产业链",
      "secondary_tracks": [
        "光模块",
        "CPO",
        "高速光通信"
      ],
      "tags": [
        {
          "name": "AI算力产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "光模块",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "optical_module",
          "node_name": "光模块/CPO",
          "path": [
            "AI算力",
            "光模块/CPO"
          ]
        },
        {
          "name": "CPO",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "optical_module",
          "node_name": "光模块/CPO",
          "path": [
            "AI算力",
            "光模块/CPO"
          ]
        },
        {
          "name": "高速光通信",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "optical_module",
          "node_name": "光模块/CPO",
          "path": [
            "AI算力",
            "光模块/CPO"
          ]
        },
        {
          "name": "AI",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "算力",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "数据中心",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 63.17,
        "yoy_parent_net_income_pct": 262.28,
        "improvement_status": "改善"
      },
      "report_file": "中际旭创_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "300347": {
      "code": "300347",
      "name": "泰格医药",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "CXO",
        "临床CRO"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "CXO",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "临床CRO",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "CRO",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 3.3,
        "yoy_parent_net_income_pct": -70.36,
        "improvement_status": "恶化"
      },
      "report_file": "泰格医药_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "300502": {
      "code": "300502",
      "name": "新易盛",
      "primary_industry": "AI算力产业链",
      "secondary_tracks": [
        "光模块",
        "CPO",
        "高速光通信"
      ],
      "tags": [
        {
          "name": "AI算力产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "光模块",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "optical_module",
          "node_name": "光模块/CPO",
          "path": [
            "AI算力",
            "光模块/CPO"
          ]
        },
        {
          "name": "CPO",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "optical_module",
          "node_name": "光模块/CPO",
          "path": [
            "AI算力",
            "光模块/CPO"
          ]
        },
        {
          "name": "高速光通信",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "optical_module",
          "node_name": "光模块/CPO",
          "path": [
            "AI算力",
            "光模块/CPO"
          ]
        },
        {
          "name": "AI",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "算力",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "数据中心",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 27.74,
        "yoy_parent_net_income_pct": 76.8,
        "improvement_status": "改善"
      },
      "report_file": "新易盛_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "300750": {
      "code": "300750",
      "name": "宁德时代",
      "primary_industry": "新能源产业链",
      "secondary_tracks": [
        "动力电池",
        "储能"
      ],
      "tags": [
        {
          "name": "新能源产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        },
        {
          "name": "动力电池",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "储能",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "新能源车",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "new_energy_vehicle",
          "node_name": "新能源汽车",
          "path": [
            "新能源汽车"
          ]
        },
        {
          "name": "锂电池",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 227.37,
        "yoy_parent_net_income_pct": 48.52,
        "improvement_status": "改善"
      },
      "report_file": "宁德时代_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "300759": {
      "code": "300759",
      "name": "康龙化成",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "CXO",
        "CRO",
        "CDMO"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "CXO",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "CRO",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "CDMO",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 3.1,
        "yoy_parent_net_income_pct": 9.75,
        "improvement_status": "改善"
      },
      "report_file": "康龙化成_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "300760": {
      "code": "300760",
      "name": "迈瑞医疗",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医疗器械",
        "高端设备"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗器械",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "高端设备",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 24.27,
        "yoy_parent_net_income_pct": -11.37,
        "improvement_status": "恶化"
      },
      "report_file": "迈瑞医疗_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "300832": {
      "code": "300832",
      "name": "新产业",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医疗器械",
        "IVD"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗器械",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "IVD",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "体外诊断",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 4.42,
        "yoy_parent_net_income_pct": 1.02,
        "improvement_status": "基本持平"
      },
      "report_file": "新产业_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "300896": {
      "code": "300896",
      "name": "爱美客",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医疗服务",
        "医美"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗服务",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "medical_service",
          "node_name": "医疗服务",
          "path": [
            "医药医疗",
            "医疗服务"
          ]
        },
        {
          "name": "医美",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "medical_service",
          "node_name": "医疗服务",
          "path": [
            "医药医疗",
            "医疗服务"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 3.01,
        "yoy_parent_net_income_pct": -32.79,
        "improvement_status": "恶化"
      },
      "report_file": "爱美客_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600030": {
      "code": "600030",
      "name": "中信证券",
      "primary_industry": "金融",
      "secondary_tracks": [
        "证券",
        "财富管理"
      ],
      "tags": [
        {
          "name": "金融",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        },
        {
          "name": "证券",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "finance_broker_wealth",
          "node_name": "证券 / 财富管理",
          "path": [
            "金融",
            "证券 / 财富管理"
          ]
        },
        {
          "name": "财富管理",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "finance_broker_wealth",
          "node_name": "证券 / 财富管理",
          "path": [
            "金融",
            "证券 / 财富管理"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 104.59,
        "yoy_parent_net_income_pct": 54.6,
        "improvement_status": "改善"
      },
      "report_file": "中信证券_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600036": {
      "code": "600036",
      "name": "招商银行",
      "primary_industry": "金融",
      "secondary_tracks": [
        "股份制银行",
        "财富管理"
      ],
      "tags": [
        {
          "name": "金融",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        },
        {
          "name": "股份制银行",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "finance_bank",
          "node_name": "银行",
          "path": [
            "金融",
            "银行"
          ]
        },
        {
          "name": "财富管理",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "finance_bank",
          "node_name": "银行",
          "path": [
            "金融",
            "银行"
          ]
        },
        {
          "name": "银行",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "finance_bank",
          "node_name": "银行",
          "path": [
            "金融",
            "银行"
          ]
        },
        {
          "name": "高股息",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "finance_bank",
          "node_name": "银行",
          "path": [
            "金融",
            "银行"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 380.48,
        "yoy_parent_net_income_pct": 1.52,
        "improvement_status": "基本持平"
      },
      "report_file": "招商银行_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600085": {
      "code": "600085",
      "name": "同仁堂",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "中药",
        "品牌中药"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "中药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "tcm",
          "node_name": "中药/品牌中药",
          "path": [
            "医药医疗",
            "中药/品牌中药"
          ]
        },
        {
          "name": "品牌中药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "tcm",
          "node_name": "中药/品牌中药",
          "path": [
            "医药医疗",
            "中药/品牌中药"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 6.17,
        "yoy_parent_net_income_pct": -19.07,
        "improvement_status": "恶化"
      },
      "report_file": "同仁堂_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600196": {
      "code": "600196",
      "name": "复星医药",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "创新药",
        "生物药",
        "综合医药"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "创新药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "生物药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "综合医药",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗器械",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 10.8,
        "yoy_parent_net_income_pct": 13.87,
        "improvement_status": "改善"
      },
      "report_file": "复星医药_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600276": {
      "code": "600276",
      "name": "恒瑞医药",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "创新药",
        "化学制药"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "创新药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "化学制药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 22.81,
        "yoy_parent_net_income_pct": 21.78,
        "improvement_status": "改善"
      },
      "report_file": "恒瑞医药_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600309": {
      "code": "600309",
      "name": "万华化学",
      "primary_industry": "化工材料",
      "secondary_tracks": [
        "MDI",
        "聚氨酯",
        "精细化工"
      ],
      "tags": [
        {
          "name": "化工材料",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "chemical_materials",
          "node_name": "化工材料",
          "path": [
            "化工材料"
          ]
        },
        {
          "name": "MDI",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        },
        {
          "name": "聚氨酯",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        },
        {
          "name": "精细化工",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        },
        {
          "name": "化工",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        },
        {
          "name": "新材料",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "advanced_materials",
          "node_name": "有色金属与新材料",
          "path": [
            "有色金属与新材料"
          ]
        },
        {
          "name": "周期",
          "role": "相关概念",
          "weight": 0.61,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 43.62,
        "yoy_parent_net_income_pct": 20.62,
        "improvement_status": "改善"
      },
      "report_file": "万华化学_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600426": {
      "code": "600426",
      "name": "华鲁恒升",
      "primary_industry": "化工材料",
      "secondary_tracks": [
        "煤化工",
        "新材料化工"
      ],
      "tags": [
        {
          "name": "化工材料",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "chemical_materials",
          "node_name": "化工材料",
          "path": [
            "化工材料"
          ]
        },
        {
          "name": "煤化工",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        },
        {
          "name": "新材料化工",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        },
        {
          "name": "化工",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 11.94,
        "yoy_parent_net_income_pct": 57.96,
        "improvement_status": "改善"
      },
      "report_file": "华鲁恒升_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600436": {
      "code": "600436",
      "name": "片仔癀",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "中药",
        "品牌中药"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "中药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "tcm",
          "node_name": "中药/品牌中药",
          "path": [
            "医药医疗",
            "中药/品牌中药"
          ]
        },
        {
          "name": "品牌中药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "tcm",
          "node_name": "中药/品牌中药",
          "path": [
            "医药医疗",
            "中药/品牌中药"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 7.4,
        "yoy_parent_net_income_pct": -25.64,
        "improvement_status": "恶化"
      },
      "report_file": "片仔癀_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600456": {
      "code": "600456",
      "name": "宝钛股份",
      "primary_industry": "有色金属与新材料",
      "secondary_tracks": [
        "稀有",
        "战略金属",
        "钛",
        "钛合金"
      ],
      "tags": [
        {
          "name": "有色金属与新材料",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "advanced_materials",
          "node_name": "有色金属与新材料",
          "path": [
            "有色金属与新材料"
          ]
        },
        {
          "name": "稀有",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "advanced_new_energy_material",
          "node_name": "新能源材料",
          "path": [
            "有色金属与新材料",
            "新能源材料"
          ]
        },
        {
          "name": "战略金属",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "advanced_new_energy_material",
          "node_name": "新能源材料",
          "path": [
            "有色金属与新材料",
            "新能源材料"
          ]
        },
        {
          "name": "钛",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "advanced_new_energy_material",
          "node_name": "新能源材料",
          "path": [
            "有色金属与新材料",
            "新能源材料"
          ]
        },
        {
          "name": "光伏",
          "role": "观察概念",
          "weight": 0.59,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        },
        {
          "name": "半导体",
          "role": "观察概念",
          "weight": 0.59,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "新能源",
          "role": "观察概念",
          "weight": 0.59,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 0.76,
        "yoy_parent_net_income_pct": -27.4,
        "improvement_status": "恶化"
      },
      "report_file": "宝钛股份_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600519": {
      "code": "600519",
      "name": "贵州茅台",
      "primary_industry": "消费白马",
      "secondary_tracks": [
        "白酒",
        "高端消费"
      ],
      "tags": [
        {
          "name": "消费白马",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_bluechip",
          "node_name": "消费白马",
          "path": [
            "消费白马"
          ]
        },
        {
          "name": "白酒",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        },
        {
          "name": "高端消费",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        },
        {
          "name": "消费",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        },
        {
          "name": "高股息",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 281.54,
        "yoy_parent_net_income_pct": 1.47,
        "improvement_status": "基本持平"
      },
      "report_file": "贵州茅台_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600584": {
      "code": "600584",
      "name": "长电科技",
      "primary_industry": "AI算力产业链",
      "secondary_tracks": [
        "电子元器件",
        "通信"
      ],
      "tags": [
        {
          "name": "AI算力产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "电子元器件",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "passive_components",
          "node_name": "电子元器件/被动元器件",
          "path": [
            "半导体",
            "电子元器件/被动元器件"
          ]
        },
        {
          "name": "通信",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "comm_equipment",
          "node_name": "通信设备",
          "path": [
            "通信设备与运营商",
            "通信设备"
          ]
        },
        {
          "name": "半导体",
          "role": "相关概念",
          "weight": 0.67,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "封装测试",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "先进封装",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "Chiplet",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "汽车电子",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "auto_parts",
          "node_name": "汽车零部件",
          "path": [
            "新能源汽车",
            "汽车零部件"
          ]
        },
        {
          "name": "AI算力",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 2.79,
        "yoy_parent_net_income_pct": 42.74,
        "improvement_status": "改善"
      },
      "report_file": "长电科技_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600588": {
      "code": "600588",
      "name": "用友网络",
      "primary_industry": "高端装备与工业",
      "secondary_tracks": [
        "企业软件",
        "工业软件"
      ],
      "tags": [
        {
          "name": "高端装备与工业",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "industrial_equipment",
          "node_name": "高端装备与工业",
          "path": [
            "高端装备与工业"
          ]
        },
        {
          "name": "企业软件",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        },
        {
          "name": "工业软件",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        },
        {
          "name": "AI应用",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": -7.44,
        "yoy_parent_net_income_pct": 1.79,
        "improvement_status": "基本持平"
      },
      "report_file": "用友网络_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600690": {
      "code": "600690",
      "name": "海尔智家",
      "primary_industry": "消费电子",
      "secondary_tracks": [
        "家电",
        "智能家居"
      ],
      "tags": [
        {
          "name": "消费电子",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_electronics",
          "node_name": "消费电子",
          "path": [
            "消费电子"
          ]
        },
        {
          "name": "家电",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        },
        {
          "name": "智能家居",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        },
        {
          "name": "消费电子/家电",
          "role": "相关概念",
          "weight": 0.69,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 48.07,
        "yoy_parent_net_income_pct": -15.22,
        "improvement_status": "恶化"
      },
      "report_file": "海尔智家_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600760": {
      "code": "600760",
      "name": "中航沈飞",
      "primary_industry": "国防军工与航空航天",
      "secondary_tracks": [
        "航空装备",
        "军工主机"
      ],
      "tags": [
        {
          "name": "国防军工与航空航天",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "defense_aerospace",
          "node_name": "国防军工与航空航天",
          "path": [
            "国防军工与航空航天"
          ]
        },
        {
          "name": "航空装备",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "军工主机",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "国防军工",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "航空航天",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "高端装备",
          "role": "相关概念",
          "weight": 0.66,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "industrial_machinery",
          "node_name": "工程机械 / 矿山装备",
          "path": [
            "高端装备与工业",
            "工程机械 / 矿山装备"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 1.65,
        "yoy_parent_net_income_pct": -61.69,
        "improvement_status": "恶化"
      },
      "report_file": "中航沈飞_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600763": {
      "code": "600763",
      "name": "通策医疗",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医疗服务",
        "口腔"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗服务",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "medical_service",
          "node_name": "医疗服务",
          "path": [
            "医药医疗",
            "医疗服务"
          ]
        },
        {
          "name": "口腔",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "medical_service",
          "node_name": "医疗服务",
          "path": [
            "医药医疗",
            "医疗服务"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 2.21,
        "yoy_parent_net_income_pct": 1.66,
        "improvement_status": "基本持平"
      },
      "report_file": "通策医疗_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600893": {
      "code": "600893",
      "name": "航发动力",
      "primary_industry": "国防军工与航空航天",
      "secondary_tracks": [
        "航空发动机",
        "高端装备"
      ],
      "tags": [
        {
          "name": "国防军工与航空航天",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "defense_aerospace",
          "node_name": "国防军工与航空航天",
          "path": [
            "国防军工与航空航天"
          ]
        },
        {
          "name": "航空发动机",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "defense_engine",
          "node_name": "航空发动机",
          "path": [
            "国防军工与航空航天",
            "航空发动机"
          ]
        },
        {
          "name": "高端装备",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "industrial_machinery",
          "node_name": "工程机械 / 矿山装备",
          "path": [
            "高端装备与工业",
            "工程机械 / 矿山装备"
          ]
        },
        {
          "name": "国防军工",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "defense_engine",
          "node_name": "航空发动机",
          "path": [
            "国防军工与航空航天",
            "航空发动机"
          ]
        },
        {
          "name": "航空航天",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "defense_engine",
          "node_name": "航空发动机",
          "path": [
            "国防军工与航空航天",
            "航空发动机"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 0.19,
        "yoy_parent_net_income_pct": -65.93,
        "improvement_status": "恶化"
      },
      "report_file": "航发动力_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "600938": {
      "code": "600938",
      "name": "中国海油",
      "primary_industry": "资源周期",
      "secondary_tracks": [
        "油气开采",
        "高股息"
      ],
      "tags": [
        {
          "name": "资源周期",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        },
        {
          "name": "油气开采",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "resources_energy",
          "node_name": "能源资源",
          "path": [
            "资源周期",
            "能源资源"
          ]
        },
        {
          "name": "高股息",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "finance_high_dividend",
          "node_name": "高股息金融",
          "path": [
            "金融",
            "高股息金融"
          ]
        },
        {
          "name": "资源",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_energy",
          "node_name": "能源资源",
          "path": [
            "资源周期",
            "能源资源"
          ]
        },
        {
          "name": "油气",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_energy",
          "node_name": "能源资源",
          "path": [
            "资源周期",
            "能源资源"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 391.84,
        "yoy_parent_net_income_pct": 7.06,
        "improvement_status": "改善"
      },
      "report_file": "中国海油_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "601088": {
      "code": "601088",
      "name": "中国神华",
      "primary_industry": "资源周期",
      "secondary_tracks": [
        "煤炭",
        "高股息"
      ],
      "tags": [
        {
          "name": "资源周期",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        },
        {
          "name": "煤炭",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "resources_energy",
          "node_name": "能源资源",
          "path": [
            "资源周期",
            "能源资源"
          ]
        },
        {
          "name": "高股息",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "finance_high_dividend",
          "node_name": "高股息金融",
          "path": [
            "金融",
            "高股息金融"
          ]
        },
        {
          "name": "资源",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_energy",
          "node_name": "能源资源",
          "path": [
            "资源周期",
            "能源资源"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 133.12,
        "yoy_parent_net_income_pct": -10.73,
        "improvement_status": "恶化"
      },
      "report_file": "中国神华_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "601138": {
      "code": "601138",
      "name": "工业富联",
      "primary_industry": "AI算力产业链",
      "secondary_tracks": [
        "AI服务器",
        "算力",
        "云端硬件制造"
      ],
      "tags": [
        {
          "name": "AI算力产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "AI服务器",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        },
        {
          "name": "算力",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "云端硬件制造",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        },
        {
          "name": "AI",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "服务器",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        },
        {
          "name": "云计算",
          "role": "相关概念",
          "weight": 0.67,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 105.97,
        "yoy_parent_net_income_pct": 102.55,
        "improvement_status": "改善"
      },
      "report_file": "工业富联_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "601318": {
      "code": "601318",
      "name": "中国平安",
      "primary_industry": "金融",
      "secondary_tracks": [
        "保险",
        "综合金融"
      ],
      "tags": [
        {
          "name": "金融",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        },
        {
          "name": "保险",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "finance_insurance_fintech",
          "node_name": "保险 / 综合金融",
          "path": [
            "金融",
            "保险 / 综合金融"
          ]
        },
        {
          "name": "综合金融",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "finance_insurance_fintech",
          "node_name": "保险 / 综合金融",
          "path": [
            "金融",
            "保险 / 综合金融"
          ]
        },
        {
          "name": "高股息",
          "role": "相关概念",
          "weight": 0.69,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        },
        {
          "name": "金融科技",
          "role": "相关概念",
          "weight": 0.69,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "finance_insurance_fintech",
          "node_name": "保险 / 综合金融",
          "path": [
            "金融",
            "保险 / 综合金融"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 332.63,
        "yoy_parent_net_income_pct": -7.38,
        "improvement_status": "恶化"
      },
      "report_file": "中国平安_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "601398": {
      "code": "601398",
      "name": "工商银行",
      "primary_industry": "金融",
      "secondary_tracks": [
        "银行",
        "高股息"
      ],
      "tags": [
        {
          "name": "金融",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        },
        {
          "name": "银行",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "finance_high_dividend",
          "node_name": "高股息金融",
          "path": [
            "金融",
            "高股息金融"
          ]
        },
        {
          "name": "高股息",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "finance_high_dividend",
          "node_name": "高股息金融",
          "path": [
            "金融",
            "高股息金融"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 880.13,
        "yoy_parent_net_income_pct": 3.31,
        "improvement_status": "基本持平"
      },
      "report_file": "工商银行_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "601607": {
      "code": "601607",
      "name": "上海医药",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医药商业",
        "综合医药"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药商业",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "pharma_distribution",
          "node_name": "医药商业/药房",
          "path": [
            "医药医疗",
            "医药商业/药房"
          ]
        },
        {
          "name": "综合医药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药流通",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "pharma_distribution",
          "node_name": "医药商业/药房",
          "path": [
            "医药医疗",
            "医药商业/药房"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 18.5,
        "yoy_parent_net_income_pct": 6.35,
        "improvement_status": "改善"
      },
      "report_file": "上海医药_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "601618": {
      "code": "601618",
      "name": "中国中冶",
      "primary_industry": "高端装备与工业",
      "secondary_tracks": [
        "工程",
        "矿山机械",
        "冶金工程",
        "矿产资源"
      ],
      "tags": [
        {
          "name": "高端装备与工业",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "industrial_equipment",
          "node_name": "高端装备与工业",
          "path": [
            "高端装备与工业"
          ]
        },
        {
          "name": "工程",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "industrial_machinery",
          "node_name": "工程机械 / 矿山装备",
          "path": [
            "高端装备与工业",
            "工程机械 / 矿山装备"
          ]
        },
        {
          "name": "矿山机械",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "industrial_machinery",
          "node_name": "工程机械 / 矿山装备",
          "path": [
            "高端装备与工业",
            "工程机械 / 矿山装备"
          ]
        },
        {
          "name": "冶金工程",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "industrial_machinery",
          "node_name": "工程机械 / 矿山装备",
          "path": [
            "高端装备与工业",
            "工程机械 / 矿山装备"
          ]
        },
        {
          "name": "光伏",
          "role": "相关概念",
          "weight": 0.62,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        },
        {
          "name": "半导体",
          "role": "相关概念",
          "weight": 0.62,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "新能源",
          "role": "相关概念",
          "weight": 0.62,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 19.74,
        "yoy_parent_net_income_pct": 1.59,
        "improvement_status": "基本持平"
      },
      "report_file": "中国中冶_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "601689": {
      "code": "601689",
      "name": "拓普集团",
      "primary_industry": "新能源汽车产业链",
      "secondary_tracks": [
        "汽车零部件",
        "机器人执行器"
      ],
      "tags": [
        {
          "name": "新能源汽车产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "new_energy_vehicle",
          "node_name": "新能源汽车",
          "path": [
            "新能源汽车"
          ]
        },
        {
          "name": "汽车零部件",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "auto_parts",
          "node_name": "汽车零部件",
          "path": [
            "新能源汽车",
            "汽车零部件"
          ]
        },
        {
          "name": "机器人执行器",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "robot_actuator_formal",
          "node_name": "执行器",
          "path": [
            "机器人/自动化",
            "执行器"
          ]
        },
        {
          "name": "新能源车",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "new_energy_vehicle",
          "node_name": "新能源汽车",
          "path": [
            "新能源汽车"
          ]
        },
        {
          "name": "机器人",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "robot_actuator_formal",
          "node_name": "执行器",
          "path": [
            "机器人/自动化",
            "执行器"
          ]
        },
        {
          "name": "智能驾驶",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "auto_parts",
          "node_name": "汽车零部件",
          "path": [
            "新能源汽车",
            "汽车零部件"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 5.53,
        "yoy_parent_net_income_pct": -2.42,
        "improvement_status": "基本持平"
      },
      "report_file": "拓普集团_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "601857": {
      "code": "601857",
      "name": "中国石油",
      "primary_industry": "资源周期",
      "secondary_tracks": [
        "油气",
        "炼化"
      ],
      "tags": [
        {
          "name": "资源周期",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        },
        {
          "name": "油气",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "resources_energy",
          "node_name": "能源资源",
          "path": [
            "资源周期",
            "能源资源"
          ]
        },
        {
          "name": "炼化",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "resources_energy",
          "node_name": "能源资源",
          "path": [
            "资源周期",
            "能源资源"
          ]
        },
        {
          "name": "资源",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_energy",
          "node_name": "能源资源",
          "path": [
            "资源周期",
            "能源资源"
          ]
        },
        {
          "name": "高股息",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 534.77,
        "yoy_parent_net_income_pct": 1.86,
        "improvement_status": "基本持平"
      },
      "report_file": "中国石油_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "601899": {
      "code": "601899",
      "name": "紫金矿业",
      "primary_industry": "资源周期",
      "secondary_tracks": [
        "铜金矿产",
        "全球矿业"
      ],
      "tags": [
        {
          "name": "资源周期",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        },
        {
          "name": "铜金矿产",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "全球矿业",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "黄金",
          "role": "相关概念",
          "weight": 0.63,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        },
        {
          "name": "铜",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "资源",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 251.66,
        "yoy_parent_net_income_pct": 97.5,
        "improvement_status": "改善"
      },
      "report_file": "紫金矿业_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "601939": {
      "code": "601939",
      "name": "建设银行",
      "primary_industry": "金融",
      "secondary_tracks": [
        "银行",
        "高股息"
      ],
      "tags": [
        {
          "name": "金融",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        },
        {
          "name": "银行",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "finance_high_dividend",
          "node_name": "高股息金融",
          "path": [
            "金融",
            "高股息金融"
          ]
        },
        {
          "name": "高股息",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "finance_high_dividend",
          "node_name": "高股息金融",
          "path": [
            "金融",
            "高股息金融"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 868.21,
        "yoy_parent_net_income_pct": 3.53,
        "improvement_status": "基本持平"
      },
      "report_file": "建设银行_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "603005": {
      "code": "603005",
      "name": "晶方科技",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "封装测试",
        "CIS封装"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "封装测试",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "CIS封装",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 0.66,
        "yoy_parent_net_income_pct": 0.12,
        "improvement_status": "基本持平"
      },
      "report_file": "晶方科技_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "603233": {
      "code": "603233",
      "name": "大参林",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医药商业",
        "药房"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药商业",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "pharma_distribution",
          "node_name": "医药商业/药房",
          "path": [
            "医药医疗",
            "医药商业/药房"
          ]
        },
        {
          "name": "药房",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "pharma_distribution",
          "node_name": "医药商业/药房",
          "path": [
            "医药医疗",
            "医药商业/药房"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 5.44,
        "yoy_parent_net_income_pct": 11.12,
        "improvement_status": "改善"
      },
      "report_file": "大参林_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "603259": {
      "code": "603259",
      "name": "药明康德",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "CXO",
        "CRO",
        "CDMO"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "CXO",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "CRO",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "CDMO",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 46.71,
        "yoy_parent_net_income_pct": 26.68,
        "improvement_status": "改善"
      },
      "report_file": "药明康德_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "603392": {
      "code": "603392",
      "name": "万泰生物",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "创新药",
        "生物药",
        "疫苗",
        "诊断"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "创新药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "生物药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "疫苗",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "IVD",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "体外诊断",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": -0.45,
        "yoy_parent_net_income_pct": 18.56,
        "improvement_status": "改善"
      },
      "report_file": "万泰生物_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "603501": {
      "code": "603501",
      "name": "韦尔股份",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "模拟芯片",
        "CIS"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "模拟芯片",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "CIS",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "芯片",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 4.94,
        "yoy_parent_net_income_pct": -41.92,
        "improvement_status": "恶化"
      },
      "report_file": "韦尔股份_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "603883": {
      "code": "603883",
      "name": "老百姓",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医药商业",
        "药房"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药商业",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "pharma_distribution",
          "node_name": "医药商业/药房",
          "path": [
            "医药医疗",
            "医药商业/药房"
          ]
        },
        {
          "name": "药房",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "pharma_distribution",
          "node_name": "医药商业/药房",
          "path": [
            "医药医疗",
            "医药商业/药房"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 3.02,
        "yoy_parent_net_income_pct": 5.27,
        "improvement_status": "改善"
      },
      "report_file": "老百姓_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "603939": {
      "code": "603939",
      "name": "益丰药房",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医药商业",
        "药房"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药商业",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "pharma_distribution",
          "node_name": "医药商业/药房",
          "path": [
            "医药医疗",
            "医药商业/药房"
          ]
        },
        {
          "name": "药房",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "pharma_distribution",
          "node_name": "医药商业/药房",
          "path": [
            "医药医疗",
            "医药商业/药房"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 5.46,
        "yoy_parent_net_income_pct": 11.14,
        "improvement_status": "改善"
      },
      "report_file": "益丰药房_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "603986": {
      "code": "603986",
      "name": "兆易创新",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "存储芯片",
        "MCU"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "存储芯片",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "MCU",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "芯片",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 14.73,
        "yoy_parent_net_income_pct": 522.79,
        "improvement_status": "改善"
      },
      "report_file": "兆易创新_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "603993": {
      "code": "603993",
      "name": "洛阳钼业",
      "primary_industry": "资源周期",
      "secondary_tracks": [
        "有色金属",
        "全球矿业"
      ],
      "tags": [
        {
          "name": "资源周期",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        },
        {
          "name": "有色金属",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "advanced_materials",
          "node_name": "有色金属与新材料",
          "path": [
            "有色金属与新材料"
          ]
        },
        {
          "name": "全球矿业",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "资源",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "铜钴",
          "role": "相关概念",
          "weight": 0.63,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 88.24,
        "yoy_parent_net_income_pct": 96.66,
        "improvement_status": "改善"
      },
      "report_file": "洛阳钼业_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "605566": {
      "code": "605566",
      "name": "福莱蒽特",
      "primary_industry": "人形机器人产业链",
      "secondary_tracks": [
        "机器人传感器",
        "力矩传感器",
        "电子皮肤"
      ],
      "tags": [
        {
          "name": "人形机器人产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "robotics",
          "node_name": "机器人/自动化",
          "path": [
            "机器人/自动化"
          ]
        },
        {
          "name": "机器人传感器",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "robot_sensor_formal",
          "node_name": "传感器 / 电子皮肤",
          "path": [
            "机器人/自动化",
            "传感器 / 电子皮肤"
          ]
        },
        {
          "name": "力矩传感器",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "robot_sensor_formal",
          "node_name": "传感器 / 电子皮肤",
          "path": [
            "机器人/自动化",
            "传感器 / 电子皮肤"
          ]
        },
        {
          "name": "电子皮肤",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "robot_sensor_formal",
          "node_name": "传感器 / 电子皮肤",
          "path": [
            "机器人/自动化",
            "传感器 / 电子皮肤"
          ]
        },
        {
          "name": "AI",
          "role": "相关概念",
          "weight": 0.61,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "机器人",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "robot_sensor_formal",
          "node_name": "传感器 / 电子皮肤",
          "path": [
            "机器人/自动化",
            "传感器 / 电子皮肤"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 0.25,
        "yoy_parent_net_income_pct": 82.51,
        "improvement_status": "改善"
      },
      "report_file": "福莱蒽特_深度分析报告.html",
      "cooperation_status": "只记录公司公开明确的合作对象、客户、供应商或合作伙伴；没有公开确认则写无公开确认。",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "688012": {
      "code": "688012",
      "name": "中微公司",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "半导体设备",
        "刻蚀",
        "MOCVD"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体设备",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        },
        {
          "name": "刻蚀",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        },
        {
          "name": "MOCVD",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "国产替代",
          "role": "相关概念",
          "weight": 0.61,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "设备",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 9.18,
        "yoy_parent_net_income_pct": 197.2,
        "improvement_status": "改善"
      },
      "report_file": "中微公司_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "688041": {
      "code": "688041",
      "name": "海光信息",
      "primary_industry": "AI算力产业链",
      "secondary_tracks": [
        "国产CPU",
        "GPU",
        "服务器芯片"
      ],
      "tags": [
        {
          "name": "AI算力产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "国产CPU",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "ai_chip",
          "node_name": "AI芯片/国产算力芯片",
          "path": [
            "AI算力",
            "AI芯片/国产算力芯片"
          ]
        },
        {
          "name": "GPU",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "ai_chip",
          "node_name": "AI芯片/国产算力芯片",
          "path": [
            "AI算力",
            "AI芯片/国产算力芯片"
          ]
        },
        {
          "name": "服务器芯片",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        },
        {
          "name": "AI",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "半导体",
          "role": "相关概念",
          "weight": 0.67,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "国产替代",
          "role": "相关概念",
          "weight": 0.61,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "算力",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 8.77,
        "yoy_parent_net_income_pct": 35.82,
        "improvement_status": "改善"
      },
      "report_file": "海光信息_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "688072": {
      "code": "688072",
      "name": "拓荆科技",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "半导体设备",
        "薄膜沉积"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体设备",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        },
        {
          "name": "薄膜沉积",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "国产替代",
          "role": "相关概念",
          "weight": 0.61,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "设备",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 5.62,
        "yoy_parent_net_income_pct": 488.29,
        "improvement_status": "改善"
      },
      "report_file": "拓荆科技_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "688111": {
      "code": "688111",
      "name": "金山办公",
      "primary_industry": "高端装备与工业",
      "secondary_tracks": [
        "办公软件",
        "AI应用"
      ],
      "tags": [
        {
          "name": "高端装备与工业",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "industrial_equipment",
          "node_name": "高端装备与工业",
          "path": [
            "高端装备与工业"
          ]
        },
        {
          "name": "办公软件",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        },
        {
          "name": "AI应用",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        },
        {
          "name": "企业软件",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 21.95,
        "yoy_parent_net_income_pct": 444.97,
        "improvement_status": "改善"
      },
      "report_file": "金山办公_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "688114": {
      "code": "688114",
      "name": "华大智造",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医疗器械",
        "生命科学仪器"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗器械",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "生命科学仪器",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": -1.05,
        "yoy_parent_net_income_pct": 37.87,
        "improvement_status": "改善"
      },
      "report_file": "华大智造_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "688122": {
      "code": "688122",
      "name": "西部超导",
      "primary_industry": "国防军工与航空航天",
      "secondary_tracks": [
        "航空装备",
        "钛合金",
        "高温合金"
      ],
      "tags": [
        {
          "name": "国防军工与航空航天",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "defense_aerospace",
          "node_name": "国防军工与航空航天",
          "path": [
            "国防军工与航空航天"
          ]
        },
        {
          "name": "航空装备",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "钛合金",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "advanced_metal_alloy",
          "node_name": "高端金属 / 合金",
          "path": [
            "有色金属与新材料",
            "高端金属 / 合金"
          ]
        },
        {
          "name": "高温合金",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "光伏",
          "role": "观察概念",
          "weight": 0.56,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        },
        {
          "name": "军工",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "半导体",
          "role": "观察概念",
          "weight": 0.56,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "新能源",
          "role": "观察概念",
          "weight": 0.56,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        },
        {
          "name": "钛",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "advanced_metal_alloy",
          "node_name": "高端金属 / 合金",
          "path": [
            "有色金属与新材料",
            "高端金属 / 合金"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 0.69,
        "yoy_parent_net_income_pct": -74.21,
        "improvement_status": "恶化"
      },
      "report_file": "西部超导_深度分析报告.html",
      "cooperation_status": "只记录公司公开明确的合作对象、客户、供应商或合作伙伴；没有公开确认则写无公开确认。",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "688126": {
      "code": "688126",
      "name": "沪硅产业",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "半导体材料",
        "硅片"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体材料",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "硅片",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": -5.28,
        "yoy_parent_net_income_pct": -131.67,
        "improvement_status": "恶化"
      },
      "report_file": "沪硅产业_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "688256": {
      "code": "688256",
      "name": "寒武纪",
      "primary_industry": "AI算力产业链",
      "secondary_tracks": [
        "AI芯片",
        "智能计算"
      ],
      "tags": [
        {
          "name": "AI算力产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "AI芯片",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "ai_chip",
          "node_name": "AI芯片/国产算力芯片",
          "path": [
            "AI算力",
            "AI芯片/国产算力芯片"
          ]
        },
        {
          "name": "智能计算",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "ai_chip",
          "node_name": "AI芯片/国产算力芯片",
          "path": [
            "AI算力",
            "AI芯片/国产算力芯片"
          ]
        },
        {
          "name": "AI",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "半导体",
          "role": "相关概念",
          "weight": 0.67,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "算力",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "国产替代",
          "role": "相关概念",
          "weight": 0.61,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 10.13,
        "yoy_parent_net_income_pct": 185.04,
        "improvement_status": "改善"
      },
      "report_file": "寒武纪_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "688271": {
      "code": "688271",
      "name": "联影医疗",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医疗器械",
        "医学影像"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗器械",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "医学影像",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗设备",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 3.92,
        "yoy_parent_net_income_pct": 7.78,
        "improvement_status": "改善"
      },
      "report_file": "联影医疗_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "000100": {
      "code": "000100",
      "name": "TCL科技",
      "primary_industry": "消费电子与终端",
      "secondary_tracks": [
        "面板",
        "显示",
        "LCD液晶面板"
      ],
      "tags": [
        {
          "name": "消费电子与终端",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_electronics",
          "node_name": "消费电子",
          "path": [
            "消费电子"
          ]
        },
        {
          "name": "面板",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_display",
          "node_name": "面板 / 显示",
          "path": [
            "消费电子",
            "面板 / 显示"
          ]
        },
        {
          "name": "显示",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "consumer_display",
          "node_name": "面板 / 显示",
          "path": [
            "消费电子",
            "面板 / 显示"
          ]
        },
        {
          "name": "LCD液晶面板",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "consumer_display",
          "node_name": "面板 / 显示",
          "path": [
            "消费电子",
            "面板 / 显示"
          ]
        },
        {
          "name": "面板/显示",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "consumer_display",
          "node_name": "面板 / 显示",
          "path": [
            "消费电子",
            "面板 / 显示"
          ]
        },
        {
          "name": "OLED",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "consumer_display",
          "node_name": "面板 / 显示",
          "path": [
            "消费电子",
            "面板 / 显示"
          ]
        },
        {
          "name": "Mini LED",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "consumer_display",
          "node_name": "面板 / 显示",
          "path": [
            "消费电子",
            "面板 / 显示"
          ]
        },
        {
          "name": "光伏",
          "role": "相关概念",
          "weight": 0.67,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        },
        {
          "name": "半导体材料",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "AI",
          "role": "相关概念",
          "weight": 0.61,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 6.08,
        "yoy_parent_net_income_pct": 53.71,
        "improvement_status": "改善"
      },
      "report_file": "TCL科技_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "000301": {
      "code": "000301",
      "name": "东方盛虹",
      "primary_industry": "化工材料",
      "secondary_tracks": [
        "石化",
        "化纤"
      ],
      "tags": [
        {
          "name": "化工材料",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "chemical_materials",
          "node_name": "化工材料",
          "path": [
            "化工材料"
          ]
        },
        {
          "name": "石化",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_petro_coal",
          "node_name": "石化 / 煤化工",
          "path": [
            "化工材料",
            "石化 / 煤化工"
          ]
        },
        {
          "name": "化纤",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_petro_coal",
          "node_name": "石化 / 煤化工",
          "path": [
            "化工材料",
            "石化 / 煤化工"
          ]
        },
        {
          "name": "化工",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_petro_coal",
          "node_name": "石化 / 煤化工",
          "path": [
            "化工材料",
            "石化 / 煤化工"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 14.48,
        "yoy_parent_net_income_pct": 319.86,
        "improvement_status": "改善"
      },
      "report_file": "东方盛虹_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "000333": {
      "code": "000333",
      "name": "美的集团",
      "primary_industry": "消费电子",
      "secondary_tracks": [
        "家电",
        "智能家居"
      ],
      "tags": [
        {
          "name": "消费电子",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_electronics",
          "node_name": "消费电子",
          "path": [
            "消费电子"
          ]
        },
        {
          "name": "家电",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        },
        {
          "name": "智能家居",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        },
        {
          "name": "消费电子/家电",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 128.6,
        "yoy_parent_net_income_pct": 2.03,
        "improvement_status": "基本持平"
      },
      "report_file": "美的集团_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "000538": {
      "code": "000538",
      "name": "云南白药",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "中药",
        "品牌中药"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "中药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "tcm",
          "node_name": "中药/品牌中药",
          "path": [
            "医药医疗",
            "中药/品牌中药"
          ]
        },
        {
          "name": "品牌中药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "tcm",
          "node_name": "中药/品牌中药",
          "path": [
            "医药医疗",
            "中药/品牌中药"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 20.31,
        "yoy_parent_net_income_pct": 5.31,
        "improvement_status": "改善"
      },
      "report_file": "云南白药_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "000568": {
      "code": "000568",
      "name": "泸州老窖",
      "primary_industry": "消费白马",
      "secondary_tracks": [
        "白酒",
        "高端消费"
      ],
      "tags": [
        {
          "name": "消费白马",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_bluechip",
          "node_name": "消费白马",
          "path": [
            "消费白马"
          ]
        },
        {
          "name": "白酒",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        },
        {
          "name": "高端消费",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        },
        {
          "name": "消费",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 37.3,
        "yoy_parent_net_income_pct": -19.25,
        "improvement_status": "恶化"
      },
      "report_file": "泸州老窖_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "000651": {
      "code": "000651",
      "name": "格力电器",
      "primary_industry": "消费电子",
      "secondary_tracks": [
        "家电",
        "白电"
      ],
      "tags": [
        {
          "name": "消费电子",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_electronics",
          "node_name": "消费电子",
          "path": [
            "消费电子"
          ]
        },
        {
          "name": "家电",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        },
        {
          "name": "白电",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        },
        {
          "name": "消费电子/家电",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 60.99,
        "yoy_parent_net_income_pct": 3.01,
        "improvement_status": "基本持平"
      },
      "report_file": "格力电器_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "000661": {
      "code": "000661",
      "name": "长春高新",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "创新药",
        "生物药",
        "生物制药"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "创新药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "生物药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "生物制药",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 2.71,
        "yoy_parent_net_income_pct": -41.67,
        "improvement_status": "恶化"
      },
      "report_file": "长春高新_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "000768": {
      "code": "000768",
      "name": "中航西飞",
      "primary_industry": "国防军工与航空航天",
      "secondary_tracks": [
        "航空装备",
        "大飞机"
      ],
      "tags": [
        {
          "name": "国防军工与航空航天",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "defense_aerospace",
          "node_name": "国防军工与航空航天",
          "path": [
            "国防军工与航空航天"
          ]
        },
        {
          "name": "航空装备",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "大飞机",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "国防军工",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "航空航天",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "高端装备",
          "role": "相关概念",
          "weight": 0.69,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "industrial_machinery",
          "node_name": "工程机械 / 矿山装备",
          "path": [
            "高端装备与工业",
            "工程机械 / 矿山装备"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 2.46,
        "yoy_parent_net_income_pct": -14.73,
        "improvement_status": "恶化"
      },
      "report_file": "中航西飞_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "000858": {
      "code": "000858",
      "name": "五粮液",
      "primary_industry": "消费白马",
      "secondary_tracks": [
        "白酒",
        "高端消费"
      ],
      "tags": [
        {
          "name": "消费白马",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_bluechip",
          "node_name": "消费白马",
          "path": [
            "消费白马"
          ]
        },
        {
          "name": "白酒",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        },
        {
          "name": "高端消费",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        },
        {
          "name": "消费",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 83.24,
        "yoy_parent_net_income_pct": 82.57,
        "improvement_status": "改善"
      },
      "report_file": "五粮液_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "000963": {
      "code": "000963",
      "name": "华东医药",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "创新药",
        "生物药",
        "医美"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "创新药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "生物药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "医美",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "medical_service",
          "node_name": "医疗服务",
          "path": [
            "医药医疗",
            "医疗服务"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗服务",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "medical_service",
          "node_name": "医疗服务",
          "path": [
            "医药医疗",
            "医疗服务"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 9.97,
        "yoy_parent_net_income_pct": 9.56,
        "improvement_status": "改善"
      },
      "report_file": "华东医药_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002050": {
      "code": "002050",
      "name": "三花智控",
      "primary_industry": "人形机器人产业链",
      "secondary_tracks": [
        "减速器",
        "丝杠",
        "执行器",
        "精密功能件",
        "结构件"
      ],
      "tags": [
        {
          "name": "人形机器人产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "robotics",
          "node_name": "机器人/自动化",
          "path": [
            "机器人/自动化"
          ]
        },
        {
          "name": "减速器",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "robot_actuator_formal",
          "node_name": "执行器",
          "path": [
            "机器人/自动化",
            "执行器"
          ]
        },
        {
          "name": "丝杠",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "robot_actuator_formal",
          "node_name": "执行器",
          "path": [
            "机器人/自动化",
            "执行器"
          ]
        },
        {
          "name": "执行器",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "robot_actuator_formal",
          "node_name": "执行器",
          "path": [
            "机器人/自动化",
            "执行器"
          ]
        },
        {
          "name": "储能",
          "role": "相关概念",
          "weight": 0.62,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "新能源",
          "role": "相关概念",
          "weight": 0.62,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        },
        {
          "name": "机器人",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "robot_humanoid",
          "node_name": "人形机器人",
          "path": [
            "机器人/自动化",
            "人形机器人"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 9.51,
        "yoy_parent_net_income_pct": 2.68,
        "improvement_status": "基本持平"
      },
      "report_file": "三花智控_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002138": {
      "code": "002138",
      "name": "顺络电子",
      "primary_industry": "消费电子与终端",
      "secondary_tracks": [
        "手机产业链",
        "电感",
        "被动元器件"
      ],
      "tags": [
        {
          "name": "消费电子与终端",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_electronics",
          "node_name": "消费电子",
          "path": [
            "消费电子"
          ]
        },
        {
          "name": "手机产业链",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_ai_terminal",
          "node_name": "AI终端 / 消费电子",
          "path": [
            "消费电子",
            "AI终端 / 消费电子"
          ]
        },
        {
          "name": "电感",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "passive_components",
          "node_name": "电子元器件/被动元器件",
          "path": [
            "半导体",
            "电子元器件/被动元器件"
          ]
        },
        {
          "name": "被动元器件",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "passive_components",
          "node_name": "电子元器件/被动元器件",
          "path": [
            "半导体",
            "电子元器件/被动元器件"
          ]
        },
        {
          "name": "AI",
          "role": "观察概念",
          "weight": 0.53,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "电源",
          "role": "观察概念",
          "weight": 0.55,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 1.98,
        "yoy_parent_net_income_pct": -23.71,
        "improvement_status": "恶化"
      },
      "report_file": "顺络电子_深度分析报告.html",
      "cooperation_status": "只记录公司公开明确的合作对象、客户、供应商或合作伙伴；没有公开确认则写无公开确认。",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002156": {
      "code": "002156",
      "name": "通富微电",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "封装测试",
        "先进封装"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "封装测试",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "先进封装",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "Chiplet",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 3.5,
        "yoy_parent_net_income_pct": 224.55,
        "improvement_status": "改善"
      },
      "report_file": "通富微电_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002185": {
      "code": "002185",
      "name": "华天科技",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "封装测试",
        "先进封装"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "封装测试",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "先进封装",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 0.75,
        "yoy_parent_net_income_pct": 568.39,
        "improvement_status": "改善"
      },
      "report_file": "华天科技_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002223": {
      "code": "002223",
      "name": "鱼跃医疗",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医疗器械",
        "家用医疗"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗器械",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "家用医疗",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗设备",
          "role": "相关概念",
          "weight": 0.66,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 4.29,
        "yoy_parent_net_income_pct": -31.44,
        "improvement_status": "恶化"
      },
      "report_file": "鱼跃医疗_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002230": {
      "code": "002230",
      "name": "科大讯飞",
      "primary_industry": "高端装备与工业",
      "secondary_tracks": [
        "AI应用",
        "教育软件"
      ],
      "tags": [
        {
          "name": "高端装备与工业",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "industrial_equipment",
          "node_name": "高端装备与工业",
          "path": [
            "高端装备与工业"
          ]
        },
        {
          "name": "AI应用",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        },
        {
          "name": "教育软件",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        },
        {
          "name": "办公软件",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        },
        {
          "name": "人工智能",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": -1.88,
        "yoy_parent_net_income_pct": 12.17,
        "improvement_status": "改善"
      },
      "report_file": "科大讯飞_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002241": {
      "code": "002241",
      "name": "歌尔股份",
      "primary_industry": "消费电子与终端",
      "secondary_tracks": [
        "声学",
        "VRAR",
        "智能硬件"
      ],
      "tags": [
        {
          "name": "消费电子与终端",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_electronics",
          "node_name": "消费电子",
          "path": [
            "消费电子"
          ]
        },
        {
          "name": "声学",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_ai_terminal",
          "node_name": "AI终端 / 消费电子",
          "path": [
            "消费电子",
            "AI终端 / 消费电子"
          ]
        },
        {
          "name": "VRAR",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_ai_terminal",
          "node_name": "AI终端 / 消费电子",
          "path": [
            "消费电子",
            "AI终端 / 消费电子"
          ]
        },
        {
          "name": "智能硬件",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "consumer_ai_terminal",
          "node_name": "AI终端 / 消费电子",
          "path": [
            "消费电子",
            "AI终端 / 消费电子"
          ]
        },
        {
          "name": "消费电子",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_ai_terminal",
          "node_name": "AI终端 / 消费电子",
          "path": [
            "消费电子",
            "AI终端 / 消费电子"
          ]
        },
        {
          "name": "AI终端",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "consumer_ai_terminal",
          "node_name": "AI终端 / 消费电子",
          "path": [
            "消费电子",
            "AI终端 / 消费电子"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 5.22,
        "yoy_parent_net_income_pct": 7.28,
        "improvement_status": "改善"
      },
      "report_file": "歌尔股份_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002371": {
      "code": "002371",
      "name": "北方华创",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "半导体设备",
        "国产替代"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体设备",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        },
        {
          "name": "国产替代",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "设备",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 15.68,
        "yoy_parent_net_income_pct": 3.42,
        "improvement_status": "基本持平"
      },
      "report_file": "北方华创_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002409": {
      "code": "002409",
      "name": "雅克科技",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "半导体材料",
        "电子特气"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体材料",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "电子特气",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 2.99,
        "yoy_parent_net_income_pct": 2.47,
        "improvement_status": "基本持平"
      },
      "report_file": "雅克科技_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002460": {
      "code": "002460",
      "name": "赣锋锂业",
      "primary_industry": "资源周期",
      "secondary_tracks": [
        "锂资源",
        "新能源材料"
      ],
      "tags": [
        {
          "name": "资源周期",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        },
        {
          "name": "锂资源",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "新能源材料",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "advanced_new_energy_material",
          "node_name": "新能源材料",
          "path": [
            "有色金属与新材料",
            "新能源材料"
          ]
        },
        {
          "name": "资源",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "锂电池",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "新能源",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 19.22,
        "yoy_parent_net_income_pct": 616.34,
        "improvement_status": "改善"
      },
      "report_file": "赣锋锂业_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002463": {
      "code": "002463",
      "name": "沪电股份",
      "primary_industry": "AI算力产业链",
      "secondary_tracks": [
        "高速PCB",
        "服务器链"
      ],
      "tags": [
        {
          "name": "AI算力产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "高速PCB",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "服务器链",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        },
        {
          "name": "AI",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "PCB",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "服务器",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        },
        {
          "name": "汽车电子",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "auto_parts",
          "node_name": "汽车零部件",
          "path": [
            "新能源汽车",
            "汽车零部件"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 12.41,
        "yoy_parent_net_income_pct": 62.9,
        "improvement_status": "改善"
      },
      "report_file": "沪电股份_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002466": {
      "code": "002466",
      "name": "天齐锂业",
      "primary_industry": "资源周期",
      "secondary_tracks": [
        "锂资源",
        "新能源材料"
      ],
      "tags": [
        {
          "name": "资源周期",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        },
        {
          "name": "锂资源",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "新能源材料",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "advanced_new_energy_material",
          "node_name": "新能源材料",
          "path": [
            "有色金属与新材料",
            "新能源材料"
          ]
        },
        {
          "name": "资源",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "锂电池",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "新能源",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 28.41,
        "yoy_parent_net_income_pct": 1699.12,
        "improvement_status": "改善"
      },
      "report_file": "天齐锂业_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002475": {
      "code": "002475",
      "name": "立讯精密",
      "primary_industry": "消费电子与终端",
      "secondary_tracks": [
        "苹果链",
        "连接器",
        "精密制造"
      ],
      "tags": [
        {
          "name": "消费电子与终端",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_electronics",
          "node_name": "消费电子",
          "path": [
            "消费电子"
          ]
        },
        {
          "name": "苹果链",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_terminal_manufacturing",
          "node_name": "终端制造 / 精密件",
          "path": [
            "消费电子",
            "终端制造 / 精密件"
          ]
        },
        {
          "name": "连接器",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "auto_parts",
          "node_name": "汽车零部件",
          "path": [
            "新能源汽车",
            "汽车零部件"
          ]
        },
        {
          "name": "精密制造",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "industrial_precision_equipment",
          "node_name": "精密制造 / 高端设备",
          "path": [
            "高端装备与工业",
            "精密制造 / 高端设备"
          ]
        },
        {
          "name": "消费电子",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_ai_terminal",
          "node_name": "AI终端 / 消费电子",
          "path": [
            "消费电子",
            "AI终端 / 消费电子"
          ]
        },
        {
          "name": "汽车电子",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "auto_parts",
          "node_name": "汽车零部件",
          "path": [
            "新能源汽车",
            "汽车零部件"
          ]
        },
        {
          "name": "AI终端",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "consumer_ai_terminal",
          "node_name": "AI终端 / 消费电子",
          "path": [
            "消费电子",
            "AI终端 / 消费电子"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 39.68,
        "yoy_parent_net_income_pct": 20.24,
        "improvement_status": "改善"
      },
      "report_file": "立讯精密_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002493": {
      "code": "002493",
      "name": "荣盛石化",
      "primary_industry": "化工材料",
      "secondary_tracks": [
        "石化",
        "炼化一体化"
      ],
      "tags": [
        {
          "name": "化工材料",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "chemical_materials",
          "node_name": "化工材料",
          "path": [
            "化工材料"
          ]
        },
        {
          "name": "石化",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_petro_coal",
          "node_name": "石化 / 煤化工",
          "path": [
            "化工材料",
            "石化 / 煤化工"
          ]
        },
        {
          "name": "炼化一体化",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_petro_coal",
          "node_name": "石化 / 煤化工",
          "path": [
            "化工材料",
            "石化 / 煤化工"
          ]
        },
        {
          "name": "化工",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_petro_coal",
          "node_name": "石化 / 煤化工",
          "path": [
            "化工材料",
            "石化 / 煤化工"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 50.12,
        "yoy_parent_net_income_pct": 378.46,
        "improvement_status": "改善"
      },
      "report_file": "荣盛石化_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002534": {
      "code": "002534",
      "name": "西子洁能",
      "primary_industry": "新能源发电",
      "secondary_tracks": [
        "储能",
        "光热发电"
      ],
      "tags": [
        {
          "name": "新能源发电",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "renewable_operator",
          "node_name": "绿电运营",
          "path": [
            "电力与公用事业",
            "绿电运营"
          ]
        },
        {
          "name": "储能",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "光热发电",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "renewable_operator",
          "node_name": "绿电运营",
          "path": [
            "电力与公用事业",
            "绿电运营"
          ]
        },
        {
          "name": "半导体",
          "role": "相关概念",
          "weight": 0.65,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "新能源",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "renewable_operator",
          "node_name": "绿电运营",
          "path": [
            "电力与公用事业",
            "绿电运营"
          ]
        },
        {
          "name": "机器人",
          "role": "观察概念",
          "weight": 0.59,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "robotics",
          "node_name": "机器人/自动化",
          "path": [
            "机器人/自动化"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 0.72,
        "yoy_parent_net_income_pct": 12.15,
        "improvement_status": "改善"
      },
      "report_file": "西子洁能_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002594": {
      "code": "002594",
      "name": "比亚迪",
      "primary_industry": "新能源汽车产业链",
      "secondary_tracks": [
        "整车",
        "动力电池"
      ],
      "tags": [
        {
          "name": "新能源汽车产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "new_energy_vehicle",
          "node_name": "新能源汽车",
          "path": [
            "新能源汽车"
          ]
        },
        {
          "name": "整车",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "new_energy_vehicle",
          "node_name": "新能源汽车",
          "path": [
            "新能源汽车"
          ]
        },
        {
          "name": "动力电池",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "新能源车",
          "role": "相关概念",
          "weight": 0.66,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "new_energy_vehicle",
          "node_name": "新能源汽车",
          "path": [
            "新能源汽车"
          ]
        },
        {
          "name": "储能",
          "role": "观察概念",
          "weight": 0.56,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "智能驾驶",
          "role": "相关概念",
          "weight": 0.66,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "auto_parts",
          "node_name": "汽车零部件",
          "path": [
            "新能源汽车",
            "汽车零部件"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 40.11,
        "yoy_parent_net_income_pct": -55.38,
        "improvement_status": "恶化"
      },
      "report_file": "比亚迪_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002603": {
      "code": "002603",
      "name": "以岭药业",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "中药",
        "创新中药"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "中药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "tcm",
          "node_name": "中药/品牌中药",
          "path": [
            "医药医疗",
            "中药/品牌中药"
          ]
        },
        {
          "name": "创新中药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "tcm",
          "node_name": "中药/品牌中药",
          "path": [
            "医药医疗",
            "中药/品牌中药"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "创新药",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 4.09,
        "yoy_parent_net_income_pct": 25.43,
        "improvement_status": "改善"
      },
      "report_file": "以岭药业_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002648": {
      "code": "002648",
      "name": "卫星化学",
      "primary_industry": "化工材料",
      "secondary_tracks": [
        "烯烃",
        "新材料化工"
      ],
      "tags": [
        {
          "name": "化工材料",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "chemical_materials",
          "node_name": "化工材料",
          "path": [
            "化工材料"
          ]
        },
        {
          "name": "烯烃",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        },
        {
          "name": "新材料化工",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        },
        {
          "name": "化工",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 21.17,
        "yoy_parent_net_income_pct": 34.97,
        "improvement_status": "改善"
      },
      "report_file": "卫星化学_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002821": {
      "code": "002821",
      "name": "凯莱英",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "CXO",
        "CDMO"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "CXO",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "CDMO",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药外包",
          "role": "相关概念",
          "weight": 0.69,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 3.01,
        "yoy_parent_net_income_pct": -6.82,
        "improvement_status": "恶化"
      },
      "report_file": "凯莱英_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "002851": {
      "code": "002851",
      "name": "麦格米特",
      "primary_industry": "AI算力产业链",
      "secondary_tracks": [
        "AI服务器",
        "算力",
        "AI服务器电源"
      ],
      "tags": [
        {
          "name": "AI算力产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "AI服务器",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        },
        {
          "name": "算力",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "AI服务器电源",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        },
        {
          "name": "AI",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "半导体",
          "role": "相关概念",
          "weight": 0.65,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "新能源",
          "role": "相关概念",
          "weight": 0.65,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        },
        {
          "name": "电源",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 1.28,
        "yoy_parent_net_income_pct": 6.93,
        "improvement_status": "改善"
      },
      "report_file": "麦格米特_深度分析报告.html",
      "cooperation_status": "只记录公司公开明确的合作对象、客户、供应商或合作伙伴；没有公开确认则写无公开确认。",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    }
  },
  "stocks_by_name": {
    "爱尔眼科": {
      "code": "300015",
      "name": "爱尔眼科",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医疗服务",
        "眼科"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗服务",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "medical_service",
          "node_name": "医疗服务",
          "path": [
            "医药医疗",
            "医疗服务"
          ]
        },
        {
          "name": "眼科",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "medical_service",
          "node_name": "医疗服务",
          "path": [
            "医药医疗",
            "医疗服务"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 13.15,
        "yoy_parent_net_income_pct": 12.46,
        "improvement_status": "改善"
      },
      "report_file": "爱尔眼科_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "东方财富": {
      "code": "300059",
      "name": "东方财富",
      "primary_industry": "金融",
      "secondary_tracks": [
        "互联网券商",
        "财富管理"
      ],
      "tags": [
        {
          "name": "金融",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        },
        {
          "name": "互联网券商",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "finance_broker_wealth",
          "node_name": "证券 / 财富管理",
          "path": [
            "金融",
            "证券 / 财富管理"
          ]
        },
        {
          "name": "财富管理",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "finance_broker_wealth",
          "node_name": "证券 / 财富管理",
          "path": [
            "金融",
            "证券 / 财富管理"
          ]
        },
        {
          "name": "证券",
          "role": "相关概念",
          "weight": 0.63,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        },
        {
          "name": "金融科技",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "finance_broker_wealth",
          "node_name": "证券 / 财富管理",
          "path": [
            "金融",
            "证券 / 财富管理"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 37.38,
        "yoy_parent_net_income_pct": 37.67,
        "improvement_status": "改善"
      },
      "report_file": "东方财富_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "智飞生物": {
      "code": "300122",
      "name": "智飞生物",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "创新药",
        "生物药",
        "疫苗"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "创新药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "生物药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "疫苗",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "生物制药",
          "role": "相关概念",
          "weight": 0.69,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": -3.94,
        "yoy_parent_net_income_pct": -18.79,
        "improvement_status": "恶化"
      },
      "report_file": "智飞生物_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "汇川技术": {
      "code": "300124",
      "name": "汇川技术",
      "primary_industry": "高端装备与工业",
      "secondary_tracks": [
        "工业自动化",
        "新能源车电控"
      ],
      "tags": [
        {
          "name": "高端装备与工业",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "industrial_equipment",
          "node_name": "高端装备与工业",
          "path": [
            "高端装备与工业"
          ]
        },
        {
          "name": "工业自动化",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "robot_industrial_auto",
          "node_name": "工业自动化 / 工业母机",
          "path": [
            "机器人/自动化",
            "工业自动化 / 工业母机"
          ]
        },
        {
          "name": "新能源车电控",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "industrial_precision_equipment",
          "node_name": "精密制造 / 高端设备",
          "path": [
            "高端装备与工业",
            "精密制造 / 高端设备"
          ]
        },
        {
          "name": "机器人",
          "role": "观察概念",
          "weight": 0.53,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "robotics",
          "node_name": "机器人/自动化",
          "path": [
            "机器人/自动化"
          ]
        },
        {
          "name": "工业母机",
          "role": "相关概念",
          "weight": 0.69,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "robot_industrial_auto",
          "node_name": "工业自动化 / 工业母机",
          "path": [
            "机器人/自动化",
            "工业自动化 / 工业母机"
          ]
        },
        {
          "name": "新能源车",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "new_energy_vehicle",
          "node_name": "新能源汽车",
          "path": [
            "新能源汽车"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 10.23,
        "yoy_parent_net_income_pct": -23.39,
        "improvement_status": "恶化"
      },
      "report_file": "汇川技术_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "阳光电源": {
      "code": "300274",
      "name": "阳光电源",
      "primary_industry": "新能源产业链",
      "secondary_tracks": [
        "光伏逆变器",
        "储能系统"
      ],
      "tags": [
        {
          "name": "新能源产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "renewable_pv",
          "node_name": "光伏",
          "path": [
            "电力与公用事业",
            "光伏"
          ]
        },
        {
          "name": "光伏逆变器",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "renewable_pv",
          "node_name": "光伏",
          "path": [
            "电力与公用事业",
            "光伏"
          ]
        },
        {
          "name": "储能系统",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "光伏",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "renewable_pv",
          "node_name": "光伏",
          "path": [
            "电力与公用事业",
            "光伏"
          ]
        },
        {
          "name": "储能",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "新能源",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "renewable_pv",
          "node_name": "光伏",
          "path": [
            "电力与公用事业",
            "光伏"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 22.46,
        "yoy_parent_net_income_pct": -40.12,
        "improvement_status": "恶化"
      },
      "report_file": "阳光电源_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "中际旭创": {
      "code": "300308",
      "name": "中际旭创",
      "primary_industry": "AI算力产业链",
      "secondary_tracks": [
        "光模块",
        "CPO",
        "高速光通信"
      ],
      "tags": [
        {
          "name": "AI算力产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "光模块",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "optical_module",
          "node_name": "光模块/CPO",
          "path": [
            "AI算力",
            "光模块/CPO"
          ]
        },
        {
          "name": "CPO",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "optical_module",
          "node_name": "光模块/CPO",
          "path": [
            "AI算力",
            "光模块/CPO"
          ]
        },
        {
          "name": "高速光通信",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "optical_module",
          "node_name": "光模块/CPO",
          "path": [
            "AI算力",
            "光模块/CPO"
          ]
        },
        {
          "name": "AI",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "算力",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "数据中心",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 63.17,
        "yoy_parent_net_income_pct": 262.28,
        "improvement_status": "改善"
      },
      "report_file": "中际旭创_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "泰格医药": {
      "code": "300347",
      "name": "泰格医药",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "CXO",
        "临床CRO"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "CXO",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "临床CRO",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "CRO",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 3.3,
        "yoy_parent_net_income_pct": -70.36,
        "improvement_status": "恶化"
      },
      "report_file": "泰格医药_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "新易盛": {
      "code": "300502",
      "name": "新易盛",
      "primary_industry": "AI算力产业链",
      "secondary_tracks": [
        "光模块",
        "CPO",
        "高速光通信"
      ],
      "tags": [
        {
          "name": "AI算力产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "光模块",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "optical_module",
          "node_name": "光模块/CPO",
          "path": [
            "AI算力",
            "光模块/CPO"
          ]
        },
        {
          "name": "CPO",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "optical_module",
          "node_name": "光模块/CPO",
          "path": [
            "AI算力",
            "光模块/CPO"
          ]
        },
        {
          "name": "高速光通信",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "optical_module",
          "node_name": "光模块/CPO",
          "path": [
            "AI算力",
            "光模块/CPO"
          ]
        },
        {
          "name": "AI",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "算力",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "数据中心",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 27.74,
        "yoy_parent_net_income_pct": 76.8,
        "improvement_status": "改善"
      },
      "report_file": "新易盛_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "宁德时代": {
      "code": "300750",
      "name": "宁德时代",
      "primary_industry": "新能源产业链",
      "secondary_tracks": [
        "动力电池",
        "储能"
      ],
      "tags": [
        {
          "name": "新能源产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        },
        {
          "name": "动力电池",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "储能",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "新能源车",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "new_energy_vehicle",
          "node_name": "新能源汽车",
          "path": [
            "新能源汽车"
          ]
        },
        {
          "name": "锂电池",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 227.37,
        "yoy_parent_net_income_pct": 48.52,
        "improvement_status": "改善"
      },
      "report_file": "宁德时代_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "康龙化成": {
      "code": "300759",
      "name": "康龙化成",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "CXO",
        "CRO",
        "CDMO"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "CXO",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "CRO",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "CDMO",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 3.1,
        "yoy_parent_net_income_pct": 9.75,
        "improvement_status": "改善"
      },
      "report_file": "康龙化成_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "迈瑞医疗": {
      "code": "300760",
      "name": "迈瑞医疗",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医疗器械",
        "高端设备"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗器械",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "高端设备",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 24.27,
        "yoy_parent_net_income_pct": -11.37,
        "improvement_status": "恶化"
      },
      "report_file": "迈瑞医疗_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "新产业": {
      "code": "300832",
      "name": "新产业",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医疗器械",
        "IVD"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗器械",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "IVD",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "体外诊断",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 4.42,
        "yoy_parent_net_income_pct": 1.02,
        "improvement_status": "基本持平"
      },
      "report_file": "新产业_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "爱美客": {
      "code": "300896",
      "name": "爱美客",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医疗服务",
        "医美"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗服务",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "medical_service",
          "node_name": "医疗服务",
          "path": [
            "医药医疗",
            "医疗服务"
          ]
        },
        {
          "name": "医美",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "medical_service",
          "node_name": "医疗服务",
          "path": [
            "医药医疗",
            "医疗服务"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 3.01,
        "yoy_parent_net_income_pct": -32.79,
        "improvement_status": "恶化"
      },
      "report_file": "爱美客_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "中信证券": {
      "code": "600030",
      "name": "中信证券",
      "primary_industry": "金融",
      "secondary_tracks": [
        "证券",
        "财富管理"
      ],
      "tags": [
        {
          "name": "金融",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        },
        {
          "name": "证券",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "finance_broker_wealth",
          "node_name": "证券 / 财富管理",
          "path": [
            "金融",
            "证券 / 财富管理"
          ]
        },
        {
          "name": "财富管理",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "finance_broker_wealth",
          "node_name": "证券 / 财富管理",
          "path": [
            "金融",
            "证券 / 财富管理"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 104.59,
        "yoy_parent_net_income_pct": 54.6,
        "improvement_status": "改善"
      },
      "report_file": "中信证券_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "招商银行": {
      "code": "600036",
      "name": "招商银行",
      "primary_industry": "金融",
      "secondary_tracks": [
        "股份制银行",
        "财富管理"
      ],
      "tags": [
        {
          "name": "金融",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        },
        {
          "name": "股份制银行",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "finance_bank",
          "node_name": "银行",
          "path": [
            "金融",
            "银行"
          ]
        },
        {
          "name": "财富管理",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "finance_bank",
          "node_name": "银行",
          "path": [
            "金融",
            "银行"
          ]
        },
        {
          "name": "银行",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "finance_bank",
          "node_name": "银行",
          "path": [
            "金融",
            "银行"
          ]
        },
        {
          "name": "高股息",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "finance_bank",
          "node_name": "银行",
          "path": [
            "金融",
            "银行"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 380.48,
        "yoy_parent_net_income_pct": 1.52,
        "improvement_status": "基本持平"
      },
      "report_file": "招商银行_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "同仁堂": {
      "code": "600085",
      "name": "同仁堂",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "中药",
        "品牌中药"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "中药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "tcm",
          "node_name": "中药/品牌中药",
          "path": [
            "医药医疗",
            "中药/品牌中药"
          ]
        },
        {
          "name": "品牌中药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "tcm",
          "node_name": "中药/品牌中药",
          "path": [
            "医药医疗",
            "中药/品牌中药"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 6.17,
        "yoy_parent_net_income_pct": -19.07,
        "improvement_status": "恶化"
      },
      "report_file": "同仁堂_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "复星医药": {
      "code": "600196",
      "name": "复星医药",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "创新药",
        "生物药",
        "综合医药"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "创新药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "生物药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "综合医药",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗器械",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 10.8,
        "yoy_parent_net_income_pct": 13.87,
        "improvement_status": "改善"
      },
      "report_file": "复星医药_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "恒瑞医药": {
      "code": "600276",
      "name": "恒瑞医药",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "创新药",
        "化学制药"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "创新药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "化学制药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 22.81,
        "yoy_parent_net_income_pct": 21.78,
        "improvement_status": "改善"
      },
      "report_file": "恒瑞医药_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "万华化学": {
      "code": "600309",
      "name": "万华化学",
      "primary_industry": "化工材料",
      "secondary_tracks": [
        "MDI",
        "聚氨酯",
        "精细化工"
      ],
      "tags": [
        {
          "name": "化工材料",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "chemical_materials",
          "node_name": "化工材料",
          "path": [
            "化工材料"
          ]
        },
        {
          "name": "MDI",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        },
        {
          "name": "聚氨酯",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        },
        {
          "name": "精细化工",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        },
        {
          "name": "化工",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        },
        {
          "name": "新材料",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "advanced_materials",
          "node_name": "有色金属与新材料",
          "path": [
            "有色金属与新材料"
          ]
        },
        {
          "name": "周期",
          "role": "相关概念",
          "weight": 0.61,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 43.62,
        "yoy_parent_net_income_pct": 20.62,
        "improvement_status": "改善"
      },
      "report_file": "万华化学_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "华鲁恒升": {
      "code": "600426",
      "name": "华鲁恒升",
      "primary_industry": "化工材料",
      "secondary_tracks": [
        "煤化工",
        "新材料化工"
      ],
      "tags": [
        {
          "name": "化工材料",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "chemical_materials",
          "node_name": "化工材料",
          "path": [
            "化工材料"
          ]
        },
        {
          "name": "煤化工",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        },
        {
          "name": "新材料化工",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        },
        {
          "name": "化工",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 11.94,
        "yoy_parent_net_income_pct": 57.96,
        "improvement_status": "改善"
      },
      "report_file": "华鲁恒升_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "片仔癀": {
      "code": "600436",
      "name": "片仔癀",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "中药",
        "品牌中药"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "中药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "tcm",
          "node_name": "中药/品牌中药",
          "path": [
            "医药医疗",
            "中药/品牌中药"
          ]
        },
        {
          "name": "品牌中药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "tcm",
          "node_name": "中药/品牌中药",
          "path": [
            "医药医疗",
            "中药/品牌中药"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 7.4,
        "yoy_parent_net_income_pct": -25.64,
        "improvement_status": "恶化"
      },
      "report_file": "片仔癀_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "宝钛股份": {
      "code": "600456",
      "name": "宝钛股份",
      "primary_industry": "有色金属与新材料",
      "secondary_tracks": [
        "稀有",
        "战略金属",
        "钛",
        "钛合金"
      ],
      "tags": [
        {
          "name": "有色金属与新材料",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "advanced_materials",
          "node_name": "有色金属与新材料",
          "path": [
            "有色金属与新材料"
          ]
        },
        {
          "name": "稀有",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "advanced_new_energy_material",
          "node_name": "新能源材料",
          "path": [
            "有色金属与新材料",
            "新能源材料"
          ]
        },
        {
          "name": "战略金属",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "advanced_new_energy_material",
          "node_name": "新能源材料",
          "path": [
            "有色金属与新材料",
            "新能源材料"
          ]
        },
        {
          "name": "钛",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "advanced_new_energy_material",
          "node_name": "新能源材料",
          "path": [
            "有色金属与新材料",
            "新能源材料"
          ]
        },
        {
          "name": "光伏",
          "role": "观察概念",
          "weight": 0.59,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        },
        {
          "name": "半导体",
          "role": "观察概念",
          "weight": 0.59,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "新能源",
          "role": "观察概念",
          "weight": 0.59,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 0.76,
        "yoy_parent_net_income_pct": -27.4,
        "improvement_status": "恶化"
      },
      "report_file": "宝钛股份_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "贵州茅台": {
      "code": "600519",
      "name": "贵州茅台",
      "primary_industry": "消费白马",
      "secondary_tracks": [
        "白酒",
        "高端消费"
      ],
      "tags": [
        {
          "name": "消费白马",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_bluechip",
          "node_name": "消费白马",
          "path": [
            "消费白马"
          ]
        },
        {
          "name": "白酒",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        },
        {
          "name": "高端消费",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        },
        {
          "name": "消费",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        },
        {
          "name": "高股息",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 281.54,
        "yoy_parent_net_income_pct": 1.47,
        "improvement_status": "基本持平"
      },
      "report_file": "贵州茅台_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "长电科技": {
      "code": "600584",
      "name": "长电科技",
      "primary_industry": "AI算力产业链",
      "secondary_tracks": [
        "电子元器件",
        "通信"
      ],
      "tags": [
        {
          "name": "AI算力产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "电子元器件",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "passive_components",
          "node_name": "电子元器件/被动元器件",
          "path": [
            "半导体",
            "电子元器件/被动元器件"
          ]
        },
        {
          "name": "通信",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "comm_equipment",
          "node_name": "通信设备",
          "path": [
            "通信设备与运营商",
            "通信设备"
          ]
        },
        {
          "name": "半导体",
          "role": "相关概念",
          "weight": 0.67,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "封装测试",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "先进封装",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "Chiplet",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "汽车电子",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "auto_parts",
          "node_name": "汽车零部件",
          "path": [
            "新能源汽车",
            "汽车零部件"
          ]
        },
        {
          "name": "AI算力",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 2.79,
        "yoy_parent_net_income_pct": 42.74,
        "improvement_status": "改善"
      },
      "report_file": "长电科技_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "用友网络": {
      "code": "600588",
      "name": "用友网络",
      "primary_industry": "高端装备与工业",
      "secondary_tracks": [
        "企业软件",
        "工业软件"
      ],
      "tags": [
        {
          "name": "高端装备与工业",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "industrial_equipment",
          "node_name": "高端装备与工业",
          "path": [
            "高端装备与工业"
          ]
        },
        {
          "name": "企业软件",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        },
        {
          "name": "工业软件",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        },
        {
          "name": "AI应用",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": -7.44,
        "yoy_parent_net_income_pct": 1.79,
        "improvement_status": "基本持平"
      },
      "report_file": "用友网络_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "海尔智家": {
      "code": "600690",
      "name": "海尔智家",
      "primary_industry": "消费电子",
      "secondary_tracks": [
        "家电",
        "智能家居"
      ],
      "tags": [
        {
          "name": "消费电子",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_electronics",
          "node_name": "消费电子",
          "path": [
            "消费电子"
          ]
        },
        {
          "name": "家电",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        },
        {
          "name": "智能家居",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        },
        {
          "name": "消费电子/家电",
          "role": "相关概念",
          "weight": 0.69,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 48.07,
        "yoy_parent_net_income_pct": -15.22,
        "improvement_status": "恶化"
      },
      "report_file": "海尔智家_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "中航沈飞": {
      "code": "600760",
      "name": "中航沈飞",
      "primary_industry": "国防军工与航空航天",
      "secondary_tracks": [
        "航空装备",
        "军工主机"
      ],
      "tags": [
        {
          "name": "国防军工与航空航天",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "defense_aerospace",
          "node_name": "国防军工与航空航天",
          "path": [
            "国防军工与航空航天"
          ]
        },
        {
          "name": "航空装备",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "军工主机",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "国防军工",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "航空航天",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "高端装备",
          "role": "相关概念",
          "weight": 0.66,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "industrial_machinery",
          "node_name": "工程机械 / 矿山装备",
          "path": [
            "高端装备与工业",
            "工程机械 / 矿山装备"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 1.65,
        "yoy_parent_net_income_pct": -61.69,
        "improvement_status": "恶化"
      },
      "report_file": "中航沈飞_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "通策医疗": {
      "code": "600763",
      "name": "通策医疗",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医疗服务",
        "口腔"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗服务",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "medical_service",
          "node_name": "医疗服务",
          "path": [
            "医药医疗",
            "医疗服务"
          ]
        },
        {
          "name": "口腔",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "medical_service",
          "node_name": "医疗服务",
          "path": [
            "医药医疗",
            "医疗服务"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 2.21,
        "yoy_parent_net_income_pct": 1.66,
        "improvement_status": "基本持平"
      },
      "report_file": "通策医疗_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "航发动力": {
      "code": "600893",
      "name": "航发动力",
      "primary_industry": "国防军工与航空航天",
      "secondary_tracks": [
        "航空发动机",
        "高端装备"
      ],
      "tags": [
        {
          "name": "国防军工与航空航天",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "defense_aerospace",
          "node_name": "国防军工与航空航天",
          "path": [
            "国防军工与航空航天"
          ]
        },
        {
          "name": "航空发动机",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "defense_engine",
          "node_name": "航空发动机",
          "path": [
            "国防军工与航空航天",
            "航空发动机"
          ]
        },
        {
          "name": "高端装备",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "industrial_machinery",
          "node_name": "工程机械 / 矿山装备",
          "path": [
            "高端装备与工业",
            "工程机械 / 矿山装备"
          ]
        },
        {
          "name": "国防军工",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "defense_engine",
          "node_name": "航空发动机",
          "path": [
            "国防军工与航空航天",
            "航空发动机"
          ]
        },
        {
          "name": "航空航天",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "defense_engine",
          "node_name": "航空发动机",
          "path": [
            "国防军工与航空航天",
            "航空发动机"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 0.19,
        "yoy_parent_net_income_pct": -65.93,
        "improvement_status": "恶化"
      },
      "report_file": "航发动力_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "中国海油": {
      "code": "600938",
      "name": "中国海油",
      "primary_industry": "资源周期",
      "secondary_tracks": [
        "油气开采",
        "高股息"
      ],
      "tags": [
        {
          "name": "资源周期",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        },
        {
          "name": "油气开采",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "resources_energy",
          "node_name": "能源资源",
          "path": [
            "资源周期",
            "能源资源"
          ]
        },
        {
          "name": "高股息",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "finance_high_dividend",
          "node_name": "高股息金融",
          "path": [
            "金融",
            "高股息金融"
          ]
        },
        {
          "name": "资源",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_energy",
          "node_name": "能源资源",
          "path": [
            "资源周期",
            "能源资源"
          ]
        },
        {
          "name": "油气",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_energy",
          "node_name": "能源资源",
          "path": [
            "资源周期",
            "能源资源"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 391.84,
        "yoy_parent_net_income_pct": 7.06,
        "improvement_status": "改善"
      },
      "report_file": "中国海油_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "中国神华": {
      "code": "601088",
      "name": "中国神华",
      "primary_industry": "资源周期",
      "secondary_tracks": [
        "煤炭",
        "高股息"
      ],
      "tags": [
        {
          "name": "资源周期",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        },
        {
          "name": "煤炭",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "resources_energy",
          "node_name": "能源资源",
          "path": [
            "资源周期",
            "能源资源"
          ]
        },
        {
          "name": "高股息",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "finance_high_dividend",
          "node_name": "高股息金融",
          "path": [
            "金融",
            "高股息金融"
          ]
        },
        {
          "name": "资源",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_energy",
          "node_name": "能源资源",
          "path": [
            "资源周期",
            "能源资源"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 133.12,
        "yoy_parent_net_income_pct": -10.73,
        "improvement_status": "恶化"
      },
      "report_file": "中国神华_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "工业富联": {
      "code": "601138",
      "name": "工业富联",
      "primary_industry": "AI算力产业链",
      "secondary_tracks": [
        "AI服务器",
        "算力",
        "云端硬件制造"
      ],
      "tags": [
        {
          "name": "AI算力产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "AI服务器",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        },
        {
          "name": "算力",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "云端硬件制造",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        },
        {
          "name": "AI",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "服务器",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        },
        {
          "name": "云计算",
          "role": "相关概念",
          "weight": 0.67,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 105.97,
        "yoy_parent_net_income_pct": 102.55,
        "improvement_status": "改善"
      },
      "report_file": "工业富联_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "中国平安": {
      "code": "601318",
      "name": "中国平安",
      "primary_industry": "金融",
      "secondary_tracks": [
        "保险",
        "综合金融"
      ],
      "tags": [
        {
          "name": "金融",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        },
        {
          "name": "保险",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "finance_insurance_fintech",
          "node_name": "保险 / 综合金融",
          "path": [
            "金融",
            "保险 / 综合金融"
          ]
        },
        {
          "name": "综合金融",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "finance_insurance_fintech",
          "node_name": "保险 / 综合金融",
          "path": [
            "金融",
            "保险 / 综合金融"
          ]
        },
        {
          "name": "高股息",
          "role": "相关概念",
          "weight": 0.69,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        },
        {
          "name": "金融科技",
          "role": "相关概念",
          "weight": 0.69,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "finance_insurance_fintech",
          "node_name": "保险 / 综合金融",
          "path": [
            "金融",
            "保险 / 综合金融"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 332.63,
        "yoy_parent_net_income_pct": -7.38,
        "improvement_status": "恶化"
      },
      "report_file": "中国平安_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "工商银行": {
      "code": "601398",
      "name": "工商银行",
      "primary_industry": "金融",
      "secondary_tracks": [
        "银行",
        "高股息"
      ],
      "tags": [
        {
          "name": "金融",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        },
        {
          "name": "银行",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "finance_high_dividend",
          "node_name": "高股息金融",
          "path": [
            "金融",
            "高股息金融"
          ]
        },
        {
          "name": "高股息",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "finance_high_dividend",
          "node_name": "高股息金融",
          "path": [
            "金融",
            "高股息金融"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 880.13,
        "yoy_parent_net_income_pct": 3.31,
        "improvement_status": "基本持平"
      },
      "report_file": "工商银行_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "上海医药": {
      "code": "601607",
      "name": "上海医药",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医药商业",
        "综合医药"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药商业",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "pharma_distribution",
          "node_name": "医药商业/药房",
          "path": [
            "医药医疗",
            "医药商业/药房"
          ]
        },
        {
          "name": "综合医药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药流通",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "pharma_distribution",
          "node_name": "医药商业/药房",
          "path": [
            "医药医疗",
            "医药商业/药房"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 18.5,
        "yoy_parent_net_income_pct": 6.35,
        "improvement_status": "改善"
      },
      "report_file": "上海医药_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "中国中冶": {
      "code": "601618",
      "name": "中国中冶",
      "primary_industry": "高端装备与工业",
      "secondary_tracks": [
        "工程",
        "矿山机械",
        "冶金工程",
        "矿产资源"
      ],
      "tags": [
        {
          "name": "高端装备与工业",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "industrial_equipment",
          "node_name": "高端装备与工业",
          "path": [
            "高端装备与工业"
          ]
        },
        {
          "name": "工程",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "industrial_machinery",
          "node_name": "工程机械 / 矿山装备",
          "path": [
            "高端装备与工业",
            "工程机械 / 矿山装备"
          ]
        },
        {
          "name": "矿山机械",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "industrial_machinery",
          "node_name": "工程机械 / 矿山装备",
          "path": [
            "高端装备与工业",
            "工程机械 / 矿山装备"
          ]
        },
        {
          "name": "冶金工程",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "industrial_machinery",
          "node_name": "工程机械 / 矿山装备",
          "path": [
            "高端装备与工业",
            "工程机械 / 矿山装备"
          ]
        },
        {
          "name": "光伏",
          "role": "相关概念",
          "weight": 0.62,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        },
        {
          "name": "半导体",
          "role": "相关概念",
          "weight": 0.62,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "新能源",
          "role": "相关概念",
          "weight": 0.62,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 19.74,
        "yoy_parent_net_income_pct": 1.59,
        "improvement_status": "基本持平"
      },
      "report_file": "中国中冶_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "拓普集团": {
      "code": "601689",
      "name": "拓普集团",
      "primary_industry": "新能源汽车产业链",
      "secondary_tracks": [
        "汽车零部件",
        "机器人执行器"
      ],
      "tags": [
        {
          "name": "新能源汽车产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "new_energy_vehicle",
          "node_name": "新能源汽车",
          "path": [
            "新能源汽车"
          ]
        },
        {
          "name": "汽车零部件",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "auto_parts",
          "node_name": "汽车零部件",
          "path": [
            "新能源汽车",
            "汽车零部件"
          ]
        },
        {
          "name": "机器人执行器",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "robot_actuator_formal",
          "node_name": "执行器",
          "path": [
            "机器人/自动化",
            "执行器"
          ]
        },
        {
          "name": "新能源车",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "new_energy_vehicle",
          "node_name": "新能源汽车",
          "path": [
            "新能源汽车"
          ]
        },
        {
          "name": "机器人",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "robot_actuator_formal",
          "node_name": "执行器",
          "path": [
            "机器人/自动化",
            "执行器"
          ]
        },
        {
          "name": "智能驾驶",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "auto_parts",
          "node_name": "汽车零部件",
          "path": [
            "新能源汽车",
            "汽车零部件"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 5.53,
        "yoy_parent_net_income_pct": -2.42,
        "improvement_status": "基本持平"
      },
      "report_file": "拓普集团_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "中国石油": {
      "code": "601857",
      "name": "中国石油",
      "primary_industry": "资源周期",
      "secondary_tracks": [
        "油气",
        "炼化"
      ],
      "tags": [
        {
          "name": "资源周期",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        },
        {
          "name": "油气",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "resources_energy",
          "node_name": "能源资源",
          "path": [
            "资源周期",
            "能源资源"
          ]
        },
        {
          "name": "炼化",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "resources_energy",
          "node_name": "能源资源",
          "path": [
            "资源周期",
            "能源资源"
          ]
        },
        {
          "name": "资源",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_energy",
          "node_name": "能源资源",
          "path": [
            "资源周期",
            "能源资源"
          ]
        },
        {
          "name": "高股息",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 534.77,
        "yoy_parent_net_income_pct": 1.86,
        "improvement_status": "基本持平"
      },
      "report_file": "中国石油_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "紫金矿业": {
      "code": "601899",
      "name": "紫金矿业",
      "primary_industry": "资源周期",
      "secondary_tracks": [
        "铜金矿产",
        "全球矿业"
      ],
      "tags": [
        {
          "name": "资源周期",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        },
        {
          "name": "铜金矿产",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "全球矿业",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "黄金",
          "role": "相关概念",
          "weight": 0.63,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        },
        {
          "name": "铜",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "资源",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 251.66,
        "yoy_parent_net_income_pct": 97.5,
        "improvement_status": "改善"
      },
      "report_file": "紫金矿业_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "建设银行": {
      "code": "601939",
      "name": "建设银行",
      "primary_industry": "金融",
      "secondary_tracks": [
        "银行",
        "高股息"
      ],
      "tags": [
        {
          "name": "金融",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "finance",
          "node_name": "金融",
          "path": [
            "金融"
          ]
        },
        {
          "name": "银行",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "finance_high_dividend",
          "node_name": "高股息金融",
          "path": [
            "金融",
            "高股息金融"
          ]
        },
        {
          "name": "高股息",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "finance_high_dividend",
          "node_name": "高股息金融",
          "path": [
            "金融",
            "高股息金融"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 868.21,
        "yoy_parent_net_income_pct": 3.53,
        "improvement_status": "基本持平"
      },
      "report_file": "建设银行_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "晶方科技": {
      "code": "603005",
      "name": "晶方科技",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "封装测试",
        "CIS封装"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "封装测试",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "CIS封装",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 0.66,
        "yoy_parent_net_income_pct": 0.12,
        "improvement_status": "基本持平"
      },
      "report_file": "晶方科技_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "大参林": {
      "code": "603233",
      "name": "大参林",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医药商业",
        "药房"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药商业",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "pharma_distribution",
          "node_name": "医药商业/药房",
          "path": [
            "医药医疗",
            "医药商业/药房"
          ]
        },
        {
          "name": "药房",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "pharma_distribution",
          "node_name": "医药商业/药房",
          "path": [
            "医药医疗",
            "医药商业/药房"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 5.44,
        "yoy_parent_net_income_pct": 11.12,
        "improvement_status": "改善"
      },
      "report_file": "大参林_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "药明康德": {
      "code": "603259",
      "name": "药明康德",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "CXO",
        "CRO",
        "CDMO"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "CXO",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "CRO",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "CDMO",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 46.71,
        "yoy_parent_net_income_pct": 26.68,
        "improvement_status": "改善"
      },
      "report_file": "药明康德_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "万泰生物": {
      "code": "603392",
      "name": "万泰生物",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "创新药",
        "生物药",
        "疫苗",
        "诊断"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "创新药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "生物药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "疫苗",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "IVD",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "体外诊断",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": -0.45,
        "yoy_parent_net_income_pct": 18.56,
        "improvement_status": "改善"
      },
      "report_file": "万泰生物_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "韦尔股份": {
      "code": "603501",
      "name": "韦尔股份",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "模拟芯片",
        "CIS"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "模拟芯片",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "CIS",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "芯片",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 4.94,
        "yoy_parent_net_income_pct": -41.92,
        "improvement_status": "恶化"
      },
      "report_file": "韦尔股份_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "老百姓": {
      "code": "603883",
      "name": "老百姓",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医药商业",
        "药房"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药商业",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "pharma_distribution",
          "node_name": "医药商业/药房",
          "path": [
            "医药医疗",
            "医药商业/药房"
          ]
        },
        {
          "name": "药房",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "pharma_distribution",
          "node_name": "医药商业/药房",
          "path": [
            "医药医疗",
            "医药商业/药房"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 3.02,
        "yoy_parent_net_income_pct": 5.27,
        "improvement_status": "改善"
      },
      "report_file": "老百姓_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "益丰药房": {
      "code": "603939",
      "name": "益丰药房",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医药商业",
        "药房"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药商业",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "pharma_distribution",
          "node_name": "医药商业/药房",
          "path": [
            "医药医疗",
            "医药商业/药房"
          ]
        },
        {
          "name": "药房",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "pharma_distribution",
          "node_name": "医药商业/药房",
          "path": [
            "医药医疗",
            "医药商业/药房"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 5.46,
        "yoy_parent_net_income_pct": 11.14,
        "improvement_status": "改善"
      },
      "report_file": "益丰药房_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "兆易创新": {
      "code": "603986",
      "name": "兆易创新",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "存储芯片",
        "MCU"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "存储芯片",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "MCU",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "芯片",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 14.73,
        "yoy_parent_net_income_pct": 522.79,
        "improvement_status": "改善"
      },
      "report_file": "兆易创新_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "洛阳钼业": {
      "code": "603993",
      "name": "洛阳钼业",
      "primary_industry": "资源周期",
      "secondary_tracks": [
        "有色金属",
        "全球矿业"
      ],
      "tags": [
        {
          "name": "资源周期",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        },
        {
          "name": "有色金属",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "advanced_materials",
          "node_name": "有色金属与新材料",
          "path": [
            "有色金属与新材料"
          ]
        },
        {
          "name": "全球矿业",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "资源",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "铜钴",
          "role": "相关概念",
          "weight": 0.63,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 88.24,
        "yoy_parent_net_income_pct": 96.66,
        "improvement_status": "改善"
      },
      "report_file": "洛阳钼业_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "福莱蒽特": {
      "code": "605566",
      "name": "福莱蒽特",
      "primary_industry": "人形机器人产业链",
      "secondary_tracks": [
        "机器人传感器",
        "力矩传感器",
        "电子皮肤"
      ],
      "tags": [
        {
          "name": "人形机器人产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "robotics",
          "node_name": "机器人/自动化",
          "path": [
            "机器人/自动化"
          ]
        },
        {
          "name": "机器人传感器",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "robot_sensor_formal",
          "node_name": "传感器 / 电子皮肤",
          "path": [
            "机器人/自动化",
            "传感器 / 电子皮肤"
          ]
        },
        {
          "name": "力矩传感器",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "robot_sensor_formal",
          "node_name": "传感器 / 电子皮肤",
          "path": [
            "机器人/自动化",
            "传感器 / 电子皮肤"
          ]
        },
        {
          "name": "电子皮肤",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "robot_sensor_formal",
          "node_name": "传感器 / 电子皮肤",
          "path": [
            "机器人/自动化",
            "传感器 / 电子皮肤"
          ]
        },
        {
          "name": "AI",
          "role": "相关概念",
          "weight": 0.61,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "机器人",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "robot_sensor_formal",
          "node_name": "传感器 / 电子皮肤",
          "path": [
            "机器人/自动化",
            "传感器 / 电子皮肤"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 0.25,
        "yoy_parent_net_income_pct": 82.51,
        "improvement_status": "改善"
      },
      "report_file": "福莱蒽特_深度分析报告.html",
      "cooperation_status": "只记录公司公开明确的合作对象、客户、供应商或合作伙伴；没有公开确认则写无公开确认。",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "中微公司": {
      "code": "688012",
      "name": "中微公司",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "半导体设备",
        "刻蚀",
        "MOCVD"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体设备",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        },
        {
          "name": "刻蚀",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        },
        {
          "name": "MOCVD",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "国产替代",
          "role": "相关概念",
          "weight": 0.61,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "设备",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 9.18,
        "yoy_parent_net_income_pct": 197.2,
        "improvement_status": "改善"
      },
      "report_file": "中微公司_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "海光信息": {
      "code": "688041",
      "name": "海光信息",
      "primary_industry": "AI算力产业链",
      "secondary_tracks": [
        "国产CPU",
        "GPU",
        "服务器芯片"
      ],
      "tags": [
        {
          "name": "AI算力产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "国产CPU",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "ai_chip",
          "node_name": "AI芯片/国产算力芯片",
          "path": [
            "AI算力",
            "AI芯片/国产算力芯片"
          ]
        },
        {
          "name": "GPU",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "ai_chip",
          "node_name": "AI芯片/国产算力芯片",
          "path": [
            "AI算力",
            "AI芯片/国产算力芯片"
          ]
        },
        {
          "name": "服务器芯片",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        },
        {
          "name": "AI",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "半导体",
          "role": "相关概念",
          "weight": 0.67,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "国产替代",
          "role": "相关概念",
          "weight": 0.61,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "算力",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 8.77,
        "yoy_parent_net_income_pct": 35.82,
        "improvement_status": "改善"
      },
      "report_file": "海光信息_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "拓荆科技": {
      "code": "688072",
      "name": "拓荆科技",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "半导体设备",
        "薄膜沉积"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体设备",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        },
        {
          "name": "薄膜沉积",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "国产替代",
          "role": "相关概念",
          "weight": 0.61,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "设备",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 5.62,
        "yoy_parent_net_income_pct": 488.29,
        "improvement_status": "改善"
      },
      "report_file": "拓荆科技_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "金山办公": {
      "code": "688111",
      "name": "金山办公",
      "primary_industry": "高端装备与工业",
      "secondary_tracks": [
        "办公软件",
        "AI应用"
      ],
      "tags": [
        {
          "name": "高端装备与工业",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "industrial_equipment",
          "node_name": "高端装备与工业",
          "path": [
            "高端装备与工业"
          ]
        },
        {
          "name": "办公软件",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        },
        {
          "name": "AI应用",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        },
        {
          "name": "企业软件",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 21.95,
        "yoy_parent_net_income_pct": 444.97,
        "improvement_status": "改善"
      },
      "report_file": "金山办公_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "华大智造": {
      "code": "688114",
      "name": "华大智造",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医疗器械",
        "生命科学仪器"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗器械",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "生命科学仪器",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": -1.05,
        "yoy_parent_net_income_pct": 37.87,
        "improvement_status": "改善"
      },
      "report_file": "华大智造_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "西部超导": {
      "code": "688122",
      "name": "西部超导",
      "primary_industry": "国防军工与航空航天",
      "secondary_tracks": [
        "航空装备",
        "钛合金",
        "高温合金"
      ],
      "tags": [
        {
          "name": "国防军工与航空航天",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "defense_aerospace",
          "node_name": "国防军工与航空航天",
          "path": [
            "国防军工与航空航天"
          ]
        },
        {
          "name": "航空装备",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "钛合金",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "advanced_metal_alloy",
          "node_name": "高端金属 / 合金",
          "path": [
            "有色金属与新材料",
            "高端金属 / 合金"
          ]
        },
        {
          "name": "高温合金",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "光伏",
          "role": "观察概念",
          "weight": 0.56,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        },
        {
          "name": "军工",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "半导体",
          "role": "观察概念",
          "weight": 0.56,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "新能源",
          "role": "观察概念",
          "weight": 0.56,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        },
        {
          "name": "钛",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "advanced_metal_alloy",
          "node_name": "高端金属 / 合金",
          "path": [
            "有色金属与新材料",
            "高端金属 / 合金"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 0.69,
        "yoy_parent_net_income_pct": -74.21,
        "improvement_status": "恶化"
      },
      "report_file": "西部超导_深度分析报告.html",
      "cooperation_status": "只记录公司公开明确的合作对象、客户、供应商或合作伙伴；没有公开确认则写无公开确认。",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "沪硅产业": {
      "code": "688126",
      "name": "沪硅产业",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "半导体材料",
        "硅片"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体材料",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "硅片",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": -5.28,
        "yoy_parent_net_income_pct": -131.67,
        "improvement_status": "恶化"
      },
      "report_file": "沪硅产业_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "寒武纪": {
      "code": "688256",
      "name": "寒武纪",
      "primary_industry": "AI算力产业链",
      "secondary_tracks": [
        "AI芯片",
        "智能计算"
      ],
      "tags": [
        {
          "name": "AI算力产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "AI芯片",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "ai_chip",
          "node_name": "AI芯片/国产算力芯片",
          "path": [
            "AI算力",
            "AI芯片/国产算力芯片"
          ]
        },
        {
          "name": "智能计算",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "ai_chip",
          "node_name": "AI芯片/国产算力芯片",
          "path": [
            "AI算力",
            "AI芯片/国产算力芯片"
          ]
        },
        {
          "name": "AI",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "半导体",
          "role": "相关概念",
          "weight": 0.67,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "算力",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "国产替代",
          "role": "相关概念",
          "weight": 0.61,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 10.13,
        "yoy_parent_net_income_pct": 185.04,
        "improvement_status": "改善"
      },
      "report_file": "寒武纪_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "联影医疗": {
      "code": "688271",
      "name": "联影医疗",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医疗器械",
        "医学影像"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗器械",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "医学影像",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗设备",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 3.92,
        "yoy_parent_net_income_pct": 7.78,
        "improvement_status": "改善"
      },
      "report_file": "联影医疗_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "TCL科技": {
      "code": "000100",
      "name": "TCL科技",
      "primary_industry": "消费电子与终端",
      "secondary_tracks": [
        "面板",
        "显示",
        "LCD液晶面板"
      ],
      "tags": [
        {
          "name": "消费电子与终端",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_electronics",
          "node_name": "消费电子",
          "path": [
            "消费电子"
          ]
        },
        {
          "name": "面板",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_display",
          "node_name": "面板 / 显示",
          "path": [
            "消费电子",
            "面板 / 显示"
          ]
        },
        {
          "name": "显示",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "consumer_display",
          "node_name": "面板 / 显示",
          "path": [
            "消费电子",
            "面板 / 显示"
          ]
        },
        {
          "name": "LCD液晶面板",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "consumer_display",
          "node_name": "面板 / 显示",
          "path": [
            "消费电子",
            "面板 / 显示"
          ]
        },
        {
          "name": "面板/显示",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "consumer_display",
          "node_name": "面板 / 显示",
          "path": [
            "消费电子",
            "面板 / 显示"
          ]
        },
        {
          "name": "OLED",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "consumer_display",
          "node_name": "面板 / 显示",
          "path": [
            "消费电子",
            "面板 / 显示"
          ]
        },
        {
          "name": "Mini LED",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "consumer_display",
          "node_name": "面板 / 显示",
          "path": [
            "消费电子",
            "面板 / 显示"
          ]
        },
        {
          "name": "光伏",
          "role": "相关概念",
          "weight": 0.67,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        },
        {
          "name": "半导体材料",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "AI",
          "role": "相关概念",
          "weight": 0.61,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 6.08,
        "yoy_parent_net_income_pct": 53.71,
        "improvement_status": "改善"
      },
      "report_file": "TCL科技_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "东方盛虹": {
      "code": "000301",
      "name": "东方盛虹",
      "primary_industry": "化工材料",
      "secondary_tracks": [
        "石化",
        "化纤"
      ],
      "tags": [
        {
          "name": "化工材料",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "chemical_materials",
          "node_name": "化工材料",
          "path": [
            "化工材料"
          ]
        },
        {
          "name": "石化",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_petro_coal",
          "node_name": "石化 / 煤化工",
          "path": [
            "化工材料",
            "石化 / 煤化工"
          ]
        },
        {
          "name": "化纤",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_petro_coal",
          "node_name": "石化 / 煤化工",
          "path": [
            "化工材料",
            "石化 / 煤化工"
          ]
        },
        {
          "name": "化工",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_petro_coal",
          "node_name": "石化 / 煤化工",
          "path": [
            "化工材料",
            "石化 / 煤化工"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 14.48,
        "yoy_parent_net_income_pct": 319.86,
        "improvement_status": "改善"
      },
      "report_file": "东方盛虹_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "美的集团": {
      "code": "000333",
      "name": "美的集团",
      "primary_industry": "消费电子",
      "secondary_tracks": [
        "家电",
        "智能家居"
      ],
      "tags": [
        {
          "name": "消费电子",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_electronics",
          "node_name": "消费电子",
          "path": [
            "消费电子"
          ]
        },
        {
          "name": "家电",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        },
        {
          "name": "智能家居",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        },
        {
          "name": "消费电子/家电",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 128.6,
        "yoy_parent_net_income_pct": 2.03,
        "improvement_status": "基本持平"
      },
      "report_file": "美的集团_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "云南白药": {
      "code": "000538",
      "name": "云南白药",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "中药",
        "品牌中药"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "中药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "tcm",
          "node_name": "中药/品牌中药",
          "path": [
            "医药医疗",
            "中药/品牌中药"
          ]
        },
        {
          "name": "品牌中药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "tcm",
          "node_name": "中药/品牌中药",
          "path": [
            "医药医疗",
            "中药/品牌中药"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 20.31,
        "yoy_parent_net_income_pct": 5.31,
        "improvement_status": "改善"
      },
      "report_file": "云南白药_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "泸州老窖": {
      "code": "000568",
      "name": "泸州老窖",
      "primary_industry": "消费白马",
      "secondary_tracks": [
        "白酒",
        "高端消费"
      ],
      "tags": [
        {
          "name": "消费白马",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_bluechip",
          "node_name": "消费白马",
          "path": [
            "消费白马"
          ]
        },
        {
          "name": "白酒",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        },
        {
          "name": "高端消费",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        },
        {
          "name": "消费",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 37.3,
        "yoy_parent_net_income_pct": -19.25,
        "improvement_status": "恶化"
      },
      "report_file": "泸州老窖_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "格力电器": {
      "code": "000651",
      "name": "格力电器",
      "primary_industry": "消费电子",
      "secondary_tracks": [
        "家电",
        "白电"
      ],
      "tags": [
        {
          "name": "消费电子",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_electronics",
          "node_name": "消费电子",
          "path": [
            "消费电子"
          ]
        },
        {
          "name": "家电",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        },
        {
          "name": "白电",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        },
        {
          "name": "消费电子/家电",
          "role": "相关概念",
          "weight": 0.72,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "consumer_smart_home",
          "node_name": "智能家居 / 白电",
          "path": [
            "消费电子",
            "智能家居 / 白电"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 60.99,
        "yoy_parent_net_income_pct": 3.01,
        "improvement_status": "基本持平"
      },
      "report_file": "格力电器_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "长春高新": {
      "code": "000661",
      "name": "长春高新",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "创新药",
        "生物药",
        "生物制药"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "创新药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "生物药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "生物制药",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 2.71,
        "yoy_parent_net_income_pct": -41.67,
        "improvement_status": "恶化"
      },
      "report_file": "长春高新_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "中航西飞": {
      "code": "000768",
      "name": "中航西飞",
      "primary_industry": "国防军工与航空航天",
      "secondary_tracks": [
        "航空装备",
        "大飞机"
      ],
      "tags": [
        {
          "name": "国防军工与航空航天",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "defense_aerospace",
          "node_name": "国防军工与航空航天",
          "path": [
            "国防军工与航空航天"
          ]
        },
        {
          "name": "航空装备",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "大飞机",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "国防军工",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "航空航天",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "defense_aircraft",
          "node_name": "航空装备 / 大飞机",
          "path": [
            "国防军工与航空航天",
            "航空装备 / 大飞机"
          ]
        },
        {
          "name": "高端装备",
          "role": "相关概念",
          "weight": 0.69,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "industrial_machinery",
          "node_name": "工程机械 / 矿山装备",
          "path": [
            "高端装备与工业",
            "工程机械 / 矿山装备"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 2.46,
        "yoy_parent_net_income_pct": -14.73,
        "improvement_status": "恶化"
      },
      "report_file": "中航西飞_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "五粮液": {
      "code": "000858",
      "name": "五粮液",
      "primary_industry": "消费白马",
      "secondary_tracks": [
        "白酒",
        "高端消费"
      ],
      "tags": [
        {
          "name": "消费白马",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_bluechip",
          "node_name": "消费白马",
          "path": [
            "消费白马"
          ]
        },
        {
          "name": "白酒",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        },
        {
          "name": "高端消费",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        },
        {
          "name": "消费",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_liquor_premium",
          "node_name": "白酒 / 高端消费",
          "path": [
            "消费白马",
            "白酒 / 高端消费"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 83.24,
        "yoy_parent_net_income_pct": 82.57,
        "improvement_status": "改善"
      },
      "report_file": "五粮液_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "华东医药": {
      "code": "000963",
      "name": "华东医药",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "创新药",
        "生物药",
        "医美"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "创新药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "生物药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        },
        {
          "name": "医美",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "medical_service",
          "node_name": "医疗服务",
          "path": [
            "医药医疗",
            "医疗服务"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗服务",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "medical_service",
          "node_name": "医疗服务",
          "path": [
            "医药医疗",
            "医疗服务"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 9.97,
        "yoy_parent_net_income_pct": 9.56,
        "improvement_status": "改善"
      },
      "report_file": "华东医药_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "三花智控": {
      "code": "002050",
      "name": "三花智控",
      "primary_industry": "人形机器人产业链",
      "secondary_tracks": [
        "减速器",
        "丝杠",
        "执行器",
        "精密功能件",
        "结构件"
      ],
      "tags": [
        {
          "name": "人形机器人产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "robotics",
          "node_name": "机器人/自动化",
          "path": [
            "机器人/自动化"
          ]
        },
        {
          "name": "减速器",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "robot_actuator_formal",
          "node_name": "执行器",
          "path": [
            "机器人/自动化",
            "执行器"
          ]
        },
        {
          "name": "丝杠",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "robot_actuator_formal",
          "node_name": "执行器",
          "path": [
            "机器人/自动化",
            "执行器"
          ]
        },
        {
          "name": "执行器",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "robot_actuator_formal",
          "node_name": "执行器",
          "path": [
            "机器人/自动化",
            "执行器"
          ]
        },
        {
          "name": "储能",
          "role": "相关概念",
          "weight": 0.62,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "新能源",
          "role": "相关概念",
          "weight": 0.62,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        },
        {
          "name": "机器人",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "robot_humanoid",
          "node_name": "人形机器人",
          "path": [
            "机器人/自动化",
            "人形机器人"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 9.51,
        "yoy_parent_net_income_pct": 2.68,
        "improvement_status": "基本持平"
      },
      "report_file": "三花智控_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "顺络电子": {
      "code": "002138",
      "name": "顺络电子",
      "primary_industry": "消费电子与终端",
      "secondary_tracks": [
        "手机产业链",
        "电感",
        "被动元器件"
      ],
      "tags": [
        {
          "name": "消费电子与终端",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_electronics",
          "node_name": "消费电子",
          "path": [
            "消费电子"
          ]
        },
        {
          "name": "手机产业链",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_ai_terminal",
          "node_name": "AI终端 / 消费电子",
          "path": [
            "消费电子",
            "AI终端 / 消费电子"
          ]
        },
        {
          "name": "电感",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "passive_components",
          "node_name": "电子元器件/被动元器件",
          "path": [
            "半导体",
            "电子元器件/被动元器件"
          ]
        },
        {
          "name": "被动元器件",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "passive_components",
          "node_name": "电子元器件/被动元器件",
          "path": [
            "半导体",
            "电子元器件/被动元器件"
          ]
        },
        {
          "name": "AI",
          "role": "观察概念",
          "weight": 0.53,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "电源",
          "role": "观察概念",
          "weight": 0.55,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 1.98,
        "yoy_parent_net_income_pct": -23.71,
        "improvement_status": "恶化"
      },
      "report_file": "顺络电子_深度分析报告.html",
      "cooperation_status": "只记录公司公开明确的合作对象、客户、供应商或合作伙伴；没有公开确认则写无公开确认。",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "通富微电": {
      "code": "002156",
      "name": "通富微电",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "封装测试",
        "先进封装"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "封装测试",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "先进封装",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "Chiplet",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 3.5,
        "yoy_parent_net_income_pct": 224.55,
        "improvement_status": "改善"
      },
      "report_file": "通富微电_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "华天科技": {
      "code": "002185",
      "name": "华天科技",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "封装测试",
        "先进封装"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "封装测试",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "先进封装",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "advanced_packaging",
          "node_name": "封装测试/先进封装",
          "path": [
            "半导体",
            "封装测试/先进封装"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 0.75,
        "yoy_parent_net_income_pct": 568.39,
        "improvement_status": "改善"
      },
      "report_file": "华天科技_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "鱼跃医疗": {
      "code": "002223",
      "name": "鱼跃医疗",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "医疗器械",
        "家用医疗"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗器械",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        },
        {
          "name": "家用医疗",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.8,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医疗设备",
          "role": "相关概念",
          "weight": 0.66,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "medical_device",
          "node_name": "医疗器械/IVD",
          "path": [
            "医药医疗",
            "医疗器械/IVD"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 4.29,
        "yoy_parent_net_income_pct": -31.44,
        "improvement_status": "恶化"
      },
      "report_file": "鱼跃医疗_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "科大讯飞": {
      "code": "002230",
      "name": "科大讯飞",
      "primary_industry": "高端装备与工业",
      "secondary_tracks": [
        "AI应用",
        "教育软件"
      ],
      "tags": [
        {
          "name": "高端装备与工业",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "industrial_equipment",
          "node_name": "高端装备与工业",
          "path": [
            "高端装备与工业"
          ]
        },
        {
          "name": "AI应用",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        },
        {
          "name": "教育软件",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        },
        {
          "name": "办公软件",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "industrial_software",
          "node_name": "工业软件 / 企业软件",
          "path": [
            "高端装备与工业",
            "工业软件 / 企业软件"
          ]
        },
        {
          "name": "人工智能",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": -1.88,
        "yoy_parent_net_income_pct": 12.17,
        "improvement_status": "改善"
      },
      "report_file": "科大讯飞_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "歌尔股份": {
      "code": "002241",
      "name": "歌尔股份",
      "primary_industry": "消费电子与终端",
      "secondary_tracks": [
        "声学",
        "VRAR",
        "智能硬件"
      ],
      "tags": [
        {
          "name": "消费电子与终端",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_electronics",
          "node_name": "消费电子",
          "path": [
            "消费电子"
          ]
        },
        {
          "name": "声学",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_ai_terminal",
          "node_name": "AI终端 / 消费电子",
          "path": [
            "消费电子",
            "AI终端 / 消费电子"
          ]
        },
        {
          "name": "VRAR",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_ai_terminal",
          "node_name": "AI终端 / 消费电子",
          "path": [
            "消费电子",
            "AI终端 / 消费电子"
          ]
        },
        {
          "name": "智能硬件",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "consumer_ai_terminal",
          "node_name": "AI终端 / 消费电子",
          "path": [
            "消费电子",
            "AI终端 / 消费电子"
          ]
        },
        {
          "name": "消费电子",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_ai_terminal",
          "node_name": "AI终端 / 消费电子",
          "path": [
            "消费电子",
            "AI终端 / 消费电子"
          ]
        },
        {
          "name": "AI终端",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "consumer_ai_terminal",
          "node_name": "AI终端 / 消费电子",
          "path": [
            "消费电子",
            "AI终端 / 消费电子"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 5.22,
        "yoy_parent_net_income_pct": 7.28,
        "improvement_status": "改善"
      },
      "report_file": "歌尔股份_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "北方华创": {
      "code": "002371",
      "name": "北方华创",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "半导体设备",
        "国产替代"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体设备",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        },
        {
          "name": "国产替代",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "设备",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semicap",
          "node_name": "半导体设备",
          "path": [
            "半导体",
            "半导体设备"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 15.68,
        "yoy_parent_net_income_pct": 3.42,
        "improvement_status": "基本持平"
      },
      "report_file": "北方华创_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "雅克科技": {
      "code": "002409",
      "name": "雅克科技",
      "primary_industry": "半导体产业链",
      "secondary_tracks": [
        "半导体材料",
        "电子特气"
      ],
      "tags": [
        {
          "name": "半导体产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体材料",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "电子特气",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "半导体",
          "role": "核心概念",
          "weight": 0.86,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 2.99,
        "yoy_parent_net_income_pct": 2.47,
        "improvement_status": "基本持平"
      },
      "report_file": "雅克科技_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "赣锋锂业": {
      "code": "002460",
      "name": "赣锋锂业",
      "primary_industry": "资源周期",
      "secondary_tracks": [
        "锂资源",
        "新能源材料"
      ],
      "tags": [
        {
          "name": "资源周期",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        },
        {
          "name": "锂资源",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "新能源材料",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "advanced_new_energy_material",
          "node_name": "新能源材料",
          "path": [
            "有色金属与新材料",
            "新能源材料"
          ]
        },
        {
          "name": "资源",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "锂电池",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "新能源",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 19.22,
        "yoy_parent_net_income_pct": 616.34,
        "improvement_status": "改善"
      },
      "report_file": "赣锋锂业_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "沪电股份": {
      "code": "002463",
      "name": "沪电股份",
      "primary_industry": "AI算力产业链",
      "secondary_tracks": [
        "高速PCB",
        "服务器链"
      ],
      "tags": [
        {
          "name": "AI算力产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "高速PCB",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "服务器链",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        },
        {
          "name": "AI",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "PCB",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "服务器",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        },
        {
          "name": "汽车电子",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "auto_parts",
          "node_name": "汽车零部件",
          "path": [
            "新能源汽车",
            "汽车零部件"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 12.41,
        "yoy_parent_net_income_pct": 62.9,
        "improvement_status": "改善"
      },
      "report_file": "沪电股份_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "天齐锂业": {
      "code": "002466",
      "name": "天齐锂业",
      "primary_industry": "资源周期",
      "secondary_tracks": [
        "锂资源",
        "新能源材料"
      ],
      "tags": [
        {
          "name": "资源周期",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "resources",
          "node_name": "资源周期",
          "path": [
            "资源周期"
          ]
        },
        {
          "name": "锂资源",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "新能源材料",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "advanced_new_energy_material",
          "node_name": "新能源材料",
          "path": [
            "有色金属与新材料",
            "新能源材料"
          ]
        },
        {
          "name": "资源",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "resources_metal_mining",
          "node_name": "金属矿产",
          "path": [
            "资源周期",
            "金属矿产"
          ]
        },
        {
          "name": "锂电池",
          "role": "相关概念",
          "weight": 0.77,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "新能源",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 28.41,
        "yoy_parent_net_income_pct": 1699.12,
        "improvement_status": "改善"
      },
      "report_file": "天齐锂业_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "立讯精密": {
      "code": "002475",
      "name": "立讯精密",
      "primary_industry": "消费电子与终端",
      "secondary_tracks": [
        "苹果链",
        "连接器",
        "精密制造"
      ],
      "tags": [
        {
          "name": "消费电子与终端",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "consumer_electronics",
          "node_name": "消费电子",
          "path": [
            "消费电子"
          ]
        },
        {
          "name": "苹果链",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "consumer_terminal_manufacturing",
          "node_name": "终端制造 / 精密件",
          "path": [
            "消费电子",
            "终端制造 / 精密件"
          ]
        },
        {
          "name": "连接器",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "auto_parts",
          "node_name": "汽车零部件",
          "path": [
            "新能源汽车",
            "汽车零部件"
          ]
        },
        {
          "name": "精密制造",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "industrial_precision_equipment",
          "node_name": "精密制造 / 高端设备",
          "path": [
            "高端装备与工业",
            "精密制造 / 高端设备"
          ]
        },
        {
          "name": "消费电子",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "consumer_ai_terminal",
          "node_name": "AI终端 / 消费电子",
          "path": [
            "消费电子",
            "AI终端 / 消费电子"
          ]
        },
        {
          "name": "汽车电子",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "auto_parts",
          "node_name": "汽车零部件",
          "path": [
            "新能源汽车",
            "汽车零部件"
          ]
        },
        {
          "name": "AI终端",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "consumer_ai_terminal",
          "node_name": "AI终端 / 消费电子",
          "path": [
            "消费电子",
            "AI终端 / 消费电子"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 39.68,
        "yoy_parent_net_income_pct": 20.24,
        "improvement_status": "改善"
      },
      "report_file": "立讯精密_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "荣盛石化": {
      "code": "002493",
      "name": "荣盛石化",
      "primary_industry": "化工材料",
      "secondary_tracks": [
        "石化",
        "炼化一体化"
      ],
      "tags": [
        {
          "name": "化工材料",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "chemical_materials",
          "node_name": "化工材料",
          "path": [
            "化工材料"
          ]
        },
        {
          "name": "石化",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_petro_coal",
          "node_name": "石化 / 煤化工",
          "path": [
            "化工材料",
            "石化 / 煤化工"
          ]
        },
        {
          "name": "炼化一体化",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_petro_coal",
          "node_name": "石化 / 煤化工",
          "path": [
            "化工材料",
            "石化 / 煤化工"
          ]
        },
        {
          "name": "化工",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_petro_coal",
          "node_name": "石化 / 煤化工",
          "path": [
            "化工材料",
            "石化 / 煤化工"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 50.12,
        "yoy_parent_net_income_pct": 378.46,
        "improvement_status": "改善"
      },
      "report_file": "荣盛石化_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "西子洁能": {
      "code": "002534",
      "name": "西子洁能",
      "primary_industry": "新能源发电",
      "secondary_tracks": [
        "储能",
        "光热发电"
      ],
      "tags": [
        {
          "name": "新能源发电",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "renewable_operator",
          "node_name": "绿电运营",
          "path": [
            "电力与公用事业",
            "绿电运营"
          ]
        },
        {
          "name": "储能",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "光热发电",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "renewable_operator",
          "node_name": "绿电运营",
          "path": [
            "电力与公用事业",
            "绿电运营"
          ]
        },
        {
          "name": "半导体",
          "role": "相关概念",
          "weight": 0.65,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "新能源",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "renewable_operator",
          "node_name": "绿电运营",
          "path": [
            "电力与公用事业",
            "绿电运营"
          ]
        },
        {
          "name": "机器人",
          "role": "观察概念",
          "weight": 0.59,
          "evidence_level": "需复核",
          "basis": "主题标签",
          "node_id": "robotics",
          "node_name": "机器人/自动化",
          "path": [
            "机器人/自动化"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 0.72,
        "yoy_parent_net_income_pct": 12.15,
        "improvement_status": "改善"
      },
      "report_file": "西子洁能_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "比亚迪": {
      "code": "002594",
      "name": "比亚迪",
      "primary_industry": "新能源汽车产业链",
      "secondary_tracks": [
        "整车",
        "动力电池"
      ],
      "tags": [
        {
          "name": "新能源汽车产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "new_energy_vehicle",
          "node_name": "新能源汽车",
          "path": [
            "新能源汽车"
          ]
        },
        {
          "name": "整车",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "new_energy_vehicle",
          "node_name": "新能源汽车",
          "path": [
            "新能源汽车"
          ]
        },
        {
          "name": "动力电池",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "新能源车",
          "role": "相关概念",
          "weight": 0.66,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "new_energy_vehicle",
          "node_name": "新能源汽车",
          "path": [
            "新能源汽车"
          ]
        },
        {
          "name": "储能",
          "role": "观察概念",
          "weight": 0.56,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "battery_storage",
          "node_name": "动力电池/储能",
          "path": [
            "新能源汽车",
            "动力电池/储能"
          ]
        },
        {
          "name": "智能驾驶",
          "role": "相关概念",
          "weight": 0.66,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "auto_parts",
          "node_name": "汽车零部件",
          "path": [
            "新能源汽车",
            "汽车零部件"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 40.11,
        "yoy_parent_net_income_pct": -55.38,
        "improvement_status": "恶化"
      },
      "report_file": "比亚迪_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "以岭药业": {
      "code": "002603",
      "name": "以岭药业",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "中药",
        "创新中药"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "中药",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "tcm",
          "node_name": "中药/品牌中药",
          "path": [
            "医药医疗",
            "中药/品牌中药"
          ]
        },
        {
          "name": "创新中药",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "tcm",
          "node_name": "中药/品牌中药",
          "path": [
            "医药医疗",
            "中药/品牌中药"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "创新药",
          "role": "相关概念",
          "weight": 0.75,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "innovative_drug",
          "node_name": "创新药/生物药",
          "path": [
            "医药医疗",
            "创新药/生物药"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 4.09,
        "yoy_parent_net_income_pct": 25.43,
        "improvement_status": "改善"
      },
      "report_file": "以岭药业_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "卫星化学": {
      "code": "002648",
      "name": "卫星化学",
      "primary_industry": "化工材料",
      "secondary_tracks": [
        "烯烃",
        "新材料化工"
      ],
      "tags": [
        {
          "name": "化工材料",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "chemical_materials",
          "node_name": "化工材料",
          "path": [
            "化工材料"
          ]
        },
        {
          "name": "烯烃",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        },
        {
          "name": "新材料化工",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        },
        {
          "name": "化工",
          "role": "核心概念",
          "weight": 0.91,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "chemical_new_material",
          "node_name": "新材料化工",
          "path": [
            "化工材料",
            "新材料化工"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 21.17,
        "yoy_parent_net_income_pct": 34.97,
        "improvement_status": "改善"
      },
      "report_file": "卫星化学_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "凯莱英": {
      "code": "002821",
      "name": "凯莱英",
      "primary_industry": "医药医疗",
      "secondary_tracks": [
        "CXO",
        "CDMO"
      ],
      "tags": [
        {
          "name": "医药医疗",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "CXO",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "CDMO",
          "role": "二级赛道",
          "weight": 0.84,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        },
        {
          "name": "医药",
          "role": "核心概念",
          "weight": 0.83,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "healthcare",
          "node_name": "医药医疗",
          "path": [
            "医药医疗"
          ]
        },
        {
          "name": "医药外包",
          "role": "相关概念",
          "weight": 0.69,
          "evidence_level": "中",
          "basis": "业务相关",
          "node_id": "cxo",
          "node_name": "CXO/CRO/CDMO",
          "path": [
            "医药医疗",
            "CXO/CRO/CDMO"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 3.01,
        "yoy_parent_net_income_pct": -6.82,
        "improvement_status": "恶化"
      },
      "report_file": "凯莱英_深度分析报告.html",
      "cooperation_status": "无公开确认",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    },
    "麦格米特": {
      "code": "002851",
      "name": "麦格米特",
      "primary_industry": "AI算力产业链",
      "secondary_tracks": [
        "AI服务器",
        "算力",
        "AI服务器电源"
      ],
      "tags": [
        {
          "name": "AI算力产业链",
          "role": "主行业",
          "weight": 1,
          "evidence_level": "高",
          "basis": "报告主分类",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "AI服务器",
          "role": "二级赛道",
          "weight": 0.9,
          "evidence_level": "高",
          "basis": "报告二级分类",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        },
        {
          "name": "算力",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "AI服务器电源",
          "role": "二级赛道",
          "weight": 0.78,
          "evidence_level": "中",
          "basis": "报告二级分类",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        },
        {
          "name": "AI",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_compute",
          "node_name": "AI算力",
          "path": [
            "AI算力"
          ]
        },
        {
          "name": "半导体",
          "role": "相关概念",
          "weight": 0.65,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "semiconductor",
          "node_name": "半导体",
          "path": [
            "半导体"
          ]
        },
        {
          "name": "新能源",
          "role": "相关概念",
          "weight": 0.65,
          "evidence_level": "中",
          "basis": "相关标签",
          "node_id": "renewable_power",
          "node_name": "电力与公用事业",
          "path": [
            "电力与公用事业"
          ]
        },
        {
          "name": "电源",
          "role": "核心概念",
          "weight": 0.89,
          "evidence_level": "高",
          "basis": "核心赛道",
          "node_id": "ai_server",
          "node_name": "AI服务器链",
          "path": [
            "AI算力",
            "AI服务器链"
          ]
        }
      ],
      "financial_signal": {
        "latest_report_period": "2026-03-31",
        "net_profit_yi": 1.28,
        "yoy_parent_net_income_pct": 6.93,
        "improvement_status": "改善"
      },
      "report_file": "麦格米特_深度分析报告.html",
      "cooperation_status": "只记录公司公开明确的合作对象、客户、供应商或合作伙伴；没有公开确认则写无公开确认。",
      "taxonomy_mapped_ratio": 1,
      "manual_review_required": false,
      "review_reasons": []
    }
  },
  "industries": {
    "医药医疗": {
      "count": 26,
      "stocks": [
        {
          "code": "000538",
          "name": "云南白药"
        },
        {
          "code": "000661",
          "name": "长春高新"
        },
        {
          "code": "000963",
          "name": "华东医药"
        },
        {
          "code": "002223",
          "name": "鱼跃医疗"
        },
        {
          "code": "002603",
          "name": "以岭药业"
        },
        {
          "code": "002821",
          "name": "凯莱英"
        },
        {
          "code": "300015",
          "name": "爱尔眼科"
        },
        {
          "code": "300122",
          "name": "智飞生物"
        },
        {
          "code": "300347",
          "name": "泰格医药"
        },
        {
          "code": "300759",
          "name": "康龙化成"
        },
        {
          "code": "300760",
          "name": "迈瑞医疗"
        },
        {
          "code": "300832",
          "name": "新产业"
        },
        {
          "code": "300896",
          "name": "爱美客"
        },
        {
          "code": "600085",
          "name": "同仁堂"
        },
        {
          "code": "600196",
          "name": "复星医药"
        },
        {
          "code": "600276",
          "name": "恒瑞医药"
        },
        {
          "code": "600436",
          "name": "片仔癀"
        },
        {
          "code": "600763",
          "name": "通策医疗"
        },
        {
          "code": "601607",
          "name": "上海医药"
        },
        {
          "code": "603233",
          "name": "大参林"
        },
        {
          "code": "603259",
          "name": "药明康德"
        },
        {
          "code": "603392",
          "name": "万泰生物"
        },
        {
          "code": "603883",
          "name": "老百姓"
        },
        {
          "code": "603939",
          "name": "益丰药房"
        },
        {
          "code": "688114",
          "name": "华大智造"
        },
        {
          "code": "688271",
          "name": "联影医疗"
        }
      ]
    },
    "半导体产业链": {
      "count": 10,
      "stocks": [
        {
          "code": "002156",
          "name": "通富微电"
        },
        {
          "code": "002185",
          "name": "华天科技"
        },
        {
          "code": "002371",
          "name": "北方华创"
        },
        {
          "code": "002409",
          "name": "雅克科技"
        },
        {
          "code": "603005",
          "name": "晶方科技"
        },
        {
          "code": "603501",
          "name": "韦尔股份"
        },
        {
          "code": "603986",
          "name": "兆易创新"
        },
        {
          "code": "688012",
          "name": "中微公司"
        },
        {
          "code": "688072",
          "name": "拓荆科技"
        },
        {
          "code": "688126",
          "name": "沪硅产业"
        }
      ]
    },
    "AI算力产业链": {
      "count": 8,
      "stocks": [
        {
          "code": "002463",
          "name": "沪电股份"
        },
        {
          "code": "002851",
          "name": "麦格米特"
        },
        {
          "code": "300308",
          "name": "中际旭创"
        },
        {
          "code": "300502",
          "name": "新易盛"
        },
        {
          "code": "600584",
          "name": "长电科技"
        },
        {
          "code": "601138",
          "name": "工业富联"
        },
        {
          "code": "688041",
          "name": "海光信息"
        },
        {
          "code": "688256",
          "name": "寒武纪"
        }
      ]
    },
    "资源周期": {
      "count": 7,
      "stocks": [
        {
          "code": "002460",
          "name": "赣锋锂业"
        },
        {
          "code": "002466",
          "name": "天齐锂业"
        },
        {
          "code": "600938",
          "name": "中国海油"
        },
        {
          "code": "601088",
          "name": "中国神华"
        },
        {
          "code": "601857",
          "name": "中国石油"
        },
        {
          "code": "601899",
          "name": "紫金矿业"
        },
        {
          "code": "603993",
          "name": "洛阳钼业"
        }
      ]
    },
    "金融": {
      "count": 6,
      "stocks": [
        {
          "code": "300059",
          "name": "东方财富"
        },
        {
          "code": "600030",
          "name": "中信证券"
        },
        {
          "code": "600036",
          "name": "招商银行"
        },
        {
          "code": "601318",
          "name": "中国平安"
        },
        {
          "code": "601398",
          "name": "工商银行"
        },
        {
          "code": "601939",
          "name": "建设银行"
        }
      ]
    },
    "化工材料": {
      "count": 5,
      "stocks": [
        {
          "code": "000301",
          "name": "东方盛虹"
        },
        {
          "code": "002493",
          "name": "荣盛石化"
        },
        {
          "code": "002648",
          "name": "卫星化学"
        },
        {
          "code": "600309",
          "name": "万华化学"
        },
        {
          "code": "600426",
          "name": "华鲁恒升"
        }
      ]
    },
    "高端装备与工业": {
      "count": 5,
      "stocks": [
        {
          "code": "002230",
          "name": "科大讯飞"
        },
        {
          "code": "300124",
          "name": "汇川技术"
        },
        {
          "code": "600588",
          "name": "用友网络"
        },
        {
          "code": "601618",
          "name": "中国中冶"
        },
        {
          "code": "688111",
          "name": "金山办公"
        }
      ]
    },
    "消费电子与终端": {
      "count": 4,
      "stocks": [
        {
          "code": "000100",
          "name": "TCL科技"
        },
        {
          "code": "002138",
          "name": "顺络电子"
        },
        {
          "code": "002241",
          "name": "歌尔股份"
        },
        {
          "code": "002475",
          "name": "立讯精密"
        }
      ]
    },
    "国防军工与航空航天": {
      "count": 4,
      "stocks": [
        {
          "code": "000768",
          "name": "中航西飞"
        },
        {
          "code": "600760",
          "name": "中航沈飞"
        },
        {
          "code": "600893",
          "name": "航发动力"
        },
        {
          "code": "688122",
          "name": "西部超导"
        }
      ]
    },
    "消费电子": {
      "count": 3,
      "stocks": [
        {
          "code": "000333",
          "name": "美的集团"
        },
        {
          "code": "000651",
          "name": "格力电器"
        },
        {
          "code": "600690",
          "name": "海尔智家"
        }
      ]
    },
    "消费白马": {
      "count": 3,
      "stocks": [
        {
          "code": "000568",
          "name": "泸州老窖"
        },
        {
          "code": "000858",
          "name": "五粮液"
        },
        {
          "code": "600519",
          "name": "贵州茅台"
        }
      ]
    },
    "人形机器人产业链": {
      "count": 2,
      "stocks": [
        {
          "code": "002050",
          "name": "三花智控"
        },
        {
          "code": "605566",
          "name": "福莱蒽特"
        }
      ]
    },
    "新能源汽车产业链": {
      "count": 2,
      "stocks": [
        {
          "code": "002594",
          "name": "比亚迪"
        },
        {
          "code": "601689",
          "name": "拓普集团"
        }
      ]
    },
    "新能源产业链": {
      "count": 2,
      "stocks": [
        {
          "code": "300274",
          "name": "阳光电源"
        },
        {
          "code": "300750",
          "name": "宁德时代"
        }
      ]
    },
    "新能源发电": {
      "count": 1,
      "stocks": [
        {
          "code": "002534",
          "name": "西子洁能"
        }
      ]
    },
    "有色金属与新材料": {
      "count": 1,
      "stocks": [
        {
          "code": "600456",
          "name": "宝钛股份"
        }
      ]
    }
  },
  "taxonomy": {
    "nodes": [
      {
        "id": "ai_compute",
        "name": "AI算力",
        "parent": "",
        "path": [
          "AI算力"
        ],
        "stock_count": 12,
        "total_weight": 10.52,
        "raw_tags": [
          "AI",
          "AI算力产业链",
          "算力",
          "光模块",
          "CPO",
          "高速光通信",
          "数据中心",
          "AI服务器",
          "服务器",
          "电源",
          "AI算力",
          "云端硬件制造"
        ]
      },
      {
        "id": "ai_chip",
        "name": "AI芯片/国产算力芯片",
        "parent": "ai_compute",
        "path": [
          "AI算力",
          "AI芯片/国产算力芯片"
        ],
        "stock_count": 2,
        "total_weight": 1.8,
        "raw_tags": [
          "国产CPU",
          "GPU",
          "AI芯片",
          "智能计算"
        ]
      },
      {
        "id": "optical_module",
        "name": "光模块/CPO",
        "parent": "ai_compute",
        "path": [
          "AI算力",
          "光模块/CPO"
        ],
        "stock_count": 2,
        "total_weight": 1.82,
        "raw_tags": [
          "光模块",
          "CPO",
          "高速光通信"
        ]
      },
      {
        "id": "ai_server",
        "name": "AI服务器链",
        "parent": "ai_compute",
        "path": [
          "AI算力",
          "AI服务器链"
        ],
        "stock_count": 7,
        "total_weight": 5.59,
        "raw_tags": [
          "数据中心",
          "AI服务器",
          "服务器",
          "电源",
          "云端硬件制造",
          "服务器芯片",
          "服务器链",
          "AI服务器电源"
        ]
      },
      {
        "id": "semiconductor",
        "name": "半导体",
        "parent": "",
        "path": [
          "半导体"
        ],
        "stock_count": 20,
        "total_weight": 16.92,
        "raw_tags": [
          "半导体",
          "半导体产业链",
          "国产替代",
          "封装测试",
          "先进封装",
          "半导体设备",
          "设备",
          "半导体材料",
          "Chiplet",
          "芯片",
          "电子元器件",
          "CIS封装"
        ]
      },
      {
        "id": "semicap",
        "name": "半导体设备",
        "parent": "semiconductor",
        "path": [
          "半导体",
          "半导体设备"
        ],
        "stock_count": 3,
        "total_weight": 2.72,
        "raw_tags": [
          "半导体设备",
          "设备",
          "刻蚀",
          "MOCVD",
          "薄膜沉积"
        ]
      },
      {
        "id": "advanced_packaging",
        "name": "封装测试/先进封装",
        "parent": "semiconductor",
        "path": [
          "半导体",
          "封装测试/先进封装"
        ],
        "stock_count": 4,
        "total_weight": 3.49,
        "raw_tags": [
          "封装测试",
          "先进封装",
          "Chiplet",
          "CIS封装"
        ]
      },
      {
        "id": "passive_components",
        "name": "电子元器件/被动元器件",
        "parent": "semiconductor",
        "path": [
          "半导体",
          "电子元器件/被动元器件"
        ],
        "stock_count": 2,
        "total_weight": 1.74,
        "raw_tags": [
          "电子元器件",
          "电感",
          "被动元器件"
        ]
      },
      {
        "id": "new_energy_vehicle",
        "name": "新能源汽车",
        "parent": "",
        "path": [
          "新能源汽车"
        ],
        "stock_count": 12,
        "total_weight": 10.02,
        "raw_tags": [
          "储能",
          "新能源车",
          "锂电池",
          "汽车电子",
          "动力电池",
          "新能源汽车产业链",
          "智能驾驶",
          "储能系统",
          "汽车零部件",
          "连接器",
          "整车"
        ]
      },
      {
        "id": "battery_storage",
        "name": "动力电池/储能",
        "parent": "new_energy_vehicle",
        "path": [
          "新能源汽车",
          "动力电池/储能"
        ],
        "stock_count": 7,
        "total_weight": 5.65,
        "raw_tags": [
          "储能",
          "锂电池",
          "动力电池",
          "储能系统"
        ]
      },
      {
        "id": "auto_parts",
        "name": "汽车零部件",
        "parent": "new_energy_vehicle",
        "path": [
          "新能源汽车",
          "汽车零部件"
        ],
        "stock_count": 5,
        "total_weight": 3.94,
        "raw_tags": [
          "汽车电子",
          "智能驾驶",
          "汽车零部件",
          "连接器"
        ]
      },
      {
        "id": "renewable_power",
        "name": "电力与公用事业",
        "parent": "",
        "path": [
          "电力与公用事业"
        ],
        "stock_count": 11,
        "total_weight": 8.53,
        "raw_tags": [
          "新能源",
          "光伏",
          "新能源产业链",
          "光伏逆变器",
          "新能源发电",
          "光热发电"
        ]
      },
      {
        "id": "power_thermal",
        "name": "火电 / 煤电",
        "parent": "renewable_power",
        "path": [
          "电力与公用事业",
          "火电 / 煤电"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      },
      {
        "id": "power_hydro",
        "name": "水电",
        "parent": "renewable_power",
        "path": [
          "电力与公用事业",
          "水电"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      },
      {
        "id": "power_nuclear",
        "name": "核电",
        "parent": "renewable_power",
        "path": [
          "电力与公用事业",
          "核电"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      },
      {
        "id": "renewable_pv",
        "name": "光伏",
        "parent": "renewable_power",
        "path": [
          "电力与公用事业",
          "光伏"
        ],
        "stock_count": 1,
        "total_weight": 1,
        "raw_tags": [
          "新能源产业链",
          "光伏逆变器",
          "光伏",
          "新能源"
        ]
      },
      {
        "id": "renewable_wind",
        "name": "风电",
        "parent": "renewable_power",
        "path": [
          "电力与公用事业",
          "风电"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      },
      {
        "id": "renewable_storage_grid",
        "name": "储能并网",
        "parent": "renewable_power",
        "path": [
          "电力与公用事业",
          "储能并网"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      },
      {
        "id": "renewable_operator",
        "name": "绿电运营",
        "parent": "renewable_power",
        "path": [
          "电力与公用事业",
          "绿电运营"
        ],
        "stock_count": 1,
        "total_weight": 1,
        "raw_tags": [
          "新能源发电",
          "光热发电",
          "新能源"
        ]
      },
      {
        "id": "power_grid_uhv",
        "name": "电网设备 / 特高压",
        "parent": "renewable_power",
        "path": [
          "电力与公用事业",
          "电网设备 / 特高压"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      },
      {
        "id": "power_integrated_service",
        "name": "综合能源服务",
        "parent": "renewable_power",
        "path": [
          "电力与公用事业",
          "综合能源服务"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      },
      {
        "id": "consumer_electronics",
        "name": "消费电子",
        "parent": "",
        "path": [
          "消费电子"
        ],
        "stock_count": 7,
        "total_weight": 7,
        "raw_tags": [
          "消费电子",
          "消费电子与终端",
          "家电",
          "消费电子/家电",
          "智能家居",
          "AI终端",
          "面板",
          "显示",
          "LCD液晶面板",
          "面板/显示",
          "OLED",
          "Mini LED"
        ]
      },
      {
        "id": "consumer_ai_terminal",
        "name": "AI终端 / 消费电子",
        "parent": "consumer_electronics",
        "path": [
          "消费电子",
          "AI终端 / 消费电子"
        ],
        "stock_count": 3,
        "total_weight": 2.69,
        "raw_tags": [
          "消费电子",
          "AI终端",
          "手机产业链",
          "声学",
          "VRAR",
          "智能硬件"
        ]
      },
      {
        "id": "consumer_display",
        "name": "面板 / 显示",
        "parent": "consumer_electronics",
        "path": [
          "消费电子",
          "面板 / 显示"
        ],
        "stock_count": 1,
        "total_weight": 0.9,
        "raw_tags": [
          "面板",
          "显示",
          "LCD液晶面板",
          "面板/显示",
          "OLED",
          "Mini LED"
        ]
      },
      {
        "id": "consumer_smart_home",
        "name": "智能家居 / 白电",
        "parent": "consumer_electronics",
        "path": [
          "消费电子",
          "智能家居 / 白电"
        ],
        "stock_count": 3,
        "total_weight": 2.7,
        "raw_tags": [
          "家电",
          "消费电子/家电",
          "智能家居",
          "白电"
        ]
      },
      {
        "id": "consumer_terminal_manufacturing",
        "name": "终端制造 / 精密件",
        "parent": "consumer_electronics",
        "path": [
          "消费电子",
          "终端制造 / 精密件"
        ],
        "stock_count": 1,
        "total_weight": 0.9,
        "raw_tags": [
          "苹果链"
        ]
      },
      {
        "id": "communications",
        "name": "通信设备与运营商",
        "parent": "",
        "path": [
          "通信设备与运营商"
        ],
        "stock_count": 1,
        "total_weight": 0.84,
        "raw_tags": [
          "通信"
        ]
      },
      {
        "id": "comm_optical_infra",
        "name": "光通信基础设施",
        "parent": "communications",
        "path": [
          "通信设备与运营商",
          "光通信基础设施"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      },
      {
        "id": "comm_operator_idc",
        "name": "运营商 / IDC",
        "parent": "communications",
        "path": [
          "通信设备与运营商",
          "运营商 / IDC"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      },
      {
        "id": "comm_equipment",
        "name": "通信设备",
        "parent": "communications",
        "path": [
          "通信设备与运营商",
          "通信设备"
        ],
        "stock_count": 1,
        "total_weight": 0.84,
        "raw_tags": [
          "通信"
        ]
      },
      {
        "id": "robotics",
        "name": "机器人/自动化",
        "parent": "",
        "path": [
          "机器人/自动化"
        ],
        "stock_count": 5,
        "total_weight": 4.35,
        "raw_tags": [
          "机器人",
          "人形机器人产业链",
          "工业自动化",
          "工业母机",
          "机器人执行器",
          "机器人传感器",
          "力矩传感器",
          "电子皮肤",
          "减速器",
          "丝杠",
          "执行器"
        ]
      },
      {
        "id": "robot_humanoid",
        "name": "人形机器人",
        "parent": "robotics",
        "path": [
          "机器人/自动化",
          "人形机器人"
        ],
        "stock_count": 1,
        "total_weight": 0.86,
        "raw_tags": [
          "机器人"
        ]
      },
      {
        "id": "robot_actuator_formal",
        "name": "执行器",
        "parent": "robotics",
        "path": [
          "机器人/自动化",
          "执行器"
        ],
        "stock_count": 2,
        "total_weight": 1.76,
        "raw_tags": [
          "机器人执行器",
          "机器人",
          "减速器",
          "丝杠",
          "执行器"
        ]
      },
      {
        "id": "robot_reducer_screw_formal",
        "name": "减速器 / 丝杠",
        "parent": "robotics",
        "path": [
          "机器人/自动化",
          "减速器 / 丝杠"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      },
      {
        "id": "robot_sensor_formal",
        "name": "传感器 / 电子皮肤",
        "parent": "robotics",
        "path": [
          "机器人/自动化",
          "传感器 / 电子皮肤"
        ],
        "stock_count": 1,
        "total_weight": 0.91,
        "raw_tags": [
          "机器人传感器",
          "力矩传感器",
          "电子皮肤",
          "机器人"
        ]
      },
      {
        "id": "robot_industrial_auto",
        "name": "工业自动化 / 工业母机",
        "parent": "robotics",
        "path": [
          "机器人/自动化",
          "工业自动化 / 工业母机"
        ],
        "stock_count": 1,
        "total_weight": 0.9,
        "raw_tags": [
          "工业自动化",
          "工业母机"
        ]
      },
      {
        "id": "industrial_equipment",
        "name": "高端装备与工业",
        "parent": "",
        "path": [
          "高端装备与工业"
        ],
        "stock_count": 9,
        "total_weight": 7.97,
        "raw_tags": [
          "高端装备与工业",
          "AI应用",
          "高端装备",
          "企业软件",
          "办公软件",
          "新能源车电控",
          "工业软件",
          "工程",
          "矿山机械",
          "冶金工程",
          "教育软件",
          "精密制造"
        ]
      },
      {
        "id": "industrial_machinery",
        "name": "工程机械 / 矿山装备",
        "parent": "industrial_equipment",
        "path": [
          "高端装备与工业",
          "工程机械 / 矿山装备"
        ],
        "stock_count": 4,
        "total_weight": 3.09,
        "raw_tags": [
          "高端装备",
          "工程",
          "矿山机械",
          "冶金工程"
        ]
      },
      {
        "id": "industrial_software",
        "name": "工业软件 / 企业软件",
        "parent": "industrial_equipment",
        "path": [
          "高端装备与工业",
          "工业软件 / 企业软件"
        ],
        "stock_count": 3,
        "total_weight": 2.71,
        "raw_tags": [
          "AI应用",
          "企业软件",
          "办公软件",
          "工业软件",
          "教育软件"
        ]
      },
      {
        "id": "industrial_precision_equipment",
        "name": "精密制造 / 高端设备",
        "parent": "industrial_equipment",
        "path": [
          "高端装备与工业",
          "精密制造 / 高端设备"
        ],
        "stock_count": 2,
        "total_weight": 1.62,
        "raw_tags": [
          "新能源车电控",
          "精密制造"
        ]
      },
      {
        "id": "advanced_materials",
        "name": "有色金属与新材料",
        "parent": "",
        "path": [
          "有色金属与新材料"
        ],
        "stock_count": 6,
        "total_weight": 5.18,
        "raw_tags": [
          "钛",
          "新能源材料",
          "新材料",
          "有色金属与新材料",
          "稀有",
          "战略金属",
          "有色金属",
          "钛合金"
        ]
      },
      {
        "id": "advanced_metal_alloy",
        "name": "高端金属 / 合金",
        "parent": "advanced_materials",
        "path": [
          "有色金属与新材料",
          "高端金属 / 合金"
        ],
        "stock_count": 1,
        "total_weight": 0.84,
        "raw_tags": [
          "钛合金",
          "钛"
        ]
      },
      {
        "id": "advanced_electronic_material",
        "name": "电子材料",
        "parent": "advanced_materials",
        "path": [
          "有色金属与新材料",
          "电子材料"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      },
      {
        "id": "advanced_new_energy_material",
        "name": "新能源材料",
        "parent": "advanced_materials",
        "path": [
          "有色金属与新材料",
          "新能源材料"
        ],
        "stock_count": 3,
        "total_weight": 2.58,
        "raw_tags": [
          "新能源材料",
          "稀有",
          "战略金属",
          "钛"
        ]
      },
      {
        "id": "chemical_materials",
        "name": "化工材料",
        "parent": "",
        "path": [
          "化工材料"
        ],
        "stock_count": 5,
        "total_weight": 5,
        "raw_tags": [
          "化工材料",
          "化工",
          "新材料化工",
          "石化",
          "MDI",
          "聚氨酯",
          "精细化工",
          "煤化工",
          "化纤",
          "炼化一体化",
          "烯烃"
        ]
      },
      {
        "id": "chemical_new_material",
        "name": "新材料化工",
        "parent": "chemical_materials",
        "path": [
          "化工材料",
          "新材料化工"
        ],
        "stock_count": 3,
        "total_weight": 2.72,
        "raw_tags": [
          "化工",
          "新材料化工",
          "MDI",
          "聚氨酯",
          "精细化工",
          "煤化工",
          "烯烃"
        ]
      },
      {
        "id": "chemical_petro_coal",
        "name": "石化 / 煤化工",
        "parent": "chemical_materials",
        "path": [
          "化工材料",
          "石化 / 煤化工"
        ],
        "stock_count": 2,
        "total_weight": 1.82,
        "raw_tags": [
          "石化",
          "化工",
          "化纤",
          "炼化一体化"
        ]
      },
      {
        "id": "chemical_fiber_polymer",
        "name": "化纤 / 高分子",
        "parent": "chemical_materials",
        "path": [
          "化工材料",
          "化纤 / 高分子"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      },
      {
        "id": "resources",
        "name": "资源周期",
        "parent": "",
        "path": [
          "资源周期"
        ],
        "stock_count": 8,
        "total_weight": 7.61,
        "raw_tags": [
          "资源周期",
          "资源",
          "油气",
          "全球矿业",
          "锂资源",
          "周期",
          "油气开采",
          "煤炭",
          "炼化",
          "铜金矿产",
          "黄金",
          "铜"
        ]
      },
      {
        "id": "resources_energy",
        "name": "能源资源",
        "parent": "resources",
        "path": [
          "资源周期",
          "能源资源"
        ],
        "stock_count": 3,
        "total_weight": 2.7,
        "raw_tags": [
          "资源",
          "油气",
          "油气开采",
          "煤炭",
          "炼化"
        ]
      },
      {
        "id": "resources_metal_mining",
        "name": "金属矿产",
        "parent": "resources",
        "path": [
          "资源周期",
          "金属矿产"
        ],
        "stock_count": 4,
        "total_weight": 3.64,
        "raw_tags": [
          "资源",
          "全球矿业",
          "锂资源",
          "铜金矿产",
          "铜"
        ]
      },
      {
        "id": "resources_precious_metal",
        "name": "黄金 / 贵金属",
        "parent": "resources",
        "path": [
          "资源周期",
          "黄金 / 贵金属"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      },
      {
        "id": "defense_aerospace",
        "name": "国防军工与航空航天",
        "parent": "",
        "path": [
          "国防军工与航空航天"
        ],
        "stock_count": 4,
        "total_weight": 4,
        "raw_tags": [
          "国防军工与航空航天",
          "航空装备",
          "国防军工",
          "航空航天",
          "军工主机",
          "航空发动机",
          "高温合金",
          "军工",
          "大飞机"
        ]
      },
      {
        "id": "defense_aircraft",
        "name": "航空装备 / 大飞机",
        "parent": "defense_aerospace",
        "path": [
          "国防军工与航空航天",
          "航空装备 / 大飞机"
        ],
        "stock_count": 3,
        "total_weight": 2.7,
        "raw_tags": [
          "航空装备",
          "国防军工",
          "航空航天",
          "军工主机",
          "高温合金",
          "军工",
          "大飞机"
        ]
      },
      {
        "id": "defense_engine",
        "name": "航空发动机",
        "parent": "defense_aerospace",
        "path": [
          "国防军工与航空航天",
          "航空发动机"
        ],
        "stock_count": 1,
        "total_weight": 0.9,
        "raw_tags": [
          "航空发动机",
          "国防军工",
          "航空航天"
        ]
      },
      {
        "id": "defense_prime",
        "name": "军工主机",
        "parent": "defense_aerospace",
        "path": [
          "国防军工与航空航天",
          "军工主机"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      },
      {
        "id": "defense_commercial_space",
        "name": "商业航天 / 卫星互联网",
        "parent": "defense_aerospace",
        "path": [
          "国防军工与航空航天",
          "商业航天 / 卫星互联网"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      },
      {
        "id": "healthcare",
        "name": "医药医疗",
        "parent": "",
        "path": [
          "医药医疗"
        ],
        "stock_count": 26,
        "total_weight": 26,
        "raw_tags": [
          "医药医疗",
          "医药",
          "创新药",
          "医疗器械",
          "生物药",
          "医疗服务",
          "CXO",
          "中药",
          "医药商业",
          "CRO",
          "CDMO",
          "品牌中药"
        ]
      },
      {
        "id": "innovative_drug",
        "name": "创新药/生物药",
        "parent": "healthcare",
        "path": [
          "医药医疗",
          "创新药/生物药"
        ],
        "stock_count": 7,
        "total_weight": 6.15,
        "raw_tags": [
          "创新药",
          "生物药",
          "疫苗",
          "生物制药",
          "化学制药"
        ]
      },
      {
        "id": "medical_device",
        "name": "医疗器械/IVD",
        "parent": "healthcare",
        "path": [
          "医药医疗",
          "医疗器械/IVD"
        ],
        "stock_count": 7,
        "total_weight": 6.01,
        "raw_tags": [
          "医疗器械",
          "IVD",
          "体外诊断",
          "医疗设备",
          "高端设备",
          "生命科学仪器",
          "医学影像"
        ]
      },
      {
        "id": "cxo",
        "name": "CXO/CRO/CDMO",
        "parent": "healthcare",
        "path": [
          "医药医疗",
          "CXO/CRO/CDMO"
        ],
        "stock_count": 4,
        "total_weight": 3.6,
        "raw_tags": [
          "CXO",
          "CRO",
          "CDMO",
          "临床CRO",
          "医药外包"
        ]
      },
      {
        "id": "tcm",
        "name": "中药/品牌中药",
        "parent": "healthcare",
        "path": [
          "医药医疗",
          "中药/品牌中药"
        ],
        "stock_count": 4,
        "total_weight": 3.6,
        "raw_tags": [
          "中药",
          "品牌中药",
          "创新中药"
        ]
      },
      {
        "id": "medical_service",
        "name": "医疗服务",
        "parent": "healthcare",
        "path": [
          "医药医疗",
          "医疗服务"
        ],
        "stock_count": 4,
        "total_weight": 3.48,
        "raw_tags": [
          "医疗服务",
          "医美",
          "眼科",
          "口腔"
        ]
      },
      {
        "id": "pharma_distribution",
        "name": "医药商业/药房",
        "parent": "healthcare",
        "path": [
          "医药医疗",
          "医药商业/药房"
        ],
        "stock_count": 4,
        "total_weight": 3.6,
        "raw_tags": [
          "医药商业",
          "药房",
          "医药流通"
        ]
      },
      {
        "id": "finance",
        "name": "金融",
        "parent": "",
        "path": [
          "金融"
        ],
        "stock_count": 10,
        "total_weight": 9.17,
        "raw_tags": [
          "高股息",
          "金融",
          "财富管理",
          "银行",
          "证券",
          "金融科技",
          "互联网券商",
          "股份制银行",
          "保险",
          "综合金融"
        ]
      },
      {
        "id": "finance_bank",
        "name": "银行",
        "parent": "finance",
        "path": [
          "金融",
          "银行"
        ],
        "stock_count": 1,
        "total_weight": 0.9,
        "raw_tags": [
          "股份制银行",
          "财富管理",
          "银行",
          "高股息"
        ]
      },
      {
        "id": "finance_broker_wealth",
        "name": "证券 / 财富管理",
        "parent": "finance",
        "path": [
          "金融",
          "证券 / 财富管理"
        ],
        "stock_count": 2,
        "total_weight": 1.81,
        "raw_tags": [
          "财富管理",
          "互联网券商",
          "金融科技",
          "证券"
        ]
      },
      {
        "id": "finance_insurance_fintech",
        "name": "保险 / 综合金融",
        "parent": "finance",
        "path": [
          "金融",
          "保险 / 综合金融"
        ],
        "stock_count": 1,
        "total_weight": 0.9,
        "raw_tags": [
          "保险",
          "综合金融",
          "金融科技"
        ]
      },
      {
        "id": "finance_high_dividend",
        "name": "高股息金融",
        "parent": "finance",
        "path": [
          "金融",
          "高股息金融"
        ],
        "stock_count": 4,
        "total_weight": 3.53,
        "raw_tags": [
          "高股息",
          "银行"
        ]
      },
      {
        "id": "consumer_bluechip",
        "name": "消费白马",
        "parent": "",
        "path": [
          "消费白马"
        ],
        "stock_count": 3,
        "total_weight": 3,
        "raw_tags": [
          "消费白马",
          "白酒",
          "高端消费",
          "消费"
        ]
      },
      {
        "id": "consumer_liquor_premium",
        "name": "白酒 / 高端消费",
        "parent": "consumer_bluechip",
        "path": [
          "消费白马",
          "白酒 / 高端消费"
        ],
        "stock_count": 3,
        "total_weight": 2.71,
        "raw_tags": [
          "白酒",
          "高端消费",
          "消费"
        ]
      },
      {
        "id": "consumer_mass",
        "name": "大众消费",
        "parent": "consumer_bluechip",
        "path": [
          "消费白马",
          "大众消费"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      },
      {
        "id": "consumer_dividend",
        "name": "高股息消费",
        "parent": "consumer_bluechip",
        "path": [
          "消费白马",
          "高股息消费"
        ],
        "stock_count": 0,
        "total_weight": 0,
        "raw_tags": []
      }
    ],
    "root_count": 15
  },
  "concepts": [
    {
      "stock_count": 12,
      "total_weight": 10.52,
      "high_confidence_count": 8,
      "watch_count": 2,
      "raw_tags": [
        "AI",
        "AI算力产业链",
        "算力",
        "光模块",
        "CPO",
        "高速光通信",
        "数据中心",
        "AI服务器",
        "服务器",
        "电源",
        "AI算力",
        "云端硬件制造"
      ],
      "stocks": [
        {
          "code": "300308",
          "name": "中际旭创",
          "weight": 1,
          "role": "主行业",
          "tag": "AI算力产业链",
          "evidence_level": "高"
        },
        {
          "code": "300502",
          "name": "新易盛",
          "weight": 1,
          "role": "主行业",
          "tag": "AI算力产业链",
          "evidence_level": "高"
        },
        {
          "code": "600584",
          "name": "长电科技",
          "weight": 1,
          "role": "主行业",
          "tag": "AI算力产业链",
          "evidence_level": "高"
        },
        {
          "code": "601138",
          "name": "工业富联",
          "weight": 1,
          "role": "主行业",
          "tag": "AI算力产业链",
          "evidence_level": "高"
        },
        {
          "code": "688041",
          "name": "海光信息",
          "weight": 1,
          "role": "主行业",
          "tag": "AI算力产业链",
          "evidence_level": "高"
        },
        {
          "code": "688256",
          "name": "寒武纪",
          "weight": 1,
          "role": "主行业",
          "tag": "AI算力产业链",
          "evidence_level": "高"
        },
        {
          "code": "002463",
          "name": "沪电股份",
          "weight": 1,
          "role": "主行业",
          "tag": "AI算力产业链",
          "evidence_level": "高"
        },
        {
          "code": "002851",
          "name": "麦格米特",
          "weight": 1,
          "role": "主行业",
          "tag": "AI算力产业链",
          "evidence_level": "高"
        },
        {
          "code": "002230",
          "name": "科大讯飞",
          "weight": 0.75,
          "role": "相关概念",
          "tag": "人工智能",
          "evidence_level": "中"
        },
        {
          "code": "605566",
          "name": "福莱蒽特",
          "weight": 0.61,
          "role": "相关概念",
          "tag": "AI",
          "evidence_level": "需复核"
        },
        {
          "code": "000100",
          "name": "TCL科技",
          "weight": 0.61,
          "role": "相关概念",
          "tag": "AI",
          "evidence_level": "需复核"
        },
        {
          "code": "002138",
          "name": "顺络电子",
          "weight": 0.55,
          "role": "观察概念",
          "tag": "电源",
          "evidence_level": "中"
        }
      ],
      "node_id": "ai_compute",
      "name": "AI算力",
      "path": [
        "AI算力"
      ],
      "avg_weight": 0.88
    },
    {
      "stock_count": 2,
      "total_weight": 1.8,
      "high_confidence_count": 2,
      "watch_count": 0,
      "raw_tags": [
        "国产CPU",
        "GPU",
        "AI芯片",
        "智能计算"
      ],
      "stocks": [
        {
          "code": "688041",
          "name": "海光信息",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "国产CPU",
          "evidence_level": "高"
        },
        {
          "code": "688256",
          "name": "寒武纪",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "AI芯片",
          "evidence_level": "高"
        }
      ],
      "node_id": "ai_chip",
      "name": "AI芯片/国产算力芯片",
      "path": [
        "AI算力",
        "AI芯片/国产算力芯片"
      ],
      "avg_weight": 0.9
    },
    {
      "stock_count": 2,
      "total_weight": 1.82,
      "high_confidence_count": 2,
      "watch_count": 0,
      "raw_tags": [
        "光模块",
        "CPO",
        "高速光通信"
      ],
      "stocks": [
        {
          "code": "300308",
          "name": "中际旭创",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "光模块",
          "evidence_level": "高"
        },
        {
          "code": "300502",
          "name": "新易盛",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "光模块",
          "evidence_level": "高"
        }
      ],
      "node_id": "optical_module",
      "name": "光模块/CPO",
      "path": [
        "AI算力",
        "光模块/CPO"
      ],
      "avg_weight": 0.91
    },
    {
      "stock_count": 7,
      "total_weight": 5.59,
      "high_confidence_count": 3,
      "watch_count": 0,
      "raw_tags": [
        "数据中心",
        "AI服务器",
        "服务器",
        "电源",
        "云端硬件制造",
        "服务器芯片",
        "服务器链",
        "AI服务器电源"
      ],
      "stocks": [
        {
          "code": "601138",
          "name": "工业富联",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "服务器",
          "evidence_level": "高"
        },
        {
          "code": "002463",
          "name": "沪电股份",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "服务器",
          "evidence_level": "高"
        },
        {
          "code": "002851",
          "name": "麦格米特",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "AI服务器",
          "evidence_level": "高"
        },
        {
          "code": "688041",
          "name": "海光信息",
          "weight": 0.78,
          "role": "二级赛道",
          "tag": "服务器芯片",
          "evidence_level": "中"
        },
        {
          "code": "300308",
          "name": "中际旭创",
          "weight": 0.77,
          "role": "相关概念",
          "tag": "数据中心",
          "evidence_level": "中"
        },
        {
          "code": "300502",
          "name": "新易盛",
          "weight": 0.77,
          "role": "相关概念",
          "tag": "数据中心",
          "evidence_level": "中"
        },
        {
          "code": "002138",
          "name": "顺络电子",
          "weight": 0.55,
          "role": "观察概念",
          "tag": "电源",
          "evidence_level": "中"
        }
      ],
      "node_id": "ai_server",
      "name": "AI服务器链",
      "path": [
        "AI算力",
        "AI服务器链"
      ],
      "avg_weight": 0.8
    },
    {
      "stock_count": 20,
      "total_weight": 16.92,
      "high_confidence_count": 11,
      "watch_count": 0,
      "raw_tags": [
        "半导体",
        "半导体产业链",
        "国产替代",
        "封装测试",
        "先进封装",
        "半导体设备",
        "设备",
        "半导体材料",
        "Chiplet",
        "芯片",
        "电子元器件",
        "CIS封装"
      ],
      "stocks": [
        {
          "code": "603005",
          "name": "晶方科技",
          "weight": 1,
          "role": "主行业",
          "tag": "半导体产业链",
          "evidence_level": "高"
        },
        {
          "code": "603501",
          "name": "韦尔股份",
          "weight": 1,
          "role": "主行业",
          "tag": "半导体产业链",
          "evidence_level": "高"
        },
        {
          "code": "603986",
          "name": "兆易创新",
          "weight": 1,
          "role": "主行业",
          "tag": "半导体产业链",
          "evidence_level": "高"
        },
        {
          "code": "688012",
          "name": "中微公司",
          "weight": 1,
          "role": "主行业",
          "tag": "半导体产业链",
          "evidence_level": "高"
        },
        {
          "code": "688072",
          "name": "拓荆科技",
          "weight": 1,
          "role": "主行业",
          "tag": "半导体产业链",
          "evidence_level": "高"
        },
        {
          "code": "688126",
          "name": "沪硅产业",
          "weight": 1,
          "role": "主行业",
          "tag": "半导体产业链",
          "evidence_level": "高"
        },
        {
          "code": "002156",
          "name": "通富微电",
          "weight": 1,
          "role": "主行业",
          "tag": "半导体产业链",
          "evidence_level": "高"
        },
        {
          "code": "002185",
          "name": "华天科技",
          "weight": 1,
          "role": "主行业",
          "tag": "半导体产业链",
          "evidence_level": "高"
        },
        {
          "code": "002371",
          "name": "北方华创",
          "weight": 1,
          "role": "主行业",
          "tag": "半导体产业链",
          "evidence_level": "高"
        },
        {
          "code": "002409",
          "name": "雅克科技",
          "weight": 1,
          "role": "主行业",
          "tag": "半导体产业链",
          "evidence_level": "高"
        },
        {
          "code": "600584",
          "name": "长电科技",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "电子元器件",
          "evidence_level": "高"
        },
        {
          "code": "002138",
          "name": "顺络电子",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "电感",
          "evidence_level": "中"
        },
        {
          "code": "000100",
          "name": "TCL科技",
          "weight": 0.77,
          "role": "相关概念",
          "tag": "半导体材料",
          "evidence_level": "中"
        },
        {
          "code": "688041",
          "name": "海光信息",
          "weight": 0.67,
          "role": "相关概念",
          "tag": "半导体",
          "evidence_level": "中"
        },
        {
          "code": "688256",
          "name": "寒武纪",
          "weight": 0.67,
          "role": "相关概念",
          "tag": "半导体",
          "evidence_level": "中"
        },
        {
          "code": "002534",
          "name": "西子洁能",
          "weight": 0.65,
          "role": "相关概念",
          "tag": "半导体",
          "evidence_level": "中"
        },
        {
          "code": "002851",
          "name": "麦格米特",
          "weight": 0.65,
          "role": "相关概念",
          "tag": "半导体",
          "evidence_level": "中"
        },
        {
          "code": "601618",
          "name": "中国中冶",
          "weight": 0.62,
          "role": "相关概念",
          "tag": "半导体",
          "evidence_level": "中"
        },
        {
          "code": "600456",
          "name": "宝钛股份",
          "weight": 0.59,
          "role": "观察概念",
          "tag": "半导体",
          "evidence_level": "中"
        },
        {
          "code": "688122",
          "name": "西部超导",
          "weight": 0.56,
          "role": "观察概念",
          "tag": "半导体",
          "evidence_level": "中"
        }
      ],
      "node_id": "semiconductor",
      "name": "半导体",
      "path": [
        "半导体"
      ],
      "avg_weight": 0.85
    },
    {
      "stock_count": 3,
      "total_weight": 2.72,
      "high_confidence_count": 3,
      "watch_count": 0,
      "raw_tags": [
        "半导体设备",
        "设备",
        "刻蚀",
        "MOCVD",
        "薄膜沉积"
      ],
      "stocks": [
        {
          "code": "688012",
          "name": "中微公司",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "设备",
          "evidence_level": "高"
        },
        {
          "code": "688072",
          "name": "拓荆科技",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "设备",
          "evidence_level": "高"
        },
        {
          "code": "002371",
          "name": "北方华创",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "半导体设备",
          "evidence_level": "高"
        }
      ],
      "node_id": "semicap",
      "name": "半导体设备",
      "path": [
        "半导体",
        "半导体设备"
      ],
      "avg_weight": 0.91
    },
    {
      "stock_count": 4,
      "total_weight": 3.49,
      "high_confidence_count": 3,
      "watch_count": 0,
      "raw_tags": [
        "封装测试",
        "先进封装",
        "Chiplet",
        "CIS封装"
      ],
      "stocks": [
        {
          "code": "002156",
          "name": "通富微电",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "封装测试",
          "evidence_level": "高"
        },
        {
          "code": "002185",
          "name": "华天科技",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "封装测试",
          "evidence_level": "高"
        },
        {
          "code": "603005",
          "name": "晶方科技",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "封装测试",
          "evidence_level": "高"
        },
        {
          "code": "600584",
          "name": "长电科技",
          "weight": 0.77,
          "role": "相关概念",
          "tag": "封装测试",
          "evidence_level": "中"
        }
      ],
      "node_id": "advanced_packaging",
      "name": "封装测试/先进封装",
      "path": [
        "半导体",
        "封装测试/先进封装"
      ],
      "avg_weight": 0.87
    },
    {
      "stock_count": 2,
      "total_weight": 1.74,
      "high_confidence_count": 1,
      "watch_count": 0,
      "raw_tags": [
        "电子元器件",
        "电感",
        "被动元器件"
      ],
      "stocks": [
        {
          "code": "600584",
          "name": "长电科技",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "电子元器件",
          "evidence_level": "高"
        },
        {
          "code": "002138",
          "name": "顺络电子",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "电感",
          "evidence_level": "中"
        }
      ],
      "node_id": "passive_components",
      "name": "电子元器件/被动元器件",
      "path": [
        "半导体",
        "电子元器件/被动元器件"
      ],
      "avg_weight": 0.87
    },
    {
      "stock_count": 12,
      "total_weight": 10.02,
      "high_confidence_count": 5,
      "watch_count": 0,
      "raw_tags": [
        "储能",
        "新能源车",
        "锂电池",
        "汽车电子",
        "动力电池",
        "新能源汽车产业链",
        "智能驾驶",
        "储能系统",
        "汽车零部件",
        "连接器",
        "整车"
      ],
      "stocks": [
        {
          "code": "601689",
          "name": "拓普集团",
          "weight": 1,
          "role": "主行业",
          "tag": "新能源汽车产业链",
          "evidence_level": "高"
        },
        {
          "code": "002594",
          "name": "比亚迪",
          "weight": 1,
          "role": "主行业",
          "tag": "新能源汽车产业链",
          "evidence_level": "高"
        },
        {
          "code": "300750",
          "name": "宁德时代",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "储能",
          "evidence_level": "高"
        },
        {
          "code": "002534",
          "name": "西子洁能",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "储能",
          "evidence_level": "高"
        },
        {
          "code": "300274",
          "name": "阳光电源",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "储能系统",
          "evidence_level": "中"
        },
        {
          "code": "002475",
          "name": "立讯精密",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "连接器",
          "evidence_level": "中"
        },
        {
          "code": "300124",
          "name": "汇川技术",
          "weight": 0.83,
          "role": "核心概念",
          "tag": "新能源车",
          "evidence_level": "高"
        },
        {
          "code": "600584",
          "name": "长电科技",
          "weight": 0.77,
          "role": "相关概念",
          "tag": "汽车电子",
          "evidence_level": "中"
        },
        {
          "code": "002460",
          "name": "赣锋锂业",
          "weight": 0.77,
          "role": "相关概念",
          "tag": "锂电池",
          "evidence_level": "中"
        },
        {
          "code": "002463",
          "name": "沪电股份",
          "weight": 0.77,
          "role": "相关概念",
          "tag": "汽车电子",
          "evidence_level": "中"
        },
        {
          "code": "002466",
          "name": "天齐锂业",
          "weight": 0.77,
          "role": "相关概念",
          "tag": "锂电池",
          "evidence_level": "中"
        },
        {
          "code": "002050",
          "name": "三花智控",
          "weight": 0.62,
          "role": "相关概念",
          "tag": "储能",
          "evidence_level": "中"
        }
      ],
      "node_id": "new_energy_vehicle",
      "name": "新能源汽车",
      "path": [
        "新能源汽车"
      ],
      "avg_weight": 0.83
    },
    {
      "stock_count": 7,
      "total_weight": 5.65,
      "high_confidence_count": 2,
      "watch_count": 0,
      "raw_tags": [
        "储能",
        "锂电池",
        "动力电池",
        "储能系统"
      ],
      "stocks": [
        {
          "code": "300750",
          "name": "宁德时代",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "储能",
          "evidence_level": "高"
        },
        {
          "code": "002534",
          "name": "西子洁能",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "储能",
          "evidence_level": "高"
        },
        {
          "code": "300274",
          "name": "阳光电源",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "储能系统",
          "evidence_level": "中"
        },
        {
          "code": "002594",
          "name": "比亚迪",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "动力电池",
          "evidence_level": "中"
        },
        {
          "code": "002460",
          "name": "赣锋锂业",
          "weight": 0.77,
          "role": "相关概念",
          "tag": "锂电池",
          "evidence_level": "中"
        },
        {
          "code": "002466",
          "name": "天齐锂业",
          "weight": 0.77,
          "role": "相关概念",
          "tag": "锂电池",
          "evidence_level": "中"
        },
        {
          "code": "002050",
          "name": "三花智控",
          "weight": 0.62,
          "role": "相关概念",
          "tag": "储能",
          "evidence_level": "中"
        }
      ],
      "node_id": "battery_storage",
      "name": "动力电池/储能",
      "path": [
        "新能源汽车",
        "动力电池/储能"
      ],
      "avg_weight": 0.81
    },
    {
      "stock_count": 5,
      "total_weight": 3.94,
      "high_confidence_count": 1,
      "watch_count": 0,
      "raw_tags": [
        "汽车电子",
        "智能驾驶",
        "汽车零部件",
        "连接器"
      ],
      "stocks": [
        {
          "code": "601689",
          "name": "拓普集团",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "汽车零部件",
          "evidence_level": "高"
        },
        {
          "code": "002475",
          "name": "立讯精密",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "连接器",
          "evidence_level": "中"
        },
        {
          "code": "600584",
          "name": "长电科技",
          "weight": 0.77,
          "role": "相关概念",
          "tag": "汽车电子",
          "evidence_level": "中"
        },
        {
          "code": "002463",
          "name": "沪电股份",
          "weight": 0.77,
          "role": "相关概念",
          "tag": "汽车电子",
          "evidence_level": "中"
        },
        {
          "code": "002594",
          "name": "比亚迪",
          "weight": 0.66,
          "role": "相关概念",
          "tag": "智能驾驶",
          "evidence_level": "中"
        }
      ],
      "node_id": "auto_parts",
      "name": "汽车零部件",
      "path": [
        "新能源汽车",
        "汽车零部件"
      ],
      "avg_weight": 0.79
    },
    {
      "stock_count": 11,
      "total_weight": 8.53,
      "high_confidence_count": 5,
      "watch_count": 0,
      "raw_tags": [
        "新能源",
        "光伏",
        "新能源产业链",
        "光伏逆变器",
        "新能源发电",
        "光热发电"
      ],
      "stocks": [
        {
          "code": "300274",
          "name": "阳光电源",
          "weight": 1,
          "role": "主行业",
          "tag": "新能源产业链",
          "evidence_level": "高"
        },
        {
          "code": "300750",
          "name": "宁德时代",
          "weight": 1,
          "role": "主行业",
          "tag": "新能源产业链",
          "evidence_level": "高"
        },
        {
          "code": "002534",
          "name": "西子洁能",
          "weight": 1,
          "role": "主行业",
          "tag": "新能源发电",
          "evidence_level": "高"
        },
        {
          "code": "002460",
          "name": "赣锋锂业",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "新能源",
          "evidence_level": "高"
        },
        {
          "code": "002466",
          "name": "天齐锂业",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "新能源",
          "evidence_level": "高"
        },
        {
          "code": "000100",
          "name": "TCL科技",
          "weight": 0.67,
          "role": "相关概念",
          "tag": "光伏",
          "evidence_level": "中"
        },
        {
          "code": "002851",
          "name": "麦格米特",
          "weight": 0.65,
          "role": "相关概念",
          "tag": "新能源",
          "evidence_level": "中"
        },
        {
          "code": "601618",
          "name": "中国中冶",
          "weight": 0.62,
          "role": "相关概念",
          "tag": "光伏",
          "evidence_level": "中"
        },
        {
          "code": "002050",
          "name": "三花智控",
          "weight": 0.62,
          "role": "相关概念",
          "tag": "新能源",
          "evidence_level": "中"
        },
        {
          "code": "600456",
          "name": "宝钛股份",
          "weight": 0.59,
          "role": "观察概念",
          "tag": "光伏",
          "evidence_level": "中"
        },
        {
          "code": "688122",
          "name": "西部超导",
          "weight": 0.56,
          "role": "观察概念",
          "tag": "光伏",
          "evidence_level": "中"
        }
      ],
      "node_id": "renewable_power",
      "name": "电力与公用事业",
      "path": [
        "电力与公用事业"
      ],
      "avg_weight": 0.78
    },
    {
      "stock_count": 1,
      "total_weight": 1,
      "high_confidence_count": 1,
      "watch_count": 0,
      "raw_tags": [
        "新能源产业链",
        "光伏逆变器",
        "光伏",
        "新能源"
      ],
      "stocks": [
        {
          "code": "300274",
          "name": "阳光电源",
          "weight": 1,
          "role": "主行业",
          "tag": "新能源产业链",
          "evidence_level": "高"
        }
      ],
      "node_id": "renewable_pv",
      "name": "光伏",
      "path": [
        "电力与公用事业",
        "光伏"
      ],
      "avg_weight": 1
    },
    {
      "stock_count": 1,
      "total_weight": 1,
      "high_confidence_count": 1,
      "watch_count": 0,
      "raw_tags": [
        "新能源发电",
        "光热发电",
        "新能源"
      ],
      "stocks": [
        {
          "code": "002534",
          "name": "西子洁能",
          "weight": 1,
          "role": "主行业",
          "tag": "新能源发电",
          "evidence_level": "高"
        }
      ],
      "node_id": "renewable_operator",
      "name": "绿电运营",
      "path": [
        "电力与公用事业",
        "绿电运营"
      ],
      "avg_weight": 1
    },
    {
      "stock_count": 7,
      "total_weight": 7,
      "high_confidence_count": 7,
      "watch_count": 0,
      "raw_tags": [
        "消费电子",
        "消费电子与终端",
        "家电",
        "消费电子/家电",
        "智能家居",
        "AI终端",
        "面板",
        "显示",
        "LCD液晶面板",
        "面板/显示",
        "OLED",
        "Mini LED"
      ],
      "stocks": [
        {
          "code": "600690",
          "name": "海尔智家",
          "weight": 1,
          "role": "主行业",
          "tag": "消费电子",
          "evidence_level": "高"
        },
        {
          "code": "000100",
          "name": "TCL科技",
          "weight": 1,
          "role": "主行业",
          "tag": "消费电子与终端",
          "evidence_level": "高"
        },
        {
          "code": "000333",
          "name": "美的集团",
          "weight": 1,
          "role": "主行业",
          "tag": "消费电子",
          "evidence_level": "高"
        },
        {
          "code": "000651",
          "name": "格力电器",
          "weight": 1,
          "role": "主行业",
          "tag": "消费电子",
          "evidence_level": "高"
        },
        {
          "code": "002138",
          "name": "顺络电子",
          "weight": 1,
          "role": "主行业",
          "tag": "消费电子与终端",
          "evidence_level": "高"
        },
        {
          "code": "002241",
          "name": "歌尔股份",
          "weight": 1,
          "role": "主行业",
          "tag": "消费电子与终端",
          "evidence_level": "高"
        },
        {
          "code": "002475",
          "name": "立讯精密",
          "weight": 1,
          "role": "主行业",
          "tag": "消费电子与终端",
          "evidence_level": "高"
        }
      ],
      "node_id": "consumer_electronics",
      "name": "消费电子",
      "path": [
        "消费电子"
      ],
      "avg_weight": 1
    },
    {
      "stock_count": 3,
      "total_weight": 2.69,
      "high_confidence_count": 3,
      "watch_count": 0,
      "raw_tags": [
        "消费电子",
        "AI终端",
        "手机产业链",
        "声学",
        "VRAR",
        "智能硬件"
      ],
      "stocks": [
        {
          "code": "002138",
          "name": "顺络电子",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "手机产业链",
          "evidence_level": "高"
        },
        {
          "code": "002241",
          "name": "歌尔股份",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "声学",
          "evidence_level": "高"
        },
        {
          "code": "002475",
          "name": "立讯精密",
          "weight": 0.89,
          "role": "核心概念",
          "tag": "消费电子",
          "evidence_level": "高"
        }
      ],
      "node_id": "consumer_ai_terminal",
      "name": "AI终端 / 消费电子",
      "path": [
        "消费电子",
        "AI终端 / 消费电子"
      ],
      "avg_weight": 0.9
    },
    {
      "stock_count": 1,
      "total_weight": 0.9,
      "high_confidence_count": 1,
      "watch_count": 0,
      "raw_tags": [
        "面板",
        "显示",
        "LCD液晶面板",
        "面板/显示",
        "OLED",
        "Mini LED"
      ],
      "stocks": [
        {
          "code": "000100",
          "name": "TCL科技",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "面板",
          "evidence_level": "高"
        }
      ],
      "node_id": "consumer_display",
      "name": "面板 / 显示",
      "path": [
        "消费电子",
        "面板 / 显示"
      ],
      "avg_weight": 0.9
    },
    {
      "stock_count": 3,
      "total_weight": 2.7,
      "high_confidence_count": 3,
      "watch_count": 0,
      "raw_tags": [
        "家电",
        "消费电子/家电",
        "智能家居",
        "白电"
      ],
      "stocks": [
        {
          "code": "600690",
          "name": "海尔智家",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "家电",
          "evidence_level": "高"
        },
        {
          "code": "000333",
          "name": "美的集团",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "家电",
          "evidence_level": "高"
        },
        {
          "code": "000651",
          "name": "格力电器",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "家电",
          "evidence_level": "高"
        }
      ],
      "node_id": "consumer_smart_home",
      "name": "智能家居 / 白电",
      "path": [
        "消费电子",
        "智能家居 / 白电"
      ],
      "avg_weight": 0.9
    },
    {
      "stock_count": 1,
      "total_weight": 0.9,
      "high_confidence_count": 1,
      "watch_count": 0,
      "raw_tags": [
        "苹果链"
      ],
      "stocks": [
        {
          "code": "002475",
          "name": "立讯精密",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "苹果链",
          "evidence_level": "高"
        }
      ],
      "node_id": "consumer_terminal_manufacturing",
      "name": "终端制造 / 精密件",
      "path": [
        "消费电子",
        "终端制造 / 精密件"
      ],
      "avg_weight": 0.9
    },
    {
      "stock_count": 1,
      "total_weight": 0.84,
      "high_confidence_count": 0,
      "watch_count": 0,
      "raw_tags": [
        "通信"
      ],
      "stocks": [
        {
          "code": "600584",
          "name": "长电科技",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "通信",
          "evidence_level": "中"
        }
      ],
      "node_id": "communications",
      "name": "通信设备与运营商",
      "path": [
        "通信设备与运营商"
      ],
      "avg_weight": 0.84
    },
    {
      "stock_count": 1,
      "total_weight": 0.84,
      "high_confidence_count": 0,
      "watch_count": 0,
      "raw_tags": [
        "通信"
      ],
      "stocks": [
        {
          "code": "600584",
          "name": "长电科技",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "通信",
          "evidence_level": "中"
        }
      ],
      "node_id": "comm_equipment",
      "name": "通信设备",
      "path": [
        "通信设备与运营商",
        "通信设备"
      ],
      "avg_weight": 0.84
    },
    {
      "stock_count": 5,
      "total_weight": 4.35,
      "high_confidence_count": 4,
      "watch_count": 1,
      "raw_tags": [
        "机器人",
        "人形机器人产业链",
        "工业自动化",
        "工业母机",
        "机器人执行器",
        "机器人传感器",
        "力矩传感器",
        "电子皮肤",
        "减速器",
        "丝杠",
        "执行器"
      ],
      "stocks": [
        {
          "code": "605566",
          "name": "福莱蒽特",
          "weight": 1,
          "role": "主行业",
          "tag": "人形机器人产业链",
          "evidence_level": "高"
        },
        {
          "code": "002050",
          "name": "三花智控",
          "weight": 1,
          "role": "主行业",
          "tag": "人形机器人产业链",
          "evidence_level": "高"
        },
        {
          "code": "300124",
          "name": "汇川技术",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "工业自动化",
          "evidence_level": "高"
        },
        {
          "code": "601689",
          "name": "拓普集团",
          "weight": 0.86,
          "role": "核心概念",
          "tag": "机器人",
          "evidence_level": "高"
        },
        {
          "code": "002534",
          "name": "西子洁能",
          "weight": 0.59,
          "role": "观察概念",
          "tag": "机器人",
          "evidence_level": "需复核"
        }
      ],
      "node_id": "robotics",
      "name": "机器人/自动化",
      "path": [
        "机器人/自动化"
      ],
      "avg_weight": 0.87
    },
    {
      "stock_count": 1,
      "total_weight": 0.86,
      "high_confidence_count": 1,
      "watch_count": 0,
      "raw_tags": [
        "机器人"
      ],
      "stocks": [
        {
          "code": "002050",
          "name": "三花智控",
          "weight": 0.86,
          "role": "核心概念",
          "tag": "机器人",
          "evidence_level": "高"
        }
      ],
      "node_id": "robot_humanoid",
      "name": "人形机器人",
      "path": [
        "机器人/自动化",
        "人形机器人"
      ],
      "avg_weight": 0.86
    },
    {
      "stock_count": 2,
      "total_weight": 1.76,
      "high_confidence_count": 2,
      "watch_count": 0,
      "raw_tags": [
        "机器人执行器",
        "机器人",
        "减速器",
        "丝杠",
        "执行器"
      ],
      "stocks": [
        {
          "code": "002050",
          "name": "三花智控",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "减速器",
          "evidence_level": "高"
        },
        {
          "code": "601689",
          "name": "拓普集团",
          "weight": 0.86,
          "role": "核心概念",
          "tag": "机器人",
          "evidence_level": "高"
        }
      ],
      "node_id": "robot_actuator_formal",
      "name": "执行器",
      "path": [
        "机器人/自动化",
        "执行器"
      ],
      "avg_weight": 0.88
    },
    {
      "stock_count": 1,
      "total_weight": 0.91,
      "high_confidence_count": 1,
      "watch_count": 0,
      "raw_tags": [
        "机器人传感器",
        "力矩传感器",
        "电子皮肤",
        "机器人"
      ],
      "stocks": [
        {
          "code": "605566",
          "name": "福莱蒽特",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "机器人",
          "evidence_level": "高"
        }
      ],
      "node_id": "robot_sensor_formal",
      "name": "传感器 / 电子皮肤",
      "path": [
        "机器人/自动化",
        "传感器 / 电子皮肤"
      ],
      "avg_weight": 0.91
    },
    {
      "stock_count": 1,
      "total_weight": 0.9,
      "high_confidence_count": 1,
      "watch_count": 0,
      "raw_tags": [
        "工业自动化",
        "工业母机"
      ],
      "stocks": [
        {
          "code": "300124",
          "name": "汇川技术",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "工业自动化",
          "evidence_level": "高"
        }
      ],
      "node_id": "robot_industrial_auto",
      "name": "工业自动化 / 工业母机",
      "path": [
        "机器人/自动化",
        "工业自动化 / 工业母机"
      ],
      "avg_weight": 0.9
    },
    {
      "stock_count": 9,
      "total_weight": 7.97,
      "high_confidence_count": 5,
      "watch_count": 0,
      "raw_tags": [
        "高端装备与工业",
        "AI应用",
        "高端装备",
        "企业软件",
        "办公软件",
        "新能源车电控",
        "工业软件",
        "工程",
        "矿山机械",
        "冶金工程",
        "教育软件",
        "精密制造"
      ],
      "stocks": [
        {
          "code": "300124",
          "name": "汇川技术",
          "weight": 1,
          "role": "主行业",
          "tag": "高端装备与工业",
          "evidence_level": "高"
        },
        {
          "code": "600588",
          "name": "用友网络",
          "weight": 1,
          "role": "主行业",
          "tag": "高端装备与工业",
          "evidence_level": "高"
        },
        {
          "code": "601618",
          "name": "中国中冶",
          "weight": 1,
          "role": "主行业",
          "tag": "高端装备与工业",
          "evidence_level": "高"
        },
        {
          "code": "688111",
          "name": "金山办公",
          "weight": 1,
          "role": "主行业",
          "tag": "高端装备与工业",
          "evidence_level": "高"
        },
        {
          "code": "002230",
          "name": "科大讯飞",
          "weight": 1,
          "role": "主行业",
          "tag": "高端装备与工业",
          "evidence_level": "高"
        },
        {
          "code": "600893",
          "name": "航发动力",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "高端装备",
          "evidence_level": "中"
        },
        {
          "code": "002475",
          "name": "立讯精密",
          "weight": 0.78,
          "role": "二级赛道",
          "tag": "精密制造",
          "evidence_level": "中"
        },
        {
          "code": "000768",
          "name": "中航西飞",
          "weight": 0.69,
          "role": "相关概念",
          "tag": "高端装备",
          "evidence_level": "中"
        },
        {
          "code": "600760",
          "name": "中航沈飞",
          "weight": 0.66,
          "role": "相关概念",
          "tag": "高端装备",
          "evidence_level": "中"
        }
      ],
      "node_id": "industrial_equipment",
      "name": "高端装备与工业",
      "path": [
        "高端装备与工业"
      ],
      "avg_weight": 0.89
    },
    {
      "stock_count": 4,
      "total_weight": 3.09,
      "high_confidence_count": 1,
      "watch_count": 0,
      "raw_tags": [
        "高端装备",
        "工程",
        "矿山机械",
        "冶金工程"
      ],
      "stocks": [
        {
          "code": "601618",
          "name": "中国中冶",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "工程",
          "evidence_level": "高"
        },
        {
          "code": "600893",
          "name": "航发动力",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "高端装备",
          "evidence_level": "中"
        },
        {
          "code": "000768",
          "name": "中航西飞",
          "weight": 0.69,
          "role": "相关概念",
          "tag": "高端装备",
          "evidence_level": "中"
        },
        {
          "code": "600760",
          "name": "中航沈飞",
          "weight": 0.66,
          "role": "相关概念",
          "tag": "高端装备",
          "evidence_level": "中"
        }
      ],
      "node_id": "industrial_machinery",
      "name": "工程机械 / 矿山装备",
      "path": [
        "高端装备与工业",
        "工程机械 / 矿山装备"
      ],
      "avg_weight": 0.77
    },
    {
      "stock_count": 3,
      "total_weight": 2.71,
      "high_confidence_count": 3,
      "watch_count": 0,
      "raw_tags": [
        "AI应用",
        "企业软件",
        "办公软件",
        "工业软件",
        "教育软件"
      ],
      "stocks": [
        {
          "code": "688111",
          "name": "金山办公",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "办公软件",
          "evidence_level": "高"
        },
        {
          "code": "600588",
          "name": "用友网络",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "企业软件",
          "evidence_level": "高"
        },
        {
          "code": "002230",
          "name": "科大讯飞",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "AI应用",
          "evidence_level": "高"
        }
      ],
      "node_id": "industrial_software",
      "name": "工业软件 / 企业软件",
      "path": [
        "高端装备与工业",
        "工业软件 / 企业软件"
      ],
      "avg_weight": 0.9
    },
    {
      "stock_count": 2,
      "total_weight": 1.62,
      "high_confidence_count": 0,
      "watch_count": 0,
      "raw_tags": [
        "新能源车电控",
        "精密制造"
      ],
      "stocks": [
        {
          "code": "300124",
          "name": "汇川技术",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "新能源车电控",
          "evidence_level": "中"
        },
        {
          "code": "002475",
          "name": "立讯精密",
          "weight": 0.78,
          "role": "二级赛道",
          "tag": "精密制造",
          "evidence_level": "中"
        }
      ],
      "node_id": "industrial_precision_equipment",
      "name": "精密制造 / 高端设备",
      "path": [
        "高端装备与工业",
        "精密制造 / 高端设备"
      ],
      "avg_weight": 0.81
    },
    {
      "stock_count": 6,
      "total_weight": 5.18,
      "high_confidence_count": 2,
      "watch_count": 0,
      "raw_tags": [
        "钛",
        "新能源材料",
        "新材料",
        "有色金属与新材料",
        "稀有",
        "战略金属",
        "有色金属",
        "钛合金"
      ],
      "stocks": [
        {
          "code": "600456",
          "name": "宝钛股份",
          "weight": 1,
          "role": "主行业",
          "tag": "有色金属与新材料",
          "evidence_level": "高"
        },
        {
          "code": "603993",
          "name": "洛阳钼业",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "有色金属",
          "evidence_level": "高"
        },
        {
          "code": "688122",
          "name": "西部超导",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "钛合金",
          "evidence_level": "中"
        },
        {
          "code": "002460",
          "name": "赣锋锂业",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "新能源材料",
          "evidence_level": "中"
        },
        {
          "code": "002466",
          "name": "天齐锂业",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "新能源材料",
          "evidence_level": "中"
        },
        {
          "code": "600309",
          "name": "万华化学",
          "weight": 0.75,
          "role": "相关概念",
          "tag": "新材料",
          "evidence_level": "中"
        }
      ],
      "node_id": "advanced_materials",
      "name": "有色金属与新材料",
      "path": [
        "有色金属与新材料"
      ],
      "avg_weight": 0.86
    },
    {
      "stock_count": 1,
      "total_weight": 0.84,
      "high_confidence_count": 0,
      "watch_count": 0,
      "raw_tags": [
        "钛合金",
        "钛"
      ],
      "stocks": [
        {
          "code": "688122",
          "name": "西部超导",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "钛合金",
          "evidence_level": "中"
        }
      ],
      "node_id": "advanced_metal_alloy",
      "name": "高端金属 / 合金",
      "path": [
        "有色金属与新材料",
        "高端金属 / 合金"
      ],
      "avg_weight": 0.84
    },
    {
      "stock_count": 3,
      "total_weight": 2.58,
      "high_confidence_count": 1,
      "watch_count": 0,
      "raw_tags": [
        "新能源材料",
        "稀有",
        "战略金属",
        "钛"
      ],
      "stocks": [
        {
          "code": "600456",
          "name": "宝钛股份",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "稀有",
          "evidence_level": "高"
        },
        {
          "code": "002460",
          "name": "赣锋锂业",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "新能源材料",
          "evidence_level": "中"
        },
        {
          "code": "002466",
          "name": "天齐锂业",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "新能源材料",
          "evidence_level": "中"
        }
      ],
      "node_id": "advanced_new_energy_material",
      "name": "新能源材料",
      "path": [
        "有色金属与新材料",
        "新能源材料"
      ],
      "avg_weight": 0.86
    },
    {
      "stock_count": 5,
      "total_weight": 5,
      "high_confidence_count": 5,
      "watch_count": 0,
      "raw_tags": [
        "化工材料",
        "化工",
        "新材料化工",
        "石化",
        "MDI",
        "聚氨酯",
        "精细化工",
        "煤化工",
        "化纤",
        "炼化一体化",
        "烯烃"
      ],
      "stocks": [
        {
          "code": "600309",
          "name": "万华化学",
          "weight": 1,
          "role": "主行业",
          "tag": "化工材料",
          "evidence_level": "高"
        },
        {
          "code": "600426",
          "name": "华鲁恒升",
          "weight": 1,
          "role": "主行业",
          "tag": "化工材料",
          "evidence_level": "高"
        },
        {
          "code": "000301",
          "name": "东方盛虹",
          "weight": 1,
          "role": "主行业",
          "tag": "化工材料",
          "evidence_level": "高"
        },
        {
          "code": "002493",
          "name": "荣盛石化",
          "weight": 1,
          "role": "主行业",
          "tag": "化工材料",
          "evidence_level": "高"
        },
        {
          "code": "002648",
          "name": "卫星化学",
          "weight": 1,
          "role": "主行业",
          "tag": "化工材料",
          "evidence_level": "高"
        }
      ],
      "node_id": "chemical_materials",
      "name": "化工材料",
      "path": [
        "化工材料"
      ],
      "avg_weight": 1
    },
    {
      "stock_count": 3,
      "total_weight": 2.72,
      "high_confidence_count": 3,
      "watch_count": 0,
      "raw_tags": [
        "化工",
        "新材料化工",
        "MDI",
        "聚氨酯",
        "精细化工",
        "煤化工",
        "烯烃"
      ],
      "stocks": [
        {
          "code": "600426",
          "name": "华鲁恒升",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "煤化工",
          "evidence_level": "高"
        },
        {
          "code": "002648",
          "name": "卫星化学",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "烯烃",
          "evidence_level": "高"
        },
        {
          "code": "600309",
          "name": "万华化学",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "MDI",
          "evidence_level": "高"
        }
      ],
      "node_id": "chemical_new_material",
      "name": "新材料化工",
      "path": [
        "化工材料",
        "新材料化工"
      ],
      "avg_weight": 0.91
    },
    {
      "stock_count": 2,
      "total_weight": 1.82,
      "high_confidence_count": 2,
      "watch_count": 0,
      "raw_tags": [
        "石化",
        "化工",
        "化纤",
        "炼化一体化"
      ],
      "stocks": [
        {
          "code": "000301",
          "name": "东方盛虹",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "石化",
          "evidence_level": "高"
        },
        {
          "code": "002493",
          "name": "荣盛石化",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "石化",
          "evidence_level": "高"
        }
      ],
      "node_id": "chemical_petro_coal",
      "name": "石化 / 煤化工",
      "path": [
        "化工材料",
        "石化 / 煤化工"
      ],
      "avg_weight": 0.91
    },
    {
      "stock_count": 8,
      "total_weight": 7.61,
      "high_confidence_count": 7,
      "watch_count": 0,
      "raw_tags": [
        "资源周期",
        "资源",
        "油气",
        "全球矿业",
        "锂资源",
        "周期",
        "油气开采",
        "煤炭",
        "炼化",
        "铜金矿产",
        "黄金",
        "铜"
      ],
      "stocks": [
        {
          "code": "600938",
          "name": "中国海油",
          "weight": 1,
          "role": "主行业",
          "tag": "资源周期",
          "evidence_level": "高"
        },
        {
          "code": "601088",
          "name": "中国神华",
          "weight": 1,
          "role": "主行业",
          "tag": "资源周期",
          "evidence_level": "高"
        },
        {
          "code": "601857",
          "name": "中国石油",
          "weight": 1,
          "role": "主行业",
          "tag": "资源周期",
          "evidence_level": "高"
        },
        {
          "code": "601899",
          "name": "紫金矿业",
          "weight": 1,
          "role": "主行业",
          "tag": "资源周期",
          "evidence_level": "高"
        },
        {
          "code": "603993",
          "name": "洛阳钼业",
          "weight": 1,
          "role": "主行业",
          "tag": "资源周期",
          "evidence_level": "高"
        },
        {
          "code": "002460",
          "name": "赣锋锂业",
          "weight": 1,
          "role": "主行业",
          "tag": "资源周期",
          "evidence_level": "高"
        },
        {
          "code": "002466",
          "name": "天齐锂业",
          "weight": 1,
          "role": "主行业",
          "tag": "资源周期",
          "evidence_level": "高"
        },
        {
          "code": "600309",
          "name": "万华化学",
          "weight": 0.61,
          "role": "相关概念",
          "tag": "周期",
          "evidence_level": "中"
        }
      ],
      "node_id": "resources",
      "name": "资源周期",
      "path": [
        "资源周期"
      ],
      "avg_weight": 0.95
    },
    {
      "stock_count": 3,
      "total_weight": 2.7,
      "high_confidence_count": 3,
      "watch_count": 0,
      "raw_tags": [
        "资源",
        "油气",
        "油气开采",
        "煤炭",
        "炼化"
      ],
      "stocks": [
        {
          "code": "600938",
          "name": "中国海油",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "油气开采",
          "evidence_level": "高"
        },
        {
          "code": "601088",
          "name": "中国神华",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "煤炭",
          "evidence_level": "高"
        },
        {
          "code": "601857",
          "name": "中国石油",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "油气",
          "evidence_level": "高"
        }
      ],
      "node_id": "resources_energy",
      "name": "能源资源",
      "path": [
        "资源周期",
        "能源资源"
      ],
      "avg_weight": 0.9
    },
    {
      "stock_count": 4,
      "total_weight": 3.64,
      "high_confidence_count": 4,
      "watch_count": 0,
      "raw_tags": [
        "资源",
        "全球矿业",
        "锂资源",
        "铜金矿产",
        "铜"
      ],
      "stocks": [
        {
          "code": "601899",
          "name": "紫金矿业",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "铜",
          "evidence_level": "高"
        },
        {
          "code": "603993",
          "name": "洛阳钼业",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "资源",
          "evidence_level": "高"
        },
        {
          "code": "002460",
          "name": "赣锋锂业",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "资源",
          "evidence_level": "高"
        },
        {
          "code": "002466",
          "name": "天齐锂业",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "资源",
          "evidence_level": "高"
        }
      ],
      "node_id": "resources_metal_mining",
      "name": "金属矿产",
      "path": [
        "资源周期",
        "金属矿产"
      ],
      "avg_weight": 0.91
    },
    {
      "stock_count": 4,
      "total_weight": 4,
      "high_confidence_count": 4,
      "watch_count": 0,
      "raw_tags": [
        "国防军工与航空航天",
        "航空装备",
        "国防军工",
        "航空航天",
        "军工主机",
        "航空发动机",
        "高温合金",
        "军工",
        "大飞机"
      ],
      "stocks": [
        {
          "code": "600760",
          "name": "中航沈飞",
          "weight": 1,
          "role": "主行业",
          "tag": "国防军工与航空航天",
          "evidence_level": "高"
        },
        {
          "code": "600893",
          "name": "航发动力",
          "weight": 1,
          "role": "主行业",
          "tag": "国防军工与航空航天",
          "evidence_level": "高"
        },
        {
          "code": "688122",
          "name": "西部超导",
          "weight": 1,
          "role": "主行业",
          "tag": "国防军工与航空航天",
          "evidence_level": "高"
        },
        {
          "code": "000768",
          "name": "中航西飞",
          "weight": 1,
          "role": "主行业",
          "tag": "国防军工与航空航天",
          "evidence_level": "高"
        }
      ],
      "node_id": "defense_aerospace",
      "name": "国防军工与航空航天",
      "path": [
        "国防军工与航空航天"
      ],
      "avg_weight": 1
    },
    {
      "stock_count": 3,
      "total_weight": 2.7,
      "high_confidence_count": 3,
      "watch_count": 0,
      "raw_tags": [
        "航空装备",
        "国防军工",
        "航空航天",
        "军工主机",
        "高温合金",
        "军工",
        "大飞机"
      ],
      "stocks": [
        {
          "code": "600760",
          "name": "中航沈飞",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "航空装备",
          "evidence_level": "高"
        },
        {
          "code": "688122",
          "name": "西部超导",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "航空装备",
          "evidence_level": "高"
        },
        {
          "code": "000768",
          "name": "中航西飞",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "航空装备",
          "evidence_level": "高"
        }
      ],
      "node_id": "defense_aircraft",
      "name": "航空装备 / 大飞机",
      "path": [
        "国防军工与航空航天",
        "航空装备 / 大飞机"
      ],
      "avg_weight": 0.9
    },
    {
      "stock_count": 1,
      "total_weight": 0.9,
      "high_confidence_count": 1,
      "watch_count": 0,
      "raw_tags": [
        "航空发动机",
        "国防军工",
        "航空航天"
      ],
      "stocks": [
        {
          "code": "600893",
          "name": "航发动力",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "航空发动机",
          "evidence_level": "高"
        }
      ],
      "node_id": "defense_engine",
      "name": "航空发动机",
      "path": [
        "国防军工与航空航天",
        "航空发动机"
      ],
      "avg_weight": 0.9
    },
    {
      "stock_count": 26,
      "total_weight": 26,
      "high_confidence_count": 26,
      "watch_count": 0,
      "raw_tags": [
        "医药医疗",
        "医药",
        "创新药",
        "医疗器械",
        "生物药",
        "医疗服务",
        "CXO",
        "中药",
        "医药商业",
        "CRO",
        "CDMO",
        "品牌中药"
      ],
      "stocks": [
        {
          "code": "300015",
          "name": "爱尔眼科",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "300122",
          "name": "智飞生物",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "300347",
          "name": "泰格医药",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "300759",
          "name": "康龙化成",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "300760",
          "name": "迈瑞医疗",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "300832",
          "name": "新产业",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "300896",
          "name": "爱美客",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "600085",
          "name": "同仁堂",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "600196",
          "name": "复星医药",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "600276",
          "name": "恒瑞医药",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "600436",
          "name": "片仔癀",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "600763",
          "name": "通策医疗",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "601607",
          "name": "上海医药",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "603233",
          "name": "大参林",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "603259",
          "name": "药明康德",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "603392",
          "name": "万泰生物",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "603883",
          "name": "老百姓",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "603939",
          "name": "益丰药房",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "688114",
          "name": "华大智造",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "688271",
          "name": "联影医疗",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "000538",
          "name": "云南白药",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "000661",
          "name": "长春高新",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "000963",
          "name": "华东医药",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "002223",
          "name": "鱼跃医疗",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "002603",
          "name": "以岭药业",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        },
        {
          "code": "002821",
          "name": "凯莱英",
          "weight": 1,
          "role": "主行业",
          "tag": "医药医疗",
          "evidence_level": "高"
        }
      ],
      "node_id": "healthcare",
      "name": "医药医疗",
      "path": [
        "医药医疗"
      ],
      "avg_weight": 1
    },
    {
      "stock_count": 7,
      "total_weight": 6.15,
      "high_confidence_count": 6,
      "watch_count": 0,
      "raw_tags": [
        "创新药",
        "生物药",
        "疫苗",
        "生物制药",
        "化学制药"
      ],
      "stocks": [
        {
          "code": "300122",
          "name": "智飞生物",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "创新药",
          "evidence_level": "高"
        },
        {
          "code": "600196",
          "name": "复星医药",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "创新药",
          "evidence_level": "高"
        },
        {
          "code": "600276",
          "name": "恒瑞医药",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "创新药",
          "evidence_level": "高"
        },
        {
          "code": "603392",
          "name": "万泰生物",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "创新药",
          "evidence_level": "高"
        },
        {
          "code": "000661",
          "name": "长春高新",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "创新药",
          "evidence_level": "高"
        },
        {
          "code": "000963",
          "name": "华东医药",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "创新药",
          "evidence_level": "高"
        },
        {
          "code": "002603",
          "name": "以岭药业",
          "weight": 0.75,
          "role": "相关概念",
          "tag": "创新药",
          "evidence_level": "中"
        }
      ],
      "node_id": "innovative_drug",
      "name": "创新药/生物药",
      "path": [
        "医药医疗",
        "创新药/生物药"
      ],
      "avg_weight": 0.88
    },
    {
      "stock_count": 7,
      "total_weight": 6.01,
      "high_confidence_count": 5,
      "watch_count": 0,
      "raw_tags": [
        "医疗器械",
        "IVD",
        "体外诊断",
        "医疗设备",
        "高端设备",
        "生命科学仪器",
        "医学影像"
      ],
      "stocks": [
        {
          "code": "688114",
          "name": "华大智造",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "医疗器械",
          "evidence_level": "高"
        },
        {
          "code": "300760",
          "name": "迈瑞医疗",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "医疗器械",
          "evidence_level": "高"
        },
        {
          "code": "300832",
          "name": "新产业",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "医疗器械",
          "evidence_level": "高"
        },
        {
          "code": "688271",
          "name": "联影医疗",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "医疗器械",
          "evidence_level": "高"
        },
        {
          "code": "002223",
          "name": "鱼跃医疗",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "医疗器械",
          "evidence_level": "高"
        },
        {
          "code": "600196",
          "name": "复星医药",
          "weight": 0.75,
          "role": "相关概念",
          "tag": "医疗器械",
          "evidence_level": "中"
        },
        {
          "code": "603392",
          "name": "万泰生物",
          "weight": 0.75,
          "role": "相关概念",
          "tag": "IVD",
          "evidence_level": "中"
        }
      ],
      "node_id": "medical_device",
      "name": "医疗器械/IVD",
      "path": [
        "医药医疗",
        "医疗器械/IVD"
      ],
      "avg_weight": 0.86
    },
    {
      "stock_count": 4,
      "total_weight": 3.6,
      "high_confidence_count": 4,
      "watch_count": 0,
      "raw_tags": [
        "CXO",
        "CRO",
        "CDMO",
        "临床CRO",
        "医药外包"
      ],
      "stocks": [
        {
          "code": "300347",
          "name": "泰格医药",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "CXO",
          "evidence_level": "高"
        },
        {
          "code": "300759",
          "name": "康龙化成",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "CXO",
          "evidence_level": "高"
        },
        {
          "code": "603259",
          "name": "药明康德",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "CXO",
          "evidence_level": "高"
        },
        {
          "code": "002821",
          "name": "凯莱英",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "CXO",
          "evidence_level": "高"
        }
      ],
      "node_id": "cxo",
      "name": "CXO/CRO/CDMO",
      "path": [
        "医药医疗",
        "CXO/CRO/CDMO"
      ],
      "avg_weight": 0.9
    },
    {
      "stock_count": 4,
      "total_weight": 3.6,
      "high_confidence_count": 4,
      "watch_count": 0,
      "raw_tags": [
        "中药",
        "品牌中药",
        "创新中药"
      ],
      "stocks": [
        {
          "code": "600085",
          "name": "同仁堂",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "中药",
          "evidence_level": "高"
        },
        {
          "code": "600436",
          "name": "片仔癀",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "中药",
          "evidence_level": "高"
        },
        {
          "code": "000538",
          "name": "云南白药",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "中药",
          "evidence_level": "高"
        },
        {
          "code": "002603",
          "name": "以岭药业",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "中药",
          "evidence_level": "高"
        }
      ],
      "node_id": "tcm",
      "name": "中药/品牌中药",
      "path": [
        "医药医疗",
        "中药/品牌中药"
      ],
      "avg_weight": 0.9
    },
    {
      "stock_count": 4,
      "total_weight": 3.48,
      "high_confidence_count": 3,
      "watch_count": 0,
      "raw_tags": [
        "医疗服务",
        "医美",
        "眼科",
        "口腔"
      ],
      "stocks": [
        {
          "code": "300015",
          "name": "爱尔眼科",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "医疗服务",
          "evidence_level": "高"
        },
        {
          "code": "300896",
          "name": "爱美客",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "医疗服务",
          "evidence_level": "高"
        },
        {
          "code": "600763",
          "name": "通策医疗",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "医疗服务",
          "evidence_level": "高"
        },
        {
          "code": "000963",
          "name": "华东医药",
          "weight": 0.78,
          "role": "二级赛道",
          "tag": "医美",
          "evidence_level": "中"
        }
      ],
      "node_id": "medical_service",
      "name": "医疗服务",
      "path": [
        "医药医疗",
        "医疗服务"
      ],
      "avg_weight": 0.87
    },
    {
      "stock_count": 4,
      "total_weight": 3.6,
      "high_confidence_count": 4,
      "watch_count": 0,
      "raw_tags": [
        "医药商业",
        "药房",
        "医药流通"
      ],
      "stocks": [
        {
          "code": "601607",
          "name": "上海医药",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "医药商业",
          "evidence_level": "高"
        },
        {
          "code": "603233",
          "name": "大参林",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "医药商业",
          "evidence_level": "高"
        },
        {
          "code": "603883",
          "name": "老百姓",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "医药商业",
          "evidence_level": "高"
        },
        {
          "code": "603939",
          "name": "益丰药房",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "医药商业",
          "evidence_level": "高"
        }
      ],
      "node_id": "pharma_distribution",
      "name": "医药商业/药房",
      "path": [
        "医药医疗",
        "医药商业/药房"
      ],
      "avg_weight": 0.9
    },
    {
      "stock_count": 10,
      "total_weight": 9.17,
      "high_confidence_count": 7,
      "watch_count": 0,
      "raw_tags": [
        "高股息",
        "金融",
        "财富管理",
        "银行",
        "证券",
        "金融科技",
        "互联网券商",
        "股份制银行",
        "保险",
        "综合金融"
      ],
      "stocks": [
        {
          "code": "300059",
          "name": "东方财富",
          "weight": 1,
          "role": "主行业",
          "tag": "金融",
          "evidence_level": "高"
        },
        {
          "code": "600030",
          "name": "中信证券",
          "weight": 1,
          "role": "主行业",
          "tag": "金融",
          "evidence_level": "高"
        },
        {
          "code": "600036",
          "name": "招商银行",
          "weight": 1,
          "role": "主行业",
          "tag": "金融",
          "evidence_level": "高"
        },
        {
          "code": "601318",
          "name": "中国平安",
          "weight": 1,
          "role": "主行业",
          "tag": "金融",
          "evidence_level": "高"
        },
        {
          "code": "601398",
          "name": "工商银行",
          "weight": 1,
          "role": "主行业",
          "tag": "金融",
          "evidence_level": "高"
        },
        {
          "code": "601939",
          "name": "建设银行",
          "weight": 1,
          "role": "主行业",
          "tag": "金融",
          "evidence_level": "高"
        },
        {
          "code": "600938",
          "name": "中国海油",
          "weight": 0.89,
          "role": "核心概念",
          "tag": "高股息",
          "evidence_level": "高"
        },
        {
          "code": "601088",
          "name": "中国神华",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "高股息",
          "evidence_level": "中"
        },
        {
          "code": "600519",
          "name": "贵州茅台",
          "weight": 0.72,
          "role": "相关概念",
          "tag": "高股息",
          "evidence_level": "中"
        },
        {
          "code": "601857",
          "name": "中国石油",
          "weight": 0.72,
          "role": "相关概念",
          "tag": "高股息",
          "evidence_level": "中"
        }
      ],
      "node_id": "finance",
      "name": "金融",
      "path": [
        "金融"
      ],
      "avg_weight": 0.92
    },
    {
      "stock_count": 1,
      "total_weight": 0.9,
      "high_confidence_count": 1,
      "watch_count": 0,
      "raw_tags": [
        "股份制银行",
        "财富管理",
        "银行",
        "高股息"
      ],
      "stocks": [
        {
          "code": "600036",
          "name": "招商银行",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "股份制银行",
          "evidence_level": "高"
        }
      ],
      "node_id": "finance_bank",
      "name": "银行",
      "path": [
        "金融",
        "银行"
      ],
      "avg_weight": 0.9
    },
    {
      "stock_count": 2,
      "total_weight": 1.81,
      "high_confidence_count": 2,
      "watch_count": 0,
      "raw_tags": [
        "财富管理",
        "互联网券商",
        "金融科技",
        "证券"
      ],
      "stocks": [
        {
          "code": "600030",
          "name": "中信证券",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "证券",
          "evidence_level": "高"
        },
        {
          "code": "300059",
          "name": "东方财富",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "互联网券商",
          "evidence_level": "高"
        }
      ],
      "node_id": "finance_broker_wealth",
      "name": "证券 / 财富管理",
      "path": [
        "金融",
        "证券 / 财富管理"
      ],
      "avg_weight": 0.91
    },
    {
      "stock_count": 1,
      "total_weight": 0.9,
      "high_confidence_count": 1,
      "watch_count": 0,
      "raw_tags": [
        "保险",
        "综合金融",
        "金融科技"
      ],
      "stocks": [
        {
          "code": "601318",
          "name": "中国平安",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "保险",
          "evidence_level": "高"
        }
      ],
      "node_id": "finance_insurance_fintech",
      "name": "保险 / 综合金融",
      "path": [
        "金融",
        "保险 / 综合金融"
      ],
      "avg_weight": 0.9
    },
    {
      "stock_count": 4,
      "total_weight": 3.53,
      "high_confidence_count": 3,
      "watch_count": 0,
      "raw_tags": [
        "高股息",
        "银行"
      ],
      "stocks": [
        {
          "code": "601398",
          "name": "工商银行",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "银行",
          "evidence_level": "高"
        },
        {
          "code": "601939",
          "name": "建设银行",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "银行",
          "evidence_level": "高"
        },
        {
          "code": "600938",
          "name": "中国海油",
          "weight": 0.89,
          "role": "核心概念",
          "tag": "高股息",
          "evidence_level": "高"
        },
        {
          "code": "601088",
          "name": "中国神华",
          "weight": 0.84,
          "role": "二级赛道",
          "tag": "高股息",
          "evidence_level": "中"
        }
      ],
      "node_id": "finance_high_dividend",
      "name": "高股息金融",
      "path": [
        "金融",
        "高股息金融"
      ],
      "avg_weight": 0.88
    },
    {
      "stock_count": 3,
      "total_weight": 3,
      "high_confidence_count": 3,
      "watch_count": 0,
      "raw_tags": [
        "消费白马",
        "白酒",
        "高端消费",
        "消费"
      ],
      "stocks": [
        {
          "code": "600519",
          "name": "贵州茅台",
          "weight": 1,
          "role": "主行业",
          "tag": "消费白马",
          "evidence_level": "高"
        },
        {
          "code": "000568",
          "name": "泸州老窖",
          "weight": 1,
          "role": "主行业",
          "tag": "消费白马",
          "evidence_level": "高"
        },
        {
          "code": "000858",
          "name": "五粮液",
          "weight": 1,
          "role": "主行业",
          "tag": "消费白马",
          "evidence_level": "高"
        }
      ],
      "node_id": "consumer_bluechip",
      "name": "消费白马",
      "path": [
        "消费白马"
      ],
      "avg_weight": 1
    },
    {
      "stock_count": 3,
      "total_weight": 2.71,
      "high_confidence_count": 3,
      "watch_count": 0,
      "raw_tags": [
        "白酒",
        "高端消费",
        "消费"
      ],
      "stocks": [
        {
          "code": "000858",
          "name": "五粮液",
          "weight": 0.91,
          "role": "核心概念",
          "tag": "白酒",
          "evidence_level": "高"
        },
        {
          "code": "600519",
          "name": "贵州茅台",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "白酒",
          "evidence_level": "高"
        },
        {
          "code": "000568",
          "name": "泸州老窖",
          "weight": 0.9,
          "role": "二级赛道",
          "tag": "白酒",
          "evidence_level": "高"
        }
      ],
      "node_id": "consumer_liquor_premium",
      "name": "白酒 / 高端消费",
      "path": [
        "消费白马",
        "白酒 / 高端消费"
      ],
      "avg_weight": 0.9
    }
  ],
  "unmapped_concepts": [],
  "review_queue": []
};
