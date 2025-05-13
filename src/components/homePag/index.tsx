import { Col, Row } from "react-bootstrap";
import "./_HomePag.scss";
import SkillsCard from "../SkillsCard";

interface Config {
  colors: {
    cardColor: string; // لون الخلفية للبطاقة في الوضع العادي
    headingColor: string; // لون العنوان
    textMuted: string; // لون النص المخفف
    bodyColor: string; // لون الجسم
    borderColor: string; // لون الحدود
  };
  colors_dark: {
    cardColor: string; // لون الخلفية للبطاقة في وضع الظلام
    headingColor: string; // لون العنوان في وضع الظلام
    textMuted: string; // لون النص المخفف في وضع الظلام
    bodyColor: string; // لون الجسم في وضع الظلام
    borderColor: string; // لون الحدود في وضع الظلام
  };
}
const config: Config = {
  colors: {
    cardColor: "#ffffff",
    headingColor: "#000000",
    textMuted: "#888888",
    bodyColor: "#333333",
    borderColor: "#cccccc",
  },
  colors_dark: {
    cardColor: "#1a1a1a",
    headingColor: "#ffffff",
    textMuted: "#aaaaaa",
    bodyColor: "#e0e0e0",
    borderColor: "#444444",
  },
};

function HomePag() {
  return (
    <>
      <Row>
        <Col>
        </Col>
        <Col>
        </Col>
        <Col>
          {" "}
          <SkillsCard isDarkStyle={false} config={config} isRtl={false} />
        </Col>
        <Col>
        </Col>
        <Col>
        </Col>
        <Col>
        </Col>
      </Row>
    </>
  );
}

export default HomePag;
