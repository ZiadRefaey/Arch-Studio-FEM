export default function SectionWrapper({ children, className }) {
  return (
    <section className={`${className} w-full px-8 md:px-0 `}>
      {children}
    </section>
  );
}
