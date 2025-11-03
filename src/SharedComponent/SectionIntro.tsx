
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React from "react";

interface IProps {
  className?: string;
  subtitleClassName?: string;
  titleWrapperClassName?: string;
  titlePrefixClassName?: string;
  titleClassName?: string;
  subtitle?: React.ReactNode;
  titlePrefix?: React.ReactNode;
  title: React.ReactNode;
}
const SectionIntro = ({
  className,
  subtitleClassName,
  titleWrapperClassName,
  titlePrefixClassName,
  titleClassName,
  subtitle,
  titlePrefix,
  title,
}: IProps) => {
  return (
    <div className={cn("section_intro", className)}>
      <div className="intro_wrapper">
        <h2
          className={cn(
            "intro_title_wrapper space-y-2.5",
            titleWrapperClassName
          )}
        >
          {titlePrefix && (
            <Badge
              className={cn(
                "intro_title_prefix text-base font-semibold bg-[linear-gradient(180deg,_#D8F999_0%,_rgba(251,_249,_245,_0)_89.77%)] dark:bg-[linear-gradient(180deg,_black_0%,_rgba(251,_249,_245,_0)_89.77%)] text-[var(--color-primary-900)] dark:text-white rounded-full bg-transparent px-4 py-2",
                titlePrefixClassName
              )}
            >
              {titlePrefix}
            </Badge>
          )}
          <span
            className={cn(
              "intro_title block text-3xl md:text-4xl xl:text-5xl font-semibold text-[var(--color-primary-900)] dark:text-slate-100",
              titleClassName
            )}
          >
            {title}
          </span>
        </h2>
        {subtitle && (
          <p className={cn("intro_subtitle mt-2.5", subtitleClassName)}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionIntro;
