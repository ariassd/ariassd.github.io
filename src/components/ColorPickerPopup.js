import React, { useContext, useEffect, useState } from 'react';
import { Modal } from 'antd';
import { BlockPicker } from 'react-color';
import { ThemeContext } from '../contexts/ThemeContext';

const ColorPickerPopup = (props) => {
    const [visible, setVisible] = useState(props.visible);
    const [theme, setTheme] = useContext(ThemeContext);

    useEffect(() => {
        setVisible(props.visible);
    }, [props.visible])

    const handleCancel = () => {
        setVisible(false);
        setTimeout(() => {
            props.handleCancel();
        }, 400);
    }

    return (
        <React.Fragment>
            <Modal
                visible={visible}
                closable={false}
                onCancel={() => {handleCancel()}}
                footer={null}
                destroyOnClose={true}
                maskClosable={true}
                okText="Save"
                forceRender={true}
                width={'max-content'}
            >
                <BlockPicker
                    color={theme ? theme.hex : '#00bfa5'}
                    triangle="hide"
                    onChange={(color, event) => {
                        localStorage.setItem('portfolio-theme', JSON.stringify(color));
                        setTheme(color);
                        handleCancel();
                    }}
                    colors={[
                        '#1890ff',
                        '#2962FF',
                        '#0091EA',
                        '#00B8D4',
                        '#673ab7',
                        '#AA00FF',
                        '#00C853',
                        '#64DD17',
                        '#AEEA00',
                        '#81c784',
                        '#d0021b',
                        '#C51162',
                        '#f78da7',
                        '#FFD600',
                        '#FFAB00',
                        '#FF6D00',
                        '#abb8c3',
                        '#555555',
                        '#795548',
                        '#000000'
                    ]}
                />
            </Modal>
        </React.Fragment>
    )
}

export default ColorPickerPopup;