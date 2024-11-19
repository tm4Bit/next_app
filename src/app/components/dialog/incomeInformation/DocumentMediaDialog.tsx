import { useCallback } from "react";
import { CustomDialog } from "../../dialog/Dialog";

import styles from "@/app/styles/components/dialog/styles.module.css";

interface Props {
	gotoNext: (n: string) => void;
}

export const DocumentMediaDialog: React.FC<Props> = ({ gotoNext }) => {
	const handleContinue = useCallback(() => {
		// NOTE: Validate form and save in localstorage
		gotoNext("info");
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
				<label>Enviar foto do comprovante de renda</label>
				<input type="file" name="income-doc" />
			</div>
			<div className={styles.row}>
				<label>Selecione o tipo de comprovante</label>
				<select>
					<option>Clique e escolha</option>
					<option>Demonstrativo de rendimentos</option>
					<option>DIRF</option>
					<option>DECORE</option>
					<option>Declaração de IR</option>
					<option>Comprovante de Rendimentos Pagos</option>
					<option>Extrato pagamento do INSS</option>
				</select>
			</div>
			<div className={styles.row}>
				<label>Informe o seu rendimento mensal</label>
				<input type="text" placeholder="R$" />
			</div>
		</CustomDialog>
	);
};
