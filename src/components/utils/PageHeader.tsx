interface PageHeaderProps {
  title: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, backgroundImage }: PageHeaderProps) => {
  return (
    <div className="relative py-20 bg-primary-700">
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-black opacity-50 z-0"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply'
          }}
        ></div>
      )}
      <div className="container-custom relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;