import type { Bilingual } from '../config/brand'
export const bi = (zh: string, en: string): Bilingual => ({ zh, en })
export const copy = {
 nav: [bi('首页','Home'),bi('关于我','About'),bi('法律服务','Services'),bi('精选案例','Cases'),bi('客户评价','Testimonials'),bi('服务方案','Pricing'),bi('法律洞察','Insights'),bi('预约咨询','Contact')],
 anchors: ['home','aboutme','services','cases','testimonials','pricing','blogs','contact'],
 hero: bi('值得信赖的法律顾问\n陪伴企业稳健成长','Trusted Legal Counsel\nFor Growing Business'),
 purpose: bi('以明确目标\n提供有力的法律支持','Focused Representation With Purpose'),
 badge: bi('法律专业协会会员','MEMBER OF THE BAR ASSOCIATION'),
 promises: [bi('深耕法律专业','Legal Expertise'),bi('以客户为中心','Client-Focused'),bi('恪守职业操守','Ethical Representation')],
 book: bi('预约法律咨询','Book a Consultation'),
 trusted: bi('值得信赖 经验深厚 策略清晰','TRUSTED. EXPERIENCED. STRATEGIC.'),
 intro: bi('在企业与商业法律领域深耕十二余年，帮助企业管理者做出更有把握的决策。坚持务实、以解决问题为先，为科技、金融、医疗与专业服务领域提供法律支持。','With over 12 years of experience in corporate and commercial law, I help business leaders make confident decisions. Known for a no-nonsense, solution-first approach, I support clients in tech, finance, healthcare, and professional services.'),
 about: bi('为不轻言放弃的人\n坚定发声\n减少阻碍 看清方向\n让每一个案件\n都被认真对待','I STAND FOR PEOPLE WHO REFUSE TO BACK DOWN. FEWER OBSTACLES, MORE CLARITY, AND A LAWYER WHO TREATS YOUR CASE LIKE IT TRULY MATTERS.'),
 philosophy: bi('每一位客户都值得拥有有力的声音、清晰的计划，以及一位真正倾听的律师','I BELIEVE EVERY CLIENT DESERVES A STRONG VOICE, A CLEAR PLAN, AND A LAWYER WHO TRULY LISTENS.'),
 philosophyText: bi('法律不只是一份职业，更是对人、权利与未来的承诺。每一个案件都关乎切身利益，每一位客户都值得获得坦诚的指引、周密的建议和坚定的支持。','The law isn’t just a profession to me — it’s a commitment to people, their rights, and their future. Every case is personal, and every client deserves honest guidance, strategic advice, and unwavering support.'),
 serviceTitle: bi('专业深耕各领域\n让法律支持更可靠','TRUSTED EXPERTISE ACROSS EVERY AREA OF LAW WE PRACTICE'),
 serviceText: bi('凭借深入的专业知识和以客户为先的理念，为不同法律需求提供专注、务实的支持。','I provide dedicated legal support with in-depth knowledge and a client-first approach across a wide range of practice areas.'),
 caseTitle: bi('切实的成果\n更有底气的未来','REAL RESULTS,\nSTRONGER FUTURES'),
 metricTitle: bi('你值得拥有\n为你全力以赴的法律顾问','YOU DESERVE COUNSEL THAT FIGHTS FOR YOU'),
 metricText: bi('无论是个人还是企业，每一位客户都应获得同等的投入、清晰的沟通，以及以解决问题为目标的专业支持。','We believe every client, whether an individual or a business, deserves the same level of commitment, clear communication, and a results-driven approach.'),
 pricingTitle: bi('与你的需求\n相匹配的法律支持','LEGAL SUPPORT THAT FITS YOUR NEEDS'),
 pricingText: bi('选择合适的服务方案，获得所需的支持、清晰的方向与安心。','Choose a service plan designed to give you the right level of support, clarity, and peace of mind.'),
 insights: bi('最新法律洞察','LATEST INSIGHTS'),
 insightText: bi('实用的法律知识、专业建议与资源，帮助你更从容地面对生活和经营中的法律问题。','Practical legal insights, expert advice, and resources to help you navigate life’s legal challenges.'),
 contactText: bi('分享你的需求，获得适合具体情况的专业法律指引。此处仅为演示，请勿填写敏感案件资料。','Share your needs for guidance tailored to your situation. This is a demonstration; do not enter sensitive case details.'),
 demo: bi('演示表单仅进行本地校验，不发送或保存信息','Demo form: local validation only. Nothing is sent or saved.'),
 validated: bi('本地校验通过。信息未发送，也未保存。','Local validation passed. Your information has not been sent or saved.'),
 disclaimer: bi('演示内容与案例不构成法律意见，服务价格为展示示例。','Demonstration content and cases are not legal advice. Prices are illustrative.'),
 footer: bi('让法律支持更清晰有力','Clear guidance. Strong representation.'),
}
export const services = [
 { id:'business', name:bi('企业法律','BUSINESS LAW'), title:bi('企业设立与常年法律顾问','BUSINESS FORMATION & CORPORATE COUNSEL'), bullets:[bi('从设立到架构设计 从容开启事业','Start and structure your business with confidence'),bi('伴随企业成长的持续法律支持','Ongoing legal support as your company grows'),bi('合同、合规与风险管理','Contracts, compliance and risk management')], tags:[bi('企业设立','Business Formation'),bi('合同','Contracts'),bi('合规','Compliance'),bi('知识产权','Intellectual Property')], text:bi('从选择适合的企业组织形式到起草与谈判商业协议，为创业者和成熟企业提供外部法律顾问支持，识别经营中的责任与争议风险。','From selecting the right entity structure to drafting and negotiating commercial agreements, outside general counsel helps entrepreneurs and established enterprises manage liability and disputes.'), photos:[0,1] },
 { id:'family', name:bi('婚姻家庭','FAMILY LAW'), title:bi('离婚与家庭事务','DIVORCE & FAMILY MATTERS'), bullets:[bi('在艰难时刻提供有温度的指引','Compassionate guidance during difficult times'),bi('守护家庭与子女的切身利益','Protecting your family and children’s best interests'),bi('以清晰务实的方案走向未来','Clear, practical solutions for a brighter future')], tags:[bi('离婚','Divorce'),bi('子女抚养','Child Custody'),bi('扶养支持','Spousal Support'),bi('调解','Mediation')], text:bi('通过财产梳理、个性化养育安排与私密调解，帮助当事人处理复杂家庭事务，兼顾家庭福祉与隐私。','Navigate complex family disputes with equitable asset division, tailored parenting plans, and private mediation to protect family well-being and privacy.'), photos:[2,3] },
 { id:'criminal', name:bi('刑事辩护','CRIMINAL DEFENSE'), title:bi('刑事案件与权利保障','FELONY & MISDEMEANOR DEFENSE'), bullets:[bi('坚定维护合法权利与自由','Strong defense for your rights and freedom'),bi('深入分析案件 制定辩护策略','Thorough case analysis and strategic planning'),bi('在每个阶段提供专注支持','Dedicated representation at every stage')], tags:[bi('刑事辩护','Felony Defense'),bi('轻罪案件','Misdemeanors'),bi('交通违法','DUI / DWI')], text:bi('审查证据的合法性与充分性，针对事实与程序制定辩护方案，帮助当事人理解每一阶段的选择。','Investigate the facts, challenge unlawful evidence, and develop a defense strategy for each stage of state and federal proceedings.'), photos:[4,5] },
 { id:'civil', name:bi('民商事诉讼','CIVIL LITIGATION'), title:bi('商业诉讼与争议解决','COMMERCIAL LITIGATION & DISPUTE RESOLUTION'), bullets:[bi('专注应对重大商业争议','Relentless courtroom representation in high-stakes disputes'),bi('制定仲裁与和解谈判策略','Tailored arbitration and settlement negotiation strategies'),bi('维护商业资产、声誉与权利','Protecting commercial assets, reputation, and rights')], tags:[bi('商业诉讼','Commercial Litigation'),bi('合同违约','Breach of Contract'),bi('仲裁','Arbitration'),bi('上诉','Appeals')], text:bi('处理合同、合伙与信义义务争议，结合严谨研究、谈判与庭审准备，寻找适合具体案件的解决路径。','Handle contract, partnership, and fiduciary disputes through rigorous research, negotiation, and trial preparation.'), photos:[6,7] },
 { id:'property', name:bi('房地产法律','REAL ESTATE LAW'), title:bi('房产交易与土地开发','PROPERTY TRANSACTIONS & LAND DEVELOPMENT'), bullets:[bi('商业与住宅交易的全程支持','Comprehensive support for commercial and residential closings'),bi('产权、规划与审批审查','Title examinations, zoning, and municipal permit clearance'),bi('解决边界、租赁与土地争议','Decisive resolution of boundary, lease, and land disputes')], tags:[bi('商业交易','Commercial Closings'),bi('规划与土地','Zoning & Land Use'),bi('产权保障','Title Insurance')], text:bi('协助审查收购、产权、环境限制与开发审批中的法律问题，识别并管理交易风险。','Advise on acquisitions, title clearances, environmental covenants, and municipal approvals to identify and manage transaction risk.'), photos:[8,9] },
]
export const cases = [
 {title:bi('从创业走向成长','STARTUP TO SUCCESS'),text:bi('协助成长中的科技公司完成设立、合同谈判与长期法律策略规划。','Guided a growing tech company through incorporation, contract negotiation, and long-term legal strategy.'),tag:bi('企业法律 · 公司顾问','Business Law · Corporate Counsel'),photo:10},
 {title:bi('指控撤销 重启生活','CHARGES DISMISSED'),text:bi('通过证据审查与辩护，协助当事人处理重罪指控及相关记录事项。','Successfully defended a client against felony charges, securing a full dismissal and expungement.'),tag:bi('刑事辩护 · 案件撤销','Criminal Defense · Case Dismissal'),photo:4},
 {title:bi('守护家庭核心资产','HIGH-ASSET ESTATE PRESERVATION'),text:bi('保护家族企业资产，以审慎、私密的协商方式处理婚姻解除事项。','Protected family enterprise assets and negotiated amicable marital dissolution with total discretion.'),tag:bi('家庭法律 · 资产保护','Family Law · Asset Protection'),photo:11},
 {title:bi('商业审判获支持','COMMERCIAL TRIAL VICTORY'),text:bi('在复杂合伙争议中组织证据并进行庭审代理，维护当事人的合法利益。','Secured jury restitution and damages in a complex breach of fiduciary partnership dispute.'),tag:bi('民商事诉讼 · 庭审代理','Civil Litigation · Trial Verdict'),photo:12},
 {title:bi('开发审批与重大收购','ZONING & MASTER ACQUISITION'),text:bi('协助物流园项目完成开发审批、规划审查与商业交易。','Secured development approvals, zoning clearances, and closing for a commercial logistics hub.'),tag:bi('房地产 · 规划审批','Real Estate Law · Zoning Clearance'),photo:13},
 {title:bi('知识产权禁令','INTELLECTUAL PROPERTY INJUNCTION'),text:bi('申请紧急禁令，制止商标侵权并保护专有软件代码。','Obtained an emergency injunction halting trademark infringement and protecting proprietary software code.'),tag:bi('知识产权 · 商业秘密','IP Litigation · Trade Secrets'),photo:14},
 {title:bi('跨境仲裁争议解决','CROSS-BORDER ARBITRATION'),text:bi('代理跨国供应商参与国际争议解决，争取应付的里程碑款项。','Represented a multinational supplier in an international dispute, recovering withheld milestone disbursements.'),tag:bi('国际商事 · 仲裁','International Law · Arbitration'),photo:15},
]
export const articles = [
 {slug:'served-with-lawsuit',date:'2026-09-18',title:bi('收到起诉材料后 应当如何应对','What to Do When You’re Served with a Lawsuit'),photo:4,paragraphs:[bi('首先确认文件性质、送达日期和答辩期限。妥善保存全部材料，不要忽视法院通知，也不要仓促承认事实或责任。','Identify the documents, service date, and response deadline. Preserve all materials. Do not ignore court notices or rush to admit facts or liability.'),bi('整理合同、往来邮件、付款凭据和与争议有关的记录。保持原始文件完整，避免删除或修改可能相关的信息。','Organize contracts, emails, payment records, and other relevant evidence. Preserve originals and avoid deleting or changing potentially relevant information.'),bi('尽早向有相应执业资格的律师咨询，讨论管辖、答辩、和解及后续程序。具体选择取决于适用法律和案件事实。','Consult a qualified lawyer early about jurisdiction, responses, settlement, and next steps. Your choices depend on applicable law and the facts.') ]},
 {slug:'small-business-legal-steps',date:'2026-09-12',title:bi('小型企业应重视的五项法律准备','5 Legal Steps Every Small Business Should Take'),photo:1,paragraphs:[bi('选择合适的组织形式，明确所有权和决策机制。公司章程与股东协议应体现真实的合作安排。','Choose an appropriate entity structure and clarify ownership and decision-making. Governance documents should reflect the actual arrangement.'),bi('建立清晰的合同流程，重视知识产权归属与保密。关注用工、数据保护及行业合规要求，并保存完整记录。','Build a clear contracting process and address intellectual property ownership and confidentiality. Review employment, data protection, and industry compliance requirements.'),bi('定期复查风险，与专业顾问讨论业务变化对现有文件的影响。本文仅为一般性演示信息。','Review risks regularly and discuss how business changes affect existing documents. This article provides general demonstration information only.') ]},
 {slug:'criminal-investigation-rights',date:'2026-09-09',title:bi('刑事调查中 如何了解并保护自己的权利','Understanding Your Rights During a Criminal Investigation'),photo:6,paragraphs:[bi('保持冷静，确认相关人员的身份和程序性质。不同法域对讯问、搜查和获得律师协助的规定不同。','Stay calm and identify the authorities and procedure involved. Rules on questioning, searches, and access to counsel vary by jurisdiction.'),bi('不要猜测事实、签署不理解的材料或干扰调查。尽早寻求合资格律师帮助，理解自己的权利与义务。','Do not speculate about facts, sign documents you do not understand, or interfere with an investigation. Seek qualified counsel to understand your rights and duties.'),bi('本页面为模板演示，不针对具体事件提供法律建议。紧急情形应联系当地有相应资质的专业人士。','This template demonstration does not provide advice for a specific matter. For urgent situations, contact an appropriately qualified local professional.') ]},
]
export const testimonials = [
  {
    "name": "David Mitchell",
    "photo": 1,
    "rating": "5.0",
    "title": {
      "zh": "坚定支持 安心应对",
      "en": "CASE WON WITH CONFIDENCE"
    },
    "role": {
      "zh": "商业诉讼客户",
      "en": "Corporate Litigation Client"
    },
    "quote": {
      "zh": "认真倾听，清晰解释，并为更好的结果全力以赴。在整个法律过程中，我始终感到被支持，也清楚知道进展。",
      "en": "Alex listened carefully, explained everything clearly, and fought for the best outcome. I felt supported and informed throughout the entire legal process."
    }
  },
  {
    "name": "Marcus Sterling",
    "photo": 2,
    "rating": "5.0",
    "title": {
      "zh": "周密规划 守护资产",
      "en": "ASSETS SECURED FLAWLESSLY"
    },
    "role": {
      "zh": "资产保护客户",
      "en": "Asset Protection Client"
    },
    "quote": {
      "zh": "从初次咨询到最终解决，深入的策略和坚定的执行超出了我们的预期，是值得信赖的法律伙伴。",
      "en": "From the initial consultation to final resolution, the strategic depth and relentless execution exceeded every expectation. An invaluable legal partner."
    }
  },
  {
    "name": "Julian Vance",
    "photo": 3,
    "rating": "4.9",
    "title": {
      "zh": "规划争议 顺利解决",
      "en": "ZONING DISPUTE RESOLVED"
    },
    "role": {
      "zh": "商业地产客户",
      "en": "Commercial Property Client"
    },
    "quote": {
      "zh": "开发项目遭遇市政审批障碍时，精准的法律支持帮助我们推动审批，同时保留项目最初的愿景。",
      "en": "When municipal hurdles stalled our development, Alex stepped in with authoritative legal precision. We secured approvals in record time without compromising our vision."
    }
  },
  {
    "name": "Arthur Pendelton",
    "photo": 4,
    "rating": "5.0",
    "title": {
      "zh": "正义与信任 如期而至",
      "en": "JUSTICE & TRUST ATTAINED"
    },
    "role": {
      "zh": "资深顾问服务客户",
      "en": "Senior Advisory Client"
    },
    "quote": {
      "zh": "多年企业管理经验让我明白，真正的专业能力难能可贵。坚定的代理、职业操守与庭审准备令人信任。",
      "en": "Decades in corporate leadership taught me how rare true legal mastery is. This firm embodies relentless advocacy, pristine ethics, and supreme courtroom prowess."
    }
  },
  {
    "name": "Robert Hayes",
    "photo": 5,
    "rating": "5.0",
    "title": {
      "zh": "遗产事务 更加清晰",
      "en": "ESTATE PROBATE CLARITY"
    },
    "role": {
      "zh": "家庭遗产客户",
      "en": "Family Estate Client"
    },
    "quote": {
      "zh": "既有同理心，也有敏锐的判断与及时的回应。在压力最大的时期，专业支持让家人安心许多。",
      "en": "Compassionate, razor-sharp, and remarkably responsive. In the most stressful season of my life, having Alex in our corner gave my family absolute peace of mind."
    }
  },
  {
    "name": "Eleanor Vance",
    "photo": 6,
    "rating": "5.0",
    "title": {
      "zh": "捍卫专利与知识产权",
      "en": "PATENTS & IP DEFENDED"
    },
    "role": {
      "zh": "Apex Tech 管理合伙人",
      "en": "Managing Partner, Apex Tech"
    },
    "quote": {
      "zh": "跨境知识产权争议曾让人无所适从。清晰的策略帮助我们保护核心技术与企业价值。",
      "en": "Navigating cross-border intellectual property disputes was overwhelming until Alex took command. The strategic insight saved our proprietary technology and millions in value."
    }
  },
  {
    "name": "Gregory Bennett",
    "photo": 7,
    "rating": "5.0",
    "title": {
      "zh": "并购交易 平稳完成",
      "en": "ACQUISITION CLOSED SEAMLESSLY"
    },
    "role": {
      "zh": "首席执行官",
      "en": "Chief Executive Officer"
    },
    "quote": {
      "zh": "多主体合并得到严谨处理，从合同条款、监管合规到交割节点，每一步都清楚有序。",
      "en": "Alex handled our multi-entity merger with absolute precision. Every contract covenant, regulatory compliance item, and closing milestone was flawless."
    }
  },
  {
    "name": "Sophia Laurent",
    "photo": 8,
    "rating": "5.0",
    "title": {
      "zh": "信托资产 得到守护",
      "en": "TRUST ASSETS SAFEGUARDED"
    },
    "role": {
      "zh": "私人财富受托人",
      "en": "Private Wealth Trustee"
    },
    "quote": {
      "zh": "诚实、审慎且重视隐私。跨代家庭资产规划的每个细节都解释得清楚、处理得周全。",
      "en": "Unmatched integrity and discretion. Alex structured our multi-generational family estate plan with clarity and meticulous attention to detail."
    }
  },
  {
    "name": "Brandon Cole",
    "photo": 9,
    "rating": "4.9",
    "title": {
      "zh": "争议化解 有力有据",
      "en": "DISPUTE WON DECISIVELY"
    },
    "role": {
      "zh": "商业承包商",
      "en": "Commercial Contractor"
    },
    "quote": {
      "zh": "在重大分包合同诉讼中，团队系统地分析对方主张，并争取到有利的简易判决。",
      "en": "In a high-stakes subcontractor litigation, Alex dismantled opposing arguments systematically and achieved a favorable summary judgment."
    }
  },
  {
    "name": "Victoria Chen",
    "photo": 10,
    "rating": "5.0",
    "title": {
      "zh": "创业股权 清晰规划",
      "en": "VENTURE EQUITY STRUCTURED"
    },
    "role": {
      "zh": "初创企业联合创始人",
      "en": "Startup Co-Founder"
    },
    "quote": {
      "zh": "从企业设立到 A 轮融资文件的起草，专业建议始终是我们作出重要决定时的可靠支持。",
      "en": "From corporate incorporation to our Series A legal drafting, Alex has been an indispensable counselor whose advice we trust without hesitation."
    }
  }
]
export const plans = [
 {name:bi('单次法律咨询','ONE TIME CONSULTATION'),price:bi('按次咨询','Consultation'),text:bi('为你的法律问题提供清晰指引，适合需要就具体事项获得专业建议的个人或企业。','Get clear guidance for your legal questions. Perfect for individuals or businesses who need expert advice on a specific matter.'),features:[bi('60 分钟私密咨询','60-minute private consultation'),bi('针对具体问题的专业建议','Expert legal advice on your specific issue'),bi('案件评估与后续步骤','Case evaluation and next steps'),bi('支持线下或线上沟通','Available in-person or online'),bi('咨询后无需承诺聘用','No obligation to hire afterward')]},
 {name:bi('持续法律支持','Ongoing Legal Support'),price:bi('$499 / 月',' $499 / month'),text:bi('为个人与企业提供持续的法律支持，及时获得专业指引。价格仅为模板展示示例。','Ongoing legal support to keep you and your business protected. Ideal for those who need continuous legal guidance.'),features:[bi('邮件与电话咨询支持','Unlimited email & phone support'),bi('合同审查与法律文件指引','Contract review and legal document guidance'),bi('持续法律咨询','Ongoing legal consultations'),bi('24 小时内优先响应','Priority response within 24 hours'),bi('月度法律资讯与合规提醒','Monthly legal updates and compliance reminders'),bi('其他服务优惠费率','Discounted rates for additional services'),bi('支持暂停或取消','Flexible pause or cancel anytime')]},
]
