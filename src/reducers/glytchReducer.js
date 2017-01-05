import initialState from "./initialState";
import types from "../actions/actionTypes";

export default function glytchReducer(state = initialState.glytch, action) {
  switch (action.type) {
    case types.LOAD_IMAGES_SUCCESS:
      return Object.assign({}, state, {
        images: action.images
      });

    case types.SELECT_IMAGE_SUCCESS:
      return Object.assign({}, state, {
        currentImage: action.image
      });

    case types.UPLOAD_IMAGE_SUCCESS:
      return Object.assign({}, state,
        { images: [
          ...state.images,
          Object.assign({}, action.image)
          ]
        });


/*
    case types.CREATE_TRACK_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.track)
      ];
*/


    /*case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter((course) => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    */

    default:
      return state;
  }
}
