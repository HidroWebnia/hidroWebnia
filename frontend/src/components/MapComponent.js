import React from 'react';

const MapComponent = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.5645231779226!2d-39.70933712637758!3d-5.08308745156072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bde893a7028ce9%3A0x1deba2f9a7f5a23b!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20do%20Cear%C3%A1%20%7C%20Campus%20Boa%20Viagem!5e1!3m2!1spt-BR!2sbr!4v1724846286782!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
