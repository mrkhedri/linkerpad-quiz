import styled from 'styled-components'

export const Item = styled.a`
    border-radius: 6px;
    overflow: hidden;
    display: block;
    cursor: pointer;
    user-select: none;
`;

export const Inner = styled.div`
    
`;

export const Image = styled.div`
    position: relative;
`;

export const Img = styled.img`
    width: 100%;
`;

export const Other = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    background-color: rgba(51, 51, 51, 0.5);
    color: #fff;
    padding: 8px 16px;
`;

export const Actions = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 4px 16px;
`;

export const Title = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 4px;
`;

export const Category = styled.div`
font-size: 13px;
    display: flex;
    align-items: center;
`;

export const Cat = styled.span`
    font-size: 12px;
    display: inline-flex;
    padding: 0px 4px;
    border-radius: 6px;
    background-color: #fff;
    color: #333;
    margin-left: 8px;
`;