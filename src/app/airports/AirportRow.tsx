import Link from 'next/link';

interface Airport {
    id: number;
    code: string;
    name: string;
    state: string;
  }

  const AirportRow = ({ airport }: { airport: Airport }) => {
    return (
        <tr>
            <td>
                <Link href={`/airports/${airport.id}`}>{airport.code}</Link>
            </td>
            <td>{airport.name}</td>
            <td>{airport.state}</td>
        </tr>
    );
};

export default AirportRow;