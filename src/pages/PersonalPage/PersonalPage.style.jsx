import styled from "@emotion/styled";

export const Title = styled.div`
	text-align:center;
    margin-top:40px;
    font-family: Nunito Sans;
    font-size: 25px;
    font-style: normal;
    font-weight: 800;

`;

export const Container = styled.div `
    background-color: #E0E0E0;
    border-radius: 10px;
    width: 330px;
    height: 660px;
    margin: 25px auto;
`;

export const MainContent = styled.div`
    border-radius: 11px;
    border: 1px solid #DEDEDE;
    height: 68%;
    background-color: white;
    margin: 14px;
    display:flex;
    flex-direction:column;

`;

export const MoveDateLeft=styled.img`
    width:26px;
    height:15px;
    margin-top: 10px;
`;

export const MoveDateRight=styled.img`
    width:26px;
    height:15px;
    margin-top: 10px;
`;

export const calContainer = styled.div`
    border-bottom: 1px solid black;
    margin: 14px 17px;
    border-radius: 11px;
    border: 1px solid #DEDEDE;
    background: #FFF;
`;

export const calContent = styled.div`
    margin-top: 16px;
    line-height: normal;
    height:38px;
    border-bottom: 1px solid black;
    margin-left: 39px;
    margin-right:39px;
    display:flex;
    text-align:center;
`;

export const calDate=styled.div`
    text-align: center;
    font-family: Abhaya Libre Medium;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin: 3px auto;
`;
export const attendContent = styled.div`
    display: flex;
    margin: 16px auto;
    justify-content: space-evenly;
`;

export const StatusName=styled.div`
    color: #878787;
    text-align: center;
    font-family: Abhaya Libre SemiBold;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top:8px;
`;

export const StatusCount=styled.div`
    color: #878787;
    text-align: center;
    font-family: Abhaya Libre SemiBold;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
export const Attendbox1 = styled.div`
    width: 59px;
    height: 70px;
    display:flex:
    flex-direction: column;
    text-align: center;
    border-radius: 10px;
    background-color: rgba(43, 128, 255, 0.20);
`;

export const Attendbox2 = styled.div`
    width: 59px;
    height: 70px;
    text-align: center;
    border-radius: 10px;
    display:flex:
    flex-direction: column;
    background-color: rgba(255, 212, 0, 0.26);
`;

export const Attendbox3 = styled.div`
    width: 59px;
    height: 70px;
    text-align: center;
    border-radius: 10px;
    display:flex:
    flex-direction: column;
    background-color:rgba(255, 65, 122, 0.21);
`;

export const Attendbox4 = styled.div`
    width: 59px;
    height: 70px;
    text-align: center;
    border-radius: 10px;
    display:flex:
    flex-direction: column;
    background-color:#E5E5E5;
`;
export const User=styled.div`
    float:left;
    height:35px;
    color: #4E4949;
    font-family: Abhaya Libre Medium;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 100px;
`;

export const ManageBar=styled.div`
    display:flex;
    border-bottom: 1px solid black;
    margin-top:13px;
    margin-left:18px;
    margin-right:18px;
`;

export const Renew =styled.img`
    width: 18px;
    height: 20px;
    margin-left: 198px;
`;

export const MyStatus=styled.div`
    gap: 20px;
    display:flex;
    flex-direction:column;
    margin:13px;
    color: #4E4949;
    font-family: Abhaya Libre SemiBold;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

`;
export const StatusDetail = styled.div`
    font-size: 14px;
`;

export const AttendDate = styled.div`
    float: left;
`;

export const MyAttendStatus = styled.div`
    float: right;
`;

export const Icons = styled.div`
    gap: 10px;
    display:flex;
    justify-content:space-around;
`;

export const IconContent = styled.img`
    width: 32px;
    height: 32px;
`;