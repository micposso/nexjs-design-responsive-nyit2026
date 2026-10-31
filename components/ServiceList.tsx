export type ServiceListProps = {
  services: string[];
  ariaLabel: string;
};

export function ServiceList({ services, ariaLabel }: ServiceListProps) {
  return (
    <div className="service-list" aria-label={ariaLabel}>
      {services.map((service, index) => (
        <div key={service}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          {service}
        </div>
      ))}
    </div>
  );
}
