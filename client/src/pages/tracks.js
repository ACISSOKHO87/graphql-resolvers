import React from "react";
import { useQuery, gql } from "@apollo/client";
import TrackCard from "../containers/track-card";
import { Layout, QueryResult } from "../components";

/** TRACKS gql query to retrieve all tracks */
const GET_TRACKS = gql`
    query Tracks {
        tracks {
            id
            title
            thumbnail
            length
            modulesCount
            author {
                name
                photo
            }
        }
    }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
    const { loading, error, data } = useQuery(GET_TRACKS);

    console.log("data: ", data?.tracks);
    return (
        <Layout grid>
            <QueryResult error={error} loading={loading} data={data}>
                {data?.tracks?.map((track, index) => (
                    <TrackCard key={`track.id-${index}`} track={track} />
                ))}
            </QueryResult>
        </Layout>
    );
};

export default Tracks;
