import React from "react";
import { Row, Col } from "antd";
import {
  SearchOutlined,
  HomeFilled,
  ShopOutlined,
  PlusOutlined,
  BellFilled,
  CaretDownFilled,
} from "@ant-design/icons";

export default function index() {
  const styles = {
    header: { background: "#202426" },
    searchicon: {
      fontSize: "19px",
      padding: "11px",
      background: "#3A3B3C",
      borderRadius: "50px",
      position: "absolute",
      top: "10px",
      color: "white",
    },
    image: {
      padding: "7px",
      paddingRight: "6px",
    },
    home: {
      paddingTop: "22px",
      color: "#1777F2",
      fontSize: "22px",
      borderBottom: "3px solid #2E87FC",
      paddingBottom: "15px",
      paddingLeft: "33px",
      paddingRight: "33px",
    },
    watch: {
      paddingTop: "10px",
      paddingLeft: "12px",
    },
    shop: {
      color: "white",
      fontSize: "24px",
      paddingTop: "9px",
    },
    group: {
      paddingTop: "14px",
    },
    game: {
      paddingTop: "14px",
    },
    message: {
      paddingTop: "15px",
    },
    add: {},
  };
  return (
    <div>
      <Row>
        <Col xs={6} sm={6} md={4} lg={7} xl={7} style={styles.header}>
          <img
            src="https://img.icons8.com/fluency/48/000000/facebook-circled.png"
            alt=""
            style={styles.image}
          />

          <SearchOutlined style={styles.searchicon} />
        </Col>
        <Col xs={0} sm={0} md={12} lg={10} xl={12} style={styles.header}>
          <Row justify="space-around" align="middle">
            <Col span={4}>
              <HomeFilled style={styles.home} />
            </Col>

            <Col span={4} style={styles.watch}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="28"
                  viewBox="0 0 172 172"
                  style={{ fill: "#000000" }}
                >
                  <g
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <path d="M0,172v-172h172v172z" fill="#242526"></path>
                    <g fill="#ffffff">
                      <path d="M21.5,21.5c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v86c0,7.91917 6.41417,14.33333 14.33333,14.33333h35.83333v7.16667c0,3.956 3.21067,7.16667 7.16667,7.16667h43c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-7.16667h35.83333c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-86c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM21.5,35.83333h129v86h-129zM75.82389,57.33333c-2.17184,0.01008 -4.15723,1.82157 -4.15723,4.35319v34.29362c0,3.3755 3.53899,5.45764 6.32682,3.72331l27.49089,-17.14681c2.70183,-1.68417 2.70183,-5.76244 0,-7.44661l-27.49089,-17.14681c-0.69695,-0.43538 -1.44565,-0.63324 -2.16959,-0.62988z"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </Col>
            <Col span={4}>
              <ShopOutlined style={styles.shop} />
            </Col>
            <Col span={4} style={styles.group}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 172 172"
                style={{ fill: "#000000" }}
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#b0b3b8">
                    <path d="M58.48,6.88c-9.50031,0 -17.2,7.69969 -17.2,17.2c0,9.50031 7.69969,17.2 17.2,17.2c9.50031,0 17.2,-7.69969 17.2,-17.2c0,-9.50031 -7.69969,-17.2 -17.2,-17.2zM112.875,6.88c-9.50031,0 -17.2,7.69969 -17.2,17.2c0,9.50031 7.69969,17.2 17.2,17.2c9.50031,0 17.2,-7.69969 17.2,-17.2c0,-9.50031 -7.69969,-17.2 -17.2,-17.2zM58.48,44.72c-3.82969,0 -7.37719,0.88688 -10.535,2.4725c6.45,5.03906 10.6425,12.91344 10.6425,21.715c0,8.61344 -3.99094,16.34 -10.2125,21.3925c5.01219,2.60688 9.39281,6.22156 12.7925,10.75c-1.63937,-3.52062 -2.58,-7.37719 -2.58,-11.5025c0,-13.66594 10.03781,-25.07437 23.1125,-27.1975c-2.76812,-10.23937 -12.02656,-17.63 -23.22,-17.63zM112.875,44.72c-11.13969,0 -20.41156,7.33688 -23.22,17.5225c13.47781,1.77375 23.9725,13.34344 23.9725,27.305c0,3.85656 -0.81969,7.525 -2.2575,10.8575c3.35938,-4.24625 7.56531,-7.74 12.3625,-10.2125c-6.18125,-5.0525 -10.105,-12.69844 -10.105,-21.285c0,-8.64031 3.96406,-16.34 10.2125,-21.3925c-3.29219,-1.76031 -6.93375,-2.795 -10.965,-2.795zM31.0675,48.2675c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64zM141.1475,48.2675c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64zM86.1075,68.9075c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64zM30.96,92.88c-17.06562,0 -30.96,13.88094 -30.96,30.96v12.04c0,1.075 0.52406,2.15 1.3975,2.795c0.79281,0.60469 8.385,5.805 29.5625,5.805c7.33688,0 13.04781,-0.65844 17.415,-1.505c0.44344,-10.57531 5.17344,-20.04875 12.5775,-26.66c-3.35937,-13.46437 -15.50687,-23.435 -29.9925,-23.435zM141.04,92.88c-14.43187,0 -26.57937,9.93031 -29.9925,23.3275c7.51156,6.62469 12.3625,16.20563 12.7925,26.875c4.34031,0.83313 9.97063,1.3975 17.2,1.3975c21.1775,0 28.76969,-5.20031 29.5625,-5.805c0.87344,-0.645 1.3975,-1.70656 1.3975,-2.795v-12.04c0,-17.07906 -13.88094,-30.96 -30.96,-30.96zM86.1075,113.6275c-17.06562,0 -30.96,13.88094 -30.96,30.96v12.04c0,1.08844 0.52406,2.0425 1.3975,2.6875c0.79281,0.60469 8.385,5.9125 29.5625,5.9125c21.1775,0 28.76969,-5.30781 29.5625,-5.9125c0.87344,-0.645 1.3975,-1.6125 1.3975,-2.6875v-12.04c0,-17.07906 -13.88094,-30.96 -30.96,-30.96z"></path>
                  </g>
                </g>
              </svg>
            </Col>
            <Col span={4} style={styles.game}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 172 172"
                style={{ fill: "#000000" }}
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#b0b3b8">
                    <path d="M20.64,17.2c-1.89888,0 -3.44,1.54112 -3.44,3.44v134.16c0,1.89888 1.54112,3.44 3.44,3.44h134.16c1.89888,0 3.44,-1.54112 3.44,-3.44v-134.16c0,-1.89888 -1.54112,-3.44 -3.44,-3.44zM24.08,24.08h127.28v37.84h-86c-1.89978,0.00019 -3.43981,1.54022 -3.44,3.44v44.72c0.00019,1.89978 1.54022,3.43981 3.44,3.44h41.28v37.84h-82.56zM68.8,68.8h82.56v82.56h-37.84v-41.28c-0.00019,-1.89978 -1.54022,-3.43981 -3.44,-3.44h-41.28z"></path>
                  </g>
                </g>
              </svg>
            </Col>
          </Row>
        </Col>
        <Col xs={18} sm={18} md={8} lg={7} xl={5} style={styles.header}>
          <Row>
            <Col span={8} style={{ color: "white" }}></Col>
            <Col span={16} style={{ color: "white" }}>
              <Row justify="space-around">
                <Col span={4} style={styles.add}>
                  <PlusOutlined style={styles.searchicon} />
                </Col>
                <Col span={4} style={styles.message}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 172 172"
                    style={{ fill: "#000000" }}
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <g fill="#ffffff">
                        <path d="M86,6.88c-43.52406,0 -79.12,33.01594 -79.12,73.96c0,22.38688 10.77688,42.26094 27.52,55.7925v30.745l5.0525,-2.6875l24.8325,-12.9c6.93375,1.85438 14.14969,3.01 21.715,3.01c43.52406,0 79.12,-33.01594 79.12,-73.96c0,-40.94406 -35.59594,-73.96 -79.12,-73.96zM86,13.76c40.05719,0 72.24,30.12688 72.24,67.08c0,36.95313 -32.18281,67.08 -72.24,67.08c-7.44437,0 -14.64687,-1.075 -21.3925,-3.01l-1.29,-0.3225l-1.1825,0.645l-20.855,10.8575v-22.575l-1.29,-0.9675c-16.04437,-12.34906 -26.23,-30.93312 -26.23,-51.7075c0,-36.95312 32.18281,-67.08 72.24,-67.08zM78.1525,60.9525l-41.3875,43.86l37.195,-20.855l19.8875,21.285l40.85,-44.29l-36.2275,20.3175z"></path>
                      </g>
                    </g>
                  </svg>
                </Col>
                <Col span={4}>
                  <BellFilled style={styles.searchicon} />
                </Col>
                <Col span={4}>
                  <CaretDownFilled style={styles.searchicon} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
