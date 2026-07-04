var CLASSIFICATION_RULES_V2 = {
  "version": "2026-06-26.alpha2",
  "updated_at": "2026-06-26",
  "purpose": "全A公司报告与网站概念树共用的分类规则底座",
  "principles": [
    "每家公司保留一个稳定主行业，允许多个概念标签",
    "主行业用于导航和长期归档，概念标签用于主题发现和概念雷达",
    "只有证据强的标签进入叶子节点，弱相关标签默认停留在父级观察",
    "热点概念先进入候选池，样本和证据充分后再升为主流概念主干",
    "旧报告不删除，新报告和新分类并行维护"
  ],
  "evidence_policy": {
    "strong_roles": [
      "主行业",
      "二级赛道",
      "核心概念"
    ],
    "weak_roles": [
      "相关概念",
      "观察概念"
    ],
    "strong_basis": [
      "报告主分类",
      "报告二级分类",
      "核心赛道",
      "主营业务",
      "公告确认",
      "财报确认"
    ],
    "weak_basis": [
      "相关标签",
      "主题标签",
      "业务相关",
      "市场概念"
    ],
    "leaf_assignment": [
      {
        "id": "main_industry_to_root",
        "rule": "主行业只决定一级行业归属，除非同时有二级赛道或核心概念证据，否则不直接进入叶子概念"
      },
      {
        "id": "strong_tag_to_leaf",
        "rule": "二级赛道、核心概念、报告二级分类、核心赛道可以进入最细分叶子节点"
      },
      {
        "id": "weak_tag_parent_only",
        "rule": "相关概念、观察概念默认只挂到父级概念，用于搜索和概念雷达，不直接出现在叶子股票列表"
      },
      {
        "id": "weak_tag_confirmed_exception",
        "rule": "弱相关标签只有在公司主业、二级赛道或报告正文明确匹配叶子概念时，才允许进入叶子节点"
      },
      {
        "id": "hot_theme_candidate_first",
        "rule": "热门题材先进入候选热点池，要求样本数量、公告/财报证据和业务相关度达标后再升为主干"
      }
    ],
    "review_flags": [
      "同一公司挂载节点超过5个",
      "高权重标签跨越两个不相邻产业链",
      "叶子节点只有弱相关标签支撑",
      "公司标签来自热点但报告没有主营或公告证据",
      "节点长期为空但属于全A必要行业"
    ]
  },
  "taxonomy": [
    {
      "id": "ai_compute",
      "name": "AI算力",
      "aliases": [
        "AI",
        "人工智能",
        "算力",
        "国产算力",
        "PCB",
        "高速PCB",
        "印制电路板",
        "电路板",
        "AI服务器",
        "数据中心"
      ],
      "children": [
        {
          "id": "ai_chip",
          "name": "AI芯片 / 国产算力芯片",
          "aliases": [
            "AI芯片",
            "GPU",
            "国产GPU",
            "算力芯片",
            "加速卡"
          ]
        },
        {
          "id": "ai_server",
          "name": "AI服务器链",
          "aliases": [
            "AI服务器",
            "服务器",
            "服务器电源",
            "云端硬件制造"
          ]
        },
        {
          "id": "cpo_optical_module",
          "name": "CPO / 光模块",
          "aliases": [
            "CPO",
            "光模块",
            "硅光",
            "光芯片",
            "高速光通信"
          ]
        },
        {
          "id": "pcb_high_speed",
          "name": "PCB / 高速PCB",
          "aliases": [
            "PCB",
            "高速PCB",
            "HDI",
            "IC载板",
            "覆铜板",
            "印制电路板",
            "电路板",
            "服务器PCB",
            "高多层板",
            "高频高速板",
            "算力PCB",
            "AI服务器PCB"
          ]
        },
        {
          "id": "data_center_infra",
          "name": "AI数据中心基础设施",
          "aliases": [
            "数据中心",
            "IDC",
            "液冷",
            "电源",
            "铜缆连接",
            "散热"
          ]
        }
      ]
    },
    {
      "id": "semiconductor",
      "name": "半导体",
      "aliases": [
        "芯片",
        "集成电路",
        "国产替代",
        "半导体产业链",
        "半导体材料",
        "封测",
        "功率器件",
        "电子材料"
      ],
      "children": [
        {
          "id": "semicap",
          "name": "半导体设备",
          "aliases": [
            "半导体设备",
            "刻蚀",
            "薄膜沉积",
            "光刻",
            "检测设备",
            "????",
            "CMP??",
            "??????"
          ]
        },
        {
          "id": "semimaterial",
          "name": "半导体材料",
          "aliases": [
            "半导体材料",
            "电子特气",
            "光刻胶",
            "硅片",
            "靶材",
            "电子材料",
            "封装材料",
            "绝缘材料",
            "电子树脂",
            "半导体封装材料"
          ]
        },
        {
          "id": "advanced_packaging",
          "name": "封装测试 / 先进封装",
          "aliases": [
            "封装测试",
            "先进封装",
            "Chiplet",
            "2.5D",
            "3D封装",
            "封测",
            "封装",
            "测试",
            "设备零部件"
          ]
        },
        {
          "id": "storage_chip",
          "name": "存储芯片",
          "aliases": [
            "存储",
            "DRAM",
            "NAND",
            "HBM",
            "存储芯片"
          ]
        },
        {
          "id": "analog_power",
          "name": "模拟 / 功率 / MCU",
          "aliases": [
            "模拟芯片",
            "功率半导体",
            "IGBT",
            "SiC",
            "MCU",
            "功率器件",
            "电容器",
            "薄膜电容",
            "功率模块"
          ]
        }
      ]
    },
    {
      "id": "new_energy_vehicle",
      "name": "新能源汽车",
      "aliases": [
        "新能源车",
        "汽车",
        "整车",
        "商用车",
        "汽车电子",
        "智能汽车",
        "汽车零部件",
        "汽车安全",
        "智能座舱",
        "车联网",
        "汽车IT"
      ],
      "children": [
        {
          "id": "battery_storage",
          "name": "动力电池 / 储能",
          "aliases": [
            "动力电池",
            "锂电池",
            "储能",
            "电芯",
            "电池系统"
          ]
        },
        {
          "id": "vehicle_parts",
          "name": "汽车零部件",
          "aliases": [
            "汽车零部件",
            "汽车电子",
            "连接器",
            "线控底盘",
            "热管理",
            "安全系统",
            "制动系统",
            "座舱电子",
            "汽车安全",
            "安全气囊",
            "被动安全",
            "智能座舱",
            "车身电子",
            "车联网",
            "汽车IT"
          ]
        },
        {
          "id": "smart_driving",
          "name": "智能驾驶 / 车路云",
          "aliases": [
            "智能驾驶",
            "自动驾驶",
            "车路云",
            "域控",
            "激光雷达"
          ]
        },
        {
          "id": "whole_vehicle",
          "name": "整车",
          "aliases": [
            "整车",
            "乘用车",
            "商用车",
            "新能源整车",
            "客车",
            "重卡",
            "轻卡",
            "皮卡",
            "货车"
          ]
        }
      ]
    },
    {
      "id": "renewable_power",
      "name": "电力与公用事业",
      "aliases": [
        "电力",
        "公用事业",
        "发电",
        "电力运营",
        "火电",
        "煤电",
        "水电",
        "绿电",
        "综合电力",
        "新能源发电",
        "清洁能源"
      ],
      "children": [
        {
          "id": "power_thermal",
          "name": "火电 / 煤电",
          "aliases": [
            "火电",
            "煤电",
            "燃煤发电",
            "热电联产",
            "调峰电源",
            "火力发电",
            "燃煤机组",
            "煤机",
            "供热",
            "热力",
            "热电"
          ]
        },
        {
          "id": "power_hydro",
          "name": "水电",
          "aliases": [
            "水电",
            "水力发电",
            "抽水蓄能",
            "流域电站",
            "水电站",
            "流域开发"
          ]
        },
        {
          "id": "power_nuclear",
          "name": "核电",
          "aliases": [
            "核电",
            "核能",
            "核电运营",
            "核岛",
            "常规岛"
          ]
        },
        {
          "id": "renewable_pv",
          "name": "光伏",
          "aliases": [
            "光伏",
            "光伏逆变器",
            "组件",
            "硅料",
            "电池片"
          ]
        },
        {
          "id": "renewable_wind",
          "name": "风电",
          "aliases": [
            "风电",
            "海上风电",
            "风机",
            "叶片",
            "塔筒"
          ]
        },
        {
          "id": "renewable_storage_grid",
          "name": "储能并网",
          "aliases": [
            "储能并网",
            "PCS",
            "变流器",
            "微电网",
            "虚拟电厂"
          ]
        },
        {
          "id": "renewable_operator",
          "name": "绿电运营",
          "aliases": [
            "绿电",
            "光热发电",
            "电站运营",
            "售电",
            "新能源发电",
            "综合电力",
            "清洁能源",
            "风光电站",
            "风电运营",
            "光伏运营"
          ]
        },
        {
          "id": "power_grid_uhv",
          "name": "电网设备 / 特高压",
          "aliases": [
            "电网设备",
            "特高压",
            "智能电网",
            "输变电",
            "配电网"
          ]
        },
        {
          "id": "power_integrated_service",
          "name": "综合能源服务",
          "aliases": [
            "综合能源",
            "源网荷储",
            "节能服务",
            "电力市场",
            "综合电力",
            "多能互补",
            "能源运营"
          ]
        }
      ]
    },
    {
      "id": "consumer_electronics",
      "name": "消费电子",
      "aliases": [
        "消费电子",
        "终端制造",
        "AI终端"
      ],
      "children": [
        {
          "id": "consumer_ai_terminal",
          "name": "AI终端 / 消费电子",
          "aliases": [
            "AI终端",
            "手机产业链",
            "VRAR",
            "智能硬件",
            "苹果链"
          ]
        },
        {
          "id": "consumer_display",
          "name": "面板 / 显示",
          "aliases": [
            "面板",
            "显示",
            "LCD",
            "OLED",
            "Mini LED"
          ]
        },
        {
          "id": "consumer_smart_home",
          "name": "智能家居 / 白电",
          "aliases": [
            "家电",
            "白电",
            "智能家居",
            "空调",
            "冰洗"
          ]
        },
        {
          "id": "consumer_terminal_manufacturing",
          "name": "终端制造 / 精密件",
          "aliases": [
            "精密制造",
            "结构件",
            "代工",
            "整机制造"
          ]
        }
      ]
    },
    {
      "id": "communications",
      "name": "通信设备与运营商",
      "aliases": [
        "通信",
        "运营商",
        "通信设备"
      ],
      "children": [
        {
          "id": "comm_optical_infra",
          "name": "光通信基础设施",
          "aliases": [
            "光纤",
            "光缆",
            "光棒",
            "预制棒",
            "海底光缆"
          ]
        },
        {
          "id": "comm_equipment",
          "name": "通信设备",
          "aliases": [
            "通信设备",
            "交换机",
            "路由器",
            "传输设备",
            "无线设备"
          ]
        },
        {
          "id": "comm_operator_idc",
          "name": "运营商 / IDC",
          "aliases": [
            "运营商",
            "IDC",
            "云基础设施",
            "数据中心"
          ]
        }
      ]
    },
    {
      "id": "robotics",
      "name": "机器人 / 自动化",
      "aliases": [
        "机器人",
        "自动化",
        "工业母机"
      ],
      "children": [
        {
          "id": "robot_humanoid",
          "name": "人形机器人",
          "aliases": [
            "人形机器人",
            "机器人本体"
          ]
        },
        {
          "id": "robot_actuator_formal",
          "name": "执行器",
          "aliases": [
            "执行器",
            "关节模组",
            "空心杯电机"
          ]
        },
        {
          "id": "robot_reducer_screw_formal",
          "name": "减速器 / 丝杠",
          "aliases": [
            "减速器",
            "丝杠",
            "谐波减速器",
            "滚柱丝杠"
          ]
        },
        {
          "id": "robot_sensor_formal",
          "name": "传感器 / 电子皮肤",
          "aliases": [
            "力矩传感器",
            "触觉传感器",
            "电子皮肤",
            "???",
            "?????",
            "??????"
          ]
        },
        {
          "id": "robot_industrial_auto",
          "name": "工业自动化 / 工业母机",
          "aliases": [
            "工业自动化",
            "工业母机",
            "数控系统"
          ]
        }
      ]
    },
    {
      "id": "industrial_equipment",
      "name": "高端装备与工业",
      "aliases": [
        "高端装备",
        "工程机械",
        "工业软件",
        "船舶",
        "海工装备",
        "轨道交通",
        "轨交",
        "船舶科技",
        "船海装备",
        "海洋工程"
      ],
      "children": [
        {
          "id": "industrial_machinery",
          "name": "工程机械 / 矿山装备",
          "aliases": [
            "工程机械",
            "矿山机械",
            "冶金工程"
          ]
        },
        {
          "id": "industrial_precision_equipment",
          "name": "精密制造 / 高端设备",
          "aliases": [
            "精密制造",
            "高端设备",
            "专用设备"
          ]
        },
        {
          "id": "industrial_software",
          "name": "工业软件 / 企业软件",
          "aliases": [
            "工业软件",
            "企业软件",
            "办公软件",
            "ERP",
            "?????",
            "???",
            "????",
            "MES",
            "??????"
          ]
        },
        {
          "id": "rail_transit_equipment",
          "name": "轨交 / 船舶 / 海工装备",
          "aliases": [
            "轨交",
            "船舶",
            "海工装备",
            "轨道交通",
            "船舶制造",
            "海洋工程",
            "舰船",
            "船海装备",
            "船舶科技",
            "海工平台",
            "轨交装备",
            "铁路装备"
          ]
        }
      ]
    },
    {
      "id": "advanced_materials",
      "name": "有色金属与新材料",
      "aliases": [
        "有色金属",
        "新材料",
        "高端材料",
        "铝",
        "电解铝",
        "铝电容",
        "电极箔",
        "电子铝箔",
        "稀土"
      ],
      "children": [
        {
          "id": "advanced_metal_alloy",
          "name": "高端金属 / 合金",
          "aliases": [
            "钛合金",
            "高温合金",
            "铜合金",
            "特种钢",
            "高纯铝",
            "电解铝",
            "铝加工",
            "铝材"
          ]
        },
        {
          "id": "advanced_electronic_material",
          "name": "电子材料",
          "aliases": [
            "电子材料",
            "电极箔",
            "电子铝箔",
            "磁性材料",
            "铝电容",
            "腐蚀箔",
            "化成箔"
          ]
        },
        {
          "id": "advanced_new_energy_material",
          "name": "新能源材料",
          "aliases": [
            "锂资源",
            "稀土磁材",
            "光伏材料",
            "战略金属",
            "????",
            "???",
            "??"
          ]
        }
      ]
    },
    {
      "id": "chemical_materials",
      "name": "化工材料",
      "aliases": [
        "化工",
        "新材料化工",
        "石化",
        "农药",
        "化肥",
        "氟化工",
        "电子化学品",
        "农化",
        "农药中间体",
        "含氟",
        "氟材料",
        "医药中间体"
      ],
      "children": [
        {
          "id": "chemical_new_material",
          "name": "新材料化工",
          "aliases": [
            "聚氨酯",
            "MDI",
            "精细化工",
            "电子化学品",
            "氟化工",
            "含氟材料",
            "氟精细化工",
            "电子级化学品",
            "医药中间体"
          ]
        },
        {
          "id": "chemical_petro_coal",
          "name": "石化 / 煤化工",
          "aliases": [
            "石化",
            "炼化",
            "煤化工",
            "烯烃"
          ]
        },
        {
          "id": "chemical_fiber_polymer",
          "name": "化纤 / 高分子",
          "aliases": [
            "化纤",
            "高分子",
            "工程塑料",
            "功能材料"
          ]
        },
        {
          "id": "fertilizer_pesticide",
          "name": "农化 / 化肥农药",
          "aliases": [
            "农化",
            "农药",
            "化肥",
            "农药中间体",
            "除草剂",
            "杀虫剂",
            "磷化工",
            "钾肥",
            "农药制剂",
            "农药原药",
            "农化产品",
            "除草剂中间体"
          ]
        }
      ]
    },
    {
      "id": "resources",
      "name": "资源周期",
      "aliases": [
        "资源",
        "周期",
        "煤炭",
        "油气",
        "矿业",
        "钢铁",
        "特钢",
        "有色",
        "稀土",
        "金属"
      ],
      "children": [
        {
          "id": "resources_energy",
          "name": "能源资源",
          "aliases": [
            "煤炭",
            "油气",
            "油气开采",
            "炼化",
            "能源"
          ]
        },
        {
          "id": "resources_metal_mining",
          "name": "金属矿产",
          "aliases": [
            "铜",
            "铝",
            "锂资源",
            "全球矿业",
            "矿产",
            "有色",
            "稀土资源",
            "铝资源",
            "铜资源",
            "??",
            "???",
            "?????"
          ]
        },
        {
          "id": "resources_precious_metal",
          "name": "黄金 / 贵金属",
          "aliases": [
            "黄金",
            "白银",
            "贵金属"
          ]
        },
        {
          "id": "steel_building_materials",
          "name": "钢铁 / 建材",
          "aliases": [
            "钢铁",
            "水泥",
            "玻璃",
            "建材",
            "特钢",
            "特殊钢",
            "钢材",
            "优特钢"
          ]
        }
      ]
    },
    {
      "id": "defense_aerospace",
      "name": "国防军工与航空航天",
      "aliases": [
        "军工",
        "航空航天",
        "商业航天"
      ],
      "children": [
        {
          "id": "defense_aircraft",
          "name": "航空装备 / 大飞机",
          "aliases": [
            "航空装备",
            "大飞机",
            "机体结构",
            "???",
            "????",
            "??"
          ]
        },
        {
          "id": "defense_engine",
          "name": "航空发动机",
          "aliases": [
            "航空发动机",
            "发动机",
            "叶片"
          ]
        },
        {
          "id": "defense_prime",
          "name": "军工主机",
          "aliases": [
            "军工主机",
            "军工",
            "主机厂",
            "??",
            "?????",
            "???"
          ]
        },
        {
          "id": "defense_commercial_space",
          "name": "商业航天 / 卫星互联网",
          "aliases": [
            "商业航天",
            "卫星互联网",
            "火箭",
            "地面站"
          ]
        }
      ]
    },
    {
      "id": "healthcare",
      "name": "医药医疗",
      "aliases": [
        "医药",
        "医疗",
        "医药医疗"
      ],
      "children": [
        {
          "id": "innovative_drug",
          "name": "创新药 / 生物药",
          "aliases": [
            "创新药",
            "生物药",
            "化学制药",
            "疫苗"
          ]
        },
        {
          "id": "medical_device",
          "name": "医疗器械 / IVD",
          "aliases": [
            "医疗器械",
            "IVD",
            "体外诊断",
            "医学影像"
          ]
        },
        {
          "id": "cxo",
          "name": "CXO / CRO / CDMO",
          "aliases": [
            "CXO",
            "CRO",
            "CDMO",
            "医药外包"
          ]
        },
        {
          "id": "tcm_brand",
          "name": "中药 / 品牌中药",
          "aliases": [
            "中药",
            "品牌中药",
            "创新中药"
          ]
        },
        {
          "id": "medical_service",
          "name": "医疗服务",
          "aliases": [
            "医疗服务",
            "眼科",
            "医美",
            "医院"
          ]
        },
        {
          "id": "pharma_commerce",
          "name": "医药商业 / 药房",
          "aliases": [
            "医药商业",
            "药房",
            "医药流通"
          ]
        }
      ]
    },
    {
      "id": "finance",
      "name": "金融",
      "aliases": [
        "金融",
        "银行",
        "证券",
        "保险"
      ],
      "children": [
        {
          "id": "finance_bank",
          "name": "银行",
          "aliases": [
            "银行",
            "股份制银行",
            "城商行",
            "国有行"
          ]
        },
        {
          "id": "finance_broker_wealth",
          "name": "证券 / 财富管理",
          "aliases": [
            "证券",
            "券商",
            "财富管理",
            "互联网券商"
          ]
        },
        {
          "id": "finance_insurance_fintech",
          "name": "保险 / 综合金融",
          "aliases": [
            "保险",
            "综合金融",
            "金融科技"
          ]
        },
        {
          "id": "finance_high_dividend",
          "name": "高股息金融",
          "aliases": [
            "高股息",
            "稳定分红"
          ]
        }
      ]
    },
    {
      "id": "consumer_bluechip",
      "name": "消费白马",
      "aliases": [
        "消费",
        "白酒",
        "食品饮料"
      ],
      "children": [
        {
          "id": "consumer_liquor_premium",
          "name": "白酒 / 高端消费",
          "aliases": [
            "白酒",
            "高端白酒",
            "高端消费",
            "?????",
            "??",
            "????"
          ]
        },
        {
          "id": "consumer_mass",
          "name": "大众消费",
          "aliases": [
            "食品饮料",
            "渠道",
            "大众消费",
            "调味品",
            "???",
            "??",
            "????"
          ]
        },
        {
          "id": "consumer_dividend",
          "name": "高股息消费",
          "aliases": [
            "高股息",
            "稳定分红"
          ]
        }
      ]
    },
    {
      "id": "computer_software_it",
      "name": "计算机 / 软件服务",
      "aliases": [
        "计算机",
        "软件",
        "信息化",
        "信息技术",
        "IT",
        "信创",
        "网络安全",
        "金融IT",
        "行业软件",
        "应用软件",
        "IT服务",
        "数字化",
        "信息系统",
        "金融科技",
        "电子政务",
        "车联网",
        "酒店信息化",
        "数据中心",
        "IDC"
      ],
      "children": [
        {
          "id": "it_infrastructure",
          "name": "IT基础设施 / 云计算",
          "aliases": [
            "云计算",
            "服务器",
            "IT基础设施",
            "数据库",
            "IDC",
            "数据中心",
            "云服务",
            "云平台",
            "算力中心",
            "机房"
          ]
        },
        {
          "id": "software_application",
          "name": "行业软件 / 应用软件",
          "aliases": [
            "行业软件",
            "应用软件",
            "ERP",
            "办公软件",
            "金融IT",
            "证券IT",
            "政务软件",
            "企业软件",
            "管理软件",
            "财税软件",
            "业务系统",
            "信息系统",
            "数字化",
            "解决方案",
            "金融科技",
            "银行IT",
            "核心系统",
            "电子政务",
            "酒店信息化",
            "车联网",
            "IT服务"
          ]
        },
        {
          "id": "cybersecurity_xinchuang",
          "name": "网络安全 / 信创",
          "aliases": [
            "网络安全",
            "信创",
            "国产软件",
            "操作系统",
            "电子政务",
            "国产化",
            "安全产品"
          ]
        },
        {
          "id": "ai_application",
          "name": "AI应用",
          "aliases": [
            "AI应用",
            "大模型",
            "智能客服",
            "AIGC",
            "AI??",
            "????",
            "??"
          ]
        }
      ]
    },
    {
      "id": "media_internet",
      "name": "传媒互联网",
      "aliases": [
        "传媒",
        "游戏",
        "广告",
        "互联网",
        "教育",
        "培训",
        "人力服务",
        "广电",
        "内容平台"
      ],
      "children": [
        {
          "id": "game_content",
          "name": "游戏 / 内容",
          "aliases": [
            "游戏",
            "影视",
            "内容",
            "版权",
            "广电",
            "内容平台",
            "视频平台",
            "影视内容"
          ]
        },
        {
          "id": "advertising_marketing",
          "name": "广告营销",
          "aliases": [
            "广告",
            "营销",
            "电商服务"
          ]
        },
        {
          "id": "education_human_service",
          "name": "教育 / 人力服务",
          "aliases": [
            "教育",
            "人力资源",
            "职业培训",
            "职业教育",
            "招录培训",
            "企业培训"
          ]
        }
      ]
    },
    {
      "id": "real_estate_construction",
      "name": "地产 / 建筑建材",
      "aliases": [
        "地产",
        "房地产",
        "建筑",
        "建材",
        "基建",
        "家居",
        "水泥",
        "建筑工程",
        "工程承包",
        "市政工程",
        "园区",
        "物业运营",
        "卫浴",
        "陶瓷",
        "家居材料"
      ],
      "children": [
        {
          "id": "real_estate_developer",
          "name": "房地产开发",
          "aliases": [
            "房地产",
            "地产开发",
            "物业开发"
          ]
        },
        {
          "id": "construction_engineering",
          "name": "建筑工程 / 基建",
          "aliases": [
            "建筑工程",
            "基建",
            "工程承包",
            "建筑施工",
            "施工总承包",
            "市政工程",
            "基础设施建设",
            "工程建设"
          ]
        },
        {
          "id": "building_materials",
          "name": "建材 / 水泥玻璃",
          "aliases": [
            "建材",
            "水泥",
            "玻璃",
            "防水材料",
            "家居材料",
            "陶瓷",
            "卫浴",
            "瓷砖",
            "卫生陶瓷"
          ]
        },
        {
          "id": "property_management",
          "name": "物业 / 园区运营",
          "aliases": [
            "物业",
            "园区运营",
            "产业园",
            "园区开发",
            "产业园区",
            "空港园区"
          ]
        }
      ]
    },
    {
      "id": "transportation_logistics",
      "name": "交运物流",
      "aliases": [
        "交通运输",
        "物流",
        "航运",
        "航空",
        "港口",
        "港务",
        "高速公路",
        "铁路",
        "供应链",
        "机场",
        "航空物流",
        "公路",
        "收费公路",
        "铁路运输"
      ],
      "children": [
        {
          "id": "express_logistics",
          "name": "快递 / 物流",
          "aliases": [
            "快递",
            "物流",
            "供应链",
            "供应链管理",
            "综合物流",
            "物流服务"
          ]
        },
        {
          "id": "shipping_port",
          "name": "航运 / 港口",
          "aliases": [
            "航运",
            "港口",
            "集运",
            "油运",
            "港务",
            "港区",
            "码头",
            "港口运营",
            "集装箱码头",
            "散杂货码头"
          ]
        },
        {
          "id": "airline_airport",
          "name": "航空 / 机场",
          "aliases": [
            "航空",
            "机场",
            "航空运输",
            "机场运营",
            "航空物流",
            "航空货运",
            "航线",
            "机场服务"
          ]
        },
        {
          "id": "railway_highway",
          "name": "铁路 / 公路",
          "aliases": [
            "铁路",
            "高速公路",
            "公路",
            "收费公路",
            "铁路运输",
            "铁路客运",
            "公路运营",
            "通行费"
          ]
        }
      ]
    },
    {
      "id": "agriculture_food",
      "name": "农业养殖",
      "aliases": [
        "农业",
        "养殖",
        "种业",
        "饲料",
        "水产饲料",
        "饲料加工"
      ],
      "children": [
        {
          "id": "pig_poultry_aquaculture",
          "name": "猪禽水产养殖",
          "aliases": [
            "生猪",
            "养鸡",
            "水产",
            "养殖"
          ]
        },
        {
          "id": "seed_planting",
          "name": "种业 / 种植",
          "aliases": [
            "种业",
            "粮食",
            "种植",
            "玉米"
          ]
        },
        {
          "id": "feed_animal_health",
          "name": "饲料 / 动保",
          "aliases": [
            "饲料",
            "动保",
            "兽药",
            "水产饲料",
            "饲料加工",
            "动物营养"
          ]
        }
      ]
    },
    {
      "id": "environmental_utilities",
      "name": "环保 / 水务固废",
      "aliases": [
        "环保",
        "环境",
        "环境治理",
        "水务",
        "固废",
        "污水处理",
        "垃圾焚烧",
        "环卫",
        "再生资源",
        "垃圾发电",
        "固废处理",
        "环保综合",
        "大气治理",
        "烟气治理",
        "环境服务",
        "资源化"
      ],
      "children": [
        {
          "id": "water_treatment",
          "name": "水务 / 污水处理",
          "aliases": [
            "水务",
            "污水处理",
            "供水",
            "污水运营",
            "自来水",
            "污水厂",
            "供排水"
          ]
        },
        {
          "id": "solid_waste_recycling",
          "name": "固废 / 再生资源",
          "aliases": [
            "固废",
            "垃圾焚烧",
            "生活垃圾",
            "危废",
            "再生资源",
            "资源回收",
            "电池回收",
            "垃圾发电",
            "固废处理",
            "垃圾处理",
            "垃圾焚烧发电",
            "危废处理",
            "资源化",
            "再生金属"
          ]
        },
        {
          "id": "environmental_engineering",
          "name": "环保工程",
          "aliases": [
            "环保工程",
            "环境服务",
            "环卫服务",
            "环卫装备",
            "烟气治理",
            "节能环保",
            "大气治理",
            "环保综合",
            "环境治理",
            "除尘",
            "烟气",
            "环境装备"
          ]
        }
      ]
    },
    {
      "id": "textile_light_industry",
      "name": "纺服轻工",
      "aliases": [
        "纺织服装",
        "轻工",
        "家居",
        "造纸",
        "包装",
        "印刷",
        "纸浆",
        "纸制品",
        "包装材料",
        "金属包装"
      ],
      "children": [
        {
          "id": "apparel_textile",
          "name": "服装 / 纺织",
          "aliases": [
            "服装",
            "纺织",
            "品牌服饰"
          ]
        },
        {
          "id": "home_light_industry",
          "name": "家居 / 轻工制造",
          "aliases": [
            "家居",
            "轻工",
            "包装",
            "包装材料",
            "金属包装",
            "纸包装",
            "消费包装"
          ]
        },
        {
          "id": "paper_printing",
          "name": "造纸 / 印刷",
          "aliases": [
            "造纸",
            "印刷",
            "纸浆",
            "纸制品",
            "包装纸",
            "文化纸"
          ]
        }
      ]
    },
    {
      "id": "commercial_retail_social_service",
      "name": "商贸零售 / 社服",
      "aliases": [
        "商贸零售",
        "零售",
        "免税",
        "旅游",
        "酒店",
        "餐饮",
        "商品市场",
        "社服",
        "旅游零售",
        "免税店",
        "小商品",
        "专业市场"
      ],
      "children": [
        {
          "id": "retail_ecommerce",
          "name": "零售 / 电商",
          "aliases": [
            "零售",
            "电商",
            "百货",
            "免税",
            "旅游零售",
            "商品市场",
            "小商品",
            "专业市场",
            "免税店",
            "小商品城",
            "商品交易市场"
          ]
        },
        {
          "id": "tourism_hotel",
          "name": "旅游 / 酒店",
          "aliases": [
            "旅游",
            "酒店",
            "景区",
            "免税店",
            "旅游服务",
            "离岛免税",
            "旅游零售",
            "旅游消费"
          ]
        },
        {
          "id": "restaurant_service",
          "name": "餐饮 / 本地生活",
          "aliases": [
            "餐饮",
            "本地生活",
            "连锁服务"
          ]
        }
      ]
    }
  ],
  "concept_alias_groups": [
    {
      "concept": "PCB / 高速PCB",
      "aliases": [
        "PCB",
        "高速PCB",
        "HDI",
        "IC载板",
        "覆铜板",
        "高速板"
      ]
    },
    {
      "concept": "MLCC / 被动元器件",
      "aliases": [
        "MLCC",
        "被动元器件",
        "电容",
        "电感",
        "射频",
        "滤波器"
      ]
    },
    {
      "concept": "CPO / 光模块",
      "aliases": [
        "CPO",
        "光模块",
        "硅光",
        "光芯片",
        "光通信模块"
      ]
    },
    {
      "concept": "液冷 / 热管理",
      "aliases": [
        "液冷",
        "热管理",
        "冷板",
        "散热",
        "数据中心液冷"
      ]
    },
    {
      "concept": "光通信基础设施",
      "aliases": [
        "光纤",
        "光缆",
        "光棒",
        "预制棒",
        "海底光缆"
      ]
    },
    {
      "concept": "火电 / 煤电",
      "aliases": [
        "火电",
        "煤电",
        "燃煤发电",
        "热电联产",
        "调峰电源"
      ]
    },
    {
      "concept": "铝电解电容材料",
      "aliases": [
        "铝电容",
        "电极箔",
        "电子铝箔",
        "高纯铝",
        "腐蚀箔"
      ]
    },
    {
      "concept": "低空经济 / eVTOL",
      "aliases": [
        "低空经济",
        "eVTOL",
        "飞行汽车",
        "通航",
        "空管"
      ]
    },
    {
      "concept": "商业航天 / 卫星互联网",
      "aliases": [
        "商业航天",
        "卫星互联网",
        "火箭",
        "卫星制造",
        "地面站"
      ]
    }
  ],
  "hot_candidate_pool": [
    {
      "name": "低空经济 / eVTOL",
      "status": "candidate",
      "promotion_need": "整机、空管、复材、电池、运营样本证据"
    },
    {
      "name": "可控核聚变",
      "status": "candidate",
      "promotion_need": "超导材料、磁体、电源、真空设备、公告或订单证据"
    },
    {
      "name": "商业航天 / 卫星互联网",
      "status": "candidate",
      "promotion_need": "卫星制造、火箭、地面站、运营服务证据"
    },
    {
      "name": "边缘AI / AI终端",
      "status": "candidate",
      "promotion_need": "终端出货、芯片/模组/应用落地证据"
    },
    {
      "name": "智能驾驶 / 车路云",
      "status": "candidate",
      "promotion_need": "感知、域控、线控底盘、路侧设备订单证据"
    }
  ],
  "advantage_badge_policy": {
    "allowed_badges": [
      "全球龙头",
      "国内前三",
      "细分冠军",
      "独家技术",
      "垄断/稀缺资源",
      "高股息",
      "国产替代核心"
    ],
    "evidence_required": "必须来自报告正文、年报、公告、公司披露或可追溯来源，不能仅凭印象给标签",
    "display_rule": "最多展示2个优势标签；证据不足显示优势待核验"
  },
  "last_optimization": {
    "source": "P0扩容80家旧报告试跑",
    "goal": "降低可规模化解决的 root_alias_not_found / child_alias_not_found 警告，减少未来全A扩容人工复核量",
    "note": "仅补充行业与子赛道通用别名，不写入单只股票定制规则。"
  }
};
