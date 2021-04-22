export default {
  nav: {
    guide: 'Guide',
    rules: 'Rules',
  },
  index: {
    main: {
      header: "Pane end proovile Robocode'il!",
      subheader:
        'Tule tõesta oma progemisoskusi tuntud võistlusprogrammeerimisüritusel - Robocode! Registreeru koos oma tiimiga!',
      register: 'Register',
    },
    side: {
      header: 'What is Robocode?',
      paragraphs: [
        'Robocode on programmeerimismäng, kus mängija ülesandeks on kirjutada lahingutank, mis võistleb lahinguväljal teiste tankide vastu.',
        'Mängija on roboti programmeerija, kellel ei ole mängu toimumise ajal mingit otsest mõju mängukursile. Mängija peab kirjutama roboti AI, mis määrab roboti käitumise ja reageerimise lahinguväljal toimuvatele sündmustele.',
        'Võistlemine lahinguväljal toimub reaalajas, kus kuuerattalised automatiseeritud tankid võitlevad niikaua, kuni ainult võitja jääb järele.',
      ],
    },
  },
  ask: {
    header: 'For questions fill in the following form',
    name: 'Name',
    name_must: 'Name must contain at least',
    name_char: 'ascii-numeric characters',
    email: 'Email',
    email_correct: 'Enter a valid email',
    question: 'Question',
    question_must: 'Question must contain at least',
    question_char: 'ascii-numeric characters',
    ask: 'Ask!',
    success: 'Question has been successfully delivered!',
    respond: "We'll answer you as soon as possible!",
  },
  register: {
    header: 'Register',
    team_name: 'Team name',
    team_name_must: 'Team name must contain at least',
    team_name_char: 'ascii-numeric characters',
    captain_name: 'Captain name',
    captain_name_must: 'Captain name must contain at least',
    captain_name_char: 'ascii-numeric characters',
    captain_email: 'Captain email',
    captain_email_correct: 'Enter a valid email',
    members: 'Members',
    member: 'Member',
    school: {
      school: 'School',
      choose: 'Choose',
      tu: 'University of Tartu',
      ttu: 'TalTech',
      tlu: 'University of Tallinn',
      other: 'Other',
      specify: 'Specify',
      hint: 'Please specify',
    },
    submit: 'Send!',
    successful: 'You have been successfully registered!',
    be_there: 'Be sure to attend the live event!',
    mail:
      'We have also sent you a confirmation email. You might have to check your spam folder.',
    error: 'Unknown error',
  },
  guide: {
    header: 'Guide',
    text:
      'Here is the starting guide for Robocode 2020 which can get you off the ground this year also.',
  },
  rules: {
    header: 'Rules',
    participating: {
      header: 'Participating',
      rules: [
        'Võistlusel saab osaleda 1-5-liikmeline võistkond.',
        'Võistkonnas peab olema vähemalt üks Eesti ülikooli üliõpilane.',
        'Võistkonna osalemine tuleb registreerida hiljemalt 12. mai 2021.',
        'Võistkond peab oma eelprogrammeeritud võistlusmasinaga osalema 16.05.2021 virtuaalselt toimuval lõppvõistlusel. Esindamata võistkonnad diskvalifitseeritakse.',
        'Võistkond peab korraldaja antud ajaks andma korraldaja määratud isikule juurdepääsu koodile. Kood peab läbima plagiaadikontrolli nii teiste võistlejate kui ka levinud teiste võistlusmasinate suhtes. Plagiaadi tuvastamisel tulemused tühistatakse.',
      ],
    },
    tech: {
      header: 'Technical',
      rules: [
        'Kood peab olema kirjutatud, kasutades Robocode’i viimast frameworki versiooni <b>1.9.4</b>',
        'Võistkondade võistlusmasinad peavad võistlema üks ühe vastu lahinguväljal mõõtmetega 800x800 pikslit. Järgmisse vooru pääseb matšis enim lahinguid võitnud võistkond',
        'Toimub "1vs1" võistlus, kus selgitatakse välja esikolmik.',
        'Toimub "kõik kõigi vastu", kus viimane ellujääja on võitja.',
      ],
    },
  },
};
