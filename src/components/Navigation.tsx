import navigation from "@/variables/navigation";
import Link from "next/link";

const Navigation = ({ className }: { className?: string }) => {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-8">
        {navigation.map((item) => (
          <li
            key={item.href}
            className="hover:text-white-56 text-lg leading-[1em] font-medium tracking-[-0.01em] text-white transition-colors duration-300 ease-in lg:text-[0.938rem]"
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
