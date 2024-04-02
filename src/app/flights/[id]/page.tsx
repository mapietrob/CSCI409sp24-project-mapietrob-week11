export default function FlightInfo({ params }: { params: { id: string } }) {
    return (
        <div>Hello from Flight # {params.id}</div>
    );
}