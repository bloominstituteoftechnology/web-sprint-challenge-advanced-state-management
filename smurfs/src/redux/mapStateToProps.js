export const mapStateToProps = (state) => {
    return {
      smurfs: state.smurfs,
      isLoading: state.isLoading,
      error: state.error
    }
}