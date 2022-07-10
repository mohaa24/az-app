import React from 'react';
import styled from 'styled-components';
import enhanceWithClickOutside from 'react-click-outside';


const Container = styled.div`
    position: relative;
`;

const LabelCtr = styled.div`
    position: relative;
    font-weight: 500;
    line-height: 1.5;
    font-size: 1.1rem;
    cursor: pointer;
`;
const ValueCtr = styled.div`
    position: relative;
    line-height: 1.5;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.headerBg};
    cursor: pointer;
`;

const Content = styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary};
    height: 0;
    width: 0;
    top: calc(100% + 15px);

    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    overflow: hidden;
    z-index: 11;
    &.active {
        height: auto;
        max-height: 250px;
        width: auto;
        max-width: 150px;
        overflow-y: scroll;
        min-width: 100%;
        animation: ${({ theme }) => theme.effect.fadeIn} 0.3s ease-in both;
        padding: 8px;
        box-sizing: border-box;
    }
`;

const List = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    &:last-child {
        border-bottom: none;
    }
    .countryLabel {
        padding: 0 10px;
        font-size: 0.95rem;
    }
    &:hover,
    &.current {
        background-color: ${({ theme }) => theme.colors.bodyBackground};
    }
`;

export class Dropdown extends React.Component{
    state = {
        showList: false,
    };
    toggleList = () => {
        this.setState(prevState => ({
            showList: !prevState.showList,
        }));
    };
    selectOption = (value) => {
        this.props.onDropdownChange(value);
        this.handleClickOutside();
    };
    handleClickOutside = () => {
        this.setState({ showList: false });
    };

    render() {
        const { options, value, label, defaultValue } = this.props;
        const { showList } = this.state;
        const list =
            options &&
            options.map((option, index) => {
                return (
                    <List
                        className={value === option.value ? 'current' : ''}
                        onClick={() => this.selectOption(option.value)}
                    >
                        <div className="countryLabel">{option.label}</div>
                    </List>
                );
            });

        const match = options && options.find(option => option && option.value === value);
        
        const selectedLabel = match && match.label;

        return (
            <Container>
                <div onClick={this.toggleList}>
                    <LabelCtr>{label}</LabelCtr>
                    <ValueCtr>{selectedLabel || defaultValue || '-'}</ValueCtr>
                </div>
                <Content className={showList ? 'active' : ''}>{list}</Content>
            </Container>
        );
    }
    
}


