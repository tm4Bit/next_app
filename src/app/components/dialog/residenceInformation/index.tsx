import { useCallback } from "react";
import { CustomDialog } from "../../dialog/Dialog";

import styles from "@/app/styles/components/dialog/styles.module.css";

interface Props {
  gotoNext: (n: string) => void;
}

export const InstructionsDialog: React.FC<Props> = ({ gotoNext }) => {
  const handleContinue = useCallback(() => {
    // NOTE: Validate form and save in localstorage
    gotoNext("document-media");
  }, []);

  return (
    <CustomDialog
      title="Instruções para imagem do comprovante de residência"
      buttonText="Ok, entendi!"
      triggerText="Começar"
      isOpen={false}
      action={handleContinue}
    >
      <div className={styles.list}>
        <ul>
          <li>
            Use uma conta de água, luz, telefone, gás, celular, internet, TV por
            assinatura ou faturas de cartão de crédito emitido pelo Banco do
            Brasil.
          </li>
          <li>Fotografe o documento em um local com boa iluminação.</li>
          <li>
            Certifique-se de que todos os dados do documento estão legíveis.
          </li>
          <li>
            São aceitos como comprovantes de endereço residencial, desde que
            emitidos há menos de 90 dias, em nome do próprio cliente ou dos
            pais, quando comprovado o relacionamento entre as partes (documento
            de identidade).
          </li>
        </ul>
      </div>
    </CustomDialog>
  );
};
