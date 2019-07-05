import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EmployeeList from '../../components/employee/EmployeeList'
import { clearEmployeeList, requestEmployeeList } from '../../actions'

function mapStateToProps(state) {
  return {
    employeeList: state.employeeList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      requestEmployeeList,
      clearEmployeeList
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeList)
