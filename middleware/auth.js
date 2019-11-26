// export default function ({ store, redirect }) {
//     console.log('1111')
//     // If the user is not authenticated
//     if (!store.state.authenticated) {
//       return redirect('/login')
//     }
//   }
export default function (context) {
    // console.log(context)
    context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  }