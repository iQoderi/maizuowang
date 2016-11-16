/**
 *
 * Created by qoder on 16/11/15.
 */
import * as types from './mutation-type';
export const changeLeftNavState = ({commit}, isShow)=> {
  commit(types.CHANGE_LEFTNAV_STATE, isShow)
}
