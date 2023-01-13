export const EditStart = (userCredentials) => ({
  type: "APP_START",
});

export const EditSuccess = (item) => ({
  type: "EDIT_SUCCESS",
  payload: item,
});
