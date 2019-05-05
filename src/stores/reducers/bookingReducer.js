const initState = {
  isFetching: false,
  bookings: [
    {
      eventName: 'Seminar',
      vendorName: 'Avina Medica',
      companyName: 'Pero Pero',
      date: ['2018-02-01', '2019-03-01', '2019-03-21'],
      status: 'approved',
      createdAt: '2018-01-01'
    },
    {
      eventName: 'Medical Check-up',
      vendorName: 'Avina Medica',
      companyName: 'Pero Pero',
      date: ['2018-02-01', '2019-03-01', '2019-03-21'],
      status: 'pending',
      createdAt: '2018-01-01'
    },
    {
      eventName: 'Nobar',
      vendorName: 'Avina Medica',
      companyName: 'Pero Pero',
      date: ['2018-02-01', '2019-03-01', '2019-03-21'],
      status: 'rejected',
      createdAt: '2018-01-01'
    },
  ]
}

export const bookingReducer = (state=initState, action) => {
  return state
}