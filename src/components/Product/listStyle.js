import styled from 'styled-components'

export const Item = styled.a`
    border: 1px solid #ddd;
    border-radius: 6px;
    overflow: hidden;
    display: block;
    cursor: pointer;
    user-select: none;
`;

export const Inner = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

export const Image = styled.div`
    
`;

export const Img = styled.img`
    width: 150px;
`;

export const Other = styled.div`
    margin-left: 16px;
    padding: 8px 0;
`;

export const Title = styled.h3`
`;

export const Category = styled.div`
`;

export const Cat = styled.span`
    font-size: 12px;
    display: inline-flex;
    padding: 0px 4px;
    border-radius: 6px;
    background-color: #333;
    color: #fff;
    margin-left: 8px;
`;