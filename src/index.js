import { connect } from "react-redux"
import LoadingView from "./components/Loading"
import { getLoading } from "./redux/selector"
import Route from "./routes"

const RootView = (props) => {
    console.log(JSON.stringify(props))
    return (
        <>
            <Route />
            <LoadingView visibility={props.loading} />
        </>

    )
}

const mapStateToProps = state => ({
    loading: getLoading(state)
})

export default connect(mapStateToProps)(RootView)