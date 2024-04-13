import React from "react";
import styled from "styled-components";

// Styled components
const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 40px 20px;
  text-align: center;
  margin-top: 60px; /* Adding top margin */
`;

const FooterText = styled.p`
  margin: 0;
  color: #555;
  font-size: 16px;
  line-height: 1.6;
`;

const BrandText = styled.span`
  font-weight: bold;
  color: #333;
`;

const EmphasisText = styled.span`
  font-style: italic;
  color: #666;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        Elevate your shopping experience with <BrandText>GO-Cart</BrandText>.
        Discover hand-picked products crafted to perfection. Explore our
        collection today for the epitome of style, quality, and convenience.
        Your satisfaction is our commitment.
        <EmphasisText>
          {" "}
          Join us in shaping a brighter future, one purchase at a time.
        </EmphasisText>
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
