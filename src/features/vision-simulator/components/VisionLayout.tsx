import React from "react";

type VisionLayoutProps = {
  left: React.ReactNode;
  right: React.ReactNode;
  bottom?: React.ReactNode;
};

const VisionLayout: React.FC<VisionLayoutProps> = ({ left, right, bottom }) => {
  return (
    <section
      className="
        bg-[var(--vision-bg)]
        text-[var(--vision-text-main)]
        py-10 md:py-12
      "
      id="vision-simulator"
    >
      <div className="containerr flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)]">
        {/* Controls column */}
        <div className="space-y-6">{left}</div>

        {/* Video / preview column */}
        <div className="space-y-4">{right}</div>
      </div>

      {bottom && (
        <div className="containerr mt-10 border-t border-[var(--vision-panel-border)] pt-6">
          {bottom}
        </div>
      )}
    </section>
  );
};

export default VisionLayout;
