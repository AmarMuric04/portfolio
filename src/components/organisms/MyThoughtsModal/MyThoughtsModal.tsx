import NiceModal from "@ebay/nice-modal-react";
import NiceDialog from "@/components/molecules/NiceDialog";
import { ProjectType } from "@/types";

interface MyThoughtsModalProps {
  project: ProjectType;
}

const MyThoughtsModal = NiceModal.create(({ project }: MyThoughtsModalProps) => {
  const logo = `/${project.title.toLowerCase().replace(" ", "")}-logo.png`;

  return (
    <NiceDialog title="My Thoughts on this project">
      <div className="flex w-full flex-col-reverse items-start lg:flex-row">
        <div>
          <h1 className="mb-4 text-lg font-semibold text-foreground">
            {project.title}
          </h1>
          <p className="xl:max-w-[80%]">{project.myThoughts}</p>
        </div>

        <img
          className="mb-8 w-[10rem] object-contain opacity-50"
          src={logo}
          alt={`${project.title} logo`}
        />
      </div>
    </NiceDialog>
  );
});

export default MyThoughtsModal;
