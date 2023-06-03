import React from "react";
import Typography from "@mui/material/Typography";
import {FooterContainer, FooterContent, FooterDescription, FooterTitle} from "../../styles/footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

export default function MobileFooter() {
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