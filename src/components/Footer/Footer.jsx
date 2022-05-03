import React from "react";
import styled from "styled-components";
import Wave from "../../assets/footer.png";


const FooterSection = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;
    top: 19vw;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="Container">
        <span>
          Made with 💜 by{" "}
          <a
            href="https://github.com/belcar-ceci"
            target="_blank"
            rel="noopener noreferrer"
          >
            @belcar-ceci
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
