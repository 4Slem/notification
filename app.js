navigator.serviceWorker.register('serviceworker.js').then(
    function(serviceWorkerRegistration) {
      serviceWorkerRegistration.pushManager.subscribe().then(
        function(pushSubscription) {
          console.log(pushSubscription.endpoint);
          console.log(pushSubscription.getKey('p256dh'));
          console.log(pushSubscription.getKey('auth'));
          // The push subscription details needed by the application
          // server are now available, and can be sent to it using,
          // for example, an XMLHttpRequest.
        }, function(error) {
          // During development it often helps to log errors to the
          // console. In a production environment it might make sense to
          // also report information about errors back to the
          // application server.
          console.log(error);
        }
      );
    });