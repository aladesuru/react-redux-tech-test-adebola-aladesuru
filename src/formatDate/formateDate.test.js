import { formatDate } from './formatDate';

describe('Format Date', () => {
  it('should format date to human readable form', () => {
    const messageDate = formatDate('2017-02-09T04:27:38Z');
    expect(messageDate).toEqual('9 February 2017 4:27');
  });
});
