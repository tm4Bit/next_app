"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { CustomDialog } from "./dialog/Dialog";

import styles from "@/app/styles/components/dialog/declarations.module.css";

export const DeclarationsDialog = () => {
	const router = useRouter();

	const handleContinue = useCallback(() => {
		// NOTE: Process form information
		router.push("/pessoais");
	}, []);

	return (
		<CustomDialog
			title="Essas declarações são importantes para emitir seu cartão:"
			buttonText="Continuar"
			triggerText="Solicitar Cartão Petrobras"
			isOpen={false}
			action={handleContinue}
		>
			<div className={styles.formRow}>
				<p>Nasci no Brasil </p>
				<input type="checkbox" />
			</div>
			<div className={styles.formRow}>
				<p>Tenho domicílio fiscal somente no Brasil </p>
				<input type="checkbox" />
			</div>
			<div className={styles.formRow}>
				<p>Sou responsável por meus atos </p>
				<input type="checkbox" />
			</div>
			<div className={styles.formRow}>
				<p>Não sou pessoa politicamente exposta </p>
				<input type="checkbox" />
			</div>
			<div className={styles.formRow}>
				<p>Autorizo consulta ao SCR/Bacen </p>
				<input type="checkbox" />
			</div>
			<div className={styles.formRow}>
				<p>Aceito compartilhar meus dados </p>
				<input type="checkbox" />
			</div>
		</CustomDialog>
	);
};
