import {connect} from 'react-redux';
import {MyContractsScreen} from './component'

function mapStateToProps(state,ownProps){
    return{
        contracts: state.app.contracts
    }
}
export default connect(mapStateToProps)(MyContractsScreen);