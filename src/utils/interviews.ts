import AnnetteBlack from '../assets/img/AnnetteBlack.svg';
import DianneRussell from '../assets/img/DianneRussell.svg';
import DavidJohnson from '../assets/img/DavidJohnson.svg';
import AdamBillie from '../assets/img/AdamBillie.svg';

export const interviews = {
  lugahInterviews: [
    {
      id: 1,
      fullName: 'Annette Black',
      img: AnnetteBlack,
      age: 25,
      occupation: 'Business Developer',
      technicalAbility: 'Master',
      description:
        'I have to wait several minutes on the phone and endure being put on hold just to get an answer to a problem I have. It would be nice to able to talk to someone online. The whatsapp bot is supposed to help with this but last time, I didn’t get a reply till the afternoon of the next day.',
    },
    {
      id: 2,
      fullName: 'Dianne Russell',
      age: 29,
      img: DianneRussell,
      occupation: 'Assistant Manager',
      technicalAbility: 'Master',
      description:
        'The interface of my bank application is overly complicated. Even with the new re-design. I was hoping they would take out some things and present users with the most important features first. But they just keep adding more features and no way to hide them.',
    },
    {
      id: 3,
      fullName: 'David Johnson',
      age: 50,
      img: DavidJohnson,
      occupation: 'Business Woman',
      technicalAbility: 'Good',
      description:
        'Opening an account is stressful for me. My daughter told me about some digital bank app I could use to save money conveniently. But had to go through so many form questions which got me tired as it required my 100% attention.',
    },
  ],
  agentBookInterviews: [
    {
      id: 1,
      fullName: 'Adam Billie',
      age: 37,
      img: AdamBillie,
      occupation: 'Real-estate agent',
      technicalAbility: 'Master',
      biography:
        'Adam currently lives with his family in Brampton, Ontario. He is a local Agent working with Kaleidico Realty. With over 8years of experience in buying and selling of houses, Adam prides himself in giving his clients the utmost satisfication. He currently uses Facebook and LinkedIn to widen his clientele reach but that is still not enough as he is usually busy atimes with family and hardly can keep up with posting on two platforms.',
      needs: [
        'A profound online presence that markets him appropriately.',
        'A single go-to online profile with up-to-date information about his lisitngs and credibility through client reviews.',
      ],
      painPoints: [
        'Managing several profile accounts and keeping them updated',
        'Low client reach',
      ],
    },
  ],
};
