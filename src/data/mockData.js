export const metrics = [
  { label: '在线 Agent', value: '14', hint: '+2 今日新增', tone: 'up' },
  { label: '活跃任务', value: '31', hint: '18 个执行中', tone: 'up' },
  { label: '今日 Token', value: '2.8M', hint: '高于均值 22%', tone: 'warn' },
  { label: '待审批', value: '4', hint: '2 项高风险写入', tone: 'danger' },
]

export const pipeline = [
  {
    title: '待澄清',
    count: 4,
    cards: [
      { title: '政府宣传页重构', desc: '等待品牌规范和投放要求' },
      { title: '招商专题页', desc: '需要补参考案例和主视觉方向' },
    ],
  },
  {
    title: '已派发',
    count: 6,
    cards: [{ title: '活动海报批量生成', desc: '视觉 Agent + 审校 Agent 协同' }],
  },
  {
    title: '执行中',
    count: 9,
    cards: [
      { title: '官网落地页设计', desc: 'UI 完成 72%，文案同步推进中' },
      { title: '周报自动汇总', desc: '已接数据，等待异常值复核' },
    ],
  },
  {
    title: '待交付',
    count: 5,
    cards: [{ title: '短片镜头清单', desc: '交付物已产出，等待主控复核' }],
  },
]

export const agents = [
  { name: '主 Agent / 墨影', role: '总控、复核、审批决策', load: 78, area: '中枢台', status: 'Busy' },
  { name: 'UI / UX Agent', role: '页面设计、组件重构、可视化布局', load: 63, area: '设计区', status: 'Working' },
  { name: '运营 Agent', role: '线索整理、日报、投放复盘', load: 41, area: '协作区', status: 'Researching' },
  { name: '数据 Agent', role: '统计、报表、异常值监控', load: 54, area: '分析区', status: 'Syncing' },
]

export const events = [
  ['main 将“招商页改版”转交给 ui-ux-agent', '1m'],
  ['visual-agent 完成 3 张海报初稿', '4m'],
  ['gateway 心跳恢复，延迟回落到 84ms', '7m'],
  ['review-agent 请求高风险写操作审批', '11m'],
]

export const usageBars = [28, 42, 38, 76, 61, 92, 68, 81]

export const workspaceDocs = [
  { title: '品牌规范 / 政务版', type: 'Document', state: '已同步' },
  { title: '投标资料知识库', type: 'Memory', state: '可检索' },
  { title: '招商页需求清单', type: 'Task Doc', state: '待补充' },
  { title: '昨日小记摘要', type: 'Memo', state: '已生成' },
]
