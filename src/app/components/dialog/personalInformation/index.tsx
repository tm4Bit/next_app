import { useCallback } from "react";
import { CustomDialog } from "../../dialog/Dialog";

import styles from "@/app/styles/components/dialog/styles.module.css";

interface Props {
	gotoNext: (n: string) => void;
}

export const PersonalInformationDialog: React.FC<Props> = ({ gotoNext }) => {
	const handleContinue = useCallback(() => {
		// NOTE: Validate form and save in localstorage
		gotoNext("digital-info");
	}, []);

	return (
		<CustomDialog
			title=""
			buttonText="Continuar"
			triggerText="Começar"
			isOpen={false}
			action={handleContinue}
		>
			<div className={styles.row}>
				<label>Informe sua data de nascimento</label>
				<input type="date" />
			</div>
			<div className={styles.row}>
				<label>Seu nome completo</label>
				<input type="text" />
			</div>
			<div className={styles.row}>
				<label>Informe o nome da sua mãe</label>
				<input type="text" />
			</div>
		</CustomDialog>
	);
};
