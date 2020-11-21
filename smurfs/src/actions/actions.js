export const UPDATE_SMURFS = 'UPDATE_SMURFS';

export function updateSmurfs(newSmurf) {
  return {
    type: UPDATE_SMURFS,
    payload: newSmurf
  }
}