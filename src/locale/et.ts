export default {
  nav: {
    guide: 'Juhend',
    rules: 'Reeglid',
    archive: 'Arhiiv',
  },
  index: {
    main: {
      header: "Pane end proovile Robocode'il!",
      subheader:
        'Tule tõesta oma progemisoskusi tuntud võistlusprogrammeerimisüritusel - Robocode! Registreeru koos oma tiimiga!',
      register: 'Registreerimine',
    },
    side: {
      header: 'Mis on Robocode?',
      paragraphs: [
        'Robocode on programmeerimismäng, kus mängija ülesandeks on kirjutada lahingutank, mis võistleb lahinguväljal teiste tankide vastu.',
        'Mängija on roboti programmeerija, kellel ei ole mängu toimumise ajal mingit otsest mõju mängukursile. Mängija peab kirjutama roboti AI, mis määrab roboti käitumise ja reageerimise lahinguväljal toimuvatele sündmustele.',
        'Võistlemine lahinguväljal toimub reaalajas, kus kuuerattalised automatiseeritud tankid võitlevad niikaua, kuni ainult võitja jääb järele.',
      ],
      more: 'Soovid rohkem infot?',
    },
  },
  ask: {
    header: 'Lisaküsimuste korral täida vorm',
    name: 'Nimi',
    name_must: 'Nimi peab sisaldama vähemalt',
    name_char: 'tähemärki',
    email: 'Email',
    email_correct: 'Sisesta korrektne email',
    question: 'Küsimus',
    question_must: 'Küsimus peab sisaldama vähemalt',
    question_char: 'tähemärki',
    ask: 'Küsi!',
    success: 'Küsimus edukalt esitatud!',
    respond: 'Vastame esimesel võimalusel!',
  },
  register: {
    header: 'Registreeri',
    team_name: 'Tiimi nimi',
    team_name_must: 'Tiiminimi peab sisaldama vähemalt',
    team_name_char: 'tähemärki',
    captain_name: 'Kapteni nimi',
    captain_name_must: 'Nimi peab sisaldama vähemalt',
    captain_name_char: 'tähemärki',
    captain_email: 'Kapteni email',
    captain_email_correct: 'Sisesta korrektne email',
    members: 'Liikmed',
    member: 'Liige',
    school: {
      school: 'Kool',
      choose: 'Vali kool',
      tu: 'Tartu Ülikool',
      ttu: 'TalTech',
      tlu: 'Tallinna Ülikool',
      other: 'Muu',
      specify: 'Täpsusta',
      hint: 'Palun täpsusta',
    },
    submit: 'Esita!',
    successful: "Oled robocode'ile edukalt registreerunud!",
    be_there: 'Ole kindlasti võistlusel kohal!',
    mail:
      'Saatsime sulle meilile ka kinnituse. Võib-olla pead kontrollima spämm-kausta.',
    error: 'Tundmatu viga',
  },
  guide: {
    header: 'Juhend',
    text:
      "Siin on 2020. aasta Robocode'i juhend, mis aitab esimesed sammud teha ka sel aastal.",
  },
  rules: {
    header: 'Reeglid',
    participating: {
      header: 'Osalemine',
      rules: [
        'Auhinnafond on 1000 €:, 500 € esimesele, 300 € teisele ja 200 € kolmandale kohale. Auhinna rahale lisandub tulumaks.',
        'Võistlusel saab osaleda 1-5-liikmeline võistkond.',
        'Võistkonnas peab olema vähemalt üks Eesti ülikooli üliõpilane.',
        'Võistkonna osalemine tuleb registreerida hiljemalt 12. mai 2021.',
        'Võistkond peab oma eelprogrammeeritud võistlusmasinaga osalema 16.05.2021 virtuaalselt toimuval lõppvõistlusel. Esindamata võistkonnad diskvalifitseeritakse.',
        'Koodi esitamise tähtaeg on <b>12. mai 23:59</b>. Kood tuleb üles laadida privaatsesse repositooriumisse (GitHub, Bitbucket, GitLab vm) ning lugemisõigus anda järgmistele aadressidele: <b>peetertarvas[ät]gmail.com</b> ja <b>h.zuppur[ät]gmail.com</b>. Lõpuks tuleb saata koodi repositooriumi link samadele emailidele. Kood läbib ka plagiaadikontrolli ning robotid integreeritakse võistluskeskkonnaga. Plagiaadi tuvastamisel tulemused tühistatakse.',
      ],
    },
    tech: {
      header: 'Tehniline pool',
      rules: [
        'Kood peab olema kirjutatud, kasutades Robocode’i viimast frameworki versiooni <b>1.9.4</b>',
        'Võistkondade võistlusmasinad peavad võistlema üks ühe vastu lahinguväljal mõõtmetega 800x800 pikslit. Järgmisse vooru pääseb matšis enim lahinguid võitnud võistkond',
        'Toimub "1vs1" võistlus, kus selgitatakse välja esikolmik.',
        'Toimub "kõik kõigi vastu", kus viimane ellujääja on võitja.',
      ],
    },
  },
  archive: {
    title: 'Arhiiv',
    livestream: 'otseülekanne',
    winner: 'Võitja',
    participants: 'Osalejad',
  },
};
