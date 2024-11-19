import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CustomDialog } from "../../dialog/Dialog";

import styles from "@/app/styles/components/dialog/styles.module.css";

export const DocumentMediaDialog: React.FC = () => {
	const router = useRouter();

	const handleContinue = useCallback(() => {
		// NOTE: Validate form and save in localstorage
		router.push("/residencia");
	}, []);

	return (
		<CustomDialog
			title="Enviar fotos do documento"
			buttonText="Continuar"
			triggerText="Começar"
			isOpen={true}
			action={handleContinue}
		>
			<div className={styles.row}>
				<label>Frente do documento</label>
				<input type="file" name="doc-front" />
			</div>
			<div className={styles.row}>
				<label>Verso do documento</label>
				<input type="file" name="doc-front" />
			</div>
		</CustomDialog>
	);
};
