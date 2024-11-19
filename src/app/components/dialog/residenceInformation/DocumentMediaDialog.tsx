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
      title="Enviar foto do comprovante de residência"
      buttonText="Continuar"
      triggerText="Começar"
      isOpen={true}
      action={handleContinue}
    >
      <div className={styles.row}>
        <label>Frente do comprovante</label>
        <input type="file" name="doc-front" />
      </div>
      <div className={styles.row}>
        <label>Verso do comprovante</label>
        <input type="file" name="doc-front" />
      </div>
    </CustomDialog>
  );
};
