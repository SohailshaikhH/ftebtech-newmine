import "../../styles/components/CaseStudies/CaseStudies.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCloud,
  faWindowMaximize,
  faCode,
  faLaptop,
  faHeadset,
  faNetworkWired
} from '@fortawesome/free-solid-svg-icons'

const CaseStudies = () => {
  const services = [
    {
      icon: faCloud,
      title: "Cloud Solutions & Services (Azure, AWS, GCP)",
      description: "Modernize your infrastructure with secure, scalable cloud architecture. From Azure deployments to hybrid and multi-cloud environments, we design, implement, and manage robust cloud platforms tailored to your business needs."
    },
    {
      icon: faWindowMaximize,
      title: "Microsoft 365 Licensing & Support",
      description: "Official reseller and expert support for Microsoft 365 licenses. Get the right subscription plans with professional setup, email migration, SharePoint, Exchange configuration, and ongoing user support."
    },
    {
      icon: faCode,
      title: "Custom App & Web Development",
      description: "Build powerful web apps and business tools. From React-based web platforms to mobile apps and internal dashboards, we design responsive, secure, and scalable solutions built around your workflow."
    },
    {
      icon: faLaptop,
      title: "IT Hardware & Software Sales",
      description: "Authorized supplier of desktops, servers, peripherals & licenses. We source, configure, and support enterprise-grade IT equipment, operating systems, antivirus, and productivity tools."
    },
    {
      icon: faHeadset,
      title: "Managed Services & Support",
      description: "Ongoing IT management, monitoring, and SLA-based support. Let us be your virtual IT team – handling patches, backups, system health, ticket resolution, and proactive infrastructure optimization."
    },
    {
      icon: faNetworkWired,
      title: "Infrastructure Integration & Consulting",
      description: "End-to-end planning and implementation of IT infrastructure. From on-prem to cloud, we ensure seamless integration of servers, networks, and storage with expert advisory and migration services."
    }
  ]

  return (
    <section className="services-showcase section">
      <div className="container">
        <div className="section-header">
          <h6 className="section-subtitle">IT SERVICES</h6>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-description">
            Fteb specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon-wrapper">
                <FontAwesomeIcon icon={service.icon} className="service-icon" />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies