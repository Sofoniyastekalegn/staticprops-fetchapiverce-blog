// Sequential data fetching
//If you have nested components, and each component fetches its own data, then data fetching will happen sequentially if those data requests are not memoized.

//There may be cases where you want this pattern because one fetch depends on the result of the other. For example, the Playlists component will only start fetching data once the Artist component has finished fetching data because Playlists depends on the artistID prop:

// There may be cases where you want this pattern because one fetch depends on the result of the other. For example, the Playlists component will only start fetching data once the Artist component has finished fetching data because Playlists depends on the artistID prop:

export default async function Page({
    params: { username },

}: {
    params: { username: string }

}) {
    // get artist information
    const artist = await getArtist(username)
    return (
        <>
        <h1>{artist.name}</h1>
        {/* Show fallback UI while the Playlists component is loading */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Pass the artist ID to the Playlists component */}
        <Palylists artistId={artist.id} />
        </Suspense>




        
        </>
    )
}

async function Playlists( artistID }: { artistID: string )} {
    // use the artist ID to fetch playlists
    const playlists = await getArtistPlaylists(artistID)

    return (
        <ul>
        {playlists.map(playlists) => {
            <li key={playlists.id}>{playlists.name}</li>
        }}
        </ul>
    )

}