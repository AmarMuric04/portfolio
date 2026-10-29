import NiceModal from "@ebay/nice-modal-react";
import ReactMarkdown from "react-markdown";

import { Modal } from "@/components/shared";

const ReadmeModal = NiceModal.create<{ markdown?: string }>(({ markdown }) => {
	return (
		<Modal title="README.md">
			<ReactMarkdown>{markdown}</ReactMarkdown>
		</Modal>
	);
});

export { ReadmeModal };
