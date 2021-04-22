import * as functions from 'firebase-functions';
import * as mail from '@sendgrid/mail';

export const sendConfirmation = functions
  .region('europe-west1')
  .firestore.document('registered/{regId}')
  .onCreate((snap, ctx) => {
    const { team_name, captain_email } = snap.data();

    mail.setApiKey(functions.config().sg.key);
    return mail
      .send({
        to: captain_email,
        from: 'kerdo@kerdo.me',
        templateId: 'd-44b1bd7379a9404fb524f985957b1b85',
        dynamicTemplateData: {
          team_name,
        },
      })
      .then(() => {
        functions.logger.info(`Email to ${captain_email} sent!`);
      })
      .catch((err) => {
        functions.logger.error('Error sending email', err);
      });
  });
