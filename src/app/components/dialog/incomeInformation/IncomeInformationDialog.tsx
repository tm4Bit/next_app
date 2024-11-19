import { useCallback } from "react";
import { CustomDialog } from "../../dialog/Dialog";

import styles from "@/app/styles/components/dialog/styles.module.css";
import { useRouter } from "next/navigation";

export const IncomeInformationDialog: React.FC = () => {
	const router = useRouter();
	const handleContinue = useCallback(() => {
		// NOTE: Validate form and save in localstorage
		// NOTE: Process form information
		router.push("/selfie");
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
				<label>Digite o mês e ano da emissão do comprovante de renda</label>
				<input type="date" />
			</div>
			<div className={styles.row}>
				<label>Digite o mês e ano da emissão do comprovante de renda</label>
				<input type="date" />
			</div>
			<div className={styles.row}>
				<label>Qual é a sua profissão?</label>
				<select>
					<option>Clique e escolha </option>
					<option>Agente político</option>
					<option>Aposentado ou pensionista</option>
					<option>Aprendiz</option>
					<option>Atividade sem remuneração</option>
					<option>Agrônomo</option>
				</select>
			</div>
			<div className={styles.row}>
				<label>Selecione origem da renda</label>
				<select>
					<option>Clique e escolha </option>
					<option>Assalariado</option>
					<option>CLT</option>
					<option>Rendimentos</option>
					<option>Profissional autônomo</option>
					<option>MEI</option>
				</select>
			</div>
		</CustomDialog>
	);
};
