import { waHref } from "@/lib/data";
import { WhatsAppIcon } from "./Icons";

type Props = {
  msg?: string;
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
};

/** Botão/link que abre o WhatsApp da clínica com mensagem pronta. */
export default function WaButton({ msg, children, className = "btn", icon = true }: Props) {
  return (
    <a className={className} href={waHref(msg)} target="_blank" rel="noopener noreferrer">
      {icon && <WhatsAppIcon />}
      {children}
    </a>
  );
}
