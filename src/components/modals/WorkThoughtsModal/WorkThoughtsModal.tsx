import NiceModal from "@ebay/nice-modal-react";

import type { WORK } from "@/assets";
import { Modal } from "@/components/shared";

const WorkThoughtsModal = NiceModal.create<{
	project: (typeof WORK)[number];
}>(({ project }) => {
	return (
		<Modal title="My Thoughts on this project">
			<div className="flex w-full flex-col-reverse items-start lg:flex-row">
				<div>
					<h1 className="theme-title-text mb-4 text-lg font-semibold">
						{project.title}
					</h1>

					<p className="xl:max-w-[80%]">{project.myThoughts}</p>
				</div>

				<img
					className="mb-8 w-[10rem] object-contain opacity-50"
					src={`/${project.title.replace(" ", "").toLowerCase()}-logo.png`}
					alt={`${project.title} logo`}
				/>
			</div>
		</Modal>
	);
});

export { WorkThoughtsModal };
