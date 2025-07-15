
import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="mb-7 fresh-fadein">
      <h1 className="text-2xl md:text-3xl font-bold text-healthcare-700 drop-shadow mb-2">{title}</h1>
      {description && (
        <p className="text-base text-healthcare-500 mt-0.5">{description}</p>
      )}
    </div>
  );
};

export default PageHeader;
