import Link from 'next/link';

interface Flight {
  id: number;
  number: string;
  destination: string;
  origin: string;
  departureTime: string;
}

const FlightRow = ({ flight }: { flight: Flight }) => {
    return (
        <tr>
            <td>
                <Link href={`/flights/${flight.id}`}>
                    <a>{flight.number}</a>
                </Link>
            </td>
            <td>{flight.origin}</td>
            <td>{flight.destination}</td>
            <td>{flight.departureTime}</td>
        </tr>
    );
};

export default FlightRow;