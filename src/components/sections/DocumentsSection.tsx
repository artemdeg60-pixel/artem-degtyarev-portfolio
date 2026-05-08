import { Award, Download, ExternalLink, FileImage, FileText, FileType2, Presentation, Sheet } from "lucide-react";
import { useMemo, useState } from "react";
import { documentCategories, portfolioFiles } from "../../data/siteContent";
import type { FileCategory, PortfolioFile } from "../../types/site";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

interface DocumentsSectionProps {
  showToast: (message: string) => void;
}

type ActiveCategory = (typeof documentCategories)[number];
type PreviewKind = "iframe" | "image";

interface FilePreview {
  kind: PreviewKind;
  src: string;
  note?: string;
}

export function DocumentsSection({ showToast }: DocumentsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("Все");
  const [selectedFile, setSelectedFile] = useState<PortfolioFile | null>(null);

  const filteredFiles = useMemo(() => {
    if (activeCategory === "Все") {
      return portfolioFiles;
    }

    return portfolioFiles.filter((file) => file.category === activeCategory);
  }, [activeCategory]);

  const selectedPreview = selectedFile ? getFilePreview(selectedFile) : null;

  const openFile = (file: PortfolioFile) => {
    if (!file.fileUrl) {
      showToast("Файл пока не добавлен. Замените путь в siteContent.ts.");
      return;
    }

    setSelectedFile(file);
  };

  const downloadFile = (file: PortfolioFile) => {
    if (!file.fileUrl) {
      showToast("Файл пока не добавлен. Карточка готова к замене.");
      return;
    }

    const link = document.createElement("a");
    link.href = file.fileUrl;
    link.download = `${file.title}.${file.type}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast("Скачивание началось");
  };

  return (
    <section id="documents" className="bg-graphite-50 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Документы"
              title="Файлы, артефакты и материалы проекта"
              description="Секция сделана data-driven: сюда можно добавлять PDF, DOCX, PPTX, XLSX и изображения без изменения верстки."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {documentCategories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    className={[
                      "focus-ring rounded-sm border px-4 py-3 text-sm font-semibold transition",
                      isActive
                        ? "border-graphite-950 bg-graphite-950 text-white"
                        : "border-graphite-200 bg-white text-graphite-700 hover:border-gold-500/40 hover:text-graphite-950",
                    ].join(" ")}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredFiles.map((file, index) => (
            <Reveal key={file.id} delay={Math.min(index * 0.03, 0.18)}>
              <FileCard file={file} onOpen={openFile} onDownload={downloadFile} />
            </Reveal>
          ))}
        </div>
      </div>

      <Modal isOpen={Boolean(selectedFile)} title={selectedFile?.title ?? "Документ"} onClose={() => setSelectedFile(null)}>
        {selectedFile && selectedPreview ? (
          <div className="grid gap-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm leading-7 text-graphite-600">{selectedFile.description}</p>
                {selectedPreview.note ? <p className="mt-2 text-xs leading-6 text-graphite-500">{selectedPreview.note}</p> : null}
              </div>
              <span className="w-fit shrink-0 border border-gold-500/30 bg-gold-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-700">
                {selectedFile.type}
              </span>
            </div>

            <div className="h-[68vh] overflow-hidden border border-graphite-100 bg-graphite-50">
              {selectedPreview.kind === "image" ? (
                <img src={selectedPreview.src} alt={selectedFile.title} className="h-full w-full object-contain" />
              ) : (
                <iframe src={selectedPreview.src} title={selectedFile.title} className="h-full w-full bg-white" />
              )}
            </div>
            {selectedFile.fileUrl ? (
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="secondary" onClick={() => downloadFile(selectedFile)} icon={<Download size={18} />}>
                  Скачать
                </Button>
              </div>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </section>
  );
}

function getPublicFileUrl(fileUrl: string) {
  if (/^https?:\/\//i.test(fileUrl)) {
    return fileUrl;
  }

  const cleanPath = fileUrl.replace(/^\.?\//, "");

  if (typeof window === "undefined") {
    return cleanPath;
  }

  const basePath = window.location.pathname.endsWith("/")
    ? window.location.pathname
    : `${window.location.pathname.replace(/\/[^/]*$/, "")}/`;

  return new URL(cleanPath, `${window.location.origin}${basePath}`).href;
}

function getFilePreview(file: PortfolioFile): FilePreview | null {
  if (!file.fileUrl) {
    return null;
  }

  const publicFileUrl = getPublicFileUrl(file.fileUrl);

  if (isImageType(file.type)) {
    return {
      kind: "image",
      src: publicFileUrl,
    };
  }

  if (file.type === "pdf") {
    return {
      kind: "iframe",
      src: publicFileUrl,
    };
  }

  if (isOfficeType(file.type)) {
    return {
      kind: "iframe",
      src: `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(publicFileUrl)}`,
      note: "Предпросмотр Office-документов открывается во встроенном viewer. Скачивание начнётся только по кнопке «Скачать».",
    };
  }

  return {
    kind: "iframe",
    src: publicFileUrl,
  };
}

function isImageType(type: PortfolioFile["type"]) {
  return type === "png" || type === "jpg" || type === "jpeg" || type === "webp";
}

function isOfficeType(type: PortfolioFile["type"]) {
  return type === "doc" || type === "docx" || type === "ppt" || type === "pptx" || type === "xls" || type === "xlsx";
}

function FileCard({
  file,
  onOpen,
  onDownload,
}: {
  file: PortfolioFile;
  onOpen: (file: PortfolioFile) => void;
  onDownload: (file: PortfolioFile) => void;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-graphite-100 bg-white shadow-subtle transition duration-200 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-premium">
      <div className="relative aspect-[16/10] overflow-hidden bg-graphite-900">
        {file.previewUrl ? (
          <img src={file.previewUrl} alt={`Превью: ${file.title}`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#141516,#303337)]">
            <div className="grid place-items-center gap-4 text-center">
              <div className="inline-flex size-16 items-center justify-center border border-gold-400/30 bg-white/5 text-gold-300">
                {getFileIcon(file.category)}
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">{file.type}</span>
            </div>
          </div>
        )}
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-graphite-950">{file.type}</span>
          <span className="bg-gold-500 px-3 py-1.5 text-xs font-semibold text-graphite-950">{file.category}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-graphite-950">{file.title}</h3>
          {file.status === "planned" ? (
            <span className="border border-graphite-200 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-graphite-500">
              скоро
            </span>
          ) : null}
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-graphite-500">{file.description}</p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-graphite-950 bg-graphite-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-graphite-800"
            onClick={() => onOpen(file)}
          >
            <ExternalLink size={17} />
            Открыть
          </button>
          <button
            type="button"
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-graphite-200 bg-white px-4 py-3 text-sm font-semibold text-graphite-800 transition hover:bg-graphite-50"
            onClick={() => onDownload(file)}
          >
            <Download size={17} />
            Скачать
          </button>
        </div>
      </div>
    </article>
  );
}

function getFileIcon(category: FileCategory) {
  if (category === "Презентации") {
    return <Presentation size={30} />;
  }

  if (category === "Сертификаты") {
    return <Award size={30} />;
  }

  if (category === "Таблицы") {
    return <Sheet size={30} />;
  }

  if (category === "Изображения") {
    return <FileImage size={30} />;
  }

  if (category === "Документы") {
    return <FileText size={30} />;
  }

  return <FileType2 size={30} />;
}
