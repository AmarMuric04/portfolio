import NiceModal from "@ebay/nice-modal-react";
import ReactMarkdown from "react-markdown";

import { Modal } from "@/components/shared";

export const ReadmeModal = NiceModal.create(
	({ markdown }: { markdown: string }) => {
		return (
			<Modal title="README.md">
				<ReactMarkdown>{markdown}</ReactMarkdown>
			</Modal>
		);
	},
);
