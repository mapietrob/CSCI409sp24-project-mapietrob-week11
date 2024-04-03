interface FlightSearchParams {
    params: {
        origin: string;
        dest: string;
    };
}

export default function FlightSearch({ params }: FlightSearchParams) {
    return <div>Searching for flights from {params.origin} to {params.dest}</div>;
}