import messageReducer from './messageReducer';
import * as actions from '../actions/actionCreators';

const mockData = [
  {
    avatar: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    date: '2016-03-01T17:58:25Z',
    email: 'hharrisonj@github.io',
    firstName: 'Henry',
    id: 'c4e9dc15-8051-4e30-832f-3dc588aada74',
    lastName: 'Harrison',
    message:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    userId: '0d9496c4-2490-40e6-a0c3-0964e371f1ab',
  },
  {
    avatar: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    date: '2016-09-13T15:19:07Z',
    email: 'hharrisonj@github.io',
    firstName: 'Henry',
    id: '79a48727-0e75-49c0-843f-ef80a2bd4f11',
    lastName: 'Harrison',
    message: 'Vestibulum rutrum rutrum neque.',
    userId: '0d9496c4-2490-40e6-a0c3-0964e371f1ab',
  },
];

describe('Messega Reducer', () => {
  it('should update store with the new state', () => {
    const initialState = [];
    const action = actions.dataAfterTransformation(mockData);

    const newstate = messageReducer(initialState, action);
    expect(newstate.length).toBe(2);
  });
});
