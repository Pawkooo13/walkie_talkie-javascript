const GET_CHANNEL_LIST_REQUEST = 'GET_CHANNEL_LIST_REQUEST';
const GET_CHANNEL_LIST_SUCCESS = 'GET_CHANNEL_LIST_SUCCESS';
const GET_CHANNEL_LIST_FAILURE = 'GET_CHANNEL_LIST_FAILURE';

const POST_CHANNEL_REQUEST = 'POST_CHANNEL_REQUEST';
const POST_CHANNEL_SUCCESS = 'POST_CHANNEL_SUCCESS';
const POST_CHANNEL_FAILURE = 'POST_CHANNEL_FAILURE';

const CONNECT_CHANNEL_REQUEST = 'CONNECT_CHANNEL_REQUEST';
const CONNECT_CHANNEL_SUCCESS = 'CONNECT_CHANNEL_SUCCESS';
const CONNECT_CHANNEL_FAILURE = 'CONNECT_CHANNEL_FAILURE';

const DISCONNECT_CHANNEL_REQUEST = 'DISCONNECT_CHANNEL_REQUEST';
const DISCONNECT_CHANNEL_SUCCESS = 'DISCONNECT_CHANNEL_SUCCESS';
const DISCONNECT_CHANNEL_FAILURE = 'DISCONNECT_CHANNEL_FAILURE';

const DELETE_CHANNEL_REQUEST = 'DELETE_CHANNEL_REQUEST';
const DELETE_CHANNEL_SUCCESS = 'DELETE_CHANNEL_SUCCESS';
const DELETE_CHANNEL_FAILURE = 'DELETE_CHANNEL_FAILURE';

const JOIN_CHANNEL = 'JOIN_CHANNEL';
const LEAVE_CHANNEL = 'LEAVE_CHANNEL';
const CREATE_CHANNEL = 'CREATE_CHANNEL';
const DELETE_CHANNEL = 'DELETE_CHANNEL';
const DELETE_ID_FROM_STATE_ACTION = 'DELETE_ID_FROM_STATE_ACTION';

const CONNECT_TO_VOICE_CHANNEL_REQUEST = 'CONNECT_TO_VOICE_CHANNEL_REQUEST';
const CONNECT_TO_VOICE_CHANNEL_SUCCESS = 'CONNECT_TO_VOICE_CHANNEL_SUCCESS';
const CONNECT_TO_VOICE_CHANNEL_FAILURE = 'CONNECT_TO_VOICE_CHANNEL_FAILURE';

const DISCONNECT_FROM_VOICE_CHANNEL_REQUEST =
  'DISCONNECT_FROM_VOICE_CHANNEL_REQUEST';
const DISCONNECT_FROM_VOICE_CHANNEL_SUCCESS =
  'DISCONNECT_FROM_VOICE_CHANNEL_SUCCESS';
const DISCONNECT_FROM_VOICE_CHANNEL_FAILURE =
  'DISCONNECT_FROM_VOICE_CHANNEL_FAILURE';

const types = {
  GET_CHANNEL_LIST_REQUEST,
  GET_CHANNEL_LIST_SUCCESS,
  GET_CHANNEL_LIST_FAILURE,
  POST_CHANNEL_REQUEST,
  POST_CHANNEL_SUCCESS,
  POST_CHANNEL_FAILURE,
  CONNECT_CHANNEL_REQUEST,
  CONNECT_CHANNEL_SUCCESS,
  CONNECT_CHANNEL_FAILURE,
  DISCONNECT_CHANNEL_REQUEST,
  DISCONNECT_CHANNEL_SUCCESS,
  DISCONNECT_CHANNEL_FAILURE,
  DELETE_CHANNEL_REQUEST,
  DELETE_CHANNEL_SUCCESS,
  DELETE_CHANNEL_FAILURE,
  JOIN_CHANNEL,
  LEAVE_CHANNEL,
  CONNECT_TO_VOICE_CHANNEL_REQUEST,
  CONNECT_TO_VOICE_CHANNEL_SUCCESS,
  CONNECT_TO_VOICE_CHANNEL_FAILURE,
  DISCONNECT_FROM_VOICE_CHANNEL_REQUEST,
  DISCONNECT_FROM_VOICE_CHANNEL_SUCCESS,
  DISCONNECT_FROM_VOICE_CHANNEL_FAILURE,
  CREATE_CHANNEL,
  DELETE_CHANNEL,
  DELETE_ID_FROM_STATE_ACTION,
};

export default types;
