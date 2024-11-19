import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CustomDialog } from "../../dialog/Dialog";

import styles from "@/app/styles/components/dialog/styles.module.css";

export const ResidenceInformationDialog: React.FC = () => {
	const router = useRouter();
	const handleContinue = useCallback(() => {
		// NOTE: Validate form and save in localstorage
		router.push("/renda");
	}, []);

	return (
		<CustomDialog
			title="Digite o endereço para receber o seu cartão"
			buttonText="Continuar"
			triggerText="Começar"
			isOpen={true}
			action={handleContinue}
		>
			<div className={styles.row}>
				<label>Seu CEP</label>
				<input type="text" placeholder="XX.XXX-XXX" />
			</div>
			<div className={styles.row}>
				<input type="text" placeholder="Seu endereço" />
			</div>
			<div className={styles.row}>
				<input type="text" placeholder="Número" />
			</div>
			<div className={styles.row}>
				<input type="text" placeholder="Complemento" />
			</div>
			<div className={styles.row}>
				<input type="text" placeholder="Bairro" />
			</div>
			<div className={styles.row}>
				<input type="text" placeholder="Cidade" />
			</div>
			<div className={styles.row}>
				<input type="text" placeholder="Estado" />
			</div>
			<div className={styles.row}>
				<select>
					<option>Situação da Propriedade</option>
					<option>Próprio quitado</option>
					<option>Próprio financiado</option>
					<option>Alugado</option>
					<option>Familiar</option>
					<option>Cedido</option>
				</select>
			</div>
		</CustomDialog>
	);
};
