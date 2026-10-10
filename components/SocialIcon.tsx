import type { ReactElement } from "react";
import type { SocialIcon as SocialIconName } from "@/data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

const map: Record<SocialIconName, (p: { className?: string }) => ReactElement> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
};

export function SocialIcon({ icon, className }: { icon: SocialIconName; className?: string }) {
  const Icon = map[icon];
  return <Icon className={className} />;
}
