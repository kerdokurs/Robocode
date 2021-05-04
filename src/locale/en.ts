export default {
  nav: {
    guide: 'Guide',
    rules: 'Rules',
    archive: 'Archive',
  },
  index: {
    main: {
      header: 'Put your skills to the test at Robocode!',
      subheader:
        'Test your programming skills at a well-known programming event Robocode! Register your team today!',
      register: 'Register',
    },
    side: {
      header: 'What is Robocode?',
      paragraphs: [
        'Robocode is a programming game in which the players have the objective to code a battletank that which will fight against other tanks on the battlefield.',
        'The player is only the programmer - they will not have any direct impact on the course of the battle. The player must write the AI which defines the behaviour and reactions of the tank according to the current events on the battlefield.',
        'The battle on the battlefield will take place in real time. The programmed tanks will battle until only one of them is left.',
      ],
      more: 'Want more information?',
    },
  },
  ask: {
    header: 'For questions fill in the following form',
    name: 'Name',
    name_must: 'Name must contain at least',
    name_char: 'characters',
    email: 'Email',
    email_correct: 'Enter a valid email',
    question: 'Question',
    question_must: 'Question must contain at least',
    question_char: 'characters',
    ask: 'Ask!',
    success: 'Question has been successfully delivered!',
    respond: "We'll answer you as soon as possible!",
  },
  register: {
    header: 'Register',
    team_name: 'Team name',
    team_name_must: 'Team name must contain at least',
    team_name_char: 'characters',
    captain_name: 'Captain name',
    captain_name_must: 'Captain name must contain at least',
    captain_name_char: 'characters',
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
        'The prize pool is 1000 €: 500 € for the first, 300 € for the second, and 200 € for the third place. VAT will be added to the prize.',
        'Participating teams must have 1-5 members.',
        'Each participating team must have at least one member studying in an Estonian university.',
        'Registration deadline is on the 12th of May 2021.',
        'The team must participate in the virtual final battle with their pre-programmed machine on the 16th of May 2021. Unrepresented teams will be disqualified.',
        'Each team must grant access to the code. By what time and to whom will be assigned by the organisers. Each code must pass through a plagiarism control where they will be compared to both other contestants and already well-known code. All plagiarized works will be revoked.',
        'The submission deadline for the code is <b>12th of May 23:59</b>. The code must be uploaded to a private repository (GitHub, Bitbucket, GitLab etc) and reading access must be given to <b>peetertarvas[at]gmail.com</b> ja <b>h.zuppur[at]gmail.com</b>. The link to the repository must also be sent to these addresses. The code will also go through a plagiarism control and the robots will be integrated to the battle environment. All plagiarised works will be revoked.',
      ],
    },
    tech: {
      header: 'Technical',
      rules: [
        'The code must be written using the latest framework version of Robocode (<b>1.9.4</b>).',
        'Coded tanks must compete in a duel on a battleground with the size of 800x800 pixels. The team with most battles won in a match will advance to the next round.',
        'First three places will be determined in a “1vs1” competition.',
        'A “free for all” will take place, the last man standing will be announced as the winner.',
      ],
    },
  },
  archive: {
    title: 'Archive',
    livestream: 'livestream',
    winner: 'Winner',
    participants: 'Participants',
  },
};
