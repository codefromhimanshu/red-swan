import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EmployeeDetail from '../../components/employee/EmployeeDetail'
import { clearEmployeeDetail, requestEmployeeDetail } from '../../actions'

function mapStateToProps(state) {
  return {
    employeeDetail: state.employeeDetail
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      clearEmployeeDetail,
      requestEmployeeDetail
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeDetail)
