import React from 'react'
import { connect } from 'react-redux'
import SmurfCard from './SmurfCard'

function SmurfContainer(props){
  return (
    <div>
      {props.village.map(user => {
        return <SmurfCard user={user} key={user.id} />
      })}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    village: state.village
  }
}

export default connect(mapStateToProps, {})(SmurfContainer)