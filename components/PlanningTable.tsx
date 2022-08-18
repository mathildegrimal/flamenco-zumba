import {
  Table,
  TableCell,
  TableContainer,
  TableHeadCell,
} from '../styles/PlanningTable';
import { Container, Title, TitleWrapper } from '../styles/Commons';
import FanIcon from './commons/FanIcon';
import { PlanningTableProps } from '../types';

export default function PlanningTable({ planning }: PlanningTableProps) {
  const lundi = planning.filter((p) => p.jour === 'Lundi');
  const mardi = planning.filter((p) => p.jour === 'Mardi');
  const mercredi = planning.filter((p) => p.jour === 'Mercredi');
  const jeudi = planning.filter((p) => p.jour === 'Jeudi');
  const vendredi = planning.filter((p) => p.jour === 'Vendredi');

  const tr1 = (
    <tr>
      <TableCell>
        {lundi[0].heure} : {lundi[0].activite}
      </TableCell>
      <TableCell>
        {mardi[0].heure} : {mardi[0].activite}
      </TableCell>
      <TableCell>
        {mercredi[0].heure} : {mercredi[0].activite}
      </TableCell>
      <TableCell>
        {jeudi[0].heure} : {jeudi[0].activite}
      </TableCell>
      <TableCell>
        {vendredi[0].heure} : {vendredi[0].activite}
      </TableCell>
    </tr>
  );
  const tr2 = (
    <tr>
      <TableCell>
        {lundi[1].heure} : {lundi[1].activite}
      </TableCell>
      <TableCell>
        {mardi[1].heure} : {mardi[1].activite}
      </TableCell>
      <TableCell>
        {mercredi[1].heure} : {mercredi[1].activite}
      </TableCell>
      <TableCell>
        {jeudi[1].heure} : {jeudi[1].activite}
      </TableCell>
      <TableCell>
        {vendredi[1].heure} : {vendredi[1].activite}
      </TableCell>
    </tr>
  );
  return (
    <Container>
      <TitleWrapper>
        <FanIcon />
        <Title>Planning</Title>
      </TitleWrapper>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeadCell>Lundi</TableHeadCell>
              <TableHeadCell>Mardi</TableHeadCell>
              <TableHeadCell>Mercredi</TableHeadCell>
              <TableHeadCell>Jeudi</TableHeadCell>
              <TableHeadCell>Vendredi</TableHeadCell>
            </tr>
          </thead>
          <tbody>
            {tr1}
            {tr2}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}
