import CVPreviewModerna from "./CVPreviewModerna";
import CVPreviewMinimalista from "./CVPreviewMinimalista";
import CVPreviewColorida from "./CVPreviewColorida";
import CVPreviewClasica from "./CVPreviewClasica";

const templates = {
  moderna: CVPreviewModerna,
  minimalista: CVPreviewMinimalista,
  colorida: CVPreviewColorida,
  clasica: CVPreviewClasica,
};

export default function CVPreview({ cvData }) {
  const Template = templates[cvData.plantilla] || CVPreviewClasica;
  return (
    <div id="cv-preview" className="p-4 bg-white shadow-sm rounded">
      <Template cvData={cvData} />
    </div>
  );
}
