import styled from 'styled-components';

export const PlanningImage = styled.img`
  height: 800px;
  object-fit: contain;
  width: auto;
`;

export const DownloadPlanningContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 80px 0 80px;
  gap: 10px;

  > a {
    font-weight: bold;
  }
`;

//
// export const TableContainer = styled.section`
//   display: flex;
//   width: 100%;
//   margin-top: 50px;
// `;
// export const Table = styled.table`
//   width: fit-content;
//   border-collapse: collapse;
// `;
//
// export const TableHeadCell = styled.th`
//   color: white;
//   background: ${colors.rose};
//   width: fit-content;
//   padding: 15px;
//
//   &:first-child {
//     border-radius: 10px 0 0 0;
//   }
//
//   &:last-child {
//     border-radius: 0 10px 0 0;
//   }
// `;
//
// export const TableCell = styled.td`
//   padding: 15px;
//   border: 1px solid lightgrey;
// `;
