const copy = {
  zh: { navProducts:'产品',navStories:'观察',navJournal:'方法',navAbout:'工作室',contact:'联系我们',eyebrow:'UI · UX · 数字产品',role:'数字产品与界面设计工作室',intro:'我们为真实的商业与生活场景设计清晰、美观且易于使用的数字产品，让策略、体验与视觉成为一个完整系统。',explore:'查看精选产品',featuredTitle:'精选产品设计',featuredIntro:'跨越健康、旅行、金融、学习与生活方式，为不同问题建立独立而一致的体验系统。',viewAllProducts:'查看全部 12 个项目 →',hp1:'女性健康与周期管理',hp2:'慢旅行计划与灵感',hp3:'个人财务与储蓄目标',hp4:'独立音乐发现体验',hp5:'女性创作者社区',hp6:'睡眠与冥想体验',storiesTitle:'设计观察',viewStories:'继续阅读 →',story1:'光如何影响界面',story1Desc:'从自然光影中提取层级、节奏与留白。',story2:'红色不只是警告',story2Desc:'探索情绪色彩在产品品牌中的表达。',story3:'让复杂变得安静',story3Desc:'用系统化方法为信息建立清晰秩序。',journalTitle:'方法',journalDesc:'关于研究、策略、交互与视觉系统的工作笔记。',readJournal:'了解设计方法',aboutTitle:'工作室',aboutDesc:'LIN UI 是一个专注数字产品的独立设计工作室。我们从研究与策略出发，完成信息架构、交互、界面与视觉系统。',knowMore:'合作咨询',momentsTitle:'灵感档案',moment1:'结构与留白',moment1Desc:'建立清晰的信息节奏',moment2:'色彩与情绪',moment2Desc:'让品牌拥有可感知的性格',moment3:'动效与反馈',moment3Desc:'赋予操作自然的回应',footerKicker:'项目合作',footerTitle:'一起创造好产品。',footerDesc:'如果你正在规划一款新产品，或希望优化现有体验，欢迎联系我们。',wechatEyebrow:'微信联系',scanTitle:'联系 LIN UI 工作室',scanDesc:'添加时请简单备注项目需求，我们会尽快回复。',scanHint:'微信扫一扫 · 商务合作'},
  en: { navProducts:'Products',navStories:'Insights',navJournal:'Process',navAbout:'Studio',contact:'Contact',eyebrow:'UI · UX · DIGITAL PRODUCT',role:'Digital Product & Interface Design Studio',intro:'We design clear, beautiful, and intuitive digital products for real business and everyday contexts—bringing strategy, experience, and visual craft into one coherent system.',explore:'View selected products',featuredTitle:'Selected Product Design',featuredIntro:'Across health, travel, finance, learning, and lifestyle, we build distinct yet coherent experience systems for different problems.',viewAllProducts:'View all 12 projects →',hp1:'Women’s health and cycle care',hp2:'Slow travel planning and inspiration',hp3:'Personal finance and savings goals',hp4:'Independent music discovery',hp5:'Community for women creators',hp6:'Sleep and meditation experience',storiesTitle:'Design Insights',viewStories:'Continue reading →',story1:'How Light Shapes Interfaces',story1Desc:'Translating natural light into hierarchy, rhythm, and space.',story2:'Red Means More Than Warning',story2Desc:'Exploring emotional color in digital product brands.',story3:'Making Complexity Feel Quiet',story3Desc:'Using systems thinking to create clarity from information.',journalTitle:'Process',journalDesc:'Working notes on research, strategy, interaction, and visual systems.',readJournal:'Explore our process',aboutTitle:'Studio',aboutDesc:'LIN UI is an independent digital product design studio. We work from research and strategy through information architecture, interaction, interface, and visual systems.',knowMore:'Start a project',momentsTitle:'Inspiration Archive',moment1:'Structure & Space',moment1Desc:'Building a clear information rhythm',moment2:'Color & Emotion',moment2Desc:'Giving brands a perceptible character',moment3:'Motion & Feedback',moment3Desc:'Making every action feel naturally responsive',footerKicker:'START A PROJECT',footerTitle:'Let’s create a better product.',footerDesc:'If you’re planning a new product or improving an existing experience, we’d love to hear from you.',wechatEyebrow:'WECHAT',scanTitle:'Contact LIN UI Studio',scanDesc:'Scan the QR code and include a short project note. We’ll reply soon.',scanHint:'Scan with WeChat · Business inquiry'}
};

let language = localStorage.getItem('lin-language') || 'zh';
const switcher = document.querySelector('.language-switch');
function setLanguage(lang) {
  language = lang; localStorage.setItem('lin-language', lang); document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.dataset.i18n; if(copy[lang][key]) el.textContent = copy[lang][key]; });
  switcher.querySelectorAll('span').forEach((el,i)=>el.classList.toggle('active', lang === (i===0?'zh':'en')));
  document.title = lang === 'zh' ? 'LIN UI DESIGN STUDIO — 数字产品与界面设计' : 'LIN UI DESIGN STUDIO — Product & Interface Design';
}
switcher.addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));
setLanguage(language);

const modal = document.querySelector('.modal');
const openModal = () => { modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('locked'); modal.querySelector('.modal-close').focus(); };
const closeModal = () => { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('locked'); };
document.querySelectorAll('[data-open-contact]').forEach(btn => btn.addEventListener('click', openModal));
document.querySelectorAll('[data-close-contact]').forEach(btn => btn.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

const menu = document.querySelector('.mobile-menu');
const menuButton = document.querySelector('.menu-button');
function setMenu(open){ menu.classList.toggle('is-open',open); menu.setAttribute('aria-hidden',String(!open)); menuButton.setAttribute('aria-expanded',String(open)); document.body.classList.toggle('locked',open); }
menuButton.addEventListener('click',()=>setMenu(true)); document.querySelector('.menu-close').addEventListener('click',()=>setMenu(false)); menu.querySelectorAll('a,button').forEach(el=>el.addEventListener('click',()=>setMenu(false)));

const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
