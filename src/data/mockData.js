export const metrics = [
  { label: '在线 Agent', value: '14', hint: '+2 今日新增', tone: 'up' },
  { label: '活跃任务', value: '31', hint: '18 个执行中', tone: 'up' },
  { label: '今日 Token', value: '2.8M', hint: '高于均值 22%', tone: 'warn' },
  { label: '待审批', value: '4', hint: '2 项高风险写入', tone: 'danger' },
]

export const topStats = [
  { label: 'Gateway 延迟', value: '84ms' },
  { label: '上下文压力', value: '68%' },
  { label: '今日交付', value: '7' },
  { label: '异常项', value: '2' },
]

export const pipeline = [
  {
    title: '待澄清',
    count: 4,
    cards: [
      { title: '政府宣传页重构', desc: '等待品牌规范和投放要求', priority: 'High', owner: 'main', eta: 'Today' },
      { title: '招商专题页', desc: '需要补参考案例和主视觉方向', priority: 'Medium', owner: 'ops', eta: 'Tomorrow' },
    ],
  },
  {
    title: '已派发',
    count: 6,
    cards: [
      { title: '活动海报批量生成', desc: '视觉 Agent + 审校 Agent 协同', priority: 'High', owner: 'visual', eta: 'Today' },
      { title: '公众号封面组图', desc: '已进入 3 版并行输出', priority: 'Low', owner: 'design', eta: 'Today' },
    ],
  },
  {
    title: '执行中',
    count: 9,
    cards: [
      { title: '官网落地页设计', desc: 'UI 完成 72%，文案同步推进中', priority: 'High', owner: 'ui-ux-agent', eta: 'Today' },
      { title: '周报自动汇总', desc: '已接数据，等待异常值复核', priority: 'Medium', owner: 'data-agent', eta: 'Today' },
    ],
  },
  {
    title: '待交付',
    count: 5,
    cards: [
      { title: '短片镜头清单', desc: '交付物已产出，等待主控复核', priority: 'High', owner: 'main', eta: 'Today' },
      { title: '活动回顾图文版', desc: '审校完成，待发送', priority: 'Low', owner: 'ops', eta: 'Tomorrow' },
    ],
  },
]

export const agents = [
  { name: '主 Agent / 墨影', role: '总控、复核、审批决策', load: 78, area: '中枢台', status: 'Busy', score: 'S', tasks: 7 },
  { name: 'UI / UX Agent', role: '页面设计、组件重构、可视化布局', load: 63, area: '设计区', status: 'Working', score: 'A+', tasks: 5 },
  { name: '运营 Agent', role: '线索整理、日报、投放复盘', load: 41, area: '协作区', status: 'Researching', score: 'A', tasks: 4 },
  { name: '数据 Agent', role: '统计、报表、异常值监控', load: 54, area: '分析区', status: 'Syncing', score: 'A', tasks: 6 },
  { name: '审校 Agent', role: '文案质检、稿件复核、风险措辞检查', load: 35, area: '审校区', status: 'Idle', score: 'B+', tasks: 2 },
]

export const events = [
  ['main 将“招商页改版”转交给 ui-ux-agent', '1m'],
  ['visual-agent 完成 3 张海报初稿', '4m'],
  ['gateway 心跳恢复，延迟回落到 84ms', '7m'],
  ['review-agent 请求高风险写操作审批', '11m'],
  ['ops-agent 更新需求备注并同步到工作台', '16m'],
  ['data-agent 发现异常消耗峰值并发出预警', '21m'],
]

export const usageBars = [28, 42, 38, 76, 61, 92, 68, 81, 57, 63, 88, 74]

export const usageBreakdown = [
  { label: '内容生成', value: '38%' },
  { label: '网页设计', value: '26%' },
  { label: '数据处理', value: '19%' },
  { label: '文档整理', value: '17%' },
]

export const workspaceDocs = [
  { title: '品牌规范 / 政务版', type: 'Document', state: '已同步' },
  { title: '投标资料知识库', type: 'Memory', state: '可检索' },
  { title: '招商页需求清单', type: 'Task Doc', state: '待补充' },
  { title: '昨日小记摘要', type: 'Memo', state: '已生成' },
  { title: '政府合作名单', type: 'CRM Note', state: '待核验' },
  { title: '短片拍摄排期', type: 'Schedule', state: '已更新' },
]

export const approvals = [
  { title: '写入共享文档库', level: 'High Risk', owner: 'main' },
  { title: '批量覆盖旧海报素材', level: 'Medium Risk', owner: 'visual-agent' },
  { title: '同步外部数据到工作台', level: 'Review', owner: 'data-agent' },
]

export const quickActions = [
  '新建任务',
  '查看审批',
  '检查风险',
  '打开工作台',
]
