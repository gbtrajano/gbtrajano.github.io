import type { ReactElement } from "react";
import type { SocialIcon as SocialIconName } from "@/data/site";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";

const map: Record<SocialIconName, (p: { className?: string }) => ReactElement> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
};

export function SocialIcon({ icon, className }: { icon: SocialIconName; className?: string }) {
  const Icon = map[icon];
  return <Icon className={className} />;
}
