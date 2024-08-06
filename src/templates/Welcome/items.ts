import FocusSvg from "@/components/svg/Focus";
import MotivationSvg from "@/components/svg/Motivation";
import PlanSvg from "@/components/svg/Plan";
import { SvgProps } from "@/components/svg/props";

export type CarrouselItem = {
  id: number;
  title: string;
  subtitle: string;
  Image: (props: SvgProps) => JSX.Element;
};

export const carrouselItens: CarrouselItem[] = [
  {
    id: 1,
    title: "Maintain Focus",
    subtitle:
      "We help you prioritize your tasks and avoid distractions, so you can stay laser-focused on what matters most and achieve your goals faster.",
    Image: FocusSvg,
  },
  {
    id: 2,
    title: "Gain Motivation",
    subtitle:
      "designed to help you celebrate your successes and track your progress, giving you the motivation and confidence boost you need.",
    Image: MotivationSvg,
  },
  {
    id: 3,
    title: "Plan Your Day",
    subtitle:
      "you'll be able to create a clear plan for your day, ensuring you make the most of your time and energy",
    Image: PlanSvg,
  },
];
