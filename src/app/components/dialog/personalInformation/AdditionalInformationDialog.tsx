import { useCallback } from "react";
import { CustomDialog } from "../../dialog/Dialog";

import styles from "@/app/styles/components/dialog/styles.module.css";
import { useRouter } from "next/navigation";

export const AdditionalInformationDialog: React.FC = () => {
	const router = useRouter();
	const handleContinue = useCallback(() => {
		// NOTE: Validate form and save in localstorage
		// NOTE: Process form information
		router.push("/identidade");
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
				<label>Selecione seu gênero</label>
				<select>
					<option>Clique e escolha</option>
					<option>Feminino</option>
					<option>Masculino</option>
				</select>
			</div>
			<div className={styles.row}>
				<label>Qual o seu estado civil?</label>
				<select>
					<option>Clique e escolha</option>
					<option>Solteiro</option>
					<option>Solteiro</option>
					<option>Casado</option>
					<option>Viúvo</option>
					<option>Separado</option>
					<option>Divorciado</option>
				</select>
			</div>
			<div className={styles.row}>
				<label>Você vive em união estável?</label>
				<select>
					<option>Clique e escolha</option>
					<option>Sim</option>
					<option>Não</option>
				</select>
			</div>
			<div className={styles.row}>
				<label>Qual é o seu grau de escolaridade?</label>
				<select>
					<option>Clique e escolha</option>
					<option>Analfabeto</option>
					<option>Ensino fundamental</option>
					<option>Ensino médio</option>
					<option>Superior completo</option>
					<option>Pós-graduado</option>
					<option>Mestrado</option>
					<option>Doutorado</option>
				</select>
			</div>
		</CustomDialog>
	);
};
