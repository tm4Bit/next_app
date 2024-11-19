import { useCallback } from "react";
import { CustomDialog } from "../../dialog/Dialog";

import styles from "@/app/styles/components/dialog/styles.module.css";

interface Props {
	gotoNext: (n: string) => void;
}

export const DigitalInfomationDialog: React.FC<Props> = ({ gotoNext }) => {
	const handleContinue = useCallback(() => {
		// NOTE: Validate form and save in localstorage
		gotoNext("additional-info");
	}, []);

	return (
		<CustomDialog
			title=""
			buttonText="Continuar"
			triggerText="Começar"
			isOpen={true}
			action={handleContinue}
		>
			<div className={styles.row}>
				<label>Informe o número do seu celular</label>
				<input type="text" placeholder="(XX) 9XXXX-XXXX" />
			</div>
			<div className={styles.row}>
				<label>Informe o seu e-mail</label>
				<input type="text" placeholder="exemplo@gmail.com" />
			</div>
		</CustomDialog>
	);
};
