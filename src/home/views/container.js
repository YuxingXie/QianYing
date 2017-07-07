
import {connect} from 'react-redux';
import {MyHomeScreen} from './component'


function mapStateToProps(state,ownProps){
    return{
        forHelpTopics: state.app.forHelpTopics
    }
}
export default connect(mapStateToProps)(MyHomeScreen);