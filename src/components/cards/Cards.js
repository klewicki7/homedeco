import React from 'react'
import { Card, Col, Row } from 'antd';
import { Image } from 'react-bootstrap'

function Cards() {
    return (
        <div className="site-card-wrapper">
            <Row justify="center" gutter={16}>
                <Col  span={4}>
                    <Card title="Sillones" bordered={false}>
                        <Image src="data:image/jpeg;base64,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" style={{ height: 200, width: '100%' }} />
                    </Card>
                </Col>
                <Col  span={4}>
                    <Card title="Sofa Cama" bordered={false}>
                        <Image src="data:image/jpeg;base64,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" style={{ height: 200, width: '100%' }} />
                    </Card>
                </Col>
                <Col  span={4}>
                    <Card title="Respaldos" bordered={false}>
                        <Image src="https://sommiercenter.com/media/catalog/product/cache/4a8af526f69bf9c1b9433882e28d9c6b/s/c/screenshot_1_1_1.jpg" style={{ height: 200, width: '100%' }} />
                    </Card>
                </Col>
            </Row>
            <Row justify="center" gutter={16}>
                <Col span={4}>
                    <Card title="Bauleras" bordered={false}>
                        <Image src="https://http2.mlstatic.com/D_NQ_NP_975924-MLA43234067022_082020-O.webp" style={{ height: 200, width: '100%' }} />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card title="Puff" bordered={false}>
                        <Image src="https://http2.mlstatic.com/D_NQ_NP_981393-MLA45028747758_022021-O.webp" style={{ height: 200, width: '100%' }} />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card title="Camastro" bordered={false}>
                        <Image src="https://http2.mlstatic.com/D_NQ_NP_955101-MLA31598436000_072019-O.webp" style={{ height: 200, width: '100%' }} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Cards