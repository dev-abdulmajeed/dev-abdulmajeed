import React from 'react'
import {
  RiSmartphoneFill,
  RiCodeSSlashFill,
  RiDatabase2Fill,
} from '@remixicon/react'
import Title from '../ui/title'
import ZoomIn from '../animations/zoomIn'

const servicesList = [
  {
    id: 1,
    icon: <RiSmartphoneFill size={65} />,
    service_name: 'Mobile App Development',
    service_description:
      'Building scalable and responsive mobile applications for both Android and iOS platforms.',
  },
  {
    id: 2,
    icon: <RiCodeSSlashFill size={65} />,
    service_name: 'Frontend UI/UX Design',
    service_description:
      'Designing clean, modern, and user-centric interfaces using the latest mobile and web design trends.',
  },
  {
    id: 3,
    icon: <RiDatabase2Fill size={65} />,
    service_name: 'Backend API Integration',
    service_description:
      'Developing robust APIs and integrating third-party services to power your applications.',
  },
]

const Services = () => {
  return (
    <section id="services" className="services-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <Title>
              <p>Services</p>
              <h2>App Development Services</h2>
            </Title>
          </div>
        </div>
        <div className="row">
          {servicesList.map(({ icon, id, service_description, service_name }) => {
            return (
              <div key={id} className="col-lg-4 col-md-6">
                <ZoomIn id={id}>
                  <div className="service-item">
                    {icon}
                    <h4>{service_name}</h4>
                    <p>{service_description}</p>
                  </div>
                </ZoomIn>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
