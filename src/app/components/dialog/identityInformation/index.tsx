import { useCallback } from "react";
import { CustomDialog } from "../../dialog/Dialog";

import styles from "@/app/styles/components/dialog/styles.module.css";

interface Props {
	gotoNext: (n: string) => void;
}

export const DocumentInformationDialog: React.FC<Props> = ({ gotoNext }) => {
	const handleContinue = useCallback(() => {
		// NOTE: Validate form and save in localstorage
		gotoNext("instructions");
	}, []);

	return (
		<CustomDialog
			title="Selecione o tipo de documento a enviar"
			buttonText="Continuar"
			triggerText="Começar"
			isOpen={false}
			action={handleContinue}
		>
			<div className={styles.radioRow}>
				<label>RG</label>
				<input type="radio" name="doc" />
			</div>
			<div className={styles.radioRow}>
				<label>CNH</label>
				<input type="radio" name="doc" />
			</div>
			<div className={styles.row}>
				<label>Digite o número do RG</label>
				<input type="text" />
			</div>
			<div className={styles.row}>
				<label>Data de emissão do RG</label>
				<input type="date" />
			</div>
			<div className={styles.row}>
				<label>Orgão emissor</label>
				<select>
					<option>Clique e escolha</option>
					<option>SSP</option>
					<option>DETRAN</option>
					<option>DGPC</option>
					<option>DIC</option>
					<option>GEJSP</option>
					<option>IFP</option>
				</select>
			</div>
			<div className={styles.row}>
				<label>UF de emissão</label>
				<select>
					<option value="AC">Acre</option>
					<option value="AL">Alagoas</option>
					<option value="AP">Amapá</option>
					<option value="AM">Amazonas</option>
					<option value="BA">Bahia</option>
					<option value="CE">Ceará</option>
					<option value="DF">Distrito Federal</option>
					<option value="ES">Espírito Santo</option>
					<option value="GO">Goiás</option>
					<option value="MA">Maranhão</option>
					<option value="MT">Mato Grosso</option>
					<option value="MS">Mato Grosso do Sul</option>
					<option value="MG">Minas Gerais</option>
					<option value="PA">Pará</option>
					<option value="PB">Paraíba</option>
					<option value="PR">Paraná</option>
					<option value="PE">Pernambuco</option>
					<option value="PI">Piauí</option>
					<option value="RJ">Rio de Janeiro</option>
					<option value="RN">Rio Grande do Norte</option>
					<option value="RS">Rio Grande do Sul</option>
					<option value="RO">Rondônia</option>
					<option value="RR">Roraima</option>
					<option value="SC">Santa Catarina</option>
					<option value="SP">São Paulo</option>
					<option value="SE">Sergipe</option>
					<option value="TO">Tocantins</option>
				</select>
			</div>
		</CustomDialog>
	);
};
