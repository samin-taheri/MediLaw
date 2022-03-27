import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
    RightBlockContainer,
    Content,
    ContentWrapper,
    ButtonWrapper,
} from "./styles";
import {LeftContentSection, MinPara, MinTitle, ServiceWrapper} from "../LeftContentBlock/styles";

const RightBlock2 = ({
                        title,
                        content,
                        button,
                        icon,
                        t,
                        id,
                        section
                    }: ContentBlockProps) => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <RightBlockContainer>
            <Fade direction="right">
                <Row justify="center" align="middle" id={id} >
                    <ContentWrapper>
                        <h6 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{t(title)}</h6>
                        <Content style={{display: 'flex',  justifyContent:'center', textAlign:'center'}}>{t(content)}</Content>
                        <ServiceWrapper>
                            <Row justify="space-between">
                                {typeof section === "object" &&
                                    section.map((item: any, id: number) => {
                                        return (
                                            <Col key={id} span={7} style={{ boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.1",borderRadius: 25, padding: 15, marginBottom: 30 }}>
                                                <Col style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                                                <SvgIcon src={item.icon} width="60px" height="60px"/>
                                                </Col>
                                                <MinTitle style={{display: 'flex',  justifyContent:'center', textAlign:'center'}}>{t(item.title)}</MinTitle>
                                                <MinPara style={{display: 'flex',  justifyContent:'center', textAlign:'center'}}>{t(item.content)}</MinPara>
                                            </Col>
                                        );
                                    })}
                            </Row>
                        </ServiceWrapper>
                    </ContentWrapper>
                </Row>
            </Fade>
        </RightBlockContainer>
    );
};

export default withTranslation()(RightBlock2);
