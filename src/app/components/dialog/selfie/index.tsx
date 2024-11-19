import { useCallback } from "react";
import { CustomDialog } from "../../dialog/Dialog";

import styles from "@/app/styles/components/dialog/styles.module.css";

export const InstructionsDialog: React.FC = () => {
	const handleContinue = useCallback(() => {
		// NOTE: Validate form and save in localstorage
	}, []);

	return (
		<CustomDialog
			title="Agora tire uma selfie"
			buttonText="Ok, entendi!"
			triggerText="Começar"
			isOpen={false}
			action={handleContinue}
		>
			<div className={styles.list}>
				<ol>
					<li>
						Certifique-se de que o ambiente esteja bem iluminado. Evite tirar a
						selfie em locais escuros, isso pode comprometer a qualidade da
						imagem.
					</li>
					<li>
						Certifique-se de que a câmera esteja focada corretamente em você.
						Evite tremores ou movimentos bruscos ao tirar a foto para evitar que
						ela fique desfocada.{" "}
					</li>
					<li>
						Posição e enquadramento: Posicione-se de forma centralizada na foto,
						de preferência com o rosto alinhado com o centro da imagem. Evite
						cortar partes do{" "}
					</li>
					<li>
						Mantenha uma expressão facial neutra. Evite sorrir e usar óculos.
					</li>
					<li>
						Escolha um fundo simples. sem pessoas passando ou objetos que possam
						desviar a atenção.
					</li>
				</ol>
			</div>
		</CustomDialog>
	);
};
