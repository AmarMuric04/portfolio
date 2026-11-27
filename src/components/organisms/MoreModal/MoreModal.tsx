import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { GithubSVG, WorldSVG } from "@/assets/svgs";
import NiceDialog from "@/components/molecules/NiceDialog";
import ProjectStatus from "@/components/molecules/ProjectStatus";
import ProjectTech from "@/components/molecules/ProjectTech";
import ActionButton from "@/components/atoms/ActionButton";
import MyThoughtsModal from "@/components/organisms/MyThoughtsModal";
import { ProjectType } from "@/types";

interface MoreModalProps {
  project: ProjectType;
}

const MoreModal = NiceModal.create(({ project }: MoreModalProps) => {
  const modal = useModal();

  const openMyThoughts = () => {
    modal.hide();
    NiceModal.show(MyThoughtsModal, { project });
  };

  return (
    <NiceDialog title="More Information">
      <section className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-lg font-semibold text-foreground">
          {project.title}
        </h1>

        <div className="flex gap-4">
          <ProjectStatus status={project.status} />
          {project.github && (
            <a target="_blank" rel="noopener noreferrer" href={project.github}>
              <GithubSVG />
            </a>
          )}
          {project.website && (
            <a target="_blank" rel="noopener noreferrer" href={project.website}>
              <WorldSVG />
            </a>
          )}
        </div>
      </section>

      <section className="flex flex-col items-start xl:w-2/3">
        <strong>Description</strong>
        <em>"{project.content}"</em>

        <ActionButton action={openMyThoughts} classes="my-4 px-3">
          My thoughts on this project
        </ActionButton>

        <strong>Duration</strong>
        <p className="mb-4">{project.duration}</p>

        <strong>Challenge I overcame during this project</strong>
        <p className="mb-4">{project.challenges}</p>

        <strong>Key features of this project</strong>
        <ol className="mb-4">
          {project.keyFeatures.map((feature, index) => (
            <li key={feature + project.title}>
              <pre className="whitespace-pre-wrap">
                {index + 1}. {feature}
              </pre>
            </li>
          ))}
        </ol>

        <strong>
          Things I've considered adding to the project in the future
        </strong>
        <ol className="mb-4">
          {project.futurePlans.map((plan, index) => (
            <li key={plan + project.title}>
              <pre className="whitespace-pre-wrap">
                {index + 1}. {plan}
              </pre>
            </li>
          ))}
        </ol>

        <strong>My contribution to the project</strong>
        <p className="mb-4">{project.contributions}</p>

        <strong>Key thing I learned during this project</strong>
        <p className="mb-4">{project.learningOutcomes}</p>

        <strong>How I chose to deploy this project</strong>
        <p className="mb-4">{project.deployment}</p>

        <strong>Accessibility</strong>
        <p className="mb-4">{project.accessibility}</p>

        <strong>Technologies used</strong>
        <ProjectTech techs={project.techs} />
      </section>
    </NiceDialog>
  );
});

export default MoreModal;
