import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const TestimonialsSection = styled.section`
  background-color: #f4f4f4; 
  padding: 60px 96px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 24px;
  }

  h2 {
    color: #333; 
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  .testimonials-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 800px;
    margin: 0 auto;

    .testimonial {
      background: #ffffff; 
      border-radius: 12px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
      padding: 30px;
      text-align: left;
      transition: box-shadow 0.3s ease;
      border-left: 5px solid #2e8b57; 

      &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
      }

      p {
        color: #555;
        font-style: italic;
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 10px;
      }

      .client-name {
        font-weight: 600;
        color: #333;
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
`;

const Testimonials = () => {
  return (
    <TestimonialsSection data-aos="fade-up">
      <h2>O que nossos clientes dizem</h2>
      <div className="testimonials-container">
        <div className="testimonial" data-aos="fade-up" data-aos-delay="100">
          <p>"HidroWebnia transformou a maneira como cultivo minhas plantas. O suporte é excelente e a tecnologia é de ponta!"</p>
          <div className="client-name">Maria Silva</div>
        </div>
        <div className="testimonial" data-aos="fade-up" data-aos-delay="200">
          <p>"O sistema de monitoramento é incrível e fácil de usar. Recomendo para qualquer um que queira otimizar seu cultivo."</p>
          <div className="client-name">João Pereira</div>
        </div>
        <div className="testimonial" data-aos="fade-up" data-aos-delay="300">
          <p>"A equipe de HidroWebnia é muito dedicada e sempre pronta para ajudar. A experiência tem sido excepcional."</p>
          <div className="client-name">Ana Costa</div>
        </div>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;
