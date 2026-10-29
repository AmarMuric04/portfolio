import NiceModal from "@ebay/nice-modal-react";
import ReactMarkdown from "react-markdown";

import { Modal } from "../Modal";

export const READMEmdModal = NiceModal.create(
	({ markdown }: { markdown: string }) => {
		return (
			<Modal title="README.md">
				<ReactMarkdown>{markdown}</ReactMarkdown>
			</Modal>
		);
	},
);
