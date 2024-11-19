"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { Stepper } from "@/app/components/Stepper";

import styles from "@/app/styles/pages/styles.module.css";
import { InstructionsDialog } from "@/app/components/dialog/selfie";

export default function ResidenceInformation() {
	const path = usePathname();
	const pathStep = useMemo(() => {
		return path.split("/")[1];
	}, [path]);

	return (
		<div className={styles.container}>
			{/* goback action */}
			<div className={styles.row}>
				<a href="/">
					<MdOutlineKeyboardDoubleArrowLeft size={24} />
				</a>
			</div>

			{/* title */}
			<h3 className={`${styles.title} ${styles.row}`}>
				Precisamos de uma selfie
			</h3>

			{/* banner */}
			<div className={styles.banner}>
				<img src="/img/i_card.svg" alt="" />
			</div>

			<Stepper step={pathStep} />

			{/* action btn */}
			<div className={styles.actionContainer}>
				<InstructionsDialog />
			</div>
		</div>
	);
}
