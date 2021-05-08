export default function Data(props) {

    // Fetch the current list of open elections
    if(props.state.session) {
        fetch(props.state.config.Backend + 'election/elections/active', {
            method: 'GET',
            headers: {

                "x-thebigvote-session": props.state.session.ID
            }
        }).then(function(response) {

            return response.json();
        }).then(function(data) {

            props.state.updateApp('elections', data)

        })

        // Get any votes for this account
        fetch(props.state.config.Backend + 'election/votes', {
            method: 'GET',
            headers: {

                "x-thebigvote-session": props.state.session.ID
            }
        }).then(function(response) {

            return response.json();
        }).then(function(data) {

            props.state.updateApp('votes', data)

        })
    }

    return <></>
}