import NiceModal from "@ebay/nice-modal-react";
import ReactMarkdown from "react-markdown";
import NiceDialog from "@/components/molecules/NiceDialog";
import { projectREADMEs } from "@/assets/projectREADMEs";
import { ProjectType } from "@/types";

interface ReadmeModalProps {
  project: ProjectType;
}

const ReadmeModal = NiceModal.create(({ project }: ReadmeModalProps) => {
  return (
    <NiceDialog title="README.md">
      <ReactMarkdown>{projectREADMEs[project.title]}</ReactMarkdown>
    </NiceDialog>
  );
});

export default ReadmeModal;
