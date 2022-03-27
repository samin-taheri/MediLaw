import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
    LeftContentSection,
    Content,
    ContentWrapper,
    ServiceWrapper,
    MinTitle,
    MinPara,
} from "./styles";

const LeftContentBlock2 = ({
                              icon,
                              title,
                              content,
                              section,
                              t,
                              id,
                          }: ContentBlockProps) => {
    return (
        <LeftContentSection>
            <Fade direction="left">
                <Row justify="space-between" align="middle" id={id}>
                    <Col lg={13} md={11} sm={11} xs={24}>
                        <SvgIcon src={icon} width="100%" height="100%" />
                    </Col>
                    <Col lg={11} md={11} sm={11} xs={24}>
                        <ContentWrapper>
                            <h6>{t(title)}</h6>
                            <Content>{t(content)}</Content>
                            <ServiceWrapper>
                                <Row justify="space-between">
                                    {typeof section === "object" &&
                                        section.map((item: any, id: number) => {
                                            return (
                                                <Col key={id} span={25}>
                                                    <Content>{t(item.content)}</Content>
                                                </Col>
                                            );
                                        })}
                                </Row>
                            </ServiceWrapper>
                        </ContentWrapper>
                    </Col>
                </Row>
            </Fade>
        </LeftContentSection>
    );
};

export default withTranslation()(LeftContentBlock2);
