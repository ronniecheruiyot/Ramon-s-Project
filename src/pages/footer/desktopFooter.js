import React from "react";
import {FooterContainer, FooterContent, FooterDescription} from "../../styles/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

export default function DesktopFooter() {
    return(
        <FooterContainer>
            <FooterContent>
                <FooterDescription>Follow Ramon's Farm</FooterDescription>
                <FooterDescription>
                    <a href="https://www.facebook.com/DorperHerdByRamon"
                       target="_blank" rel="noopener noreferrer"
                       className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                </FooterDescription>
                <FooterDescription>
                    <p>Copyright &copy; {new Date().getFullYear()}</p>
                </FooterDescription>
            </FooterContent>
        </FooterContainer>
    );
}