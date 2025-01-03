import React from 'react';
import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

const ProfileComment = ({ Data, isMD }) => {
  return (
    <Card
      style={{ marginBottom: 16, border: '1px solid #f0f0f0' }}
      bordered={false}
      styles={{ body: { padding: '16px' } }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 'bold' }}>{Data.about.name}</div>
          <Paragraph style={{ textAlign: 'justify', marginBottom: 0 }}>
            {Data.about.details}
          </Paragraph>
        </div>
      </div>
    </Card>
  );
};

export default ProfileComment;
