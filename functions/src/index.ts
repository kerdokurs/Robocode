import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const sendConfirmation = functions
  .region('europe-west1')
  .firestore.document('registered/{regId}')
  .onCreate((snap, ctx) => {
    const { team_name, captain_email } = snap.data();

    return admin
      .firestore()
      .collection('mail')
      .add({
        to: captain_email,
        template: {
          name: 'reg_ok',
          data: {
            team_name,
          },
        },
      });
  });
