import type { Metric, NavItem, PortfolioFile, ProjectData, SkillTab } from "../types/site";

export const navItems: NavItem[] = [
  { id: "home", label: "Главная" },
  { id: "about", label: "Обо мне" },
  { id: "skills", label: "Навыки" },
  { id: "project", label: "Проект" },
  { id: "documents", label: "Документы" },
  { id: "contacts", label: "Контакты" },
];

export const personal = {
  name: "Артём Дегтярев",
  role: "Руководитель проектов",
  positioning: "Junior Project Manager | Project Coordinator | AI / Digital Project Management",
  location: "Москва, Россия",
  email: "artemdeg60@gmail.com",
  phone: "+7 (929) 781-62-46",
  telegramHandle: "@Naqiho221",
  telegramUrl: "https://t.me/Naqiho221",
  photoUrl: "profile-photo.png",
};

export const heroChips = [
  "Project Management",
  "AI Tools",
  "Digital Projects",
  "Process Optimization",
  "Team Coordination",
];

export const heroHighlights = [
  { value: "84", label: "рабочих дня в флагманском проекте" },
  { value: "+40%", label: "рост выручки точки за 4 месяца" },
  { value: "7", label: "человек в стабильной команде" },
];

export const aboutMetrics: Metric[] = [
  { value: "+40%", label: "рост выручки точки за 4 месяца" },
  { value: "120%", label: "выполнение плана продаж" },
  { value: "7", label: "человек в стабильной команде" },
  { value: "-30%", label: "снижение текучести персонала" },
];

export const achievements = [
  "увеличил выручку точки на 40% за 4 месяца",
  "обеспечил выполнение плана продаж на уровне 120%",
  "повысил средний чек на 15%",
  "повысил конверсию в продажу на 20%",
  "снизил текучесть персонала на 30%",
  "сформировал стабильную команду из 7 человек",
  "сократил количество клиентских претензий на 30%",
  "оптимизировал операционные процессы точки, сократив срок решения внутренних задач на 15%",
];

export const education = [
  "Саратовский национальный исследовательский государственный университет имени Н.Г. Чернышевского, Институт физики, «Управление качеством», высшее ожидается в 2029",
  "Академия гражданской защиты МЧС России, «Информационные системы и технологии (инженер)», неоконченное высшее",
  "Нетология: Agile / Scrum / Kanban / Lean",
  "Синергия: Менеджер проектов",
];

export const certificates = [
  "Excel для анализа данных",
  "Soft Skills для проектного управления",
  "Инструменты ИИ для работы менеджера проекта",
  "Методологии управления проектами",
  "Проектная документация",
  "Работа менеджера проекта с продуктом",
  "Инициация и планирование проекта",
  "Контроль реализации и завершение проекта",
  "Управление командой проекта",
];

export const skillTabs: SkillTab[] = [
  {
    id: "competencies",
    title: "Компетенции",
    description: "Практические зоны ответственности на стыке команды, процесса, сроков и результата.",
    items: [
      "управление проектами и координация проектной деятельности",
      "планирование, декомпозиция и контроль исполнения задач",
      "управление сроками, рисками, ресурсами и коммуникациями",
      "сбор, структурирование и формализация требований",
      "ведение проектной документации и отчетности",
      "управление бэклогом и изменениями",
      "межфункциональная координация команд",
      "организация рабочих встреч и контроль выполнения договоренностей",
      "управление командой и развитие сотрудников",
      "управление конфликтами",
      "контроль KPI и качества сервиса",
    ],
  },
  {
    id: "tools",
    title: "Инструменты",
    description: "Рабочий стек для планирования, документации, совместной работы и визуализации.",
    items: ["Jira", "Notion", "Miro", "Asana", "Bitrix24", "1C", "MS Project", "Excel", "Figma", "Canva", "Gamma", "Trello"],
  },
  {
    id: "methodologies",
    title: "Методологии",
    description: "Подходы и артефакты, которые помогают держать структуру проекта прозрачной.",
    items: ["Agile", "Scrum", "Kanban", "Waterfall", "Lean", "WBS", "RACI", "roadmap", "User Story", "CJM", "JTBD", "SDLC basics"],
  },
  {
    id: "ai",
    title: "AI-инструменты",
    description: "Инструменты ИИ для ускорения анализа, подготовки материалов и проектной коммуникации.",
    items: ["ChatGPT", "Claude", "Gemini", "Microsoft Copilot", "Perplexity", "Grok", "Midjourney", "ElevenLabs", "Stable Diffusion"],
  },
];

export const softSkills = [
  "сильная коммуникация",
  "лидерство",
  "управление стейкхолдерами",
  "командная работа",
  "адаптивность",
  "критическое мышление",
  "решение проблем",
  "управление конфликтами",
  "ответственность за результат",
  "умение работать в условиях изменений",
];

export const projectData: ProjectData = {
  title: "Разработка мобильного приложения для фитнес-центра",
  duration: "84 рабочих дня",
  intro:
    "Флагманский учебно-практический проект по подготовке цифрового продукта для фитнес-центра: от целей и требований до бюджета, рисков, плана реализации и документации для внедрения.",
  goals: [
    "цифровизация клиентского сервиса фитнес-центра",
    "рост удержания и вовлечённости клиентов",
    "увеличение продаж дополнительных услуг",
    "снижение нагрузки на администраторов",
  ],
  tasks: [
    "анализ потребностей клиентов фитнес-центра",
    "формирование требований и ТЗ",
    "проектирование пользовательских сценариев и интерфейса",
    "разработка функционала записи на тренировки и управления абонементом",
    "интеграция уведомлений и дополнительных сервисов",
    "тестирование, релиз и внедрение приложения в работу фитнес-центра",
  ],
  outcomes: [
    "разработана концепция мобильного приложения для фитнес-центра",
    "сформированы требования к продукту и пользовательские сценарии",
    "подготовлены ключевые проектные артефакты и план реализации",
    "составлены бюджет, риски и показатели эффективности проекта",
    "определена бизнес-модель и экономическая целесообразность решения",
    "подготовлена документация для запуска и внедрения приложения",
  ],
  role: [
    "координация проекта",
    "структурирование требований",
    "декомпозиция задач",
    "подготовка проектной документации",
    "проработка пользовательских сценариев",
    "логика реализации",
    "планирование и проектные артефакты",
    "согласование бизнес-потребностей и логики реализации",
  ],
  artifacts: [
    "паспорт проекта",
    "SMART-цели",
    "границы проекта",
    "ИСР / WBS",
    "диаграмма Ганта",
    "бюджет проекта",
    "сроки и план реализации",
    "проектная документация",
  ],
  metrics: [
    { value: "84", label: "рабочих дня длительность проекта" },
    { value: "4", label: "ключевые цели продукта" },
    { value: "8", label: "подготовленных артефактов" },
    { value: "6", label: "блоков проектных задач" },
  ],
  process: ["Инициация", "Требования", "Сценарии", "План", "Бюджет", "Внедрение"],
  details: [
    {
      title: "О проекте",
      content:
        "Проект сфокусирован на подготовке мобильного приложения как цифрового сервиса для клиентов фитнес-центра. Акцент сделан на понятной логике продукта, управляемом плане работ и документации, достаточной для запуска реализации.",
      items: [
        "зафиксирована продуктовая идея и бизнес-логика решения",
        "описаны пользовательские сценарии и требования",
        "подготовлены документы для планирования и контроля проекта",
      ],
    },
    {
      title: "Моя роль",
      content:
        "Моя зона ответственности была связана с координацией, структурой и связью между бизнес-задачей и будущей реализацией.",
      items: [
        "декомпозиция задач и логика реализации",
        "формализация требований и проектных артефактов",
        "контроль целостности целей, сроков, бюджета и результата",
      ],
    },
    {
      title: "Результат",
      content:
        "Итогом стал не заявленный промышленный запуск, а подготовленный проект внедрения: концепция, требования, экономическая логика и документы, с которыми можно переходить к реализации.",
      items: [
        "концепция продукта и сценарии использования",
        "план реализации, сроки, бюджет и артефакты",
        "описание эффекта для клиентов, администраторов и бизнеса",
      ],
    },
  ],
};

export const portfolioFiles: PortfolioFile[] = [
  {
    id: "resume",
    title: "Резюме",
    description: "Актуальная версия резюме Артёма Дегтярева.",
    type: "doc",
    category: "Документы",
    fileUrl: "files/resume/artem-degtyarev-resume.doc",
    status: "available",
  },
  {
    id: "project-presentation",
    title: "Презентация проекта",
    description: "Место для презентации флагманского проекта и ключевых выводов.",
    type: "pptx",
    category: "Презентации",
    status: "planned",
  },
  {
    id: "project-screenshots",
    title: "Скриншоты проекта",
    description: "Будущий блок визуальных материалов, интерфейсов или прототипов.",
    type: "png",
    category: "Изображения",
    status: "planned",
  },
  {
    id: "certificate-excel-data-analysis",
    title: "Excel для анализа данных",
    description: "PDF-сертификат по Excel для анализа данных.",
    type: "pdf",
    category: "Сертификаты",
    fileUrl: "files/certificates/excel-data-analysis.pdf",
    status: "available",
  },
  {
    id: "certificate-excel-data-analysis-1",
    title: "Excel для анализа данных (1)",
    description: "Дополнительный PDF-файл сертификата по Excel для анализа данных.",
    type: "pdf",
    category: "Сертификаты",
    fileUrl: "files/certificates/excel-data-analysis-1.pdf",
    status: "available",
  },
  {
    id: "certificate-soft-skills",
    title: "Soft Skills для проектного управления",
    description: "PDF-сертификат по гибким навыкам для проектного управления.",
    type: "pdf",
    category: "Сертификаты",
    fileUrl: "files/certificates/soft-skills-project-management.pdf",
    status: "available",
  },
  {
    id: "certificate-initiation-planning",
    title: "Инициация и планирование проекта",
    description: "PDF-сертификат по инициации и планированию проекта.",
    type: "pdf",
    category: "Сертификаты",
    fileUrl: "files/certificates/project-initiation-planning.pdf",
    status: "available",
  },
  {
    id: "certificate-ai-tools",
    title: "Инструменты ИИ для работы менеджера проекта",
    description: "PDF-сертификат по применению AI-инструментов в работе менеджера проекта.",
    type: "pdf",
    category: "Сертификаты",
    fileUrl: "files/certificates/ai-tools-project-manager.pdf",
    status: "available",
  },
  {
    id: "certificate-control-closure",
    title: "Контроль реализации и завершение проекта",
    description: "PDF-сертификат по контролю реализации и завершению проекта.",
    type: "pdf",
    category: "Сертификаты",
    fileUrl: "files/certificates/project-control-closure.pdf",
    status: "available",
  },
  {
    id: "certificate-methodologies",
    title: "Методологии управления проектами",
    description: "PDF-сертификат по методологиям управления проектами.",
    type: "pdf",
    category: "Сертификаты",
    fileUrl: "files/certificates/project-management-methodologies.pdf",
    status: "available",
  },
  {
    id: "certificate-project-documentation",
    title: "Проектная документация",
    description: "PDF-сертификат по проектной документации.",
    type: "pdf",
    category: "Сертификаты",
    fileUrl: "files/certificates/project-documentation-certificate.pdf",
    status: "available",
  },
  {
    id: "certificate-product-work",
    title: "Работа менеджера проекта с продуктом",
    description: "PDF-сертификат по работе менеджера проекта с продуктом.",
    type: "pdf",
    category: "Сертификаты",
    fileUrl: "files/certificates/project-manager-product-work.pdf",
    status: "available",
  },
  {
    id: "certificate-team-management",
    title: "Управление командой проекта",
    description: "PDF-сертификат по управлению командой проекта.",
    type: "pdf",
    category: "Сертификаты",
    fileUrl: "files/certificates/project-team-management.pdf",
    status: "available",
  },
  {
    id: "certificate-introduction",
    title: "Введение в управление проектами",
    description: "PDF-сертификат по введению в управление проектами.",
    type: "pdf",
    category: "Сертификаты",
    fileUrl: "files/certificates/project-management-introduction.pdf",
    status: "available",
  },
  {
    id: "project-passport",
    title: "Паспорт проекта",
    description: "Структурированный паспорт проекта мобильного приложения.",
    type: "xlsx",
    category: "Таблицы",
    fileUrl: "files/project/project-passport.xlsx",
    status: "available",
  },
  {
    id: "gantt",
    title: "Диаграмма Ганта",
    description: "План-график проекта с этапами и сроками реализации.",
    type: "xlsx",
    category: "Таблицы",
    fileUrl: "files/project/gantt.xlsx",
    status: "available",
  },
  {
    id: "budget",
    title: "Бюджет проекта",
    description: "Документ с бюджетом проекта и финансовой структурой.",
    type: "docx",
    category: "Документы",
    fileUrl: "files/project/budget.docx",
    status: "available",
  },
  {
    id: "scope",
    title: "Границы проекта",
    description: "Описание границ проекта, допущений и управляемого объёма работ.",
    type: "docx",
    category: "Документы",
    fileUrl: "files/project/scope.docx",
    status: "available",
  },
  {
    id: "wbs",
    title: "ИСР / WBS",
    description: "Иерархическая структура работ для декомпозиции проекта.",
    type: "docx",
    category: "Документы",
    fileUrl: "files/project/wbs.docx",
    status: "available",
  },
  {
    id: "timeline",
    title: "Сроки проекта",
    description: "Документ по срокам и логике реализации проекта.",
    type: "docx",
    category: "Документы",
    fileUrl: "files/project/timeline.docx",
    status: "available",
  },
  {
    id: "smart",
    title: "SMART-цели",
    description: "Формализация целей проекта по SMART-подходу.",
    type: "docx",
    category: "Документы",
    fileUrl: "files/project/smart.docx",
    status: "available",
  },
  {
    id: "process-documentation",
    title: "Проектная документация",
    description: "PDF-материал из набора проектных артефактов, открывается в модальном просмотре.",
    type: "pdf",
    category: "Документы",
    fileUrl: "files/project/process-documentation.pdf",
    status: "available",
  },
];

export const documentCategories = ["Все", "Документы", "Сертификаты", "Презентации", "Таблицы", "Изображения"] as const;
