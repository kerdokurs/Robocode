const firebase = require('firebase/app');
require('firebase/firestore');
require('firebase/auth');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fs = require('fs');
const { join } = require('path');

const { cols } = require('./cols');
const { formatDate } = require('./date');

const firebaseConfig = {
  apiKey: 'AIzaSyBf4sLDxhBSeEM0YfZfdnSAotRHlCkjvL8',
  authDomain: 'robocode-evt.firebaseapp.com',
  projectId: 'robocode-evt',
  storageBucket: 'robocode-evt.appspot.com',
  messagingSenderId: '778695771583',
  appId: '1:778695771583:web:1354991abb6bcec7eb0d0a',
  measurementId: 'G-S6K4EFX215',
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();

async function main() {
  console.log('Logi sisse:');
  console.log('-----------');

  rl.question('Email: ', (email) => {
    rl.question('Parool: ', async (pass) => {
      await auth.signInWithEmailAndPassword(email, pass).catch((err) => {
        console.error(err);
        rl.close();
        return;
      });

      const teams = await firestore
        .collection('registered')
        .orderBy('created_at', 'asc')
        .get()
        .then((snap) =>
          snap.docs
            .map((doc) => doc.data())
            .map((data) => ({
              ...data,
              created_at: formatDate(data.created_at.toDate()),
            }))
        );

      let data = cols.map((col) => col.title).join(',') + '\n';

      data += teams
        .map((team) => cols.map((col) => team[col.id]).join(','))
        .join('\n');

      fs.writeFileSync(join(__dirname, 'teams.csv'), data, {
        encoding: 'utf-8',
        flag: 'w',
      });

      console.log('Tiimid eksporditud!');

      auth.signOut();

      rl.close();
    });
  });
}

main();
