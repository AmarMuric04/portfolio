import NiceModal from "@ebay/nice-modal-react";

import { WORK } from "@/assets";

import { Modal } from "../Modal";

export const WorkThoughtsModal = NiceModal.create(
  ({ project }: { project: (typeof WORK)[number] }) => {
    const projectLogo =
      "/" + project.title.replace(" ", "").toLowerCase() + "-logo.png";

    return (
      <Modal title="My Thoughts on this project">
        <div className="flex flex-col-reverse lg:flex-row items-start w-full">
          <div>
            <h1 className="theme-title-text font-semibold text-lg mb-4">
              {project.title}
            </h1>
            <p className="xl:max-w-[80%]">{project.myThoughts}</p>
          </div>
          <img
            className="w-[10rem] object-contain opacity-50 mb-8"
            alt={`${project.title} logo`}
            src={projectLogo}
          />
        </div>
      </Modal>
    );
  }
);
